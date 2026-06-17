import { Col, Row, Typography } from "antd";
import { useParams } from "react-router-dom";
import { AiSummaryPanel } from "../../components/inbox/AiSummaryPanel";
import { EmailThread } from "../../components/inbox/EmailThread";
import { ReplyEditor } from "../../components/inbox/ReplyEditor";
import { SopMatchPanel } from "../../components/inbox/SopMatchPanel";
import { useTicketDetail } from "../../hooks/useTicketDetail";

export function TicketDetailPage() {
  const { ticketId = "" } = useParams();
  const { data } = useTicketDetail(ticketId);

  return (
    <div>
      <Typography.Title level={2}>{data?.subject ?? "Ticket detail"}</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={15}>
          <EmailThread ticket={data} />
          <ReplyEditor />
        </Col>
        <Col xs={24} xl={9}>
          <AiSummaryPanel ticket={data} />
          <SopMatchPanel ticket={data} />
        </Col>
      </Row>
    </div>
  );
}
