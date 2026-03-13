import clsx from "clsx";
import svgPaths from "./svg-e3tk7mcowi";
import imgIconCryptohopper from "figma:asset/f1841337e214c3907e27f0e01bfbc7696f6af6d9.png";
import imgRectangle317 from "figma:asset/70017910a949817aa1c11716388ee64b40b2eafa.png";
import imgRgbLogoDarkNoBg011 from "figma:asset/bfb3fe6da9e88a568cbf5fd07d74cee065bbcbc3.png";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-80%_-102.5%_-120%_-97.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-1/4">
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          {children}
        </svg>
      </div>
    </div>
  );
}
type Helper5Props = {
  additionalClassNames?: string;
};

function Helper5({ additionalClassNames = "" }: Helper5Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="-rotate-90 flex-none h-[14px] w-[7px]">
        <div className="relative size-full" data-name="tooltip">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 14">
            <path d={svgPaths.p21c8ad00} fill="var(--fill-0, #1F1F1F)" id="tooltip" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type TooltipTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TooltipText({ text, additionalClassNames = "" }: TooltipTextProps) {
  return (
    <div className={clsx("-translate-x-1/2 -translate-y-1/2 absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] py-[8px] rounded-[3px]", additionalClassNames)}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{text}</p>
    </div>
  );
}
type Helper4Props = {
  additionalClassNames?: string;
};

function Helper4({ additionalClassNames = "" }: Helper4Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center size-[40px]", additionalClassNames)}>
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[40px]" data-name="button/round/default">
          <Wrapper1>
            <g filter="url(#filter0_d_28_6459)" id="round_bg">
              <circle cx="59" cy="52" fill="var(--fill-0, white)" fillOpacity="0.8" r="20" />
              <circle cx="59" cy="52" r="19.5" stroke="var(--stroke-0, #F8F8FF)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="120" id="filter0_d_28_6459" width="120" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="1" dy="8" />
                <feGaussianBlur stdDeviation="20" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.193925 0 0 0 0 0.193925 0 0 0 0 0.193925 0 0 0 0.06 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_28_6459" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_28_6459" mode="normal" result="shape" />
              </filter>
            </defs>
          </Wrapper1>
          <IconsChevronLargeRight className="absolute inset-[20%] overflow-clip" />
        </div>
      </div>
    </div>
  );
}

function Helper3() {
  return (
    <Wrapper1>
      <g filter="url(#filter0_d_28_6461)" id="round_bg">
        <circle cx="59" cy="52" fill="var(--fill-0, white)" fillOpacity="0.8" r="20" />
        <circle cx="59" cy="52" r="19.5" stroke="var(--stroke-0, #F8F8FF)" />
      </g>
      <defs>
        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="120" id="filter0_d_28_6461" width="120" x="0" y="0">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="1" dy="8" />
          <feGaussianBlur stdDeviation="20" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0.12 0" />
          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_28_6461" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_28_6461" mode="normal" result="shape" />
        </filter>
      </defs>
    </Wrapper1>
  );
}
type ButtonRoundDefaultProps = {
  additionalClassNames?: string;
};

