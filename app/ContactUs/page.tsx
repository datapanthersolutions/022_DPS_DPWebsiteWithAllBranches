import type { Metadata } from "next";
import { seo } from "@/lib/seo";
import ContactView from "@/components/ContactView";
export const metadata: Metadata = seo({ title: "Contact Us | Data Panther", description: "Partner with us to design intelligent solutions that combine advanced AI capabilities with measurable business impact.", path: "/ContactUs/" });
export default function Page() { return <ContactView />; }
