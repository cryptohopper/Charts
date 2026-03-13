import clsx from "clsx";
import svgPaths from "./svg-d7mp0ep7d7";
import imgIconCryptohopper from "figma:asset/f1841337e214c3907e27f0e01bfbc7696f6af6d9.png";
import imgRectangle317 from "figma:asset/70017910a949817aa1c11716388ee64b40b2eafa.png";
import imgRgbLogoDarkNoBg011 from "figma:asset/bfb3fe6da9e88a568cbf5fd07d74cee065bbcbc3.png";
import imgColor from "figma:asset/7658e7e9a7ed0c1c3dd735be9be8e1932aae9269.png";
import imgOpacityScale from "figma:asset/96620d5081eb1173faf51622afd13844ad334d90.png";
type BackgroundImage16Props = {
  additionalClassNames?: string;
};

function BackgroundImage16({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage16Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        {children}
      </svg>
    </div>
  );
}

function SettingsBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents left-[15px] top-[60px]">
      <DropdownFontSizeDefaultBackgroundImageAndText text="14" />
      <DropdownColorDefaultBackgroundImage />
      <div className="absolute left-[calc(50%-4px)] size-[32px] top-[60px]" data-name="button/text_style/active">
        <div className="absolute flex inset-0 items-center justify-center">
          <div className="-rotate-90 flex-none size-[32px]">
            <div className="border border-[#efeff4] border-solid rounded-[4px] size-full" data-name="box" />
          </div>
        </div>
        <div className="absolute inset-[12.5%] overflow-clip" data-name="icons/italic">
          {children}
        </div>
      </div>
      <ButtonTextStyleDefault className="absolute left-[calc(33.33%+12.33px)] size-[32px] top-[60px]" />
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
type BackgroundImage15Props = {
  additionalClassNames?: string;
};

function BackgroundImage15({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage15Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13.0003">
        <g id="icon">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage14({ children }: React.PropsWithChildren<{}>) {
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

function BackgroundImage13({ children }: React.PropsWithChildren<{}>) {
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

function BackgroundImage12({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[20.83%]">
      <div className="absolute inset-[-3.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g id="icon">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute bg-white h-[28px] left-0 right-0 top-0" data-name="bg" />
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-1/2 not-italic text-[#1f1f1f] text-[14px] text-center top-[calc(50%-10px)] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextFontSizeBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextFontSizeBackgroundImageAndText({ text, additionalClassNames = "" }: TextFontSizeBackgroundImageAndTextProps) {
  return <BackgroundImageAndText1 text={text} additionalClassNames={clsx("absolute left-[1.61%] right-[1.61%]", additionalClassNames)} />;
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
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] py-[8px] rounded-[3px] top-[327px]", additionalClassNames)}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{text}</p>
    </div>
  );
}
type TooltipBackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TooltipBackgroundImageAndText1({ text, additionalClassNames = "" }: TooltipBackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] py-[8px] rounded-[3px] top-[328px]", additionalClassNames)}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImage11Props = {
  additionalClassNames?: string;
};

function BackgroundImage11({ additionalClassNames = "" }: BackgroundImage11Props) {
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
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">{text}</p>
    </div>
  );
}
type LockBackgroundImageProps = {
  additionalClassNames?: string;
};

function LockBackgroundImage({ additionalClassNames = "" }: LockBackgroundImageProps) {
  return (
    <div className={clsx("h-[38px] w-[56px]", additionalClassNames)}>
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="absolute bg-[rgba(0,177,199,0.1)] inset-[10.53%_21.43%] rounded-[4px]" data-name="selected_bg" />
      <div className="absolute inset-[18.42%_28.57%] overflow-clip" data-name="icons/lock">
        <IconBackgroundImage1 />
      </div>
    </div>
  );
}
type MenuItemFontSizeDefaultBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function MenuItemFontSizeDefaultBackgroundImageAndText({ text, additionalClassNames = "" }: MenuItemFontSizeDefaultBackgroundImageAndTextProps) {
  return (
    <div className="h-[38px] relative shrink-0 w-[62px]">
      <IconsSmallChevronDownBackgroundImage additionalClassNames="inset-[18.42%_3.23%_18.42%_58.06%]" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[23.68%_51.61%_23.68%_25.81%] leading-[20px] not-italic text-[14px] text-black whitespace-nowrap">{text}</p>
    </div>
  );
}

function MenuItemLineColorBackgroundImage() {
  return (
    <div className="h-[38px] relative shrink-0 w-[48px]">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="absolute bg-[#3e3e3e] bottom-1/2 left-1/4 right-1/4 rounded-[6px] top-[47.37%]" data-name="thickness" />
      <div className="absolute bg-[#babac1] bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" />
    </div>
  );
}

function BackgroundImage10() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-[32px] items-center justify-center relative shrink-0 w-px">
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-px rounded-[6px] w-[32px]" data-name="divider" />
      </div>
    </div>
  );
}
type BackgroundImage9Props = {
  additionalClassNames?: string;
};

function BackgroundImage9({ additionalClassNames = "" }: BackgroundImage9Props) {
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
type BackgroundImage8Props = {
  additionalClassNames?: string;
};

function BackgroundImage8({ additionalClassNames = "" }: BackgroundImage8Props) {
  return <BackgroundImage9 additionalClassNames={clsx("absolute bottom-3/4 top-[16.67%]", additionalClassNames)} />;
}
type VectorBackgroundImage1Props = {
  additionalClassNames?: string;
};

function VectorBackgroundImage1({ additionalClassNames = "" }: VectorBackgroundImage1Props) {
  return <BackgroundImage9 additionalClassNames={clsx("absolute bottom-[16.67%] top-3/4", additionalClassNames)} />;
}

function IconsDragBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <BackgroundImage9 additionalClassNames="absolute inset-[45.83%_58.33%_45.83%_33.33%]" />
      <BackgroundImage8 additionalClassNames="left-[33.33%] right-[58.33%]" />
      <VectorBackgroundImage1 additionalClassNames="left-[33.33%] right-[58.33%]" />
      <BackgroundImage9 additionalClassNames="absolute inset-[45.83%_33.33%_45.83%_58.33%]" />
      <BackgroundImage8 additionalClassNames="left-[58.33%] right-[33.33%]" />
      <VectorBackgroundImage1 additionalClassNames="left-[58.33%] right-[33.33%]" />
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage14>
      <g id="icon">
        <path d={svgPaths.pbbda80} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p6a25a00} id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </BackgroundImage14>
  );
}
type TextContainerBackgroundImageProps = {
  additionalClassNames?: string;
};

function TextContainerBackgroundImage({ additionalClassNames = "" }: TextContainerBackgroundImageProps) {
  return (
    <div className="absolute contents left-[calc(11.11%+57px)] top-[214px]">
      <TextContainerBackgroundImageAndText text="the lazy dog." />
      <MarkerBackgroundImage additionalClassNames="left-[calc(16.67%+76px)] top-[262px]" />
      <MarkerBackgroundImage additionalClassNames="left-[calc(27.78%+18px)] top-[236px]" />
    </div>
  );
}
type TextContainerBackgroundImageAndTextProps = {
  text: string;
};

function TextContainerBackgroundImageAndText({ text }: TextContainerBackgroundImageAndTextProps) {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[calc(11.11%+57px)] p-[8px] rounded-[4px] top-[214px]">
      <div aria-hidden="true" className="absolute border border-[#babac1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`The quick brown fox jumps over `}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
type BackgroundImage7Props = {
  additionalClassNames?: string;
};

function BackgroundImage7({ additionalClassNames = "" }: BackgroundImage7Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex items-center justify-center size-[32px]", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-white border border-[#efeff4] border-solid rounded-[4px] size-[32px]" data-name="box" />
      </div>
    </div>
  );
}

