import { apiClient } from "./apiClient";

export async function generateDraft(ticketId: string) {
  const response = await apiClient.post(`/api/v1/ai/tickets/${ticketId}/draft`);
  return response.data;
}
