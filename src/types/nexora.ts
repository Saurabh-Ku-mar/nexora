export type ThemePreference = "dark" | "light";

export type MilestoneStage = "current" | "planned";

export interface RoadmapMilestone {
  id: string;
  phase: string;
  title: string;
  stage: MilestoneStage;
  summary: string;
  deliverables: readonly string[];
}

export interface ProductPrinciple {
  id: string;
  index: string;
  title: string;
  description: string;
}

export interface EncryptionStage {
  step: number;
  actor: "Alice" | "Network" | "Bob";
  title: string;
  payloadState: string;
  detail: string;
}

export interface RouteStatusInfo {
  path: string;
  title: string;
  milestone: string;
  implemented: boolean;
  description: string;
}

export interface SecurityHeaderEntry {
  key: string;
  value: string;
}
