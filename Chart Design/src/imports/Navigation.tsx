import clsx from "clsx";
import imgRectangle317 from "figma:asset/70017910a949817aa1c11716388ee64b40b2eafa.png";
import svgPaths from "./svg-x6khacn2bd";
import imgRgbLogoLightNoBg011 from "figma:asset/075bbb506441a856a1e405929db479bd96aedcb0.png";
import imgDarkModeIconCryptohopper from "figma:asset/f1841337e214c3907e27f0e01bfbc7696f6af6d9.png";

function IconBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[12.5%]">
      <div className="absolute inset-[-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <g id="icon">{children}</g>
        </svg>
      </div>
    </div>
  );
}

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[16.67%_12.5%]">
      <div className="absolute inset-[-3.13%_-2.78%_-3.12%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 17">
          <g id="icon">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type DarkModeUpperBarDefaultBackgroundImage1Props = {
  additionalClassNames?: string;
};

function DarkModeUpperBarDefaultBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<DarkModeUpperBarDefaultBackgroundImage1Props>) {
  return (
    <div className={clsx("absolute overflow-clip size-[24px] top-[8px]", additionalClassNames)}>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}
type RulerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function RulerBackgroundImage1({ additionalClassNames = "" }: RulerBackgroundImage1Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="-rotate-45 flex-none h-[3.494px] w-[0.873px]">
        <div className="bg-[#4dcfe1] rounded-[1px] size-full" />
      </div>
    </div>
  );
}
type RulerBackgroundImageProps = {
  additionalClassNames?: string;
};

function RulerBackgroundImage({ additionalClassNames = "" }: RulerBackgroundImageProps) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="-rotate-45 flex-none h-[2.62px] w-[0.873px]">
        <div className="bg-[#4dcfe1] rounded-[1px] size-full" />
      </div>
    </div>
  );
}
type ChartPriceBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ChartPriceBackgroundImageAndText({ text, additionalClassNames = "" }: ChartPriceBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[19px] left-[1304px] w-[64px]", additionalClassNames)}>
      <div className="absolute bg-[#4dcfe1] inset-0" data-name="card_bg" />
      <div className="absolute bg-black inset-[47.37%_93.75%_47.37%_0]" data-name="indicator_line" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[10.53%_17.19%_10.53%_12.5%] leading-[normal] not-italic text-[12px] text-black whitespace-nowrap">{text}</p>
    </div>
  );
}
type ChartLayoutBackgroundImageProps = {
  additionalClassNames?: string;
};

function ChartLayoutBackgroundImage({ additionalClassNames = "" }: ChartLayoutBackgroundImageProps) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-px items-center justify-center left-0 w-[1352px]", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-[rgba(107,106,159,0.3)] h-[1352px] w-px" data-name="line_chart" />
      </div>
    </div>
  );
}
type DarkModeFooterBarTimeframeItemBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function DarkModeFooterBarTimeframeItemBackgroundImageAndText({ text, additionalClassNames = "" }: DarkModeFooterBarTimeframeItemBackgroundImageAndTextProps) {
  return (
    <div className={clsx("content-stretch flex items-center px-[8px] py-[6px] relative rounded-[6px] shrink-0", additionalClassNames)}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#bab8e3] text-[12px] text-right whitespace-nowrap">{text}</p>
    </div>
  );
}
type DarkModeExchangeDescriptionCoordinatesBackgroundImageProps = {
  text: string;
  text1: string;
};

function DarkModeExchangeDescriptionCoordinatesBackgroundImage({ text, text1 }: DarkModeExchangeDescriptionCoordinatesBackgroundImageProps) {
  return (
    <div className="content-stretch flex gap-[2px] items-center leading-[normal] relative shrink-0 whitespace-nowrap">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] relative shrink-0 text-[#bab8e3]">{text}</p>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] relative shrink-0 text-[#e17367]">{text1}</p>
    </div>
  );
}
type DarkModeExchangeDescriptionBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function DarkModeExchangeDescriptionBackgroundImageAndText({ text, additionalClassNames = "" }: DarkModeExchangeDescriptionBackgroundImageAndTextProps) {
  return (
    <p className={clsx("relative shrink-0 text-[#bab8e3]", additionalClassNames)}>
      <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{text}</span>
      <span className="leading-[normal]">{` `}</span>
    </p>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="-rotate-90 flex-none h-px w-[24px]">
        <div className="bg-[rgba(107,106,159,0.3)] rounded-[6px] size-full" data-name="divider" />
      </div>
    </div>
  );
}
type DarkModeUpperBarDefaultBackgroundImageProps = {
  additionalClassNames?: string;
};

function DarkModeUpperBarDefaultBackgroundImage({ additionalClassNames = "" }: DarkModeUpperBarDefaultBackgroundImageProps) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-[24px] items-center justify-center top-[8px] w-px", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-[rgba(107,106,159,0.3)] h-px rounded-[6px] w-[24px]" data-name="divider" />
      </div>
    </div>
  );
}

function MaskGroupBackgroundImage() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white left-[-3.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.5px_3.2px] mask-size-[20px_20px] size-[26px] top-[-3.2px]" style={{ maskImage: `url('${imgRectangle317}')` }} />
    </div>
  );
}

function PhotoBackgroundImage() {
  return (
    <div className="absolute left-0 size-[20px] top-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" fill="var(--fill-0, #076CDB)" id="photo" r="10" />
      </svg>
    </div>
  );
}

