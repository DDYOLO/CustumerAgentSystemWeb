import { Card, Col, Row, Statistic, Table, Typography } from "antd";
import { AiUsageChart } from "../../components/monitoring/AiUsageChart";
import { MetricCard } from "../../components/monitoring/MetricCard";
import { SopHitRateChart } from "../../components/monitoring/SopHitRateChart";
import { useMonitoring } from "../../hooks/useMonitoring";

export function MonitoringPage() {
  const { data } = useMonitoring();

  return (
    <div>
      <Typography.Title level={2}>Monitoring</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}><MetricCard title="Mail sync" value="healthy" /></Col>
        <Col xs={24} md={8}><Card><Statistic title="AI calls" value={data?.aiCalls ?? 186} /></Card></Col>
        <Col xs={24} md={8}><Card><Statistic title="SOP hit rate" value={data?.sopHitRate ?? 78} suffix="%" /></Card></Col>
        <Col xs={24} lg={12}><AiUsageChart /></Col>
        <Col xs={24} lg={12}><SopHitRateChart /></Col>
      </Row>
      <Card style={{ marginTop: 16 }} title="Task logs">
        <Table rowKey="id" dataSource={[{ id: "1", task: "mail_sync", status: "success", at: "2026-06-17 10:00" }]} columns={[{ title: "Task", dataIndex: "task" }, { title: "Status", dataIndex: "status" }, { title: "Time", dataIndex: "at" }]} />
      </Card>
    </div>
  );
}
