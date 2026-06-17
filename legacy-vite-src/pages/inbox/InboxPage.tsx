import { Card, Typography } from "antd";
import { TicketList } from "../../components/inbox/TicketList";
import { useTickets } from "../../hooks/useTickets";

export function InboxPage() {
  const { data, isLoading } = useTickets({ status: "pending" });

  return (
    <div>
      <Typography.Title level={2}>Tickets</Typography.Title>
      <Card>
        <TicketList loading={isLoading} tickets={data ?? []} />
      </Card>
    </div>
  );
}
