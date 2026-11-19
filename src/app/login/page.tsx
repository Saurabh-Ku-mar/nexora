import type { Metadata } from "next";
import { MilestoneNotice } from "@/components/ui/MilestoneNotice";

export const metadata: Metadata = {
  title: "Login",
  description:
    "NEXORA authentication is scheduled for Milestone 2 and is not yet active in Milestone 1.",
};

export default function LoginPage() {
  return (
    <MilestoneNotice
      routeLabel="/login"
      milestone="Milestone 2 · Planned"
      title="Sign in is not yet available"
      description="Username-based authentication and server-verified sessions will be introduced in Milestone 2. NEXORA does not simulate logins or store credentials in browser storage."
      plannedCapabilities={[
        "Username and passphrase sign-in without phone numbers",
        "Zod-validated authentication boundary with server-verified sessions",
        "Dedicated Supabase authentication integration in Milestone 2",
      ]}
    />
  );
}
