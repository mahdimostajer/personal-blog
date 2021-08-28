import React from "react"
import Wrapper from "../../components/layout"
import { Col, Layout, Row, Typography } from "antd"
import Header from "./../../components/header"
import AboutCard from "../../components/aboutCard"

const About = () => {
  return (
    <Layout className="outer-layout">
      <Layout className="inner-layout">
        <Header />
        <Wrapper>
          <div className="title-separate">
            <Typography.Title level={2}>درباره من</Typography.Title>
          </div>
          <Row gutter={[20, 20]}>
            <Col span={8}>
              <AboutCard
                image="student.png"
                alt="دانشجوی شریف"
                sub="تحصیلات"
                text="دانشجوی شریف"
              />
            </Col>
            <Col span={8}>
              <AboutCard
                image="map.png"
                alt="زادگاه"
                sub="زادگاه"
                text="اصفهان"
              />
            </Col>
            <Col span={8}>
              <AboutCard
                image="soccer.png"
                alt="عاشق فوتبال"
                sub="عاشق فوتبال"
                text="فوتبال = زندگی"
              />
            </Col>
            <Col span={8}>
              <AboutCard
                image="music.png"
                alt="آهنگ"
                sub="آخ سیاوش که میخونه"
                text="آهنگ"
              />
            </Col>
            <Col span={8}>
              <AboutCard
                image="walter.png"
                alt="سینما"
                sub="علاقه به"
                text="سینما و سریال"
              />
            </Col>
            <Col span={8}>
              <AboutCard
                image="shy.png"
                alt="خجالتی"
                sub="بسیاری از مواقع"
                text="خجالتی"
              />
            </Col>
          </Row>
        </Wrapper>
      </Layout>
    </Layout>
  )
}

export default About
