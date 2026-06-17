import { Card, Typography } from "antd";
import { SopForm } from "../../components/sop/SopForm";
import { SopVersionHistory } from "../../components/sop/SopVersionHistory";
import { TriggerRuleEditor } from "../../components/sop/TriggerRuleEditor";

export function SopDetailPage() {
  return (
    <div>
      <Typography.Title level={2}>SOP Detail</Typography.Title>
      <Card style={{ marginBottom: 16 }}><SopForm /></Card>
      <Card style={{ marginBottom: 16 }} title="Trigger rules"><TriggerRuleEditor /></Card>
      <Card title="Version history"><SopVersionHistory /></Card>
    </div>
  );
}
