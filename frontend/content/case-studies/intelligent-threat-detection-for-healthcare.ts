import type { CaseStudy } from "../types";

const data: CaseStudy = {
  slug: "intelligent-threat-detection-for-healthcare",
  category: "Cybersecurity",
  date: "November 2025",
  readTime: "6 min read",
  title: "Intelligent Threat Detection for Healthcare",
  subtitle: "Protecting patient data with ML-based security that identifies threats in under 2 seconds",
  summary: "A leading NHS trust partnered with Data Panther to deploy ML-based threat detection, achieving sub-2-second threat identification and preventing a series of ransomware attacks that would have disrupted patient care.",
  sections: [
    {
      eyebrow: "THE CHALLENGE",
      heading: "The Challenge",
      paragraphs: [
        "A large NHS trust managing hospitals across three regions was facing an escalating cyber threat landscape. The trust's existing SIEM (Security Information and Event Management) system generated over 50,000 security alerts per day, of which fewer than 0.2% were genuine threats. Analysts were experiencing severe alert fatigue, and the manual investigation of suspicious activity was taking an average of 4.2 hours — far too slow to prevent fast-moving ransomware attacks, which can encrypt an entire network within 45 minutes. The trust had experienced two near-miss incidents in the preceding 18 months and was under pressure from NHS Digital to strengthen its cyber resilience posture.",
      ],
    },
    {
      eyebrow: "OUR APPROACH",
      heading: "Our Solution",
      paragraphs: [
        "Data Panther implemented a next-generation, ML-powered threat detection platform that replaced the rule-based SIEM logic with behavioural analytics. The system established baseline profiles for every user, device, and network segment across the trust's 14,000-endpoint estate. Anomaly detection models running on Azure Sentinel identified deviations from established behavioural patterns in real time, reducing alert volume by 94% while capturing 100% of the synthetic attack scenarios used in penetration testing validation. For the highest-severity alerts, the platform automatically isolated affected devices from the network within seconds using Microsoft Defender for Endpoint APIs, containing potential breaches before they could spread. A custom threat intelligence feed — enriched with NHS-sector-specific indicators of compromise — was integrated directly into the detection pipeline.",
      ],
    },
  ],
  results: [
    "Mean time to detect (MTTD) reduced from 4.2 hours to under 2 seconds for high-confidence threats",
    "Security alert volume reduced by 94%, eliminating analyst alert fatigue",
    "Zero successful ransomware incidents in the 12 months following deployment",
    "Three live ransomware attacks automatically contained within 8 seconds before lateral movement occurred",
    "NHS Digital Cyber Essentials Plus certification achieved and maintained",
    "Security operations team capacity freed up by 60%, redirected to strategic threat hunting",
  ],
  industry: "Healthcare / NHS",
  technologies: [
    "Microsoft Azure Sentinel",
    "Microsoft Defender for Endpoint",
    "Python",
    "scikit-learn",
    "Azure Machine Learning",
    "MITRE ATT&CK Framework",
    "KQL",
  ],
};

export default data;
