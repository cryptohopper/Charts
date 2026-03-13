import clsx from "clsx";
import svgPaths from "./svg-p8ybobfhbv";
import imgIconCryptohopper from "figma:asset/f1841337e214c3907e27f0e01bfbc7696f6af6d9.png";
import imgRectangle317 from "figma:asset/70017910a949817aa1c11716388ee64b40b2eafa.png";
import imgRgbLogoDarkNoBg011 from "figma:asset/bfb3fe6da9e88a568cbf5fd07d74cee065bbcbc3.png";
import imgColor from "figma:asset/7658e7e9a7ed0c1c3dd735be9be8e1932aae9269.png";
import imgOpacityScale from "figma:asset/96620d5081eb1173faf51622afd13844ad334d90.png";
type BackgroundImage12Props = {
  additionalClassNames?: string;
};

function BackgroundImage12({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage12Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage11Props = {
  additionalClassNames?: string;
};

function BackgroundImage11({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage11Props>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0 w-px", additionalClassNames)}>
      <div className="-rotate-90 flex-none">{children}</div>
    </div>
  );
}

function VectorBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
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

function BackgroundImage10({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[16.67%_20.83%]">
      <div className="absolute inset-[-3.13%_-3.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
          {children}
        </svg>
      </div>
    </div>
  );
}

function DatePriceRangeChosenTypeBackgroundImage() {
  return (
    <div className="absolute inset-[37.5%_85.53%_37.5%_6.92%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <circle cx="6" cy="6" fill="var(--fill-0, #00B1C7)" fillOpacity="0.1" id="chosen_type" r="6" />
      </svg>
    </div>
  );
}

function DatePriceRangeLineBackgroundImage() {
  return (
    <div className="absolute bottom-1/2 left-[10.06%] right-[10.06%] top-1/2">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 1">
          <path d="M0 0.5H127" id="line" stroke="var(--stroke-0, #1F1F1F)" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute bg-white h-[28px] left-0 right-0 top-0" data-name="bg" />
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-1/2 not-italic text-[#1f1f1f] text-[14px] text-center top-[calc(50%-10px)] whitespace-nowrap">{text}</p>
    </div>
  );
}
type DatePriceRangeFontSizeBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function DatePriceRangeFontSizeBackgroundImageAndText({ text, additionalClassNames = "" }: DatePriceRangeFontSizeBackgroundImageAndTextProps) {
  return <BackgroundImageAndText text={text} additionalClassNames={clsx("absolute left-[1.61%] right-[1.61%]", additionalClassNames)} />;
}
type TooltipBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TooltipBackgroundImageAndText1({ text, additionalClassNames = "" }: TooltipBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] py-[8px] rounded-[3px]", additionalClassNames)}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">{text}</p>
    </div>
  );
}

function WidthBackgroundImage() {
  return (
    <div className="absolute inset-[39.58%_9.43%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129 10">
        <g id="width">
          <circle cx="41" cy="5" fill="var(--fill-0, #3E3E3E)" id="S" r="3" />
          <circle cx="124" cy="5" fill="var(--fill-0, #3E3E3E)" id="L" r="5" />
          <circle cx="82" cy="5" fill="var(--fill-0, #3E3E3E)" id="M" r="4" />
          <circle cx="2" cy="5" fill="var(--fill-0, #00B1C7)" id="XS" r="2" />
        </g>
      </svg>
    </div>
  );
}
type ListItem32SBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ListItem32SBackgroundImageAndText({ text, additionalClassNames = "" }: ListItem32SBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[32px]", additionalClassNames)}>
      <div className="absolute bg-white h-[32px] left-0 right-0 top-0" data-name="bg" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[12px] text-black top-[8px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function MenuItemLineColorBackgroundImage() {
  return (
    <div className="h-[38px] relative shrink-0 w-[48px]">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="absolute bg-[#3e3e3e] bottom-1/2 left-1/4 right-1/4 rounded-[6px] top-[47.37%]" data-name="thickness" />
      <div className="absolute bg-[#00b1c7] bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" />
    </div>
  );
}
type BackgroundImage9Props = {
  additionalClassNames?: string;
};

function BackgroundImage9({ additionalClassNames = "" }: BackgroundImage9Props) {
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
type TooltipBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TooltipBackgroundImageAndText({ text, additionalClassNames = "" }: TooltipBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] py-[8px] rounded-[3px]", additionalClassNames)}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{text}</p>
    </div>
  );
}

function ToolsBarDefaultBackgroundImage() {
  return (
    <div className="absolute h-[836px] left-0 top-[64px] w-[48px]">
      <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-0 top-0">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/cursor">
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/cursor_tool">
              <div className="absolute inset-[41.67%]">
                <div className="absolute inset-[-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                    <g id="icon">
                      <path d={svgPaths.p312e4100} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
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
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0" data-name="tool_bg" />
            <div className="absolute bg-[#dcf5f7] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/date_&_price_range">
              <div className="absolute inset-[12.5%_8.33%_8.33%_12.5%]">
                <div className="absolute inset-[-2.63%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g id="icon">
                      <rect height="17" id="Rectangle 33" rx="0.5" stroke="var(--stroke-0, #00B1C7)" width="17" x="1.5" y="1.5" />
                      <g id="arrows">
                        <path d={svgPaths.pb09f380} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.pd25d700} id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <path d={svgPaths.p1b49b1f0} fill="var(--fill-0, #DCF5F7)" id="Vector_3" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3302e140} fill="var(--fill-0, #DCF5F7)" id="Vector_4" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
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

function ExchangeDescriptionBackgroundImage() {
  return (
    <div className="absolute contents left-[18px] top-0">
      <div className="absolute bg-white content-stretch flex gap-[12px] items-center left-[18px] top-[36px]">
        <div className="bg-white content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#f26d60] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f26d60] text-[12px] whitespace-nowrap">{"13679.36"}</p>
        </div>
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap">{"4.73"}</p>
        <div className="bg-white content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#00b1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00b1c7] text-[12px] whitespace-nowrap">{"13684.09"}</p>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[16px] items-center left-[18px] py-[10px] top-0">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-pre">{`Bitcoin  / U.S. Dollar  ·  1D  ·  COINBASE`}</p>
        <div className="relative shrink-0 size-[16px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="market_open">
              <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" fillOpacity="0.2" id="bg" r="8" />
              <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" id="dot" r="4" />
            </g>
          </svg>
        </div>
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-pre">
          <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{"O"}</span>
          <span className="leading-[normal]">{` `}</span>
          <span className="leading-[normal] text-[#09977e]">{"13642.31"}</span>
          <span className="leading-[normal]">{`   `}</span>
          <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{"H"}</span>
          <span className="leading-[normal]">{` `}</span>
          <span className="leading-[normal] text-[#09977e]">{"13864.89"}</span>
          <span className="leading-[normal]">{`  `}</span>
          <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{"L"}</span>
          <span className="leading-[normal]">{` `}</span>
          <span className="leading-[normal] text-[#09977e]">{"13486.07"}</span>
          <span className="leading-[normal]">{`  `}</span>
          <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{`C `}</span>
          <span className="leading-[normal] text-[#09977e]">{"13684.09"}</span>
          <span className="leading-[normal]">{`     `}</span>
        </p>
        <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09977e] text-[12px] whitespace-pre">{`+36.19  (+0.27%)`}</p>
      </div>
    </div>
  );
}

function LockBackgroundImage() {
  return (
    <div className="h-[38px] relative shrink-0 w-[56px]">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="absolute bg-[#dcf5f7] inset-[10.53%_21.43%] rounded-[4px]" data-name="selected_bg" />
      <div className="absolute inset-[18.42%_28.57%] overflow-clip" data-name="icons/lock">
        <IconBackgroundImage />
      </div>
    </div>
  );
}
type MenuItemBgColorBackgroundImageProps = {
  additionalClassNames?: string;
};

function MenuItemBgColorBackgroundImage({ additionalClassNames = "" }: MenuItemBgColorBackgroundImageProps) {
  return (
    <div className={clsx("h-[38px] w-[48px]", additionalClassNames)}>
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="absolute bg-size-[auto_auto,40.00000059604645px_40.00000059604645px] bg-top-left bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 177, 199, 0.05) 0%, rgba(0, 177, 199, 0.05) 100%), url('${imgColor}')` }} />
      <IconsBackgroundColor className="absolute bottom-[18.42%] left-1/4 right-1/4 top-[18.42%]" />
    </div>
  );
}

function BackgroundImage8() {
  return (
    <BackgroundImage11 additionalClassNames="h-[32px]">
      <div className="bg-[#efeff4] h-px rounded-[6px] w-[32px]" data-name="divider" />
    </BackgroundImage11>
  );
}
type BackgroundImage7Props = {
  additionalClassNames?: string;
};

function BackgroundImage7({ additionalClassNames = "" }: BackgroundImage7Props) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute inset-[-25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p31427a00} id="Vector" stroke="var(--stroke-0, #BABAC1)" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ additionalClassNames = "" }: BackgroundImage6Props) {
  return <BackgroundImage7 additionalClassNames={clsx("absolute bottom-3/4 top-[16.67%]", additionalClassNames)} />;
}
type VectorBackgroundImage1Props = {
  additionalClassNames?: string;
};

function VectorBackgroundImage1({ additionalClassNames = "" }: VectorBackgroundImage1Props) {
  return <BackgroundImage7 additionalClassNames={clsx("absolute bottom-[16.67%] top-3/4", additionalClassNames)} />;
}

function IconsDragBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <BackgroundImage7 additionalClassNames="absolute inset-[45.83%_58.33%_45.83%_33.33%]" />
      <BackgroundImage6 additionalClassNames="left-[33.33%] right-[58.33%]" />
      <VectorBackgroundImage1 additionalClassNames="left-[33.33%] right-[58.33%]" />
      <BackgroundImage7 additionalClassNames="absolute inset-[45.83%_33.33%_45.83%_58.33%]" />
      <BackgroundImage6 additionalClassNames="left-[58.33%] right-[33.33%]" />
      <VectorBackgroundImage1 additionalClassNames="left-[58.33%] right-[33.33%]" />
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <BackgroundImage10>
      <g id="icon">
        <path d={svgPaths.pbbda80} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p6a25a00} id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </BackgroundImage10>
  );
}
type MarkerBackgroundImageProps = {
  additionalClassNames?: string;
};

