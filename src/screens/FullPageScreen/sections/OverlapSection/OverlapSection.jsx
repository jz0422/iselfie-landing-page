import React from "react";

export const OverlapSection = () => {
  return (
    <section className="relative w-full bg-black">
      <div className="relative w-full h-[1080px] bg-[url(https://c.animaapp.com/uZnjnLUb/img/container-2.png)] bg-cover bg-center">
        {/* Text content */}
        <div className="flex flex-col items-start gap-10 absolute top-[390px] left-20 max-w-[573px]">
          <h2 className="opacity-90 font-['Suisse_Int'l-Regular',Helvetica] font-normal text-sand text-[64px] tracking-[-2.56px] leading-[70.4px]">
            Feel more in control
            <br />
            of your well-being.
          </h2>

          <p className="font-desktop-h5 font-[number:var(--desktop-h5-font-weight)] text-clay text-[length:var(--desktop-h5-font-size)] tracking-[var(--desktop-h5-letter-spacing)] leading-[var(--desktop-h5-line-height)] [font-style:var(--desktop-h5-font-style)]">
            With daily insights and trend tracking, iSelfie™ empowers you to
            take control of your health—one iSelfie™ at a time.
          </p>
        </div>

        {/* First device mockup */}
        <div className="absolute w-[425px] h-[553px] top-0 left-[970px] rounded-[23.29px] overflow-hidden backdrop-blur-[17.47px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(17.47px)_brightness(100%)] bg-gradient-to-b from-white/10 to-white/10">
          <img
            className="absolute w-[388px] h-[528px] top-[25px] left-[18px]"
            alt="iSelfie app interface"
            src="https://c.animaapp.com/uZnjnLUb/img/group-23@2x.png"
          />
        </div>

        {/* Second device mockup */}
        <div className="absolute w-[425px] h-[554px] top-[362px] left-[1415px] rounded-[23.29px] overflow-hidden backdrop-blur-[26.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(26.3px)_brightness(100%)] bg-[#af9dc230]">
          <img
            className="w-full h-full object-cover"
            alt="iSelfie app interface"
            src="https://c.animaapp.com/uZnjnLUb/img/image710.png"
          />
        </div>
      </div>
    </section>
  );
};
