import React from "react"
import Wrapper from "../../components/layout"
import { Layout } from "antd"
import Header from "./../../components/header"

const About = () => {
  return (
    <Layout className="outer-layout">
      <Layout className="inner-layout">
        <Header />
        <Wrapper>
          <p>about</p>
        </Wrapper>
      </Layout>
    </Layout>
  )
}

export default About
