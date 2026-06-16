import { Alert, Button, Card, Input, Space } from "antd";
import styles from "./ReplyEditor.module.scss";

export function ReplyEditor() {
  return (
    <Card title="Reply draft" className={styles.editor}>
      <Alert type="warning" showIcon message="Review policy, amount, and promised timeline before sending." />
      <Input.TextArea className={styles.textarea} rows={8} defaultValue="Hello, we received your message. We will check the shipping status and provide an update shortly." />
      <Space>
        <Button type="primary">Send reply</Button>
        <Button>Regenerate</Button>
        <Button>Save draft</Button>
      </Space>
    </Card>
  );
}
