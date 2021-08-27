import React from "react"
import { Layout } from "antd"
import Header from "./../../components/header"
import Wrapper from "./../../components/layout"
const Contact = () => {
  return (
    <Layout className="outer-layout">
      <Layout className="inner-layout">
        <Header />
        <Wrapper>
          <p>hi</p>
        </Wrapper>
      </Layout>
    </Layout>
  )
}

export default Contact
