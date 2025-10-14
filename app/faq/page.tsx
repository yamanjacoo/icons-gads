import { FAQSection } from "@/components/FAQSection";
import MainNavbar from "@/components/MainNavbar";
import NewFooter from "@/components/NewFooter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const storeName = process.env.NEXT_PUBLIC_STORE_NAME;

  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: `What is ${storeName}?`,
          answer: `${storeName} is a premium icon library designed for modern creators. We offer high-quality, pixel-perfect icons in multiple formats and styles to elevate your design projects.`,
        },
        {
          question: "How many icons are included?",
          answer:
            "The number of icons varies by plan. Our Starter plan includes 50+ icons, Professional plan includes 150+ icons, Business plan includes 300+ icons, and Enterprise plan includes 500+ icons with regular updates.",
        },
        {
          question: "Do you offer custom icon design services?",
          answer:
            "Yes, we offer custom icon design services for Enterprise customers. Contact our sales team to discuss your specific requirements and get a custom quote.",
        },
      ],
    },
    {
      title: "Licensing & Usage",
      items: [
        {
          question: "What file formats are included with the icons?",
          answer:
            "Our icon packs include SVG, PNG, and Figma formats. SVG files are fully scalable and editable in vector editing software. PNG files are provided in multiple sizes for immediate use in your projects. Figma files allow for seamless integration with your Figma design workflow.",
        },
        {
          question: "Can I use the icons for commercial projects?",
          answer:
            "Yes, all our icon packs come with a commercial license. The specific usage rights depend on the plan you choose. Our Professional plan allows for use in a single commercial project, while our Business and Enterprise plans support multiple commercial projects and extended usage rights.",
        },
        {
          question: "Can I redistribute the icons?",
          answer:
            "No, you cannot redistribute the icons as standalone files or include them in icon packs or design asset collections for redistribution. You can only use them in your own projects as specified in your license agreement.",
        },
      ],
    },
    {
      title: "Technical Questions",
      items: [
        {
          question: "How do I implement the icons in my project?",
          answer:
            "Our icons are easy to implement in any project. For web projects, you can use the SVG files directly in your HTML or import them as React components. For design projects, you can use the Figma files or PNG files in your design software.",
        },
        {
          question: "Can I customize the icons?",
          answer:
            "All our icons are fully customizable. You can change colors, sizes, and styles to match your brand. Our Professional plan and above include advanced customization options, allowing you to modify stroke weights, corner radiuses, and other properties.",
        },
        {
          question: "Do you provide code examples for implementation?",
          answer:
            "Yes, we provide code examples for various frameworks including React, Vue, and Angular. Our documentation includes step-by-step guides for implementing the icons in your projects.",
        },
      ],
    },
    {
      title: "Billing & Support",
      items: [
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 14-day money-back guarantee if you're not satisfied with your purchase. Simply contact our support team within 14 days of your purchase, and we'll process your refund. Please note that refunds are not available for customized or enterprise solutions.",
        },
        {
          question: "How can I get support?",
          answer:
            "We offer email support for all customers. Professional plan customers and above get priority email support. Enterprise customers get dedicated support with faster response times.",
        },
        {
          question:
            "Do you offer discounts for teams or educational institutions?",
          answer:
            "Yes, we offer special pricing for teams, educational institutions, and non-profit organizations. Contact our sales team to learn more about our discount programs.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-finance-950 text-white overflow-hidden w-full">
      <MainNavbar />

      <FAQSection></FAQSection>
      <NewFooter />
    </div>
  );
}
