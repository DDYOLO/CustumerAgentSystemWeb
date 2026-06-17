"use client";

import { Alert, Card, Col, Descriptions, Progress, Row, Space, Spin, Tag, Timeline, Typography } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AdminShell } from "../../../components/AdminShell";
import { api } from "../../../lib/api";
import type { TicketDetail } from "../../../types/domain";

export default function TicketDetailPage() {
  const params = useParams<{ ticketId: string }>();
  const [ticket, setTicket] = useState<TicketDetail>();

  useEffect(() => {
    if (params.ticketId) api.ticket(params.ticketId).then(setTicket);
  }, [params.ticketId]);

  if (!ticket) {
    return (
      <AdminShell>
        <Spin />
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <Typography.Title level={2}>{ticket.subject}</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={15}>
          <Card title="邮件线程" style={{ marginBottom: 16 }}>
            <Timeline
              items={ticket.messages.map((message) => ({
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
          <Card title="AI 回复草稿">
            <Alert type="warning" showIcon message={ticket.riskWarnings.join("；")} />
            <Typography.Paragraph style={{ marginTop: 16, whiteSpace: "pre-wrap" }}>{ticket.draft}</Typography.Paragraph>
          </Card>
        </Col>
        <Col xs={24} xl={9}>
          <Card title="AI 摘要" style={{ marginBottom: 16 }}>
            <Alert type="info" showIcon message={ticket.aiSummary} />
            <Typography.Title level={5}>建议动作</Typography.Title>
            <Timeline items={ticket.suggestedActions.map((item) => ({ children: item }))} />
          </Card>
          <Card title="SOP 匹配" style={{ marginBottom: 16 }}>
            {ticket.sopMatch ? (
              <Descriptions column={1} size="small">
                <Descriptions.Item label="推荐 SOP">{ticket.sopMatch.name}</Descriptions.Item>
                <Descriptions.Item label="置信度">
                  <Progress percent={ticket.sopMatch.score} size="small" />
                </Descriptions.Item>
                <Descriptions.Item label="触发词">
                  <Space wrap>{ticket.sopMatch.triggers.map((item) => <Tag key={item}>{item}</Tag>)}</Space>
                </Descriptions.Item>
                <Descriptions.Item label="依据">{ticket.sopMatch.evidence}</Descriptions.Item>
              </Descriptions>
            ) : (
              <Alert type="warning" message="未命中高置信度 SOP，建议进入 SOP 候选池。" />
            )}
          </Card>
          <Card title="关键信息">
            <Descriptions column={1} size="small">
              {Object.entries(ticket.extractedEntities).map(([key, value]) => (
                <Descriptions.Item key={key} label={key}>
                  {value}
                </Descriptions.Item>
              ))}
              <Descriptions.Item label="缺失信息">{ticket.missingInfo.join("、") || "无"}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
      </Row>
    </AdminShell>
  );
}
