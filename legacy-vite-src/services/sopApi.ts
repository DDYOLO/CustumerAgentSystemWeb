import type { Sop } from "../types/sop";
import { apiClient } from "./apiClient";

const mockSops: Sop[] = [
  { id: "sop-1", name: "Shipping delay SOP", category: "Shipping", status: "published", hitRate: 78 },
  { id: "sop-2", name: "Refund dispute SOP", category: "After-sales", status: "draft", hitRate: 63 },
];

export async function getSops(): Promise<Sop[]> {
  if (import.meta.env.DEV) return mockSops;
  const response = await apiClient.get("/api/v1/sops");
  return response.data;
}
