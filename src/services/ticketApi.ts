import type { Ticket, TicketDetail } from "../types/ticket";
import { apiClient } from "./apiClient";

const mockTickets: Ticket[] = [
  { id: "ticket-1", subject: "Shipping delay", customerEmail: "customer@example.com", status: "pending", riskLevel: "high", updatedAt: "2026-06-17 10:20" },
  { id: "ticket-2", subject: "Invoice update", customerEmail: "buyer@example.com", status: "draft_ready", riskLevel: "medium", updatedAt: "2026-06-17 09:42" },
];

export async function getTickets(params: { status?: string; keyword?: string }): Promise<Ticket[]> {
  if (import.meta.env.DEV) return mockTickets.filter((ticket) => !params.keyword || ticket.subject.includes(params.keyword));
  const response = await apiClient.get("/api/v1/tickets", { params });
  return response.data;
}

export async function getTicketDetail(ticketId: string): Promise<TicketDetail> {
  if (import.meta.env.DEV) {
    return {
      ...(mockTickets.find((ticket) => ticket.id === ticketId) ?? mockTickets[0]),
      aiSummary: "The customer reports a delayed order. Check tracking and prepare a compensation response.",
      messages: [
        { sender: "customer@example.com", content: "My order has not arrived. Please help.", sentAt: "10:20" },
        { sender: "support@example.com", content: "We received your message and will check it.", sentAt: "10:36" },
      ],
      sopMatch: { name: "Shipping delay SOP", score: 86 },
    };
  }
  const response = await apiClient.get(`/api/v1/tickets/${ticketId}`);
  return response.data;
}
