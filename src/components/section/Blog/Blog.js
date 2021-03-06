import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import "./Blog.scss"

// tools
import PostLists from "../../tools/PostsList/PostsList"
import SideNews from "../../tools/SidewNews/SideNews"

const Blog = ({ posts }) => {
  const newses = useStaticQuery(graphql`
    {
      allWordpressWpNews(limit: 4, skip: 1) {
        edges {
          node {
            title
            acf {
              link
              image {
                source_url
              }
            }
          }
        }
      }
    }
  `).allWordpressWpNews.edges

  return (
    <Container as="section" id="Blog">
      <Row>
        {/* posts */}
        <Col lg="7">
          <PostLists posts={posts} />
        </Col>

        {/* side news (component) */}
        <Col lg={{ span: 4, offset: 1 }}>
          <SideNews newses={newses} />
        </Col>
      </Row>
    </Container>
  )
}

export default Blog
