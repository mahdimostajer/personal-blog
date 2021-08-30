import React from "react"
import { Col, Row, Typography } from "antd"
import { StaticImage } from "gatsby-plugin-image"
import ContactForm from "./../../components/contactForm"

const Contact = () => {
  return (
    <>
      <div className="title-separate">
        <Typography.Title level={2}>تماس</Typography.Title>
      </div>
      <Row>
        <Col span={12}>
          <ContactForm />
        </Col>
        <Col span={12}>
          <StaticImage
            src="../../images/form2.jpg"
            alt="تماس با ما"
            placeholder="blurred"
          />
        </Col>
      </Row>
    </>
  )
}

export default Contact
