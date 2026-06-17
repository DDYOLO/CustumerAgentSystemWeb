export type RiskLevel = "low" | "medium" | "high" | "critical";

export interface Ticket {
  id: string;
  subject: string;
  customerEmail: string;
  status: string;
  priority: string;
  riskLevel: RiskLevel;
  intent: string;
  language: string;
  updatedAt: string;
}

export interface EmailMessage {
  id: string;
  sender: string;
  recipient: string;
  content: string;
  sentAt: string;
}

export interface SopMatch {
  id: string;
  name: string;
  score: number;
  triggers: string[];
  evidence: string;
}

export interface TicketDetail extends Ticket {
  aiSummary: string;
  extractedEntities: Record<string, string>;
  missingInfo: string[];
  suggestedActions: string[];
  messages: EmailMessage[];
  sopMatch?: SopMatch;
  draft: string;
  riskWarnings: string[];
}

export interface Sop {
  id: string;
  name: string;
  category: string;
  status: string;
  hitRate: number;
  triggers: string[];
  content: string;
  updatedAt: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: string;
  status: string;
  updatedAt: string;
}

export interface SopCandidate {
  id: string;
  title: string;
  category: string;
  emailCount: number;
  confidence: number;
  reason: string;
}

export interface MonitoringSummary {
  pendingTickets: number;
  highRiskTickets: number;
  sopHitRate: number;
  aiCalls: number;
  avgFirstResponseMinutes: number;
}
