"use client";

import { Card, Table, Tag, Typography } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminShell } from "../../components/AdminShell";
import { api } from "../../lib/api";
import type { Sop } from "../../types/domain";

export default function SopPage() {
  const [sops, setSops] = useState<Sop[]>([]);

  useEffect(() => {
    api.sops().then(setSops);
  }, []);

  return (
    <AdminShell>
      <Typography.Title level={2}>SOP 管理</Typography.Title>
      <Card>
        <Table
          rowKey="id"
          dataSource={sops}
          columns={[
            { title: "名称", dataIndex: "name", render: (value, record) => <Link href={`/sop/${record.id}`}>{value}</Link> },
            { title: "分类", dataIndex: "category" },
            { title: "触发词", dataIndex: "triggers", render: (items: string[]) => items.map((item) => <Tag key={item}>{item}</Tag>) },
            { title: "状态", dataIndex: "status", render: (value) => <Tag color={value === "published" ? "green" : "default"}>{value}</Tag> },
            { title: "命中率", dataIndex: "hitRate", render: (value) => `${value}%` },
            { title: "更新", dataIndex: "updatedAt" },
          ]}
        />
      </Card>
    </AdminShell>
  );
}
