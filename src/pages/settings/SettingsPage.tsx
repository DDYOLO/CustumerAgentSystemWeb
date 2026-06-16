import { Card, Form, Input, Select, Typography } from "antd";

export function SettingsPage() {
  return (
    <div>
      <Typography.Title level={2}>Settings</Typography.Title>
      <Card>
        <Form layout="vertical" initialValues={{ provider: "deepseek" }}>
          <Form.Item label="Model provider" name="provider"><Select options={[{ value: "deepseek", label: "DeepSeek" }, { value: "qwen", label: "Qwen" }, { value: "claude", label: "Claude" }]} /></Form.Item>
          <Form.Item label="Mailbox integration" name="mailbox"><Input placeholder="Gmail / Outlook / IMAP" /></Form.Item>
        </Form>
      </Card>
    </div>
  );
}
