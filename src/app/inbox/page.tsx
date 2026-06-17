"use client";

import { Card, Table, Tag, Typography } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminShell } from "../../components/AdminShell";
import { api } from "../../lib/api";
import type { Ticket } from "../../types/domain";

const riskColor: Record<string, string> = {
  low: "green",
  medium: "gold",
  high: "red",
  critical: "volcano",
};

export default function InboxPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    api.tickets().then(setTickets);
  }, []);

  return (
    <AdminShell>
      <Typography.Title level={2}>邮件工单</Typography.Title>
      <Card>
        <Table
          rowKey="id"
          dataSource={tickets}
          columns={[
            {
              title: "主题",
              dataIndex: "subject",
              render: (value, record) => <Link href={`/inbox/${record.id}`}>{value}</Link>,
            },
            { title: "客户", dataIndex: "customerEmail" },
            { title: "意图", dataIndex: "intent" },
            { title: "语言", dataIndex: "language" },
            { title: "状态", dataIndex: "status", render: (value) => <Tag color="processing">{value}</Tag> },
            {
              title: "风险",
              dataIndex: "riskLevel",
              render: (value) => <Tag color={riskColor[value] ?? "default"}>{value}</Tag>,
            },
            { title: "更新", dataIndex: "updatedAt" },
          ]}
        />
      </Card>
    </AdminShell>
  );
}
