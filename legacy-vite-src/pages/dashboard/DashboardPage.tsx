import { Alert, Card, Col, Row, Statistic, Table, Typography } from "antd";
import { useMonitoring } from "../../hooks/useMonitoring";

const rows = [
  { key: "1", title: "Refund policy dispute", priority: "High", status: "Pending" },
  { key: "2", title: "Shipping delay", priority: "Medium", status: "Draft ready" },
  { key: "3", title: "Invoice update", priority: "Low", status: "Needs review" },
];

export function DashboardPage() {
  const { data } = useMonitoring();

  return (
    <div>
      <Typography.Title level={2}>Dashboard</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}><Card><Statistic title="Pending tickets" value={data?.pendingTickets ?? 24} /></Card></Col>
        <Col xs={24} md={6}><Card><Statistic title="High risk" value={data?.highRiskTickets ?? 3} /></Card></Col>
        <Col xs={24} md={6}><Card><Statistic title="SOP hit rate" value={data?.sopHitRate ?? 78} suffix="%" /></Card></Col>
        <Col xs={24} md={6}><Card><Statistic title="AI calls" value={data?.aiCalls ?? 186} /></Card></Col>
      </Row>
      <Alert style={{ margin: "20px 0" }} type="info" showIcon message="The starter app includes routes for mail sync, SOP matching, AI drafts, and monitoring." />
      <Card title="Priority queue">
        <Table pagination={false} dataSource={rows} columns={[{ title: "Subject", dataIndex: "title" }, { title: "Priority", dataIndex: "priority" }, { title: "Status", dataIndex: "status" }]} />
      </Card>
    </div>
  );
}
