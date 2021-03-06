import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"

import Landing from "../components/section/Landing/Landing"
import NewsSlider from "../components/section/NewsSlider/NewsSlider"
import Clubs from "../components/section/Clubs/Clubs"
import Blog from "../components/section/Blog/Blog"

export default ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <Landing />
      <NewsSlider />
      <Blog posts={data} />
      <Clubs />
    </Layout>
  )
}

export const query = graphql`
  {
    allPosts: allWordpressWpSpost(
      limit: 10
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          wordpress_id
        }
      }
    }
    studentPosts: allWordpressWpSpost(
      filter: { acf: { genre: { eq: "學生" } } }
      limit: 10
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          wordpress_id
        }
      }
    }
    teacherPosts: allWordpressWpSpost(
      filter: { acf: { genre: { eq: "教師" } } }
      limit: 10
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          wordpress_id
        }
      }
    }

    racePosts: allWordpressWpSpost(
      filter: { acf: { genre: { eq: "競賽" } } }
      limit: 10
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          wordpress_id
        }
      }
    }
    researchPosts: allWordpressWpSpost(
      filter: { acf: { genre: { eq: "講座及課程" } } }
      limit: 10
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          wordpress_id
        }
      }
    }
  }
`
