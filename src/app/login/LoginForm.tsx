"use client";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Typography, message } from "antd";
import { useRouter } from "next/navigation";
import { api } from "../../lib/api";

export function LoginForm() {
  const router = useRouter();

  async function handleSubmit(values: { email: string; password: string }) {
    const token = await api.login(values);
    localStorage.setItem("access_token", token.access_token);
    message.success("登录成功");
    router.push("/");
  }

  return (
    <Card style={{ width: 420 }}>
      <Typography.Title level={3}>智能客服后台</Typography.Title>
      <Typography.Paragraph type="secondary">使用运营账号登录</Typography.Paragraph>
      <Form layout="vertical" onFinish={handleSubmit} initialValues={{ email: "admin@example.com" }}>
        <Form.Item label="邮箱" name="email" rules={[{ required: true, type: "email" }]}>
          <Input prefix={<MailOutlined />} placeholder="admin@example.com" />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true }]}>
          <Input.Password prefix={<LockOutlined />} placeholder="任意密码用于本地演示" />
        </Form.Item>
        <Button block type="primary" htmlType="submit">
          登录
        </Button>
      </Form>
    </Card>
  );
}
