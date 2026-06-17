"use client";

import { Alert, Card, Col, Row, Statistic, Table, Typography } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminShell } from "../components/AdminShell";
import { api } from "../lib/api";
import type { MonitoringSummary, Ticket } from "../types/domain";

export default function DashboardPage() {
  const [summary, setSummary] = useState<MonitoringSummary>();
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    Promise.all([api.monitoring(), api.tickets()]).then(([nextSummary, nextTickets]) => {
      setSummary(nextSummary);
      setTickets(nextTickets);
    });
  }, []);

  const priorityRows = tickets
    .filter((ticket) => ticket.riskLevel === "high" || ticket.riskLevel === "critical")
    .slice(0, 5);

  return (
    <AdminShell>
      <Typography.Title level={2}>今日工作台</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={6}>
          <Card>
            <Statistic title="待处理工单" value={summary?.pendingTickets ?? 0} />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic title="高风险工单" value={summary?.highRiskTickets ?? 0} />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic title="SOP 命中率" value={summary?.sopHitRate ?? 0} suffix="%" />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card>
            <Statistic title="AI 调用" value={summary?.aiCalls ?? 0} />
          </Card>
        </Col>
      </Row>
      <Alert
        style={{ margin: "20px 0" }}
        type="info"
        showIcon
        message="当前版本使用内存数据跑通邮件、工单、SOP、知识库、AI 草稿和监控流程；数据库、Redis、模型与邮箱接入已预留环境变量。"
      />
      <Card title="优先处理队列">
        <Table
          rowKey="id"
          pagination={false}
          dataSource={priorityRows}
          columns={[
            {
              title: "主题",
              dataIndex: "subject",
              render: (value, record) => <Link href={`/inbox/${record.id}`}>{value}</Link>,
            },
            { title: "客户", dataIndex: "customerEmail" },
            { title: "意图", dataIndex: "intent" },
            { title: "优先级", dataIndex: "priority" },
            { title: "状态", dataIndex: "status" },
          ]}
        />
      </Card>
    </AdminShell>
  );
}
