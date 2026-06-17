import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../schemas/login.schema";
import styles from "./LoginPage.module.scss";

export function LoginPage() {
  const navigate = useNavigate();

  return (
    <main className={styles.page}>
      <Card className={styles.card}>
        <Typography.Title level={3}>Support Admin</Typography.Title>
        <Typography.Paragraph type="secondary">Sign in to review tickets, SOP matches, and AI drafts.</Typography.Paragraph>
        <Form
          layout="vertical"
          onFinish={(values) => {
            loginSchema.parse(values);
            localStorage.setItem("access_token", "local-dev-token");
            navigate("/");
          }}
        >
          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Email is required" }]}>
            <Input prefix={<UserOutlined />} placeholder="admin@example.com" />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: "Password is required" }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Enter password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign in
          </Button>
        </Form>
      </Card>
    </main>
  );
}
