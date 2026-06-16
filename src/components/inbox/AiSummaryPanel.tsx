import { Alert, Card, Timeline, Typography } from "antd";
import type { TicketDetail } from "../../types/ticket";
import styles from "./AiSummaryPanel.module.scss";

export function AiSummaryPanel({ ticket }: { ticket?: TicketDetail }) {
  return (
    <Card title="AI summary" className={styles.panel}>
      <Alert type="info" showIcon message={ticket?.aiSummary ?? "The customer reports a delayed order. Check logistics and prepare a compensation response."} />
      <Typography.Title level={5}>Suggested actions</Typography.Title>
      <Timeline items={[{ children: "Check order and tracking status" }, { children: "Match after-sales SOP" }, { children: "Generate a draft for human review" }]} />
    </Card>
  );
}