function MarkerBackgroundImage({ additionalClassNames = "" }: MarkerBackgroundImageProps) {
  return (
    <div className={clsx("absolute size-[8px]", additionalClassNames)}>
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, white)" id="marker" r="4.5" stroke="var(--stroke-0, #00B1C7)" />
        </svg>
      </div>
    </div>
  );
}

function DatePriceRangeBackgroundImage() {
  return (
    <div className="absolute contents left-[370px] top-[244px]">
      <div className="absolute bg-[rgba(0,177,199,0.05)] border border-[#00b1c7] border-solid h-[384px] left-[374px] top-[248px] w-[826px]" data-name="field" />
      <div className="absolute h-0 left-[376px] top-[440px] w-[823px]">
        <div className="absolute inset-[-3.68px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 823.5 7.36396">
            <path d={svgPaths.p21215080} fill="var(--stroke-0, #00B1C7)" id="Vector 15" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[381.5px] left-[787px] top-[249px] w-0">
        <div className="absolute inset-[0_-3.68px_-0.13%_-3.68px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.36396 382">
            <path d={svgPaths.p18e60100} fill="var(--stroke-0, #00B1C7)" id="Vector 14" />
          </svg>
        </div>
      </div>
      <MarkerBackgroundImage additionalClassNames="left-[370px] top-[244px]" />
      <MarkerBackgroundImage additionalClassNames="left-[1195px] top-[627px]" />
      <div className="absolute bg-[#dcf5f7] content-stretch flex items-center left-[716px] opacity-85 px-[10px] py-[4px] rounded-[4px] top-[644px]">
        <div aria-hidden="true" className="absolute border border-[#00b1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#00b1c7] text-[12px] text-center whitespace-nowrap">
          <p className="mb-0">{"-196.94 (-41.71%) -19694"}</p>
          <p>{"90 bars, 28d"}</p>
        </div>
      </div>
    </div>
  );
}

function BarsBackgroundImage() {
  return (
    <div className="absolute contents left-[-4px] top-[89px]">
      <div className="absolute contents left-[-4px] top-[213px]">
        <div className="absolute bg-[#09977e] h-[93px] left-[11px] top-[213px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[12px] top-[219px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[-4px] top-[298px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[29px] top-[194px]">
        <div className="absolute bg-[#f26d60] h-[70px] left-[44px] top-[194px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[29px] top-[215px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[45px] top-[234px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[62px] top-[89px]">
        <div className="absolute bg-[#09977e] h-[198px] left-[77px] top-[89px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[62px] top-[232px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[78px] top-[147px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[95px] top-[130px]">
        <div className="absolute bg-[#09977e] h-[280px] left-[110px] top-[130px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[95px] top-[149px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[111px] top-[327px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[161px] top-[451px]">
        <div className="absolute bg-[#09977e] h-[207px] left-[176px] top-[451px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[161px] top-[584px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[177px] top-[514px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[194px] top-[479px]">
        <div className="absolute bg-[#f26d60] h-[243px] left-[209px] top-[479px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[194px] top-[512px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[210px] top-[617px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[227px] top-[556px]">
        <div className="absolute bg-[#09977e] h-[121px] left-[242px] top-[556px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[227px] top-[619px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[243px] top-[584px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[260px] top-[527px]">
        <div className="absolute bg-[#09977e] h-[191px] left-[275px] top-[527px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[260px] top-[587px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[276px] top-[544px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[293px] top-[515px]">
        <div className="absolute bg-[#f26d60] h-[220px] left-[308px] top-[515px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[293px] top-[544px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[309px] top-[670px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[458px] top-[507px]">
        <div className="absolute bg-[#f26d60] h-[131px] left-[473px] top-[507px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[458px] top-[554px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[474px] top-[597px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[524px] top-[386px]">
        <div className="absolute bg-[#09977e] h-[112px] left-[539px] top-[386px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[524px] top-[477px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[540px] top-[436px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[557px] top-[328px]">
        <div className="absolute bg-[#09977e] h-[151px] left-[572px] top-[328px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[557px] top-[436px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[573px] top-[371px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[656px] top-[297px]">
        <div className="absolute bg-[#09977e] h-[106px] left-[671px] top-[297px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[656px] top-[375px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[672px] top-[334px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[590px] top-[341px]">
        <div className="absolute bg-[#f26d60] h-[107px] left-[605px] top-[341px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[590px] top-[371px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[606px] top-[375px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[623px] top-[345px]">
        <div className="absolute bg-[#f26d60] h-[81px] left-[638px] top-[345px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[623px] top-[372px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[639px] top-[377px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[689px] top-[330px]">
        <div className="absolute bg-[#f26d60] h-[118px] left-[704px] top-[330px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[689px] top-[332px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[705px] top-[391px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[722px] top-[363px]">
        <div className="absolute bg-[#f26d60] h-[251px] left-[737px] top-[363px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[722px] top-[393px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[738px] top-[569px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[755px] top-[510px]">
        <div className="absolute bg-[#09977e] h-[76px] left-[770px] top-[510px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[755px] top-[567px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[771px] top-[524px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[788px] top-[520px]">
        <div className="absolute bg-[#f26d60] h-[142px] left-[803px] top-[520px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[788px] top-[527px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[804px] top-[633px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[854px] top-[442px]">
        <div className="absolute bg-[#f26d60] h-[73px] left-[869px] top-[442px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[854px] top-[454px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[870px] top-[472px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[887px] top-[422px]">
        <div className="absolute bg-[#09977e] h-[62px] left-[902px] top-[422px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[887px] top-[470px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[903px] top-[458px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[920px] top-[429px]">
        <div className="absolute bg-[#09977e] h-[81px] left-[935px] top-[429px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[920px] top-[458px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[936px] top-[438px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[986px] top-[403px]">
        <div className="absolute bg-[#09977e] h-[88px] left-[1001px] top-[403px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[986px] top-[475px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[1002px] top-[412px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[1019px] top-[408px]">
        <div className="absolute bg-[#f26d60] h-[72px] left-[1034px] top-[408px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[1019px] top-[410px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[1035px] top-[438px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[1052px] top-[343px]">
        <div className="absolute bg-[#f26d60] h-[184px] left-[1067px] top-[343px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[1052px] top-[403px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[1068px] top-[460px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[1085px] top-[442px]">
        <div className="absolute bg-[#f26d60] h-[103px] left-[1100px] top-[442px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[1085px] top-[464px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[1101px] top-[473px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[1118px] top-[442px]">
        <div className="absolute bg-[#f26d60] h-[61px] left-[1133px] top-[442px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[1118px] top-[477px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[1134px] top-[484px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[1151px] top-[433px]">
        <div className="absolute bg-[#09977e] h-[65px] left-[1166px] top-[433px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[1151px] top-[488px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[1167px] top-[441px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[1184px] top-[393px]">
        <div className="absolute bg-[#09977e] h-[83px] left-[1199px] top-[393px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[1184px] top-[444px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[1200px] top-[399px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[1217px] top-[393px]">
        <div className="absolute bg-[#f26d60] h-[105px] left-[1232px] top-[393px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[1217px] top-[398px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[1233px] top-[465px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[1250px] top-[437px]">
        <div className="absolute bg-[#09977e] h-[48px] left-[1265px] top-[437px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[1250px] top-[467px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[1266px] top-[441px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[1283px] top-[340px]">
        <div className="absolute bg-[#09977e] h-[158px] left-[1298px] top-[340px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[1283px] top-[441px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[1299px] top-[351px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[953px] top-[343px]">
        <div className="absolute bg-[#f26d60] h-[152px] left-[968px] top-[343px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#f26d60] h-px left-[953px] top-[438px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#f26d60] h-px left-[969px] top-[471px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[821px] top-[433px]">
        <div className="absolute bg-[#09977e] h-[214px] left-[836px] top-[433px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[821px] top-[631px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[837px] top-[451px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[326px] top-[592px]">
        <div className="absolute bg-[#09977e] h-[120px] left-[341px] top-[592px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[326px] top-[668px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[342px] top-[632px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[359px] top-[539px]">
        <div className="absolute bg-[#09977e] h-[99px] left-[374px] top-[539px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[359px] top-[635px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[375px] top-[592px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[491px] top-[440px]">
        <div className="absolute bg-[#09977e] h-[190px] left-[506px] top-[440px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[491px] top-[595px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[507px] top-[474px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[392px] top-[566px]">
        <div className="absolute bg-[#09977e] h-[76px] left-[407px] top-[566px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[392px] top-[594px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[408px] top-[575px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[425px] top-[542px]">
        <div className="absolute bg-[#09977e] h-[72px] left-[440px] top-[542px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[425px] top-[572px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[441px] top-[556px] w-[15px]" data-name="horizontal_line" />
      </div>
      <div className="absolute contents left-[128px] top-[299px]">
        <div className="absolute bg-[#09977e] h-[349px] left-[143px] top-[299px] w-px" data-name="vertical_line" />
        <div className="absolute bg-[#09977e] h-px left-[128px] top-[329px] w-[15px]" data-name="horizontal_line" />
        <div className="absolute bg-[#09977e] h-px left-[144px] top-[584px] w-[15px]" data-name="horizontal_line" />
      </div>
    </div>
  );
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ additionalClassNames = "" }: BackgroundImage5Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-px items-center justify-center left-0 w-[1352px]", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-[1352px] w-px" data-name="line_chart" />
      </div>
    </div>
  );
}

