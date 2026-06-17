"use client";

import { Button, Card, Form, Input, Table, Tag, Typography } from "antd";
import { useEffect, useState } from "react";
import { AdminShell } from "../../components/AdminShell";
import { api } from "../../lib/api";
import type { KnowledgeArticle } from "../../types/domain";

export default function KnowledgePage() {
  const [articles, setArticles] = useState<KnowledgeArticle[]>([]);

  useEffect(() => {
    api.knowledge().then(setArticles);
  }, []);

  return (
    <AdminShell>
      <Typography.Title level={2}>知识库</Typography.Title>
      <Card title="新增知识" style={{ marginBottom: 16 }}>
        <Form layout="vertical">
          <Form.Item label="标题">
            <Input placeholder="退款政策、物流政策、产品 FAQ" />
          </Form.Item>
          <Form.Item label="内容">
            <Input.TextArea rows={5} placeholder="后续接入数据库后保存并触发向量化" />
          </Form.Item>
          <Button type="primary">保存知识</Button>
        </Form>
      </Card>
      <Card>
        <Table
          rowKey="id"
          dataSource={articles}
          columns={[
            { title: "标题", dataIndex: "title" },
            { title: "分类", dataIndex: "category" },
            { title: "状态", dataIndex: "status", render: (value) => <Tag color="green">{value}</Tag> },
            { title: "更新", dataIndex: "updatedAt" },
          ]}
        />
      </Card>
    </AdminShell>
  );
}
