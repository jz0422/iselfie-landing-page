import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

export const GoalsSection = () => {
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
    <section className="w-full overflow-y-auto [background:linear-gradient(0deg,rgba(167,144,124,0.3)_0%,rgba(167,144,124,0.3)_100%),linear-gradient(0deg,rgba(27,27,27,1)_0%,rgba(27,27,27,1)_100%)]">
      <div className="relative max-w-[1920px] mx-auto">
        {/* Goals description section */}
        <div className="flex flex-col md:flex-row justify-between px-5 md:px-20 py-20 gap-10">
          {/* Images grid */}
          <div className="relative w-full md:w-[580px]">
            <div className="relative w-[230px] h-[338px] top-[131px] left-[50px] rounded-3xl overflow-hidden opacity-[0.89]">
              <img
                className="absolute w-[406px] h-[436px] top-[-93px] left-[-133px] object-cover"
                alt="Person using iSelfie"
                src="https://c.animaapp.com/uZnjnLUb/img/image301-1@2x.png"
              />
            </div>

            <div className="w-[280px] h-[161px] top-[521px] left-0 rounded-3xl absolute overflow-hidden">
              <img
                className="absolute w-[436px] h-[277px] -top-3.5 left-[-126px] object-cover"
                alt="Health monitoring"
                src="https://c.animaapp.com/uZnjnLUb/img/image304-1@2x.png"
              />
            </div>

            <div className="w-[183px] h-[337px] top-0 left-[300px] rounded-3xl opacity-80 absolute overflow-hidden">
              <img
                className="absolute w-[196px] h-[395px] -top-10 left-[-5px] object-cover"
                alt="User experience"
                src="https://c.animaapp.com/uZnjnLUb/img/yasser-mutwakil-kj9fdvqp7kc-unsplash-1@2x.png"
              />
            </div>

            <div className="w-[280px] h-[360px] top-[389px] left-[300px] rounded-3xl opacity-80 absolute overflow-hidden">
              <img
                className="absolute w-[289px] h-[412px] top-[-43px] left-0 object-cover"
                alt="Health monitoring"
                src="https://c.animaapp.com/uZnjnLUb/img/rachel-mcdermott-p0asrbayopq-unsplash-1@2x.png"
              />
            </div>
          </div>

          {/* Goals text content */}
          <div className="w-full md:w-[575px] flex flex-col gap-20">
            <div className="font-desktop-h3 text-[length:var(--desktop-h3-font-size)] tracking-[var(--desktop-h3-letter-spacing)] leading-[var(--desktop-h3-line-height)] font-[number:var(--desktop-h3-font-weight)] text-[#956ada] [font-style:var(--desktop-h3-font-style)]">
              The goal of iSelfie™ is to make health monitoring accessible,
              effortless, and informative, empowering users to take proactive
              steps toward improving their well-being.
            </div>

            <div className="flex flex-col gap-16">
              <p className="font-desktop-h5 text-[length:var(--desktop-h5-font-size)] tracking-[var(--desktop-h5-letter-spacing)] leading-[var(--desktop-h5-line-height)] font-[number:var(--desktop-h5-font-weight)] text-[#956ada] [font-style:var(--desktop-h5-font-style)]">
                iSelfie™ is designed with privacy-first architecture, ensuring
                that user data is never stored or shared.
              </p>

              <div className="flex items-center gap-16">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden">
                  <img
                    className="absolute w-[70px] h-[73px] top-[5px] left-[5px] mix-blend-luminosity object-cover"
                    alt="Icon"
                    src="https://c.animaapp.com/uZnjnLUb/img/icon-7@2x.png"
                  />
                </div>

                <div className="relative w-20 h-20 rounded-2xl overflow-hidden">
                  <img
                    className="absolute w-[87px] h-[91px] top-[-5px] -left-1 mix-blend-luminosity object-cover"
                    alt="Icon"
                    src="https://c.animaapp.com/uZnjnLUb/img/icon-8@2x.png"
                  />
                </div>

                <div className="relative w-20 h-20 rounded-2xl bg-[url(https://c.animaapp.com/uZnjnLUb/img/icon-9@2x.png)] bg-[100%_100%]" />
              </div>
            </div>

            <Button
              variant="outline"
              className="w-fit px-8 py-6 rounded-[40px] border border-solid border-[#6e2add] backdrop-blur-md h-auto"
            >
              <span className="font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] whitespace-nowrap [font-style:var(--desktop-label-font-style)]">
                Privacy and Legal Guides
              </span>
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full bg-[#f7f4f1] py-20">
          <div className="max-w-[1920px] mx-auto px-5 md:px-20 flex flex-col md:flex-row gap-10">
            {/* FAQ Header */}
            <div className="w-full md:w-[574px] flex flex-col gap-6">
              <h3 className="font-desktop-h5 font-[number:var(--desktop-h5-font-weight)] text-[#956ada] text-[length:var(--desktop-h5-font-size)] tracking-[var(--desktop-h5-letter-spacing)] leading-[var(--desktop-h5-line-height)] [font-style:var(--desktop-h5-font-style)]">
                Get to know more
              </h3>
              <h2 className="font-desktop-h2 text-[#1c1c1c] text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] font-[number:var(--desktop-h2-font-weight)] [font-style:var(--desktop-h2-font-style)]">
                Frequently asked questions
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="w-full md:w-[870px] flex flex-col">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b"
                  >
                    <AccordionTrigger className="py-4 flex justify-between">
                      <span className="font-desktop-h6 font-[number:var(--desktop-h6-font-weight)] text-black text-[length:var(--desktop-h6-font-size)] tracking-[var(--desktop-h6-letter-spacing)] leading-[var(--desktop-h6-line-height)] [font-style:var(--desktop-h6-font-style)] text-left">
                        {item.question}
                      </span>
                      {item.isOpen ? (
                        <div className="w-14 h-14 rounded-full flex items-center justify-center">
                          <MinusIcon className="w-6 h-6" />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-full flex items-center justify-center">
                          <PlusIcon className="w-6 h-6" />
                        </div>
                      )}
                    </AccordionTrigger>
                    {item.answer && (
                      <AccordionContent>
                        <p className="opacity-70 font-desktop-body font-[number:var(--desktop-body-font-weight)] text-black text-[length:var(--desktop-body-font-size)] tracking-[var(--desktop-body-letter-spacing)] leading-[var(--desktop-body-line-height)] [font-style:var(--desktop-body-font-style)] pb-4">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>

              <Button
                variant="outline"
                className="w-fit mt-10 px-8 py-6 rounded-[40px] border border-solid border-[#6e2add] backdrop-blur-md h-auto"
              >
                <span className="font-desktop-label font-[number:var(--desktop-label-font-weight)] text-purple text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] whitespace-nowrap [font-style:var(--desktop-label-font-style)]">
                  See more
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