function ChartLayoutBackgroundImage() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white h-[748px] left-0 rounded-[6px] top-0 w-[1368px]" data-name="chart_bg" />
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
      <BackgroundImage5 additionalClassNames="top-[47px]" />
      <BackgroundImage5 additionalClassNames="top-[12px]" />
      <BackgroundImage5 additionalClassNames="top-[82px]" />
      <BackgroundImage5 additionalClassNames="top-[117px]" />
      <BackgroundImage5 additionalClassNames="top-[187px]" />
      <BackgroundImage5 additionalClassNames="top-[222px]" />
      <BackgroundImage5 additionalClassNames="top-[292px]" />
      <BackgroundImage5 additionalClassNames="top-[327px]" />
      <BackgroundImage5 additionalClassNames="top-[397px]" />
      <BackgroundImage5 additionalClassNames="top-[432px]" />
      <BackgroundImage5 additionalClassNames="top-[502px]" />
      <BackgroundImage5 additionalClassNames="top-[537px]" />
      <BackgroundImage5 additionalClassNames="top-[607px]" />
      <BackgroundImage5 additionalClassNames="top-[642px]" />
      <BackgroundImage5 additionalClassNames="top-[152px]" />
      <BackgroundImage5 additionalClassNames="top-[257px]" />
      <BackgroundImage5 additionalClassNames="top-[362px]" />
      <BackgroundImage5 additionalClassNames="top-[467px]" />
      <BackgroundImage5 additionalClassNames="top-[572px]" />
      <BackgroundImage5 additionalClassNames="top-[677px]" />
      <BackgroundImage5 additionalClassNames="top-[712px]" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[209px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[407px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[605px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[869px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[1067px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[1265px] top-0 w-px" data-name="line_chart" />
    </div>
  );
}

function RighstSideBarBackgroundImage() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-white h-[772px] left-[1303px] rounded-br-[6px] rounded-tr-[6px] top-0 w-[65px]" data-name="right_side_bar_bg" />
        <div className="absolute bg-[#dcf5f7] h-[383px] left-[1304px] opacity-50 top-[248px] w-[64px]" data-name="bg" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[75px] whitespace-nowrap">{"12100.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[40px] whitespace-nowrap">{"12200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[145px] whitespace-nowrap">{"11900.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[110px] whitespace-nowrap">{"12000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[215px] whitespace-nowrap">{"11700.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[180px] whitespace-nowrap">{"11800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[285px] whitespace-nowrap">{"11500.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[250px] whitespace-nowrap">{"11600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[355px] whitespace-nowrap">{"11300.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[320px] whitespace-nowrap">{"11400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[460px] whitespace-nowrap">{"11000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[425px] whitespace-nowrap">{"11100.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[390px] whitespace-nowrap">{"11200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[530px] whitespace-nowrap">{"10800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[495px] whitespace-nowrap">{"10900.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[600px] whitespace-nowrap">{"10600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[565px] whitespace-nowrap">{"10700.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[635px] whitespace-nowrap">{"10500.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[705px] whitespace-nowrap">{"10300.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[670px] whitespace-nowrap">{"10400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[5px] whitespace-nowrap">{"12300.00"}</p>
        <div className="absolute bg-[#efeff4] h-[772px] left-[1303px] top-0 w-px" data-name="border_chart" />
        <BackgroundImage4 />
        <div className="absolute contents left-[1304px] top-[239px]">
          <div className="absolute bg-[#00b1c7] h-[19px] left-[1304px] top-[239px] w-[64px]" data-name="card_bg" />
          <div className="absolute bg-white h-px left-[1304px] top-[248px] w-[4px]" data-name="indicator_line" />
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[241px] whitespace-nowrap">{"11650.00"}</p>
        </div>
        <div className="absolute contents left-[1304px] top-[621px]">
          <div className="absolute bg-[#00b1c7] h-[19px] left-[1304px] top-[621px] w-[64px]" data-name="card_bg" />
          <div className="absolute bg-white h-px left-[1304px] top-[630px] w-[4px]" data-name="indicator_line" />
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[623px] whitespace-nowrap">{"10530.00"}</p>
        </div>
      </div>
      <PriceActualBackgroundImageAndText text="11338.45" />
      <CurrencyBackgroundImageAndText text="USD" />
    </div>
  );
}
type CurrencyBackgroundImageAndTextProps = {
  text: string;
};

function CurrencyBackgroundImageAndText({ text }: CurrencyBackgroundImageAndTextProps) {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[1319px] px-[6px] py-[4px] rounded-[4px] top-[8px]">
      <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PriceActualBackgroundImageAndTextProps = {
  text: string;
};

function PriceActualBackgroundImageAndText({ text }: PriceActualBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[1304px] top-[342px]">
      <div className="absolute bg-[#09977e] h-[19px] left-[1304px] top-[342px] w-[64px]" data-name="card_bg" />
      <div className="absolute bg-white h-px left-[1304px] top-[351px] w-[4px]" data-name="indicator_line" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[344px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function BackgroundImage4() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex h-px items-center justify-center left-0 top-[739px] w-[1368px]">
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-[1368px] w-px" data-name="border_chart" />
      </div>
    </div>
  );
}
type TimeLineBackgroundImageProps = {
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

function TimeLineBackgroundImage({ text, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19 }: TimeLineBackgroundImageProps) {
  return (
    <div className="absolute contents left-0 top-[739px]">
      <div className="absolute bg-white h-[33px] left-0 rounded-bl-[6px] rounded-br-[6px] top-[739px] w-[1368px]" data-name="timeline_bg" />
      <div className="absolute bg-[#dcf5f7] h-[32px] left-[374px] opacity-50 top-[740px] w-[826px]" data-name="bg" />
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
      <div className="absolute contents left-[342px] top-[740px]">
        <div className="absolute bg-[#00b1c7] h-[19px] left-[342px] top-[740px] w-[65px]" data-name="card_bg" />
        <div className="absolute bg-[#00b1c7] h-[19px] left-[1170px] top-[740px] w-[58px]" data-name="card_bg" />
        <BackgroundImage3 additionalClassNames="left-[374px]" />
        <BackgroundImage3 additionalClassNames="left-[1199px]" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[349px] not-italic text-[12px] text-white top-[742px] whitespace-nowrap">{"10 Sep, 20"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1177px] not-italic text-[12px] text-white top-[742px] whitespace-nowrap">{"9 Oct, 20"}</p>
      </div>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ additionalClassNames = "" }: BackgroundImage3Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-[4px] items-center justify-center top-[740px] w-[0.5px]", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-white h-[0.5px] w-[4px]" data-name="indicator" />
      </div>
    </div>
  );
}
type FooterBarBackgroundImageAndTextProps = {
  text: string;
};

function FooterBarBackgroundImageAndText({ text }: FooterBarBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[60px] top-[848px]">
      <div className="absolute bg-white h-[40px] left-[60px] rounded-[6px] top-[848px] w-[1368px]" data-name="bg" />
      <div className="absolute contents leading-[normal] left-[calc(94.44%-46px)] not-italic text-[12px] top-[861px] whitespace-nowrap">
        <p className="-translate-x-full absolute font-['Source_Sans_Pro:Regular',sans-serif] left-[calc(94.44%-36px)] text-[#1f1f1f] text-right top-[861px]">{"%"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] left-[calc(94.44%-14px)] text-[#1f1f1f] top-[861px]">{"log"}</p>
        <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] left-[calc(100%-56px)] text-[#00b1c7] top-[861px]">{"auto"}</p>
      </div>
      <div className="absolute flex h-[24px] items-center justify-center left-[calc(88.89%+13px)] top-[856px] w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#f0f0f9] h-px rounded-[6px] w-[24px]" data-name="divider" />
        </div>
      </div>
      <p className="-translate-x-full absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(83.33%+73px)] not-italic text-[#1f1f1f] text-[12px] text-right top-[861px] whitespace-nowrap">{text}</p>
      <div className="absolute content-stretch flex gap-[16px] items-center left-[69px] top-[855px]">
        <TimeframeItemBackgroundImageAndText text="1D" />
        <TimeframeItemBackgroundImageAndText text="5D" />
        <TimeframeItemBackgroundImageAndText text="1M" />
        <TimeframeItemBackgroundImageAndText text="3M" />
        <div className="bg-[#f0f0f9] content-stretch flex items-center px-[8px] py-[6px] relative rounded-[6px] shrink-0">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-right whitespace-nowrap">{"6M"}</p>
        </div>
        <TimeframeItemBackgroundImageAndText text="YTD" />
        <TimeframeItemBackgroundImageAndText text="1Y" additionalClassNames="bg-white" />
        <TimeframeItemBackgroundImageAndText text="5Y" />
        <TimeframeItemBackgroundImageAndText text="All" />
      </div>
    </div>
  );
}
type TimeframeItemBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TimeframeItemBackgroundImageAndText({ text, additionalClassNames = "" }: TimeframeItemBackgroundImageAndTextProps) {
  return (
    <div className={clsx("content-stretch flex items-center px-[8px] py-[6px] relative rounded-[6px] shrink-0", additionalClassNames)}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8e8e93] text-[12px] text-right whitespace-nowrap">{text}</p>
    </div>
  );
}

function TabsBackgroundImage() {
  return (
    <div className="absolute contents left-[15px] top-[56px]">
      <div className="absolute contents left-[15px] top-[56px]">
        <div className="absolute bg-[#efeff4] h-px left-[15px] rounded-[6px] top-[87px] w-[320px]" data-name="divider" />
        <div className="absolute bg-[#00b1c7] h-px left-[15px] rounded-[6px] top-[87px] w-[31px]" data-name="divider" />
        <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#00b1c7] text-[14px] top-[56px] whitespace-nowrap">{"Style"}</p>
      </div>
      <div className="absolute contents left-[calc(16.67%+11.67px)] top-[56px]">
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%+11.67px)] not-italic text-[#1f1f1f] text-[14px] top-[56px] whitespace-nowrap">{"Coordinates"}</p>
      </div>
    </div>
  );
}
type LinesBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinesBackgroundImageAndText({ text, additionalClassNames = "" }: LinesBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[15px] top-[108px]">
      <DropdownWidthStyleDefault className="absolute h-[32px] left-[calc(66.67%-2.33px)] top-[108px] w-[104px]" />
      <DropdownColorDefaultBackgroundImage additionalClassNames="left-[calc(50%+12px)] top-[108px]" />
      <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[115px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type LabelBackgroundImageProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function LabelBackgroundImage({ text, text1, additionalClassNames = "" }: LabelBackgroundImageProps) {
  return (
    <div className="absolute contents left-[15px] top-[160px]">
      <DropdownColorDefaultBackgroundImage additionalClassNames="left-[calc(50%+12px)] top-[160px]" />
      <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[167px] whitespace-nowrap">{text}</p>
      <div className="absolute h-[32px] left-[calc(66.67%-2.33px)] top-[160px] w-[104px]" data-name="dropdown/font_size/default">
        <div className="absolute flex h-[32px] items-center justify-center left-0 right-0 top-0">
          <BackgroundImage2 additionalClassNames="h-[62px] w-[32px]" />
        </div>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(50%-15px)] not-italic text-[#1f1f1f] text-[14px] top-[calc(50%-10px)] whitespace-nowrap">{text1}</p>
        <IconsSmallChevronDownBackgroundImage />
      </div>
    </div>
  );
}
type DropdownColorDefaultBackgroundImage1Props = {
  additionalClassNames?: string;
};

function DropdownColorDefaultBackgroundImage1({ additionalClassNames = "" }: DropdownColorDefaultBackgroundImage1Props) {
  return (
    <div className="absolute left-[calc(50%+12px)] size-[32px] top-[285px]">
      <div className="absolute flex inset-0 items-center justify-center">
        <BackgroundImage2 additionalClassNames="size-[32px]" />
      </div>
      <div className="absolute bg-size-[auto_auto,97.00000286102295px_97.00000286102295px] bg-top-left inset-[12.5%] rounded-[4px]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 177, 199, 0.05) 0%, rgba(0, 177, 199, 0.05) 100%), url('${imgColor}')` }} />
    </div>
  );
}
type CheckboxItemUncheckedBackgroundImageAndTextProps = {
  text: string;
};

function CheckboxItemUncheckedBackgroundImageAndText({ text }: CheckboxItemUncheckedBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[15px] top-[289px]">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[291px] whitespace-nowrap">{text}</p>
      <CheckboxLChecked className="absolute left-[15px] size-[24px] top-[289px]" />
    </div>
  );
}
type DropdownColorDefaultBackgroundImageProps = {
  additionalClassNames?: string;
};

function DropdownColorDefaultBackgroundImage({ additionalClassNames = "" }: DropdownColorDefaultBackgroundImageProps) {
  return (
    <div className={clsx("absolute size-[32px]", additionalClassNames)}>
      <div className="absolute flex inset-0 items-center justify-center">
        <BackgroundImage2 additionalClassNames="size-[32px]" />
      </div>
      <div className="absolute bg-[#00b1c7] inset-[12.5%] rounded-[2px]" data-name="color" />
    </div>
  );
}
type BorderBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BorderBackgroundImageAndText({ text, additionalClassNames = "" }: BorderBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[15px] top-[233px]">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[239px] whitespace-nowrap">{text}</p>
      <CheckboxLChecked className="absolute left-[15px] size-[24px] top-[237px]" />
      <DropdownColorDefaultBackgroundImage additionalClassNames="left-[calc(50%+12px)] top-[233px]" />
      <DropdownWidthStyleDefault className="absolute h-[32px] left-[calc(66.67%-2.33px)] top-[233px] w-[104px]" />
    </div>
  );
}

