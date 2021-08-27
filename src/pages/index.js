import React from "react"
import { Layout } from "antd"
import Wrapper from "../components/layout"
import Header from "../components/header"

const IndexPage = () => (
  <Layout className="outer-layout">
    <Layout className="inner-layout">
      <Header />
      <Wrapper>
        <div style={{ height: "200vh" }} />
      </Wrapper>
    </Layout>
  </Layout>
)

export default IndexPage
