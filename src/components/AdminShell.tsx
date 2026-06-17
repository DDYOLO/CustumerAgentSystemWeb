"use client";

import {
  BarChartOutlined,
  BookOutlined,
  BulbOutlined,
  DashboardOutlined,
  InboxOutlined,
  SettingOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import Link from "next/link";
import type { ReactNode } from "react";

const { Header, Sider, Content } = Layout;

const items = [
  { key: "/", icon: <DashboardOutlined />, label: <Link href="/">今日工作台</Link> },
  { key: "/inbox", icon: <InboxOutlined />, label: <Link href="/inbox">邮件工单</Link> },
  { key: "/sop", icon: <TagsOutlined />, label: <Link href="/sop">SOP 管理</Link> },
  { key: "/sop-candidates", icon: <BulbOutlined />, label: <Link href="/sop-candidates">SOP 候选</Link> },
  { key: "/knowledge", icon: <BookOutlined />, label: <Link href="/knowledge">知识库</Link> },
  { key: "/monitoring", icon: <BarChartOutlined />, label: <Link href="/monitoring">监控看板</Link> },
  { key: "/settings", icon: <SettingOutlined />, label: <Link href="/settings">系统设置</Link> },
];

export function AdminShell({ children }: { children: ReactNode }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={232} theme="light">
        <div style={{ padding: 20 }}>
          <Typography.Title level={4} style={{ margin: 0 }}>
            智能客服
          </Typography.Title>
          <Typography.Text type="secondary">SOP 邮件运营助手</Typography.Text>
        </div>
        <Menu mode="inline" items={items} defaultSelectedKeys={["/"]} />
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            borderBottom: "1px solid #eef0f4",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 24px",
          }}
        >
          <Typography.Text strong>运营控制台</Typography.Text>
          <Typography.Text type="secondary">admin@example.com</Typography.Text>
        </Header>
        <Content style={{ padding: 24, background: "#f5f7fb" }}>{children}</Content>
      </Layout>
    </Layout>
  );
}
