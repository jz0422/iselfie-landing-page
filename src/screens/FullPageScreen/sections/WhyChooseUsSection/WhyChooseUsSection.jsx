import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyChooseUsSection = () => {
  return (
    <section className="bg-black relative w-full">
      <div className="relative w-full bg-[url(https://c.animaapp.com/uZnjnLUb/img/container-1.png)] bg-cover bg-center py-24">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Left content */}
          <div className="flex flex-col w-full md:w-[573px] items-start gap-10 px-6 md:px-0">
            <h2 className="opacity-90 [font-family:'Suisse_Int'l-Regular',Helvetica] font-normal text-sand text-4xl md:text-[64px] tracking-[-1.92px] leading-[1.1]">
              See the signs—
              <br />
              before you feel them.
            </h2>

            <p className="font-desktop-h5 font-[number:var(--desktop-h5-font-weight)] text-clay text-[length:var(--desktop-h5-font-size)] tracking-[var(--desktop-h5-letter-spacing)] leading-[var(--desktop-h5-line-height)] [font-style:var(--desktop-h5-font-style)]">
              In seconds, iSelfie™ analyzes ocular and facial biomarkers to
              detect your heart rate, stress, breathing patterns, and more.
            </p>
          </div>

          {/* Right content - Cards */}
          <div className="flex flex-col md:flex-row lg:flex-col gap-8 mt-10 md:mt-0 px-6 md:px-0">
            {/* First card - Health metrics visualization */}
            <Card className="w-full md:w-[425px] h-auto md:h-[495px] rounded-[11.64px] overflow-hidden backdrop-blur-[17.47px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.47px)_brightness(100%)] [background:linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)] border-0">
              <CardContent className="p-0">
                <div className="relative w-full h-full">
                  <div className="absolute w-[329px] h-[400px] top-[47px] left-[47px] rounded-lg backdrop-blur-[9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9px)_brightness(100%)]">
                    <div className="absolute w-[268px] h-[158px] top-[129px] left-[31px]">
                      <div className="inline-flex h-[158px] items-center gap-[89.32px] absolute top-0 left-0">
                        <img
                          className="relative self-stretch w-px ml-[-0.79px]"
                          alt="Line"
                          src="https://c.animaapp.com/uZnjnLUb/img/line-30.svg"
                        />
                        <img
                          className="relative self-stretch w-px"
                          alt="Line"
                          src="https://c.animaapp.com/uZnjnLUb/img/line-32.svg"
                        />
                        <img
                          className="relative self-stretch w-px"
                          alt="Line"
                          src="https://c.animaapp.com/uZnjnLUb/img/line-33.svg"
                        />
                        <img
                          className="relative self-stretch w-px mr-[-0.21px]"
                          alt="Line"
                          src="https://c.animaapp.com/uZnjnLUb/img/line-31.svg"
                        />
                      </div>

                      <div className="absolute w-[89px] h-[5px] top-[57px] left-px bg-[#fc6558] rounded-[6.32px]" />
                      <div className="absolute w-[89px] h-[5px] top-[91px] left-[89px] bg-[#00cc00] rounded-[6.32px]" />
                      <div className="absolute w-[90px] h-[5px] top-[69px] left-[178px] bg-[#f5b658] rounded-[6.32px]" />
                    </div>

                    <div className="flex w-[220px] h-[33px] items-center gap-[44.27px] absolute top-[306px] left-8">
                      <div className="flex flex-col w-[43.48px] h-[33.2px] items-start relative">
                        <div className="relative w-fit mt-[-0.79px] mr-[-0.52px] [font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-[#ff2f1d] text-[12.6px] text-center tracking-[0] leading-[normal]">
                          10,25%
                        </div>
                        <div className="relative self-stretch [font-family:'Suisse_Int'l-Regular',Helvetica] font-normal text-[#ffffff] text-[12.6px] tracking-[0] leading-[normal]">
                          Poor
                        </div>
                      </div>

                      <div className="flex flex-col w-[46.64px] h-[33.2px] items-start relative">
                        <div className="relative w-fit mt-[-0.79px] [font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-[#25ea5a] text-[12.6px] tracking-[0] leading-[normal]">
                          6%
                        </div>
                        <div className="relative self-stretch [font-family:'Suisse_Int'l-Regular',Helvetica] font-normal text-[#ffffff] text-[12.6px] text-center tracking-[0] leading-[normal]">
                          Optimal
                        </div>
                      </div>

                      <div className="flex flex-col w-[43.48px] h-[33.2px] items-start relative mr-[-2.01px]">
                        <div className="relative w-fit mt-[-0.79px] [font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-[#f5b658] text-[12.6px] tracking-[0] leading-[normal]">
                          8%
                        </div>
                        <div className="relative self-stretch [font-family:'Suisse_Int'l-Regular',Helvetica] font-normal text-[#ffffff] text-[12.6px] text-center tracking-[0] leading-[normal]">
                          Normal
                        </div>
                      </div>
                    </div>

                    <div className="flex w-[266px] h-[33px] items-end justify-between absolute top-[33px] left-8">
                      <div className="flex flex-col w-[138.33px] h-[33.2px] items-start relative">
                        <div className="relative w-[161px] mt-[-0.79px] mr-[-22.67px] opacity-50 [font-family:'Suisse_Int'l-Book',Helvetica] font-normal text-[#ffffff] text-sm tracking-[0] leading-[normal]">
                          Your 10 Year Risk Score
                        </div>
                        <div className="relative w-[161px] mb-[-2.01px] mr-[-22.67px] [font-family:'Suisse_Int'l-Book',Helvetica] font-normal text-[#ffffff] text-sm tracking-[0] leading-[normal]">
                          Cardiovascular Disease
                        </div>
                      </div>

                      <div className="inline-flex items-end justify-end gap-[1.58px] relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-0.79px] [font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-[#fc6558] text-[31.6px] tracking-[-0.95px] leading-[normal] whitespace-nowrap">
                          10.25
                        </div>
                        <div className="relative w-fit [font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-[#fc6558] text-[12.6px] tracking-[0] leading-[normal] whitespace-nowrap">
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Second card - Image */}
            <Card className="w-full md:w-[425px] h-auto md:h-[553px] bg-[#af9dc230] rounded-[23.29px] backdrop-blur-[26.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(26.3px)_brightness(100%)] overflow-hidden border-0">
              <CardContent className="p-0">
                <img
                  className="w-full h-full object-cover"
                  alt="Health analysis visualization"
                  src="https://c.animaapp.com/uZnjnLUb/img/image30-1.png"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
