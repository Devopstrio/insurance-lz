export enum InsuranceWorkloadType {
  POLICY_ADMIN = "POLICY_ADMIN",
  CLAIMS_PROCESSING = "CLAIMS_PROCESSING",
  UNDERWRITING = "UNDERWRITING",
  ACTUARIAL_ANALYTICS = "ACTUARIAL_ANALYTICS",
  CUSTOMER_PORTAL = "CUSTOMER_PORTAL",
  PARTNER_GATEWAY = "PARTNER_GATEWAY"
}

export enum ComplianceStandard {
  IRDAI = "IRDAI",
  GDPR = "GDPR",
  HIPAA = "HIPAA",
  PCI_DSS = "PCI_DSS",
  SOC2 = "SOC2"
}

export interface LandingZone {
  id: string;
  name: string;
  provider: "AWS" | "AZURE" | "GCP";
  region: string;
  workloadType: InsuranceWorkloadType;
  status: "PROVISIONING" | "READY" | "DEGRADED" | "ERROR";
  complianceScore: number;
  riskRating: "LOW" | "MEDIUM" | "HIGH";
  createdAt: string;
}

export interface ComplianceFinding {
  id: string;
  standard: ComplianceStandard;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  resourceId: string;
  description: string;
  remediation: string;
}

export interface ActuarialMetrics {
  totalProcessedPolicies: number;
  dataLakeSizeGB: number;
  avgAnalyticsLatency: number;
  computeUtilization: number;
}
