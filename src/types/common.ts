export type ApiRequestStatus = "idle" | "pending" | "completed" | "failed";

export interface StoreAPIState {
  status: ApiRequestStatus;
  error?: Error;
}
