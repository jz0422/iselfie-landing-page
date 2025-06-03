import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const VideoSection = () => {
  return (
    <section className="w-full bg-[linear-gradient(0deg,rgba(167,144,124,0.3)_0%,rgba(167,144,124,0.3)_100%),linear-gradient(0deg,rgba(27,27,27,1)_0%,rgba(27,27,27,1)_100%)] overflow-y-auto">
      <div className="container mx-auto px-5">
        {/* Video Hero Section */}
        <Card className="flex flex-col md:flex-row h-[840px] my-[120px] rounded-[40px] overflow-hidden border-0">
          <CardContent className="flex flex-col justify-between p-20 bg-violet flex-1 space-y-8">
            <h2 className="font-desktop-h2 text-black text-[length:var(--desktop-h2-font-size)] tracking-[var(--desktop-h2-letter-spacing)] leading-[var(--desktop-h2-line-height)] font-[number:var(--desktop-h2-font-weight)] [font-style:var(--desktop-h2-font-style)]">
              Take control
              <br />
              of your health.
              <br />
              Now.
            </h2>

            <Button className="h-auto px-8 py-6 bg-[#ffffff33] rounded-[40px] backdrop-blur-md text-white hover:bg-[#ffffff45]">
              <span className="font-desktop-label font-[number:var(--desktop-label-font-weight)] text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)]">
                Watch video
              </span>
            </Button>
          </CardContent>

          <CardContent className="flex-1 p-0 bg-[url(https://c.animaapp.com/uZnjnLUb/img/video-loop.png)] bg-cover bg-center" />
        </Card>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          {/* Images Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative">
            <div className="col-span-1 row-span-2">
              <div className="w-[230px] h-[338px] ml-[50px] rounded-3xl overflow-hidden opacity-[0.89]">
                <img
                  className="w-[406px] h-[436px] -mt-[93px] -ml-[133px] object-cover"
                  alt="Person using health app"
                  src="https://c.animaapp.com/uZnjnLUb/img/image301-1@2x.png"
                />
              </div>

              <div className="w-[280px] h-[161px] mt-5 rounded-3xl overflow-hidden">
                <img
                  className="w-[436px] h-[277px] -mt-3.5 -ml-[126px] object-cover"
                  alt="Health monitoring interface"
                  src="https://c.animaapp.com/uZnjnLUb/img/image304-1@2x.png"
                />
              </div>
            </div>

            <div className="col-span-1 row-span-2">
              <div className="w-[183px] h-[338px] ml-auto rounded-3xl opacity-80 overflow-hidden">
                <img
                  className="w-[196px] h-[395px] -mt-10 -ml-[5px] object-cover"
                  alt="Person using health app"
                  src="https://c.animaapp.com/uZnjnLUb/img/yasser-mutwakil-kj9fdvqp7kc-unsplash-1@2x.png"
                />
              </div>

              <div className="w-[280px] h-[360px] ml-auto mt-5 rounded-3xl opacity-80 overflow-hidden">
                <img
                  className="w-[289px] h-[412px] -mt-[43px] object-cover"
                  alt="Person using health app"
                  src="https://c.animaapp.com/uZnjnLUb/img/rachel-mcdermott-p0asrbayopq-unsplash-1@2x.png"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col gap-20">
            <h3 className="font-desktop-h3 font-[number:var(--desktop-h3-font-weight)] text-[#956ada] text-[length:var(--desktop-h3-font-size)] tracking-[var(--desktop-h3-letter-spacing)] leading-[var(--desktop-h3-line-height)] [font-style:var(--desktop-h3-font-style)]">
              The goal of iSelfie™ is to make health monitoring accessible,
              effortless, and informative, empowering users to take proactive
              steps toward improving their well-being.
            </h3>

            <div className="flex flex-col gap-16">
              <p className="font-desktop-h4 text-[length:var(--desktop-h4-font-size)] tracking-[var(--desktop-h4-letter-spacing)] leading-[var(--desktop-h4-line-height)] font-[number:var(--desktop-h4-font-weight)] text-[#956ada] [font-style:var(--desktop-h4-font-style)]">
                iSelfie is designed with privacy-first architecture, ensuring
                that user data is never stored or shared.
              </p>

              <div className="flex items-center gap-16">
                <div className="w-20 h-20 rounded-2xl overflow-hidden">
                  <img
                    className="w-[70px] h-[73px] mt-[5px] ml-[5px] mix-blend-luminosity object-cover"
                    alt="Privacy icon"
                    src="https://c.animaapp.com/uZnjnLUb/img/icon-7@2x.png"
                  />
                </div>

                <div className="w-20 h-20 rounded-2xl overflow-hidden">
                  <img
                    className="w-[87px] h-[91px] -mt-[5px] -ml-1 mix-blend-luminosity object-cover"
                    alt="Security icon"
                    src="https://c.animaapp.com/uZnjnLUb/img/icon-8@2x.png"
                  />
                </div>

                <div className="w-20 h-20 rounded-2xl bg-[url(https://c.animaapp.com/uZnjnLUb/img/icon-9@2x.png)] bg-cover" />
              </div>
            </div>

            <Button
              variant="outline"
              className="h-auto px-8 py-6 rounded-[40px] border-[#6e2add] backdrop-blur-md w-fit"
            >
              <span className="font-desktop-label font-[number:var(--desktop-label-font-weight)] text-white text-[length:var(--desktop-label-font-size)] tracking-[var(--desktop-label-letter-spacing)] leading-[var(--desktop-label-line-height)] [font-style:var(--desktop-label-font-style)]">
                Privacy and Legal Guides
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
