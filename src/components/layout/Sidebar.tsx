import {
  DashboardOutlined,
  DatabaseOutlined,
  ExperimentOutlined,
  InboxOutlined,
  LineChartOutlined,
  ProfileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const { Sider } = Layout;

const items = [
  { key: "/", icon: <DashboardOutlined />, label: "Dashboard" },
  { key: "/inbox", icon: <InboxOutlined />, label: "Tickets" },
  { key: "/sop", icon: <ProfileOutlined />, label: "SOP" },
  { key: "/sop-candidates", icon: <ExperimentOutlined />, label: "SOP Candidates" },
  { key: "/knowledge", icon: <DatabaseOutlined />, label: "Knowledge" },
  { key: "/monitoring", icon: <LineChartOutlined />, label: "Monitoring" },
  { key: "/settings", icon: <SettingOutlined />, label: "Settings" },
];

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedKey =
    items.find((item) => location.pathname === item.key || (item.key !== "/" && location.pathname.startsWith(item.key)))?.key ?? "/";

  return (
    <Sider width={232} className={styles.sider}>
      <div className={styles.brand}>
        <Typography.Text className={styles.logo}>AI</Typography.Text>
        <span>Support Admin</span>
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]} items={items} onClick={({ key }) => navigate(key)} />
    </Sider>
  );
}