function CheckboxesBackgroundImage() {
  return (
    <div className="absolute contents left-[15px] top-[264px]">
      <BackgroundBackgroundImageAndText text="Background" />
      <div className="absolute contents left-[15px] top-[316px]">
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[322px] whitespace-nowrap">{"Border"}</p>
        <div className="absolute left-[calc(50%+12px)] size-[32px] top-[316px]" data-name="dropdown/color/default">
          <BackgroundImage />
          <div className="absolute bg-[#babac1] inset-[12.5%] rounded-[4px]" data-name="color" />
        </div>
        <CheckboxLChecked className="absolute left-[15px] size-[24px] top-[320px]" />
      </div>
      <TextWrapBackgroundImageAndText text="Text Wrap" />
    </div>
  );
}
type CursorDateBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function CursorDateBackgroundImageAndText({ text, additionalClassNames = "" }: CursorDateBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[calc(16.67%+48px)] top-[804px]">
      <div className="absolute bg-[#00b1c7] h-[19px] left-[calc(16.67%+48px)] top-[804px] w-[65px]" data-name="card_bg" />
      <BackgroundImage4 additionalClassNames="left-[calc(16.67%+80px)] top-[804px]" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(16.67%+55px)] not-italic text-[12px] text-white top-[806px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function RighstSideBarBackgroundImage() {
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
        <BackgroundImage5 />
        <PriceLowBackgroundImageAndText text="12820.00" />
      </div>
      <CurrencyBackgroundImageAndText text="USD" />
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
type TypeHereBackgroundImageAndTextProps = {
  text: string;
};

function TypeHereBackgroundImageAndText({ text }: TypeHereBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[15px] top-[112px]">
      <div className="absolute bg-white border border-[#efeff4] border-solid h-[132px] left-[15px] rounded-[4px] top-[112px] w-[320px]" data-name="input" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[27px] not-italic text-[#1f1f1f] text-[14px] top-[122px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextWrapBackgroundImageAndTextProps = {
  text: string;
};

function TextWrapBackgroundImageAndText({ text }: TextWrapBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[15px] top-[372px]">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[374px] whitespace-nowrap">{text}</p>
      <CheckboxLChecked className="absolute left-[15px] size-[24px] top-[372px]" />
    </div>
  );
}
type BackgroundBackgroundImageAndTextProps = {
  text: string;
};

function BackgroundBackgroundImageAndText({ text }: BackgroundBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[15px] top-[264px]">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[270px] whitespace-nowrap">{text}</p>
      <CheckboxLUnchecked className="absolute left-[15px] size-[24px] top-[268px]" />
      <div className="absolute left-[calc(50%+12px)] size-[32px] top-[264px]" data-name="dropdown/color/disabled">
        <BackgroundImage />
        <div className="absolute bg-[#00b1c7] inset-[12.5%] rounded-[4px]" data-name="color" />
        <BackgroundImage3 />
      </div>
    </div>
  );
}
type PriceLowBackgroundImageAndTextProps = {
  text: string;
};

function PriceLowBackgroundImageAndText({ text }: PriceLowBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[1304px] top-[141px]">
      <div className="absolute bg-[#00b1c7] h-[19px] left-[1304px] top-[141px] w-[64px]" data-name="card_bg" />
      <div className="absolute bg-white h-px left-[1304px] top-[150px] w-[4px]" data-name="indicator_line" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[143px] whitespace-nowrap">{text}</p>
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
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0" data-name="tool_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/projection">
              <BackgroundImage13>
                <path d={svgPaths.p23cbed00} id="arc" stroke="var(--stroke-0, #1F1F1F)" />
                <path d={svgPaths.peae880} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p3af6a400} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p3bbd1e00} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage13>
            </div>
          </div>
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0" data-name="tool_bg" />
            <div className="absolute bg-[#dcf5f7] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/type">
              <BackgroundImage12>
                <path d="M0.5 3.125V0.5H14.5V3.125" id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.875 14.5H10.125" id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 0.5V14.5" id="Vector_3" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage12>
            </div>
          </div>
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

function ExchangeDescriptionBackgroundImage() {
  return (
    <div className="absolute contents left-[18px] top-0">
      <div className="absolute bg-white content-stretch flex gap-[12px] items-center left-[18px] top-[36px]">
        <div className="bg-white content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#f26d60] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f26d60] text-[12px] whitespace-nowrap">{"134022.00"}</p>
        </div>
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap">{"5.46"}</p>
        <div className="bg-white content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#00b1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00b1c7] text-[12px] whitespace-nowrap">{"13407.46"}</p>
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
          <span className="leading-[normal] text-[#f26d60]">{"13065.10"}</span>
          <span className="leading-[normal]">{`   `}</span>
          <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{"H"}</span>
          <span className="leading-[normal]">{` `}</span>
          <span className="leading-[normal] text-[#f26d60]">{"13480.00"}</span>
          <span className="leading-[normal]">{`  `}</span>
          <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{"L"}</span>
          <span className="leading-[normal]">{` `}</span>
          <span className="leading-[normal] text-[#f26d60]">{"13057.09"}</span>
          <span className="leading-[normal]">{`  `}</span>
          <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{`C `}</span>
          <span className="leading-[normal] text-[#f26d60]">{"13407.46"}</span>
          <span className="leading-[normal]">{`     `}</span>
        </p>
        <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f26d60] text-[12px] whitespace-pre">{`+340.73 (+2.61%)  `}</p>
      </div>
    </div>
  );
}

function ChartItemsBackgroundImage() {
  return (
    <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]">
      <ChartLayoutBackgroundImage />
      <CandleStickChartBackgroundImage />
      <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
    </div>
  );
}

