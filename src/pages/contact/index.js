import React from "react"
import { Layout, Typography } from "antd"
import Header from "./../../components/header"
import Wrapper from "./../../components/layout"
const Contact = () => {
  return (
    <Layout className="outer-layout">
      <Layout className="inner-layout">
        <Header />
        <Wrapper>
          <div className="title-separate">
            <Typography.Title level={2}>تماس</Typography.Title>
          </div>
        </Wrapper>
      </Layout>
    </Layout>
  )
}

export default Contact
