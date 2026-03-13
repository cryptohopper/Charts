import clsx from "clsx";
import svgPaths from "./svg-6rb1wk3ynn";
import imgIconCryptohopper from "figma:asset/f1841337e214c3907e27f0e01bfbc7696f6af6d9.png";
import imgRectangle317 from "figma:asset/70017910a949817aa1c11716388ee64b40b2eafa.png";
import imgRgbLogoDarkNoBg011 from "figma:asset/bfb3fe6da9e88a568cbf5fd07d74cee065bbcbc3.png";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("flex h-[24px] items-center justify-center w-px", additionalClassNames)}>
      <div className="-rotate-90 flex-none">{children}</div>
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
type Timezones1ListItem32LTextProps = {
  text: string;
  additionalClassNames?: string;
};

function Timezones1ListItem32LText({ text, additionalClassNames = "" }: Timezones1ListItem32LTextProps) {
  return (
    <div className={clsx("absolute h-[32px] left-0 w-[228px]", additionalClassNames)}>
      <div className="absolute bg-white inset-0" data-name="bg" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#1f1f1f] text-[14px] top-[7px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
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
type ChartLayoutHelperProps = {
  additionalClassNames?: string;
};

function ChartLayoutHelper({ additionalClassNames = "" }: ChartLayoutHelperProps) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-px items-center justify-center left-0 w-[1352px]", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-[1352px] w-px" data-name="line_chart" />
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
    <Wrapper additionalClassNames="relative shrink-0">
      <div className="bg-[#efeff4] h-px rounded-[6px] w-[24px]" data-name="divider" />
    </Wrapper>
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

export default function Footer() {
  return (
    <div className="bg-[#efeff4] relative size-full" data-name="Footer">
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[99px] overflow-clip top-[84px] w-[1440px]" data-name="chart_frame">
        <div className="absolute contents left-[60px] top-[848px]" data-name="footer_bar">
          <div className="absolute bg-white h-[40px] left-[60px] rounded-[6px] top-[848px] w-[1368px]" data-name="bg" />
          <div className="absolute contents leading-[normal] left-[calc(94.44%-39px)] not-italic text-[12px] top-[861px] whitespace-nowrap" data-name="view">
            <p className="-translate-x-full absolute font-['Source_Sans_Pro:Regular',sans-serif] left-[calc(94.44%-29px)] text-[#1f1f1f] text-right top-[861px]">%</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] left-[calc(94.44%-7px)] text-[#1f1f1f] top-[861px]">log</p>
            <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] left-[calc(100%-49px)] text-[#00b1c7] top-[861px]">reg</p>
          </div>
          <Wrapper additionalClassNames="absolute left-[calc(94.44%-60px)] top-[856px]">
            <div className="bg-[#f0f0f9] h-px rounded-[6px] w-[24px]" data-name="divider" />
          </Wrapper>
          <p className="-translate-x-full absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(83.33%+80px)] not-italic text-[#1f1f1f] text-[12px] text-right top-[861px] whitespace-nowrap">12: 25: 50 (UTC)</p>
          <div className="absolute content-stretch flex gap-[16px] items-center left-[69px] top-[855px]" data-name="timeframes">
            <TimeframeItemText text="1D" />
            <TimeframeItemText text="5D" />
            <TimeframeItemText text="1M" />
            <TimeframeItemText text="3M" />
            <div className="bg-[#f0f0f9] content-stretch flex items-center px-[8px] py-[6px] relative rounded-[6px] shrink-0" data-name="timeframe_item">
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] text-right whitespace-nowrap">6M</p>
            </div>
            <TimeframeItemText text="YTD" />
            <TimeframeItemText text="1Y" additionalClassNames="bg-white" />
            <TimeframeItemText text="5Y" />
            <TimeframeItemText text="All" />
          </div>
        </div>
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <div className="absolute contents left-0 top-[739px]" data-name="time_line">
            <div className="absolute bg-white h-[33px] left-0 rounded-bl-[6px] top-[739px] w-[1304px]" data-name="timeline_bg" />
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1265px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">22</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1200px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">19</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1068px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">12</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1001px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">8</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[935px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">5</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1134px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">15</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[870px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Oct</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[804px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">28</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[737px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">24</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[672px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">21</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[606px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">17</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[540px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">14</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[473px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">10</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[408px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">7</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[342px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">4</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[276px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">Sep</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[210px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">27</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[144px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">24</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[78px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">20</p>
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">17</p>
          </div>
          <div className="absolute contents left-0 top-0" data-name="righst_side_bar">
            <div className="absolute contents left-0 top-0" data-name="price_bar">
              <div className="absolute bg-white h-[772px] left-[1303px] rounded-br-[6px] rounded-tr-[6px] top-0 w-[65px]" data-name="right_side_bar_bg" />
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[75px] whitespace-nowrap">13200.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[40px] whitespace-nowrap">13400.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[145px] whitespace-nowrap">12800.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[110px] whitespace-nowrap">13000.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[215px] whitespace-nowrap">12400.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[180px] whitespace-nowrap">12600.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[285px] whitespace-nowrap">12000.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[250px] whitespace-nowrap">12200.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[355px] whitespace-nowrap">11600.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[320px] whitespace-nowrap">11800.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[460px] whitespace-nowrap">11000.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[425px] whitespace-nowrap">11200.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[390px] whitespace-nowrap">11400.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[530px] whitespace-nowrap">10600.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[495px] whitespace-nowrap">10800.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[600px] whitespace-nowrap">10200.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[565px] whitespace-nowrap">10400.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[635px] whitespace-nowrap">10000.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[705px] whitespace-nowrap">9600.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[670px] whitespace-nowrap">9800.00</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[12px] top-[5px] whitespace-nowrap">13600.00</p>
              <div className="absolute bg-[#efeff4] h-[772px] left-[1303px] top-0 w-px" data-name="border_chart" />
              <div className="absolute flex h-px items-center justify-center left-0 top-[739px] w-[1368px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
                <div className="-rotate-90 flex-none">
                  <div className="bg-[#efeff4] h-[1368px] w-px" data-name="border_chart" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <div className="absolute contents left-0 top-0" data-name="chart_layout">
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
              <ChartLayoutHelper additionalClassNames="top-[47px]" />
              <ChartLayoutHelper additionalClassNames="top-[12px]" />
              <ChartLayoutHelper additionalClassNames="top-[82px]" />
              <ChartLayoutHelper additionalClassNames="top-[117px]" />
              <ChartLayoutHelper additionalClassNames="top-[187px]" />
              <ChartLayoutHelper additionalClassNames="top-[222px]" />
              <ChartLayoutHelper additionalClassNames="top-[292px]" />
              <ChartLayoutHelper additionalClassNames="top-[327px]" />
              <ChartLayoutHelper additionalClassNames="top-[397px]" />
              <ChartLayoutHelper additionalClassNames="top-[432px]" />
              <ChartLayoutHelper additionalClassNames="top-[502px]" />
              <ChartLayoutHelper additionalClassNames="top-[537px]" />
              <ChartLayoutHelper additionalClassNames="top-[607px]" />
              <ChartLayoutHelper additionalClassNames="top-[642px]" />
              <ChartLayoutHelper additionalClassNames="top-[152px]" />
              <ChartLayoutHelper additionalClassNames="top-[257px]" />
              <ChartLayoutHelper additionalClassNames="top-[362px]" />
              <ChartLayoutHelper additionalClassNames="top-[467px]" />
              <ChartLayoutHelper additionalClassNames="top-[572px]" />
              <ChartLayoutHelper additionalClassNames="top-[677px]" />
              <ChartLayoutHelper additionalClassNames="top-[712px]" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[209px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[407px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[605px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[869px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[1067px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[1265px] top-0 w-px" data-name="line_chart" />
            </div>
            <div className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" data-name="logo_cryptohopper_extended">
              <div className="absolute contents left-0 top-[-5px]" data-name="logo">
                <div className="absolute bg-white border border-[#f8f8ff] border-solid h-[40px] left-0 rounded-[60px] shadow-[1px_8px_40px_0px_rgba(49,49,49,0.06)] top-[-1px] w-[169px]" data-name="bg" />
                <div className="absolute h-[48.078px] left-[4px] top-[-5px] w-[161px]" data-name="RGB_logo_dark_no_bg-01 1">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRgbLogoDarkNoBg011} />
                </div>
              </div>
            </div>
            <div className="absolute h-[41px] left-[962px] top-[321px] w-[249px]" />
            <div className="absolute bg-white h-[41px] left-[962px] top-[321px] w-[249px]" />
          </div>
          <div className="absolute left-[1245px] size-[40px] top-[681px]" data-name="button/round/default">
            <div className="absolute inset-[-80%_-102.5%_-120%_-97.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
                <g filter="url(#filter0_d_20_1647)" id="round_bg">
                  <circle cx="59" cy="52" fill="var(--fill-0, white)" fillOpacity="0.9" r="20" />
                  <circle cx="59" cy="52" r="19.5" stroke="var(--stroke-0, #F8F8FF)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="120" id="filter0_d_20_1647" width="120" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="1" dy="8" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0.12 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_20_1647" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_20_1647" mode="normal" result="shape" />
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
        </div>
        <div className="absolute contents left-[calc(94.44%-59px)] top-[817px]" data-name="tooltip">
          <div className="absolute bg-[#1f1f1f] content-stretch flex items-center left-[calc(94.44%-59px)] px-[15px] py-[8px] rounded-[3px] top-[817px]" data-name="tooltip">
            <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Logarithmic Scale</p>
          </div>
          <Helper additionalClassNames="inset-[94.22%_5%_5%_94.03%]" />
        </div>
        <div className="absolute h-[836px] left-0 top-[64px] w-[48px]" data-name="tools_bar/default">
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
        <div className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" data-name="upper_bar/default">
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
                  <Wrapper1 additionalClassNames="inset-[-3.13%]">
                    <path d={svgPaths.p37c74100} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  </Wrapper1>
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
                  <Wrapper1 additionalClassNames="inset-[-3.13%_-3.13%_-3.12%_-3.13%]">
                    <path d={svgPaths.pb3a6d80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  </Wrapper1>
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
        <div className="absolute left-[11px] size-[26px] top-[19px]" data-name="icon_cryptohopper">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIconCryptohopper} />
        </div>
        <div className="absolute contents left-[calc(72.22%-18px)] top-[344px]" data-name="timezones">
          <div className="absolute flex h-[511.586px] items-center justify-center left-[calc(72.22%-18px)] top-[344px] w-[250px]">
            <div className="-scale-y-100 flex-none">
              <div className="h-[511.586px] relative w-[250px]" data-name="bg">
                <div className="absolute inset-[-6.26%_-16.4%_-9.38%_-15.6%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 591.586">
                    <g filter="url(#filter0_d_20_5283)" id="bg">
                      <mask fill="white" id="path-1-inside-1_20_5283">
                        <path d={svgPaths.p1c8de900} />
                      </mask>
                      <path d={svgPaths.p1c8de900} fill="var(--fill-0, white)" />
                      <path d={svgPaths.p39f7c480} fill="var(--stroke-0, #F8F8FF)" mask="url(#path-1-inside-1_20_5283)" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="591.586" id="filter0_d_20_5283" width="330" x="0" y="5.4542e-10">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dx="1" dy="8" />
                        <feGaussianBlur stdDeviation="20" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.193925 0 0 0 0 0.193925 0 0 0 0 0.193925 0 0 0 0.06 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_20_5283" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_20_5283" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[rgba(62,62,62,0.2)] h-[40px] right-[calc(5.56%+92px)] rounded-[12px] top-[445px] w-[6px]" data-name="slider" />
          <div className="absolute h-[409px] left-[calc(72.22%-18px)] overflow-clip top-[434px] w-[235px]" data-name="timezones">
            <Timezones1ListItem32LText text="UTC" additionalClassNames="top-0" />
            <Timezones1ListItem32LText text="Exchange" additionalClassNames="top-[32px]" />
            <Timezones1ListItem32LText text="(UTC-10) Honolulu" additionalClassNames="top-[64px]" />
            <div className="absolute h-[32px] left-0 top-[96px] w-[228px]" data-name="list_item_32/L">
              <div className="absolute bg-[#dcf5f7] inset-0 rounded-br-[6px] rounded-tr-[6px]" data-name="bg" />
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#00b1c7] text-[14px] top-[7px] whitespace-nowrap">(UTC-8) Juneau</p>
            </div>
            <Timezones1ListItem32LText text="(UTC-7) Los Angeles" additionalClassNames="top-[128px]" />
            <Timezones1ListItem32LText text="(UTC-7) Phoenix" additionalClassNames="top-[160px]" />
            <Timezones1ListItem32LText text="(UTC-7) Vancouver" additionalClassNames="top-[192px]" />
            <Timezones1ListItem32LText text="(UTC-6) Denver" additionalClassNames="top-[224px]" />
            <Timezones1ListItem32LText text="(UTC-6) Mexico City" additionalClassNames="top-[256px]" />
            <Timezones1ListItem32LText text="(UTC-6) San Salvador" additionalClassNames="top-[288px]" />
            <Timezones1ListItem32LText text="(UTC-5) Bogota" additionalClassNames="top-[320px]" />
            <Timezones1ListItem32LText text="(UTC-5) Chicago" additionalClassNames="top-[352px]" />
            <Timezones1ListItem32LText text="(UTC-5) Lima" additionalClassNames="top-[384px]" />
            <Timezones1ListItem32LText text="UTC" additionalClassNames="top-[416px]" />
          </div>
          <div className="absolute contents left-[calc(72.22%-6px)] top-[393px]" data-name="search">
            <div className="absolute contents left-[calc(72.22%-6px)] top-[393px]" data-name="search">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(72.22%+23px)] not-italic text-[#babac1] text-[14px] top-[396px] whitespace-nowrap">Search for timezone</p>
              <div className="absolute left-[calc(72.22%-6px)] overflow-clip size-[24px] top-[393px]" data-name="icons/search_small">
                <div className="absolute inset-[20.83%]" data-name="icon">
                  <div className="absolute inset-[-3.57%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0001 15">
                      <g id="icon">
                        <path d={svgPaths.p19478c00} id="Vector" stroke="var(--stroke-0, #BABAC1)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p1ac2a000} id="Vector_2" stroke="var(--stroke-0, #BABAC1)" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#efeff4] h-px left-[calc(72.22%-3px)] right-[calc(5.56%+103px)] rounded-[6px] top-[425px]" data-name="divider" />
          </div>
          <div className="absolute h-[40px] left-[calc(72.22%-18px)] top-[344px] w-[250px]" data-name="modal_header/S">
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
            <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[11px] whitespace-nowrap">Timezone</p>
          </div>
        </div>
        <div className="absolute contents left-[calc(88.89%-15px)] top-[701px]" data-name="tooltip">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1f1f1f] content-stretch flex items-center left-[calc(97.22%-75px)] px-[15px] py-[8px] rounded-[3px] top-[calc(50%+266.5px)]" data-name="tooltip">
            <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Scroll to the Right</p>
          </div>
          <Helper additionalClassNames="inset-[81.33%_7.5%_17.89%_91.53%]" />
        </div>
      </div>
      <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[1518px] not-italic text-[#00b1c7] text-[12px] top-[1070px] whitespace-nowrap">reg</p>
      <p className="-translate-x-full absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1422px] not-italic text-[#1f1f1f] text-[12px] text-right top-[1070px] whitespace-nowrap">%</p>
      <div className="absolute contents left-[1477px] top-[1018px]" data-name="tooltip">
        <div className="absolute bg-[#1f1f1f] content-stretch flex items-center left-[1477px] px-[15px] py-[8px] rounded-[3px] top-[1018px]" data-name="tooltip">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Regular Scale</p>
        </div>
        <Helper additionalClassNames="inset-[91.7%_15.49%_7.69%_83.74%]" />
      </div>
      <div className="absolute contents left-[1374px] top-[1018px]" data-name="tooltip">
        <div className="absolute bg-[#1f1f1f] content-stretch flex items-center left-[1374px] px-[15px] py-[8px] rounded-[3px] top-[1018px]" data-name="tooltip">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Percentage</p>
        </div>
        <Helper additionalClassNames="inset-[91.7%_21.5%_7.69%_77.73%]" />
      </div>
    </div>
  );
}