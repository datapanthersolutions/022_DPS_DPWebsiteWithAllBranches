import type { CaseStudy } from "../types";

const data: CaseStudy = {
  slug: "nlp-powered-contract-intelligence",
  category: "Natural Language Processing",
  date: "January 2026",
  readTime: "7 min read",
  title: "NLP-Powered Contract Intelligence for Legal Services",
  subtitle: "Automating contract review and risk extraction to reduce lawyer review time by 73% across a 4-million-document estate",
  summary: "Data Panther built an NLP-powered contract intelligence platform for a Magic Circle law firm, reducing manual contract review time by 73% and enabling the firm to process three times the contract volume with the same headcount.",
  sections: [
    {
      eyebrow: "THE CHALLENGE",
      heading: "The Challenge",
      paragraphs: [
        "A Magic Circle law firm managing one of the UK's largest corporate transaction practices held a contract estate of over 4 million documents spanning 30 years of transactional activity. Lawyers conducting due diligence for M&A transactions had to manually review thousands of contracts per deal, searching for key clauses (change of control, most-favoured nation, exclusivity, governing law, termination rights) and flagging areas of risk. Each mid-sized transaction required 2,000–3,000 hours of associate time for contract review alone, at a blended cost exceeding £800 per hour. Partners were under increasing pressure from clients to reduce fees while maintaining quality. Meanwhile, the firm was unable to leverage its own historical contract data as a competitive asset.",
      ],
    },
    {
      eyebrow: "OUR APPROACH",
      heading: "Our Solution",
      paragraphs: [
        "Data Panther designed and deployed a contract intelligence platform built on a fine-tuned large language model (based on a Legal-BERT architecture, further fine-tuned on 120,000 labelled contract clauses from the firm's own historical estate). The platform provided three core capabilities: automated clause extraction (identifying and classifying 47 standard clause types with 94.7% accuracy), risk scoring (flagging non-standard deviations from market-standard positions with severity ratings), and portfolio analytics (enabling the firm to surface aggregate risk exposure across client contract portfolios in minutes rather than months). The system was deployed as a secure private cloud instance within the firm's Microsoft Azure tenancy to satisfy client confidentiality obligations, with a clean-room architecture ensuring no client data was used to improve the shared model. A human-in-the-loop review interface allowed associates to validate or override AI extractions, with all decisions feeding a continuous learning pipeline.",
      ],
    },
  ],
  results: [
    "Manual contract review time reduced by 73% across instrumented deal types",
    "Contract processing capacity increased 3x with no change in headcount",
    "M&A due diligence cycle for a standard mid-market transaction reduced from 6 weeks to 11 days",
    "Clause extraction accuracy of 94.7% across 47 standard clause types",
    "Client fees for contract review workstreams reduced by an average of 35%, improving competitive positioning",
    "Portfolio risk analytics capability unlocked: clients can now receive estate-wide risk summaries in under 2 hours",
  ],
  industry: "Legal Services",
  technologies: [
    "Azure OpenAI",
    "Legal-BERT",
    "Python",
    "FastAPI",
    "Azure Cognitive Search",
    "React",
    "PostgreSQL",
    "Azure Kubernetes Service",
  ],
};

export default data;
