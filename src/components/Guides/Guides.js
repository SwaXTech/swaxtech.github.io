import React, { useEffect, useState } from "react";
import { Container, ProgressBar, Spinner } from "react-bootstrap";
import Particle from "../Particle";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

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
  }, []);

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
          :
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeSlug,rehypeAutolinkHeadings]}
            className="markdown-body"

          >
            {md}
          </ReactMarkdown>}
        </Container>
      </Container>
    </section>
  );
}

export default Guides;