function ModalHeaderMBackgroundImage() {
  return (
    <div className="absolute h-[41px] left-0 top-0 w-[350px]">
      <div className="absolute bg-[#f8f8ff] h-[40px] left-0 right-0 rounded-tl-[6px] rounded-tr-[6px] top-0" data-name="bg" />
      <div className="absolute overflow-clip right-[9px] size-[24px] top-[8px]" data-name="icons/close">
        <div className="absolute inset-[29.17%]" data-name="close">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
              <path d={svgPaths.p37f7c400} stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[11px] w-[289px]">{`Date & Price Range`}</p>
    </div>
  );
}
type ButtonTextDefaultBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonTextDefaultBackgroundImageAndText({ text, additionalClassNames = "" }: ButtonTextDefaultBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[18px] left-[15px] w-[83px]", additionalClassNames)}>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-0 leading-[normal] not-italic text-[#8e8e93] text-[14px] text-center whitespace-nowrap">{text}</p>
    </div>
  );
}
type InputSFilledBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function InputSFilledBackgroundImageAndText({ text, additionalClassNames = "" }: InputSFilledBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[32px] w-[91px]", additionalClassNames)}>
      <BackgroundImage1 />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[12px] not-italic text-[#1f1f1f] text-[14px] top-[6px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <div className={clsx("-rotate-90 flex-none", additionalClassNames)}>
      <div className="bg-white border border-[#efeff4] border-solid rounded-[4px] size-full" data-name="box" />
    </div>
  );
}

function BackgroundImage1() {
  return (
    <div className="absolute flex h-[32px] items-center justify-center left-0 right-0 top-0">
      <BackgroundImage2 additionalClassNames="h-[91px] w-[32px]" />
    </div>
  );
}
type UpperBarDefaultBackgroundImage1Props = {
  additionalClassNames?: string;
};

function UpperBarDefaultBackgroundImage1({ additionalClassNames = "" }: UpperBarDefaultBackgroundImage1Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="-rotate-90 flex-none h-px w-[24px]">
        <div className="bg-[#efeff4] rounded-[6px] size-full" data-name="divider" />
      </div>
    </div>
  );
}

function UpperBarDefaultBackgroundImage() {
  return (
    <BackgroundImage11 additionalClassNames="h-[24px]">
      <div className="bg-[#efeff4] h-px rounded-[6px] w-[24px]" data-name="divider" />
    </BackgroundImage11>
  );
}

function VectorBackgroundImage() {
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

function IconsSmallChevronDownBackgroundImage() {
  return (
    <div className="absolute overflow-clip right-[2px] size-[24px] top-[4px]">
      <VectorBackgroundImage />
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute inset-[-0.5px_-2.08%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
        <path d="M0.5 0.5H24.5" id="Vector 48" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function MenuItemWidthStyleSolid({ className }: { className?: string }) {
  return (
    <div className={className || "h-[38px] relative w-[62px]"} data-name="menu_item/width_style/solid_1">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-7px)] top-[calc(50%-0.5px)] w-[24px]">
        <BackgroundImage />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+17px)] overflow-clip size-[24px] top-1/2" data-name="icons/small_chevron/down">
        <VectorBackgroundImage />
      </div>
    </div>
  );
}

function DropdownWidthStyleDefault({ className }: { className?: string }) {
  return (
    <div className={className || "h-[32px] relative w-[62px]"} data-name="dropdown/width_style/default">
      <div className="absolute bg-white border border-[#efeff4] border-solid h-[32px] left-0 right-0 rounded-[4px] top-0" data-name="box" />
      <IconsSmallChevronDownBackgroundImage />
      <div className="absolute h-0 left-[12px] right-[26px] top-[15.5px]">
        <BackgroundImage />
      </div>
    </div>
  );
}

function IconsRemoveSmall({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/remove_small">
      <BackgroundImage10>
        <g id="bin">
          <path d="M0.5 3.70001H2.05556H14.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2649000} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.94446 7.70001V12.5" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.05566 7.70001V12.5" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </BackgroundImage10>
    </div>
  );
}

