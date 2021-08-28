import React from "react"
import { Layout, Typography } from "antd"
import Wrapper from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout className="outer-layout">
    <Layout className="inner-layout">
      <Header />
      <SEO />
      <Wrapper>
        <div className="title-separate">
          <Typography.Title level={2}>بلاگ</Typography.Title>
        </div>
      </Wrapper>
    </Layout>
  </Layout>
)

export default IndexPage
