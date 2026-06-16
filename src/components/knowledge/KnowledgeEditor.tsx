import { Button, Form, Input } from "antd";

export function KnowledgeEditor() {
  return (
    <Form layout="vertical">
      <Form.Item label="Title"><Input placeholder="Policy, FAQ, or product knowledge title" /></Form.Item>
      <Form.Item label="Content"><Input.TextArea rows={5} placeholder="Knowledge content" /></Form.Item>
      <Button type="primary">Save article</Button>
    </Form>
  );
}