function MenuItemIconDefault({ className }: { className?: string }) {
  return (
    <div className={className || "h-[38px] relative w-[66px]"} data-name="menu_item/icon/default">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="absolute inset-[18.42%_3.03%_18.42%_60.61%] overflow-clip" data-name="icons/small_chevron/down">
        <VectorBackgroundImage />
      </div>
      <div className="absolute inset-[18.42%_39.39%_18.42%_24.24%] overflow-clip" data-name="icons/layers">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0002 19">
              <g id="icon">
                <path d={svgPaths.p30a1f900} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p3e0a8300} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p117f6920} id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon({ className }: { className?: string }) {
  return (
    <div className={className || "h-[38px] relative w-[56px]"} data-name="icon">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="absolute inset-[18.42%_28.57%] overflow-clip" data-name="icons/settings">
        <div className="absolute inset-[12.5%]" data-name="icon">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <g id="icon">
                <path d={svgPaths.p69c8570} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p218d9280} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconsBackgroundColor({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/background_color">
      <div className="absolute inset-[12.5%]" data-name="bg_color">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9999 18">
          <g id="bg_color">
            <path d={svgPaths.p22298d80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            <g id="Vector_2">
              <path d={svgPaths.p1bf2a580} fill="var(--fill-0, #1F1F1F)" />
              <path d={svgPaths.p37527e00} stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function MenuItemLineColor({ className }: { className?: string }) {
  return (
    <div className={className || "h-[38px] relative w-[48px]"} data-name="menu_item/line_color">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="absolute bg-[#3e3e3e] bottom-1/2 left-1/4 right-1/4 rounded-[6px] top-[47.37%]" data-name="thickness" />
      <div className="absolute bg-[#222268] bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" />
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

function UpperBarDefault({ className }: { className?: string }) {
  return (
    <div className={className || "h-[40px] relative w-[1368px]"} data-name="upper_bar/default">
      <div className="absolute bg-white inset-0 rounded-[6px]" data-name="bg" />
      <div className="absolute content-stretch flex inset-[0_10.01%_0_62.06%] items-center" data-name="instruments">
        <UpperBarDefaultBackgroundImage />
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="undo_redo">
          <div className="bg-white col-1 h-[40px] ml-0 mt-0 row-1 w-[92px]" data-name="bg" />
          <div className="col-1 ml-[52px] mt-[8px] overflow-clip relative row-1 size-[24px]" data-name="icons/arrow_right">
            <VectorBackgroundImage2>
              <path d={svgPaths.p3325e520} id="Vector" stroke="var(--stroke-0, #BABAC1)" strokeLinecap="round" strokeLinejoin="round" />
            </VectorBackgroundImage2>
          </div>
          <div className="col-1 ml-[16px] mt-[8px] overflow-clip relative row-1 size-[24px]" data-name="icons/arrow_left">
            <VectorBackgroundImage2>
              <path d={svgPaths.p2c236e10} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </VectorBackgroundImage2>
          </div>
        </div>
        <UpperBarDefaultBackgroundImage />
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="save">
          <div className="bg-white col-1 h-[40px] ml-0 mt-0 row-1 w-[116px]" data-name="bg" />
          <p className="col-1 font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] ml-[47px] mt-[11px] not-italic relative row-1 text-[#1f1f1f] text-[14px] text-right whitespace-nowrap">Save</p>
          <div className="col-1 ml-[76px] mt-[8px] overflow-clip relative row-1 size-[24px]" data-name="icons/small_chevron/down">
            <VectorBackgroundImage />
          </div>
          <div className="col-1 ml-[16px] mt-[8px] relative row-1 size-[24px]" data-name="icons/save">
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
        </div>
        <UpperBarDefaultBackgroundImage />
        <div className="h-[40px] relative shrink-0 w-[56px]" data-name="button/menu/default">
          <div className="absolute bg-white inset-0" data-name="bg_instrument" />
          <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/fullscreen">
            <div className="absolute inset-[16.67%]" data-name="Vector">
              <BackgroundImage12 additionalClassNames="inset-[-3.13%]">
                <path d={svgPaths.p37c74100} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage12>
            </div>
          </div>
        </div>
        <UpperBarDefaultBackgroundImage />
        <div className="h-[40px] relative shrink-0 w-[56px]" data-name="button/menu/default">
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
        <UpperBarDefaultBackgroundImage />
        <div className="h-[40px] relative shrink-0 w-[56px]" data-name="button/menu/default">
          <div className="absolute bg-white inset-0" data-name="bg_instrument" />
          <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/dark_mode">
            <div className="absolute inset-[16.67%]" data-name="Vector">
              <BackgroundImage12 additionalClassNames="inset-[-3.13%_-3.13%_-3.12%_-3.13%]">
                <path d={svgPaths.pb3a6d80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage12>
            </div>
          </div>
        </div>
        <UpperBarDefaultBackgroundImage />
      </div>
      <div className="absolute inset-[15%_0.44%_15%_95.03%]" data-name="button/tertiary/default">
        <div className="absolute bg-[#dcf5f7] h-[28px] left-0 opacity-80 right-0 rounded-[4px] top-0" data-name="bg" />
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[#00b1c7] text-[14px] text-center top-[calc(50%-9px)] whitespace-nowrap">Sign Up</p>
      </div>
      <div className="absolute contents inset-[27.5%_6.21%_27.5%_91.15%]" data-name="button">
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_6.21%_27.5%_91.15%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] whitespace-nowrap">Log In</p>
      </div>
      <div className="absolute contents inset-[0_66.74%_0_1.46%]" data-name="left_side">
        <UpperBarDefaultBackgroundImage1 additionalClassNames="inset-[20%_66.74%_20%_33.19%]" />
        <UpperBarDefaultBackgroundImage1 additionalClassNames="inset-[20%_83.63%_20%_16.3%]" />
        <UpperBarDefaultBackgroundImage1 additionalClassNames="inset-[20%_90.57%_20%_9.36%]" />
        <UpperBarDefaultBackgroundImage1 additionalClassNames="inset-[20%_79.9%_20%_20.03%]" />
        <UpperBarDefaultBackgroundImage1 additionalClassNames="inset-[20%_70.91%_20%_29.02%]" />
        <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[27.5%_85.16%_27.5%_10.89%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] uppercase whitespace-nowrap">BTC/USD</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_81.43%_27.5%_17.84%] leading-[normal] not-italic text-[#1f1f1f] text-[14px]">D</p>
        <div className="absolute contents inset-[20%_72.44%_20%_21.05%]" data-name="Indicators">
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_72.44%_27.5%_23.25%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] whitespace-nowrap">Indicators</p>
          <div className="absolute inset-[20%_77.19%_20%_21.05%] overflow-clip" data-name="icons/indicators">
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
        </div>
        <div className="absolute inset-[0_66.81%_0_29.09%]" data-name="candles">
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
        <div className="absolute bottom-1/4 contents left-[1.46%] right-[92.11%] top-1/4" data-name="market">
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_92.11%_27.5%_3.51%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] uppercase whitespace-nowrap">Bitpanda</p>
          <div className="absolute bottom-1/4 left-[1.46%] right-[97.08%] top-1/4" data-name="logo/bitpanda">
            <div className="absolute left-0 size-[20px] top-0" data-name="photo">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <circle cx="10" cy="10" fill="var(--fill-0, #076CDB)" id="photo" r="10" />
              </svg>
            </div>
            <div className="absolute contents left-0 top-0" data-name="Mask Group">
              <div className="absolute bg-white left-[-3.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.5px_3.2px] mask-size-[20px_20px] size-[26px] top-[-3.2px]" style={{ maskImage: `url('${imgRectangle317}')` }} />
            </div>
          </div>
        </div>
      </div>
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

function ButtonRoundDefault({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="button/round/default">
      <div className="absolute inset-[-80%_-102.5%_-120%_-97.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <g filter="url(#filter0_d_18_31623)" id="round_bg">
            <circle cx="59" cy="52" fill="var(--fill-0, white)" fillOpacity="0.9" r="20" />
            <circle cx="59" cy="52" r="19.5" stroke="var(--stroke-0, #F8F8FF)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="120" id="filter0_d_18_31623" width="120" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="1" dy="8" />
              <feGaussianBlur stdDeviation="20" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_18_31623" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_18_31623" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[20%] overflow-clip" data-name="icons/chevron_large/right">
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

function CheckboxLChecked({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="checkbox/L/checked">
      <div className="absolute bg-[rgba(0,177,199,0.1)] border border-[rgba(0,177,199,0.05)] border-solid inset-0 rounded-[2px]" data-name="box" />
      <div className="absolute inset-0 overflow-clip" data-name="icons/check">
        <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
              <path d="M13 1L4.75 9L1 5.36364" id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonSPrimaryDefault({ className }: { className?: string }) {
  return (
    <div className={className || "h-[32px] relative w-[80px]"} data-name="button/S/primary/default">
      <div className="absolute bg-[#00b1c7] inset-0 rounded-[2px]" data-name="bg" />
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[calc(50%-0.5px)] not-italic text-[14px] text-center text-white top-[calc(50%-9px)] whitespace-nowrap">Save</p>
    </div>
  );
}

function ButtonSecondarySDefault({ className }: { className?: string }) {
  return (
    <div className={className || "h-[32px] relative w-[80px]"} data-name="button/secondary/s/default">
      <div className="absolute bg-white border border-[#babac1] border-solid h-[32px] left-0 right-0 rounded-[2px] top-0" data-name="bg" />
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[#8e8e93] text-[14px] text-center top-[calc(50%-9px)] whitespace-nowrap">Cancel</p>
    </div>
  );
}

export default function DatePriceRange() {
  return (
    <div className="bg-[#efeff4] relative size-full" data-name="Date&Price range">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[103px] text-black top-[96px] uppercase whitespace-nowrap">{`DATE & price range`}</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[70px] text-black top-[1064px] whitespace-nowrap">Edit mode</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[1656px] not-italic text-[70px] text-black top-[1064px] whitespace-nowrap">No menu</p>
      <div className="absolute border border-[#efeff4] border-solid h-[271px] left-[1248px] overflow-clip rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[337px] w-[350px]" data-name="tool_menu/date&price_range/coordinates">
        <div className="absolute contents left-[-1px] top-[-1px]" data-name="tool_menu/date&price_range/coordinates">
          <div className="absolute bg-white h-[271px] left-0 rounded-[6px] top-0 w-[350px]" data-name="bg_modal" />
          <ButtonTextDefaultBackgroundImageAndText text="Reset Settings" additionalClassNames="top-[231px]" />
          <ButtonSecondarySDefault className="absolute h-[32px] left-[calc(33.33%+43.33px)] top-[224px] w-[80px]" />
          <ButtonSPrimaryDefault className="absolute h-[32px] left-[calc(66.67%+21.67px)] top-[224px] w-[80px]" />
          <div className="absolute contents left-[15px] top-[108px]" data-name="price,bar 1">
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[114px] whitespace-nowrap"># 1 (Price, Bar)</p>
            <div className="absolute h-[32px] left-[calc(33.33%+13.33px)] top-[108px] w-[91px]" data-name="input/S/filled">
              <BackgroundImage1 />
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[12px] not-italic text-[#1f1f1f] text-[14px] top-[6px] whitespace-nowrap">116.925</p>
            </div>
            <InputSFilledBackgroundImageAndText text="249" additionalClassNames="left-[calc(66.67%+10.67px)] top-[108px]" />
          </div>
          <div className="absolute contents left-[15px] top-[160px]" data-name="price, bar 2">
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[166px] whitespace-nowrap"># 2 (Price, Bar)</p>
            <InputSFilledBackgroundImageAndText text="294.66" additionalClassNames="left-[calc(33.33%+13.33px)] top-[160px]" />
            <InputSFilledBackgroundImageAndText text="303" additionalClassNames="left-[calc(66.67%+10.67px)] top-[160px]" />
          </div>
          <div className="absolute contents left-[15px] top-[56px]" data-name="tabs">
            <div className="absolute bg-[#efeff4] h-px left-[15px] rounded-[6px] top-[87px] w-[320px]" data-name="divider" />
            <div className="absolute contents left-[15px] top-[56px]" data-name="style">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[56px] whitespace-nowrap">Style</p>
            </div>
            <div className="absolute contents left-[calc(16.67%+11.67px)] top-[57px]" data-name="coordinates">
              <div className="absolute bg-[#00b1c7] h-px left-[calc(16.67%+11.67px)] rounded-[6px] top-[87px] w-[73px]" data-name="underline" />
              <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[calc(16.67%+11.67px)] not-italic text-[#00b1c7] text-[14px] top-[57px] whitespace-nowrap">Coordinates</p>
            </div>
          </div>
          <ModalHeaderMBackgroundImage />
        </div>
      </div>
      <div className="absolute border border-[#efeff4] border-solid h-[448px] left-[872px] overflow-clip rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[338px] w-[350px]" data-name="tool_menu/date&price_range/style">
        <div className="absolute contents left-[-1px] top-[-1px]" data-name="tool_menu/date&price_range/style">
          <div className="absolute bg-white h-[448px] left-0 rounded-[6px] top-0 w-[350px]" data-name="bg_modal" />
          <ButtonTextDefaultBackgroundImageAndText text="Reset Settings" additionalClassNames="top-[408px]" />
          <ButtonSecondarySDefault className="absolute h-[32px] left-[calc(33.33%+43.33px)] top-[401px] w-[80px]" />
          <ButtonSPrimaryDefault className="absolute h-[32px] left-[calc(66.67%+21.67px)] top-[401px] w-[80px]" />
          <div className="absolute contents left-[15px] top-[233px]" data-name="checkboxes">
            <BorderBackgroundImageAndText text="Border" />
            <div className="absolute contents left-[15px] top-[285px]" data-name="background">
              <div className="absolute contents left-[15px] top-[289px]" data-name="chackboxes">
                <CheckboxItemUncheckedBackgroundImageAndText text="Background" />
              </div>
              <DropdownColorDefaultBackgroundImage1 />
            </div>
            <div className="absolute contents left-[15px] top-[337px]" data-name="label_background">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[343px] whitespace-nowrap">Label Background</p>
              <div className="absolute left-[15px] size-[24px] top-[341px]" data-name="checkbox/L/unchecked">
                <div className="absolute border border-[rgba(62,62,62,0.2)] border-solid inset-0 rounded-[2px]" data-name="checkbox/unchecked" />
              </div>
              <div className="absolute left-[calc(50%+12px)] size-[32px] top-[337px]" data-name="dropdown/color/disabled">
                <div className="absolute flex inset-0 items-center justify-center">
                  <BackgroundImage2 additionalClassNames="size-[32px]" />
                </div>
                <div className="absolute bg-size-[auto_auto,97.00000286102295px_97.00000286102295px] bg-top-left inset-[12.5%] rounded-[4px]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 177, 199, 0.15) 0%, rgba(0, 177, 199, 0.15) 100%), url('${imgColor}')` }} />
                <div className="absolute flex inset-0 items-center justify-center">
                  <div className="-rotate-90 flex-none size-[32px]">
                    <div className="bg-[#f8f8ff] opacity-85 rounded-[4px] size-full" data-name="screen" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[#efeff4] h-px left-[15px] rounded-[6px] top-[212px] w-[320px]" data-name="divider" />
          <LabelBackgroundImage text="Label" text1="14" />
          <LinesBackgroundImageAndText text="Lines" />
          <TabsBackgroundImage />
          <ModalHeaderMBackgroundImage />
        </div>
      </div>
      <div className="absolute border border-[#efeff4] border-solid h-[448px] left-[1441px] overflow-clip rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[2477px] w-[350px]" data-name="tool_menu/date&price_range/style">
        <div className="absolute contents left-[-1px] top-[-1px]" data-name="tool_menu/date&price_range/style">
          <div className="absolute bg-white h-[448px] left-0 rounded-[6px] top-0 w-[350px]" data-name="bg_modal" />
          <ButtonTextDefaultBackgroundImageAndText text="Reset Settings" additionalClassNames="top-[408px]" />
          <ButtonSecondarySDefault className="absolute h-[32px] left-[calc(33.33%+43.33px)] top-[401px] w-[80px]" />
          <ButtonSPrimaryDefault className="absolute h-[32px] left-[calc(66.67%+21.67px)] top-[401px] w-[80px]" />
          <div className="absolute contents left-[15px] top-[233px]" data-name="checkboxes">
            <BorderBackgroundImageAndText text="Border" />
            <div className="absolute contents left-[15px] top-[285px]" data-name="background">
              <div className="absolute contents left-[15px] top-[289px]" data-name="chackboxes">
                <CheckboxItemUncheckedBackgroundImageAndText text="Background" />
              </div>
              <DropdownColorDefaultBackgroundImage1 />
            </div>
            <div className="absolute contents left-[15px] top-[337px]" data-name="label_background">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[343px] whitespace-nowrap">Label Background</p>
              <CheckboxLChecked className="absolute left-[15px] size-[24px] top-[341px]" />
              <div className="absolute left-[calc(50%+12px)] size-[32px] top-[337px]" data-name="dropdown/color/default">
                <div className="absolute flex inset-0 items-center justify-center">
                  <BackgroundImage2 additionalClassNames="size-[32px]" />
                </div>
                <div className="absolute bg-size-[auto_auto,97.00000286102295px_97.00000286102295px] bg-top-left inset-[12.5%] rounded-[4px]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 177, 199, 0.15) 0%, rgba(0, 177, 199, 0.15) 100%), url('${imgColor}')` }} />
              </div>
            </div>
          </div>
          <div className="absolute bg-[#efeff4] h-px left-[15px] rounded-[6px] top-[212px] w-[320px]" data-name="divider" />
          <LabelBackgroundImage text="Label" text1="14" />
          <LinesBackgroundImageAndText text="Lines" />
          <TabsBackgroundImage />
          <ModalHeaderMBackgroundImage />
        </div>
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[127px] overflow-clip top-[1207px] w-[1440px]" data-name="Date&Price_range/edit_mode">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLineBackgroundImage text="12" text1="9" text2="5" text3="3" text4="Oct" text5="7" text6="28" text7="25" text8="23" text9="21" text10="18" text11="16" text12="14" text13="11" text14="9" text15="7" text16="5" text17="3" text18="Sep" text19="30" />
          <RighstSideBarBackgroundImage />
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <ChartLayoutBackgroundImage />
            <div className="absolute h-[740px] left-0 overflow-clip top-0 w-[1304px]" data-name="bars">
              <BarsBackgroundImage />
              <DatePriceRangeBackgroundImage />
              <div className="absolute contents left-[765px] top-[44px]" data-name="tool_menu_extended/fib_extension">
                <div className="absolute bg-white content-stretch flex items-center left-[765px] py-px rounded-[6px] top-[44px]">
                  <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                  <IconsDragBackgroundImage />
                  <BackgroundImage8 />
                  <MenuItemWidthStyleSolid className="h-[38px] relative shrink-0 w-[62px]" />
                  <BackgroundImage8 />
                  <MenuItemLineColor className="h-[38px] relative shrink-0 w-[48px]" />
                  <BackgroundImage8 />
                  <MenuItemBgColorBackgroundImage additionalClassNames="relative shrink-0" />
                  <BackgroundImage8 />
                  <Icon className="h-[38px] relative shrink-0 w-[56px]" />
                  <BackgroundImage8 />
                  <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
                  <BackgroundImage8 />
                  <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
                  <BackgroundImage8 />
                  <LockBackgroundImage />
                  <BackgroundImage8 />
                  <div className="h-[38px] relative shrink-0 w-[56px]" data-name="delete">
                    <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
                  </div>
                </div>
              </div>
            </div>
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
            <ButtonRoundDefault className="absolute left-[1245px] size-[40px] top-[681px]" />
          </div>
          <ExchangeDescriptionBackgroundImage />
        </div>
        <ToolsBarDefaultBackgroundImage />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[925px] overflow-clip top-[2964px] w-[1440px]" data-name="Date&Price_range/edit_mode">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLineBackgroundImage text="12" text1="9" text2="5" text3="3" text4="Oct" text5="7" text6="28" text7="25" text8="23" text9="21" text10="18" text11="16" text12="14" text13="11" text14="9" text15="7" text16="5" text17="3" text18="Sep" text19="30" />
          <RighstSideBarBackgroundImage />
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <ChartLayoutBackgroundImage />
            <div className="absolute h-[740px] left-0 overflow-clip top-0 w-[1304px]" data-name="bars">
              <BarsBackgroundImage />
              <DatePriceRangeBackgroundImage />
              <div className="absolute contents left-[765px] top-[44px]" data-name="tool_menu_extended/fib_extension">
                <div className="absolute bg-white content-stretch flex items-center left-[765px] py-px rounded-[6px] top-[44px]">
                  <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)]" />
                  <IconsDragBackgroundImage />
                  <BackgroundImage8 />
                  <MenuItemWidthStyleSolid className="h-[38px] relative shrink-0 w-[62px]" />
                  <BackgroundImage8 />
                  <MenuItemLineColor className="h-[38px] relative shrink-0 w-[48px]" />
                  <BackgroundImage8 />
                  <div className="h-[38px] relative shrink-0 w-[48px]" data-name="menu_item/bg_color">
                    <div className="absolute bg-white inset-0" data-name="bg" />
                    <div className="absolute bg-[rgba(0,177,199,0.1)] bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" />
                    <IconsBackgroundColor className="absolute bottom-[18.42%] left-1/4 right-1/4 top-[18.42%]" />
                  </div>
                  <BackgroundImage8 />
                  <Icon className="h-[38px] relative shrink-0 w-[56px]" />
                  <BackgroundImage8 />
                  <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
                  <BackgroundImage8 />
                  <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
                  <BackgroundImage8 />
                  <LockBackgroundImage />
                  <BackgroundImage8 />
                  <div className="h-[38px] relative shrink-0 w-[56px]" data-name="delete">
                    <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
                  </div>
                </div>
              </div>
            </div>
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
            <ButtonRoundDefault className="absolute left-[1245px] size-[40px] top-[681px]" />
          </div>
          <ExchangeDescriptionBackgroundImage />
        </div>
        <ToolsBarDefaultBackgroundImage />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[1661px] overflow-clip top-[1207px] w-[1440px]" data-name="Date&Price_range/default">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <div className="absolute contents left-0 top-[739px]" data-name="time_line">
            <div className="absolute bg-white h-[33px] left-0 rounded-bl-[6px] rounded-br-[6px] top-[739px] w-[1368px]" data-name="timeline_bg" />
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1265px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">12</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1200px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">9</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1068px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">5</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1001px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">3</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[935px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Oct</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1134px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">7</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[870px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">28</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[804px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">25</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[737px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">23</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[672px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">21</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[606px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">18</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[540px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">16</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[473px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">14</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[408px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">11</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[342px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">9</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[276px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">7</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[210px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">5</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[144px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">3</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[78px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Sep</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">30</p>
          </div>
          <div className="absolute contents left-0 top-0" data-name="righst_side_bar">
            <div className="absolute contents left-0 top-0" data-name="price_bar">
              <div className="absolute bg-white h-[772px] left-[1303px] rounded-br-[6px] rounded-tr-[6px] top-0 w-[65px]" data-name="right_side_bar_bg" />
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[75px] whitespace-nowrap">12100.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[40px] whitespace-nowrap">12200.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[145px] whitespace-nowrap">11900.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[110px] whitespace-nowrap">12000.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[215px] whitespace-nowrap">11700.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[180px] whitespace-nowrap">11800.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[285px] whitespace-nowrap">11500.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[250px] whitespace-nowrap">11600.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[355px] whitespace-nowrap">11300.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[320px] whitespace-nowrap">11400.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[460px] whitespace-nowrap">11000.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[425px] whitespace-nowrap">11100.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[390px] whitespace-nowrap">11200.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[530px] whitespace-nowrap">10800.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[495px] whitespace-nowrap">10900.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[600px] whitespace-nowrap">10600.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[565px] whitespace-nowrap">10700.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[635px] whitespace-nowrap">10500.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[705px] whitespace-nowrap">10300.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[670px] whitespace-nowrap">10400.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[5px] whitespace-nowrap">12300.00</p>
              <div className="absolute bg-[#efeff4] h-[772px] left-[1303px] top-0 w-px" data-name="border_chart" />
              <BackgroundImage4 />
            </div>
            <PriceActualBackgroundImageAndText text="11338.45" />
            <CurrencyBackgroundImageAndText text="USD" />
          </div>
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <ChartLayoutBackgroundImage />
            <div className="absolute h-[740px] left-0 overflow-clip top-0 w-[1304px]" data-name="bars">
              <BarsBackgroundImage />
              <DatePriceRangeBackgroundImage />
            </div>
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
            <ButtonRoundDefault className="absolute left-[1245px] size-[40px] top-[681px]" />
          </div>
          <ExchangeDescriptionBackgroundImage />
        </div>
        <ToolsBarDefaultBackgroundImage />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
      </div>
      <div className="absolute contents left-[2482px] top-[495px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Background Color" additionalClassNames="left-[2482px] top-[495px]" />
        <BackgroundImage9 additionalClassNames="inset-[12.39%_21.23%_87.44%_78.34%]" />
      </div>
      <div className="absolute contents left-[2362px] top-[495px]">
        <div className="absolute contents left-[2362px] top-[495px]" data-name="tooltip">
          <TooltipBackgroundImageAndText text="Line Color" additionalClassNames="left-[2362px] top-[495px]" />
          <BackgroundImage9 additionalClassNames="inset-[12.39%_25.53%_87.44%_74.04%]" />
        </div>
      </div>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[872px] not-italic text-[20px] text-black top-[287px] whitespace-nowrap">Extended settings</p>
      <div className="absolute h-[296px] left-[1419px] top-[623px] w-[103px]" data-name="tool_menu/font_size">
        <div className="absolute contents inset-0" data-name="menu_right_end">
          <div className="absolute bg-white border border-[#efeff4] border-solid inset-0 rounded-[4px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)]" data-name="bg" />
        </div>
        <div className="absolute inset-[2.7%_1.61%_87.84%_1.61%]" data-name="font_size">
          <div className="absolute bg-white h-[28px] left-0 right-0 top-0" data-name="bg" />
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-1/2 not-italic text-[#1f1f1f] text-[14px] text-center top-[calc(50%-10px)] whitespace-nowrap">10</p>
        </div>
        <BackgroundImageAndText text="11" additionalClassNames="absolute inset-[12.16%_1.61%_78.38%_1.61%]" />
        <BackgroundImageAndText text="12" additionalClassNames="absolute inset-[21.62%_1.61%_68.92%_1.61%]" />
        <div className="absolute inset-[31.08%_1.61%_59.46%_1.61%]" data-name="font_size">
          <div className="absolute bg-[#f8f8ff] h-[28px] left-0 right-0 top-0" data-name="bg" />
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-1/2 not-italic text-[#1f1f1f] text-[14px] text-center top-[calc(50%-10px)] whitespace-nowrap">14</p>
        </div>
        <DatePriceRangeFontSizeBackgroundImageAndText text="16" additionalClassNames="bottom-1/2 top-[40.54%]" />
        <DatePriceRangeFontSizeBackgroundImageAndText text="20" additionalClassNames="bottom-[40.54%] top-1/2" />
        <BackgroundImageAndText text="24" additionalClassNames="absolute inset-[59.46%_1.61%_31.08%_1.61%]" />
        <BackgroundImageAndText text="28" additionalClassNames="absolute inset-[68.92%_1.61%_21.62%_1.61%]" />
        <BackgroundImageAndText text="32" additionalClassNames="absolute inset-[78.38%_1.61%_12.16%_1.61%]" />
        <BackgroundImageAndText text="40" additionalClassNames="absolute inset-[87.84%_1.61%_2.7%_1.61%]" />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[20px] text-black top-[293px] whitespace-nowrap">Menus</p>
      <div className="absolute contents left-[124px] top-[388px]" data-name="tool_menu_extended/date_price_range">
        <div className="absolute bg-white content-stretch flex items-center left-[124px] py-px rounded-[6px] top-[388px]">
          <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)]" />
          <IconsDragBackgroundImage />
          <BackgroundImage8 />
          <MenuItemWidthStyleSolid className="h-[38px] relative shrink-0 w-[62px]" />
          <BackgroundImage8 />
          <MenuItemLineColorBackgroundImage />
          <BackgroundImage8 />
          <MenuItemBgColorBackgroundImage additionalClassNames="relative shrink-0" />
          <BackgroundImage8 />
          <Icon className="h-[38px] relative shrink-0 w-[56px]" />
          <BackgroundImage8 />
          <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
          <BackgroundImage8 />
          <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
          <BackgroundImage8 />
          <LockBackgroundImage />
          <BackgroundImage8 />
          <div className="h-[38px] relative shrink-0 w-[56px]" data-name="delete">
            <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
          </div>
        </div>
      </div>
      <MenuItemBgColorBackgroundImage additionalClassNames="absolute left-[2519px] top-[539px]" />
      <MenuItemLineColor className="absolute h-[38px] left-[2379px] top-[539px] w-[48px]" />
      <div className="absolute contents left-[124px] top-[339px]" data-name="tool_menu/date_price_range">
        <div className="absolute bg-white content-stretch flex items-center left-[124px] py-px rounded-[6px] top-[339px]">
          <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)]" />
          <IconsDragBackgroundImage />
          <BackgroundImage8 />
          <MenuItemWidthStyleSolid className="h-[38px] relative shrink-0 w-[62px]" />
          <BackgroundImage8 />
          <MenuItemLineColorBackgroundImage />
          <BackgroundImage8 />
          <div className="h-[38px] relative shrink-0 w-[48px]" data-name="menu_item/bg_color">
            <div className="absolute bg-size-[auto_auto,40.00000059604645px_40.00000059604645px] bg-top-left bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 177, 199, 0.05) 0%, rgba(0, 177, 199, 0.05) 100%), url('${imgColor}')` }} />
            <IconsBackgroundColor className="absolute bottom-[18.42%] left-1/4 right-1/4 top-[18.42%]" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[464px] right-[2652px] top-[459px]" data-name="tool_menu/layers">
        <div className="absolute bg-white border border-[#efeff4] border-solid h-[150px] left-[464px] right-[2652px] rounded-[4px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)] top-[459px]" data-name="bg" />
        <ListItem32SBackgroundImageAndText text="Bring to Front" additionalClassNames="left-[465px] right-[2653px] top-[467px]" />
        <div className="absolute h-[32px] left-[465px] right-[2653px] top-[501px]" data-name="list_item_32/S">
          <div className="absolute bg-[#f8f8ff] h-[32px] left-0 right-0 top-0" data-name="bg" />
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[12px] text-black top-[8px] whitespace-nowrap">Send to Back</p>
        </div>
        <ListItem32SBackgroundImageAndText text="Bring Forward" additionalClassNames="left-[465px] right-[2653px] top-[535px]" />
        <ListItem32SBackgroundImageAndText text="Send Backwards" additionalClassNames="left-[465px] right-[2653px] top-[569px]" />
      </div>
      <div className="absolute contents left-[594px] top-[459px]" data-name="tool_menu/copy">
        <div className="absolute bg-white border border-[#efeff4] border-solid h-[80px] left-[594px] right-[2576px] rounded-[4px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)] top-[459px]" data-name="bg" />
        <ListItem32SBackgroundImageAndText text="Copy" additionalClassNames="left-[595px] top-[467px] w-[64px]" />
        <ListItem32SBackgroundImageAndText text="Clone" additionalClassNames="left-[595px] top-[499px] w-[64px]" />
      </div>
      <div className="absolute h-[252px] left-[124px] top-[459px] w-[164px]" data-name="tool_menu/color">
        <div className="absolute bg-white border border-[#f0f0f9] border-solid inset-0 rounded-[4px] shadow-[1px_8px_40px_0px_rgba(49,49,49,0.16)]" data-name="bg" />
        <div className="absolute bg-[#f2c847] inset-[17.46%_30.49%_72.22%_53.66%] rounded-[2px]" data-name="color" />
        <div className="absolute contents inset-[17.46%_7.32%_4.76%_7.32%]" data-name="colors">
          <div className="absolute bg-white border border-[#f0f0f9] border-solid inset-[17.46%_76.83%_72.22%_7.32%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#fdf368] inset-[17.46%_53.66%_72.22%_30.49%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#de5537] inset-[17.46%_7.32%_72.22%_76.83%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#e6e6e6] inset-[30.95%_76.83%_58.73%_7.32%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#d4e560] inset-[30.95%_53.66%_58.73%_30.49%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#9fce62] inset-[30.95%_30.49%_58.73%_53.66%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#c72c63] inset-[30.95%_7.32%_58.73%_76.83%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#808080] inset-[44.44%_76.83%_45.24%_7.32%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#00b1c7] inset-[44.44%_53.66%_45.24%_30.49%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#4ea48b] inset-[44.44%_30.49%_45.24%_53.66%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#8728a6] inset-[44.44%_7.32%_45.24%_76.83%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#1a1a1a] inset-[57.94%_76.83%_31.75%_7.32%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#519be9] inset-[57.94%_53.66%_31.75%_30.49%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#424eac] inset-[57.94%_30.49%_31.75%_53.66%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#5d34ad] inset-[57.94%_7.32%_31.75%_76.83%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#a6a6a6] inset-[71.43%_76.83%_18.25%_7.32%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#04073d] inset-[71.43%_53.66%_18.25%_30.49%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#5e9f55] inset-[71.43%_30.49%_18.25%_53.66%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#a08fdd] inset-[71.43%_7.32%_18.25%_76.83%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#5e5e5e] inset-[84.92%_76.83%_4.76%_7.32%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#e92323] inset-[84.92%_53.66%_4.76%_30.49%] rounded-[2px]" data-name="color" />
          <div className="absolute bg-[#f88922] inset-[84.92%_30.49%_4.76%_53.66%] rounded-[2px]" data-name="color" />
          <div className="absolute contents inset-[84.92%_7.32%_4.76%_76.83%]" data-name="add_color">
            <div className="absolute bg-white inset-[84.92%_7.32%_4.76%_76.83%] rounded-[2px]" data-name="color" />
            <div className="absolute inset-[85.32%_7.93%_5.16%_77.44%]" data-name="icons/plus">
              <div className="absolute inset-[29.17%]" data-name="Union">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                  <path d={svgPaths.p3fc86600} fill="var(--fill-0, #1F1F1F)" id="Union" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute border border-solid border-white inset-[18.25%_31.71%_73.02%_54.88%] rounded-[2px]" data-name="selected" />
        </div>
        <div className="absolute contents inset-[5.95%_7.32%_88.49%_7.32%]" data-name="opacity_bar">
          <div className="absolute inset-[7.14%_7.32%_89.68%_7.32%] pointer-events-none rounded-[6px]" data-name="opacity scale">
            <div aria-hidden="true" className="absolute inset-0 rounded-[6px]">
              <div className="absolute bg-size-[110.00000238418579px_110.00000238418579px] bg-top-left inset-0 rounded-[6px]" style={{ backgroundImage: `url('${imgColor}')` }} />
              <img alt="" className="absolute max-w-none object-cover rounded-[6px] size-full" src={imgOpacityScale} />
            </div>
            <div aria-hidden="true" className="absolute border-[#babac1] border-[0.5px] border-solid inset-0 rounded-[6px]" />
          </div>
          <div className="absolute inset-[5.95%_59.76%_88.49%_31.71%]" data-name="drag_ruler">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <g id="drag_ruler">
                <circle cx="7" cy="7" fill="var(--fill-0, white)" id="Ellipse 11" r="6.75" stroke="var(--stroke-0, #BABAC1)" strokeWidth="0.5" />
                <circle cx="7" cy="7" fill="var(--fill-0, #F9F3DF)" id="Ellipse 12" r="4" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[48px] left-[295px] top-[459px] w-[159px]" data-name="line_menu/line_width">
        <div className="absolute bg-white border border-[#efeff4] border-solid inset-0 rounded-[4px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)]" data-name="bg" />
        <div className="absolute bottom-full contents left-0 right-full top-0" data-name="styles" />
        <DatePriceRangeLineBackgroundImage />
        <DatePriceRangeChosenTypeBackgroundImage />
        <WidthBackgroundImage />
      </div>
      <div className="absolute h-[48px] left-[870px] top-[799px] w-[159px]" data-name="line_menu/line_width">
        <div className="absolute bg-white border border-[#efeff4] border-solid inset-0 rounded-[4px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)]" data-name="bg" />
        <div className="absolute bottom-full contents left-0 right-full top-0" data-name="styles" />
        <DatePriceRangeLineBackgroundImage />
        <DatePriceRangeChosenTypeBackgroundImage />
        <WidthBackgroundImage />
      </div>
      <div className="absolute contents left-[1985px] top-[335px]">
        <div className="absolute contents left-[2042px] top-[386px]" data-name="thickness">
          <div className="absolute left-[2042px] overflow-clip size-[24px] top-[386px]" data-name="icons/small_chevron/down" />
        </div>
        <div className="absolute contents left-[1985px] top-[335px]" data-name="tooltip">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1f1f1f] content-stretch flex items-center left-[calc(50%+437.5px)] px-[15px] py-[8px] rounded-[3px] top-[calc(50%-1772px)]" data-name="tooltip">
            <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{`Line Thickness & Style`}</p>
          </div>
          <BackgroundImage9 additionalClassNames="inset-[8.62%_36.25%_91.21%_63.32%]" />
        </div>
      </div>
      <Icon className="absolute h-[38px] left-[2164px] top-[379px] w-[56px]" />
      <div className="absolute contents left-[2156px] top-[335px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Settings" additionalClassNames="left-[2156px] top-[335px]" />
        <BackgroundImage9 additionalClassNames="inset-[8.62%_32.08%_91.21%_67.49%]" />
      </div>
      <MenuItemIconDefault className="absolute h-[38px] left-[2292px] top-[379px] w-[66px]" />
      <div className="absolute contents left-[2279px] top-[335px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Visual Order" additionalClassNames="left-[2279px] top-[335px]" />
        <BackgroundImage9 additionalClassNames="inset-[8.62%_27.97%_91.21%_71.6%]" />
      </div>
      <MenuItemIconDefault className="absolute h-[38px] left-[2428px] top-[379px] w-[66px]" />
      <div className="absolute contents left-[2416px] top-[335px]" data-name="tooltip">
        <TooltipBackgroundImageAndText1 text="Clone, Copy" additionalClassNames="left-[2416px] top-[335px]" />
        <BackgroundImage9 additionalClassNames="inset-[8.62%_23.73%_91.21%_75.83%]" />
      </div>
      <div className="absolute h-[38px] left-[2144px] top-[539px] w-[56px]" data-name="delete">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
      </div>
      <div className="absolute contents left-[2136px] top-[495px]" data-name="tooltip">
        <TooltipBackgroundImageAndText1 text="Remove" additionalClassNames="left-[2136px] top-[495px]" />
        <BackgroundImage9 additionalClassNames="inset-[12.39%_32.69%_87.44%_66.87%]" />
      </div>
      <div className="absolute h-[38px] left-[2009px] top-[538px] w-[56px]" data-name="lock">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <div className="absolute bg-[rgba(0,177,199,0.1)] inset-[10.53%_21.43%] rounded-[4px]" data-name="selected_bg" />
        <div className="absolute inset-[18.42%_28.57%] overflow-clip" data-name="icons/lock">
          <IconBackgroundImage />
        </div>
      </div>
      <div className="absolute contents left-[2010px] top-[494px]" data-name="tooltip">
        <TooltipBackgroundImageAndText1 text="Lock" additionalClassNames="left-[2010px] top-[494px]" />
        <BackgroundImage9 additionalClassNames="inset-[12.37%_36.84%_87.47%_62.73%]" />
      </div>
      <DropdownColorDefaultBackgroundImage additionalClassNames="left-[2275px] top-[539px]" />
      <div className="absolute contents left-[2262px] top-[495px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Color" additionalClassNames="left-[2262px] top-[495px]" />
        <BackgroundImage9 additionalClassNames="inset-[12.39%_28.99%_87.44%_70.58%]" />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[1985px] not-italic text-[20px] text-black top-[284px] whitespace-nowrap">Tooltips</p>
      <DropdownWidthStyleDefault className="absolute h-[32px] left-[2025px] top-[423px] w-[62px]" />
      <MenuItemWidthStyleSolid className="absolute h-[38px] left-[2025px] top-[379px] w-[62px]" />
      <div className="absolute h-[552px] left-[1478.5px] top-[2724.5px] w-[259.5px]">
        <div className="absolute inset-[0_-1.42%_0_-0.19%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 263.682 553">
            <g>
              <path d={svgPaths.p13eb700} fill="var(--fill-0, white)" />
              <path d={svgPaths.pf49220} stroke="var(--stroke-0, black)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute h-[574px] left-[1478.5px] top-[2776.5px] w-[40.5px]">
        <div className="absolute inset-[0_-9.09%_0_-1.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.682 575">
            <g>
              <path d={svgPaths.p13eb700} fill="var(--fill-0, white)" />
              <path d={svgPaths.p31a7c680} stroke="var(--stroke-0, black)" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute h-[864.5px] left-[1370.5px] top-[2829.5px] w-[330.5px]">
        <div className="absolute inset-[0_-0.15%_-0.43%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 331.5 868.682">
            <g>
              <path d={svgPaths.p1c51ff80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p25e7b500} stroke="var(--stroke-0, black)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}