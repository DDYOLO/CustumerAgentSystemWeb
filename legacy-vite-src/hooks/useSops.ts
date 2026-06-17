import { useQuery } from "@tanstack/react-query";
import { getSops } from "../services/sopApi";

export function useSops() {
  return useQuery({ queryKey: ["sops"], queryFn: getSops });
}
