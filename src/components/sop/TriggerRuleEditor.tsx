import { Form, Input, Select } from "antd";

export function TriggerRuleEditor() {
  return (
    <Form layout="vertical">
      <Form.Item label="Keywords" name="keywords">
        <Select mode="tags" placeholder="Type a keyword and press Enter" />
      </Form.Item>
      <Form.Item label="Condition" name="condition">
        <Input.TextArea rows={4} placeholder="Example: shipped order exceeded promised delivery date" />
      </Form.Item>
    </Form>
  );
}