function LogoBitpanda({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[20px]"} data-name="logo/bitpanda">
      <PhotoBackgroundImage />
      <MaskGroupBackgroundImage />
    </div>
  );
}

function DateBlue({ className }: { className?: string }) {
  return (
    <div className={className || "h-[19px] relative w-[64px]"} data-name="date/blue">
      <div className="absolute bg-[#4dcfe1] content-stretch flex inset-0 items-center px-[7px] py-[2px] shadow-[0px_12px_14px_0px_rgba(32,30,66,0.5)]" data-name="date_cursor">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">10 Oct, 20</p>
      </div>
      <div className="absolute bottom-[78.95%] flex items-center justify-center left-[48.44%] right-1/2 top-0">
        <div className="-rotate-90 flex-none h-px w-[4px]">
          <div className="bg-black size-full" data-name="indicator" />
        </div>
      </div>
    </div>
  );
}

export default function Navigation() {
  return (
    <div className="bg-black relative size-full" data-name="Navigation">
      <div className="absolute h-[40px] left-[60px] top-[848px] w-[1368px]" data-name="dark_mode/footer_bar">
        <div className="absolute bg-black inset-0 rounded-[6px]" data-name="bg" />
        <div className="absolute contents inset-[32.5%_1.46%_30%_92.18%] leading-[normal] not-italic text-[12px] whitespace-nowrap" data-name="view">
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[32.5%_7.09%_30%_92.18%] text-[#bab8e3] text-right">%</p>
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[32.5%_4.31%_30%_94.52%] text-[#bab8e3]">log</p>
          <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[32.5%_1.46%_30%_97.3%] text-[#4dcfe1]">reg</p>
        </div>
        <BackgroundImage additionalClassNames="inset-[20%_9.28%_20%_90.64%]" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[32.5%_10.82%_30%_83.55%] leading-[normal] not-italic text-[#bab8e3] text-[12px] text-right whitespace-nowrap">12: 25: 50 (UTC)</p>
        <div className="absolute content-stretch flex gap-[16px] inset-[17.5%_69.96%_15%_0.66%] items-center" data-name="timeframes">
          <DarkModeFooterBarTimeframeItemBackgroundImageAndText text="1D" />
          <DarkModeFooterBarTimeframeItemBackgroundImageAndText text="5D" />
          <DarkModeFooterBarTimeframeItemBackgroundImageAndText text="1M" />
          <DarkModeFooterBarTimeframeItemBackgroundImageAndText text="3M" />
          <div className="bg-[#343261] content-stretch flex items-center px-[8px] py-[6px] relative rounded-[6px] shrink-0" data-name="timeframe_item">
            <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f3f3fc] text-[12px] text-right whitespace-nowrap">6M</p>
          </div>
          <DarkModeFooterBarTimeframeItemBackgroundImageAndText text="YTD" />
          <DarkModeFooterBarTimeframeItemBackgroundImageAndText text="1Y" additionalClassNames="bg-black" />
          <DarkModeFooterBarTimeframeItemBackgroundImageAndText text="5Y" />
          <DarkModeFooterBarTimeframeItemBackgroundImageAndText text="All" />
        </div>
      </div>
      <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
        <div className="absolute contents left-0 top-[739px]" data-name="time_line">
          <div className="absolute bg-black h-[33px] left-0 rounded-bl-[6px] rounded-br-[6px] top-[739px] w-[1368px]" data-name="timeline_bg" />
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1265px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">22</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1200px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">19</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1068px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">12</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1001px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">8</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[935px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">5</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1134px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">15</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[870px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">Oct</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[804px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">28</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[737px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">24</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[672px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">21</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[606px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">17</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[540px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">14</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[473px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">10</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[408px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">7</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[342px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">4</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[276px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">Sep</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[210px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">27</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[144px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">24</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[78px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">20</p>
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#7a83bb] text-[12px] text-center top-[749px] whitespace-nowrap">17</p>
        </div>
        <div className="absolute contents left-0 top-0" data-name="righst_side_bar">
          <div className="absolute contents left-0 top-0" data-name="price_bar">
            <div className="absolute bg-black h-[772px] left-[1303px] rounded-br-[6px] rounded-tr-[6px] top-0 w-[65px]" data-name="right_side_bar_bg" />
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[75px] whitespace-nowrap">13200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[40px] whitespace-nowrap">13400.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[145px] whitespace-nowrap">12800.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[110px] whitespace-nowrap">13000.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[215px] whitespace-nowrap">12400.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[180px] whitespace-nowrap">12600.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[285px] whitespace-nowrap">12000.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[250px] whitespace-nowrap">12200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[355px] whitespace-nowrap">11600.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[320px] whitespace-nowrap">11800.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[460px] whitespace-nowrap">11000.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[425px] whitespace-nowrap">11200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[390px] whitespace-nowrap">11400.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[530px] whitespace-nowrap">10600.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[495px] whitespace-nowrap">10800.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[600px] whitespace-nowrap">10200.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[565px] whitespace-nowrap">10400.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[635px] whitespace-nowrap">10000.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#7a83bb] text-[12px] top-[705px] whitespace-nowrap">9600.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#bab8e3] text-[12px] top-[670px] whitespace-nowrap">9800.00</p>
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#bab8e3] text-[12px] top-[5px] whitespace-nowrap">13600.00</p>
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[1303px] top-0 w-px" data-name="border_chart" />
            <div className="absolute flex h-px items-center justify-center left-0 top-[739px] w-[1368px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
              <div className="-rotate-90 flex-none">
                <div className="bg-[rgba(107,106,159,0.3)] h-[1368px] w-px" data-name="border_chart" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#4dcfe1] h-[32px] left-[325px] opacity-6 top-[740px] w-[826px]" data-name="bg" />
        <DateBlue className="absolute h-[19px] left-[1119px] top-[740px] w-[64px]" />
        <DateBlue className="absolute h-[19px] left-[293px] top-[740px] w-[64px]" />
        <div className="absolute h-[19px] left-[1304px] top-[247px] w-[64px]" data-name="price/green">
          <div className="absolute bg-[#4ac8b0] inset-0 shadow-[0px_12px_14px_0px_rgba(32,30,66,0.5)]" data-name="card_bg" />
          <div className="absolute bg-black inset-[47.37%_93.75%_47.37%_0]" data-name="indicator_line" />
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[10.53%_17.19%_10.53%_12.5%] leading-[normal] not-italic text-[12px] text-black whitespace-nowrap">10654.00</p>
        </div>
        <div className="absolute bg-[#2c2957] content-stretch flex items-center left-[1318px] px-[6px] py-[4px] rounded-[4px] top-[8px]" data-name="currency">
          <div aria-hidden="true" className="absolute border border-[#343261] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_12px_14px_0px_rgba(32,30,66,0.5)]" />
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f3f3fc] text-[12px] whitespace-nowrap">USD</p>
        </div>
        <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
          <div className="absolute contents left-[-4px] top-[-6px]" data-name="chart_layout">
            <div className="absolute bg-black h-[772px] left-0 rounded-[6px] top-0 w-[1368px]" data-name="chart_bg" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[11px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[77px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[143px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[275px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[341px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[473px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[539px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[671px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[737px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[803px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[935px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[1001px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[1133px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[1199px] top-0 w-px" data-name="line_chart" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[47px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[12px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[82px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[117px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[187px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[222px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[292px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[327px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[397px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[432px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[502px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[537px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[607px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[642px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[152px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[257px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[362px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[467px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[572px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[677px]" />
            <ChartLayoutBackgroundImage additionalClassNames="top-[712px]" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[209px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[407px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[605px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[869px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[1067px] top-0 w-px" data-name="line_chart" />
            <div className="absolute bg-[rgba(107,106,159,0.3)] h-[772px] left-[1265px] top-0 w-px" data-name="line_chart" />
            <div className="absolute contents left-[-4px] top-[-6px]" data-name="bars">
              <div className="absolute contents left-[-4px] top-[118px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[93px] left-[11px] top-[118px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[12px] top-[124px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[-4px] top-[203px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[29px] top-[99px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[70px] left-[44px] top-[99px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[29px] top-[120px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[45px] top-[139px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[62px] top-[-6px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[198px] left-[77px] top-[-6px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[62px] top-[137px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[78px] top-[52px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[95px] top-[35px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[280px] left-[110px] top-[35px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[95px] top-[54px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[111px] top-[232px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[161px] top-[356px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[207px] left-[176px] top-[356px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[161px] top-[489px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[177px] top-[419px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[194px] top-[384px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[243px] left-[209px] top-[384px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[194px] top-[417px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[210px] top-[522px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[227px] top-[461px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[121px] left-[242px] top-[461px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[227px] top-[524px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[243px] top-[489px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[260px] top-[432px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[191px] left-[275px] top-[432px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[260px] top-[492px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[276px] top-[449px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[293px] top-[420px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[220px] left-[308px] top-[420px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[293px] top-[449px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[309px] top-[575px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[458px] top-[412px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[131px] left-[473px] top-[412px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[458px] top-[459px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[474px] top-[502px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[524px] top-[291px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[112px] left-[539px] top-[291px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[524px] top-[382px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[540px] top-[341px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[557px] top-[233px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[151px] left-[572px] top-[233px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[557px] top-[341px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[573px] top-[276px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[656px] top-[202px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[106px] left-[671px] top-[202px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[656px] top-[280px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[672px] top-[239px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[590px] top-[246px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[107px] left-[605px] top-[246px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[590px] top-[276px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[606px] top-[280px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[623px] top-[250px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[81px] left-[638px] top-[250px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[623px] top-[277px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[639px] top-[282px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[689px] top-[235px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[118px] left-[704px] top-[235px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[689px] top-[237px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[705px] top-[296px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[722px] top-[268px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[251px] left-[737px] top-[268px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[722px] top-[298px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[738px] top-[474px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[755px] top-[415px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[76px] left-[770px] top-[415px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[755px] top-[472px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[771px] top-[429px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[788px] top-[425px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[142px] left-[803px] top-[425px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[788px] top-[432px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[804px] top-[538px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[854px] top-[347px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[73px] left-[869px] top-[347px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[854px] top-[359px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[870px] top-[377px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[887px] top-[327px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[62px] left-[902px] top-[327px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[887px] top-[375px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[903px] top-[363px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[920px] top-[334px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[81px] left-[935px] top-[334px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[920px] top-[363px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[936px] top-[343px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[986px] top-[308px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[88px] left-[1001px] top-[308px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[986px] top-[380px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[1002px] top-[317px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[1019px] top-[313px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[72px] left-[1034px] top-[313px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[1019px] top-[315px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[1035px] top-[343px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[1052px] top-[248px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[184px] left-[1067px] top-[248px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[1052px] top-[308px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[1068px] top-[365px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[1085px] top-[347px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[103px] left-[1100px] top-[347px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[1085px] top-[369px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[1101px] top-[378px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[1118px] top-[347px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[61px] left-[1133px] top-[347px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[1118px] top-[382px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[1134px] top-[389px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[1151px] top-[338px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[65px] left-[1166px] top-[338px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[1151px] top-[393px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[1167px] top-[346px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[1184px] top-[298px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[83px] left-[1199px] top-[298px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[1184px] top-[349px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[1200px] top-[304px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[1217px] top-[298px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[105px] left-[1232px] top-[298px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[1217px] top-[303px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[1233px] top-[370px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[1250px] top-[342px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[48px] left-[1265px] top-[342px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[1250px] top-[372px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[1266px] top-[346px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[1283px] top-[245px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[158px] left-[1298px] top-[245px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[1283px] top-[346px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[1299px] top-[256px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[953px] top-[248px]" data-name="bar">
                <div className="absolute bg-[#e17367] h-[152px] left-[968px] top-[248px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#e17367] h-px left-[953px] top-[343px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#e17367] h-px left-[969px] top-[376px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[821px] top-[338px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[214px] left-[836px] top-[338px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[821px] top-[536px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[837px] top-[356px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[326px] top-[497px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[120px] left-[341px] top-[497px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[326px] top-[573px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[342px] top-[537px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[359px] top-[444px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[99px] left-[374px] top-[444px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[359px] top-[540px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[375px] top-[497px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[491px] top-[345px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[190px] left-[506px] top-[345px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[491px] top-[500px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[507px] top-[379px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[392px] top-[471px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[76px] left-[407px] top-[471px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[392px] top-[499px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[408px] top-[480px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[425px] top-[447px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[72px] left-[440px] top-[447px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[425px] top-[477px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[441px] top-[461px] w-[15px]" data-name="horizontal_line" />
              </div>
              <div className="absolute contents left-[128px] top-[204px]" data-name="bar">
                <div className="absolute bg-[#4ac8b0] h-[349px] left-[143px] top-[204px] w-px" data-name="vertical_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[128px] top-[234px] w-[15px]" data-name="horizontal_line" />
                <div className="absolute bg-[#4ac8b0] h-px left-[144px] top-[489px] w-[15px]" data-name="horizontal_line" />
              </div>
            </div>
          </div>
          <div className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" data-name="dark_mode/logo_cryptohopper_extended">
            <div className="absolute contents left-[-1px] top-[-6px]" data-name="logo">
              <div className="absolute backdrop-blur-[13.199px] h-[40px] left-0 rounded-[20px] shadow-[28px_20px_90px_0px_rgba(23,18,43,0.7)] top-[-1px] w-[169px]" data-name="bg" style={{ backgroundImage: "linear-gradient(265.589deg, rgba(41, 37, 88, 0.537) 4.0555%, rgba(38, 35, 83, 0.867) 42.353%, rgba(40, 38, 89, 0.5) 99.53%)" }} />
              <div className="absolute h-[50.585px] left-[-1px] top-[-6px] w-[169px]" data-name="RGB_logo_light_no_bg-01 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRgbLogoLightNoBg011} />
              </div>
            </div>
          </div>
          <div className="absolute h-[59px] left-[18px] top-0 w-[586px]" data-name="dark_mode/exchange_description">
            <div className="absolute bg-black inset-[61.02%_71.84%_0_0]" data-name="description_figures">
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex gap-[12px] items-center relative">
                  <div className="bg-black content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="description">
                    <div aria-hidden="true" className="absolute border border-[#e17367] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e17367] text-[12px] whitespace-nowrap">134022.00</p>
                  </div>
                  <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7170a3] text-[12px] whitespace-nowrap">5.46</p>
                  <div className="bg-black content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0" data-name="description">
                    <div aria-hidden="true" className="absolute border border-[#4dcfe1] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4dcfe1] text-[12px] whitespace-nowrap">13407.46</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-black inset-[0_0_38.98%_0]" data-name="exchange_description">
              <div className="content-stretch flex gap-[16px] items-start py-[10px] relative">
                <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f3f3fc] text-[12px] whitespace-pre">{`Bitcoin  / U.S. Dollar  ·  1D  ·  COINBASE`}</p>
                <div className="relative shrink-0 size-[16px]" data-name="market_open">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <g id="market_open">
                      <circle cx="8" cy="8" fill="var(--fill-0, #52C9A4)" id="bg" opacity="0.2" r="8" />
                      <circle cx="8" cy="8" fill="var(--fill-0, #52C9A4)" id="dot" r="4" />
                    </g>
                  </svg>
                </div>
                <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-[12px]" data-name="coordinates">
                  <div className="content-stretch flex font-['Source_Sans_Pro:Regular',sans-serif] gap-[2px] items-center leading-[0] relative shrink-0" data-name="coordinates">
                    <DarkModeExchangeDescriptionBackgroundImageAndText text="O" additionalClassNames="whitespace-nowrap" />
                    <p className="relative shrink-0 text-[#e17367] whitespace-pre">
                      <span className="leading-[normal]">13065.10</span>
                      <span className="leading-[normal]">{`  `}</span>
                    </p>
                  </div>
                  <div className="content-stretch flex font-['Source_Sans_Pro:Regular',sans-serif] gap-[2px] items-center relative shrink-0 whitespace-nowrap" data-name="coordinates">
                    <DarkModeExchangeDescriptionBackgroundImageAndText text="H" additionalClassNames="leading-[0]" />
                    <p className="leading-[normal] relative shrink-0 text-[#e17367]">13480.00</p>
                  </div>
                  <DarkModeExchangeDescriptionCoordinatesBackgroundImage text="L" text1="13057.09" />
                  <DarkModeExchangeDescriptionCoordinatesBackgroundImage text="C" text1="13407.46" />
                </div>
                <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e17367] text-[12px] whitespace-pre">{`+340.73 (+2.61%)  `}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#4dcfe1] h-[383px] left-[1304px] opacity-6 top-[259px] w-[64px]" data-name="bg" />
        <ChartPriceBackgroundImageAndText text="10654.00" additionalClassNames="top-[249px]" />
        <ChartPriceBackgroundImageAndText text="10654.00" additionalClassNames="top-[632px]" />
      </div>
      <div className="absolute h-[836px] left-0 top-[64px] w-[48px]" data-name="dark_mode/tools_bar/tool">
        <div className="absolute bg-black inset-0 rounded-tr-[6px]" data-name="bg_tools" />
        <div className="absolute inset-[0_0_94.26%_0]" data-name="button/tool/cursor">
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/cursor_tool">
            <div className="absolute inset-[41.67%]" data-name="icon">
              <div className="absolute inset-[-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
                  <g id="icon">
                    <path d={svgPaths.p312e4100} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[11.48%_0_82.78%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/horizontal_line">
            <div className="absolute inset-[41.67%_8.33%]" data-name="icon">
              <div className="absolute inset-[-12.5%_-2.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 5">
                  <g id="icon">
                    <path d="M0.5 2.5L20.5 2.5" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1e2ea900} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[17.22%_0_77.03%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/fib_retracement">
            <div className="absolute inset-[20.83%_12.54%_21.24%_12.5%]" data-name="icon">
              <div className="absolute inset-[-3.6%_-2.78%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9898 14.9032">
                  <g id="icon">
                    <path d="M0.5 8.88704L18.4362 8.88704" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.5 4.69358L18.4362 4.69358" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.5 0.5L18.4362 0.5" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.5 13.0806L18.4362 13.0806" id="Vector_4" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p830500} fill="var(--fill-0, #343261)" id="Vector_5" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p2852f280} fill="var(--fill-0, #343261)" id="Vector_6" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[22.97%_0_71.29%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/fib_extension">
            <div className="absolute inset-[16.67%_12.5%_12.5%_16.67%]" data-name="icon">
              <div className="absolute inset-[-2.94%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0001 18">
                  <g id="icon">
                    <path d="M0.5 13.4523L17.5 13.4523" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3ed16360} id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p9817e60} id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.5 17.5L17.5 17.5" id="Vector_4" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p37eada00} fill="var(--fill-0, black)" id="Vector_5" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p184b5df0} fill="var(--fill-0, black)" id="Vector_6" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p9bdec80} fill="var(--fill-0, black)" id="Vector_7" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.04541 6.16662V7.78567" id="Vector 4" stroke="var(--stroke-0, #BAB8E3)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[28.71%_0_65.55%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/short_position">
            <IconBackgroundImage>
              <path d="M2.125 7.00004L18.375 15.125" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.5 7.00004L18.375 7.00004" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.5 2.12504L18.375 2.12504" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.5 15.125L18.375 15.125" id="Vector_4" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.peae880} fill="var(--fill-0, black)" id="Vector_5" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p3371f000} fill="var(--fill-0, black)" id="Vector_6" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p15376380} fill="var(--fill-0, black)" id="Vector_7" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p1230e400} fill="var(--fill-0, black)" id="Vector_8" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
            </IconBackgroundImage>
          </div>
        </div>
        <div className="absolute inset-[34.45%_0_59.81%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/long_position">
            <IconBackgroundImage>
              <path d={svgPaths.p310d7500} id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.5 10.25L18.375 10.25" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.5 2.12504L18.375 2.12504" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M0.5 15.125L18.375 15.125" id="Vector_4" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.peae880} fill="var(--fill-0, #2C2957)" id="Vector_5" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p18bdc560} fill="var(--fill-0, #2C2957)" id="Vector_6" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p15376380} fill="var(--fill-0, #2C2957)" id="Vector_7" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p201c4080} fill="var(--fill-0, #2C2957)" id="Vector_8" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
            </IconBackgroundImage>
          </div>
        </div>
        <div className="absolute inset-[40.19%_0_54.07%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/projection">
            <IconBackgroundImage1>
              <path d={svgPaths.p23cbed00} id="arc" stroke="var(--stroke-0, #BAB8E3)" />
              <path d={svgPaths.peae880} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p3af6a400} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p3bbd1e00} fill="var(--fill-0, black)" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
            </IconBackgroundImage1>
          </div>
        </div>
        <div className="absolute inset-[45.93%_0_48.33%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/date_&_price_range">
            <div className="absolute inset-[12.5%_8.33%_8.33%_12.5%]" data-name="icon">
              <div className="absolute inset-[-2.63%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="icon">
                    <rect fill="var(--fill-0, black)" height="17" id="Rectangle 33" rx="0.5" stroke="var(--stroke-0, #BAB8E3)" width="17" x="1.5" y="1.5" />
                    <g id="arrows">
                      <g id="Vector">
                        <path d={svgPaths.p19bebd80} fill="black" />
                        <path d={svgPaths.pb09f380} stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <g id="Vector_2">
                        <path d="M8.5 5.125L10 3.5L11.5 5.125" fill="black" />
                        <path d={svgPaths.pd25d700} stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </g>
                    <path d={svgPaths.p1b49b1f0} fill="var(--fill-0, black)" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3302e140} fill="var(--fill-0, black)" id="Vector_4" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[51.67%_0_42.58%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/channel">
            <div className="absolute contents inset-[4.66%_7.31%_6.82%_4.17%]" data-name="icon">
              <div className="absolute flex inset-[31.18%_16.15%_17.45%_32.49%] items-center justify-center">
                <div className="-rotate-45 flex-none h-[2.997px] w-[14.437px]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-16.69%_-3.46%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4375 3.99654">
                        <g id="Group 34">
                          <path d="M0.5 1.82142L14.9375 1.82142" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d={svgPaths.p23ab5e00} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[4.66%_24.99%_24.5%_4.17%] items-center justify-center">
                <div className="-rotate-45 flex-none h-[2.997px] w-[21.047px]">
                  <div className="relative size-full">
                    <div className="absolute inset-[-16.69%_-2.38%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0469 3.99654">
                        <g id="Group 35">
                          <path d="M2.30471 2.33125H20.1702" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d={svgPaths.p1a23180} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d={svgPaths.p233f1f80} fill="var(--fill-0, black)" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[57.42%_0_36.84%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/type">
            <div className="absolute inset-[20.83%]" data-name="icon">
              <div className="absolute inset-[-3.57%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <g id="icon">
                    <path d="M0.5 3.125V0.5H14.5V3.125" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.875 14.5H10.125" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 0.5V14.5" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[65.19%_0_29.07%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute bg-[#343261] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
          <div className="absolute inset-1/4" data-name="icons/ruler">
            <div className="absolute contents inset-[8.34%_4.16%_4.16%_8.34%]" data-name="ruler">
              <div className="absolute flex inset-[8.34%_4.16%_4.16%_8.34%] items-center justify-center">
                <div className="-rotate-45 flex-none h-[6.988px] w-[22.711px]">
                  <div className="relative rounded-[0.3px] size-full">
                    <div aria-hidden="true" className="absolute border border-[#4dcfe1] border-solid inset-[-0.5px] pointer-events-none rounded-[0.8px]" />
                  </div>
                </div>
              </div>
              <RulerBackgroundImage additionalClassNames="inset-[64.95%_73.65%_24.75%_16.06%]" />
              <RulerBackgroundImage1 additionalClassNames="inset-[57.23%_63.36%_29.9%_23.77%]" />
              <RulerBackgroundImage1 additionalClassNames="inset-[41.79%_47.92%_45.34%_39.22%]" />
              <RulerBackgroundImage1 additionalClassNames="inset-[26.35%_32.48%_60.78%_54.66%]" />
              <RulerBackgroundImage additionalClassNames="inset-[49.51%_58.21%_40.2%_31.5%]" />
              <RulerBackgroundImage additionalClassNames="inset-[34.07%_42.77%_55.64%_46.94%]" />
              <RulerBackgroundImage additionalClassNames="inset-[18.63%_27.33%_71.08%_62.38%]" />
            </div>
          </div>
        </div>
        <div className="absolute inset-[70.93%_0_23.33%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/zoom_in">
            <IconBackgroundImage1>
              <path d={svgPaths.p1ac4f00} id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.5 18.5L11.8684 11.8684" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              <g id="Group 40">
                <path d="M7.13171 4.28943V9.97364" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.28955 7.13159H9.97376" id="Vector_4" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </IconBackgroundImage1>
          </div>
        </div>
        <div className="absolute inset-[78.71%_0_15.55%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/remove_large">
            <div className="absolute inset-[12.5%_16.67%]" data-name="bin">
              <div className="absolute inset-[-2.78%_-3.13%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
                  <g id="bin">
                    <path d="M0.5 4.09998H2.27778H16.5" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1e289c80} id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.7222 8.6001V14.0001" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.2778 8.6001V14.0001" id="Vector_4" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[5.74%_0_88.52%_0]" data-name="button/tool/default">
          <div className="absolute bg-black inset-0 rounded-tr-[6px]" data-name="tool_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/trend_line">
            <div className="absolute inset-[16.67%_12.5%_12.5%_16.67%]" data-name="line">
              <div className="absolute inset-[-2.94%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <g id="line">
                    <path d={svgPaths.p10769600} id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p6353880} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p263d7500} fill="var(--fill-0, black)" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-[rgba(107,106,159,0.3)] inset-[64.11%_16.67%_35.77%_16.67%] rounded-[6px]" data-name="divider" />
        <div className="absolute bg-[rgba(107,106,159,0.3)] inset-[77.63%_16.67%_22.25%_16.67%] rounded-[6px]" data-name="divider" />
      </div>
      <div className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" data-name="dark_mode/upper_bar/default">
        <div className="absolute bg-black inset-0 rounded-[6px]" data-name="bg" />
        <div className="absolute inset-[15%_0.44%_15%_95.03%]" data-name="button/tertiary/default">
          <div className="absolute bg-[#343261] h-[28px] left-0 opacity-80 right-0 rounded-[4px] top-0" data-name="bg" />
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[#4dcfe1] text-[14px] text-center top-[calc(50%-9px)] whitespace-nowrap">Sign Up</p>
        </div>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_6.21%_27.5%_91.15%] leading-[normal] not-italic text-[#f3f3fc] text-[14px] whitespace-nowrap">Log In</p>
        <DarkModeUpperBarDefaultBackgroundImage additionalClassNames="left-[930px]" />
        <div className="absolute contents left-[850px] top-0" data-name="undo_redo">
          <div className="absolute bg-black inset-[0_31.14%_0_62.13%]" data-name="bg" />
          <DarkModeUpperBarDefaultBackgroundImage1 additionalClassNames="left-[902px]">
            <path d={svgPaths.p3325e520} id="Vector" opacity="0.4" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
          </DarkModeUpperBarDefaultBackgroundImage1>
          <DarkModeUpperBarDefaultBackgroundImage1 additionalClassNames="left-[866px]">
            <path d={svgPaths.p2c236e10} id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
          </DarkModeUpperBarDefaultBackgroundImage1>
        </div>
        <DarkModeUpperBarDefaultBackgroundImage additionalClassNames="left-[942px]" />
        <div className="absolute contents left-[943px] top-0" data-name="save">
          <div className="absolute bg-black inset-[0_22.59%_0_68.93%]" data-name="bg" />
          <p className="-translate-x-full absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1018px] not-italic text-[#bab8e3] text-[14px] text-right top-[11px] whitespace-nowrap">Save</p>
          <div className="absolute left-[1019px] overflow-clip size-[24px] top-[8px]" data-name="icons/small_chevron/down">
            <div className="absolute inset-[45.83%_37.5%_41.67%_37.5%]" data-name="Vector">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
                  <path d="M0.5 0.5L3.5 3.5L6.5 0.5" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute left-[959px] size-[24px] top-[8px]" data-name="icons/save">
            <div className="absolute inset-[20.83%_11.1%_16.68%_12.5%]" data-name="cloud">
              <div className="absolute inset-[-3.33%_-2.73%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.335 15.9979">
                  <g id="cloud">
                    <path d={svgPaths.pddfdb80} id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.67114 7.99792V15.4979" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p7426d70} id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.pddfdb80} id="Vector_4" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <DarkModeUpperBarDefaultBackgroundImage additionalClassNames="left-[1059px]" />
        <div className="absolute h-[40px] left-[1060px] top-0 w-[56px]" data-name="button/menu/default">
          <div className="absolute bg-black inset-0" data-name="bg_instrument" />
          <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/fullscreen">
            <div className="absolute inset-[16.67%]" data-name="Vector">
              <div className="absolute inset-[-3.13%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                  <path d={svgPaths.p37c74100} id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <DarkModeUpperBarDefaultBackgroundImage additionalClassNames="left-[1116px]" />
        <div className="absolute h-[40px] left-[1117px] top-0 w-[56px]" data-name="button/menu/default">
          <div className="absolute bg-black inset-0" data-name="bg_instrument" />
          <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/share">
            <div className="absolute inset-[12.5%_20.83%_16.67%_20.83%]" data-name="icon">
              <div className="absolute inset-[-2.94%_-3.57%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
                  <g id="icon">
                    <path d={svgPaths.p38f49c00} id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <g id="arrow">
                      <path d={svgPaths.p3118900} id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.49994 0.5V11.55" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <DarkModeUpperBarDefaultBackgroundImage additionalClassNames="left-[1173px]" />
        <div className="absolute h-[40px] left-[1174px] top-0 w-[56px]" data-name="button/menu/default">
          <div className="absolute bg-black inset-0" data-name="bg_instrument" />
          <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/light_mode">
            <div className="absolute inset-[8.33%]" data-name="icon">
              <div className="absolute inset-[-2.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0001 21">
                  <g id="icon">
                    <path d={svgPaths.p10882d00} id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.5 0.5V2.31818" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.5 18.6818V20.5" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p31fa9e00} id="Vector_4" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3e35380} id="Vector_5" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.5 10.5H2.31818" id="Vector_6" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.6819 10.5H20.5001" id="Vector_7" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.pf80180} id="Vector_8" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p165d3880} id="Vector_9" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <DarkModeUpperBarDefaultBackgroundImage additionalClassNames="left-[1230px]" />
        <div className="absolute bottom-full contents left-0 right-full top-0" data-name="button" />
        <div className="absolute contents inset-[0_66.74%_0_1.46%]" data-name="left_side">
          <BackgroundImage additionalClassNames="inset-[20%_66.74%_20%_33.19%]" />
          <BackgroundImage additionalClassNames="inset-[20%_83.63%_20%_16.3%]" />
          <BackgroundImage additionalClassNames="inset-[20%_90.57%_20%_9.36%]" />
          <BackgroundImage additionalClassNames="inset-[20%_79.9%_20%_20.03%]" />
          <BackgroundImage additionalClassNames="inset-[20%_70.91%_20%_29.02%]" />
          <div className="absolute contents inset-[27.5%_85.16%_27.5%_10.89%]" data-name="exchange">
            <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] inset-[27.5%_85.16%_27.5%_10.89%] leading-[normal] not-italic text-[#bab8e3] text-[14px] uppercase whitespace-nowrap">BTC/USD</p>
          </div>
          <div className="absolute contents inset-[27.5%_81.43%_27.5%_17.84%]" data-name="days">
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_81.43%_27.5%_17.84%] leading-[normal] not-italic text-[#bab8e3] text-[14px]">D</p>
          </div>
          <div className="absolute contents inset-[20%_72.44%_20%_21.05%]" data-name="Indicators">
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_72.44%_27.5%_23.25%] leading-[normal] not-italic text-[#bab8e3] text-[14px] whitespace-nowrap">Indicators</p>
            <div className="absolute inset-[20%_77.19%_20%_21.05%] overflow-clip" data-name="icons/indicators">
              <div className="absolute inset-[20.83%_29.17%]" data-name="icon">
                <div className="absolute inset-[-3.57%_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 15">
                    <g id="icon">
                      <path d="M10.5 14.5V5.59089" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.5 14.3586V0.5" id="Vector_2" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M0.5 14.3586V9.40911" id="Vector_3" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-[0_66.81%_0_29.09%]" data-name="candles">
            <div className="absolute bg-black inset-0" data-name="bg_instrument" />
            <div className="absolute inset-[20%_28.57%] overflow-clip" data-name="icons/candles">
              <div className="absolute bottom-[12.5%] contents left-1/4 right-1/4 top-[16.67%]" data-name="candles">
                <div className="absolute bottom-[12.5%] left-1/4 right-[58.33%] top-[16.67%]" data-name="2_candle">
                  <div className="absolute inset-[-2.94%_-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 18">
                      <g id="2_candle">
                        <path d="M2.49979 17.5V0.5" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                        <rect fill="var(--fill-0, black)" height="11.3333" id="Rectangle 34" stroke="var(--stroke-0, #BAB8E3)" width="4" x="0.5" y="3.33329" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[20.83%] left-[58.33%] right-1/4 top-[20.83%]" data-name="1_candle">
                  <div className="absolute inset-[-3.57%_-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 15">
                      <g id="1_candle">
                        <path d="M2.50006 14.5V0.5" id="Vector" stroke="var(--stroke-0, #BAB8E3)" strokeLinecap="round" strokeLinejoin="round" />
                        <rect fill="var(--fill-0, black)" height="8.4" id="Rectangle 35" stroke="var(--stroke-0, #BAB8E3)" width="4" x="0.5" y="3.29997" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-1/4 contents left-[1.46%] right-[92.11%] top-1/4" data-name="market">
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[27.5%_92.11%_27.5%_3.51%] leading-[normal] not-italic text-[#bab8e3] text-[14px] uppercase whitespace-nowrap">Bitpanda</p>
            <div className="absolute left-[20px] size-[20px] top-[10px]" data-name="dark/logo/bitpanda">
              <PhotoBackgroundImage />
              <MaskGroupBackgroundImage />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[11px] size-[26px] top-[19px]" data-name="dark_mode/icon_cryptohopper">
        <div className="absolute flex inset-[7.69%_1.15%_2.07%_3.85%] items-center justify-center">
          <div className="-rotate-11 flex-none h-[19.756px] w-[21.323px]">
            <div className="relative size-full" data-name="Oval 7">
              <div className="absolute inset-[-129.92%_-120.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.6592 71.0926">
                  <g filter="url(#filter0_f_44_11475)" id="Oval 7">
                    <ellipse cx="36.3296" cy="35.5463" fill="url(#paint0_linear_44_11475)" rx="10.6615" ry="9.8782" />
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="71.0926" id="filter0_f_44_11475" width="72.6592" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_44_11475" stdDeviation="12.834" />
                    </filter>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_44_11475" x1="37.4647" x2="49.0217" y1="51.1547" y2="40.4034">
                      <stop stopColor="#62CBFF" stopOpacity="0.01" />
                      <stop offset="1" stopColor="#339CFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDarkModeIconCryptohopper} />
      </div>
      <div className="absolute left-[1305px] size-[40px] top-[745px]" data-name="button/round/default">
        <div className="absolute inset-[-80%_-102.5%_-120%_-97.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
            <g filter="url(#filter0_d_44_11467)" id="round_bg">
              <circle cx="59" cy="52" fill="var(--fill-0, #6F6C99)" fillOpacity="0.2" r="20" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="120" id="filter0_d_44_11467" width="120" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="1" dy="8" />
                <feGaussianBlur stdDeviation="20" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0.12 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_44_11467" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_44_11467" mode="normal" result="shape" />
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
                    <path d="M0.5 0.5L5.5 5.5L10.5 0.5" id="Vector" stroke="var(--stroke-0, #A5A1DC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[385px] top-[267px]" data-name="date&price_range">
        <div className="absolute bg-[rgba(77,207,225,0.16)] h-[384px] left-[385px] opacity-50 top-[323px] w-[826px]" data-name="field" />
        <div className="absolute flex h-0 items-center justify-center left-[385px] top-[515px] w-[825px]">
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[825px]">
              <div className="absolute inset-[-3.68px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 825.5 7.36396">
                  <path d={svgPaths.p1c133b00} fill="var(--stroke-0, #4DCFE1)" id="Vector 15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[381.5px] items-center justify-center left-[798px] top-[324px] w-0">
          <div className="-scale-y-100 flex-none">
            <div className="h-[381.5px] relative w-0">
              <div className="absolute inset-[0_-3.68px_-0.13%_-3.68px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.36396 382">
                  <path d={svgPaths.p18e60100} fill="var(--stroke-0, #4DCFE1)" id="Vector 14" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[11px] content-stretch flex items-center left-[727px] px-[10px] py-[4px] rounded-[4px] top-[267px]" data-name="label" style={{ backgroundImage: "linear-gradient(266.604deg, rgba(41, 37, 88, 0.537) 4.0555%, rgba(38, 35, 83, 0.867) 42.353%, rgba(40, 38, 89, 0.5) 99.53%)" }}>
          <div aria-hidden="true" className="absolute border border-[#4dcfe1] border-solid inset-[-0.5px] pointer-events-none rounded-[4.5px] shadow-[-10px_30px_80px_0px_rgba(23,18,43,0.5)]" />
          <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#4dcfe1] text-[12px] text-center whitespace-nowrap">
            <p className="mb-0">-196.94 (-41.71%) -19694</p>
            <p>90 bars, 28d</p>
          </div>
        </div>
      </div>
    </div>
  );
}