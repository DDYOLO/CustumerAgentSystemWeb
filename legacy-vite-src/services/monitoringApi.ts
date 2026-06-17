import type { MonitoringSummary } from "../types/monitoring";
import { apiClient } from "./apiClient";

export async function getMonitoringSummary(): Promise<MonitoringSummary> {
  if (import.meta.env.DEV) return { pendingTickets: 24, highRiskTickets: 3, sopHitRate: 78, aiCalls: 186 };
  const response = await apiClient.get("/api/v1/monitoring/summary");
  return response.data;
}
