import ReactMarkdown from "react-markdown";
import { H1, H2, H3, H4, H5, Paragraph } from "@vandebron/windmolen";

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
      }}
    />
  );
}
