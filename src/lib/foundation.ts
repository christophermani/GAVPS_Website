const education = "/images/education.jpg";
const community = "/images/community.jpg";
const healthcare = "/images/healthcare.jpg";
const blood = "/images/blood-donation.jpg";
import {
  BookOpen,
  HeartPulse,
  Droplet,
  Users,
  Sprout,
  HandHeart,
  Lightbulb,
  Briefcase,
} from "lucide-react";
export const photos = { education, community, healthcare, blood };
type Service = {
  slug: string;
  title: string;
  description: string;
  icon: typeof BookOpen;
  image: string;
  headline: string;
  intro: string[];
  points: string[];
  objective: string;
  cta: string;
};
export const services: Service[] = [
  {
    slug: "education-support",
    title: "Education & Skill Development",
    description:
      "Learning, career guidance, digital literacy and practical skills that expand opportunity.",
    icon: BookOpen,
    image: education,
    headline: "Empowering Minds. Expanding Possibilities.",
    intro: [
      "Education supports knowledge, confidence, critical thinking and informed choices. Learning also extends beyond classrooms: digital literacy, communication, career awareness and employability skills can help individuals access new opportunities.",
    ],
    points: [
      "Educational awareness: encouraging learning participation, academic guidance and awareness of available opportunities.",
      "Career guidance: supporting understanding of education pathways, workplace expectations and professional development.",
      "Digital literacy: promoting basic digital capability, online safety and responsible technology use.",
      "Life and employability skills: building communication, teamwork, problem-solving, résumé and interview awareness.",
      "Mentoring and learning support: exploring appropriate support by educators, professionals and volunteers.",
    ],
    objective:
      "Encourage stronger learning participation, improved confidence and better awareness of future opportunities.",
    cta: "Support Education",
  },
  {
    slug: "women-empowerment",
    title: "Women Empowerment",
    description:
      "Education, skills, information and participation that help women pursue opportunities.",
    icon: Users,
    image: community,
    headline: "When Women Grow, Communities Flourish.",
    intro: [
      "Women contribute substantially to family well-being and social progress. We aim to encourage their access to education, skill development, information, confidence and meaningful participation in economic and community life.",
    ],
    points: [
      "Education and literacy: encouraging continued learning and educational awareness.",
      "Vocational and entrepreneurship skills: exploring practical skill learning and introductory enterprise awareness.",
      "Financial and digital literacy: supporting awareness of banking, digital transactions and financial responsibility.",
      "Health, hygiene and rights: sharing appropriate information about well-being, dignity, safety and support services.",
      "Leadership and confidence: encouraging communication, participation and informed decision-making.",
    ],
    objective:
      "Support conditions where women are informed, confident and better equipped to pursue opportunities.",
    cta: "Support Women Empowerment",
  },
  {
    slug: "healthcare-awareness",
    title: "Healthcare & Well-being",
    description:
      "Preventive awareness, healthy practices and partnership-led outreach, not direct medical treatment.",
    icon: HeartPulse,
    image: healthcare,
    headline: "Awareness Today. Healthier Communities Tomorrow.",
    intro: [
      "Reliable health information supports individual well-being and stronger communities. Our focus is on preventive awareness, healthy practices and appropriate partnership-led outreach, not direct medical treatment.",
    ],
    points: [
      "Preventive health awareness: encouraging routine care, early consultation and informed health practices.",
      "Health and hygiene education: promoting sanitation, nutrition and healthy habits.",
      "Blood donation awareness: supporting voluntary donor awareness in coordination with authorised blood centres.",
      "Women and children’s health awareness: providing access to general educational resources and appropriate professional guidance.",
      "Mental well-being awareness: encouraging constructive dialogue and seeking qualified support when needed.",
      "Partner-led health camps: exploring activities with qualified and authorised healthcare institutions.",
    ],
    objective:
      "Strengthen awareness of health practices and appropriate pathways to professional assistance.",
    cta: "Explore Health Initiatives",
  },
  {
    slug: "environmental-awareness",
    title: "Environmental Protection",
    description:
      "Awareness and community action around conservation, cleanliness and responsible resource use.",
    icon: Sprout,
    image: community,
    headline: "A Greener Environment. A Healthier Future.",
    intro: [
      "Environmental responsibility is essential for present and future generations. We seek to promote awareness and community action around conservation, waste reduction, cleanliness and responsible resource use.",
    ],
    points: [
      "Tree plantation: promoting suitable planting activities and long-term sapling care.",
      "Water conservation: encouraging responsible water use and preservation.",
      "Cleanliness and sanitation: supporting safe and hygienic community environments.",
      "Waste and plastic reduction: raising awareness of segregation, reuse and appropriate disposal.",
      "Environmental education: engaging children, youth and families in sustainable practices.",
    ],
    objective:
      "Encourage informed environmental behaviour and locally relevant conservation activities.",
    cta: "Join a Green Initiative",
  },
  {
    slug: "youth-empowerment",
    title: "Youth Empowerment & Community Development",
    description: "Skills, mentorship, career awareness and volunteering for young people.",
    icon: Lightbulb,
    image: education,
    headline: "Inspiring Young People. Strengthening Society.",
    intro: [
      "Young people can contribute creativity, leadership and social responsibility to their communities. We aim to foster participation through skills, mentorship, career awareness and volunteering.",
    ],
    points: [
      "Leadership and teamwork: encouraging initiative, communication and cooperation.",
      "Career and employment awareness: helping youth explore study and workplace pathways.",
      "Personality and life skills: promoting confidence, interpersonal skills and problem-solving.",
      "Technology awareness: supporting responsible use of digital tools.",
      "Community service and citizenship: encouraging volunteering and ethical participation.",
    ],
    objective: "Help young people become confident and socially aware contributors.",
    cta: "Join Our Youth Network",
  },
  {
    slug: "community-welfare",
    title: "Social Welfare & Humanitarian Support",
    description: "Organised, appropriate and resource-conscious outreach that respects dignity.",
    icon: HandHeart,
    image: community,
    headline: "Compassion That Connects. Support That Matters.",
    intro: [
      "Social welfare begins with recognising the needs and dignity of vulnerable and underserved groups. We seek to encourage organised, appropriate and resource-conscious outreach.",
    ],
    points: [
      "Community needs assessment: listening to local concerns and understanding relevant challenges.",
      "Essential resource support: exploring permitted needs-based assistance within available resources.",
      "Awareness campaigns: sharing useful information about social issues and available support.",
      "Volunteer mobilisation: connecting supporters with appropriate outreach opportunities.",
      "Humanitarian collaboration: working with suitable institutions on identified community priorities.",
    ],
    objective: "Contribute to dignity, inclusion, community solidarity and improved awareness.",
    cta: "Support Community Welfare",
  },
  {
    slug: "blood-donation",
    title: "Blood Donation Awareness",
    description:
      "Informed voluntary donation awareness with authorised blood centres and qualified professionals.",
    icon: Droplet,
    image: blood,
    headline: "A Simple Act of Kindness Can Support a Life in Need",
    intro: [
      "Voluntary blood donation is an important part of healthcare support. GAVPS Foundation seeks to encourage informed participation and accurate awareness through responsible engagement with authorised blood centres and qualified healthcare professionals.",
      "Awareness initiatives may help potential donors understand general eligibility considerations, medical screening, donor safety and how to locate appropriate authorised donation services.",
    ],
    points: [
      "General eligibility considerations and donor safety.",
      "Medical screening explained by authorised providers.",
      "How to locate appropriate authorised donation services.",
      "Registration of interest, with explicit consent for relevant updates.",
    ],
    objective:
      "Encourage informed participation. Registration of interest does not establish eligibility to donate.",
    cta: "Register Donor Interest",
  },
  {
    slug: "skill-development",
    title: "Practical Skills",
    description: "Digital literacy, employability and career awareness within our education focus.",
    icon: Briefcase,
    image: community,
    headline: "Skills within Education & Skill Development.",
    intro: [
      "Practical skills sit within our education focus. Digital literacy, communication, career awareness and employability skills can help individuals access new opportunities.",
    ],
    points: [
      "Digital literacy, online safety and responsible technology use.",
      "Life and employability skills, including communication, teamwork and interview awareness.",
      "Career guidance on education pathways and workplace expectations.",
      "Mentoring and learning support from educators, professionals and volunteers.",
    ],
    objective:
      "Encourage stronger learning participation, improved confidence and better awareness of future opportunities.",
    cta: "Get Involved",
  },
];
export const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/1EqHyX2wXQ/" },
  { name: "Instagram", href: "https://www.instagram.com/gavpsfoundation" },
  { name: "YouTube", href: "https://www.youtube.com/@GavpsFoundation" },
  { name: "X (Twitter)", href: "https://x.com/GAVPSfoundation" },
];
export const pageTitles: Record<string, string> = {
  about: "About Us",
  "vision-mission": "Vision & Mission",
  services: "Our Core Focus Areas",
  events: "Events & Programmes",
  gallery: "Photo & Video Gallery",
  "press-releases": "News & Media",
  "blood-donation": "Blood Donation Awareness",
  volunteer: "Volunteer With Us",
  "our-team": "Leadership & Governance",
  "our-impact": "Our Impact & Community Stories",
  "partner-with-us": "Partnerships",
  donate: "Donations & Contributions",
  contact: "Contact Us",
  "privacy-policy": "Privacy Policy",
};
export function pageHead(title: string | undefined, description: string) {
  return {
    meta: [
      { title: `${title} | GAVPS Foundation` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | GAVPS Foundation` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
