import type { Metadata } from "next";
import ContactView from "@/components/ContactView";
export const metadata: Metadata = { title: "Contact Us | Data Panther", description: "Partner with us to design intelligent solutions that combine advanced AI capabilities with measurable business impact." };
export default function Page() { return <ContactView />; }
