import { useQuery } from "@tanstack/react-query";
import { getTicketDetail } from "../services/ticketApi";

export function useTicketDetail(ticketId: string) {
  return useQuery({ queryKey: ["ticket", ticketId], queryFn: () => getTicketDetail(ticketId), enabled: Boolean(ticketId) });
}
