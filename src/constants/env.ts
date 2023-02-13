export const NODE_ENV = {
  PRODUCTION: "production",
  DEVELOPMENT: "development",
};

export type AppEnvType = "LOCAL" | "DEV" | "QA" | "UAT" | "PROD";
export const APP_ENV: Record<AppEnvType, AppEnvType> = {
  LOCAL: "LOCAL",
  DEV: "DEV",
  QA: "QA",
  UAT: "UAT",
  PROD: "PROD",
};
