import { apiClient } from "./apiClient";

export async function getKnowledgeArticles() {
  const response = await apiClient.get("/api/v1/knowledge");
  return response.data;
}
