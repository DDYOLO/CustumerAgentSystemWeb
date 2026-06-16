import { Card, Timeline, Typography } from "antd";
import type { TicketDetail } from "../../types/ticket";
import styles from "./EmailThread.module.scss";

export function EmailThread({ ticket }: { ticket?: TicketDetail }) {
  const messages = ticket?.messages ?? [
    { sender: "customer@example.com", content: "The order is delayed. Please help.", sentAt: "10:20" },
    { sender: "support@example.com", content: "We received your message and will check it.", sentAt: "10:36" },
  ];

  return (
    <Card title="Email thread" className={styles.thread}>
      <Timeline
        items={messages.map((message) => ({
          children: (
            <div>
              <Typography.Text strong>{message.sender}</Typography.Text>
              <Typography.Paragraph>{message.content}</Typography.Paragraph>
              <Typography.Text type="secondary">{message.sentAt}</Typography.Text>
            </div>
          ),
        }))}
      />
    </Card>
  );
}
