import type { Metadata } from "next";
import { MilestoneNotice } from "@/components/ui/MilestoneNotice";

export const metadata: Metadata = {
  title: "Chat",
  description:
    "NEXORA private messaging and end-to-end encryption are planned for Milestones 3 and 4.",
};

export default function ChatPage() {
  return (
    <MilestoneNotice
      routeLabel="/chat"
      milestone="Milestones 3 & 4 · Planned"
      title="Messaging workspace is not yet available"
      description="Realtime direct messaging and client-side end-to-end encryption are planned for future reviewed milestones. No mock conversations or simulated encryption indicators are displayed here."
      plannedCapabilities={[
        "Milestone 3: Direct conversations, contact handles, and responsive desktop/mobile chat layout",
        "Milestone 4: Audited client-side device keys and end-to-end message encryption",
        "Verified safety number comparison between participants",
      ]}
    />
  );
}
