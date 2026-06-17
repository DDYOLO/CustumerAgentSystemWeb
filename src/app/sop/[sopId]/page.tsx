"use client";

import { Card, Descriptions, Form, Input, Select, Space, Spin, Tag, Typography } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AdminShell } from "../../../components/AdminShell";
import { api } from "../../../lib/api";
import type { Sop } from "../../../types/domain";

export default function SopDetailPage() {
  const params = useParams<{ sopId: string }>();
  const [sop, setSop] = useState<Sop>();

  useEffect(() => {
    if (params.sopId) api.sop(params.sopId).then(setSop);
  }, [params.sopId]);

  if (!sop) {
    return (
      <AdminShell>
        <Spin />
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <Typography.Title level={2}>{sop.name}</Typography.Title>
      <Card style={{ marginBottom: 16 }}>
        <Descriptions column={1}>
          <Descriptions.Item label="分类">{sop.category}</Descriptions.Item>
          <Descriptions.Item label="状态">{sop.status}</Descriptions.Item>
          <Descriptions.Item label="触发词">
            <Space wrap>{sop.triggers.map((item) => <Tag key={item}>{item}</Tag>)}</Space>
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title="编辑 SOP">
        <Form layout="vertical" initialValues={sop}>
          <Form.Item label="SOP 名称" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="分类" name="category">
            <Input />
          </Form.Item>
          <Form.Item label="状态" name="status">
            <Select options={[{ value: "draft", label: "草稿" }, { value: "published", label: "已发布" }]} />
          </Form.Item>
          <Form.Item label="处理规则与标准回复" name="content">
            <Input.TextArea rows={10} />
          </Form.Item>
        </Form>
      </Card>
    </AdminShell>
  );
}
