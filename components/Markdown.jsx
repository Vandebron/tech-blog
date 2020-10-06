import ReactMarkdown from "react-markdown";
import { H1, H2, H3, H4, H5, Image, Paragraph } from "@vandebron/windmolen";
import CodeBlock from "./CodeBlock";

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
        paragraph: Paragraph,
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
        code: CodeBlock,
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
        image: ({ alt, src, children}) => <Image src={src} alt={alt}>{children}</Image>,
      }}
    />
  );
}
