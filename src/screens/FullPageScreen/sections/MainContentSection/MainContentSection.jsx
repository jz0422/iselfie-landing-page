import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = () => {
  return (
    <section className="relative w-full bg-black py-16">
      <div className="container relative mx-auto">
        <img
          className="w-full h-auto object-cover"
          alt="Container"
          src="https://c.animaapp.com/uZnjnLUb/img/container.png"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
          {/* Left content */}
          <div className="flex flex-col gap-10 mt-20">
            <h1 className="opacity-90 [font-family:'Suisse_Int'l-Regular',Helvetica] font-normal text-sand text-[64px] tracking-[-1.92px] leading-[70.4px]">
              One iSelfie™.
              <br />
              Instant insights
            </h1>

            <p className="font-desktop-h5 font-[number:var(--desktop-h5-font-weight)] text-clay text-[length:var(--desktop-h5-font-size)] tracking-[var(--desktop-h5-letter-spacing)] leading-[var(--desktop-h5-line-height)] [font-style:var(--desktop-h5-font-style)]">
              iSelfie™ uses frontier AI to help you track key metrics of your
              heart health and your overall well-being.
            </p>
          </div>

          {/* Right content - Heart age card */}
          <div className="flex flex-col gap-6">
            <Card className="w-full max-w-[425px] h-[531px] rounded-[23.29px] overflow-hidden backdrop-blur-[17.47px] [background:linear-gradient(0deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)]">
              <CardContent className="p-0 relative h-full">
                <div className="relative w-full h-full">
                  {/* Circular graphics */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      className="w-[425px] h-[410px]"
                      alt="Ellipse"
                      src="https://c.animaapp.com/uZnjnLUb/img/ellipse-77.svg"
                    />

                    <img
                      className="absolute w-[277px] h-[265px]"
                      alt="Ellipse"
                      src="https://c.animaapp.com/uZnjnLUb/img/ellipse-78.svg"
                    />

                    <img
                      className="absolute w-[185px] h-[338px]"
                      alt="Ellipse"
                      src="https://c.animaapp.com/uZnjnLUb/img/ellipse-76.svg"
                    />
                  </div>

                  {/* Heart age info */}
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-[35px] py-10">
                    <div className="flex flex-col items-start">
                      <div className="[font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-[#04c818] text-[20.4px] tracking-[-0.20px] leading-normal">
                        3 years
                      </div>
                      <div className="opacity-70 [font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-sand text-[20.4px] tracking-[-0.20px] leading-normal">
                        below your actual age
                      </div>
                    </div>

                    <div className="[font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-[#04c818] text-[64px] tracking-[-1.92px] leading-normal">
                      48
                    </div>
                  </div>

                  {/* Label */}
                  <div className="absolute top-10 left-10">
                    <div className="opacity-70 [font-family:'Suisse_Int'l-Book',Helvetica] font-normal text-sand text-[20.4px] tracking-[-0.20px] leading-normal">
                      Your heart age
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Image card */}
            <Card className="w-full max-w-[425px] h-[553px] bg-[#af9dc230] rounded-[23.29px] backdrop-blur-[26.3px] opacity-80 overflow-hidden">
              <CardContent className="p-0 h-full">
                <img
                  className="w-full h-full object-cover"
                  alt="Image"
                  src="https://c.animaapp.com/uZnjnLUb/img/image30.png"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
