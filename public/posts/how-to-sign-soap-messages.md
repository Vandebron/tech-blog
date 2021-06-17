---
title: How to sign SOAP messages and signature verification
description: 
createdAt: 2021-06-17
coverImage: images/soap.jpg
imageSource: https://cdn.pixabay.com/photo/2020/03/15/18/36/wash-4934590_960_720.jpg
tags: SOAP, xml, scala, wss4j, signature, verification
author: Katrin Grunert
---
# Signing and verfiying SOAP-messages with wss4j and Scala

SOAP is not dead. It is an established, XML-based and mature messaging protocol that comes with built-in security mechanisms, integrity checks, content validation and much more. A lot of enterprises and corporations are using it ~~sadly~~ still.
Just recently, Vandebron had to implement a SOAP client to communicate with an external party. 
This blogpost will explain with code examples how we at Vandebron are signing and verifying SOAP messages for our latest SOAP-client implementation. 

For this process we are using Apache's Web Service Security Library [wss4j](https://ws.apache.org/wss4j/) as it is a proven tool in the WSS context and provides, as a Java library, great interoperability with the programming language Scala.

## Signing SOAP messages

Here we will take a look at the necessary steps to sign a SOAP-message like this one:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header/>
  <soapenv:Body>
    <heading>Hello World</heading>
    <body>I am just a test</body>
  </soapenv:Body>
</soapenv:Envelope>
```
To look after signing like this:
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Header>
    <wsse:Security 
    soapenv:mustUnderstand="1" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
      <ds:Signature 
      Id="SIG-ec946953-2470-4689-ad2f-0c579e1e06e3" xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
        <ds:SignedInfo>
          <ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#">
            <ec:InclusiveNamespaces PrefixList="soapenv" xmlns:ec="http://www.w3.org/2001/10/xml-exc-c14n#"/>
          </ds:CanonicalizationMethod>
          <ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/>
          <ds:Reference URI="#id-47817454-f6e2-470c-9109-870e7895e3e0">
            <ds:Transforms>
              <ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/>
            </ds:Transforms>
            <ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/>
            <ds:DigestValue>7KfPcTwDYWtLj4ZVWmWmVqX4IGwbBAAmUPigCdXdk4U=</ds:DigestValue>
          </ds:Reference>
        </ds:SignedInfo>
        <ds:SignatureValue>
          OBnbBWv8S70xDDn5uG++7cTRFa2Uz3D47oxTHuO163Y3/V7H35M1GHXbKaUDOHsgsfx3SdVmVi++ra06cpwJknzqoIQgDV9Qc0ydzfxljCqupPKBnfONDYJtihEE1jtQ0RP7OLzPVNUpgOgHqbLwJu2pRUA05ool+lxIs924OwPVPKyUryoYwWhwY1ttY4P+WY2L3ZqsH3fgoLCyjlvhDEAhsP9PCxsEzPSq3ECC55Nh7nqMoHPj2uNxonuMlPeYbrlMnwyiqEW8s3Sc+WmfiIOgekRE1AdNhpn3ARlO490nObQtXCU/TxeTfbh98TMbQRZWWyT4HuLS3fF6aeyD/Q==
        </ds:SignatureValue>
        <ds:KeyInfo Id="KI-e18395de-9a26-4cad-9501-7c6cf6c7c74a">
          <wsse:SecurityTokenReference wsu:Id="STR-daa47836-f1f9-4d71-95cc-b7bcc6051c84">
            <wsse:KeyIdentifier 
            ValueType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-x509-token-profile-1.0#X509SubjectKeyIdentifier" EncodingType="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-soap-message-security-1.0#Base64Binary">
              ox4ajWTdigy9oApTYs97CuCV/4k=
            </wsse:KeyIdentifier>
          </wsse:SecurityTokenReference>
        </ds:KeyInfo>
      </ds:Signature>
    </wsse:Security>
  </soapenv:Header>
  <soapenv:Body 
    wsu:Id="id-47817454-f6e2-470c-9109-870e7895e3e0" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
      <heading>Hello World</heading>
      <body>I am just a test</body>
  </soapenv:Body>
</soapenv:Envelope>
```

For implementing the steps of the blog post you will need:
- a SOAP-service you want to send messages to
- documentation of that SOAP service that describes:
    - signature algorithm
    - canonicalization method
    - digest algorithm
    - key identifier type
- a private key with which you will sign your messages
- a certificate that is the counterpart of the private key
- (optional) a pool of trusted certificates

