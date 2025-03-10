import ReactMarkdown from "react-markdown";
import { H1, H2, H3, H4, H5, Table, Paragraph } from "@vandebron/windmolen";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const getNodeHeadingId = (node) => {
    return node?.children[0]?.value?.toLowerCase().replace(/\s+/g, '-');
}

export default function Markdown({children}) {
    return (
        <ReactMarkdown
            children={children}
            rehypePlugins={[rehypeRaw, remarkGfm]}
            components={{
                hr: React.Fragment,
                h1: ({children}) => {
                    return <H1>{children}</H1>;
                },
                h2: ({children, node}) => {
                    const id = getNodeHeadingId(node);
                    return <H2 id={id}>{children}</H2>;
                },
                h3: ({children}) => {
                    return <H3>{children}</H3>;
                },
                h4: ({children}) => {
                    return <H4>{children}</H4>;
                },
                h5: ({children}) => {
                    return <H5>{children}</H5>;
                },
                p: (props) => <Paragraph {...props} />,
                ol: ({children}) => (
                    <ol style={{marginBlockStart: 0, marginBlockEnd: 30}}>
                        {children}
                    </ol>
                ),
                ul: ({children}) => (
                    <ol style={{marginBlockStart: 0, marginBlockEnd: 30}}>
                        {children}
                    </ol>
                ),
                li: ({children}) => (
                    <Paragraph as="li" style={{marginBottom: 0}}>
                        {children}
                    </Paragraph>
                ),
                a: ({children, ...props}) =>
                    (<a {...props} style={{color: "inherit"}}
                        target={'target' in props || props['href'].includes('#') ? undefined : '_blank'}>
                        {children}
                    </a>),

                code: ({node, inline, className, children, ...props}) => {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <SyntaxHighlighter style={okaidia} language={match[1]} PreTag="div"
                                           children={String(children).replace(/\n$/, '')} {...props} />
                    ) : (
                        <code className={className} {...props} style={{
                            background: "rgb(0,0,0, 0.1)",
                            padding: "2px 4px",
                            fontSize: "80%",
                            color: "#000",
                        }}>
                            {children}
                        </code>
                    )
                },
                img: ({src, alt, ...props}) => (<img src={src} alt={alt} style={{width: "100%"}} {...props}/>),
                table: ({children, className, style}) => {
                    return (
                        <Table tableStyle='solid-borders' className={className}
                            style={{
                                'borderCollapse': 'collapse',
                                'marginBottom': '5%',
                                'fontSize': '18px',
                                'border': 'none',
                                ...style
                            }}
                            align='center'>{children}
                        </Table>
                    );
                },
                thead: ({children, style}) => (<Table.Thead style={{'color': 'black', ...style}}>{children}</Table.Thead>),
                tbody: ({children, style}) => (<Table.Tbody style={style}>{children}</Table.Tbody>),
                tr: ({children, style}) => (<Table.Row style={{...style}}>{children}</Table.Row>),
                td: ({children, style, ...rest}) => (<Table.Cell {...rest} style={style}>{children}</Table.Cell>),
                th: ({children, style}) => (<Table.Cell style={style}>{children}</Table.Cell>),

            }}
        />
    );
}
