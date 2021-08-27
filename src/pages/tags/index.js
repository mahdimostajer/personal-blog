import React from "react"
import { Layout } from "antd"
import Header from "./../../components/header"
import Wrapper from "./../../components/layout"

const Tags = () => {
  return (
    <Layout className="outer-layout">
      <Layout className="inner-layout">
        <Header />
        <Wrapper>
          <p>tags</p>
        </Wrapper>
      </Layout>
    </Layout>
  )
}

export default Tags
