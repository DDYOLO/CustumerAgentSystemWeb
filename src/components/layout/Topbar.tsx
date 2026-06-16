import { BellOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout, Space, Typography } from "antd";
import styles from "./Topbar.module.scss";

const { Header } = Layout;

export function Topbar() {
  return (
    <Header className={styles.header}>
      <Typography.Text strong>AI Customer Support</Typography.Text>
      <Space size="middle">
        <Button icon={<BellOutlined />} />
        <Avatar icon={<UserOutlined />} />
        <Button icon={<LogoutOutlined />} href="/login">
          Logout
        </Button>
      </Space>
    </Header>
  );
}
