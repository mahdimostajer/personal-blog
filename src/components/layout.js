import React from "react"
import { Affix, Col, Layout, Row, Space, Typography } from "antd"
import "../styles/main.less"
import { CalendarOutlined, HomeOutlined } from "@ant-design/icons"
import { StaticImage } from "gatsby-plugin-image"
const Avatar = () => (
  <StaticImage
    src="../images/Keanu-Reeves.jpg"
    alt="آواتار"
    placeholder="blurred"
    className="sider-avatar"
  />
)

const Sider = () => (
  <aside className="sider text-center">
    <Avatar />
    <Space direction="vertical" size={10}>
      <div className="sider-name">
        <Typography.Title level={3}>مهدی مستاجران</Typography.Title>
      </div>
      <div className="sider-badge">
        <Typography.Text>مهندس کامپیوتر</Typography.Text>
      </div>
      <div className="sider-info">
        <ul className="sider-info-list">
          <li className="sider-info-item">
            <CalendarOutlined style={{ fontSize: "20px" }} />
            &nbsp; &nbsp; 28/آبان/1379
          </li>
          <li className="sider-info-item">
            <HomeOutlined style={{ fontSize: "20px" }} />
            &nbsp; &nbsp; اصفهان
          </li>
        </ul>
      </div>
    </Space>
  </aside>
)

const Wrapper = ({ children }) => {
  return (
    <Layout>
      <Layout.Content className="content">
        <Row>
          <Col span={18}>
            <Layout className="content-children">{children}</Layout>
          </Col>
          <Col span={6}>
            <Affix>
              <Sider />
            </Affix>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  )
}

export default Wrapper
