import sbt._

object Libraries {

  object Version {
    final val scalaTest     = "3.2.12"
    final val scalaVersion  = "2.12.15"
    final val slickVersion  = "3.3.3"
    final val h2Version     = "2.1.212"
    final val flywayVersion = "8.5.10"
    final val logbackVersion = "1.2.11"
  }

  lazy val scalatest: Seq[ModuleID] = Seq(
    "org.scalatest" %% "scalatest" % Version.scalaTest % Test
  )

  lazy val slick: Seq[ModuleID] = Seq(
    "com.typesafe.slick" %% "slick"          % Version.slickVersion,
    "com.typesafe.slick" %% "slick-hikaricp" % Version.slickVersion
  )

  lazy val database: Seq[ModuleID] = Seq(
    "com.h2database" % "h2" % Version.h2Version
  )

  lazy val flywayDependencies: Seq[ModuleID] = Seq(
    "org.flywaydb" % "flyway-core" % Version.flywayVersion
  )

  lazy val logging = Seq(
    "ch.qos.logback" % "logback-classic" % Version.logbackVersion
  )

}
