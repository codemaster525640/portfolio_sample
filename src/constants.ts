/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ResumeData } from "./types";

export const RESUME_DATA: ResumeData = {
  basics: {
    name: "Davis Bbock",
    title: "Software Developer | Full Stack Developer",
    summary:
      "Full Stack Developer with expertise in building scalable web applications using React, Node.js, and Python. Proven track record of delivering high-quality software, from AI-powered sentiment analysis tools to responsive corporate web interfaces. Skilled in both frontend and backend development, with additional experience in network security (Fortinet). Committed to writing clean, optimized code and implementing user-centric solutions.",
    location: "vladivostok, Russia",
    email: "davisjrmaster@gmail.com",
    phone: "79644485608",
    links: [],
  },
  experience: [
    {
      company: "B2wise",
      role: "Jr. Web Developer",
      dates: "May 2023 – January 2026",
      location: "Remote",
      bullets: [
        "Led the development of high-performance web interfaces using React.js and Tailwind CSS, focusing on professional corporate standards.",
        "Engineered RESTful APIs and integrated them with frontend modules, improving application responsiveness by 30%.",
        "Optimized client-side performance and Core Web Vitals, ensuring seamless user experiences across various devices.",
        "Collaborated with cross-functional teams to deliver end-to-end full-stack solutions.",
      ],
    },
    {
      company: "Balizero",
      role: "Supervisor",
      dates: "October 2022 – April 2023",
      location: "Remote",
      bullets: [
        "Managed a team of 15+ Meter Readers working under DVVNL, ensuring 100% accuracy in data collection.",
        "Handled customer escalations and resolved billing issues, maintaining high satisfaction ratings.",
        "Monitored field activities and assigned daily targets to ensure timely completion of projects.",
        "Generated detailed performance reports and presented them to senior management for operational improvements.",
      ],
    },
    {
      company: "Waylight.se",
      role: "Network Security Intern",
      dates: "October 2021 – August 2022",
      location: "Remote",
      bullets: [
        "Mastered FortiGate 7.4 Operator fundamentals, including firewall configuration, VPN setup, and security policies.",
        "Configured and managed network security infrastructures during a comprehensive 10-week internship.",
        "Achieved certifications in Network Security Expert Level 1 & 2 by passing rigorous assessments.",
      ],
    },
    {
      company: "DevelopX",
      role: "Web Development Intern",
      dates: "April 2018 - May 2021",
      location: "Remote",
      bullets: [
        "Developed and optimized multiple responsive web pages using HTML5, CSS3, and JavaScript.",
        "Collaborated on version-controlled projects using Git/GitHub, ensuring seamless team integration.",
        "Assisted in deploying production-ready websites and maintaining cross-browser compatibility.",
      ],
    },
  ],
  achievements: [
    {
      title: "Sentiment Analysis of WhatsApp chat for sustainability",
      context:
        "Presented research paper at ICRTICC-2025, Galgotias College of Engineering and Technology",
      type: "Publication",
    },
    {
      title: "FortiGate 7.4 Operator Certification",
      context: "10-week internship at Fortinet",
      type: "Certification",
    },
    {
      title: "Passed all Fortinet security assessments",
      context:
        "Successfully completed multiple modules covering firewall, VPN, and security policies",
      type: "Performance",
    },
    {
      title: "Team Leadership",
      context: "Managed a team of Meter Readers for over 1.5 years",
      type: "Leadership",
    },
    {
      title: "Data Analyst Big 4 Ready",
      context: "Advanced data analytics certification from OneRoadmap",
      type: "Certification",
    },
  ],
  projects: [
    {
      title: "Sentiment Analysis of WhatsApp Chat for Sustainability",
      stack: ["Python", "Flask", "AI", "Machine Learning", "NLP"],
      bullets: [
        "Developed a full-stack AI-powered sentiment analysis tool using Flask for the backend, processing real-time WhatsApp export data.",
        "Implemented Advanced Natural Language Processing (NLP) models to categorize emotions and provide insights into conversational sustainability.",
        "Presented the research paper at the International Conference on Recent Trends in Intelligent Computing and Communication (ICRTICC-2025).",
      ],
      certificateUrl: "/Project_Certificate.pdf",
    },
    {
      title: "Modern Interactive Portfolio",
      stack: ["React.js", "Tailwind CSS", "Motion", "Typescript"],
      bullets: [
        "Architected a professional-grade personal brand platform with interactive elements and high-quality PDF generation capabilities.",
        "Implemented a dynamic resume builder that generates ATS-friendly, corporate-standard PDF exports matching recruiter expectations.",
        "Optimized for 100% responsiveness and accessibility, ensuring cross-device compatibility.",
      ],
    },
  ],
  skills: {
    "Backend & AI": [
      "Python",
      "Flask",
      "FastAPI",
      "ML libraries",
      "Node.js",
      "MongoDB",
      "SQL",
    ],
    Frontend: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "jQuery",
    ],
    "Tools & Others": [
      "Git",
      "GitHub",
      "Network Security",
      "Firewall Configuration",
      "VPN Setup",
    ],
  },
  education: [
    {
      institution: "Oracle",
      degree: "Oracle Certified Expert, EE 6 Web Services Developer",
      dates: "May 2018 - Present (8 years and 1 month)",
    },
    {
      institution: "Oracle",
      degree:
        "Oracle Certified Expert, Java Platfrom, EE 6 Web Component Developer",
      dates: "June 2025 - Present (1 year)",
    },
    {
      institution: "Oracle",
      degree: "Oracle Certified Professional Java SE 7 Programmer",
      dates: "March 2026— Present (3 months)",
    },
  ],
  certifications: [
    {
      name: "Oracle Certified Expert, EE 6 Web Services Developer",
      // url: "https://training.fortinet.com/pluginfile.php/1/tool_certificate/issues/1776360640/2583055293KA.pdf",
      url: `${import.meta.env.BASE_URL}img/new_1.png`,
    },
    {
      name: "Oracle Certified Expert, Java Platfrom, EE 6 Web Component Developer",
      url: `${import.meta.env.BASE_URL}img/new_2.png`,
      // url: "https://training.fortinet.com/pluginfile.php/1/tool_certificate/issues/1776691816/1748126449KA.pdf",
    },
    {
      name: "Oracle Certified Professional Java SE 7 Programmer",
      url: `${import.meta.env.BASE_URL}img/new_3.png`,
      // url: "https://www.oneroadmap.io/skills/da/certificate/CERT-58F963A2",
    },
  ],
  extra: [],
};
