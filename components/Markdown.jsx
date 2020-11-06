import ReactMarkdown from "react-markdown";
import { H1, H2, H3, H4, H5, Paragraph } from "@vandebron/windmolen";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Markdown({ children }) {
  return (
    <ReactMarkdown
      source={children}
      renderers={{
        thematicBreak: React.Fragment,
        heading: ({ children, level }) => {
          const levels = {
            1: H1,
            2: H2,
            3: H3,
            4: H4,
            5: H5,
          };

          const Heading = levels[level];

          return <Heading>{children}</Heading>;
        },
        paragraph: (props) => <Paragraph {...props} />,
        list: ({ children }) => (
          <ul style={{ marginBlockStart: 0, marginBlockEnd: 30 }}>
            {children}
          </ul>
        ),
        listItem: ({ children }) => (
          <Paragraph as="li" style={{ marginBottom: 0 }}>
            {children}
          </Paragraph>
        ),
        link: ({ children, ...props }) => (
          <a {...props} style={{ color: "inherit" }}>
            {children}
          </a>
        ),
        code: ({ language, value }) => (
          <>
            <SyntaxHighlighter
              language={language}
              style={okaidia}
              children={value}
            />
            <br />
          </>
        ),
        inlineCode: ({ children }) => (
          <code
            style={{
              background: "rgb(0,0,0, 0.1)",
              padding: "2px 4px",
              fontSize: "80%",
              color: "#000",
            }}
          >
            {children}
          </code>
        ),
        image: ({ alt, src }) => (
          <img src={src} alt={alt} style={{ width: "100%" }} />
        ),
      }}
    />
  );
}
