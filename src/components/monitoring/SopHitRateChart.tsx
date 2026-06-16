import { Column } from "@ant-design/charts";
import { Card } from "antd";

export function SopHitRateChart() {
  return (
    <Card title="SOP hit rate">
      <Column data={[{ day: "Mon", value: 72 }, { day: "Tue", value: 76 }, { day: "Wed", value: 78 }]} xField="day" yField="value" height={220} />
    </Card>
  );
}
