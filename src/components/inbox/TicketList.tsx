import { Table, Tag } from "antd";
import { Link } from "react-router-dom";
import type { Ticket } from "../../types/ticket";
import { RiskBadge } from "./RiskBadge";

export function TicketList({ tickets, loading }: { tickets: Ticket[]; loading?: boolean }) {
  return (
    <Table<Ticket>
      rowKey="id"
      loading={loading}
      dataSource={tickets}
      columns={[
        { title: "Subject", dataIndex: "subject", render: (value, record) => <Link to={`/inbox/${record.id}`}>{value}</Link> },
        { title: "Customer", dataIndex: "customerEmail" },
        { title: "Status", dataIndex: "status", render: (value) => <Tag color="processing">{value}</Tag> },
        { title: "Risk", dataIndex: "riskLevel", render: (value) => <RiskBadge level={value} /> },
        { title: "Updated", dataIndex: "updatedAt" },
      ]}
    />
  );
}
