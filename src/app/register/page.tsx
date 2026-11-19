import type { Metadata } from "next";
import { MilestoneNotice } from "@/components/ui/MilestoneNotice";

export const metadata: Metadata = {
  title: "Register",
  description:
    "NEXORA username registration without a phone number is scheduled for Milestone 2.",
};

export default function RegisterPage() {
  return (
    <MilestoneNotice
      routeLabel="/register"
      milestone="Milestone 2 · Planned"
      title="Account registration is not yet available"
      description="Creating a phone-number-free NEXORA account is scheduled for Milestone 2. Registration is intentionally inactive in Milestone 1 until database persistence and session security are reviewed and shipped."
      plannedCapabilities={[
        "Unique username registration with no phone number required",
        "Strict passphrase requirements validated via Zod schemas",
        "Explicit consent to Privacy Policy and AGPL-3.0 Terms",
      ]}
    />
  );
}
