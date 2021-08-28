import React from "react"
import { Layout, Typography } from "antd"
import Header from "./../../components/header"
import Wrapper from "./../../components/layout"
import SEO from "../../components/seo"

const Tags = () => {
  return (
    <Layout className="outer-layout">
      <Layout className="inner-layout">
        <SEO />
        <Header />
        <Wrapper>
          <div className="title-separate">
            <Typography.Title level={2}>تگ‌ها</Typography.Title>
          </div>
        </Wrapper>
      </Layout>
    </Layout>
  )
}

export default Tags
