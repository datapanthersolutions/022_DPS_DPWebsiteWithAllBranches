import type { Page } from "../types";

const page: Page = {
  slug: "ThreatDetection",
  title: "Threat Detection | Data Panther",
  description: "Data Panther delivers AI-driven threat detection systems that continuously monitor infrastructure, identify anomalies, and prevent security incidents before they impact operations.",
  sections: [
    {
      "type": "hero",
      "eyebrow": "THREAT DETECTION",
      "title": "Threat Detection\nIntelligent Cybersecurity",
      "text": [
        "Data Panther delivers AI-driven threat detection systems that continuously monitor infrastructure, identify anomalies, and prevent security incidents before they impact operations."
      ],
      "image": "/img/cyberthreatdetection.webp"
    },
    {
      "type": "checklist",
      "eyebrow": "THE THREAT LANDSCAPE",
      "title": "Detect Threats Before They Become Breaches",
      "text": [
        "Modern cyber threats move faster than traditional security systems can respond. Traditional tools generate massive volumes of alerts — but lack the intelligence to prioritize and respond effectively."
      ],
      "columns": [
        {
          "title": "Businesses today face",
          "tone": "neg",
          "items": [
            "Sophisticated ransomware attacks",
            "Insider threats",
            "Credential theft",
            "Phishing campaigns",
            "Unauthorized access attempts",
            "Data exfiltration",
            "Zero-day vulnerabilities"
          ]
        },
        {
          "title": "AI-powered detection that",
          "tone": "pos",
          "items": [
            "Monitor environments in real time",
            "Detect anomalies instantly",
            "Predict suspicious behavior",
            "Accelerate incident response",
            "Strengthen cyber resilience"
          ]
        }
      ]
    },
    {
      "type": "checklist",
      "eyebrow": "THE GAP",
      "title": "Why Traditional Security Systems Are No Longer Enough",
      "columns": [
        {
          "title": "Organizations still rely on",
          "tone": "neg",
          "items": [
            "Rule-based detection",
            "Manual monitoring",
            "Reactive security workflows",
            "Siloed security tools"
          ]
        },
        {
          "title": "These systems struggle to",
          "tone": "neg",
          "items": [
            "Detect evolving attack patterns",
            "Analyze large-scale data in real time",
            "Identify insider threats",
            "Prioritize risks accurately"
          ]
        },
        {
          "title": "The result",
          "tone": "neg",
          "items": [
            "Alert fatigue",
            "Slow incident response",
            "Undetected threats",
            "Increased breach risk"
          ]
        }
      ]
    },
    {
      "type": "checklist",
      "eyebrow": "THE SHIFT",
      "title": "What is AI-Powered Threat Detection?",
      "text": [
        "AI-powered threat detection identifies suspicious activity and cyber risks before they escalate into major incidents — and continuously learns to get sharper over time."
      ],
      "columns": [
        {
          "title": "It combines",
          "tone": "pos",
          "items": [
            "Machine learning",
            "Behavioral analytics",
            "Real-time monitoring",
            "Predictive intelligence",
            "Automated response systems"
          ]
        },
        {
          "title": "It continuously learns from",
          "tone": "pos",
          "items": [
            "User behavior",
            "Network traffic",
            "Endpoint activity",
            "System anomalies",
            "Historical attack patterns"
          ]
        }
      ],
      "note": "Reactive security→Proactive cyber intelligence"
    },
    {
      "type": "cards",
      "eyebrow": "WHAT WE BUILD",
      "title": "Core Threat Detection Capabilities",
      "variant": "numbered",
      "columns": 2,
      "dark": true,
      "items": [
        {
          "title": "Real-Time Threat Monitoring",
          "text": "Continuously monitor networks, servers, cloud infrastructure, endpoints, applications, and user activity.",
          "bullets": [
            "Unauthorized access attempts",
            "Malware activity",
            "Suspicious login behavior",
            "Network anomalies",
            "Data exfiltration attempts"
          ],
          "note": "Business impact: Faster threat visibility, reduced response time, and lower breach risk.",
          "icon": "eye",
          "tag": "01"
        },
        {
          "title": "AI-Based Behavioral Analytics",
          "text": "Traditional systems detect known threats; AI detects abnormal behavior — even when the threat is previously unknown.",
          "bullets": [
            "User behavior patterns",
            "Device activity",
            "Login anomalies",
            "Access privilege misuse",
            "Insider threat indicators"
          ],
          "note": "Business impact: Detect insider threats early, reduce false positives, and improve contextual threat intelligence.",
          "icon": "users",
          "tag": "02"
        },
        {
          "title": "Anomaly Detection & Machine Learning Intelligence",
          "text": "AI models identify unusual patterns across massive datasets.",
          "bullets": [
            "Abnormal traffic spikes",
            "Suspicious API activity",
            "Irregular system behavior",
            "Unexpected data transfers"
          ],
          "note": "Business impact: Continuously improves accuracy, learns evolving attack patterns, and detects threats traditional systems miss.",
          "icon": "brain",
          "tag": "03"
        },
        {
          "title": "Endpoint Detection & Response (EDR)",
          "text": "Endpoints are one of the most common attack surfaces — laptops, servers, mobile devices, workstations, and remote employee systems.",
          "bullets": [
            "Threat isolation",
            "Malware detection",
            "Device risk scoring",
            "Automated response actions"
          ],
          "note": "Business impact: Reduce lateral movement and contain threats quickly.",
          "icon": "cpu",
          "tag": "04"
        },
        {
          "title": "Network Threat Detection",
          "text": "Monitor network traffic continuously to detect threats as they emerge.",
          "bullets": [
            "Intrusions",
            "Lateral movement",
            "DDoS patterns",
            "Suspicious communication attempts"
          ],
          "note": "Business impact: Stronger pattern recognition, threat correlation, and traffic anomaly detection.",
          "icon": "network",
          "tag": "05"
        },
        {
          "title": "Cloud Security Monitoring",
          "text": "As organizations migrate to AWS, Azure, Google Cloud, and SaaS, attack surfaces expand significantly.",
          "bullets": [
            "Misconfigurations",
            "Unauthorized access",
            "Cloud workload anomalies",
            "Credential misuse"
          ],
          "note": "Business impact: Continuous visibility across expanding cloud environments.",
          "icon": "cloud",
          "tag": "06"
        },
        {
          "title": "Threat Intelligence & Risk Analytics",
          "text": "Transform security data into actionable intelligence.",
          "bullets": [
            "Threat scoring",
            "Vulnerability prioritization",
            "Risk heatmaps",
            "Incident correlation"
          ],
          "note": "Business impact: Smarter decision-making, faster prioritization, and reduced alert overload.",
          "icon": "gauge",
          "tag": "07"
        },
        {
          "title": "Incident Response Automation (SOAR)",
          "text": "Reduce response time with intelligent automation.",
          "bullets": [
            "Threat triage",
            "Alert escalation",
            "Initial containment",
            "Workflow orchestration"
          ],
          "note": "Business impact: Faster response, reduced manual workload, and improved SOC efficiency.",
          "icon": "zap",
          "tag": "08"
        }
      ]
    },
    {
      "type": "cards",
      "eyebrow": "PROBLEM → SOLUTION",
      "title": "Common Security Challenges We Solve",
      "variant": "list",
      "columns": 2,
      "items": [
        {
          "title": "Too many alerts, not enough clarity",
          "text": "AI prioritizes real threats and reduces alert fatigue."
        },
        {
          "title": "Slow incident response",
          "text": "Automate detection and response workflows."
        },
        {
          "title": "Insider threats going undetected",
          "text": "Behavioral analytics identifies suspicious internal activity."
        },
        {
          "title": "Limited visibility across systems",
          "text": "Centralized threat monitoring dashboards."
        },
        {
          "title": "Expanding cloud attack surface",
          "text": "Secure cloud workloads and infrastructure."
        }
      ]
    },
    {
      "type": "cards",
      "eyebrow": "WHO WE SERVE",
      "title": "Industries We Support",
      "variant": "icon",
      "columns": 3,
      "items": [
        {
          "title": "Healthcare",
          "text": "Protect sensitive patient and operational data.",
          "icon": "hospital"
        },
        {
          "title": "Finance",
          "text": "Detect fraud, unauthorized access, and compliance risks.",
          "icon": "bank"
        },
        {
          "title": "Enterprise & Corporate",
          "text": "Monitor distributed infrastructure and remote work environments.",
          "icon": "globe"
        },
        {
          "title": "Logistics & Operations",
          "text": "Protect operational systems and connected infrastructure.",
          "icon": "truck"
        },
        {
          "title": "Retail & E-commerce",
          "text": "Secure payment systems and customer data.",
          "icon": "cart"
        }
      ]
    },
    {
      "type": "steps",
      "eyebrow": "OUR PROCESS",
      "title": "Our Threat Detection Approach",
      "items": [
        {
          "title": "Security Assessment & Gap Analysis",
          "bullets": [
            "Current security posture",
            "Existing tools",
            "Monitoring gaps",
            "Vulnerabilities"
          ]
        },
        {
          "title": "Architecture & Integration",
          "bullets": [
            "Networks",
            "Endpoints",
            "Cloud infrastructure",
            "Applications"
          ]
        },
        {
          "title": "AI Intelligence & Detection Enablement",
          "bullets": [
            "Behavioral analytics",
            "Anomaly detection",
            "Predictive threat intelligence"
          ]
        },
        {
          "title": "Automation & Optimization",
          "bullets": [
            "Incident response",
            "Security workflows",
            "Threat prioritization"
          ]
        }
      ]
    },
    {
      "type": "cards",
      "eyebrow": "THE RESULTS",
      "title": "Business Outcomes to Expect",
      "variant": "icon",
      "columns": 3,
      "items": [
        {
          "title": "Faster Threat Detection",
          "text": "Identify attacks before major damage occurs.",
          "icon": "search"
        },
        {
          "title": "Reduced Financial Risk",
          "text": "Minimize breach-related losses.",
          "icon": "dollar"
        },
        {
          "title": "Faster Incident Response",
          "text": "Automate triage and containment.",
          "icon": "clock"
        },
        {
          "title": "Real-Time Security Visibility",
          "text": "Gain centralized monitoring and intelligence.",
          "icon": "eye"
        },
        {
          "title": "Stronger Compliance & Governance",
          "text": "Support HIPAA, GDPR, ISO, and industry standards.",
          "icon": "scale"
        },
        {
          "title": "AI-Driven Security Operations",
          "text": "Enable scalable cyber resilience.",
          "icon": "shield"
        }
      ]
    },
    {
      "type": "checklist",
      "eyebrow": "WHY US",
      "title": "Why Data Panther Solutions?",
      "text": [
        "We combine intelligence, expertise, and automation to build proactive security ecosystems for modern businesses."
      ],
      "columns": [
        {
          "tone": "pos",
          "items": [
            "AI intelligence",
            "Cybersecurity expertise",
            "Automation",
            "Real-time analytics"
          ]
        }
      ]
    },
    {
      "type": "split",
      "title": "Ready to Strengthen Your Security Operations?",
      "text": [
        "Cyber threats are getting faster, smarter, and more automated. Data Panther helps businesses move beyond reactive security and build AI-powered cyber resilience."
      ],
      "bullets": [
        "Detect threats faster",
        "Reduce operational risk",
        "Improve security visibility",
        "Build intelligent defense systems"
      ],
      "cta": {
        "label": "Book a Security Consultation",
        "href": "/ContactUs/"
      }
    }
  ],
};

export default page;
