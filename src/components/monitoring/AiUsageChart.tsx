import { Line } from "@ant-design/charts";
import { Card } from "antd";

export function AiUsageChart() {
  return (
    <Card title="AI usage">
      <Line data={[{ day: "Mon", value: 80 }, { day: "Tue", value: 120 }, { day: "Wed", value: 186 }]} xField="day" yField="value" height={220} />
    </Card>
  );
}
