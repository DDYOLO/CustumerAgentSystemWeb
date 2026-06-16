import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import styles from "./AppLayout.module.scss";

const { Content } = Layout;

export function AppLayout() {
  return (
    <Layout className={styles.shell}>
      <Sidebar />
      <Layout>
        <Topbar />
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
