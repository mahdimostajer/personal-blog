import React from "react"
import { Col, Drawer, Layout, Row } from "antd"
import { Link } from "gatsby"
import { MenuOutlined } from "@ant-design/icons"
import { useState } from "react"

const Header = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Layout className="header">
      <Row>
        <Col sm={0} xs={24}>
          <div className="mobile-drawer">
            <MenuOutlined onClick={() => setVisible(true)} />
            <Drawer
              placement="right"
              onClose={() => setVisible(false)}
              visible={visible}
            >
              <div>
                <ul className="mobile-drawer-list">
                  <li className="mobile-drawer-list-item">
                    <Link
                      to="/"
                      activeStyle={{ color: "white", backgroundColor: "black" }}
                      onClick={() => setVisible(false)}
                    >
                      بلاگ
                    </Link>
                  </li>
                  <li className="mobile-drawer-list-item">
                    <Link
                      to="/about"
                      activeStyle={{ color: "white", backgroundColor: "black" }}
                      onClick={() => setVisible(false)}
                    >
                      درباره من
                    </Link>
                  </li>
                  <li className="mobile-drawer-list-item">
                    <Link
                      to="/tags"
                      activeStyle={{ color: "white", backgroundColor: "black" }}
                      onClick={() => setVisible(false)}
                    >
                      تگ‌ها
                    </Link>
                  </li>
                  <li className="mobile-drawer-list-item">
                    <Link
                      to="/contact"
                      activeStyle={{ color: "white", backgroundColor: "black" }}
                      onClick={() => setVisible(false)}
                    >
                      تماس
                    </Link>
                  </li>
                </ul>
              </div>
            </Drawer>
          </div>
        </Col>
        <Col sm={24} xs={0}>
          <div>
            <ul className="nav">
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
            </ul>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default Header
