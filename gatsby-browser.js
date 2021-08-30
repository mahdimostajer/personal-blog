import { Layout } from "antd"
import root from "./src/root"
import Header from "./src/components/header"
import SEO from "./src/components/seo"
import React from "react"
import Wrapper from "./src/components/layout"
export const wrapRootElement = root

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <Layout className="outer-layout">
      <Layout className="inner-layout">
        <Header />
        <SEO />
        <Wrapper>{element}</Wrapper>
      </Layout>
    </Layout>
  )
}
