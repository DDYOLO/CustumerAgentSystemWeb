import type { LoginRequest, LoginResponse } from "../types/auth";
import { apiClient } from "./apiClient";

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const response = await apiClient.post("/api/v1/auth/login", payload);
  return response.data;
}