Our private and public key pair are available in the PKCS#12-format (.p12 file extension). Check out [this](https://www.ssl.com/how-to/create-a-pfx-p12-certificate-file-using-openssl/) to learn more about this format and how to achieve it.
The pool of trusted certificates are in the [PKCS#7 format](https://www.ssl.com/guide/pem-der-crt-and-cer-x-509-encodings-and-conversions/) (.p7b file extension).

First we have to setup the necessary dependencies:

```scala
   // in your build.sbt or project/Dependencies.scala
  // enabling signing and signature verification for SOAP-messages
  lazy val webServiceSecurity = Seq(
    "org.apache.wss4j" % "wss4j"                    % "2.3.1" pomOnly (),
    "org.apache.wss4j" % "wss4j-ws-security-dom"    % "2.3.1",
    "org.apache.wss4j" % "wss4j-ws-security-common" % "2.3.1"
  )

  libraryDependencies ++= webServiceSecurity
```

Then we continue with a scala representation of our certificate we are using for signing:

```scala
  import org.apache.wss4j.dom.WSConstants
  
  // algorithm configuration
  object SigningCertificate {
    val CanonicalizationMethodURI: String = "http://www.w3.org/2001/10/xml-exc-c14n#"
    val DigestAlgorithmURI: String        = DigestMethod.SHA256
    val SignatureAlgorithmURI: String     = "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"
    val KeyIdentifierType: Int             = WSConstants.SKI_KEY_IDENTIFIER
  }

  case class SigningCertificate(keyStore: KeyStore, password: String) {
    require(
      keyStore.aliases().asScala.size == 1,
      s"Certificate of Keystore needs to have one alias but had ${keyStore.aliases().asScala.size}"
    )
    val alias: String = keyStore.aliases().nextElement()

    override def toString: String = s"SigningCertificate(alias=$alias)"
  }
```
In the documentation of the SOAP-service that you want to call should stand some information regarding the canonicalization method, signature algorithm, digest algorithm, and the key identifier type. Those are algorithms and information that define the signing process and we explained roughly now.

Before signing a message it has to be canonicalized. "Canonicalization is a method for generating a physical representation, the canonical form, of an XML document that accounts for syntactic changes permitted by the XML specification" (from [here](https://www.di-mgt.com.au/xmldsig-c14n.html)). In our case the Exclusive XML Canonicalization is used.

The digest algorithm is used to ensure the integrity of the message during the verification of a signature. The algorithm is used to calculated a hash of the signed message. It should be documented in the SOAP-service documentation. Here we will use SHA256 as a hashing algorithm.

The signature algorithm describes how the message will be signed. It can be defined in the SOAP-service documentation but in the worst case you can read this algorithm from the certificate itself by using [`keytool`](https://docs.oracle.com/en/java/javase/12/tools/keytool.html):
```
$ keytool -list -v -keystore signature.p12
Enter keystore password: ...

[...] # more information about the certificates

Signature algorithm name: SHA256withRSA # thats what we are after!

[...] # more information about the certificates
```
According to the keytool inspection we will use SHA256withRSA (http://www.w3.org/2001/04/xmldsig-more#rsa-sha256) for signing.

Last but not least, in our signature a `<KeyInfo>` element is included. This element contains information about the public key of the sender (us) and is needed for the signature verification once the message is received (read more [here](https://www.xml.com/pub/a/2001/08/08/xmldsig.html)). Since we have our public key provided we don't need to do much here. The `KeyIdentifierType` describes which form of key identifier is used to present the public key information.

Having all this information about our certificate in place, we build the mechanism to load in our signing certificate. For this, we create the object `KeyStoreBuilder`.

```scala
import java.io.{File, FileInputStream}

object KeyStoreBuilder {

  def loadSigningCertificate(signingCertificate: File, password: String): SigningCertificate = {
    val fis = new FileInputStream(signingCertificate)
    val ks: KeyStore               = KeyStore.getInstance("PKCS12")
    ks.load(fis, password.toCharArray)
    SigningCertificate(ks, password)
  } 
}
```
Bear in mind, that you probably **don't** want to version any sensitive information like private keys and passwords hard-coded or in any enironment variables, so a safe mechanism for storing/fetching passwords and certificates (like [Vault](https://www.hashicorp.com/products/vault)) should be in place.

With the signing certificate in place, we can actually start signing a message. The next code example contains quite some Java boilerplate from wss4j that is required to make the signing mechanism work.

To restrict the usage of Java classes to a small portion of our code we will firstly implement a conversion method `.toElem` inside of the companion object `SigningService`:

```scala
  import java.io.StringWriter
  import javax.xml.transform.{OutputKeys, TransformerFactory}
  import javax.xml.transform.dom.DOMSource
  import javax.xml.transform.stream.StreamResult

  import org.w3c.dom.Document

  import scala.xml.Elem

  object SigningService {
    implicit class RichDocument(document: Document) {
      private val tf = TransformerFactory.newInstance()

      def toElem: Elem =
        val transformer = tf.newTransformer()
        transformer.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, "yes");
        val stringWriter = new StringWriter()
        transformer.transform(new DOMSource(document), new StreamResult(stringWriter))
        scala.xml.XML.loadString(stringWriter.getBuffer.toString)
    }
  }
```
With that, we can convert any `Document` SOAP-message representation back to the `scala.xml`-supported  `Elem` format.

```scala
class SigningService(signingCertificate: SigningCertificate) {

  // importing our conversion method
  import SigningService.RichDocument

  /**
    * REQUIRED, otherwise it will throw:
    *
    * org.apache.wss4j.common.ext.WSSecurityException:
    * You must initialize the xml-security library correctly before you use it.
    * Call the static method "org.apache.xml.security.Init.init();"
    * to do that before you use any functionality from that library
    */
  org.apache.xml.security.Init.init()
  
  private val documentBuilderFactory = DocumentBuilderFactory.newInstance()
  private val crypto: Merlin = getCrypto

  crypto.setKeyStore(signingCertificate.keyStore)

  def signElement(elem: Elem): Elem = {
    documentBuilderFactory.setNamespaceAware(true)
    // converting Elem to Document (Scala to Java conversion)
    val doc = documentBuilderFactory.newDocumentBuilder().parse(new InputSource(new StringReader(elem.toString())))

    // WSSecHeader wraps around the document we want to sign
    val header = new WSSecHeader(doc)
    header.setMustUnderstand(true)
    header.insertSecurityHeader()

    // start building Signature, use the (wrapper) header-instance
    val builder = new WSSecSignature(header)
    builder.setUserInfo(signingCertificate.alias, signingCertificate.password)

    // setting algorithms
    builder.setSignatureAlgorithm(SigningCertificate.SignatureAlgorithmURI)
    builder.setSigCanonicalization(SigningCertificate.CanonicalizationMethodURI)
    builder.setDigestAlgo(SigningCertificate.DigestAlgorithmURI)
    builder.setKeyIdentifierType(SigningCertificate.KeyIdentifierType)
    builder.setAddInclusivePrefixes(true)

    // signing the document!
    val signedDocument = builder.build(crypto)
    // conversion back to Elem
    signedDocument.toElem
  }

  private def getCrypto: Merlin = {
    val properties = new Properties()
    properties.setProperty("org.apache.wss4j.crypto.provider", "class org.apache.ws.security.components.crypto.Merlin")
    CryptoFactory.getInstance().asInstanceOf[Merlin]
  }
}
```

Wss4j is a library that maintains an internal state during a signing process, but to avoid confusion it can be summarized as:
1. `WSSecHeader` wraps around the document to be signed
2. the WSSecHeader instance `header` will be used as part of the `WSSecSignature`-Builder
3. the WSSecSignature instance `builder` gets configured with all necessary information, which algorithms are used for signing, digesting, canonicalization, which keyidentifier should be included. Those settings an vary from webservice to webservice.

The actual signing the document, that is now nested like a babashka, is happening with the help of an instance of `Crypto`. `Crypto` will contain either a keystore or a truststore or even both. It needs to be specified in the `crypto.properties` file or a runtime which class of Crypto will be used.
 The most common one is [`Merlin`](https://ws.apache.org/wss4j/apidocs/org/apache/wss4j/common/crypto/Merlin.html).
We have decided to specify its configuration during runtime, since it is more visible than a properties file. Nevertheless, the `crypto.properties`-file needs to exist in your `resources` folder neverthless otherwise you will get a following `WSSecurityException`:
```java
  org.apache.wss4j.common.ext.WSSecurityException: No message with ID "resourceNotFound" found in resource bundle "org/apache/xml/security/resource/xmlsecurity"
  [... rest of stacktrace ...]
  Cause: java.nio.file.NoSuchFileException: crypto.properties
```

And that's it! The `KeyStoreBuilder` helps us to load a `SigningCertificate` and the `SigningService` uses this loaded certificate to sign SOAP-messages. 
A receiver of our SOAP-message has all the necessary information in our signature to verify that this message has not been tempered with and we are the original sender.

This verification is something we should also do on our side for incoming messages. So let's take a look on how we can verify the signature of received messages.

## Verification of SOAP messages

Verifiying the signature of incoming messages is equally important to ensure that the connection is secure. A verification process will tell you if the message is coming from a trusted source and has not been tampered with.

As previously mentioned we need our source of truth, a pool of trusted public keys from all parties which will receive our SOAP-messages. These build the basis of the trust store.

We will create a `TrustedCertificates` wrapper class in which we will load in the trust store and add this method to the `KeyStoreBuilder`.
```scala
case class TrustedCertificates(keyStore: KeyStore)

object KeyStoreBuilder {

    def loadTrustedCertificate(certificates: Seq[File]): TrustedCertificates = {
    val ks = KeyStore.getInstance(KeyStore.getDefaultType)
    // we just want the keystore to act as a truststore (only containing trusted certificates), so we initialize it empty
    ks.load(null, null)
    val cf = CertificateFactory.getInstance("X.509")
    certificates.foreach { file =>
      CloseableUtil.using(getClass.getResourceAsStream(file.getPath)) { fis =>
        val certPath = cf.generateCertPath(fis, "PKCS7")
        certPath.getCertificates.asScala.toList.foreach { certificate =>
          ks.setCertificateEntry(file.getName, certificate)
        }
      }
    }
    TrustedCertificates(ks)
  }
}
```
This trust store is under the hood also just a KeyStore, without containing a private key that requires a password, that's why we can initialize the KeyStore with `null`-parameters.

Now, the SigningService needs to be extended with this trusted certificates and a `verifySignatureOf`-method:

```scala
import java.io.StringReader
import java.util.Properties
import javax.xml.parsers.DocumentBuilderFactory

import org.apache.wss4j.common.crypto.{ CryptoFactory, Merlin }
import org.apache.wss4j.dom.engine.WSSecurityEngine
import org.xml.sax.InputSource

import scala.util.{Failure, Success, Try}
import scala.xml.Elem

class SigningService(signingCertificate: SigningCertificate, trustedCertificates: TrustedCertificates) {

    private val engine = new WSSecurityEngine()
    private val documentBuilderFactory = DocumentBuilderFactory.newInstance()
    private val crypto: Merlin = getCrypto

    crypto.setKeyStore(signingCertificate.keyStore)
    crypto.setTrustStore(trustedCertificates.keyStore)

    def verifySignatureOf(elem: Elem): Boolean = {
      documentBuilderFactory.setNamespaceAware(true)
      val doc = documentBuilderFactory.newDocumentBuilder().parse(new InputSource(new StringReader(elem.toString())))

      Try(engine.processSecurityHeader(doc, null, null, crypto)) match {
        case Success(_) => true
        case Failure(exception) =>
          // replace with proper logging
          println(
            s"Unsuccessful signature verification, it is most likely that the certificate used for signing is not in our Truststore: ${exception.getMessage}")
          false
      }
  }

  private def getCrypto: Merlin = {
    val properties = new Properties()
    properties.setProperty("org.apache.wss4j.crypto.provider", "class org.apache.ws.security.components.crypto.Merlin")
    CryptoFactory.getInstance().asInstanceOf[Merlin]
  }
}
```

And with that we have completed the process of signing and verifying SOAP-messages!

Here are gists, articles and documentation that inspired and helped us to figure out the signing and verification process for our SOAP-client. Feel free to check them out!

* * *

### Sources

[WSSecurityVerifier by Luis Wolff](https://gist.github.com/luiswolff/1d388ec8c1d63cfb58974a6f826bc1be) 

[WSSecuritySigner by Luis Wolff](https://gist.github.com/luiswolff/64d15a99fbb5ec4b4e90eec04b09e053)

[Unit Tests from ws-wss4j](https://github.com/apache/ws-wss4j/blob/master/ws-security-dom/src/test/java/org/apache/wss4j/dom/message/SignatureTest.java)

[An Introduction to XML Digital Signatures](https://www.xml.com/pub/a/2001/08/08/xmldsig.html)

[SOAP vs. REST](https://stackify.com/soap-vs-rest/)