function ButtonRoundDefault({ additionalClassNames = "" }: ButtonRoundDefaultProps) {
  return (
    <div className={clsx("absolute size-[40px]", additionalClassNames)}>
      <Helper3 />
      <div className="absolute inset-[20%]" data-name="icons/plus">
        <div className="absolute inset-[29.17%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p3fc86600} fill="var(--fill-0, #1F1F1F)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type Helper2Props = {
  additionalClassNames?: string;
};

function Helper2({ additionalClassNames = "" }: Helper2Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-px items-center justify-center left-0 w-[1352px]", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-[1352px] w-px" data-name="line_chart" />
      </div>
    </div>
  );
}

function ChartLayout() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white h-[772px] left-0 rounded-[6px] top-0 w-[1368px]" data-name="chart_bg" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[11px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[77px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[143px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[275px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[341px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[473px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[539px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[671px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[737px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[803px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[935px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[1001px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[1133px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[1199px] top-0 w-px" data-name="line_chart" />
      <Helper2 additionalClassNames="top-[47px]" />
      <Helper2 additionalClassNames="top-[12px]" />
      <Helper2 additionalClassNames="top-[82px]" />
      <Helper2 additionalClassNames="top-[117px]" />
      <Helper2 additionalClassNames="top-[187px]" />
      <Helper2 additionalClassNames="top-[222px]" />
      <Helper2 additionalClassNames="top-[292px]" />
      <Helper2 additionalClassNames="top-[327px]" />
      <Helper2 additionalClassNames="top-[397px]" />
      <Helper2 additionalClassNames="top-[432px]" />
      <Helper2 additionalClassNames="top-[502px]" />
      <Helper2 additionalClassNames="top-[537px]" />
      <Helper2 additionalClassNames="top-[607px]" />
      <Helper2 additionalClassNames="top-[642px]" />
      <Helper2 additionalClassNames="top-[152px]" />
      <Helper2 additionalClassNames="top-[257px]" />
      <Helper2 additionalClassNames="top-[362px]" />
      <Helper2 additionalClassNames="top-[467px]" />
      <Helper2 additionalClassNames="top-[572px]" />
      <Helper2 additionalClassNames="top-[677px]" />
      <Helper2 additionalClassNames="top-[712px]" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[209px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[407px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[605px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[869px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[1067px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[1265px] top-0 w-px" data-name="line_chart" />
    </div>
  );
}

function RighstSideBar() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-white h-[772px] left-[1303px] rounded-br-[6px] rounded-tr-[6px] top-0 w-[65px]" data-name="right_side_bar_bg" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[75px] whitespace-nowrap">{"13200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[40px] whitespace-nowrap">{"13400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[145px] whitespace-nowrap">{"12800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[110px] whitespace-nowrap">{"13000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[215px] whitespace-nowrap">{"12400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[180px] whitespace-nowrap">{"12600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[285px] whitespace-nowrap">{"12000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[250px] whitespace-nowrap">{"12200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[355px] whitespace-nowrap">{"11600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[320px] whitespace-nowrap">{"11800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[460px] whitespace-nowrap">{"11000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[425px] whitespace-nowrap">{"11200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[390px] whitespace-nowrap">{"11400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[530px] whitespace-nowrap">{"10600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[495px] whitespace-nowrap">{"10800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[600px] whitespace-nowrap">{"10200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[565px] whitespace-nowrap">{"10400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[635px] whitespace-nowrap">{"10000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[705px] whitespace-nowrap">{"9600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[670px] whitespace-nowrap">{"9800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[5px] whitespace-nowrap">{"13600.00"}</p>
        <div className="absolute bg-[#efeff4] h-[772px] left-[1303px] top-0 w-px" data-name="border_chart" />
        <div className="absolute flex h-px items-center justify-center left-0 top-[739px] w-[1368px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <div className="bg-[#efeff4] h-[1368px] w-px" data-name="border_chart" />
          </div>
        </div>
      </div>
    </div>
  );
}
type TimeLineProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
  text10: string;
  text11: string;
  text12: string;
  text13: string;
  text14: string;
  text15: string;
  text16: string;
  text17: string;
  text18: string;
  text19: string;
};

function TimeLine({ text, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19 }: TimeLineProps) {
  return (
    <div className="absolute contents left-0 top-[739px]">
      <div className="absolute bg-white h-[33px] left-0 rounded-bl-[6px] top-[739px] w-[1304px]" data-name="timeline_bg" />
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1265px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1200px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text1}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1068px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text2}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1001px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text3}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[935px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text4}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1134px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text5}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[870px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text6}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[804px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text7}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[737px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text8}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[672px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text9}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[606px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text10}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[540px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text11}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[473px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text12}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[408px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text13}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[342px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text14}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[276px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text15}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[210px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text16}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[144px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text17}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[78px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text18}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text19}</p>
    </div>
  );
}
type FooterBarTextProps = {
  text: string;
};

function FooterBarText({ text }: FooterBarTextProps) {
  return (
    <div className="absolute contents left-[60px] top-[848px]">
      <div className="absolute bg-white h-[40px] left-[60px] rounded-[6px] top-[848px] w-[1368px]" data-name="bg" />
      <div className="absolute contents leading-[normal] left-[calc(94.44%-39px)] not-italic text-[12px] top-[861px] whitespace-nowrap">
        <p className="-translate-x-full absolute font-['Source_Sans_Pro:Regular',sans-serif] left-[calc(94.44%-29px)] text-[#1f1f1f] text-right top-[861px]">{"%"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] left-[calc(94.44%-7px)] text-[#1f1f1f] top-[861px]">{"log"}</p>
        <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] left-[calc(100%-49px)] text-[#00b1c7] top-[861px]">{"reg"}</p>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[calc(94.44%-60px)] top-[856px] w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#f0f0f9] h-px rounded-[6px] w-[24px]" data-name="divider" />
        </div>
      </div>
      <p className="-translate-x-full absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(83.33%+80px)] not-italic text-[#1f1f1f] text-[12px] text-right top-[861px] whitespace-nowrap">{text}</p>
      <div className="absolute content-stretch flex gap-[16px] items-center left-[69px] top-[855px]">
        <TimeframeItemText text="1D" />
        <TimeframeItemText text="5D" />
        <TimeframeItemText text="1M" />
        <TimeframeItemText text="3M" />
        <div className="bg-[#f0f0f9] content-stretch flex items-center px-[8px] py-[6px] relative rounded-[6px] shrink-0">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-right whitespace-nowrap">{"6M"}</p>
        </div>
        <TimeframeItemText text="YTD" />
        <TimeframeItemText text="1Y" additionalClassNames="bg-white" />
        <TimeframeItemText text="5Y" />
        <TimeframeItemText text="All" />
      </div>
    </div>
  );
}
type TimeframeItemTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TimeframeItemText({ text, additionalClassNames = "" }: TimeframeItemTextProps) {
  return (
    <div className={clsx("content-stretch flex items-center px-[8px] py-[6px] relative rounded-[6px] shrink-0", additionalClassNames)}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8e8e93] text-[12px] text-right whitespace-nowrap">{text}</p>
    </div>
  );
}

function Candles() {
  return (
    <div className="absolute inset-[0_66.81%_0_29.09%]">
      <div className="absolute bg-white inset-0" data-name="bg_instrument" />
      <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/candles">
        <div className="absolute bottom-[12.5%] contents left-1/4 right-1/4 top-[16.67%]" data-name="candles">
          <div className="absolute bottom-[12.5%] left-1/4 right-[58.33%] top-[16.67%]" data-name="2_candle">
            <div className="absolute inset-[-2.94%_-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 18">
                <g id="2_candle">
                  <path d="M2.49979 17.5V0.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <rect fill="var(--fill-0, white)" height="11.3333" id="Rectangle 34" stroke="var(--stroke-0, #1F1F1F)" width="4" x="0.5" y="3.33329" />
                </g>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20.83%] left-[58.33%] right-1/4 top-[20.83%]" data-name="1_candle">
            <div className="absolute inset-[-3.57%_-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 15">
                <g id="1_candle">
                  <path d="M2.50006 14.5V0.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <rect fill="var(--fill-0, white)" height="8.4" id="Rectangle 35" stroke="var(--stroke-0, #1F1F1F)" width="4" x="0.5" y="3.29997" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="-rotate-90 flex-none h-px w-[24px]">
        <div className="bg-[#efeff4] rounded-[6px] size-full" data-name="divider" />
      </div>
    </div>
  );
}
type ButtonMenuDefault2Props = {
  additionalClassNames?: string;
};

function ButtonMenuDefault2({ additionalClassNames = "" }: ButtonMenuDefault2Props) {
  return (
    <div className={clsx("h-[40px] w-[56px]", additionalClassNames)}>
      <div className="absolute bg-white inset-0" data-name="bg_instrument" />
      <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/dark_mode">
        <div className="absolute inset-[16.67%]" data-name="Vector">
          <Wrapper2 additionalClassNames="inset-[-3.13%_-3.13%_-3.12%_-3.13%]">
            <path d={svgPaths.pb3a6d80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          </Wrapper2>
        </div>
      </div>
    </div>
  );
}
type ButtonMenuDefault1Props = {
  additionalClassNames?: string;
};

function ButtonMenuDefault1({ additionalClassNames = "" }: ButtonMenuDefault1Props) {
  return (
    <div className={clsx("h-[40px] w-[56px]", additionalClassNames)}>
      <div className="absolute bg-white inset-0" data-name="bg_instrument" />
      <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/share">
        <div className="absolute inset-[12.5%_20.83%_16.67%_20.83%]" data-name="icon">
          <div className="absolute inset-[-2.94%_-3.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
              <g id="icon">
                <path d={svgPaths.p38f49c00} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <g id="arrow">
                  <path d={svgPaths.p3118900} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.49994 0.5V11.55" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type ButtonMenuDefaultProps = {
  additionalClassNames?: string;
};

function ButtonMenuDefault({ additionalClassNames = "" }: ButtonMenuDefaultProps) {
  return (
    <div className={clsx("h-[40px] w-[56px]", additionalClassNames)}>
      <div className="absolute bg-white inset-0" data-name="bg_instrument" />
      <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/fullscreen">
        <div className="absolute inset-[16.67%]" data-name="Vector">
          <Wrapper2 additionalClassNames="inset-[-3.13%]">
            <path d={svgPaths.p37c74100} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          </Wrapper2>
        </div>
      </div>
    </div>
  );
}

function Vector1() {
  return (
    <div className="absolute inset-[45.83%_37.5%_41.67%_37.5%]">
      <div className="absolute inset-[-16.67%_-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
          <path d="M0.5 0.5L3.5 3.5L6.5 0.5" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function Vector() {
  return (
    <Wrapper>
      <path d={svgPaths.p3325e520} id="Vector" stroke="var(--stroke-0, #BABAC1)" strokeLinecap="round" strokeLinejoin="round" />
    </Wrapper>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("flex h-[24px] items-center justify-center w-px", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-px rounded-[6px] w-[24px]" data-name="divider" />
      </div>
    </div>
  );
}

function IconsMinus({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/minus">
      <div className="absolute bottom-1/2 left-[29.17%] right-[29.17%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.5px_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 1">
            <path d="M0.5 0.5H10.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconsChevronLargeRight({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/chevron_large/right">
      <div className="absolute flex inset-[29.17%_37.5%_29.17%_41.67%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[5px] rotate-90 w-[10px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute inset-[-10%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 6">
                <path d="M0.5 0.5L5.5 5.5L10.5 0.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconCryptohopper({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[26px]"} data-name="icon_cryptohopper">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconCryptohopper} />
    </div>
  );
}

function LogoBitpanda({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="logo/bitpanda">
      <div className="absolute left-0 size-[20px] top-0" data-name="photo">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, #076CDB)" id="photo" r="10" />
        </svg>
      </div>
      <div className="absolute contents left-0 top-0" data-name="Mask Group">
        <div className="absolute bg-white left-[-3.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.5px_3.2px] mask-size-[20px_20px] size-[26px] top-[-3.2px]" style={{ maskImage: `url('${imgRectangle317}')` }} />
      </div>
    </div>
  );
}

function IconsIndicators({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/indicators">
      <div className="absolute inset-[20.83%_29.17%]" data-name="icon">
        <div className="absolute inset-[-3.57%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15">
            <g id="icon">
              <path d="M10.5 14.5V5.59089" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 14.3586V0.5" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.5 14.3586V9.40911" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconsSave({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/save">
      <div className="absolute inset-[20.83%_11.1%_16.68%_12.5%]" data-name="cloud">
        <div className="absolute inset-[-3.33%_-2.73%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.335 15.9979">
            <g id="cloud">
              <path d={svgPaths.pddfdb80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.67114 7.99792V15.4979" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p7426d70} id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.pddfdb80} id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconsArrowLeft({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/arrow_left">
      <Wrapper>
        <path d={svgPaths.p2c236e10} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
      </Wrapper>
    </div>
  );
}

function IconsHorizontalLine({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/horizontal_line">
      <div className="absolute inset-[41.67%_8.33%]" data-name="icon">
        <div className="absolute inset-[-12.5%_-2.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 5">
            <g id="icon">
              <path d="M0.5 2.5L20.5 2.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p1e2ea900} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonToolDefault({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[48px]"} data-name="button/tool/default">
      <div className="absolute bg-white inset-0" data-name="tool_bg" />
      <IconsHorizontalLine className="absolute inset-1/4 overflow-clip" />
    </div>
  );
}

function ToolsBarDefault({ className }: { className?: string }) {
  return (
    <div className={className || "h-[836px] relative w-[48px]"} data-name="tools_bar/default">
      <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-0 top-0">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/cursor">
            <div className="absolute bg-[#dcf5f7] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/cursor_tool">
              <div className="absolute inset-[41.67%]" data-name="icon">
                <div className="absolute inset-[-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <g id="icon">
                      <path d={svgPaths.p312e4100} fill="var(--fill-0, #DCF5F7)" id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="tool_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/trend_line">
              <div className="absolute inset-[16.67%_12.5%_12.5%_16.67%]" data-name="line">
                <div className="absolute inset-[-2.94%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="line">
                      <path d={svgPaths.p10769600} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p6353880} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p263d7500} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0" data-name="tool_bg" />
            <IconsHorizontalLine className="absolute inset-1/4 overflow-clip" />
          </div>
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
        </div>
        <div className="bg-[#efeff4] h-px rounded-[6px] shrink-0 w-[32px]" data-name="divider" />
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
        </div>
        <div className="bg-[#efeff4] h-px rounded-[6px] shrink-0 w-[32px]" data-name="divider" />
        <ButtonToolDefault className="relative shrink-0 size-[48px]" />
      </div>
    </div>
  );
}

function LogoCryptohopperExtended({ className }: { className?: string }) {
  return (
    <div className={className || "h-[38px] relative w-[169px]"} data-name="logo_cryptohopper_extended">
      <div className="absolute contents left-0 top-[-5px]" data-name="logo">
        <div className="absolute bg-white border border-[#f8f8ff] border-solid h-[40px] left-0 rounded-[60px] shadow-[1px_8px_40px_0px_rgba(49,49,49,0.06)] top-[-1px] w-[169px]" data-name="bg" />
        <div className="absolute h-[48.078px] left-[4px] top-[-5px] w-[161px]" data-name="RGB_logo_dark_no_bg-01 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRgbLogoDarkNoBg011} />
        </div>
      </div>
    </div>
  );
}

function IconsStepBack({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/step_back">
      <div className="absolute inset-[20.83%_18.52%_20.83%_16.67%]" data-name="Group">
        <div className="absolute inset-[-3.57%_-3.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5544 15">
            <g id="Group">
              <path d={svgPaths.p2840e00} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p3aea5140} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type LightModeUserProfileProps = {
  className?: string;
  property1?: "A" | "N" | "G" | "Z" | "T" | "M" | "F" | "Y" | "S" | "L" | "E" | "X" | "R" | "K" | "D" | "W" | "Q" | "J" | "C" | "V" | "B" | "U" | "O" | "H";
};

function LightModeUserProfile({ className, property1 = "A" }: LightModeUserProfileProps) {
  const isG = property1 === "G";
  const isJ = property1 === "J";
  return (
    <div className={className || "relative size-[24px]"}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" fill={isG ? "var(--fill-0, #8728A6)" : isJ ? "var(--fill-0, #08CE33)" : "var(--fill-0, #FF6B5C)"} fillOpacity="0.1" id="round_bg" r="12" />
      </svg>
      <p className={`absolute font-["Source_Sans_Pro:Regular",sans-serif] leading-[normal] not-italic text-[14px] text-center whitespace-nowrap ${isG ? "inset-[12.5%_33.33%_12.5%_29.17%] text-[#8728a6]" : isJ ? "inset-[12.5%_37.5%_12.5%_33.33%] text-[#09977e]" : "inset-[12.5%_33.33%] text-[#f6877c]"}`}>{isG ? "G" : isJ ? "J" : ["H", "O", "U", "B", "V", "V", "C", "Q", "W", "D", "K", "R", "X", "E", "L", "S", "Y", "F", "M", "T", "Z", "N"].includes(property1) ? "A" : "A"}</p>
    </div>
  );
}

export default function BottomChartNavigation() {
  return (
    <div className="bg-[#efeff4] relative size-full" data-name="Bottom_chart_navigation">
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[56px] overflow-clip top-[181px] w-[1440px]" data-name="Navigation">
        <FooterBarText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLine text="22" text1="19" text2="12" text3="8" text4="5" text5="15" text6="Oct" text7="28" text8="24" text9="21" text10="17" text11="14" text12="10" text13="7" text14="4" text15="Sep" text16="27" text17="24" text18="20" text19="17" />
          <RighstSideBar />
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <ChartLayout />
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
            <div className="absolute contents left-[520px] top-[681px]" data-name="navigation">
              <ButtonRoundDefault additionalClassNames="left-[568px] top-[681px]" />
              <div className="absolute flex items-center justify-center left-[632px] size-[40px] top-[681px]">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="relative size-[40px]" data-name="button/round/default">
                    <Helper3 />
                    <IconsChevronLargeRight className="absolute inset-[20%] overflow-clip" />
                  </div>
                </div>
              </div>
              <div className="absolute left-[520px] size-[40px] top-[681px]" data-name="button/round/default">
                <Helper3 />
                <IconsMinus className="absolute inset-[20%]" />
              </div>
              <div className="absolute left-[680px] size-[40px] top-[681px]" data-name="button/round/default">
                <Helper3 />
                <IconsChevronLargeRight className="absolute inset-[20%] overflow-clip" />
              </div>
              <div className="absolute left-[744px] size-[40px] top-[681px]" data-name="button/round/default">
                <Helper3 />
                <IconsStepBack className="absolute inset-[20%] overflow-clip" />
              </div>
            </div>
          </div>
        </div>
        <ToolsBarDefault className="absolute h-[836px] left-0 top-[64px] w-[48px]" />
        <div className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" data-name="upper_bar/logged_in">
          <div className="absolute bg-white inset-0 rounded-[6px]" data-name="bg" />
          <Helper additionalClassNames="absolute left-[930px] top-[8px]" />
          <div className="absolute contents left-[931px] top-0" data-name="undo_redo">
            <div className="absolute bg-white inset-[0_25.22%_0_68.06%]" data-name="bg" />
            <div className="absolute left-[983px] overflow-clip size-[24px] top-[8px]" data-name="icons/arrow_right">
              <Vector />
            </div>
            <IconsArrowLeft className="absolute left-[947px] overflow-clip size-[24px] top-[8px]" />
          </div>
          <Helper additionalClassNames="absolute left-[1023px] top-[8px]" />
          <div className="absolute contents left-[1024px] top-0" data-name="save">
            <div className="absolute bg-white inset-[0_16.67%_0_74.85%]" data-name="bg" />
            <p className="-translate-x-full absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1099px] not-italic text-[#1f1f1f] text-[14px] text-right top-[11px] whitespace-nowrap">Save</p>
            <div className="absolute left-[1100px] overflow-clip size-[24px] top-[8px]" data-name="icons/small_chevron/down">
              <Vector1 />
            </div>
            <IconsSave className="absolute left-[1040px] size-[24px] top-[8px]" />
          </div>
          <Helper additionalClassNames="absolute left-[1140px] top-[8px]" />
          <ButtonMenuDefault additionalClassNames="absolute left-[1141px] top-0" />
          <Helper additionalClassNames="absolute left-[1197px] top-[8px]" />
          <ButtonMenuDefault1 additionalClassNames="absolute left-[1198px] top-0" />
          <Helper additionalClassNames="absolute left-[1254px] top-[8px]" />
          <ButtonMenuDefault2 additionalClassNames="absolute left-[1255px] top-0" />
          <Helper additionalClassNames="absolute left-[1311px] top-[8px]" />
          <div className="absolute inset-[0_0_0_95.91%]" data-name="user_profile">
            <div className="absolute bg-white inset-0 rounded-br-[6px] rounded-tr-[6px]" data-name="bg_instrument" />
            <LightModeUserProfile className="absolute inset-[20%_28.57%]" property1="G" />
          </div>
          <div className="absolute bottom-full contents left-0 right-full top-0" data-name="button" />
          <div className="absolute contents inset-[0_66.74%_0_1.46%]" data-name="left_side">
            <Helper1 additionalClassNames="inset-[20%_66.74%_20%_33.19%]" />
            <Helper1 additionalClassNames="inset-[20%_83.63%_20%_16.3%]" />
            <Helper1 additionalClassNames="inset-[20%_90.57%_20%_9.36%]" />
            <Helper1 additionalClassNames="inset-[20%_79.9%_20%_20.03%]" />
            <Helper1 additionalClassNames="inset-[20%_70.91%_20%_29.02%]" />
            <div className="absolute contents inset-[27.5%_85.16%_27.5%_10.89%]" data-name="exchange">
              <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[27.5%_85.16%_27.5%_10.89%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] uppercase whitespace-nowrap">BTC/USD</p>
            </div>
            <div className="absolute contents inset-[27.5%_81.43%_27.5%_17.84%]" data-name="days">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_81.43%_27.5%_17.84%] leading-[normal] not-italic text-[#1f1f1f] text-[14px]">D</p>
            </div>
            <div className="absolute contents inset-[20%_72.44%_20%_21.13%]" data-name="Indicators">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_72.44%_27.5%_23.25%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] whitespace-nowrap">Indicators</p>
              <IconsIndicators className="absolute inset-[20%_77.12%_20%_21.13%] overflow-clip" />
            </div>
            <Candles />
            <div className="absolute bottom-1/4 contents left-[1.46%] right-[92.11%] top-1/4" data-name="market">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_92.11%_27.5%_3.51%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] uppercase whitespace-nowrap">Bitpanda</p>
              <LogoBitpanda className="absolute left-[20px] size-[20px] top-[10px]" />
            </div>
          </div>
        </div>
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
      </div>
      <div className="absolute left-[90px] size-[40px] top-[2558px]" data-name="button/round/default">
        <Helper3 />
        <IconsStepBack className="absolute inset-[20%] overflow-clip" />
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[56px] overflow-clip top-[1112px] w-[1440px]" data-name="Navigation/no_reset">
        <FooterBarText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLine text="22" text1="19" text2="12" text3="8" text4="5" text5="15" text6="Oct" text7="28" text8="24" text9="21" text10="17" text11="14" text12="10" text13="7" text14="4" text15="Sep" text16="27" text17="24" text18="20" text19="17" />
          <RighstSideBar />
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <ChartLayout />
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
            <div className="absolute contents left-[520px] top-[681px]" data-name="navigation">
              <ButtonRoundDefault additionalClassNames="left-[568px] top-[681px]" />
              <Helper4 additionalClassNames="left-[632px] top-[681px]" />
              <div className="absolute left-[520px] size-[40px] top-[681px]" data-name="button/round/default">
                <Wrapper1>
                  <g filter="url(#filter0_d_28_6463)" id="round_bg">
                    <circle cx="59" cy="52" fill="var(--fill-0, white)" fillOpacity="0.8" r="20" />
                    <circle cx="59" cy="52" r="19.5" stroke="var(--stroke-0, #F8F8FF)" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="120" id="filter0_d_28_6463" width="120" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dx="1" dy="8" />
                      <feGaussianBlur stdDeviation="20" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0.12 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_28_6463" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_28_6463" mode="normal" result="shape" />
                    </filter>
                  </defs>
                </Wrapper1>
                <IconsMinus className="absolute inset-[20%]" />
              </div>
              <div className="absolute left-[680px] size-[40px] top-[681px]" data-name="button/round/default">
                <Helper3 />
                <IconsChevronLargeRight className="absolute inset-[20%] overflow-clip" />
              </div>
            </div>
            <div className="absolute contents left-[552px] top-[637px]" data-name="tooltip">
              <TooltipText text="Zoom In" additionalClassNames="left-[calc(50%-63.5px)] top-[calc(50%+283px)]" />
              <Helper5 additionalClassNames="inset-[90.39%_54.34%_8.66%_44.59%]" />
            </div>
          </div>
        </div>
        <ToolsBarDefault className="absolute h-[836px] left-0 top-[64px] w-[48px]" />
        <div className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" data-name="upper_bar/default">
          <div className="absolute bg-white inset-0 rounded-[6px]" data-name="bg" />
          <div className="absolute content-stretch flex inset-[0_10.01%_0_62.06%] items-center" data-name="instruments">
            <Helper additionalClassNames="relative shrink-0" />
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="undo_redo">
              <div className="bg-white col-1 h-[40px] ml-0 mt-0 row-1 w-[92px]" data-name="bg" />
              <div className="col-1 ml-[52px] mt-[8px] overflow-clip relative row-1 size-[24px]" data-name="icons/arrow_right">
                <Vector />
              </div>
              <IconsArrowLeft className="col-1 ml-[16px] mt-[8px] overflow-clip relative row-1 size-[24px]" />
            </div>
            <Helper additionalClassNames="relative shrink-0" />
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="save">
              <div className="bg-white col-1 h-[40px] ml-0 mt-0 row-1 w-[116px]" data-name="bg" />
              <p className="col-1 font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] ml-[47px] mt-[11px] not-italic relative row-1 text-[#1f1f1f] text-[14px] text-right whitespace-nowrap">Save</p>
              <div className="col-1 ml-[76px] mt-[8px] overflow-clip relative row-1 size-[24px]" data-name="icons/small_chevron/down">
                <Vector1 />
              </div>
              <IconsSave className="col-1 ml-[16px] mt-[8px] relative row-1 size-[24px]" />
            </div>
            <Helper additionalClassNames="relative shrink-0" />
            <ButtonMenuDefault additionalClassNames="relative shrink-0" />
            <Helper additionalClassNames="relative shrink-0" />
            <ButtonMenuDefault1 additionalClassNames="relative shrink-0" />
            <Helper additionalClassNames="relative shrink-0" />
            <ButtonMenuDefault2 additionalClassNames="relative shrink-0" />
            <Helper additionalClassNames="relative shrink-0" />
          </div>
          <div className="absolute inset-[15%_0.44%_15%_95.03%]" data-name="button/tertiary/default">
            <div className="absolute bg-[#dcf5f7] h-[28px] left-0 opacity-80 right-0 rounded-[4px] top-0" data-name="bg" />
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[#00b1c7] text-[14px] text-center top-[calc(50%-9px)] whitespace-nowrap">Sign Up</p>
          </div>
          <div className="absolute contents inset-[27.5%_6.21%_27.5%_91.15%]" data-name="button">
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_6.21%_27.5%_91.15%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] whitespace-nowrap">Log In</p>
          </div>
          <div className="absolute contents inset-[0_66.74%_0_1.46%]" data-name="left_side">
            <Helper1 additionalClassNames="inset-[20%_66.74%_20%_33.19%]" />
            <Helper1 additionalClassNames="inset-[20%_83.63%_20%_16.3%]" />
            <Helper1 additionalClassNames="inset-[20%_90.57%_20%_9.36%]" />
            <Helper1 additionalClassNames="inset-[20%_79.9%_20%_20.03%]" />
            <Helper1 additionalClassNames="inset-[20%_70.91%_20%_29.02%]" />
            <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[27.5%_85.16%_27.5%_10.89%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] uppercase whitespace-nowrap">BTC/USD</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_81.43%_27.5%_17.84%] leading-[normal] not-italic text-[#1f1f1f] text-[14px]">D</p>
            <div className="absolute contents inset-[20%_72.44%_20%_21.05%]" data-name="Indicators">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_72.44%_27.5%_23.25%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] whitespace-nowrap">Indicators</p>
              <IconsIndicators className="absolute inset-[20%_77.19%_20%_21.05%] overflow-clip" />
            </div>
            <Candles />
            <div className="absolute bottom-1/4 contents left-[1.46%] right-[92.11%] top-1/4" data-name="market">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_92.11%_27.5%_3.51%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] uppercase whitespace-nowrap">Bitpanda</p>
              <LogoBitpanda className="absolute bottom-1/4 left-[1.46%] right-[97.08%] top-1/4" />
            </div>
          </div>
        </div>
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
      </div>
      <div className="absolute left-[221px] size-[40px] top-[2348px]" data-name="button/round/default">
        <Helper3 />
        <IconsChevronLargeRight className="absolute inset-[20%] overflow-clip" />
      </div>
      <Helper4 additionalClassNames="left-[93px] top-[2348px]" />
      <div className="absolute left-[79px] size-[40px] top-[2138px]" data-name="button/round/default">
        <Helper3 />
        <IconsMinus className="absolute inset-[20%]" />
      </div>
      <ButtonRoundDefault additionalClassNames="left-[194px] top-[2138px]" />
      <div className="absolute contents left-[57px] top-[2304px]" data-name="tooltip">
        <TooltipText text="Scroll to the Left" additionalClassNames="left-[calc(50%-674.5px)] top-[calc(50%+891px)]" />
        <Helper5 additionalClassNames="inset-[81.73%_92.38%_18.03%_6.73%]" />
      </div>
      <div className="absolute contents left-[181px] top-[2304px]" data-name="tooltip">
        <TooltipText text="Scroll to the Right" additionalClassNames="left-[calc(50%-546.5px)] top-[calc(50%+891px)]" />
        <Helper5 additionalClassNames="inset-[81.73%_84.25%_18.03%_14.86%]" />
      </div>
      <div className="absolute contents left-[41.5px] top-[2514px]" data-name="tooltip">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1f1f1f] content-stretch flex items-center left-[calc(50%-677.5px)] px-[15px] py-[8px] rounded-[3px] top-[calc(50%+1101px)]" data-name="tooltip">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-pre">{`Back to  Recent  Price`}</p>
        </div>
        <Helper5 additionalClassNames="inset-[89.08%_92.57%_10.68%_6.54%]" />
      </div>
      <div className="absolute contents left-[58px] top-[2094px]" data-name="tooltip">
        <TooltipText text="Zoom Out" additionalClassNames="left-[calc(50%-689px)] top-[calc(50%+681px)]" />
        <Helper5 additionalClassNames="inset-[74.38%_93.3%_25.38%_5.81%]" />
      </div>
      <div className="absolute contents left-[177.5px] top-[2094px]" data-name="tooltip">
        <TooltipText text="Zoom In" additionalClassNames="left-[calc(50%-574px)] top-[calc(50%+681px)]" />
        <Helper5 additionalClassNames="inset-[74.38%_86%_25.38%_13.11%]" />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[56px] not-italic text-[16px] text-black top-[66px] w-[533px]">{`Navigation controls appear on hover at the bottom part of the chart, when the chart is not empty (e.g. when candles are displayed or/and drawing) `}</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[350px] not-italic text-[16px] text-black top-[2132px] whitespace-pre">{`Zooms in and out  the chart`}</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[349px] not-italic text-[16px] text-black top-[2356px] whitespace-nowrap">Helps to navigate the chart field</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[349px] not-italic text-[16px] text-black top-[2560px] whitespace-pre">{`Turnes a user to the end of  the chart field (to the  last day/price) `}</p>
    </div>
  );
}