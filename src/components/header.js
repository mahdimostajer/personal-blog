import React from "react"
import { Layout, Space } from "antd"
import { Link } from "gatsby"

const Header = () => {
  return (
    <Layout className="header">
      <div>
        <ul className="nav">
          <Space direction="horizontal" size={15}>
            <li className="nav-item">
              <Link
                to="/"
                activeStyle={{ color: "white", backgroundColor: "black" }}
              >
                بلاگ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                activeStyle={{ color: "white", backgroundColor: "black" }}
              >
                درباره من
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tags"
                activeStyle={{ color: "white", backgroundColor: "black" }}
              >
                تگ‌ها
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                activeStyle={{ color: "white", backgroundColor: "black" }}
              >
                تماس
              </Link>
            </li>
          </Space>
        </ul>
      </div>
    </Layout>
  )
}

export default Header
