import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const IndicatorsSection = () => {
  // Data for health indicator cards
  const healthIndicators = [
    {
      id: 1,
      title: "Cardiovascular Health",
      description: "Your blood pressure, Heart rate and heart rate variability",
      image: "https://c.animaapp.com/uZnjnLUb/img/image9030.png",
      imagePosition: "-312px -213px",
      iconSrc: "https://c.animaapp.com/uZnjnLUb/img/icon-1.svg",
    },
    {
      id: 2,
      title: "Respiratory Health",
      description: "Assess respiratory rate and oxygen saturation levels.",
      image: "https://c.animaapp.com/uZnjnLUb/img/indicators-respiratory.png",
      imagePosition: "-202px -222px",
      iconSrc: "https://c.animaapp.com/uZnjnLUb/img/icon-1.svg",
    },
    {
      id: 3,
      title: "Stress & Fatigue",
      description:
        "Evaluate indicators related to stress levels and overall fatigue.",
      image: "https://c.animaapp.com/uZnjnLUb/img/image9030-1.png",
      imagePosition: "-139px -5px",
      iconSrc: "https://c.animaapp.com/uZnjnLUb/img/icon-3.svg",
    },
    {
      id: 4,
      title: "Immune Response",
      description:
        "Gain insights into potential signs of inflammation or infection.",
      image: "https://c.animaapp.com/uZnjnLUb/img/image9030-2.png",
      imagePosition: "-88px -133px",
      iconSrc: "https://c.animaapp.com/uZnjnLUb/img/icon-3.svg",
    },
  ];

  return (
    <section className="w-full bg-[#1b1b1b] bg-[linear-gradient(0deg,rgba(167,144,124,0.3)_0%,rgba(167,144,124,0.3)_100%),linear-gradient(0deg,rgba(27,27,27,1)_0%,rgba(27,27,27,1)_100%)] overflow-y-auto">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left column - Text content */}
          <div className="flex flex-col gap-10">
            <h2 className="font-desktop-h2 text-orchid text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)]">
              Science fiction? No. Just science.
            </h2>
            <p className="opacity-70 font-desktop-h6 text-white text-[length:var(--desktop-h6-font-size)] tracking-[var(--desktop-h6-letter-spacing)] leading-[var(--desktop-h6-line-height)]">
              Instant, accessible, and intuitive technology to help you make
              informed decisions, not assumptions. It&#39;s your health.
            </p>
          </div>

          {/* Right column - Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {healthIndicators.map((indicator) => (
              <Card
                key={indicator.id}
                className="rounded-3xl border-[0.5px] border-[#ffffff0d] bg-[linear-gradient(180deg,rgba(255,255,255,0)_12%,rgba(255,255,255,0.04)_100%)] overflow-hidden"
              >
                <CardContent className="p-0 relative h-[600px]">
                  {/* Background image */}
                  <div className="absolute w-full h-full rounded-3xl overflow-hidden">
                    <img
                      className="absolute w-[800px] h-[800px] mix-blend-screen object-cover"
                      style={{
                        top: indicator.imagePosition.split(" ")[1],
                        left: indicator.imagePosition.split(" ")[0],
                      }}
                      alt={indicator.title}
                      src={indicator.image}
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute w-full h-56 bottom-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)]" />

                  {/* Content */}
                  <div className="absolute bottom-0 w-full flex items-end gap-6 p-8">
                    <div className="flex flex-col items-start gap-1 flex-1">
                      <h3 className="font-desktop-h6 text-orchid text-[length:var(--desktop-h6-font-size)] tracking-[var(--desktop-h6-letter-spacing)] leading-[var(--desktop-h6-line-height)]">
                        {indicator.title}
                      </h3>
                      <p className="opacity-[0.89] font-desktop-body text-white text-[length:var(--desktop-body-font-size)] tracking-[var(--desktop-body-letter-spacing)] leading-[var(--desktop-body-line-height)]">
                        {indicator.description}
                      </p>
                    </div>
                    <div className="w-14 h-14 rounded-full border border-[#ffffff33] flex items-center justify-center">
                      <img
                        className="w-5 h-5"
                        alt="Icon"
                        src={indicator.iconSrc}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Disclaimer and button section */}
        <div className="mt-20 lg:w-3/4 lg:ml-auto">
          <p className="font-desktop-body text-[#ebd9c8] text-[length:var(--desktop-body-font-size)] tracking-[var(--desktop-body-letter-spacing)] leading-[var(--desktop-body-line-height)] mb-20">
            These products are not medical devices.&nbsp;&nbsp;They do not
            provide diagnoses and should not be used for medical
            decision-making, including treatment or disease management.
            <br />
            <br />
            iSelfie™ is intended to support general wellness and encourage users
            to seek appropriate medical evaluation from healthcare
            professionals.
          </p>

          <Button className="rounded-[40px] px-8 py-6 h-auto border border-[#6e2add] bg-transparent backdrop-blur-md">
            <span className="font-desktop-label text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)]">
              Learn more
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
