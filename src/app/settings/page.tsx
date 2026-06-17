"use client";

import { Card, Form, Input, Select, Typography } from "antd";
import { AdminShell } from "../../components/AdminShell";

export default function SettingsPage() {
  return (
    <AdminShell>
      <Typography.Title level={2}>系统设置</Typography.Title>
      <Card>
        <Form
          layout="vertical"
          initialValues={{
            apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000",
            provider: "deepseek",
            databaseUrl: "DATABASE_URL",
            redisUrl: "REDIS_URL",
          }}
        >
          <Form.Item label="API 地址" name="apiBaseUrl">
            <Input />
          </Form.Item>
          <Form.Item label="模型供应商" name="provider">
            <Select
              options={[
                { value: "deepseek", label: "DeepSeek" },
                { value: "qwen", label: "Qwen" },
                { value: "claude", label: "Claude" },
              ]}
            />
          </Form.Item>
          <Form.Item label="数据库变量" name="databaseUrl">
            <Input />
          </Form.Item>
          <Form.Item label="Redis 变量" name="redisUrl">
            <Input />
          </Form.Item>
        </Form>
      </Card>
    </AdminShell>
  );
}
