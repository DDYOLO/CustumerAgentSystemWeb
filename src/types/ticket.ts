export type RiskLevel = "low" | "medium" | "high";

export interface Ticket {
  id: string;
  subject: string;
  customerEmail: string;
  status: string;
  riskLevel: RiskLevel;
  updatedAt: string;
}

export interface EmailMessage {
  sender: string;
  content: string;
  sentAt: string;
}

export interface TicketDetail extends Ticket {
  aiSummary?: string;
  messages?: EmailMessage[];
  sopMatch?: {
    name: string;
    score: number;
  };
}
