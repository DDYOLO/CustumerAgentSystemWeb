import { useQuery } from "@tanstack/react-query";
import { getTickets } from "../services/ticketApi";

export function useTickets(params: { status?: string; keyword?: string }) {
  return useQuery({ queryKey: ["tickets", params], queryFn: () => getTickets(params) });
}
