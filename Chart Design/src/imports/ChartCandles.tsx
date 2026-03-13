import clsx from "clsx";
import imgIconCryptohopper from "figma:asset/f1841337e214c3907e27f0e01bfbc7696f6af6d9.png";
import imgRectangle317 from "figma:asset/70017910a949817aa1c11716388ee64b40b2eafa.png";
import svgPaths from "./svg-7shvdqa2zb";
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
type Helper2Props = {
  additionalClassNames?: string;
};

function Helper2({ additionalClassNames = "" }: Helper2Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-px items-center justify-center left-0 w-[1352px]", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <Helper1 additionalClassNames="h-[1352px] relative w-px" />
      </div>
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={additionalClassNames}>
      <div aria-hidden="true" className="absolute border border-[#efeff4] border-dashed inset-[-0.5px] pointer-events-none" />
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return <Helper1 additionalClassNames={clsx("absolute h-[772px] top-0 w-px", additionalClassNames)} />;
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
type ExchangeDescriptionTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ExchangeDescriptionText({ text, additionalClassNames = "" }: ExchangeDescriptionTextProps) {
  return (
    <p className={clsx("relative shrink-0 text-[#1f1f1f]", additionalClassNames)}>
      <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{text}</span>
      <span className="leading-[normal]">{` `}</span>
    </p>
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

export default function ChartCandles() {
  return (
    <div className="bg-[#f8f8ff] relative size-full" data-name="Chart_candles">
      <div className="absolute contents left-[60px] top-[848px]" data-name="footer_bar">
        <div className="absolute bg-white h-[40px] left-[60px] rounded-[6px] top-[848px] w-[1368px]" data-name="bg" />
        <div className="absolute contents leading-[normal] left-[calc(94.44%-46px)] not-italic text-[12px] top-[861px] whitespace-nowrap" data-name="view">
          <p className="-translate-x-full absolute font-['Source_Sans_Pro:Regular',sans-serif] left-[calc(94.44%-36px)] text-[#1f1f1f] text-right top-[861px]">%</p>
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] left-[calc(94.44%-14px)] text-[#1f1f1f] top-[861px]">log</p>
          <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] left-[calc(100%-56px)] text-[#00b1c7] top-[861px]">auto</p>
        </div>
        <Wrapper additionalClassNames="absolute left-[calc(88.89%+13px)] top-[856px]">
          <div className="bg-[#f0f0f9] h-px rounded-[6px] w-[24px]" data-name="divider" />
        </Wrapper>
        <p className="-translate-x-full absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(83.33%+73px)] not-italic text-[#1f1f1f] text-[12px] text-right top-[861px] whitespace-nowrap">12: 25: 50 (UTC)</p>
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
            <div className="absolute flex h-px items-center justify-center left-0 top-[739px] w-[1368px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="-rotate-90 flex-none">
                <div className="bg-[#efeff4] h-[1368px] w-px" data-name="border_chart" />
              </div>
            </div>
            <div className="absolute bg-[#efeff4] h-[772px] left-[1303px] top-0 w-px" data-name="border_chart" />
          </div>
          <div className="absolute contents left-[1304px] top-[518px]" data-name="price_actual">
            <div className="absolute bg-[#09977e] h-[19px] left-[1304px] top-[518px] w-[64px]" data-name="card_bg" />
            <div className="absolute bg-white h-px left-[1304px] top-[527px] w-[4px]" data-name="indicator_line" />
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[520px] whitespace-nowrap">10654.00</p>
          </div>
          <div className="absolute bg-white content-stretch flex items-center left-[1319px] px-[6px] py-[4px] rounded-[4px] top-[8px]" data-name="currency">
            <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-nowrap">USD</p>
          </div>
        </div>
        <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
          <div className="absolute contents left-0 top-0" data-name="chart_layout">
            <div className="absolute bg-white h-[748px] left-0 rounded-[6px] top-0 w-[1368px]" data-name="chart_bg" />
            <Helper additionalClassNames="left-[11px]" />
            <Helper additionalClassNames="left-[77px]" />
            <Helper additionalClassNames="left-[143px]" />
            <Helper additionalClassNames="left-[275px]" />
            <Helper additionalClassNames="left-[341px]" />
            <Helper additionalClassNames="left-[473px]" />
            <Helper additionalClassNames="left-[539px]" />
            <Helper additionalClassNames="left-[671px]" />
            <Helper additionalClassNames="left-[737px]" />
            <Helper additionalClassNames="left-[803px]" />
            <Helper additionalClassNames="left-[935px]" />
            <Helper additionalClassNames="left-[1001px]" />
            <Helper additionalClassNames="left-[1133px]" />
            <Helper additionalClassNames="left-[1199px]" />
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
            <Helper additionalClassNames="left-[209px]" />
            <Helper additionalClassNames="left-[407px]" />
            <Helper additionalClassNames="left-[605px]" />
            <Helper additionalClassNames="left-[869px]" />
            <Helper additionalClassNames="left-[1067px]" />
            <Helper additionalClassNames="left-[1265px]" />
          </div>
          <div className="absolute contents left-[3px] top-0" data-name="CandleStick Chart">
            <div className="absolute contents left-[135px] top-[485px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[8px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[39px] left-[143px] top-[485px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[179px] top-[500px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[18px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[81px] left-[187px] top-[500px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[245px] top-[579px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[22px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[55px] left-[253px] top-[579px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[289px] top-[581px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[10px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[69px] left-[297px] top-[581px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[311px] top-[586px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[22px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[40px] left-[319px] top-[586px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[333px] top-[510px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[60px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[101px] left-[341px] top-[510px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[355px] top-[458px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[54px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[89px] left-[363px] top-[458px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[377px] top-[458px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[3px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[52px] left-[385px] top-[458px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[399px] top-[453px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[3px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[54px] left-[407px] top-[453px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[421px] top-[327px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[136px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[169px] left-[429px] top-[327px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[487px] top-[413px]" data-name="stick">
              <div className="absolute bg-[#f26d60] left-0 size-[17px] top-0" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[62px] left-[495px] top-[413px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[509px] top-[369px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-px left-[509px] top-[443px] w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[86px] left-[517px] top-[369px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[553px] top-[443px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[60px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[112px] left-[561px] top-[443px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[575px] top-[257px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[72px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[181px] left-[583px] top-[257px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[597px] top-[282px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[12px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[99px] left-[605px] top-[282px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[619px] top-[200px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[149px] left-[627px] top-[200px] w-px" data-name="stick_rise" />
              <div className="absolute bg-[#09977e] h-[76px] left-0 top-0 w-[17px]" data-name="bar_rise" />
            </div>
            <div className="absolute contents left-[641px] top-[223px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[94px] left-[649px] top-[223px] w-px" data-name="stick_rise" />
              <div className="absolute bg-[#f26d60] h-[15px] left-0 top-0 w-[17px]" data-name="bar_rise" />
            </div>
            <div className="absolute contents left-[663px] top-[203px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[49px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[67px] left-[671px] top-[203px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[685px] top-0" data-name="stick">
              <div className="absolute bg-[#09977e] h-[195px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[255px] left-[693px] top-0 w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[729px] top-[20px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[44px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[87px] left-[737px] top-[20px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[817px] top-[203px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[42px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[109px] left-[825px] top-[203px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[839px] top-[211px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[18px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[86px] left-[847px] top-[211px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[861px] top-[220px]" data-name="stick">
              <div className="absolute flex h-[67px] items-center justify-center left-0 top-0 w-[17px]">
                <div className="-scale-y-100 flex-none">
                  <div className="bg-[#f26d60] h-[-67px] w-[17px]" data-name="bar_rise" />
                </div>
              </div>
              <div className="absolute bg-[#f26d60] h-[117px] left-[869px] top-[220px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[883px] top-[253px]" data-name="stick">
              <div className="absolute flex items-center justify-center left-0 size-[17px] top-0">
                <div className="-scale-y-100 flex-none">
                  <div className="bg-[#f26d60] h-[-17px] w-[17px]" data-name="bar_rise" />
                </div>
              </div>
              <div className="absolute bg-[#f26d60] h-[124px] left-[891px] top-[253px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[1037px] top-[607px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[18px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[40px] left-[1045px] top-[607px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[1059px] top-[582px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[3px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[57px] left-[1067px] top-[582px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[1081px] top-[522px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[50px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[97px] left-[1089px] top-[522px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[1147px] top-[571px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[34px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[74px] left-[1155px] top-[571px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[1191px] top-[594px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[18px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[45px] left-[1199px] top-[594px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[1213px] top-[547px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[54px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[84px] left-[1221px] top-[547px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[1257px] top-[560px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[7px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#f26d60] h-[29px] left-[1265px] top-[560px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[1279px] top-[513px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[45px] left-0 top-0 w-[17px]" data-name="bar_rise" />
              <div className="absolute bg-[#09977e] h-[79px] left-[1287px] top-[513px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[3px] top-[327px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[8px] left-[3px] top-[342px] w-[17px]" data-name="bar" />
              <div className="absolute bg-[#f26d60] h-[44px] left-[11px] top-[327px] w-px" data-name="stick" />
            </div>
            <div className="absolute contents left-[25px] top-[341px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[87px] left-[25px] top-[341px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#09977e] h-[92px] left-[33px] top-[341px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[47px] top-[409px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[5px] left-[47px] top-[435px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[47px] left-[55px] top-[409px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[69px] top-[426px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[49px] left-[69px] top-[426px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#09977e] h-[77px] left-[77px] top-[426px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[91px] top-[478px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[20px] left-[91px] top-[490px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[42px] left-[99px] top-[478px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[113px] top-[488px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[18px] left-[113px] top-[505px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[55px] left-[121px] top-[488px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[157px] top-[503px]" data-name="stick">
              <div className="absolute contents left-[157px] top-[508px]" data-name="Bar">
                <div className="absolute bg-[#09977e] h-[37px] left-[157px] top-[508px] w-[17px]" data-name="bar_fall" />
              </div>
              <div className="absolute bg-[#09977e] h-[70px] left-[165px] top-[503px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[201px] top-[510px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[18px] left-[201px] top-[537px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[49px] left-[209px] top-[510px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[223px] top-[540px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[60px] left-[223px] top-[560px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[84px] left-[231px] top-[540px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[267px] top-[587px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[44px] left-[267px] top-[587px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#09977e] h-[77px] left-[275px] top-[587px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[443px] top-[344px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[55px] left-[443px] top-[359px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#09977e] h-[81px] left-[451px] top-[344px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[465px] top-[371px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[20px] left-[465px] top-[404px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[84px] left-[473px] top-[371px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[531px] top-[426px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[54px] left-[531px] top-[443px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[76px] left-[539px] top-[426px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[707px] top-[12px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[27px] left-[707px] top-[57px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[79px] left-[715px] top-[12px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[751px] top-[2px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[76px] left-[751px] top-[60px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[173px] left-[759px] top-[2px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[773px] top-[133px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[79px] left-[773px] top-[144px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[111px] left-[781px] top-[133px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[795px] top-[205px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[13px] left-[795px] top-[238px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[94px] left-[803px] top-[205px] w-px" data-name="stick_rise" />
            </div>
            <div className="absolute contents left-[905px] top-[262px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[89px] left-[905px] top-[270px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#09977e] h-[154px] left-[913px] top-[262px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[927px] top-[352px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[47px] left-[927px] top-[389px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[144px] left-[935px] top-[352px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[949px] top-[503px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[102px] left-[949px] top-[519px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[237px] left-[957px] top-[503px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[971px] top-[618px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[39px] left-[971px] top-[643px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[72px] left-[979px] top-[618px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[993px] top-[586px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[7px] left-[993px] top-[653px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[81px] left-[1001px] top-[586px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[1015px] top-[629px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[12px] left-[1015px] top-[651px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#09977e] h-[74px] left-[1023px] top-[629px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[1103px] top-[539px]" data-name="stick">
              <div className="absolute bg-[#09977e] h-[10px] left-[1103px] top-[539px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#09977e] h-[50px] left-[1111px] top-[539px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[1125px] top-[554px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[25px] left-[1125px] top-[577px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[64px] left-[1133px] top-[554px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[1169px] top-[579px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[23px] left-[1169px] top-[602px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[49px] left-[1177px] top-[579px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[1235px] top-[529px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[3px] left-[1235px] top-[565px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[65px] left-[1243px] top-[529px] w-px" data-name="stick_fall" />
            </div>
            <div className="absolute contents left-[1301px] top-[532px]" data-name="stick">
              <div className="absolute bg-[#f26d60] h-[5px] left-[1301px] top-[596px] w-[17px]" data-name="bar_fall" />
              <div className="absolute bg-[#f26d60] h-[82px] left-[1309px] top-[532px] w-px" data-name="stick_fall" />
            </div>
          </div>
          <div className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" data-name="logo_cryptohopper_extended">
            <div className="absolute contents left-0 top-[-5px]" data-name="logo">
              <div className="absolute bg-white border border-[#f8f8ff] border-solid h-[40px] left-0 rounded-[60px] shadow-[1px_8px_40px_0px_rgba(49,49,49,0.06)] top-[-1px] w-[169px]" data-name="bg" />
              <div className="absolute h-[48.078px] left-[4px] top-[-5px] w-[161px]" data-name="RGB_logo_dark_no_bg-01 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRgbLogoDarkNoBg011} />
              </div>
            </div>
          </div>
          <div className="absolute left-[1245px] size-[40px] top-[681px]" data-name="button/round/default">
            <div className="absolute inset-[-80%_-102.5%_-120%_-97.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
                <g filter="url(#filter0_d_1_1188)" id="round_bg">
                  <circle cx="59" cy="52" fill="var(--fill-0, white)" fillOpacity="0.9" r="20" />
                  <circle cx="59" cy="52" r="19.5" stroke="var(--stroke-0, #F8F8FF)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="120" id="filter0_d_1_1188" width="120" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dx="1" dy="8" />
                    <feGaussianBlur stdDeviation="20" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0.12 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1188" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1188" mode="normal" result="shape" />
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
        <div className="absolute contents left-[18px] top-0" data-name="exchange_description">
          <div className="absolute contents left-[18px] top-0" data-name="exchange_description">
            <div className="absolute bg-white left-[18px] top-[36px]" data-name="description_figures">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[12px] items-center relative">
                  <div className="bg-white content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="description">
                    <div aria-hidden="true" className="absolute border border-[#f26d60] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f26d60] text-[12px] whitespace-nowrap">134022.00</p>
                  </div>
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap">5.46</p>
                  <div className="bg-white content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="description">
                    <div aria-hidden="true" className="absolute border border-[#00b1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00b1c7] text-[12px] whitespace-nowrap">13407.46</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white left-[18px] top-0" data-name="exchange_description">
              <div className="content-stretch flex gap-[16px] items-start py-[10px] relative">
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-pre">{`Bitcoin  / U.S. Dollar  ·  1D  ·  COINBASE`}</p>
                <div className="relative shrink-0 size-[16px]" data-name="market_open">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="market_open">
                      <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" fillOpacity="0.2" id="bg" r="8" />
                      <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" id="dot" r="4" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-[12px]" data-name="coordinates">
                  <div className="content-stretch flex font-['Source_Sans_Pro:Regular',sans-serif] gap-[2px] items-center leading-[0] relative shrink-0" data-name="coordinates">
                    <ExchangeDescriptionText text="O" additionalClassNames="whitespace-nowrap" />
                    <p className="relative shrink-0 text-[#f26d60] whitespace-pre">
                      <span className="leading-[normal]">13065.10</span>
                      <span className="leading-[normal] text-[#1f1f1f]">{`   `}</span>
                    </p>
                  </div>
                  <div className="content-stretch flex font-['Source_Sans_Pro:Regular',sans-serif] gap-[2px] items-center relative shrink-0 whitespace-nowrap" data-name="coordinates">
                    <ExchangeDescriptionText text="H" additionalClassNames="leading-[0]" />
                    <p className="leading-[normal] relative shrink-0 text-[#f26d60]">13480.00</p>
                  </div>
                  <div className="content-stretch flex gap-[2px] items-center leading-[normal] relative shrink-0 whitespace-nowrap" data-name="coordinates">
                    <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] relative shrink-0 text-[#3e3e3e]">L</p>
                    <p className="font-['Source_Sans_Pro:Regular',sans-serif] relative shrink-0 text-[#f26d60]">13057.09</p>
                  </div>
                  <div className="content-stretch flex gap-[2px] items-center relative shrink-0 whitespace-nowrap" data-name="coordinates">
                    <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#3e3e3e]">C</p>
                    <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] relative shrink-0 text-[#f26d60]">
                      <span className="leading-[normal]">13407.46</span>
                      <span className="leading-[normal] text-[#1f1f1f]">{` `}</span>
                    </p>
                  </div>
                </div>
                <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f26d60] text-[12px] whitespace-pre">{`+340.73 (+2.61%)  `}</p>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}