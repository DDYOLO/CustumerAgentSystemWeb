import { Card, Collapse, Descriptions, Progress, Tag } from "antd";
import type { TicketDetail } from "../../types/ticket";
import styles from "./SopMatchPanel.module.scss";

export function SopMatchPanel({ ticket }: { ticket?: TicketDetail }) {
  const score = ticket?.sopMatch?.score ?? 86;

  return (
    <Card title="SOP match" className={styles.panel}>
      <Descriptions column={1} size="small">
        <Descriptions.Item label="Matched SOP">{ticket?.sopMatch?.name ?? "Shipping delay SOP"}</Descriptions.Item>
        <Descriptions.Item label="Confidence"><Progress percent={score} size="small" /></Descriptions.Item>
        <Descriptions.Item label="Tags"><Tag color="blue">shipping</Tag><Tag color="gold">compensation</Tag></Descriptions.Item>
      </Descriptions>
      <Collapse size="small" items={[{ key: "basis", label: "Match evidence", children: "The email mentions delay, not received, and refund intent." }]} />
    </Card>
  );
}
