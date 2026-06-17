"use client";

import { Card, Col, Row, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { AdminShell } from "../../components/AdminShell";
import { api } from "../../lib/api";
import type { MonitoringSummary } from "../../types/domain";

export default function MonitoringPage() {
  const [summary, setSummary] = useState<MonitoringSummary>();

  useEffect(() => {
    api.monitoring().then(setSummary);
  }, []);

  return (
    <AdminShell>
      <Typography.Title level={2}>监控看板</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="邮件同步状态" value="healthy" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="平均首响" value={summary?.avgFirstResponseMinutes ?? 0} suffix="分钟" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="AI 调用" value={summary?.aiCalls ?? 0} />
          </Card>
        </Col>
      </Row>
      <Card title="任务日志" style={{ marginTop: 16 }}>
        <Table
          rowKey="id"
          pagination={false}
          dataSource={[
            { id: "1", task: "mail_sync", status: "success", at: "2026-06-17 10:00" },
            { id: "2", task: "email_analysis", status: "success", at: "2026-06-17 10:02" },
            { id: "3", task: "draft_generation", status: "review_required", at: "2026-06-17 10:04" },
          ]}
          columns={[
            { title: "任务", dataIndex: "task" },
            { title: "状态", dataIndex: "status" },
            { title: "时间", dataIndex: "at" },
          ]}
        />
      </Card>
    </AdminShell>
  );
}
