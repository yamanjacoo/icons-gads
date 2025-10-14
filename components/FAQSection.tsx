"use client";

import type React from "react";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

interface FAQItemProps {
  question: string;
  items: {
    question: string;
    answer: string;
  }[];
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, items, isOpen, onClick }: FAQItemProps) {
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);

  const toggleSubItem = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenSubIndex(openSubIndex === index ? null : index);
  };

  return (
    <div
      className={`w-full ${
        isOpen ? (openSubIndex !== null ? "h-auto" : "h-auto") : "h-20"
      } mb-6 bg-[#1e1e1e] rounded-[40px] overflow-hidden transition-all duration-500 ease-in-out`}
    >
      <div className="w-full h-full px-[30px] pb-[30px] pt-[20px] flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-white text-base leading-tight">{question}</div>
          <button
            onClick={onClick}
            className="w-10 h-10 bg-[#161616] rounded-[50px] flex items-center justify-center"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              {isOpen ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-white" />
              )}
            </div>
          </button>
        </div>

        <div
          className={`mt-4 space-y-4 transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-[1000px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {items.map((item, index) => (
            <div key={index} className="border-t border-white/10 pt-4">
              <div className="flex justify-between items-center">
                <div className="text-white text-sm leading-tight">
                  {item.question}
                </div>
                <button
                  onClick={(e) => toggleSubItem(index, e)}
                  className="w-8 h-8 bg-[#161616] rounded-[50px] flex items-center justify-center"
                >
                  <div className="w-3 h-3 flex items-center justify-center">
                    {openSubIndex === index ? (
                      <Minus className="w-3 h-3 text-white" />
                    ) : (
                      <Plus className="w-3 h-3 text-white" />
                    )}
                  </div>
                </button>
              </div>
              <div
                className={`mt-2 opacity-60 text-white text-sm leading-normal transition-all duration-500 ease-in-out ${
                  openSubIndex === index
                    ? "max-h-48 opacity-60"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const storeName = process.env.NEXT_PUBLIC_STORE_NAME || "Icon Pack";

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "About The Pack",
      items: [
        {
          question: `What is ${storeName}?`,
          answer: `${storeName} is a premium icon collection created by an independent designer. Our icons are carefully crafted to enhance your digital projects with clean, modern aesthetics and pixel-perfect precision.`,
        },
        {
          question: "What file formats are included with the icons?",
          answer:
            "Our icons are delivered in SVG and PNG formats. SVG files are fully scalable vector graphics that can be customized in any design software. PNG files are provided in multiple sizes for immediate use in your projects.",
        },
        {
          question: "How can I use these icons in my projects?",
          answer:
            "Our icons are easy to implement in any project. For websites, you can use the SVG files directly in your HTML or import them as React components. For design projects, you can use them in software like Figma, Sketch, or Adobe XD. Detailed implementation guides are provided with your purchase.",
        },
      ],
    },
    {
      question: "Licensing & Usage",
      items: [
        {
          question: "Can I use the icons for commercial projects?",
          answer:
            "Yes, all our icon packs come with a commercial license that allows you to use them in both personal and commercial projects. However, you cannot redistribute the icons as standalone files or include them in icon packs for redistribution.",
        },
        {
          question: "Can I modify the icons?",
          answer:
            "Yes, you can customize the icons to match your project needs. You can change colors, sizes, and add or remove elements. The SVG format makes customization easy in any vector editing software.",
        },
        {
          question: "What are the limitations of the license?",
          answer:
            "While you can use the icons in your projects, you cannot resell, redistribute, or sublicense the icons as standalone files. You also cannot claim ownership of the original icons or register them as trademarks. Please refer to our Terms of Service for complete license details.",
        },
      ],
    },
    {
      question: "Purchasing & Delivery",
      items: [
        {
          question: "How are the icons delivered after purchase?",
          answer:
            "After completing your purchase, you'll receive an email with download instructions. You can also access your purchases through your account on our website. All files are delivered digitally - no physical products will be shipped.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept credit/debit cards through our secure payment processor, Stripe. All transactions are encrypted and secure.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "All sales are final. Due to the nature of digital products, we cannot offer refunds once the purchase is completed. However, if you encounter any issues with your purchase, please contact us at our support email, and we will do our best to assist you.",
        },
      ],
    },
    {
      question: "Support & Technical Questions",
      items: [
        {
          question: "How can I get support?",
          answer: `If you have any questions or issues with your purchase, please contact us at ${
            process.env.NEXT_PUBLIC_EMAIL || "our support email"
          }. We aim to respond to all inquiries within 24-48 hours.`,
        },
        {
          question: "Can I request custom icons?",
          answer:
            "Yes, I offer custom icon design services. If you need specific icons that aren't in the existing packs, please contact me to discuss your requirements and get a custom quote.",
        },
        {
          question: "Do you provide updates to the icon packs?",
          answer:
            "Yes, I regularly update my icon packs with new designs and improvements. When you purchase an icon pack, you'll receive free updates to that pack for at least one year.",
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARYCOLOR || "#2A29FF"; // fallback color

  return (
    <div className="flex flex-col items-center gap-1 w-full eden-container mx-auto my-24">
      <h2 className="text-center text-white text-5xl leading-[55px] mb-6">
        FAQ
      </h2>

      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          items={faq.items}
          isOpen={openIndex === index}
          onClick={() => toggleFAQ(index)}
        />
      ))}

      <div className="flex flex-col items-center mt-6">
        <div className="opacity-60 text-center text-white text-xl">
          Do you have any other questions?
        </div>
        <div className="flex items-center justify-center mt-4">
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
            className="flex items-center text-white text-2xl"
          >
            Ask me directly
            <ArrowUpRight
              className="ml-2 w-12 h-12"
              style={{ color: primaryColor }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
