import { Card, Typography } from "antd";
import { KnowledgeEditor } from "../../components/knowledge/KnowledgeEditor";
import { KnowledgeTable } from "../../components/knowledge/KnowledgeTable";

export function KnowledgePage() {
  return (
    <div>
      <Typography.Title level={2}>Knowledge Base</Typography.Title>
      <Card style={{ marginBottom: 16 }}><KnowledgeEditor /></Card>
      <Card><KnowledgeTable /></Card>
    </div>
  );
}
