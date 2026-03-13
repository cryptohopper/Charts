import clsx from "clsx";
import imgIconCryptohopper from "figma:asset/f1841337e214c3907e27f0e01bfbc7696f6af6d9.png";
import imgRectangle317 from "figma:asset/70017910a949817aa1c11716388ee64b40b2eafa.png";
import svgPaths from "./svg-hs2ffyix3g";
import imgRgbLogoDarkNoBg011 from "figma:asset/bfb3fe6da9e88a568cbf5fd07d74cee065bbcbc3.png";
type ButtonToolDefault2Props = {
  additionalClassNames?: string;
};

function ButtonToolDefault2({ children, additionalClassNames = "" }: React.PropsWithChildren<ButtonToolDefault2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute bg-white inset-0" data-name="tool_bg" />
      <div className="absolute bg-[#dcf5f7] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
      <div className="absolute inset-1/4 overflow-clip" data-name="icons/zoom_in">
        {children}
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        {children}
      </svg>
    </div>
  );
}

function Vector({ children }: React.PropsWithChildren<{}>) {
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

function MarketOpen() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="market_open">
          <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" fillOpacity="0.2" id="bg" r="8" />
          <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" id="dot" r="4" />
        </g>
      </svg>
    </div>
  );
}
type DescriptionText1Props = {
  text: string;
};

