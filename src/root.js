import React from "react"
import { ConfigProvider } from "antd"
import faIR from "antd/lib/locale/fa_IR"

export default ({ element }) => {
  return (
    <ConfigProvider direction="rtl" locale={faIR}>
      {element}
    </ConfigProvider>
  )
}
