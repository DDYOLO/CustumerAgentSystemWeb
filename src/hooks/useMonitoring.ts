import { useQuery } from "@tanstack/react-query";
import { getMonitoringSummary } from "../services/monitoringApi";

export function useMonitoring() {
  return useQuery({ queryKey: ["monitoring-summary"], queryFn: getMonitoringSummary });
}
