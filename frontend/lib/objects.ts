import type { ObjectVariant } from "@/components/three/HeroObject";

// Which 3D object each page's hero shows, picked to suit the subject.
const bySlug: Record<string, ObjectVariant> = {
  AboutUs: "knot", OurStory: "rings", MissionAndVision: "crystal", Partners: "orbit", Investor: "blocks", careers: "blob",
  Services: "knot", Solutions: "crystal", GenerativeAI: "blob", AIOps: "blocks", ConversationalAI: "orbit",
  DataModernisation: "blocks", Mainframe: "rings", ThreatDetection: "shield", CloudMigration: "orbit", ITSupport: "rings",
  FinancialServices: "knot", Healthcare: "helix", RetailEcommerce: "crystal", Manufacturing: "rings",
  SupplyChain: "orbit", CustomerExperience: "blob", RiskManagement: "shield", Sustainability: "crystal",
  legal: "shield", privacy: "shield", cookies: "shield",
};
const cycle: ObjectVariant[] = ["crystal", "rings", "blob", "orbit", "knot", "blocks"];

export const heroObject = (slug?: string): ObjectVariant => (slug && bySlug[slug]) || "knot";
// A different object for the n-th text-only section on a page.
export const sectionObject = (slug: string | undefined, n: number): ObjectVariant => {
  const first = heroObject(slug);
  const rest = cycle.filter((v) => v !== first);
  return rest[n % rest.length];
};
