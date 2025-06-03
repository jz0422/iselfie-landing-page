import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

export const FaqSection = () => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "How long does it take to see results?",
      answer:
        "These products are not medical devices. They do not provide diagnoses and should not be used for medical decision-making, including treatment or disease management. iSelfie™ is intended to support general wellness and encourage users to seek appropriate medical evaluation from healthcare professionals.",
      isOpen: true,
    },
    {
      question: "How long does it take to see results?",
      answer: "",
      isOpen: false,
    },
    {
      question: "Is iSelfie™ a medical diagnostic tool?",
      answer: "",
      isOpen: false,
    },
    {
      question: "What can I learn from my heart age?",
      answer: "",
      isOpen: false,
    },
    {
      question: "Is my personal data safe?",
      answer: "",
      isOpen: false,
    },
    {
      question: "How often should I use iSelfie™?",
      answer: "",
      isOpen: false,
    },
  ];

  return (
    <section className="py-20 bg-[#f7f4f1] w-full">
      <div className="container flex flex-col lg:flex-row gap-10 max-w-[1920px] mx-auto px-5">
        {/* Left column - Heading */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          <h5 className="font-desktop-h5 font-[number:var(--desktop-h5-font-weight)] text-[#956ada] text-[length:var(--desktop-h5-font-size)] tracking-[var(--desktop-h5-letter-spacing)] leading-[var(--desktop-h5-line-height)] [font-style:var(--desktop-h5-font-style)]">
            Get to know more
          </h5>
          <h2 className="font-desktop-h2 text-[#1c1c1c] text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] font-[number:var(--desktop-h2-font-weight)] [font-style:var(--desktop-h2-font-style)]">
            Frequently asked questions
          </h2>
        </div>

        {/* Right column - FAQ Accordion */}
        <div className="flex flex-col gap-10 lg:w-2/3">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0"
              >
                <div className="flex items-center justify-between py-2">
                  <AccordionTrigger className="font-desktop-h6 font-[number:var(--desktop-h6-font-weight)] text-black text-[length:var(--desktop-h6-font-size)] tracking-[var(--desktop-h6-letter-spacing)] leading-[var(--desktop-h6-line-height)] [font-style:var(--desktop-h6-font-style)] hover:no-underline flex-1 justify-start">
                    {item.question}
                  </AccordionTrigger>
                  <div className="w-14 h-14 rounded-[64px] flex items-center justify-center">
                    {item.isOpen ? (
                      <MinusIcon className="w-6 h-6" />
                    ) : (
                      <PlusIcon className="w-6 h-6" />
                    )}
                  </div>
                </div>
                {item.answer && (
                  <AccordionContent className="pt-0 pb-6 pr-10">
                    <p className="opacity-70 font-desktop-body font-[number:var(--desktop-body-font-weight)] text-black text-[length:var(--desktop-body-font-size)] tracking-[var(--desktop-body-letter-spacing)] leading-[var(--desktop-body-line-height)] [font-style:var(--desktop-body-font-style)]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>

          {/* See more button */}
          <div className="flex justify-start">
            <Button
              variant="outline"
              className="h-auto px-8 py-6 rounded-[40px] border border-solid border-[#6e2add] backdrop-blur-md font-desktop-label font-[number:var(--desktop-label-font-weight)] text-purple text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)]"
            >
              See more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
