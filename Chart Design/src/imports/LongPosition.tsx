import clsx from "clsx";
import svgPaths from "./svg-apinjwq05e";
import imgIconCryptohopper from "figma:asset/f1841337e214c3907e27f0e01bfbc7696f6af6d9.png";
import imgRectangle317 from "figma:asset/70017910a949817aa1c11716388ee64b40b2eafa.png";
import imgRgbLogoDarkNoBg011 from "figma:asset/bfb3fe6da9e88a568cbf5fd07d74cee065bbcbc3.png";
import imgColor from "figma:asset/7658e7e9a7ed0c1c3dd735be9be8e1932aae9269.png";
import imgOpacityScale from "figma:asset/96620d5081eb1173faf51622afd13844ad334d90.png";
type TooltipBackgroundImageProps = {
  additionalClassNames?: string;
};

function TooltipBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<TooltipBackgroundImageProps>) {
  return (
    <div className={clsx("-translate-x-1/2 -translate-y-1/2 absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] py-[8px] rounded-[3px] top-[calc(50%-693.5px)]", additionalClassNames)}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-pre">{children}</p>
    </div>
  );
}
type BackgroundImage15Props = {
  additionalClassNames?: string;
};

function BackgroundImage15({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage15Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImage14Props = {
  additionalClassNames?: string;
};

function BackgroundImage14({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage14Props>) {
  return (
    <div className={additionalClassNames}>
      <div aria-hidden="true" className="absolute border border-[#44baf1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">{children}</p>
    </div>
  );
}
type BackgroundImage13Props = {
  additionalClassNames?: string;
};

function BackgroundImage13({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage13Props>) {
  return (
    <div className={additionalClassNames}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{children}</p>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText2({ text, additionalClassNames = "" }: BackgroundImageAndText2Props) {
  return <BackgroundImage13 additionalClassNames={additionalClassNames}>{text}</BackgroundImage13>;
}
type BackgroundImage12Props = {
  additionalClassNames?: string;
};

function BackgroundImage12({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage12Props>) {
  return <BackgroundImage13 additionalClassNames={clsx("-translate-x-1/2 -translate-y-1/2 absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] py-[8px] rounded-[3px]", additionalClassNames)}>{children}</BackgroundImage13>;
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

function BackgroundImage11({ children }: React.PropsWithChildren<{}>) {
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

function BackgroundImage10({ children }: React.PropsWithChildren<{}>) {
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
type LongPositionFontSizeBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LongPositionFontSizeBackgroundImageAndText({ text, additionalClassNames = "" }: LongPositionFontSizeBackgroundImageAndTextProps) {
  return <BackgroundImageAndText1 text={text} additionalClassNames={clsx("absolute left-[1.61%] right-[1.61%]", additionalClassNames)} />;
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
type BackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText({ text, additionalClassNames = "" }: BackgroundImageAndTextProps) {
  return <BackgroundImageAndText2 text={text} additionalClassNames={clsx("absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] py-[8px] rounded-[3px] top-[329px]", additionalClassNames)} />;
}
type TooltipBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TooltipBackgroundImageAndText({ text, additionalClassNames = "" }: TooltipBackgroundImageAndTextProps) {
  return <BackgroundImageAndText2 text={text} additionalClassNames={clsx("absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] py-[8px] rounded-[3px] top-[490px]", additionalClassNames)} />;
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
  additionalClassNames?: string;
};

function ButtonTextDefaultBackgroundImageAndText({ text, additionalClassNames = "" }: ButtonTextDefaultBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[18px] left-[15px] w-[83px]", additionalClassNames)}>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-0 leading-[normal] not-italic text-[#8e8e93] text-[14px] text-center whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImage8Props = {
  additionalClassNames?: string;
};

function BackgroundImage8({ additionalClassNames = "" }: BackgroundImage8Props) {
  return (
    <div className={clsx("-rotate-90 flex-none", additionalClassNames)}>
      <div className="bg-white border border-[#efeff4] border-solid rounded-[4px] size-full" data-name="box" />
    </div>
  );
}
type InputSFilledBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function InputSFilledBackgroundImageAndText({ text, additionalClassNames = "" }: InputSFilledBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[32px] left-[calc(33.33%+13.33px)] w-[91px]", additionalClassNames)}>
      <div className="absolute flex h-[32px] items-center justify-center left-0 right-0 top-0">
        <BackgroundImage8 additionalClassNames="h-[91px] w-[32px]" />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[12px] not-italic text-[#1f1f1f] text-[14px] top-[6px] whitespace-nowrap">{text}</p>
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

function MenuItemBgColorBackgroundImage() {
  return (
    <div className="h-[38px] relative shrink-0 w-[48px]">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="absolute bg-size-[auto_auto,40.00000059604645px_40.00000059604645px] bg-top-left bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(29, 161, 242, 0.1) 0%, rgba(29, 161, 242, 0.1) 100%), url('${imgColor}')` }} />
      <IconsBackgroundColor className="absolute bottom-[18.42%] left-1/4 right-1/4 top-[18.42%]" />
    </div>
  );
}

function ToolsBarDefaultBackgroundImage() {
  return (
    <div className="absolute h-[836px] left-0 top-[64px] w-[48px]">
      <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-0 top-0">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <ButtonToolCursorBackgroundImage />
          <ButtonToolDefaultBackgroundImage />
          <ButtonToolDefaultBackgroundImage1 />
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0" data-name="tool_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/fib_retracement">
              <div className="absolute inset-[20.83%_12.54%_21.24%_12.5%]">
                <div className="absolute inset-[-3.6%_-2.79%_-3.6%_-2.78%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9898 14.9032">
                    <g id="icon">
                      <path d="M0.5 8.88704L18.4362 8.88704" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M0.5 4.69358L18.4362 4.69358" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M0.5 0.5L18.4362 0.5" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M0.5 13.0806L18.4362 13.0806" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p830500} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p2852f280} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0" data-name="tool_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/fib_extension">
              <div className="absolute inset-[16.67%_12.5%_12.5%_16.67%]">
                <div className="absolute inset-[-2.94%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0001 18">
                    <g id="icon">
                      <path d="M0.5 13.4523L17.5 13.4523" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p3ed16360} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p9817e60} id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M0.5 17.5L17.5 17.5" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p37eada00} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p184b5df0} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p9bdec80} fill="var(--fill-0, white)" id="Vector_7" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M2.04541 6.16662V7.78567" id="Vector 4" stroke="var(--stroke-0, #1F1F1F)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0" data-name="tool_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/short_position">
              <BackgroundImage10>
                <path d="M2.125 7.00004L18.375 15.125" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.5 7.00004L18.375 7.00004" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.5 2.12504L18.375 2.12504" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.5 15.125L18.375 15.125" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.peae880} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p3371f000} fill="var(--fill-0, white)" id="Vector_6" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p15376380} fill="var(--fill-0, white)" id="Vector_7" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p1230e400} fill="var(--fill-0, white)" id="Vector_8" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage10>
            </div>
          </div>
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0" data-name="tool_bg" />
            <div className="absolute bg-[#dcf5f7] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/long_position">
              <BackgroundImage10>
                <path d={svgPaths.p310d7500} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.5 10.25L18.375 10.25" id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.5 2.12504L18.375 2.12504" id="Vector_3" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.5 15.125L18.375 15.125" id="Vector_4" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.peae880} fill="var(--fill-0, #DCF5F7)" id="Vector_5" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p18bdc560} fill="var(--fill-0, #DCF5F7)" id="Vector_6" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p15376380} fill="var(--fill-0, #DCF5F7)" id="Vector_7" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p201c4080} fill="var(--fill-0, #DCF5F7)" id="Vector_8" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage10>
            </div>
          </div>
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          <ButtonToolDefault className="relative shrink-0 size-[48px]" />
        </div>
        <div className="bg-[#efeff4] h-px rounded-[6px] shrink-0 w-[32px]" data-name="divider" />
        <BackgroundImage6 />
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
type TargetBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TargetBackgroundImageAndText({ text, additionalClassNames = "" }: TargetBackgroundImageAndTextProps) {
  return <BackgroundImage14 additionalClassNames={clsx("-translate-x-1/2 -translate-y-1/2 absolute bg-[#1da1f2] content-stretch flex items-center opacity-85 px-[10px] py-[2px] rounded-[4px]", additionalClassNames)}>{text}</BackgroundImage14>;
}
type StopBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function StopBackgroundImageAndText({ text, additionalClassNames = "" }: StopBackgroundImageAndTextProps) {
  return (
    <div className={clsx("-translate-x-1/2 -translate-y-1/2 absolute bg-[#09977e] content-stretch flex items-center px-[10px] py-[2px] rounded-[4px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#15aa90] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">{text}</p>
    </div>
  );
}
type LabelBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LabelBackgroundImageAndText({ text, additionalClassNames = "" }: LabelBackgroundImageAndTextProps) {
  return (
    <BackgroundImage14 additionalClassNames={clsx("-translate-x-1/2 -translate-y-1/2 absolute bg-[#1da1f2] content-stretch flex items-center px-[10px] py-[2px] rounded-[4px]", additionalClassNames)}>
      {`Closed P&L: -79.79, Qty: 2.819`}
      <br aria-hidden="true" />
      {text}
    </BackgroundImage14>
  );
}
type BackgroundImage7Props = {
  additionalClassNames?: string;
};

function BackgroundImage7({ additionalClassNames = "" }: BackgroundImage7Props) {
  return (
    <div className={clsx("absolute flex h-px items-center justify-center w-[461px]", additionalClassNames)}>
      <div className="-scale-y-100 flex-none">
        <div className="bg-[#f26d60] h-px w-[461px]" data-name="line" />
      </div>
    </div>
  );
}

function ShortPositionBackgroundImage() {
  return (
    <div className="absolute contents left-[calc(27.78%+35px)] top-[252px]">
      <div className="absolute bg-[rgba(9,151,126,0.1)] h-[209px] left-[calc(27.78%+35px)] top-[252px] w-[461px]" data-name="bg_red" />
      <BackgroundImage7 additionalClassNames="left-[calc(27.78%+35px)] top-[461px]" />
      <div className="absolute bg-[#1da1f2] h-[209px] left-[calc(27.78%+35px)] opacity-10 top-[462px] w-[461px]" data-name="bg_green" />
    </div>
  );
}

function BackgroundImage6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <ButtonToolDefault className="relative shrink-0 size-[48px]" />
      <ButtonToolDefault className="relative shrink-0 size-[48px]" />
    </div>
  );
}

function ButtonToolDefaultBackgroundImage1() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <div className="absolute bg-white inset-0" data-name="tool_bg" />
      <IconsHorizontalLine className="absolute inset-1/4 overflow-clip" />
    </div>
  );
}

function ButtonToolDefaultBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[48px]">
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

function ButtonToolCursorBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[48px]">
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
  );
}
type BackgroundImage5Props = {
  additionalClassNames?: string;
};

function BackgroundImage5({ additionalClassNames = "" }: BackgroundImage5Props) {
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
type BackgroundImage4Props = {
  additionalClassNames?: string;
};

function BackgroundImage4({ additionalClassNames = "" }: BackgroundImage4Props) {
  return <BackgroundImage5 additionalClassNames={clsx("absolute bottom-3/4 top-[16.67%]", additionalClassNames)} />;
}
type VectorBackgroundImage1Props = {
  additionalClassNames?: string;
};

function VectorBackgroundImage1({ additionalClassNames = "" }: VectorBackgroundImage1Props) {
  return <BackgroundImage5 additionalClassNames={clsx("absolute bottom-[16.67%] top-3/4", additionalClassNames)} />;
}
type IconsDragBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconsDragBackgroundImage({ additionalClassNames = "" }: IconsDragBackgroundImageProps) {
  return (
    <div className={clsx("size-[24px]", additionalClassNames)}>
      <BackgroundImage5 additionalClassNames="absolute inset-[45.83%_58.33%_45.83%_33.33%]" />
      <BackgroundImage4 additionalClassNames="left-[33.33%] right-[58.33%]" />
      <VectorBackgroundImage1 additionalClassNames="left-[33.33%] right-[58.33%]" />
      <BackgroundImage5 additionalClassNames="absolute inset-[45.83%_33.33%_45.83%_58.33%]" />
      <BackgroundImage4 additionalClassNames="left-[58.33%] right-[33.33%]" />
      <VectorBackgroundImage1 additionalClassNames="left-[58.33%] right-[33.33%]" />
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
      <div className="absolute bg-[#dcf5f7] inset-[10.53%_21.43%] rounded-[4px]" data-name="selected_bg" />
      <div className="absolute inset-[18.42%_28.57%] overflow-clip" data-name="icons/lock">
        <IconBackgroundImage1 />
      </div>
    </div>
  );
}
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ additionalClassNames = "" }: BackgroundImage3Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("flex h-[32px] items-center justify-center w-px", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-px rounded-[6px] w-[32px]" data-name="divider" />
      </div>
    </div>
  );
}
type ColorBackgroundImageProps = {
  additionalClassNames?: string;
};

function ColorBackgroundImage({ additionalClassNames = "" }: ColorBackgroundImageProps) {
  return (
    <div className={clsx("absolute bg-white h-[4px] rounded-[1px] w-[24px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-[-0.5px] pointer-events-none rounded-[1.5px]" />
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <BackgroundImage11>
      <g id="icon">
        <path d={svgPaths.pbbda80} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p6a25a00} id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </BackgroundImage11>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
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
      <BackgroundImage2 additionalClassNames="top-[47px]" />
      <BackgroundImage2 additionalClassNames="top-[12px]" />
      <BackgroundImage2 additionalClassNames="top-[82px]" />
      <BackgroundImage2 additionalClassNames="top-[117px]" />
      <BackgroundImage2 additionalClassNames="top-[187px]" />
      <BackgroundImage2 additionalClassNames="top-[222px]" />
      <BackgroundImage2 additionalClassNames="top-[292px]" />
      <BackgroundImage2 additionalClassNames="top-[327px]" />
      <BackgroundImage2 additionalClassNames="top-[397px]" />
      <BackgroundImage2 additionalClassNames="top-[432px]" />
      <BackgroundImage2 additionalClassNames="top-[502px]" />
      <BackgroundImage2 additionalClassNames="top-[537px]" />
      <BackgroundImage2 additionalClassNames="top-[607px]" />
      <BackgroundImage2 additionalClassNames="top-[642px]" />
      <BackgroundImage2 additionalClassNames="top-[152px]" />
      <BackgroundImage2 additionalClassNames="top-[257px]" />
      <BackgroundImage2 additionalClassNames="top-[362px]" />
      <BackgroundImage2 additionalClassNames="top-[467px]" />
      <BackgroundImage2 additionalClassNames="top-[572px]" />
      <BackgroundImage2 additionalClassNames="top-[677px]" />
      <BackgroundImage2 additionalClassNames="top-[712px]" />
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
        <BackgroundImage1 />
        <div className="absolute contents left-[1304px] top-[178px]">
          <div className="absolute bg-[#09977e] h-[19px] left-[1304px] top-[178px] w-[64px]" data-name="card_bg" />
          <div className="absolute bg-white h-px left-[1304px] top-[187px] w-[4px]" data-name="indicator_line" />
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[180px] whitespace-nowrap">{"12600.00"}</p>
        </div>
        <div className="absolute contents left-[1304px] top-[388px]">
          <div className="absolute bg-[#f26d60] h-[19px] left-[1304px] top-[388px] w-[64px]" data-name="card_bg" />
          <div className="absolute bg-white h-px left-[1304px] top-[397px] w-[4px]" data-name="indicator_line" />
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[390px] whitespace-nowrap">{"11400.00"}</p>
        </div>
        <div className="absolute contents left-[1304px] top-[598px]">
          <div className="absolute bg-[#1da1f2] h-[19px] left-[1304px] top-[598px] w-[64px]" data-name="card_bg" />
          <div className="absolute bg-white h-px left-[1304px] top-[607px] w-[4px]" data-name="indicator_line" />
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[600px] whitespace-nowrap">{"10200.00"}</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundImage1() {
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

function BackgroundImage() {
  return (
    <div className="absolute inset-[-0.5px_-2.08%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
        <path d="M0.5 0.5H24.5" id="Vector 48" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <div className="absolute inset-[20.83%]">
      <div className="absolute inset-[-3.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <g id="icon">
            <path d="M0.5 3.125V0.5H14.5V3.125" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.875 14.5H10.125" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5 0.5V14.5" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
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

function IconsSmallChevronDownBackgroundImage() {
  return (
    <div className="absolute overflow-clip right-[2px] size-[24px] top-[4px]">
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
        <IconBackgroundImage />
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
      <BackgroundImage11>
        <g id="bin">
          <path d="M0.5 3.70001H2.05556H14.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2649000} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.94446 7.70001V12.5" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.05566 7.70001V12.5" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </BackgroundImage11>
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

function CheckboxLUnchecked({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="checkbox/L/unchecked">
      <div className="absolute border border-[rgba(62,62,62,0.2)] border-solid inset-0 rounded-[2px]" data-name="checkbox/unchecked" />
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
              <BackgroundImage15 additionalClassNames="inset-[-3.13%]">
                <path d={svgPaths.p37c74100} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage15>
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
              <BackgroundImage15 additionalClassNames="inset-[-3.13%_-3.13%_-3.12%_-3.13%]">
                <path d={svgPaths.pb3a6d80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage15>
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

export default function LongPosition() {
  return (
    <div className="bg-[#efeff4] relative size-full" data-name="Long Position">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[103px] text-black top-[96px] uppercase whitespace-nowrap">Long position</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[70px] text-black top-[1064px] whitespace-nowrap">Edit mode</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[1659px] not-italic text-[70px] text-black top-[1064px] whitespace-nowrap">No menu</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[3194px] not-italic text-[70px] text-black top-[1064px] whitespace-nowrap">On chart</p>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[124px] overflow-clip top-[1231px] w-[1440px]" data-name="long_position/edit_mode or hover">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLineBackgroundImage text="22" text1="19" text2="12" text3="8" text4="5" text5="15" text6="Oct" text7="28" text8="24" text9="21" text10="17" text11="14" text12="10" text13="7" text14="4" text15="Sep" text16="27" text17="24" text18="20" text19="17" />
          <RighstSideBarBackgroundImage />
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <ChartLayoutBackgroundImage />
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
            <div className="absolute contents left-[737px] top-[56px]" data-name="tool_menu_extended/long_position">
              <div className="absolute bg-white border border-[#f8f8ff] border-solid h-[40px] left-[737px] rounded-[6px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)] top-[56px] w-[527px]" data-name="bg_tool_menu" />
              <div className="absolute h-[38px] left-[1206px] top-[57px] w-[56px]" data-name="delete">
                <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
              </div>
              <BackgroundImage3 additionalClassNames="absolute left-[1205px] top-[60px]" />
              <LockBackgroundImage additionalClassNames="absolute left-[1149px] top-[57px]" />
              <BackgroundImage3 additionalClassNames="absolute left-[1148px] top-[60px]" />
              <MenuItemIconDefault className="absolute h-[38px] left-[1082px] top-[57px] w-[66px]" />
              <BackgroundImage3 additionalClassNames="absolute left-[1081px] top-[60px]" />
              <MenuItemIconDefault className="absolute h-[38px] left-[1015px] top-[57px] w-[66px]" />
              <BackgroundImage3 additionalClassNames="absolute left-[1014px] top-[60px]" />
              <Icon className="absolute h-[38px] left-[958px] top-[57px] w-[56px]" />
              <BackgroundImage3 additionalClassNames="absolute left-[957px] top-[60px]" />
              <div className="absolute contents left-[909px] top-[57px]" data-name="bg_color">
                <div className="absolute bg-white h-[38px] left-[909px] rounded-br-[6px] rounded-tr-[6px] top-[57px] w-[48px]" data-name="bg" />
                <div className="absolute bg-size-[auto_auto,40.00000059604645px_40.00000059604645px] bg-top-left h-[4px] left-[921px] rounded-[1px] top-[88px] w-[24px]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(9, 151, 126, 0.1) 0%, rgba(9, 151, 126, 0.1) 100%), url('${imgColor}')` }} />
                <IconsBackgroundColor className="absolute left-[921px] size-[24px] top-[64px]" />
              </div>
              <BackgroundImage3 additionalClassNames="absolute left-[908px] top-[60px]" />
              <div className="absolute contents left-[860px] top-[57px]" data-name="bg_color">
                <div className="absolute bg-white h-[38px] left-[860px] top-[57px] w-[48px]" data-name="bg" />
                <div className="absolute bg-size-[auto_auto,40.00000059604645px_40.00000059604645px] bg-top-left h-[4px] left-[872px] rounded-[1px] top-[88px] w-[24px]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(29, 161, 242, 0.1) 0%, rgba(29, 161, 242, 0.1) 100%), url('${imgColor}')` }} />
                <IconsBackgroundColor className="absolute left-[872px] size-[24px] top-[64px]" />
              </div>
              <BackgroundImage3 additionalClassNames="absolute left-[859px] top-[60px]" />
              <div className="absolute contents left-[811px] top-[57px]" data-name="line_color">
                <div className="absolute bg-white h-[38px] left-[811px] top-[57px] w-[48px]" data-name="bg" />
                <div className="absolute bg-[#3e3e3e] h-px left-[823px] rounded-[6px] top-[75px] w-[24px]" data-name="thickness" />
                <div className="absolute bg-[#f26d60] h-[4px] left-[823px] rounded-[1px] top-[88px] w-[24px]" data-name="color" />
              </div>
              <BackgroundImage3 additionalClassNames="absolute left-[810px] top-[60px]" />
              <div className="absolute contents left-[762px] top-[57px]" data-name="text_color">
                <div className="absolute bg-white h-[38px] left-[762px] top-[57px] w-[48px]" data-name="bg" />
                <ColorBackgroundImage additionalClassNames="left-[774px] top-[88px]" />
                <div className="absolute left-[774px] overflow-clip size-[24px] top-[64px]" data-name="icons/type">
                  <IconBackgroundImage />
                </div>
              </div>
              <BackgroundImage3 additionalClassNames="absolute left-[761px] top-[60px]" />
              <IconsDragBackgroundImage additionalClassNames="absolute left-[737px] top-[64px]" />
            </div>
          </div>
        </div>
        <ToolsBarDefaultBackgroundImage />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <div className="absolute contents left-[calc(27.78%+31px)] top-[234px]" data-name="long_position">
          <ShortPositionBackgroundImage />
          <MarkerBackgroundImage additionalClassNames="left-[calc(27.78%+31px)] top-[248px]" />
          <MarkerBackgroundImage additionalClassNames="left-[calc(27.78%+31px)] top-[457.5px]" />
          <MarkerBackgroundImage additionalClassNames="left-[calc(61.11%+12px)] top-[457.5px]" />
          <MarkerBackgroundImage additionalClassNames="left-[calc(27.78%+31px)] top-[667px]" />
          <LabelBackgroundImageAndText text="Risk/Reward Ratio: 1" additionalClassNames="left-[calc(47.22%-14.5px)] top-[calc(50%+11px)]" />
          <StopBackgroundImageAndText text="Target: 79.79 (30.38%) 7979, Amount: 1124.93" additionalClassNames="left-[calc(47.22%-14px)] top-[calc(50%-207px)]" />
          <TargetBackgroundImageAndText text="Stop: 79.79 (30.38%) 7979, 675.07" additionalClassNames="left-[calc(47.22%-14.5px)] top-[calc(50%+230px)]" />
        </div>
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[1665px] overflow-clip top-[1227px] w-[1440px]" data-name="long_position/default">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLineBackgroundImage text="22" text1="19" text2="12" text3="8" text4="5" text5="15" text6="Oct" text7="28" text8="24" text9="21" text10="17" text11="14" text12="10" text13="7" text14="4" text15="Sep" text16="27" text17="24" text18="20" text19="17" />
          <RighstSideBarBackgroundImage />
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <ChartLayoutBackgroundImage />
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
          </div>
        </div>
        <ToolsBarDefaultBackgroundImage />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <div className="absolute contents left-[calc(27.78%+35px)] top-[252px]" data-name="long_position">
          <ShortPositionBackgroundImage />
        </div>
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[3194px] overflow-clip top-[1231px] w-[1440px]" data-name="long_position/on_chart">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <div className="absolute contents left-0 top-[739px]" data-name="time_line">
            <div className="absolute bg-white h-[33px] left-0 rounded-bl-[6px] rounded-br-[6px] top-[739px] w-[1368px]" data-name="timeline_bg" />
            <div className="absolute bg-[#dcf5f7] h-[32px] left-[803px] opacity-50 top-[740px] w-[133px]" data-name="bg" />
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
            <div className="absolute contents left-[771px] top-[740px]" data-name="date">
              <div className="absolute contents left-[771px] top-[740px]" data-name="cursor_date">
                <div className="absolute bg-[#00b1c7] h-[19px] left-[771px] top-[740px] w-[65px]" data-name="card_bg" />
                <div className="absolute flex h-[4px] items-center justify-center left-[803px] top-[740px] w-[0.5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
                  <div className="-rotate-90 flex-none">
                    <div className="bg-white h-[0.5px] w-[4px]" data-name="indicator" />
                  </div>
                </div>
                <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[778px] not-italic text-[12px] text-white top-[742px] whitespace-nowrap">28 Sep, 20</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-0 top-0" data-name="righst_side_bar">
            <div className="absolute contents left-0 top-0" data-name="price_bar">
              <div className="absolute bg-white h-[772px] left-[1303px] rounded-br-[6px] rounded-tr-[6px] top-0 w-[65px]" data-name="right_side_bar_bg" />
              <div className="absolute bg-[#dcf5f7] h-[209px] left-[1304px] opacity-50 top-[236px] w-[64px]" data-name="bg" />
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
              <BackgroundImage1 />
            </div>
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
              <BackgroundImage2 additionalClassNames="top-[47px]" />
              <BackgroundImage2 additionalClassNames="top-[12px]" />
              <BackgroundImage2 additionalClassNames="top-[82px]" />
              <BackgroundImage2 additionalClassNames="top-[117px]" />
              <BackgroundImage2 additionalClassNames="top-[187px]" />
              <BackgroundImage2 additionalClassNames="top-[222px]" />
              <BackgroundImage2 additionalClassNames="top-[292px]" />
              <BackgroundImage2 additionalClassNames="top-[327px]" />
              <BackgroundImage2 additionalClassNames="top-[397px]" />
              <BackgroundImage2 additionalClassNames="top-[432px]" />
              <BackgroundImage2 additionalClassNames="top-[502px]" />
              <BackgroundImage2 additionalClassNames="top-[537px]" />
              <BackgroundImage2 additionalClassNames="top-[607px]" />
              <BackgroundImage2 additionalClassNames="top-[642px]" />
              <BackgroundImage2 additionalClassNames="top-[152px]" />
              <BackgroundImage2 additionalClassNames="top-[257px]" />
              <BackgroundImage2 additionalClassNames="top-[362px]" />
              <BackgroundImage2 additionalClassNames="top-[467px]" />
              <BackgroundImage2 additionalClassNames="top-[572px]" />
              <BackgroundImage2 additionalClassNames="top-[677px]" />
              <BackgroundImage2 additionalClassNames="top-[712px]" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[209px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[407px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[605px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[869px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[1067px] top-0 w-px" data-name="line_chart" />
              <div className="absolute bg-[#efeff4] h-[772px] left-[1265px] top-0 w-px" data-name="line_chart" />
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
            </div>
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
            <div className="absolute contents left-[680px] top-[8px]" data-name="short_position">
              <div className="absolute contents left-[684px] top-[26px]" data-name="short_position">
                <div className="absolute bg-[rgba(9,151,126,0.1)] h-[209px] left-[684px] top-[26px] w-[461px]" data-name="bg_red" />
                <BackgroundImage7 additionalClassNames="left-[684px] top-[235px]" />
                <div className="absolute bg-[#1da1f2] h-[209px] left-[684px] opacity-10 top-[236px] w-[461px]" data-name="bg_green" />
              </div>
              <MarkerBackgroundImage additionalClassNames="left-[680px] top-[22px]" />
              <MarkerBackgroundImage additionalClassNames="left-[680px] top-[231.5px]" />
              <MarkerBackgroundImage additionalClassNames="left-[1141px] top-[231.5px]" />
              <MarkerBackgroundImage additionalClassNames="left-[680px] top-[441px]" />
              <div className="absolute h-[209px] left-[803px] top-[236px] w-[133px]" data-name="vector">
                <div className="absolute inset-[-0.13%_-0.74%_0_-0.32%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.401 209.268">
                    <g id="vector">
                      <rect fill="var(--fill-0, #1DA1F2)" fillOpacity="0.2" height="209" id="bg_red" width="133" x="0.421997" y="0.268176" />
                      <path d={svgPaths.p24019ff0} fill="var(--stroke-0, #F26D60)" id="vector_2" />
                    </g>
                  </svg>
                </div>
              </div>
              <LabelBackgroundImageAndText text="Risk/Reward Ratio: 1" additionalClassNames="left-[calc(50%+263px)] top-[calc(50%-134.5px)]" />
              <StopBackgroundImageAndText text="Target: 79.79 (30.38%) 7979, Amount: 1124.93" additionalClassNames="left-[calc(50%+263.5px)] top-[calc(50%-352.5px)]" />
              <TargetBackgroundImageAndText text="Stop: 79.79 (30.38%) 7979, 675.07" additionalClassNames="left-[calc(50%+263px)] top-[calc(50%+84.5px)]" />
            </div>
            <div className="absolute contents left-[20px] top-[88px]" data-name="tool_menu_extended/long_position">
              <div className="absolute bg-white border border-[#f8f8ff] border-solid h-[40px] left-[20px] rounded-[6px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)] top-[88px] w-[527px]" data-name="bg_tool_menu" />
              <div className="absolute h-[38px] left-[489px] top-[89px] w-[56px]" data-name="delete">
                <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
              </div>
              <BackgroundImage3 additionalClassNames="absolute left-[488px] top-[92px]" />
              <LockBackgroundImage additionalClassNames="absolute left-[432px] top-[89px]" />
              <BackgroundImage3 additionalClassNames="absolute left-[431px] top-[92px]" />
              <MenuItemIconDefault className="absolute h-[38px] left-[365px] top-[89px] w-[66px]" />
              <BackgroundImage3 additionalClassNames="absolute left-[364px] top-[92px]" />
              <MenuItemIconDefault className="absolute h-[38px] left-[298px] top-[89px] w-[66px]" />
              <BackgroundImage3 additionalClassNames="absolute left-[297px] top-[92px]" />
              <Icon className="absolute h-[38px] left-[241px] top-[89px] w-[56px]" />
              <BackgroundImage3 additionalClassNames="absolute left-[240px] top-[92px]" />
              <div className="absolute contents left-[192px] top-[89px]" data-name="bg_color">
                <div className="absolute bg-white h-[38px] left-[192px] rounded-br-[6px] rounded-tr-[6px] top-[89px] w-[48px]" data-name="bg" />
                <div className="absolute bg-size-[auto_auto,40.00000059604645px_40.00000059604645px] bg-top-left h-[4px] left-[204px] rounded-[1px] top-[120px] w-[24px]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(9, 151, 126, 0.1) 0%, rgba(9, 151, 126, 0.1) 100%), url('${imgColor}')` }} />
                <IconsBackgroundColor className="absolute left-[204px] size-[24px] top-[96px]" />
              </div>
              <BackgroundImage3 additionalClassNames="absolute left-[191px] top-[92px]" />
              <div className="absolute contents left-[143px] top-[89px]" data-name="bg_color">
                <div className="absolute bg-white h-[38px] left-[143px] top-[89px] w-[48px]" data-name="bg" />
                <div className="absolute bg-size-[auto_auto,40.00000059604645px_40.00000059604645px] bg-top-left h-[4px] left-[155px] rounded-[1px] top-[120px] w-[24px]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(29, 161, 242, 0.1) 0%, rgba(29, 161, 242, 0.1) 100%), url('${imgColor}')` }} />
                <IconsBackgroundColor className="absolute left-[155px] size-[24px] top-[96px]" />
              </div>
              <BackgroundImage3 additionalClassNames="absolute left-[142px] top-[92px]" />
              <div className="absolute contents left-[94px] top-[89px]" data-name="line_color">
                <div className="absolute bg-white h-[38px] left-[94px] top-[89px] w-[48px]" data-name="bg" />
                <div className="absolute bg-[#3e3e3e] h-px left-[106px] rounded-[6px] top-[107px] w-[24px]" data-name="thickness" />
                <div className="absolute bg-[#f26d60] h-[4px] left-[106px] rounded-[1px] top-[120px] w-[24px]" data-name="color" />
              </div>
              <BackgroundImage3 additionalClassNames="absolute left-[93px] top-[92px]" />
              <div className="absolute contents left-[45px] top-[89px]" data-name="text_color">
                <div className="absolute bg-white h-[38px] left-[45px] top-[89px] w-[48px]" data-name="bg" />
                <ColorBackgroundImage additionalClassNames="left-[57px] top-[120px]" />
                <div className="absolute left-[57px] overflow-clip size-[24px] top-[96px]" data-name="icons/type">
                  <IconBackgroundImage />
                </div>
              </div>
              <BackgroundImage3 additionalClassNames="absolute left-[44px] top-[92px]" />
              <IconsDragBackgroundImage additionalClassNames="absolute left-[20px] top-[96px]" />
            </div>
          </div>
          <div className="absolute contents left-[18px] top-0" data-name="exchange_description">
            <div className="absolute bg-white content-stretch flex gap-[12px] items-center left-[18px] top-[36px]" data-name="description_figures">
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
            <div className="absolute bg-white content-stretch flex gap-[16px] items-center left-[18px] py-[10px] top-0" data-name="exchange_description">
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-pre">{`Bitcoin  / U.S. Dollar  ·  1D  ·  COINBASE`}</p>
              <div className="relative shrink-0 size-[16px]" data-name="market_open">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="market_open">
                    <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" fillOpacity="0.2" id="bg" r="8" />
                    <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" id="dot" r="4" />
                  </g>
                </svg>
              </div>
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-pre">
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">O</span>
                <span className="leading-[normal]">{` `}</span>
                <span className="leading-[normal] text-[#f26d60]">13065.10</span>
                <span className="leading-[normal]">{`   `}</span>
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">H</span>
                <span className="leading-[normal]">{` `}</span>
                <span className="leading-[normal] text-[#f26d60]">13480.00</span>
                <span className="leading-[normal]">{`  `}</span>
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">L</span>
                <span className="leading-[normal]">{` `}</span>
                <span className="leading-[normal] text-[#f26d60]">13057.09</span>
                <span className="leading-[normal]">{`  `}</span>
                <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{`C `}</span>
                <span className="leading-[normal] text-[#f26d60]">13407.46</span>
                <span className="leading-[normal]">{`     `}</span>
              </p>
              <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f26d60] text-[12px] whitespace-pre">{`+340.73 (+2.61%)  `}</p>
            </div>
          </div>
          <div className="absolute contents left-[1304px] top-[17px]" data-name="price">
            <div className="absolute bg-[#09977e] h-[19px] left-[1304px] top-[17px] w-[64px]" data-name="card_bg" />
            <div className="absolute bg-white h-px left-[1304px] top-[26px] w-[4px]" data-name="indicator_line" />
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[19px] whitespace-nowrap">13480.00</p>
          </div>
          <div className="absolute bg-white content-stretch flex items-center left-[1319px] px-[6px] py-[4px] rounded-[4px] top-[8px]" data-name="currency">
            <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-nowrap">USD</p>
          </div>
        </div>
        <div className="absolute h-[836px] left-0 top-[64px] w-[48px]" data-name="tools_bar/default">
          <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
          <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-0 top-0">
            <div className="content-stretch flex flex-col items-start relative shrink-0">
              <ButtonToolCursorBackgroundImage />
              <ButtonToolDefaultBackgroundImage />
              <ButtonToolDefaultBackgroundImage1 />
              <ButtonToolDefault className="relative shrink-0 size-[48px]" />
              <ButtonToolDefault className="relative shrink-0 size-[48px]" />
              <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
                <div className="absolute bg-white inset-0" data-name="tool_bg" />
                <div className="absolute bg-[#dcf5f7] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
                <div className="absolute inset-1/4 overflow-clip" data-name="icons/short_position">
                  <BackgroundImage10>
                    <path d="M2.125 7.00004L18.375 15.125" id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.5 7.00004L18.375 7.00004" id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.5 2.12504L18.375 2.12504" id="Vector_3" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0.5 15.125L18.375 15.125" id="Vector_4" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.peae880} fill="var(--fill-0, #DCF5F7)" id="Vector_5" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p3371f000} fill="var(--fill-0, #DCF5F7)" id="Vector_6" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p15376380} fill="var(--fill-0, #DCF5F7)" id="Vector_7" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p1230e400} fill="var(--fill-0, #DCF5F7)" id="Vector_8" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                  </BackgroundImage10>
                </div>
              </div>
              <ButtonToolDefault className="relative shrink-0 size-[48px]" />
              <ButtonToolDefault className="relative shrink-0 size-[48px]" />
              <ButtonToolDefault className="relative shrink-0 size-[48px]" />
              <ButtonToolDefault className="relative shrink-0 size-[48px]" />
              <ButtonToolDefault className="relative shrink-0 size-[48px]" />
            </div>
            <div className="bg-[#efeff4] h-px rounded-[6px] shrink-0 w-[32px]" data-name="divider" />
            <BackgroundImage6 />
            <div className="bg-[#efeff4] h-px rounded-[6px] shrink-0 w-[32px]" data-name="divider" />
            <ButtonToolDefault className="relative shrink-0 size-[48px]" />
          </div>
        </div>
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <div className="absolute contents left-[calc(94.44%+4px)] top-[291px]" data-name="price">
          <div className="absolute contents left-[calc(94.44%+4px)] top-[291px]" data-name="price">
            <div className="absolute bg-[#f26d60] h-[19px] left-[calc(94.44%+4px)] top-[291px] w-[64px]" data-name="card_bg" />
            <div className="absolute bg-white h-px left-[calc(94.44%+4px)] top-[300px] w-[4px]" data-name="indicator_line" />
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(100%-68px)] not-italic text-[12px] text-white top-[293px] whitespace-nowrap">12350.00</p>
          </div>
          <div className="absolute contents left-[calc(94.44%+4px)] top-[499px]" data-name="price">
            <div className="absolute bg-[#1da1f2] h-[19px] left-[calc(94.44%+4px)] top-[499px] w-[64px]" data-name="card_bg" />
            <div className="absolute bg-white h-px left-[calc(94.44%+4px)] top-[508px] w-[4px]" data-name="indicator_line" />
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(100%-68px)] not-italic text-[12px] text-white top-[501px] whitespace-nowrap">11190.00</p>
          </div>
        </div>
      </div>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[1055px] not-italic text-[20px] text-black top-[278px] whitespace-nowrap">Extended settings</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[130px] not-italic text-[20px] text-black top-[352px] whitespace-nowrap">Menus</p>
      <div className="absolute contents left-[130px] top-[449px]" data-name="tool_menu_extended/long_position">
        <div className="absolute bg-white content-stretch flex items-center left-[130px] py-px rounded-[6px] top-[449px]">
          <div aria-hidden="true" className="absolute border border-[#f8f8ff] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)]" />
          <IconsDragBackgroundImage additionalClassNames="relative shrink-0" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <div className="h-[38px] relative shrink-0 w-[48px]" data-name="menu_item/text_color">
            <div className="absolute bg-white inset-0" data-name="bg" />
            <div className="absolute bg-white bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color">
              <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-[-0.5px] pointer-events-none rounded-[1.5px]" />
            </div>
            <div className="absolute bottom-[18.42%] left-1/4 overflow-clip right-1/4 top-[18.42%]" data-name="icons/type">
              <IconBackgroundImage />
            </div>
          </div>
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <div className="h-[38px] relative shrink-0 w-[48px]" data-name="menu_item/line_color">
            <div className="absolute bg-white inset-0" data-name="bg" />
            <div className="absolute bg-[#3e3e3e] bottom-1/2 left-1/4 right-1/4 rounded-[6px] top-[47.37%]" data-name="thickness" />
            <div className="absolute bg-[#f26d60] bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" />
          </div>
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <MenuItemBgColorBackgroundImage />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <div className="h-[38px] relative shrink-0 w-[48px]" data-name="menu_item/bg_color">
            <div className="absolute bg-white inset-0" data-name="bg" />
            <div className="absolute bg-size-[auto_auto,40.00000059604645px_40.00000059604645px] bg-top-left bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(9, 151, 126, 0.1) 0%, rgba(9, 151, 126, 0.1) 100%), url('${imgColor}')` }} />
            <IconsBackgroundColor className="absolute bottom-[18.42%] left-1/4 right-1/4 top-[18.42%]" />
          </div>
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <Icon className="h-[38px] relative shrink-0 w-[56px]" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <LockBackgroundImage additionalClassNames="relative shrink-0" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <div className="h-[38px] relative shrink-0 w-[56px]" data-name="delete">
            <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[130px] top-[400px]" data-name="tool_menu/long_position">
        <div className="absolute bg-white content-stretch flex items-center left-[130px] py-px rounded-[6px] top-[400px]">
          <div aria-hidden="true" className="absolute border border-[#f8f8ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <IconsDragBackgroundImage additionalClassNames="relative shrink-0" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <MenuItemTextColor className="h-[38px] relative shrink-0 w-[48px]" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <MenuItemLineColor className="h-[38px] relative shrink-0 w-[48px]" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <MenuItemBgColorBackgroundImage />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <div className="h-[38px] relative shrink-0 w-[48px]" data-name="menu_item/bg_color">
            <div className="absolute bg-size-[auto_auto,40.00000059604645px_40.00000059604645px] bg-top-left bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(9, 151, 126, 0.1) 0%, rgba(9, 151, 126, 0.1) 100%), url('${imgColor}')` }} />
            <IconsBackgroundColor className="absolute bottom-[18.42%] left-1/4 right-1/4 top-[18.42%]" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[311px] right-[4289px] top-[507px]" data-name="tool_menu/layers">
        <div className="absolute bg-white border border-[#efeff4] border-solid h-[150px] left-[311px] right-[4289px] rounded-[4px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)] top-[507px]" data-name="bg" />
        <ListItem32SBackgroundImageAndText text="Bring to Front" additionalClassNames="left-[312px] right-[4290px] top-[515px]" />
        <div className="absolute h-[32px] left-[312px] right-[4290px] top-[549px]" data-name="list_item_32/S">
          <div className="absolute bg-[#f8f8ff] h-[32px] left-0 right-0 top-0" data-name="bg" />
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[12px] text-black top-[8px] whitespace-nowrap">Send to Back</p>
        </div>
        <ListItem32SBackgroundImageAndText text="Bring Forward" additionalClassNames="left-[312px] right-[4290px] top-[583px]" />
        <ListItem32SBackgroundImageAndText text="Send Backwards" additionalClassNames="left-[312px] right-[4290px] top-[617px]" />
      </div>
      <div className="absolute contents left-[441px] top-[507px]" data-name="tool_menu/copy">
        <div className="absolute bg-white border border-[#efeff4] border-solid h-[80px] left-[441px] right-[4213px] rounded-[4px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)] top-[507px]" data-name="bg" />
        <ListItem32SBackgroundImageAndText text="Copy" additionalClassNames="left-[442px] top-[515px] w-[64px]" />
        <ListItem32SBackgroundImageAndText text="Clone" additionalClassNames="left-[442px] top-[547px] w-[64px]" />
      </div>
      <div className="absolute h-[252px] left-[135px] top-[507px] w-[164px]" data-name="tool_menu/color">
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
      <div className="absolute border border-[#efeff4] border-solid h-[641px] left-[1059px] overflow-clip rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[341px] w-[350px]" data-name="tool_menu/short_position/inputs">
        <div className="absolute contents left-[-1px] top-[-1px]" data-name="tool_menu/short_position/inputs">
          <div className="absolute bg-white h-[641px] left-0 rounded-[6px] top-0 w-[350px]" data-name="bg_modal" />
          <ButtonTextDefaultBackgroundImageAndText text="Reset Settings" additionalClassNames="top-[601px]" />
          <ButtonSecondarySDefault className="absolute h-[32px] left-[calc(33.33%+43.33px)] top-[594px] w-[80px]" />
          <ButtonSPrimaryDefault className="absolute h-[32px] left-[calc(66.67%+21.67px)] top-[594px] w-[80px]" />
          <div className="absolute contents left-[15px] top-[423px]" data-name="stop_level">
            <div className="absolute bg-[#efeff4] h-px left-[15px] rounded-[6px] top-[423px] w-[320px]" data-name="divider" />
            <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[444px] whitespace-nowrap">Stop Level</p>
            <div className="absolute contents left-[15px] top-[478px]" data-name="line_description">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[484px] whitespace-nowrap">Ticks</p>
              <InputSFilledBackgroundImageAndText text="3579" additionalClassNames="top-[478px]" />
            </div>
            <div className="absolute contents left-[15px] top-[530px]" data-name="line_description">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[536px] whitespace-nowrap">Price</p>
              <InputSFilledBackgroundImageAndText text="359.78" additionalClassNames="top-[530px]" />
            </div>
          </div>
          <div className="absolute contents left-[15px] top-[264px]" data-name="profit_level">
            <div className="absolute bg-[#efeff4] h-px left-[15px] rounded-[6px] top-[264px] w-[320px]" data-name="divider" />
            <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[285px] whitespace-nowrap">Profit Level</p>
            <div className="absolute contents left-[15px] top-[319px]" data-name="line_description">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[325px] whitespace-nowrap">Ticks</p>
              <InputSFilledBackgroundImageAndText text="3579" additionalClassNames="top-[319px]" />
            </div>
            <div className="absolute contents left-[15px] top-[371px]" data-name="line_description">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[377px] whitespace-nowrap">Price</p>
              <InputSFilledBackgroundImageAndText text="435" additionalClassNames="top-[371px]" />
            </div>
          </div>
          <div className="absolute contents left-[15px] top-[108px]" data-name="settings">
            <div className="absolute contents left-[15px] top-[108px]" data-name="line_description">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[114px] whitespace-nowrap">Account Size</p>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(66.67%-0.33px)] not-italic text-[#1f1f1f] text-[14px] top-[114px] whitespace-nowrap">USD</p>
              <InputSFilledBackgroundImageAndText text="1000" additionalClassNames="top-[108px]" />
            </div>
            <div className="absolute contents left-[15px] top-[212px]" data-name="line_description">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[218px] whitespace-nowrap">Entry Price</p>
              <InputSFilledBackgroundImageAndText text="395.55" additionalClassNames="top-[212px]" />
            </div>
            <div className="absolute contents left-[15px] top-[160px]" data-name="line_description">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[166px] whitespace-nowrap">Risk</p>
              <InputSFilledBackgroundImageAndText text="25.00" additionalClassNames="top-[160px]" />
              <div className="absolute h-[32px] left-[calc(66.67%+10.67px)] top-[160px] w-[91px]" data-name="dropdown/text_left/default">
                <div className="absolute bg-white border border-[#efeff4] border-solid h-[32px] left-0 right-0 rounded-[4px] top-0" data-name="box" />
                <IconsSmallChevronDownBackgroundImage />
                <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[12px] not-italic text-[#1f1f1f] text-[14px] top-[6px] whitespace-nowrap">%</p>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[15px] top-[56px]" data-name="tabs">
            <div className="absolute contents left-[15px] top-[57px]" data-name="style">
              <div className="absolute bg-[#efeff4] h-px left-[15px] rounded-[6px] top-[87px] w-[320px]" data-name="divider" />
              <div className="absolute bg-[#00b1c7] h-px left-[15px] rounded-[6px] top-[87px] w-[39px]" data-name="divider" />
              <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#00b1c7] text-[14px] top-[57px] whitespace-nowrap">Inputs</p>
            </div>
            <div className="absolute contents left-[calc(16.67%+19.67px)] top-[56px]" data-name="text">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%+19.67px)] not-italic text-[#1f1f1f] text-[14px] top-[56px] whitespace-nowrap">Style</p>
            </div>
          </div>
          <ModalHeaderMBackgroundImageAndText text="Long Position" />
        </div>
      </div>
      <div className="absolute border border-[#efeff4] border-solid h-[528px] left-[1449px] overflow-clip rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[341px] w-[350px]" data-name="tool_menu/short_position/style">
        <div className="absolute contents left-[-1px] top-[-1px]" data-name="tool_menu/short_position/style">
          <div className="absolute bg-white h-[528px] left-0 rounded-[6px] top-0 w-[350px]" data-name="bg_modal" />
          <ButtonTextDefaultBackgroundImageAndText text="Reset Settings" additionalClassNames="top-[488px]" />
          <ButtonSecondarySDefault className="absolute h-[32px] left-[calc(33.33%+43.33px)] top-[481px] w-[80px]" />
          <ButtonSPrimaryDefault className="absolute h-[32px] left-[calc(66.67%+21.67px)] top-[481px] w-[80px]" />
          <div className="absolute contents left-[15px] top-[316px]" data-name="chackboxes">
            <div className="absolute contents left-[15px] top-[337px]" data-name="checkbox_item/unchecked">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[339px] whitespace-nowrap">Show price labels</p>
              <div className="absolute left-[15px] size-[24px] top-[337px]" data-name="checkbox/L/checked">
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
            </div>
            <div className="absolute contents left-[15px] top-[381px]" data-name="checkbox_item/unchecked">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[383px] whitespace-nowrap">Compact stats mode</p>
              <CheckboxLUnchecked className="absolute left-[15px] size-[24px] top-[381px]" />
            </div>
            <div className="absolute contents left-[15px] top-[425px]" data-name="checkbox_item/unchecked">
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%-7.33px)] not-italic text-[#1f1f1f] text-[14px] top-[427px] whitespace-nowrap">Always show stats</p>
              <CheckboxLUnchecked className="absolute left-[15px] size-[24px] top-[425px]" />
            </div>
            <div className="absolute bg-[#efeff4] h-px left-[15px] rounded-[6px] top-[316px] w-[320px]" data-name="divider" />
          </div>
          <div className="absolute contents left-[15px] top-[264px]" data-name="text">
            <div className="absolute left-[calc(50%+12px)] size-[32px] top-[264px]" data-name="dropdown/color/default">
              <div className="absolute flex inset-0 items-center justify-center">
                <BackgroundImage8 additionalClassNames="size-[32px]" />
              </div>
              <div className="absolute bg-white inset-[12.5%] rounded-[2px]" data-name="color">
                <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-[-0.5px] pointer-events-none rounded-[2.5px]" />
              </div>
            </div>
            <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[271px] whitespace-nowrap">Text</p>
            <div className="absolute h-[32px] left-[calc(66.67%-2.33px)] top-[264px] w-[104px]" data-name="dropdown/font_size/default">
              <div className="absolute flex h-[32px] items-center justify-center left-0 right-0 top-0">
                <BackgroundImage8 additionalClassNames="h-[62px] w-[32px]" />
              </div>
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(50%-15px)] not-italic text-[#1f1f1f] text-[14px] top-[calc(50%-10px)] whitespace-nowrap">14</p>
              <IconsSmallChevronDownBackgroundImage />
            </div>
          </div>
          <div className="absolute contents left-[15px] top-[212px]" data-name="target_color">
            <div className="absolute left-[calc(50%+12px)] size-[32px] top-[212px]" data-name="dropdown/color/default">
              <div className="absolute flex inset-0 items-center justify-center">
                <BackgroundImage8 additionalClassNames="size-[32px]" />
              </div>
              <div className="absolute bg-size-[auto_auto,97.00000286102295px_97.00000286102295px] bg-top-left inset-[12.5%] rounded-[4px]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(9, 151, 126, 0.1) 0%, rgba(9, 151, 126, 0.1) 100%), url('${imgColor}')` }} />
            </div>
            <div className="absolute contents left-[15px] top-[219px]" data-name="line_description">
              <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[219px] whitespace-nowrap">Target Color</p>
            </div>
          </div>
          <div className="absolute contents left-[15px] top-[160px]" data-name="stop_color">
            <div className="absolute left-[calc(50%+12px)] size-[32px] top-[160px]" data-name="dropdown/color/default">
              <div className="absolute flex inset-0 items-center justify-center">
                <BackgroundImage8 additionalClassNames="size-[32px]" />
              </div>
              <div className="absolute bg-size-[auto_auto,97.00000286102295px_97.00000286102295px] bg-top-left inset-[12.5%] rounded-[4px]" data-name="color" style={{ backgroundImage: `linear-gradient(90deg, rgba(29, 161, 242, 0.1) 0%, rgba(29, 161, 242, 0.1) 100%), url('${imgColor}')` }} />
            </div>
            <div className="absolute contents left-[15px] top-[167px]" data-name="line_description">
              <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[167px] whitespace-nowrap">Stop Color</p>
            </div>
          </div>
          <div className="absolute contents left-[15px] top-[108px]" data-name="lines">
            <DropdownWidthStyleDefault className="absolute h-[32px] left-[calc(66.67%-2.33px)] top-[108px] w-[104px]" />
            <div className="absolute left-[calc(50%+12px)] size-[32px] top-[108px]" data-name="dropdown/color/default">
              <div className="absolute flex inset-0 items-center justify-center">
                <BackgroundImage8 additionalClassNames="size-[32px]" />
              </div>
              <div className="absolute bg-[#f26d60] inset-[12.5%] rounded-[2px]" data-name="color" />
            </div>
            <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[115px] whitespace-nowrap">Lines</p>
          </div>
          <div className="absolute contents left-[15px] top-[56px]" data-name="tabs">
            <div className="absolute contents left-[15px] top-[56px]" data-name="style">
              <div className="absolute bg-[#efeff4] h-px left-[15px] rounded-[6px] top-[87px] w-[320px]" data-name="divider" />
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[56px] whitespace-nowrap">Inputs</p>
            </div>
            <div className="absolute contents left-[calc(16.67%+19.67px)] top-[56px]" data-name="text">
              <div className="absolute bg-[#00b1c7] inset-[16.48%_68.86%_83.33%_22.29%] rounded-[6px]" data-name="underline" />
              <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[calc(16.67%+19.67px)] not-italic text-[#00b1c7] text-[14px] top-[56px] whitespace-nowrap">Style</p>
            </div>
          </div>
          <ModalHeaderMBackgroundImageAndText text="Long Position" />
        </div>
      </div>
      <div className="absolute h-[296px] left-[1821px] top-[603px] w-[103px]" data-name="tool_menu/font_size">
        <div className="absolute contents inset-0" data-name="menu_right_end">
          <div className="absolute bg-white border border-[#efeff4] border-solid inset-0 rounded-[4px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)]" data-name="bg" />
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
        <LongPositionFontSizeBackgroundImageAndText text="16" additionalClassNames="bottom-1/2 top-[40.54%]" />
        <LongPositionFontSizeBackgroundImageAndText text="20" additionalClassNames="bottom-[40.54%] top-1/2" />
        <BackgroundImageAndText1 text="24" additionalClassNames="absolute inset-[59.46%_1.61%_31.08%_1.61%]" />
        <BackgroundImageAndText1 text="28" additionalClassNames="absolute inset-[68.92%_1.61%_21.62%_1.61%]" />
        <BackgroundImageAndText1 text="32" additionalClassNames="absolute inset-[78.38%_1.61%_12.16%_1.61%]" />
        <BackgroundImageAndText1 text="40" additionalClassNames="absolute inset-[87.84%_1.61%_2.7%_1.61%]" />
      </div>
      <div className="absolute h-[48px] left-[1821px] top-[537px] w-[159px]" data-name="line_menu/line_width">
        <div className="absolute bg-white border border-[#efeff4] border-solid inset-0 rounded-[4px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)]" data-name="bg" />
        <div className="absolute bottom-full contents left-0 right-full top-0" data-name="styles" />
        <div className="absolute bottom-1/2 left-[10.06%] right-[10.06%] top-1/2" data-name="line">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 1">
              <path d="M0 0.5H127" id="line" stroke="var(--stroke-0, #1F1F1F)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_85.53%_37.5%_6.92%]" data-name="chosen_type">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <circle cx="6" cy="6" fill="var(--fill-0, #00B1C7)" fillOpacity="0.1" id="chosen_type" r="6" />
          </svg>
        </div>
        <div className="absolute inset-[39.58%_9.43%]" data-name="width">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129 10">
            <g id="width">
              <circle cx="41" cy="5" fill="var(--fill-0, #3E3E3E)" id="S" r="3" />
              <circle cx="124" cy="5" fill="var(--fill-0, #3E3E3E)" id="L" r="5" />
              <circle cx="82" cy="5" fill="var(--fill-0, #3E3E3E)" id="M" r="4" />
              <circle cx="2" cy="5" fill="var(--fill-0, #00B1C7)" id="XS" r="2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute contents inset-[41.82%_75.61%_54.84%_22.48%]" data-name="dropdown/precision">
        <div className="absolute bg-white border border-[#efeff4] border-solid inset-[41.82%_75.61%_54.84%_22.48%] rounded-[4px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)]" data-name="bg" />
        <div className="absolute inset-[42.15%_75.63%_56.51%_22.49%]" data-name="list_item/32/centered">
          <div className="absolute bg-[#f8f8ff] h-[32px] left-0 right-0 top-0" data-name="bg" />
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(50%+0.5px)] not-italic text-[#1f1f1f] text-[12px] text-center top-[calc(50%-10px)] whitespace-nowrap">%</p>
        </div>
        <div className="absolute inset-[43.49%_75.63%_55.18%_22.49%]" data-name="list_item/32/centered">
          <div className="absolute bg-white h-[32px] left-0 right-0 top-0" data-name="bg" />
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(50%+0.5px)] not-italic text-[#1f1f1f] text-[12px] text-center top-[calc(50%-10px)] whitespace-nowrap">USD</p>
        </div>
      </div>
      <div className="absolute left-[3221px] size-[32px] top-[539px]" data-name="dropdown/color/default">
        <div className="absolute flex inset-0 items-center justify-center">
          <BackgroundImage8 additionalClassNames="size-[32px]" />
        </div>
        <div className="absolute bg-[#00b1c7] inset-[12.5%] rounded-[4px]" data-name="color" />
      </div>
      <div className="absolute contents left-[2592px] top-[329px]">
        <div className="absolute contents left-[2649px] top-[380px]" data-name="thickness">
          <div className="absolute left-[2649px] overflow-clip size-[24px] top-[380px]" data-name="icons/small_chevron/down" />
        </div>
        <div className="absolute contents left-[2592px] top-[329px]" data-name="tooltip">
          <BackgroundImage12 additionalClassNames="left-[calc(50%+302.5px)] top-[calc(50%-853.5px)]">{`Line Thickness & Style`}</BackgroundImage12>
          <BackgroundImage9 additionalClassNames="inset-[15.03%_43.43%_84.68%_56.27%]" />
        </div>
      </div>
      <Icon className="absolute h-[38px] left-[2771px] top-[373px] w-[56px]" />
      <div className="absolute contents left-[2763px] top-[329px]" data-name="tooltip">
        <BackgroundImageAndText text="Settings" additionalClassNames="left-[2763px]" />
        <BackgroundImage9 additionalClassNames="inset-[15.03%_40.57%_84.68%_59.13%]" />
      </div>
      <MenuItemIconDefault className="absolute h-[38px] left-[2899px] top-[373px] w-[66px]" />
      <div className="absolute contents left-[2886px] top-[329px]" data-name="tooltip">
        <BackgroundImageAndText text="Visual Order" additionalClassNames="left-[2886px]" />
        <BackgroundImage9 additionalClassNames="inset-[15.03%_37.75%_84.68%_61.95%]" />
      </div>
      <MenuItemIconDefault className="absolute h-[38px] left-[3035px] top-[373px] w-[66px]" />
      <div className="absolute contents left-[3023px] top-[329px]" data-name="tooltip">
        <TooltipBackgroundImageAndText1 text="Clone, Copy" additionalClassNames="left-[3023px] top-[329px]" />
        <BackgroundImage9 additionalClassNames="inset-[15.03%_34.85%_84.68%_64.85%]" />
      </div>
      <div className="absolute h-[38px] left-[3257px] top-[373px] w-[56px]" data-name="delete">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
      </div>
      <div className="absolute contents left-[3249px] top-[329px]" data-name="tooltip">
        <TooltipBackgroundImageAndText1 text="Remove" additionalClassNames="left-[3249px] top-[329px]" />
        <BackgroundImage9 additionalClassNames="inset-[15.03%_30.28%_84.68%_69.43%]" />
      </div>
      <div className="absolute h-[38px] left-[3155px] top-[373px] w-[56px]" data-name="lock">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <div className="absolute bg-[rgba(0,177,199,0.1)] inset-[10.53%_21.43%] rounded-[4px]" data-name="selected_bg" />
        <div className="absolute inset-[18.42%_28.57%] overflow-clip" data-name="icons/lock">
          <IconBackgroundImage1 />
        </div>
      </div>
      <div className="absolute contents left-[3156px] top-[329px]" data-name="tooltip">
        <TooltipBackgroundImageAndText1 text="Lock" additionalClassNames="left-[3156px] top-[329px]" />
        <BackgroundImage9 additionalClassNames="inset-[15.03%_32.42%_84.68%_67.29%]" />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[2592px] not-italic text-[20px] text-black top-[278px] whitespace-nowrap">Tooltips</p>
      <DropdownWidthStyleDefault className="absolute h-[32px] left-[2632px] top-[417px] w-[62px]" />
      <div className="absolute h-[38px] left-[2632px] top-[373px] w-[62px]" data-name="menu_item/width_style/solid_1">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-7px)] top-[calc(50%-0.5px)] w-[24px]">
          <BackgroundImage />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+17px)] overflow-clip size-[24px] top-1/2" data-name="icons/small_chevron/down">
          <VectorBackgroundImage />
        </div>
      </div>
      <div className="absolute contents left-[2842px] top-[489px]" data-name="tooltip">
        <BackgroundImage12 additionalClassNames="left-[calc(50%+546.5px)] top-[calc(50%-693.5px)]">Background Color 1</BackgroundImage12>
        <BackgroundImage9 additionalClassNames="inset-[21.7%_38.28%_78.01%_61.42%]" />
      </div>
      <div className="absolute contents left-[2994px] top-[489px]" data-name="tooltip">
        <TooltipBackgroundImage additionalClassNames="left-[calc(50%+699.5px)]">{`Background Color  2`}</TooltipBackgroundImage>
        <BackgroundImage9 additionalClassNames="inset-[21.7%_35.04%_78.01%_64.66%]" />
      </div>
      <div className="absolute contents left-[3176px] top-[489px]" data-name="tooltip">
        <TooltipBackgroundImage additionalClassNames="left-[calc(50%+876.5px)]">{`Background Color  `}</TooltipBackgroundImage>
        <BackgroundImage9 additionalClassNames="inset-[21.7%_31.27%_78.01%_68.43%]" />
      </div>
      <div className="absolute h-[38px] left-[2883px] top-[533px] w-[48px]" data-name="menu_item/bg_color">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <div className="absolute bg-[rgba(255,107,92,0.1)] bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" />
        <IconsBackgroundColor className="absolute bottom-[18.42%] left-1/4 right-1/4 top-[18.42%]" />
      </div>
      <div className="absolute h-[38px] left-[3036px] top-[533px] w-[48px]" data-name="menu_item/bg_color">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <div className="absolute bg-[rgba(0,177,199,0.1)] bottom-[7.89%] left-1/4 right-1/4 rounded-[1px] top-[81.58%]" data-name="color" />
        <IconsBackgroundColor className="absolute bottom-[18.42%] left-1/4 right-1/4 top-[18.42%]" />
      </div>
      <div className="absolute contents left-[3335px] top-[490px]" data-name="tooltip">
        <TooltipBackgroundImageAndText1 text="Text Size" additionalClassNames="left-[3335px] top-[490px]" />
        <BackgroundImage9 additionalClassNames="inset-[21.74%_28.41%_77.96%_71.29%]" />
      </div>
      <div className="absolute contents left-[2588px] top-[490px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Text Color" additionalClassNames="left-[2588px]" />
        <BackgroundImage9 additionalClassNames="inset-[21.74%_44.17%_77.96%_55.53%]" />
      </div>
      <div className="absolute contents left-[2720px] top-[490px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Line Color" additionalClassNames="left-[2720px]" />
        <BackgroundImage9 additionalClassNames="inset-[21.74%_41.38%_77.96%_58.33%]" />
      </div>
      <MenuItemLineColor className="absolute h-[38px] left-[2737px] top-[534px] w-[48px]" />
      <MenuItemTextColor className="absolute h-[38px] left-[2604px] top-[534px] w-[48px]" />
      <div className="absolute h-[38px] left-[3341px] top-[534px] w-[62px]" data-name="menu_item/font_size/default">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <div className="absolute inset-[18.42%_3.23%_18.42%_58.06%] overflow-clip" data-name="icons/small_chevron/down">
          <VectorBackgroundImage />
        </div>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] inset-[23.68%_51.61%_23.68%_25.81%] leading-[20px] not-italic text-[14px] text-black whitespace-nowrap">14</p>
      </div>
    </div>
  );
}