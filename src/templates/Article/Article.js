import React, { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"

// style
import "./Article.scss"

// tools
import SideNews from "../../components/tools/SidewNews/SideNews"
import Content from "../../components/tools/Content/Content"
import RecommandVideo from "../../components/tools/RecommandVideo/RecommandVideo"

export default ({ data }) => {
  // when scroll near the bottom, add news
  const [news, setNews] = useState([1, 2, 3, 4, 5])
  useEffect(() => {
    window.onscroll = function() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight / 7
      ) {
        // you're at the bottom of the page
        setTimeout(() => {
          setNews(news.concat([1, 2, 3, 4, 5]))
          console.log(news)
        }, 500)
      }
    }
  }, [news])

  return (
    <Layout>
      <div id="header-padding" />
      <Container id="article" fluid>
        <Row>
          <Col lg="7">
            <Content
              title={data.allWordpressWpSpost.edges[0].node.title}
              genre={data.allWordpressWpSpost.edges[0].node.acf.genre}
              date={data.allWordpressWpSpost.edges[0].node.date}
              content={data.allWordpressWpSpost.edges[0].node.content}
              urls={data.allWordpressWpSpost.edges[0].node.acf.repeater_link}
              files={data.allWordpressWpSpost.edges[0].node.acf.repeater_file}
            />
            <RecommandVideo />
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <SideNews news={news} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($id: Int!) {
    allWordpressWpSpost(filter: { wordpress_id: { eq: $id } }) {
      edges {
        node {
          title
          wordpress_id
          content
          acf {
            genre
            repeater_file {
              file {
                url {
                  source_url
                }
                filename
              }
            }
            repeater_link {
              description
              url
            }
          }
        }
      }
    }
  }
`