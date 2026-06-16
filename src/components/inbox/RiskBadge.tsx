import { Tag } from "antd";
import type { RiskLevel } from "../../types/ticket";

const colorMap: Record<RiskLevel, string> = {
  low: "green",
  medium: "gold",
  high: "red",
};

export function RiskBadge({ level }: { level: RiskLevel }) {
  return <Tag color={colorMap[level]}>{level}</Tag>;
}
