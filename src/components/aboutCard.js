import { Space, Typography } from "antd"
import React from "react"
const AboutCard = ({ image, alt, sub, text }) => {
  return (
    <div className="about-card">
      <div className="about-card-image">
        <img src={`../${image}`} height={64} width={64} alt={alt || ""} />
      </div>
      <div className="text-center about-card-text">
        <Space size={10} direction="vertical">
          <Typography.Title level={5}>{sub ?? " "}</Typography.Title>
          <Typography.Title level={4}>{text ?? " "}</Typography.Title>
        </Space>
      </div>
    </div>
  )
}

export default AboutCard
