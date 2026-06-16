import { Timeline } from "antd";

export function SopVersionHistory() {
  return <Timeline items={[{ children: "v1 created" }, { children: "v2 added compensation rules" }]} />;
}
