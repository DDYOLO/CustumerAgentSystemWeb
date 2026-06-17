import { useMutation } from "@tanstack/react-query";
import { login } from "../services/authApi";

export function useAuth() {
  return useMutation({ mutationFn: login });
}
