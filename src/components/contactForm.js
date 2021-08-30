import { Button, Form, Input } from "antd"
import React from "react"
const ContactForm = () => {
  const [form] = Form.useForm()

  const onSubmit = data => {
    console.log(data)
    form.resetFields()
  }

  return (
    <Form form={form} onFinish={onSubmit}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "لطفا نام خود را وارد کنید" }]}
      >
        <Input size="large" placeholder="نام" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "لطفا ایمیل خود را وارد کنید" },
          { type: "email", message: "لطفا ایمیل معتبر وارد کنید" },
        ]}
      >
        <Input size="large" placeholder="ایمیل" />
      </Form.Item>
      <Form.Item
        name="message"
        rules={[{ required: true, message: "لطفا پیام خود را وارد کنید" }]}
      >
        <Input.TextArea placeholder="پیام خود را وارد کنید..." rows={6} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" type="primary">
          ارسال
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ContactForm
