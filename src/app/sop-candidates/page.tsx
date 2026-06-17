"use client";

import { Button, Card, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { AdminShell } from "../../components/AdminShell";
import { api } from "../../lib/api";
import type { SopCandidate } from "../../types/domain";

export default function SopCandidatesPage() {
  const [candidates, setCandidates] = useState<SopCandidate[]>([]);

  useEffect(() => {
    api.sopCandidates().then(setCandidates);
  }, []);

  return (
    <AdminShell>
      <Typography.Title level={2}>SOP 进化候选</Typography.Title>
      <Card>
        <Table
          rowKey="id"
          dataSource={candidates}
          columns={[
            { title: "候选场景", dataIndex: "title" },
            { title: "分类", dataIndex: "category" },
            { title: "邮件数量", dataIndex: "emailCount" },
            { title: "置信度", dataIndex: "confidence", render: (value) => `${value}%` },
            { title: "原因", dataIndex: "reason" },
            { title: "操作", render: () => <Button type="primary">生成 SOP 草稿</Button> },
          ]}
        />
      </Card>
    </AdminShell>
  );
}
