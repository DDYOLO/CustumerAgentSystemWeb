import { Button, Space, Table, Tag } from "antd";
import { Link } from "react-router-dom";
import type { Sop } from "../../types/sop";

export function SopTable({ sops, loading }: { sops: Sop[]; loading?: boolean }) {
  return (
    <Table<Sop>
      rowKey="id"
      loading={loading}
      dataSource={sops}
      columns={[
        { title: "Name", dataIndex: "name", render: (value, record) => <Link to={`/sop/${record.id}`}>{value}</Link> },
        { title: "Category", dataIndex: "category" },
        { title: "Status", dataIndex: "status", render: (value) => <Tag color={value === "published" ? "green" : "default"}>{value}</Tag> },
        { title: "Hit rate", dataIndex: "hitRate", render: (value) => `${value}%` },
        { title: "Actions", render: (_, record) => <Space><Button href={`/sop/${record.id}`}>Edit</Button></Space> },
      ]}
    />
  );
}