function DescriptionText1({ text }: DescriptionText1Props) {
  return (
    <div className="bg-white content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#00b1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00b1c7] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type DescriptionTextProps = {
  text: string;
};

function DescriptionText({ text }: DescriptionTextProps) {
  return (
    <div className="bg-white content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f26d60] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f26d60] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type Helper3Props = {
  additionalClassNames?: string;
};

function Helper3({ additionalClassNames = "" }: Helper3Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-px items-center justify-center left-0 w-[1352px]", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-[1352px] w-px" data-name="line_chart" />
      </div>
    </div>
  );
}
type CurrencyTextProps = {
  text: string;
};

function CurrencyText({ text }: CurrencyTextProps) {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[1319px] px-[6px] py-[4px] rounded-[4px] top-[8px]">
      <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type Helper2Props = {
  additionalClassNames?: string;
};

function Helper2({ additionalClassNames = "" }: Helper2Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-px items-center justify-center left-0 w-[1368px]", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-[1368px] w-px" data-name="border_chart" />
      </div>
    </div>
  );
}
type Helper1Props = {
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
  text20: string;
};

function Helper1({ text, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20 }: Helper1Props) {
  return (
    <div className="absolute contents font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[5px] whitespace-nowrap">
      <p className="absolute left-[1312px] top-[75px]">{text}</p>
      <p className="absolute left-[1312px] top-[40px]">{text1}</p>
      <p className="absolute left-[1312px] top-[145px]">{text2}</p>
      <p className="absolute left-[1312px] top-[110px]">{text3}</p>
      <p className="absolute left-[1312px] top-[215px]">{text4}</p>
      <p className="absolute left-[1312px] top-[180px]">{text5}</p>
      <p className="absolute left-[1312px] top-[285px]">{text6}</p>
      <p className="absolute left-[1312px] top-[250px]">{text7}</p>
      <p className="absolute left-[1312px] top-[355px]">{text8}</p>
      <p className="absolute left-[1312px] top-[320px]">{text9}</p>
      <p className="absolute left-[1312px] top-[460px]">{text10}</p>
      <p className="absolute left-[1312px] top-[425px]">{text11}</p>
      <p className="absolute left-[1312px] top-[390px]">{text12}</p>
      <p className="absolute left-[1312px] top-[530px]">{text13}</p>
      <p className="absolute left-[1312px] top-[495px]">{text14}</p>
      <p className="absolute left-[1312px] top-[600px]">{text15}</p>
      <p className="absolute left-[1312px] top-[565px]">{text16}</p>
      <p className="absolute left-[1312px] top-[635px]">{text17}</p>
      <p className="absolute left-[1312px] top-[705px]">{text18}</p>
      <p className="absolute left-[1312px] top-[670px]">{text19}</p>
      <p className="absolute left-[1312px] top-[5px]">{text20}</p>
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
type ButtonToolDefault1Props = {
  additionalClassNames?: string;
};

function ButtonToolDefault1({ additionalClassNames = "" }: ButtonToolDefault1Props) {
  return (
    <div className={additionalClassNames}>
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
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
        <g id="icon">
          <path d={svgPaths.p1ac4f00} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.5 18.5L11.8684 11.8684" id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
          <g id="Group 40">
            <path d="M7.13171 4.28943V9.97364" id="Vector_3" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.28955 7.13159H9.97376" id="Vector_4" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute inset-[41.67%]">
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <g id="icon">
            <path d={svgPaths.p312e4100} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type UpperBarDefaultHelper1Props = {
  additionalClassNames?: string;
};

function UpperBarDefaultHelper1({ additionalClassNames = "" }: UpperBarDefaultHelper1Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="-rotate-90 flex-none h-px w-[24px]">
        <div className="bg-[#efeff4] rounded-[6px] size-full" data-name="divider" />
      </div>
    </div>
  );
}

function UpperBarDefaultHelper() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-[24px] items-center justify-center relative shrink-0 w-px">
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-px rounded-[6px] w-[24px]" data-name="divider" />
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

function UpperBarDefault({ className }: { className?: string }) {
  return (
    <div className={className || "h-[40px] relative w-[1368px]"} data-name="upper_bar/default">
      <div className="absolute bg-white inset-0 rounded-[6px]" data-name="bg" />
      <div className="absolute content-stretch flex inset-[0_10.01%_0_62.06%] items-center" data-name="instruments">
        <UpperBarDefaultHelper />
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="undo_redo">
          <div className="bg-white col-1 h-[40px] ml-0 mt-0 row-1 w-[92px]" data-name="bg" />
          <div className="col-1 ml-[52px] mt-[8px] overflow-clip relative row-1 size-[24px]" data-name="icons/arrow_right">
            <Vector>
              <path d={svgPaths.p3325e520} id="Vector" stroke="var(--stroke-0, #BABAC1)" strokeLinecap="round" strokeLinejoin="round" />
            </Vector>
          </div>
          <div className="col-1 ml-[16px] mt-[8px] overflow-clip relative row-1 size-[24px]" data-name="icons/arrow_left">
            <Vector>
              <path d={svgPaths.p2c236e10} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </Vector>
          </div>
        </div>
        <UpperBarDefaultHelper />
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="save">
          <div className="bg-white col-1 h-[40px] ml-0 mt-0 row-1 w-[116px]" data-name="bg" />
          <p className="col-1 font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] ml-[47px] mt-[11px] not-italic relative row-1 text-[#1f1f1f] text-[14px] text-right whitespace-nowrap">Save</p>
          <div className="col-1 ml-[76px] mt-[8px] overflow-clip relative row-1 size-[24px]" data-name="icons/small_chevron/down">
            <div className="absolute inset-[45.83%_37.5%_41.67%_37.5%]" data-name="Vector">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
                  <path d="M0.5 0.5L3.5 3.5L6.5 0.5" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
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
        <UpperBarDefaultHelper />
        <div className="h-[40px] relative shrink-0 w-[56px]" data-name="button/menu/default">
          <div className="absolute bg-white inset-0" data-name="bg_instrument" />
          <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/fullscreen">
            <div className="absolute inset-[16.67%]" data-name="Vector">
              <Wrapper additionalClassNames="inset-[-3.13%]">
                <path d={svgPaths.p37c74100} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </Wrapper>
            </div>
          </div>
        </div>
        <UpperBarDefaultHelper />
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
        <UpperBarDefaultHelper />
        <div className="h-[40px] relative shrink-0 w-[56px]" data-name="button/menu/default">
          <div className="absolute bg-white inset-0" data-name="bg_instrument" />
          <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/dark_mode">
            <div className="absolute inset-[16.67%]" data-name="Vector">
              <Wrapper additionalClassNames="inset-[-3.13%_-3.13%_-3.12%_-3.13%]">
                <path d={svgPaths.pb3a6d80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </Wrapper>
            </div>
          </div>
        </div>
        <UpperBarDefaultHelper />
      </div>
      <div className="absolute inset-[15%_0.44%_15%_95.03%]" data-name="button/tertiary/default">
        <div className="absolute bg-[#dcf5f7] h-[28px] left-0 opacity-80 right-0 rounded-[4px] top-0" data-name="bg" />
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[#00b1c7] text-[14px] text-center top-[calc(50%-9px)] whitespace-nowrap">Sign Up</p>
      </div>
      <div className="absolute contents inset-[27.5%_6.21%_27.5%_91.15%]" data-name="button">
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_6.21%_27.5%_91.15%] leading-[normal] not-italic text-[#1f1f1f] text-[14px] whitespace-nowrap">Log In</p>
      </div>
      <div className="absolute contents inset-[0_66.74%_0_1.46%]" data-name="left_side">
        <UpperBarDefaultHelper1 additionalClassNames="inset-[20%_66.74%_20%_33.19%]" />
        <UpperBarDefaultHelper1 additionalClassNames="inset-[20%_83.63%_20%_16.3%]" />
        <UpperBarDefaultHelper1 additionalClassNames="inset-[20%_90.57%_20%_9.36%]" />
        <UpperBarDefaultHelper1 additionalClassNames="inset-[20%_79.9%_20%_20.03%]" />
        <UpperBarDefaultHelper1 additionalClassNames="inset-[20%_70.91%_20%_29.02%]" />
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

export default function Zoom() {
  return (
    <div className="bg-[#efeff4] relative size-full" data-name="Zoom">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[103px] text-black top-[96px] uppercase whitespace-nowrap">Zoom</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[70px] text-black top-[338px] whitespace-nowrap">Zoom In</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[1659px] not-italic text-[70px] text-black top-[338px] whitespace-nowrap">Zoomed</p>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[124px] overflow-clip top-[506px] w-[1440px]" data-name="Zoom_in/default">
        <FooterBarText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <div className="absolute contents left-0 top-[739px]" data-name="time_line">
            <div className="absolute bg-white h-[33px] left-0 rounded-bl-[6px] rounded-br-[6px] top-[739px] w-[1368px]" data-name="timeline_bg" />
            <div className="absolute contents font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[6px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">
              <p className="-translate-x-1/2 absolute left-[1265.5px] top-[749px]">Feb</p>
              <p className="-translate-x-1/2 absolute left-[1200px] top-[749px]">18</p>
              <p className="-translate-x-1/2 absolute left-[1068px] top-[749px]">14</p>
              <p className="-translate-x-1/2 absolute left-[1001.5px] top-[749px]">Dec</p>
              <p className="-translate-x-1/2 absolute left-[935px] top-[749px]">16</p>
              <p className="-translate-x-1/2 absolute left-[1134px] top-[749px]">2021</p>
              <p className="-translate-x-1/2 absolute left-[870px] top-[749px]">Nov</p>
              <p className="-translate-x-1/2 absolute left-[804px] top-[749px]">13</p>
              <p className="-translate-x-1/2 absolute left-[737px] top-[749px]">Sep</p>
              <p className="-translate-x-1/2 absolute left-[672.5px] top-[749px]">May</p>
              <p className="-translate-x-1/2 absolute left-[606px] top-[749px]">9</p>
              <p className="-translate-x-1/2 absolute left-[540.5px] top-[749px]">Mar</p>
              <p className="-translate-x-1/2 absolute left-[473px] top-[749px]">10</p>
              <p className="-translate-x-1/2 absolute left-[408.5px] top-[749px]">Feb</p>
              <p className="-translate-x-1/2 absolute left-[342px] top-[749px]">2020</p>
              <p className="-translate-x-1/2 absolute left-[276px] top-[749px]">Nov</p>
              <p className="-translate-x-1/2 absolute left-[210px] top-[749px]">Oct</p>
              <p className="-translate-x-1/2 absolute left-[144px] top-[749px]">Sep</p>
              <p className="-translate-x-1/2 absolute left-[78px] top-[749px]">Aug</p>
              <p className="-translate-x-1/2 absolute left-[12px] top-[749px]">22</p>
            </div>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1265.5px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Feb</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1200px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">18</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1068px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">14</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1001.5px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Dec</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[935px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">16</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1134px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">2021</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[870px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Nov</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[804px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">13</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[737px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Sep</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[672.5px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">May</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[606px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">9</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[540.5px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Mar</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[473px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">10</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[408.5px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Feb</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[342px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">2020</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[276px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Nov</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[210px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Oct</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[144px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Sep</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[78px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Aug</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">22</p>
          </div>
          <div className="absolute contents left-0 top-0" data-name="righst_side_bar">
            <div className="absolute contents left-0 top-0" data-name="price_bar">
              <div className="absolute bg-white h-[772px] left-[1303px] rounded-br-[6px] rounded-tr-[6px] top-0 w-[65px]" data-name="right_side_bar_bg" />
              <Helper1 text="0.475" text1="0.500" text2="0.425" text3="0.450" text4="0.375" text5="0.400" text6="0.325" text7="0.350" text8="0.275" text9="0.300" text10="0.200" text11="0.225" text12="0.250" text13="0.150" text14="0.175" text15="0.100" text16="0.125" text17="0.075" text18="0.025" text19="0.050" text20="0.525" />
              <Helper1 text="0.475" text1="0.500" text2="0.425" text3="0.450" text4="0.375" text5="0.400" text6="0.325" text7="0.350" text8="0.275" text9="0.300" text10="0.200" text11="0.225" text12="0.250" text13="0.150" text14="0.175" text15="0.100" text16="0.125" text17="0.075" text18="0.025" text19="0.050" text20="0.525" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[1303px] top-0 w-px" data-name="border_chart" />
              <Helper2 additionalClassNames="top-[739px]" />
            </div>
            <CurrencyText text="USD" />
          </div>
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <div className="absolute contents left-0 top-0" data-name="chart_layout">
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
              <Helper3 additionalClassNames="top-[47px]" />
              <Helper3 additionalClassNames="top-[12px]" />
              <Helper3 additionalClassNames="top-[82px]" />
              <Helper3 additionalClassNames="top-[117px]" />
              <Helper3 additionalClassNames="top-[187px]" />
              <Helper3 additionalClassNames="top-[222px]" />
              <Helper3 additionalClassNames="top-[292px]" />
              <Helper3 additionalClassNames="top-[327px]" />
              <Helper3 additionalClassNames="top-[397px]" />
              <Helper3 additionalClassNames="top-[432px]" />
              <Helper3 additionalClassNames="top-[502px]" />
              <Helper3 additionalClassNames="top-[537px]" />
              <Helper3 additionalClassNames="top-[607px]" />
              <Helper3 additionalClassNames="top-[642px]" />
              <Helper3 additionalClassNames="top-[152px]" />
              <Helper3 additionalClassNames="top-[257px]" />
              <Helper3 additionalClassNames="top-[362px]" />
              <Helper3 additionalClassNames="top-[467px]" />
              <Helper3 additionalClassNames="top-[572px]" />
              <Helper3 additionalClassNames="top-[677px]" />
              <Helper3 additionalClassNames="top-[712px]" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[209px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[407px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[605px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[869px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[1067px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[1265px] top-0 w-px" data-name="line_chart" />
            </div>
            <div className="absolute h-[737px] left-0 top-0 w-[1303px]" data-name="renko_bars">
              <div className="absolute bg-[#f26d60] h-[28px] left-[-5px] top-[142px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[6px] top-[170px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[17px] top-[198px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[28px] top-[170px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[39px] top-[142px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[50px] top-[114px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[61px] top-[86px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[72px] top-[114px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[83px] top-[142px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[94px] top-[170px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[105px] top-[198px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[116px] top-[226px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[127px] top-[254px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[138px] top-[282px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[149px] top-[254px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[160px] top-[226px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[171px] top-[198px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[182px] top-[170px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[193px] top-[142px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[204px] top-[170px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[215px] top-[198px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[226px] top-[226px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[237px] top-[254px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[248px] top-[282px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[259px] top-[310px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[270px] top-[338px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[281px] top-[366px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[292px] top-[394px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[303px] top-[422px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[314px] top-[450px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[325px] top-[478px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[336px] top-[506px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[347px] top-[534px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[358px] top-[506px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[369px] top-[534px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[380px] top-[562px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[391px] top-[590px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[402px] top-[618px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[413px] top-[646px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[424px] top-[674px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[435px] top-[702px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[446px] top-[674px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[457px] top-[702px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[468px] top-[674px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[479px] top-[646px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[490px] top-[618px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[501px] top-[590px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[512px] top-[562px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[523px] top-[590px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[534px] top-[562px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[545px] top-[590px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[556px] top-[618px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[567px] top-[646px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[578px] top-[674px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[589px] top-[646px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[600px] top-[618px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[611px] top-[590px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[622px] top-[562px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[633px] top-[534px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[644px] top-[506px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[655px] top-[478px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[666px] top-[506px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[677px] top-[478px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[688px] top-[506px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[699px] top-[478px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[710px] top-[506px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[721px] top-[534px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[732px] top-[562px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[743px] top-[590px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[754px] top-[562px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[765px] top-[590px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[776px] top-[618px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[787px] top-[646px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[798px] top-[674px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[809px] top-[646px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[820px] top-[618px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[831px] top-[590px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[842px] top-[562px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[853px] top-[590px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[864px] top-[618px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[875px] top-[646px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[886px] top-[674px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[897px] top-[646px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[908px] top-[674px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[919px] top-[702px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[930px] top-[674px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[941px] top-[646px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[952px] top-[618px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[963px] top-[646px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[974px] top-[618px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[985px] top-[590px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[996px] top-[618px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[1007px] top-[646px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[1018px] top-[674px] w-[11px]" />
              <div className="absolute bg-[#f26d60] h-[28px] left-[1029px] top-[702px] w-[11px]" />
              <div className="absolute bg-[#09977e] h-[28px] left-[1040px] top-[674px] w-[11px]" />
              <div className="absolute bg-[rgba(0,177,199,0.1)] border border-[#00b1c7] border-solid left-[913px] size-[221px] top-[515px]" data-name="zoom_in" />
            </div>
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
          </div>
          <div className="absolute contents left-[18px] top-0" data-name="exchange_description">
            <div className="absolute bg-white content-stretch flex gap-[12px] items-center left-[18px] top-[36px]" data-name="description_figures">
              <DescriptionText text="0.125" />
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap">0.005</p>
              <DescriptionText1 text="0.130" />
            </div>
            <div className="absolute bg-white content-stretch flex gap-[16px] items-center left-[18px] py-[10px] top-0" data-name="exchange_description">
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-pre">{`BLUESKY DIGITAL AS  ·  1D  ·  CSE  ·  Renko [ATR(14), 0.02]`}</p>
              <MarketOpen />
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-pre">
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">O</span>
                <span className="leading-[normal]">{`  `}</span>
                <span className="leading-[normal] text-[#09977e]">0.120</span>
                <span className="leading-[normal]">{`   `}</span>
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">H</span>
                <span className="leading-[normal]">{` `}</span>
                <span className="leading-[normal] text-[#09977e]">0.140</span>
                <span className="leading-[normal]">{`  `}</span>
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">L</span>
                <span className="leading-[normal]">{` `}</span>
                <span className="leading-[normal] text-[#09977e]">0.120</span>
                <span className="leading-[normal]">{`  `}</span>
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{`C `}</span>
                <span className="leading-[normal] text-[#09977e]">0.140</span>
              </p>
              <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09977e] text-[12px] whitespace-pre">{`+0.040  (+0.40.00%)`}</p>
            </div>
          </div>
          <div className="absolute contents left-0 top-[665px]" data-name="actual_price">
            <div className="absolute contents left-[1304px] top-[665px]" data-name="actual_price">
              <div className="absolute contents left-[1304px] top-[665px]" data-name="price_actual">
                <div className="absolute bg-[#09977e] h-[19px] left-[1304px] top-[665px] w-[64px]" data-name="card_bg" />
                <div className="absolute bg-white h-px left-[1304px] top-[674px] w-[4px]" data-name="indicator_line" />
                <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[667px] whitespace-nowrap">0.055</p>
              </div>
              <div className="absolute contents left-[1304px] top-[684px]" data-name="time">
                <div className="absolute contents left-[1304px] top-[684px]" data-name="card">
                  <div className="absolute bg-white h-[19px] left-[1304px] top-[684px] w-[64px]" data-name="time_card_bg" />
                  <div className="absolute bg-[rgba(255,107,92,0.1)] h-[19px] left-[1304px] top-[684px] w-[64px]" data-name="time_card_bg" />
                </div>
                <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#f26d60] text-[12px] top-[686px] whitespace-nowrap">0.045</p>
              </div>
            </div>
            <div className="absolute flex h-px items-center justify-center left-0 top-[674px] w-[1303px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="-rotate-90 flex-none">
                <div className="border border-[#09977e] border-dashed h-[1303px] w-px" data-name="trend_line" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[836px] left-0 top-[64px] w-[48px]" data-name="tools_bar/default">
          <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
          <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-0 top-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <div className="relative shrink-0 size-[48px]" data-name="button/tool/cursor">
                <div className="absolute inset-1/4 overflow-clip" data-name="icons/cursor_tool">
                  <Icon />
                </div>
              </div>
              <ButtonToolDefault1 additionalClassNames="relative shrink-0 size-[48px]" />
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
              <ButtonToolDefault2 additionalClassNames="relative shrink-0 size-[48px]">
                <div className="absolute inset-[12.5%]" data-name="icon">
                  <Helper additionalClassNames="inset-[-2.78%_-2.78%_-2.77%_-2.78%]" />
                </div>
              </ButtonToolDefault2>
            </div>
            <div className="bg-[#efeff4] h-px rounded-[6px] shrink-0 w-[32px]" data-name="divider" />
            <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          </div>
        </div>
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[1659px] overflow-clip top-[506px] w-[1440px]" data-name="Zoom_in/zoomed">
        <FooterBarText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <div className="absolute h-[772px] left-0 top-0 w-[1368px]" data-name="chart_items">
            <div className="absolute contents left-0 top-0" data-name="chart_layout">
              <div className="absolute bg-white h-[748px] left-0 rounded-[6px] top-0 w-[1368px]" data-name="chart_bg" />
              <div className="absolute bg-[#efeff4] h-[772px] left-0 top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[70px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[140px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[280px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[350px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[490px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[560px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[700px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[770px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[840px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[980px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[1050px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[1190px] top-0 w-px" data-name="line_chart" />
              <Helper3 additionalClassNames="top-[40px]" />
              <Helper3 additionalClassNames="top-[20px]" />
              <Helper3 additionalClassNames="top-0" />
              <Helper3 additionalClassNames="top-[80px]" />
              <Helper3 additionalClassNames="top-[100px]" />
              <Helper3 additionalClassNames="top-[160px]" />
              <Helper3 additionalClassNames="top-[200px]" />
              <Helper3 additionalClassNames="top-[260px]" />
              <Helper3 additionalClassNames="top-[300px]" />
              <Helper3 additionalClassNames="top-[360px]" />
              <Helper3 additionalClassNames="top-[400px]" />
              <Helper3 additionalClassNames="top-[480px]" />
              <Helper3 additionalClassNames="top-[520px]" />
              <Helper3 additionalClassNames="top-[600px]" />
              <Helper3 additionalClassNames="top-[640px]" />
              <Helper3 additionalClassNames="top-[140px]" />
              <Helper3 additionalClassNames="top-[240px]" />
              <Helper3 additionalClassNames="top-[320px]" />
              <Helper3 additionalClassNames="top-[440px]" />
              <Helper3 additionalClassNames="top-[560px]" />
              <Helper3 additionalClassNames="top-[680px]" />
              <Helper3 additionalClassNames="top-[720px]" />
              <Helper3 additionalClassNames="top-[700px]" />
              <Helper3 additionalClassNames="top-[660px]" />
              <Helper3 additionalClassNames="top-[620px]" />
              <Helper3 additionalClassNames="top-[580px]" />
              <Helper3 additionalClassNames="top-[540px]" />
              <Helper3 additionalClassNames="top-[500px]" />
              <Helper3 additionalClassNames="top-[460px]" />
              <Helper3 additionalClassNames="top-[420px]" />
              <Helper3 additionalClassNames="top-[380px]" />
              <Helper3 additionalClassNames="top-[340px]" />
              <Helper3 additionalClassNames="top-[280px]" />
              <Helper3 additionalClassNames="top-[220px]" />
              <Helper3 additionalClassNames="top-[180px]" />
              <Helper3 additionalClassNames="top-[120px]" />
              <Helper3 additionalClassNames="top-[60px]" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[210px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[420px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[630px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[910px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[1120px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[1260px] top-0 w-px" data-name="line_chart" />
            </div>
            <div className="absolute h-[584px] left-px overflow-clip top-[97px] w-[1302px]" data-name="renko_bars">
              <div className="absolute contents left-[-18px] top-0" data-name="renko_bars">
                <div className="absolute bg-[#09977e] h-[46px] left-[87px] top-[138px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[52px] top-[184px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[17px] top-[230px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[-18px] top-[276px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[122px] top-[92px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[157px] top-[46px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[192px] top-0 w-[35px]" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[227px] top-[46px] w-[35px]" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[262px] top-[92px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[297px] top-[46px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[437px] top-[46px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[132px] left-[454px] top-[46px] w-px" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[472px] top-[92px] w-[35px]" />
                <div className="absolute bg-[#f26d60] h-[138px] left-[489px] top-0 w-px" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[507px] top-[138px] w-[35px]" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[787px] top-[138px] w-[35px]" />
                <div className="absolute bg-[#f26d60] h-[114px] left-[804px] top-[70px] w-px" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[542px] top-[184px] w-[35px]" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[822px] top-[184px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[892px] top-[184px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[88px] left-[909px] top-[203px] w-px" />
                <div className="absolute bg-[#09977e] h-[46px] left-[612px] top-[184px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[682px] top-[184px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[717px] top-[138px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[752px] top-[92px] w-[35px]" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[577px] top-[230px] w-[35px]" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[857px] top-[230px] w-[35px]" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[647px] top-[230px] w-[35px]" />
                <div className="absolute bg-[#f26d60] h-[99px] left-[664px] top-[166px] w-px" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[332px] top-[92px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[46px] left-[402px] top-[92px] w-[35px]" />
                <div className="absolute bg-[#09977e] h-[132px] left-[419px] top-[92px] w-px" />
                <div className="absolute bg-[#f26d60] h-[46px] left-[367px] top-[138px] w-[35px]" />
              </div>
            </div>
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[684px] w-[169px]" />
          </div>
          <div className="absolute contents left-0 top-[740px]" data-name="time_line">
            <div className="absolute bg-white h-[32px] left-0 rounded-bl-[6px] rounded-br-[6px] top-[740px] w-[1368px]" data-name="month_bg" />
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1260px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">22</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1191px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Nov</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1051px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Oct</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[980px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">24</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[910px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Sep</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1121px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">25</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[841px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">19</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[771px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">13</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[700px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">5</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[630px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Aug</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[560px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">18</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[490px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">16</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[420px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">14</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[350px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Jul</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[281px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">28</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[210px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">27</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[140px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">26</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[71px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">24</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">30</p>
          </div>
          <div className="absolute contents left-0 top-[-6px]" data-name="price_bar">
            <div className="absolute bg-white h-[772px] left-[1303px] rounded-br-[6px] rounded-tr-[6px] top-0 w-[65px]" data-name="right_side_bar_bg" />
            <Helper2 additionalClassNames="top-[740px]" />
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[354px] whitespace-nowrap">9800.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[334px] whitespace-nowrap">10000.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[394px] whitespace-nowrap">9400.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[374px] whitespace-nowrap">9600.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[434px] whitespace-nowrap">9000.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[414px] whitespace-nowrap">9200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[474px] whitespace-nowrap">8600.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[454px] whitespace-nowrap">8800.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[514px] whitespace-nowrap">8200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[494px] whitespace-nowrap">8400.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[574px] whitespace-nowrap">7600.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[554px] whitespace-nowrap">7800.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[534px] whitespace-nowrap">8000.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[614px] whitespace-nowrap">7200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[594px] whitespace-nowrap">7400.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[654px] whitespace-nowrap">6800.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[634px] whitespace-nowrap">7000.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[674px] whitespace-nowrap">6600.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[714px] whitespace-nowrap">6200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[694px] whitespace-nowrap">6400.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[314px] whitespace-nowrap">10200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[294px] whitespace-nowrap">10400.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[274px] whitespace-nowrap">10600.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[254px] whitespace-nowrap">10800.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[234px] whitespace-nowrap">11000.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[214px] whitespace-nowrap">11200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[194px] whitespace-nowrap">11400.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[174px] whitespace-nowrap">11600.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[154px] whitespace-nowrap">11800.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[134px] whitespace-nowrap">12000.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[114px] whitespace-nowrap">12200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[94px] whitespace-nowrap">12400.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[74px] whitespace-nowrap">12600.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[54px] whitespace-nowrap">12800.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[34px] whitespace-nowrap">13000.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[14px] whitespace-nowrap">13200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[-6px] whitespace-nowrap">13400.00</p>
            <div className="absolute bg-[#efeff4] h-[772px] left-[1303px] top-0 w-px" data-name="line_chart" />
            <CurrencyText text="USD" />
          </div>
          <div className="absolute contents left-[18px] top-0" data-name="exchange_description">
            <div className="absolute bg-white content-stretch flex gap-[16px] items-center left-[18px] py-[10px] top-0" data-name="exchange_description">
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-pre">{`Bitcoin  / U.S. Dollar  ·  1D  ·  BITSTAMP  ·  Renko [ATR(14), 419.86]      `}</p>
              <MarketOpen />
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-pre">
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">O</span>
                <span className="leading-[normal]">{` `}</span>
                <span className="leading-[normal] text-[#f26d60]">10076.64</span>
                <span className="leading-[normal]">{`   `}</span>
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">H</span>
                <span className="leading-[normal]">{` `}</span>
                <span className="leading-[normal] text-[#f26d60]">10076.64</span>
                <span className="leading-[normal]">{`  `}</span>
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">L</span>
                <span className="leading-[normal]">{` `}</span>
                <span className="leading-[normal] text-[#f26d60]">9656.78</span>
                <span className="leading-[normal]">{`  `}</span>
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{`C `}</span>
                <span className="leading-[normal] text-[#f26d60]">9656.78</span>
              </p>
              <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f26d60] text-[12px] whitespace-pre">{`-419.86  (-4.17%)`}</p>
            </div>
            <div className="absolute bg-white content-stretch flex gap-[12px] items-center left-[18px] top-[36px]" data-name="description_figures">
              <DescriptionText text="13623.25" />
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap">7.14</p>
              <DescriptionText1 text="13630.39" />
            </div>
          </div>
        </div>
        <div className="absolute h-[836px] left-0 top-[64px] w-[48px]" data-name="tools_bar/zoom">
          <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
          <div className="absolute inset-[0_0_94.26%_0]" data-name="button/tool/cursor">
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/cursor_tool">
              <Icon />
            </div>
          </div>
          <ButtonToolDefault className="absolute inset-[11.48%_0_82.78%_0]" />
          <ButtonToolDefault className="absolute inset-[17.22%_0_77.03%_0]" />
          <ButtonToolDefault className="absolute inset-[22.97%_0_71.29%_0]" />
          <ButtonToolDefault className="absolute inset-[28.71%_0_65.55%_0]" />
          <ButtonToolDefault className="absolute inset-[34.45%_0_59.81%_0]" />
          <ButtonToolDefault className="absolute inset-[40.19%_0_54.07%_0]" />
          <ButtonToolDefault className="absolute inset-[45.93%_0_48.33%_0]" />
          <ButtonToolDefault className="absolute inset-[51.67%_0_42.58%_0]" />
          <ButtonToolDefault className="absolute inset-[57.42%_0_36.84%_0]" />
          <ButtonToolDefault className="absolute inset-[65.19%_0_29.07%_0]" />
          <ButtonToolDefault2 additionalClassNames="absolute inset-[70.93%_0_23.33%_0]">
            <div className="absolute inset-[12.5%]" data-name="icon">
              <Helper additionalClassNames="inset-[-2.78%]" />
            </div>
          </ButtonToolDefault2>
          <ButtonToolDefault className="absolute inset-[76.67%_0_17.58%_0]" />
          <ButtonToolDefault className="absolute inset-[84.45%_0_9.81%_0]" />
          <ButtonToolDefault1 additionalClassNames="absolute inset-[5.74%_0_88.52%_0]" />
          <div className="absolute bg-[#efeff4] inset-[64.11%_16.67%_35.77%_16.67%] rounded-[6px]" data-name="divider" />
          <div className="absolute bg-[#efeff4] inset-[83.37%_16.67%_16.51%_16.67%] rounded-[6px]" data-name="divider" />
        </div>
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <div className="absolute contents left-[calc(61.11%+44px)] top-[398px]" data-name="cursor_items">
          <div className="absolute left-[calc(61.11%+44px)] size-[24px] top-[398px]" data-name="cursor">
            <div className="absolute inset-[20.83%_24.62%_24.62%_20.83%]" data-name="cursor">
              <div className="absolute inset-[-1.91%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5909 13.5909">
                  <g id="cursor">
                    <path d="M6.79541 0.25V13.3409" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                    <path d="M0.25 6.79547H13.3409" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[61px] top-[336px]" data-name="actual_price">
          <div className="absolute flex h-px items-center justify-center left-[61px] top-[345px] w-[1311px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="border border-[#09977e] border-dashed h-[1311px] w-px" data-name="trend_line" />
            </div>
          </div>
          <div className="absolute contents left-[calc(94.44%+4px)] top-[336px]" data-name="price_actual">
            <div className="absolute bg-[#09977e] h-[19px] left-[calc(94.44%+4px)] top-[336px] w-[64px]" data-name="card_bg" />
            <div className="absolute bg-white h-px left-[calc(94.44%+4px)] top-[345px] w-[4px]" data-name="indicator_line" />
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(100%-68px)] not-italic text-[12px] text-white top-[338px] whitespace-nowrap">10603.43</p>
          </div>
          <div className="absolute contents left-[calc(94.44%+4px)] top-[355px]" data-name="time">
            <div className="absolute contents left-[calc(94.44%+4px)] top-[355px]" data-name="card">
              <div className="absolute bg-white h-[19px] left-[calc(94.44%+4px)] top-[355px] w-[64px]" data-name="time_card_bg" />
              <div className="absolute bg-[rgba(9,151,126,0.1)] h-[19px] left-[calc(94.44%+4px)] top-[355px] w-[64px]" data-name="time_card_bg" />
            </div>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(100%-68px)] not-italic text-[#09977e] text-[12px] top-[357px] whitespace-nowrap">10610.67</p>
          </div>
        </div>
      </div>
    </div>
  );
}