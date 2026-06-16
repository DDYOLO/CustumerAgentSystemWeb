import { Table, Tag } from "antd";

export function KnowledgeTable() {
  return (
    <Table
      rowKey="id"
      dataSource={[{ id: "k1", title: "Refund policy", status: "embedded", updatedAt: "2026-06-17" }]}
      columns={[
        { title: "Title", dataIndex: "title" },
        { title: "Status", dataIndex: "status", render: (value) => <Tag color="green">{value}</Tag> },
        { title: "Updated", dataIndex: "updatedAt" },
      ]}
    />
  );
}
