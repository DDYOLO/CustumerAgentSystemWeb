import { Button, Card, Table, Typography } from "antd";

export function SopCandidatePage() {
  return (
    <div>
      <Typography.Title level={2}>SOP Candidates</Typography.Title>
      <Card>
        <Table
          rowKey="id"
          dataSource={[{ id: "candidate-1", title: "Invoice title update", count: 18, confidence: 82 }]}
          columns={[
            { title: "Candidate", dataIndex: "title" },
            { title: "Email count", dataIndex: "count" },
            { title: "Confidence", dataIndex: "confidence", render: (value) => `${value}%` },
            { title: "Actions", render: () => <Button type="primary">Create SOP draft</Button> },
          ]}
        />
      </Card>
    </div>
  );
}
