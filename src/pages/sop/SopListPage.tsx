import { Card, Typography } from "antd";
import { SopTable } from "../../components/sop/SopTable";
import { useSops } from "../../hooks/useSops";

export function SopListPage() {
  const { data, isLoading } = useSops();

  return (
    <div>
      <Typography.Title level={2}>SOP Management</Typography.Title>
      <Card>
        <SopTable loading={isLoading} sops={data ?? []} />
      </Card>
    </div>
  );
}
