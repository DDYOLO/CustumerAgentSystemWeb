import type {
  KnowledgeArticle,
  MonitoringSummary,
  Sop,
  SopCandidate,
  Ticket,
  TicketDetail,
} from "../types/domain";

const API_BASE_URL = "";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}/api/backend${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export const api = {
  login: (payload: { email: string; password: string }) =>
    request<{ access_token: string; refresh_token: string; token_type: string }>("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  me: () => request<{ id: string; email: string; name: string; role: string }>("/api/v1/auth/me"),
  tickets: (params?: { status?: string; keyword?: string }) => {
    const search = new URLSearchParams();
    if (params?.status) search.set("status", params.status);
    if (params?.keyword) search.set("keyword", params.keyword);
    const query = search.toString();
    return request<Ticket[]>(`/api/v1/tickets${query ? `?${query}` : ""}`);
  },
  ticket: (ticketId: string) => request<TicketDetail>(`/api/v1/tickets/${ticketId}`),
  generateDraft: (ticketId: string) =>
    request<{ ticketId: string; content: string; riskWarnings: string[] }>(`/api/v1/ai/tickets/${ticketId}/draft`, {
      method: "POST",
    }),
  sops: () => request<Sop[]>("/api/v1/sops"),
  sop: (sopId: string) => request<Sop>(`/api/v1/sops/${sopId}`),
  knowledge: () => request<KnowledgeArticle[]>("/api/v1/knowledge"),
  sopCandidates: () => request<SopCandidate[]>("/api/v1/sop-candidates"),
  monitoring: () => request<MonitoringSummary>("/api/v1/monitoring/summary"),
};
