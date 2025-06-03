import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HowItWorksSection = () => {
  // Data for pagination dots
  const paginationDots = [
    { number: 1, active: true },
    { number: 2, active: false },
    { number: 3, active: false },
  ];

  return (
    <section className="relative w-full bg-[#ffe9e2] py-[198px]">
      <div className="mx-auto max-w-[1760px] flex justify-center relative">
        <div className="relative w-full">
          <div className="flex justify-center">
            <div className="relative w-[1114px] h-[882px] bg-[url(https://c.animaapp.com/uZnjnLUb/img/image200-2.png)] bg-cover">
              {/* Phone mockup */}
              <Card className="absolute w-[300px] h-[630px] top-[58px] left-[415px] bg-[#fae9dc] rounded-[36px] overflow-hidden border-0 shadow-none">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full">
                    <div className="absolute w-full h-full top-0 left-0 bg-[url(https://c.animaapp.com/uZnjnLUb/img/image59-1.png)] bg-cover bg-center">
                      {/* Status bar */}
                      <div className="absolute w-[306px] h-[62px] top-0 -left-1.5 bg-[#a7907c33] backdrop-blur-[16.86px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(16.86px)_brightness(100%)]" />

                      {/* UI Elements */}
                      <div className="inline-flex flex-col items-start gap-[180.31px] absolute top-[175px] left-[45px] opacity-50">
                        <img
                          className="relative w-[211.72px] flex-[0_0_auto] mt-[-1.00px] ml-[-1.00px] mr-[-1.00px]"
                          alt="Frame"
                          src="https://c.animaapp.com/uZnjnLUb/img/frame-204974855.svg"
                        />

                        <img
                          className="relative w-[211.72px] flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px]"
                          alt="Frame"
                          src="https://c.animaapp.com/uZnjnLUb/img/frame-204974856.svg"
                        />
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="absolute w-[169px] h-[3px] top-[62px] left-0 bg-[#2dd45a]" />

                    {/* Instructions */}
                    <div className="absolute w-[145px] h-3.5 top-[543px] left-[78px]">
                      <div className="absolute h-3.5 top-0 left-0 [font-family:'Suisse_Int'l-Regular',Helvetica] font-normal text-clay text-[11.8px] text-center tracking-[-0.24px] leading-[14.2px] whitespace-nowrap">
                        Look straight at the camera
                      </div>
                    </div>

                    {/* UI Text elements */}
                    <div className="absolute top-[25px] left-[115px] opacity-70 [font-family:'Suisse_Int'l-Book',Helvetica] font-normal text-[#ffffff] text-[11.9px] tracking-[0] leading-[normal]">
                      Take the test
                    </div>

                    <div className="absolute top-[83px] left-[235px] [font-family:'Suisse_Int'l-Book',Helvetica] font-normal text-[#ffffff] text-[11.9px] tracking-[0] leading-[normal]">
                      85 BPM
                    </div>

                    <div className="absolute top-[83px] left-[13px] [font-family:'Suisse_Int'l-Book',Helvetica] font-normal text-[#ffffff] text-[11.9px] tracking-[0] leading-[normal]">
                      62%
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pagination dots */}
              <div className="inline-flex items-start gap-[5.71px] absolute top-[644px] left-[872px]">
                {paginationDots.map((dot, index) => (
                  <div
                    key={index}
                    className={`relative w-10 h-10 ${dot.active ? "bg-purple" : "bg-[#956ada1a]"} rounded-[45.71px] rotate-[-90.00deg]`}
                  >
                    <div
                      className={`absolute h-[23px] ${dot.active ? "top-2 left-[15px]" : index === 1 ? "top-2 left-3.5" : "top-[7px] left-3.5"} rotate-[-90.00deg] ${dot.active ? "" : "opacity-50"} font-desktop-label font-[number:var(--desktop-label-font-weight)] ${dot.active ? "text-white" : "text-purple"} text-[length:var(--desktop-label-font-size)] text-center tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] whitespace-nowrap [font-style:var(--desktop-label-font-style)]`}
                    >
                      {dot.number}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description text */}
          <div className="flex flex-col w-[425px] items-start gap-20 absolute top-[321px] left-[1187px]">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Suisse_Int'l-Book',Helvetica] font-normal text-purple text-[32px] tracking-[-0.64px] leading-[42.6px]">
                Capture
              </div>

              <div className="relative self-stretch [font-family:'Suisse_Int'l-Book',Helvetica] font-normal text-taupe text-[32px] tracking-[-0.64px] leading-[42.6px]">
                The camera captures the user&apos;s face and eyes for a few
                seconds.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
