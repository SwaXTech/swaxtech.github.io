import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import Particle from "../Particle";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

function Guides({path}) {

  const [loading, setLoading] = useState(true);
  const [md, setMd] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${path}/README.md`).then(
      response => response.text()
    ).then(
      text => {
        const regex = /img\/(.+)/g;
        const replaced = text.replace(regex, `${path}/img/$1`);
        console.log(replaced);
        return replaced;
      }
    ).then(
      text => setMd(text)
    ).finally(() => setLoading(false));
  }, [path]);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          {loading ? 
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Spinner
            animation="border"
            style={{
              width: "5rem",
              color: "#fff",
              height: "5rem",
            }}

            />
          </div>
          :<ReactMarkdown
          className="markdown-body"
          rehypePlugins={[rehypeRaw, rehypeSlug,rehypeAutolinkHeadings]}
          children={md}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={a11yDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />}
        </Container>
      </Container>
    </section>
  );
}

export default Guides;