function CandleStickChartBackgroundImage() {
  return (
    <div className="absolute contents left-[3px] top-0">
      <div className="absolute contents left-[135px] top-[485px]">
        <div className="absolute bg-[#f26d60] h-[8px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#f26d60] h-[39px] left-[143px] top-[485px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[179px] top-[500px]">
        <div className="absolute bg-[#f26d60] h-[18px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#f26d60] h-[81px] left-[187px] top-[500px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[245px] top-[579px]">
        <div className="absolute bg-[#f26d60] h-[22px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#f26d60] h-[55px] left-[253px] top-[579px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[289px] top-[581px]">
        <div className="absolute bg-[#f26d60] h-[10px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#f26d60] h-[69px] left-[297px] top-[581px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[311px] top-[586px]">
        <div className="absolute bg-[#09977e] h-[22px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#09977e] h-[40px] left-[319px] top-[586px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[333px] top-[510px]">
        <div className="absolute bg-[#09977e] h-[60px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#09977e] h-[101px] left-[341px] top-[510px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[355px] top-[458px]">
        <div className="absolute bg-[#09977e] h-[54px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#09977e] h-[89px] left-[363px] top-[458px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[377px] top-[458px]">
        <div className="absolute bg-[#f26d60] h-[3px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#f26d60] h-[52px] left-[385px] top-[458px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[399px] top-[453px]">
        <div className="absolute bg-[#09977e] h-[3px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#09977e] h-[54px] left-[407px] top-[453px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[421px] top-[327px]">
        <div className="absolute bg-[#09977e] h-[136px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#09977e] h-[169px] left-[429px] top-[327px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[487px] top-[413px]">
        <div className="absolute bg-[#f26d60] left-0 size-[17px] top-0" data-name="bar_rise" />
        <div className="absolute bg-[#f26d60] h-[62px] left-[495px] top-[413px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[509px] top-[369px]">
        <div className="absolute bg-[#f26d60] h-px left-[509px] top-[443px] w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#f26d60] h-[86px] left-[517px] top-[369px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[553px] top-[443px]">
        <div className="absolute bg-[#f26d60] h-[60px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#f26d60] h-[112px] left-[561px] top-[443px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[575px] top-[257px]">
        <div className="absolute bg-[#09977e] h-[72px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#09977e] h-[181px] left-[583px] top-[257px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[597px] top-[282px]">
        <div className="absolute bg-[#09977e] h-[12px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#09977e] h-[99px] left-[605px] top-[282px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[619px] top-[200px]">
        <div className="absolute bg-[#09977e] h-[149px] left-[627px] top-[200px] w-px" data-name="stick_rise" />
        <div className="absolute bg-[#09977e] h-[76px] left-0 top-0 w-[17px]" data-name="bar_rise" />
      </div>
      <div className="absolute contents left-[641px] top-[223px]">
        <div className="absolute bg-[#f26d60] h-[94px] left-[649px] top-[223px] w-px" data-name="stick_rise" />
        <div className="absolute bg-[#f26d60] h-[15px] left-0 top-0 w-[17px]" data-name="bar_rise" />
      </div>
      <div className="absolute contents left-[663px] top-[203px]">
        <div className="absolute bg-[#09977e] h-[49px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#09977e] h-[67px] left-[671px] top-[203px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[685px] top-0">
        <div className="absolute bg-[#09977e] h-[195px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#09977e] h-[255px] left-[693px] top-0 w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[729px] top-[20px]">
        <div className="absolute bg-[#09977e] h-[44px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#09977e] h-[87px] left-[737px] top-[20px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[817px] top-[203px]">
        <div className="absolute bg-[#09977e] h-[42px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#09977e] h-[109px] left-[825px] top-[203px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[839px] top-[211px]">
        <div className="absolute bg-[#f26d60] h-[18px] left-0 top-0 w-[17px]" data-name="bar_rise" />
        <div className="absolute bg-[#f26d60] h-[86px] left-[847px] top-[211px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[861px] top-[220px]">
        <div className="absolute flex h-[67px] items-center justify-center left-0 top-0 w-[17px]">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#f26d60] h-[-67px] w-[17px]" data-name="bar_rise" />
          </div>
        </div>
        <div className="absolute bg-[#f26d60] h-[117px] left-[869px] top-[220px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[883px] top-[253px]">
        <div className="absolute flex items-center justify-center left-0 size-[17px] top-0">
          <div className="-scale-y-100 flex-none">
            <div className="bg-[#f26d60] h-[-17px] w-[17px]" data-name="bar_rise" />
          </div>
        </div>
        <div className="absolute bg-[#f26d60] h-[124px] left-[891px] top-[253px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[3px] top-[327px]">
        <div className="absolute bg-[#f26d60] h-[8px] left-[3px] top-[342px] w-[17px]" data-name="bar" />
        <div className="absolute bg-[#f26d60] h-[44px] left-[11px] top-[327px] w-px" data-name="stick" />
      </div>
      <div className="absolute contents left-[25px] top-[341px]">
        <div className="absolute bg-[#09977e] h-[87px] left-[25px] top-[341px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#09977e] h-[92px] left-[33px] top-[341px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[47px] top-[409px]">
        <div className="absolute bg-[#f26d60] h-[5px] left-[47px] top-[435px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[47px] left-[55px] top-[409px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[69px] top-[426px]">
        <div className="absolute bg-[#09977e] h-[49px] left-[69px] top-[426px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#09977e] h-[77px] left-[77px] top-[426px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[91px] top-[478px]">
        <div className="absolute bg-[#f26d60] h-[20px] left-[91px] top-[490px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[42px] left-[99px] top-[478px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[113px] top-[488px]">
        <div className="absolute bg-[#f26d60] h-[18px] left-[113px] top-[505px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[55px] left-[121px] top-[488px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[157px] top-[503px]">
        <div className="absolute contents left-[157px] top-[508px]">
          <div className="absolute bg-[#09977e] h-[37px] left-[157px] top-[508px] w-[17px]" data-name="bar_fall" />
        </div>
        <div className="absolute bg-[#09977e] h-[70px] left-[165px] top-[503px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[201px] top-[510px]">
        <div className="absolute bg-[#f26d60] h-[18px] left-[201px] top-[537px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[49px] left-[209px] top-[510px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[223px] top-[540px]">
        <div className="absolute bg-[#f26d60] h-[60px] left-[223px] top-[560px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[84px] left-[231px] top-[540px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[267px] top-[587px]">
        <div className="absolute bg-[#09977e] h-[44px] left-[267px] top-[587px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#09977e] h-[77px] left-[275px] top-[587px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[443px] top-[344px]">
        <div className="absolute bg-[#09977e] h-[55px] left-[443px] top-[359px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#09977e] h-[81px] left-[451px] top-[344px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[465px] top-[371px]">
        <div className="absolute bg-[#f26d60] h-[20px] left-[465px] top-[404px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[84px] left-[473px] top-[371px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[531px] top-[426px]">
        <div className="absolute bg-[#f26d60] h-[54px] left-[531px] top-[443px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[76px] left-[539px] top-[426px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[707px] top-[12px]">
        <div className="absolute bg-[#f26d60] h-[27px] left-[707px] top-[57px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[79px] left-[715px] top-[12px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[751px] top-[2px]">
        <div className="absolute bg-[#f26d60] h-[76px] left-[751px] top-[60px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[173px] left-[759px] top-[2px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[773px] top-[133px]">
        <div className="absolute bg-[#f26d60] h-[79px] left-[773px] top-[144px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[111px] left-[781px] top-[133px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[795px] top-[205px]">
        <div className="absolute bg-[#f26d60] h-[13px] left-[795px] top-[238px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[94px] left-[803px] top-[205px] w-px" data-name="stick_rise" />
      </div>
      <div className="absolute contents left-[905px] top-[262px]">
        <div className="absolute bg-[#09977e] h-[89px] left-[905px] top-[270px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#09977e] h-[154px] left-[913px] top-[262px] w-px" data-name="stick_fall" />
      </div>
      <div className="absolute contents left-[927px] top-[352px]">
        <div className="absolute bg-[#f26d60] h-[47px] left-[927px] top-[389px] w-[17px]" data-name="bar_fall" />
        <div className="absolute bg-[#f26d60] h-[144px] left-[935px] top-[352px] w-px" data-name="stick_fall" />
      </div>
    </div>
  );
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ additionalClassNames = "" }: BackgroundImage6Props) {
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
      <BackgroundImage6 additionalClassNames="top-[47px]" />
      <BackgroundImage6 additionalClassNames="top-[12px]" />
      <BackgroundImage6 additionalClassNames="top-[82px]" />
      <BackgroundImage6 additionalClassNames="top-[117px]" />
      <BackgroundImage6 additionalClassNames="top-[187px]" />
      <BackgroundImage6 additionalClassNames="top-[222px]" />
      <BackgroundImage6 additionalClassNames="top-[292px]" />
      <BackgroundImage6 additionalClassNames="top-[327px]" />
      <BackgroundImage6 additionalClassNames="top-[397px]" />
      <BackgroundImage6 additionalClassNames="top-[432px]" />
      <BackgroundImage6 additionalClassNames="top-[502px]" />
      <BackgroundImage6 additionalClassNames="top-[537px]" />
      <BackgroundImage6 additionalClassNames="top-[607px]" />
      <BackgroundImage6 additionalClassNames="top-[642px]" />
      <BackgroundImage6 additionalClassNames="top-[152px]" />
      <BackgroundImage6 additionalClassNames="top-[257px]" />
      <BackgroundImage6 additionalClassNames="top-[362px]" />
      <BackgroundImage6 additionalClassNames="top-[467px]" />
      <BackgroundImage6 additionalClassNames="top-[572px]" />
      <BackgroundImage6 additionalClassNames="top-[677px]" />
      <BackgroundImage6 additionalClassNames="top-[712px]" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[209px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[407px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[605px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[869px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[1067px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[1265px] top-0 w-px" data-name="line_chart" />
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

function BackgroundImage5() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex h-px items-center justify-center left-0 top-[739px] w-[1368px]">
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-[1368px] w-px" data-name="border_chart" />
      </div>
    </div>
  );
}
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ additionalClassNames = "" }: BackgroundImage4Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-[4px] items-center justify-center w-[0.5px]", additionalClassNames)}>
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
type ModalHeaderMBackgroundImageAndTextProps = {
  text: string;
};

function ModalHeaderMBackgroundImageAndText({ text }: ModalHeaderMBackgroundImageAndTextProps) {
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
      <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[11px] w-[289px]">{text}</p>
    </div>
  );
}
type ButtonTextDefaultBackgroundImageAndTextProps = {
  text: string;
};

function ButtonTextDefaultBackgroundImageAndText({ text }: ButtonTextDefaultBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[18px] left-[15px] top-[435px] w-[83px]">
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-0 leading-[normal] not-italic text-[#8e8e93] text-[14px] text-center whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextSettingsBackgroundImageProps = {
  text: string;
  text1: string;
};

function TextSettingsBackgroundImage({ text, text1 }: TextSettingsBackgroundImageProps) {
  return (
    <div className="absolute contents left-[-1px] top-[-1px]">
      <div className="absolute bg-white h-[475px] left-0 rounded-[6px] top-0 w-[350px]" data-name="bg_modal" />
      <ButtonTextDefaultBackgroundImageAndText text={text} />
      <div className="absolute contents left-[15px] top-[264px]">
        <div className="absolute contents left-[15px] top-[264px]">
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[270px] whitespace-nowrap">{"Background"}</p>
          <CheckboxLChecked className="absolute left-[15px] size-[24px] top-[268px]" />
          <div className="absolute left-[calc(50%+12px)] size-[32px] top-[264px]" data-name="dropdown/color/default">
            <BackgroundImage />
            <div className="absolute bg-size-[auto_auto,97.00000286102295px_97.00000286102295px] bg-top-left inset-[12.5%] rounded-[4px]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 177, 199, 0.05) 0%, rgba(0, 177, 199, 0.05) 100%), url('${imgColor}')` }} />
          </div>
        </div>
        <div className="absolute contents left-[15px] top-[316px]">
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[322px] whitespace-nowrap">{"Border"}</p>
          <div className="absolute left-[calc(50%+12px)] size-[32px] top-[316px]" data-name="dropdown/color/disabled">
            <BackgroundImage />
            <div className="absolute bg-[#babac1] inset-[12.5%] rounded-[4px]" data-name="color" />
            <BackgroundImage3 />
          </div>
          <CheckboxLUnchecked className="absolute left-[15px] size-[24px] top-[320px]" />
        </div>
        <div className="absolute contents left-[15px] top-[372px]">
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[374px] whitespace-nowrap">{"Text Wrap"}</p>
          <CheckboxLUnchecked className="absolute left-[15px] size-[24px] top-[372px]" />
        </div>
      </div>
      <ButtonSecondarySDefault className="absolute h-[32px] left-[calc(33.33%+43.33px)] top-[428px] w-[80px]" />
      <ButtonSPrimaryDefault className="absolute h-[32px] left-[calc(66.67%+21.67px)] top-[428px] w-[80px]" />
      <div className="absolute contents left-[15px] top-[112px]">
        <div className="absolute bg-white border border-[#efeff4] border-solid h-[132px] left-[15px] rounded-[4px] top-[112px] w-[320px]" data-name="input" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[27px] not-italic text-[#babac1] text-[14px] top-[122px] whitespace-nowrap">{"Type here..."}</p>
      </div>
      <div className="absolute contents left-[15px] top-[60px]">
        <DropdownFontSizeDefaultBackgroundImageAndText text="14" />
        <DropdownColorDefaultBackgroundImage />
        <div className="absolute left-[calc(50%-4px)] size-[32px] top-[60px]" data-name="button/text_style/active">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="-rotate-90 flex-none size-[32px]">
              <div className="bg-[rgba(0,177,199,0.05)] border border-[#00b1c7] border-solid rounded-[4px] size-full" data-name="box" />
            </div>
          </div>
          <div className="absolute inset-[12.5%] overflow-clip" data-name="icons/italic">
            <IconBackgroundImage />
          </div>
        </div>
        <ButtonTextStyleDefault className="absolute left-[calc(33.33%+12.33px)] size-[32px] top-[60px]" />
      </div>
      <ModalHeaderMBackgroundImageAndText text={text1} />
    </div>
  );
}

function DropdownColorDefaultBackgroundImage() {
  return (
    <div className="absolute left-[15px] size-[32px] top-[60px]">
      <BackgroundImage />
      <div className="absolute bg-[#1f1f1f] inset-[12.5%] rounded-[2px]" data-name="color" />
    </div>
  );
}
type DropdownFontSizeDefaultBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function DropdownFontSizeDefaultBackgroundImageAndText({ text, additionalClassNames = "" }: DropdownFontSizeDefaultBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[32px] left-[calc(16.67%-1.33px)] top-[60px] w-[62px]">
      <div className="absolute flex h-[32px] items-center justify-center left-0 right-0 top-0">
        <BackgroundImage1 additionalClassNames="h-[62px] w-[32px]" />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(50%-15px)] not-italic text-[#1f1f1f] text-[14px] top-[calc(50%-10px)] whitespace-nowrap">{text}</p>
      <IconsSmallChevronDownBackgroundImage additionalClassNames="right-[2px] size-[24px] top-[4px]" />
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <div className="absolute bottom-1/4 left-1/4 right-[29.17%] top-1/4">
      <BackgroundImage15 additionalClassNames="inset-[-4.17%_-4.53%_-4.17%_-4.54%]">
        <path d="M11.5 0.500134H4.42855" id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.57143 12.5001H0.5" id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p1850d80} id="Vector_3" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
      </BackgroundImage15>
    </div>
  );
}

function BackgroundImage3() {
  return (
    <div className="absolute flex inset-0 items-center justify-center">
      <div className="-rotate-90 flex-none size-[32px]">
        <div className="bg-[#f8f8ff] opacity-85 rounded-[4px] size-full" data-name="screen" />
      </div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <BackgroundImage15 additionalClassNames={additionalClassNames}>
      <path d="M11.5 0.500134H4.42855" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.57143 12.5001H0.5" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p1850d80} id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
    </BackgroundImage15>
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
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-[24px] items-center justify-center relative shrink-0 w-px">
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-px rounded-[6px] w-[24px]" data-name="divider" />
      </div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
  return (
    <div className={clsx("-rotate-90 flex-none", additionalClassNames)}>
      <div className="bg-white border border-[#efeff4] border-solid rounded-[4px] size-full" data-name="box" />
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute flex inset-0 items-center justify-center">
      <BackgroundImage1 additionalClassNames="size-[32px]" />
    </div>
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
type IconsSmallChevronDownBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconsSmallChevronDownBackgroundImage({ additionalClassNames = "" }: IconsSmallChevronDownBackgroundImageProps) {
  return (
    <div className={clsx("absolute overflow-clip", additionalClassNames)}>
      <VectorBackgroundImage />
    </div>
  );
}

function MenuItemTextColor({ className }: { className?: string }) {
  return (
    <div className={className || "h-[38px] relative w-[48px]"} data-name="menu_item/text_color">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="absolute bg-[#1f1f1f] bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" />
      <div className="absolute bottom-[18.42%] left-1/4 overflow-clip right-1/4 top-[18.42%]" data-name="icons/type">
        <BackgroundImage12>
          <path d="M0.5 3.125V0.5H14.5V3.125" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.875 14.5H10.125" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5 0.5V14.5" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
        </BackgroundImage12>
      </div>
    </div>
  );
}

function IconsRemoveSmall({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/remove_small">
      <BackgroundImage14>
        <g id="bin">
          <path d="M0.5 3.70001H2.05556H14.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2649000} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.94446 7.70001V12.5" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.05566 7.70001V12.5" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </BackgroundImage14>
    </div>
  );
}

function MenuItemIconDefault({ className }: { className?: string }) {
  return (
    <div className={className || "h-[38px] relative w-[66px]"} data-name="menu_item/icon/default">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <IconsSmallChevronDownBackgroundImage additionalClassNames="inset-[18.42%_3.03%_18.42%_60.61%]" />
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
        <BackgroundImage13>
          <path d={svgPaths.p69c8570} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p218d9280} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
        </BackgroundImage13>
      </div>
    </div>
  );
}

function IconsBold({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/bold">
      <div className="absolute bottom-1/4 left-[29.17%] right-[29.17%] top-1/4" data-name="icon">
        <div className="absolute inset-[-4.17%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 13">
            <g id="icon">
              <path d={svgPaths.p12a7f670} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p31047800} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
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
              <BackgroundImage16 additionalClassNames="inset-[-3.13%]">
                <path d={svgPaths.p37c74100} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage16>
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
              <BackgroundImage16 additionalClassNames="inset-[-3.13%_-3.13%_-3.12%_-3.13%]">
                <path d={svgPaths.pb3a6d80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage16>
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

function ButtonTextStyleDefault({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[32px]"} data-name="button/text_style/default">
      <BackgroundImage />
      <div className="absolute inset-[12.5%] overflow-clip" data-name="icons/italic">
        <div className="absolute bottom-1/4 left-1/4 right-[29.17%] top-1/4" data-name="icon">
          <BackgroundImage2 additionalClassNames="inset-[-4.17%_-4.55%]" />
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

function CheckboxLUnchecked({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="checkbox/L/unchecked">
      <div className="absolute border border-[rgba(62,62,62,0.2)] border-solid inset-0 rounded-[2px]" data-name="checkbox/unchecked" />
    </div>
  );
}

export default function Text() {
  return (
    <div className="bg-[#efeff4] relative size-full" data-name="Text">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[103px] text-black top-[96px] uppercase whitespace-nowrap">Text</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[70px] text-black top-[1064px] whitespace-nowrap">Settings</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[70px] text-black top-[2321px] whitespace-nowrap">Menu</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[1656px] not-italic text-[70px] text-black top-[2321px] whitespace-nowrap">Text</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[1656px] not-italic text-[70px] text-black top-[1064px] whitespace-nowrap">Wrap/border</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[3208px] not-italic text-[70px] text-black top-[1064px] whitespace-nowrap">Wrap</p>
      <div className="absolute border border-[#efeff4] border-solid h-[475px] left-[922px] overflow-clip rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[330px] w-[350px]" data-name="tool_menu/text">
        <TextSettingsBackgroundImage text="Reset Settings" text1="Text" />
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[124px] overflow-clip top-[1219px] w-[1440px]" data-name="Text/settings">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <div className="absolute contents left-0 top-[739px]" data-name="time_line">
            <div className="absolute bg-white h-[33px] left-0 rounded-bl-[6px] rounded-br-[6px] top-[739px] w-[1368px]" data-name="timeline_bg" />
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
            <div className="absolute contents left-[169px] top-[740px]" data-name="cursor_date">
              <div className="absolute bg-[#00b1c7] h-[19px] left-[169px] top-[740px] w-[65px]" data-name="card_bg" />
              <BackgroundImage4 additionalClassNames="left-[201px] top-[740px]" />
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[176px] not-italic text-[12px] text-white top-[742px] whitespace-nowrap">26 Aug, 20</p>
            </div>
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
              <BackgroundImage5 />
              <div className="absolute contents left-[1304px] top-[140px]" data-name="price_low">
                <div className="absolute bg-[#00b1c7] h-[19px] left-[1304px] top-[140px] w-[64px]" data-name="card_bg" />
                <div className="absolute bg-white h-px left-[1304px] top-[149px] w-[4px]" data-name="indicator_line" />
                <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[142px] whitespace-nowrap">12810.00</p>
              </div>
            </div>
            <CurrencyBackgroundImageAndText text="USD" />
          </div>
          <ChartItemsBackgroundImage />
          <ExchangeDescriptionBackgroundImage />
        </div>
        <ToolsBarDefaultBackgroundImage />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <div className="absolute border border-[#efeff4] border-solid h-[475px] left-[calc(33.33%+65px)] overflow-clip rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[150px] w-[350px]" data-name="tool_menu/text">
          <TextSettingsBackgroundImage text="Reset Settings" text1="Text" />
        </div>
        <div className="absolute contents left-[calc(11.11%+57px)] top-[214px]" data-name="text_container">
          <div className="absolute bg-[rgba(0,177,199,0.05)] content-stretch flex items-center left-[calc(11.11%+57px)] p-[8px] rounded-[4px] top-[214px]" data-name="text_container">
            <p className="font-['Source_Sans_Pro:Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap">Type here...</p>
          </div>
          <MarkerBackgroundImage additionalClassNames="left-[calc(11.11%+94px)] top-[244px]" />
        </div>
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[1655px] overflow-clip top-[1219px] w-[1440px]" data-name="Text/wrap_border">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <div className="absolute contents left-0 top-[739px]" data-name="time_line">
            <div className="absolute bg-white h-[33px] left-0 rounded-bl-[6px] rounded-br-[6px] top-[739px] w-[1368px]" data-name="timeline_bg" />
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
            <div className="absolute contents left-[268px] top-[740px]" data-name="cursor_date">
              <div className="absolute bg-[#00b1c7] h-[19px] left-[268px] top-[740px] w-[58px]" data-name="card_bg" />
              <BackgroundImage4 additionalClassNames="left-[297px] top-[740px]" />
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[275px] not-italic text-[12px] text-white top-[742px] whitespace-nowrap">1 Sep, 20</p>
            </div>
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
              <BackgroundImage5 />
              <PriceLowBackgroundImageAndText text="12802.34" />
            </div>
            <CurrencyBackgroundImageAndText text="USD" />
          </div>
          <ChartItemsBackgroundImage />
          <ExchangeDescriptionBackgroundImage />
        </div>
        <ToolsBarDefaultBackgroundImage />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <div className="absolute border border-[#efeff4] border-solid h-[475px] left-[calc(33.33%+65px)] overflow-clip rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[150px] w-[350px]" data-name="tool_menu/text">
          <div className="absolute contents left-[-1px] top-[-1px]" data-name="text/settings">
            <div className="absolute bg-white h-[475px] left-0 rounded-[6px] top-0 w-[350px]" data-name="bg_modal" />
            <ButtonTextDefaultBackgroundImageAndText text="Reset Settings" />
            <div className="absolute contents left-[15px] top-[264px]" data-name="checkboxes">
              <BackgroundBackgroundImageAndText text="Background" />
              <div className="absolute contents left-[15px] top-[316px]" data-name="border">
                <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[322px] whitespace-nowrap">Border</p>
                <div className="absolute left-[calc(50%+12px)] size-[32px] top-[316px]" data-name="dropdown/color/active">
                  <div className="absolute flex inset-0 items-center justify-center">
                    <div className="-rotate-90 flex-none size-[32px]">
                      <div className="bg-white border border-[#00b1c7] border-solid rounded-[4px] size-full" data-name="box" />
                    </div>
                  </div>
                  <div className="absolute bg-[#babac1] inset-[12.5%] rounded-[4px]" data-name="color" />
                </div>
                <CheckboxLChecked className="absolute left-[15px] size-[24px] top-[320px]" />
              </div>
              <TextWrapBackgroundImageAndText text="Text Wrap" />
            </div>
            <ButtonSecondarySDefault className="absolute h-[32px] left-[calc(33.33%+43.33px)] top-[428px] w-[80px]" />
            <ButtonSPrimaryDefault className="absolute h-[32px] left-[calc(66.67%+21.67px)] top-[428px] w-[80px]" />
            <TypeHereBackgroundImageAndText text="The quick brown fox jumps over the lazy dog." />
            <SettingsBackgroundImage>
              <div className="absolute bottom-1/4 left-1/4 right-[29.17%] top-1/4" data-name="icon">
                <BackgroundImage2 additionalClassNames="inset-[-4.17%_-4.53%_-4.17%_-4.54%]" />
              </div>
            </SettingsBackgroundImage>
            <ModalHeaderMBackgroundImageAndText text="Text" />
          </div>
        </div>
        <div className="absolute contents left-[calc(11.11%+57px)] top-[214px]" data-name="text_container">
          <div className="absolute content-stretch flex items-center left-[calc(11.11%+57px)] p-[8px] rounded-[4px] top-[214px]" data-name="text_container">
            <div aria-hidden="true" className="absolute border border-[#babac1] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[14px] whitespace-nowrap">The quick brown fox jumps over the lazy dog.</p>
          </div>
          <MarkerBackgroundImage additionalClassNames="left-[calc(22.22%+33px)] top-[244px]" />
          <MarkerBackgroundImage additionalClassNames="left-[calc(33.33%+12px)] top-[227px]" />
        </div>
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[3208px] overflow-clip top-[1219px] w-[1440px]" data-name="Text/wrap">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLineBackgroundImage text="22" text1="19" text2="12" text3="8" text4="5" text5="15" text6="Oct" text7="28" text8="24" text9="21" text10="17" text11="14" text12="10" text13="7" text14="4" text15="Sep" text16="27" text17="24" text18="20" text19="17" />
          <RighstSideBarBackgroundImage />
          <ChartItemsBackgroundImage />
          <ExchangeDescriptionBackgroundImage />
        </div>
        <CursorDateBackgroundImageAndText text="29 Sep, 20" />
        <ToolsBarDefaultBackgroundImage />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <div className="absolute h-[475px] left-[calc(33.33%+65px)] top-[150px] w-[350px]" data-name="tool_menu/text">
          <div className="absolute contents left-0 top-0" data-name="text/settings">
            <div className="absolute bg-white border border-[#f0f0f9] border-solid h-[475px] left-0 rounded-[6px] shadow-[1px_8px_40px_0px_rgba(49,49,49,0.06)] top-0 w-[350px]" data-name="bg_modal" />
            <CheckboxesBackgroundImage />
            <ButtonSecondarySDefault className="absolute h-[32px] left-[calc(33.33%+43.33px)] top-[428px] w-[80px]" />
            <ButtonSPrimaryDefault className="absolute h-[32px] left-[calc(66.67%+21.67px)] top-[428px] w-[80px]" />
            <TypeHereBackgroundImageAndText text="The quick brown fox jumps over the lazy dog." />
            <div className="absolute contents left-[15px] top-[60px]" data-name="settings">
              <div className="absolute contents left-[calc(16.67%-1.33px)] top-[60px]" data-name="type">
                <div className="absolute flex h-[32px] items-center justify-center left-[calc(16.67%-1.33px)] top-[60px] w-[62px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
                  <div className="-rotate-90 flex-none">
                    <div className="bg-white border border-[#efeff4] border-solid h-[62px] rounded-[4px] w-[32px]" data-name="box" />
                  </div>
                </div>
                <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%+14.67px)] not-italic text-[#1f1f1f] text-[14px] top-[66px] whitespace-nowrap">14</p>
                <IconsSmallChevronDownBackgroundImage additionalClassNames="left-[calc(16.67%+34.67px)] size-[24px] top-[65px]" />
              </div>
              <div className="absolute left-[15px] size-[32px] top-[60px]" data-name="dropdown/color/default">
                <BackgroundImage />
                <div className="absolute bg-[#222268] inset-[12.5%] rounded-[2px]" data-name="color" />
              </div>
              <div className="absolute contents left-[calc(50%-4px)] top-[60px]" data-name="italic">
                <BackgroundImage7 additionalClassNames="left-[calc(50%-4px)] top-[60px]" />
                <div className="absolute left-1/2 overflow-clip size-[24px] top-[64px]" data-name="icons/italic">
                  <div className="absolute bottom-1/4 left-1/4 right-[29.17%] top-1/4" data-name="icon">
                    <BackgroundImage2 additionalClassNames="inset-[-4.17%_-4.53%_-4.17%_-4.54%]" />
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[calc(33.33%+12.33px)] top-[60px]" data-name="bold">
                <BackgroundImage7 additionalClassNames="left-[calc(33.33%+12.33px)] top-[60px]" />
                <IconsBold className="absolute left-[calc(33.33%+16.33px)] overflow-clip size-[24px] top-[64px]" />
              </div>
            </div>
            <ModalHeaderMBackgroundImageAndText text="Text" />
          </div>
        </div>
        <div className="absolute border border-[#efeff4] border-solid h-[475px] left-[calc(33.33%+65px)] overflow-clip rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[150px] w-[350px]" data-name="tool_menu/text">
          <div className="absolute contents left-[-1px] top-[-1px]" data-name="text/settings">
            <div className="absolute bg-white h-[475px] left-0 rounded-[6px] top-0 w-[350px]" data-name="bg_modal" />
            <ButtonTextDefaultBackgroundImageAndText text="Reset Settings" />
            <CheckboxesBackgroundImage />
            <ButtonSecondarySDefault className="absolute h-[32px] left-[calc(33.33%+43.33px)] top-[428px] w-[80px]" />
            <ButtonSPrimaryDefault className="absolute h-[32px] left-[calc(66.67%+21.67px)] top-[428px] w-[80px]" />
            <TypeHereBackgroundImageAndText text="The quick brown fox jumps over the lazy dog." />
            <SettingsBackgroundImage>
              <div className="absolute bottom-1/4 left-1/4 right-[29.17%] top-1/4" data-name="icon">
                <BackgroundImage2 additionalClassNames="inset-[-4.17%_-4.53%_-4.17%_-4.54%]" />
              </div>
            </SettingsBackgroundImage>
            <ModalHeaderMBackgroundImageAndText text="Text" />
          </div>
        </div>
        <TextContainerBackgroundImage />
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[124px] overflow-clip top-[2450px] w-[1440px]" data-name="Text/menu">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLineBackgroundImage text="22" text1="19" text2="12" text3="8" text4="5" text5="15" text6="Oct" text7="28" text8="24" text9="21" text10="17" text11="14" text12="10" text13="7" text14="4" text15="Sep" text16="27" text17="24" text18="20" text19="17" />
          <RighstSideBarBackgroundImage />
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <ChartLayoutBackgroundImage />
            <CandleStickChartBackgroundImage />
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
            <div className="absolute contents left-[768px] top-[56px]" data-name="tool_menu_extended/trend_line">
              <div className="absolute bg-white content-stretch flex items-center left-[768px] py-px rounded-[6px] top-[56px]">
                <div aria-hidden="true" className="absolute border border-[#f8f8ff] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)]" />
                <IconsDragBackgroundImage />
                <BackgroundImage10 />
                <MenuItemTextColor className="h-[38px] relative shrink-0 w-[48px]" />
                <BackgroundImage10 />
                <MenuItemLineColorBackgroundImage />
                <BackgroundImage10 />
                <MenuItemFontSizeDefaultBackgroundImageAndText text="14" />
                <BackgroundImage10 />
                <Icon className="h-[38px] relative shrink-0 w-[56px]" />
                <BackgroundImage10 />
                <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
                <BackgroundImage10 />
                <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
                <BackgroundImage10 />
                <LockBackgroundImage additionalClassNames="relative shrink-0" />
                <BackgroundImage10 />
                <div className="h-[38px] relative shrink-0 w-[56px]" data-name="delete">
                  <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
                </div>
              </div>
            </div>
          </div>
          <ExchangeDescriptionBackgroundImage />
        </div>
        <CursorDateBackgroundImageAndText text="29 Sep, 20" />
        <ToolsBarDefaultBackgroundImage />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <TextContainerBackgroundImage />
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[1655px] overflow-clip top-[2445px] w-[1440px]" data-name="Text">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLineBackgroundImage text="22" text1="19" text2="12" text3="8" text4="5" text5="15" text6="Oct" text7="28" text8="24" text9="21" text10="17" text11="14" text12="10" text13="7" text14="4" text15="Sep" text16="27" text17="24" text18="20" text19="17" />
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
              <BackgroundImage5 />
            </div>
            <CurrencyBackgroundImageAndText text="USD" />
          </div>
          <ChartItemsBackgroundImage />
          <ExchangeDescriptionBackgroundImage />
        </div>
        <ToolsBarDefaultBackgroundImage />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <div className="absolute contents left-[calc(11.11%+57px)] top-[214px]" data-name="text_container">
          <TextContainerBackgroundImageAndText text="the lazy dog." />
        </div>
      </div>
      <div className="absolute contents left-[1996px] top-[484px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Text Size" additionalClassNames="left-[1996px] top-[484px]" />
        <BackgroundImage11 additionalClassNames="inset-[14.25%_56.78%_85.55%_42.92%]" />
      </div>
      <div className="absolute contents left-[1603px] top-[327px]" data-name="tooltip">
        <BackgroundImageAndText text="Text Color" additionalClassNames="left-[1603px]" />
        <BackgroundImage11 additionalClassNames="inset-[9.91%_65.04%_89.9%_34.66%]" />
      </div>
      <div className="absolute contents left-[1735px] top-[327px]" data-name="tooltip">
        <BackgroundImageAndText text="Line Color" additionalClassNames="left-[1735px]" />
        <BackgroundImage11 additionalClassNames="inset-[9.91%_62.25%_89.9%_37.46%]" />
      </div>
      <div className="absolute contents left-[1870px] top-[328px]">
        <Icon className="absolute h-[38px] left-[1878px] top-[372px] w-[56px]" />
        <div className="absolute contents left-[1870px] top-[328px]" data-name="tooltip">
          <TooltipBackgroundImageAndText1 text="Settings" additionalClassNames="left-[1870px]" />
          <BackgroundImage11 additionalClassNames="inset-[9.94%_59.49%_89.87%_40.21%]" />
        </div>
      </div>
      <div className="absolute contents left-[1993px] top-[328px]">
        <MenuItemIconDefault className="absolute h-[38px] left-[2006px] top-[372px] w-[66px]" />
        <div className="absolute contents left-[1993px] top-[328px]" data-name="tooltip">
          <TooltipBackgroundImageAndText1 text="Visual Order" additionalClassNames="left-[1993px]" />
          <BackgroundImage11 additionalClassNames="inset-[9.94%_56.67%_89.87%_43.03%]" />
        </div>
      </div>
      <div className="absolute contents left-[2121px] top-[328px]">
        <MenuItemIconDefault className="absolute h-[38px] left-[2133px] top-[372px] w-[66px]" />
        <div className="absolute contents left-[2121px] top-[328px]" data-name="tooltip">
          <TooltipBackgroundImageAndText text="Clone, Copy" additionalClassNames="left-[2121px] top-[328px]" />
          <BackgroundImage11 additionalClassNames="inset-[9.94%_53.96%_89.87%_45.74%]" />
        </div>
      </div>
      <div className="absolute contents left-[1743px] top-[488px]">
        <div className="absolute h-[38px] left-[1751px] top-[532px] w-[56px]" data-name="delete">
          <div className="absolute bg-white inset-0" data-name="bg" />
          <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
        </div>
        <div className="absolute contents left-[1743px] top-[488px]" data-name="tooltip">
          <TooltipBackgroundImageAndText text="Remove" additionalClassNames="left-[1743px] top-[488px]" />
          <BackgroundImage11 additionalClassNames="inset-[14.36%_62.18%_85.44%_37.52%]" />
        </div>
      </div>
      <div className="absolute contents left-[1616px] top-[487px]">
        <LockBackgroundImage additionalClassNames="absolute left-[1616px] top-[531px]" />
        <div className="absolute contents left-[1617px] top-[487px]" data-name="tooltip">
          <TooltipBackgroundImageAndText text="Lock" additionalClassNames="left-[1617px] top-[487px]" />
          <BackgroundImage11 additionalClassNames="inset-[14.34%_65.02%_85.47%_34.68%]" />
        </div>
      </div>
      <div className="absolute contents left-[1875px] top-[488px]">
        <div className="absolute left-[1888.5px] size-[32px] top-[532px]" data-name="dropdown/color/default">
          <BackgroundImage />
          <div className="absolute bg-[#00b1c7] inset-[12.5%] rounded-[2px]" data-name="color" />
        </div>
        <div className="absolute contents left-[1875px] top-[488px]" data-name="tooltip">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#1f1f1f] content-stretch flex items-center left-[calc(50%-456px)] px-[15px] py-[8px] rounded-[3px] top-[calc(50%-1303px)]" data-name="tooltip">
            <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Color</p>
          </div>
          <BackgroundImage11 additionalClassNames="inset-[14.36%_59.52%_85.44%_40.18%]" />
        </div>
      </div>
      <div className="absolute contents left-[2251px] top-[328px]">
        <div className="absolute contents left-[2262px] top-[372px]" data-name="bold">
          <BackgroundImage7 additionalClassNames="left-[2262px] top-[372px]" />
          <IconsBold className="absolute left-[2266px] overflow-clip size-[24px] top-[376px]" />
        </div>
        <div className="absolute contents left-[2251px] top-[328px]" data-name="tooltip">
          <TooltipBackgroundImageAndText text="Bold" additionalClassNames="left-[2251px] top-[328px]" />
          <BackgroundImage11 additionalClassNames="inset-[9.94%_51.59%_89.87%_48.11%]" />
        </div>
      </div>
      <div className="absolute contents left-[2134px] top-[489px]">
        <div className="absolute contents left-[2146px] top-[533px]" data-name="italic">
          <div className="absolute flex items-center justify-center left-[2146px] size-[32px] top-[533px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-90 flex-none">
              <div className="bg-[rgba(0,177,199,0.05)] border border-[#00b1c7] border-solid rounded-[4px] size-[32px]" data-name="box" />
            </div>
          </div>
          <div className="absolute left-[2150px] overflow-clip size-[24px] top-[537px]" data-name="icons/italic">
            <IconBackgroundImage />
          </div>
        </div>
        <div className="absolute contents left-[2134px] top-[489px]" data-name="tooltip">
          <TooltipBackgroundImageAndText text="Italic" additionalClassNames="left-[2134px] top-[489px]" />
          <BackgroundImage11 additionalClassNames="inset-[14.39%_54.07%_85.41%_45.64%]" />
        </div>
      </div>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[922px] not-italic text-[20px] text-black top-[273px] whitespace-nowrap">Extended settings</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[1599px] not-italic text-[20px] text-black top-[273px] whitespace-nowrap">Tooltips</p>
      <div className="absolute contents left-[131px] top-[357px]" data-name="tool_menu_extended/text">
        <div className="absolute bg-white content-stretch flex items-center left-[131px] py-px rounded-[6px] top-[357px]">
          <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <IconsDragBackgroundImage />
          <BackgroundImage10 />
          <MenuItemTextColor className="h-[38px] relative shrink-0 w-[48px]" />
          <BackgroundImage10 />
          <MenuItemLineColorBackgroundImage />
          <BackgroundImage10 />
          <MenuItemFontSizeDefaultBackgroundImageAndText text="14" />
          <BackgroundImage10 />
          <Icon className="h-[38px] relative shrink-0 w-[56px]" />
          <BackgroundImage10 />
          <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
          <BackgroundImage10 />
          <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
          <BackgroundImage10 />
          <div className="h-[38px] relative shrink-0 w-[56px]" data-name="lock">
            <div className="absolute bg-white inset-0" data-name="bg" />
            <div className="absolute bg-[#dcf5f7] inset-[10.53%_21.43%] rounded-[4px]" data-name="selected_bg" />
            <div className="absolute inset-[18.42%_28.57%] overflow-clip" data-name="icons/lock">
              <IconBackgroundImage1 />
            </div>
          </div>
          <BackgroundImage10 />
          <div className="h-[38px] relative shrink-0 w-[56px]" data-name="delete">
            <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[131px] top-[307px]" data-name="tool_menu/text">
        <div className="absolute bg-white content-stretch flex items-center left-[131px] py-px rounded-[6px] top-[307px]">
          <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <IconsDragBackgroundImage />
          <BackgroundImage10 />
          <MenuItemTextColor className="h-[38px] relative shrink-0 w-[48px]" />
          <BackgroundImage10 />
          <MenuItemLineColorBackgroundImage />
          <BackgroundImage10 />
          <MenuItemFontSizeDefaultBackgroundImageAndText text="14" />
        </div>
      </div>
      <div className="absolute contents left-[376px] right-[4224px] top-[428px]" data-name="tool_menu/layers">
        <div className="absolute bg-white border border-[#efeff4] border-solid h-[150px] left-[376px] right-[4224px] rounded-[4px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)] top-[428px]" data-name="bg" />
        <ListItem32SBackgroundImageAndText text="Bring to Front" additionalClassNames="left-[377px] right-[4225px] top-[436px]" />
        <div className="absolute h-[32px] left-[377px] right-[4225px] top-[470px]" data-name="list_item_32/S">
          <div className="absolute bg-[#f8f8ff] h-[32px] left-0 right-0 top-0" data-name="bg" />
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[12px] text-black top-[8px] whitespace-nowrap">Send to Back</p>
        </div>
        <ListItem32SBackgroundImageAndText text="Bring Forward" additionalClassNames="left-[377px] right-[4225px] top-[504px]" />
        <ListItem32SBackgroundImageAndText text="Send Backwards" additionalClassNames="left-[377px] right-[4225px] top-[538px]" />
      </div>
      <div className="absolute contents left-[507px] top-[428px]" data-name="tool_menu/copy">
        <div className="absolute bg-white border border-[#efeff4] border-solid h-[80px] left-[507px] right-[4147px] rounded-[4px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)] top-[428px]" data-name="bg" />
        <ListItem32SBackgroundImageAndText text="Copy" additionalClassNames="left-[508px] top-[436px] w-[64px]" />
        <ListItem32SBackgroundImageAndText text="Clone" additionalClassNames="left-[508px] top-[468px] w-[64px]" />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[131px] not-italic text-[20px] text-black top-[264px] whitespace-nowrap">Menus</p>
      <div className="absolute h-[252px] left-[131px] top-[428px] w-[164px]" data-name="tool_menu/color">
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
      <div className="absolute h-[296px] left-[306px] top-[430px] w-[62px]" data-name="tool_menu/font_size">
        <div className="absolute contents inset-0" data-name="menu_right_end">
          <div className="absolute bg-white border border-[#efeff4] border-solid inset-0 rounded-[4px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)]" data-name="bg" />
        </div>
        <div className="absolute inset-[2.7%_1.61%_87.84%_1.61%]" data-name="font_size">
          <div className="absolute bg-white h-[28px] left-0 right-0 top-0" data-name="bg" />
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-1/2 not-italic text-[#1f1f1f] text-[14px] text-center top-[calc(50%-10px)] whitespace-nowrap">10</p>
        </div>
        <BackgroundImageAndText1 text="11" additionalClassNames="absolute inset-[12.16%_1.61%_78.38%_1.61%]" />
        <BackgroundImageAndText1 text="12" additionalClassNames="absolute inset-[21.62%_1.61%_68.92%_1.61%]" />
        <div className="absolute inset-[31.08%_1.61%_59.46%_1.61%]" data-name="font_size">
          <div className="absolute bg-[#f8f8ff] h-[28px] left-0 right-0 top-0" data-name="bg" />
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-1/2 not-italic text-[#1f1f1f] text-[14px] text-center top-[calc(50%-10px)] whitespace-nowrap">14</p>
        </div>
        <TextFontSizeBackgroundImageAndText text="16" additionalClassNames="bottom-1/2 top-[40.54%]" />
        <TextFontSizeBackgroundImageAndText text="20" additionalClassNames="bottom-[40.54%] top-1/2" />
        <BackgroundImageAndText1 text="24" additionalClassNames="absolute inset-[59.46%_1.61%_31.08%_1.61%]" />
        <BackgroundImageAndText1 text="28" additionalClassNames="absolute inset-[68.92%_1.61%_21.62%_1.61%]" />
        <BackgroundImageAndText1 text="32" additionalClassNames="absolute inset-[78.38%_1.61%_12.16%_1.61%]" />
        <BackgroundImageAndText1 text="40" additionalClassNames="absolute inset-[87.84%_1.61%_2.7%_1.61%]" />
      </div>
      <div className="absolute h-[38px] left-[1752px] top-[371px] w-[48px]" data-name="menu_item/line_color">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <div className="absolute bg-[#3e3e3e] bottom-1/2 left-1/4 right-1/4 rounded-[6px] top-[47.37%]" data-name="thickness" />
        <div className="absolute bg-[#222268] bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" />
      </div>
      <MenuItemTextColor className="absolute h-[38px] left-[1619px] top-[371px] w-[48px]" />
      <div className="absolute h-[38px] left-[2002px] top-[528px] w-[62px]" data-name="menu_item/font_size/default">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <IconsSmallChevronDownBackgroundImage additionalClassNames="inset-[18.42%_3.23%_18.42%_58.06%]" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[23.68%_51.61%_23.68%_25.81%] leading-[20px] not-italic text-[14px] text-black whitespace-nowrap">14</p>
      </div>
    </div>
  );
}