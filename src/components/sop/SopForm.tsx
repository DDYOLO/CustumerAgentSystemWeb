import { Button, Form, Input, Select } from "antd";

export function SopForm() {
  return (
    <Form layout="vertical" initialValues={{ status: "draft" }}>
      <Form.Item label="SOP name" name="name" rules={[{ required: true }]}>
        <Input placeholder="Shipping delay SOP" />
      </Form.Item>
      <Form.Item label="Category" name="category">
        <Input placeholder="After-sales / Shipping / Invoice" />
      </Form.Item>
      <Form.Item label="Status" name="status">
        <Select options={[{ value: "draft", label: "Draft" }, { value: "published", label: "Published" }]} />
      </Form.Item>
      <Form.Item label="Steps" name="content">
        <Input.TextArea rows={8} placeholder="Decision rules, handling steps, and reply wording" />
      </Form.Item>
      <Button type="primary">Save</Button>
    </Form>
  );
}
