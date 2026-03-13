import clsx from "clsx";
import svgPaths from "./svg-eh385p5u7l";
import imgColor from "figma:asset/cb01bfd65fc5ad1302af833a7c53ddd128727de4.png";
import imgOpacityScale from "figma:asset/7658e7e9a7ed0c1c3dd735be9be8e1932aae9269.png";
import imgOpacityScale1 from "figma:asset/96620d5081eb1173faf51622afd13844ad334d90.png";
import imgIconCryptohopper from "figma:asset/f1841337e214c3907e27f0e01bfbc7696f6af6d9.png";
import imgRectangle317 from "figma:asset/70017910a949817aa1c11716388ee64b40b2eafa.png";
import imgRgbLogoDarkNoBg011 from "figma:asset/bfb3fe6da9e88a568cbf5fd07d74cee065bbcbc3.png";
type BackgroundImage10Props = {
  additionalClassNames?: string;
};

function BackgroundImage10({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage10Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage9({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[16.67%]">
      <BackgroundImage10 additionalClassNames="inset-[-3.13%]">{children}</BackgroundImage10>
    </div>
  );
}
type VectorBackgroundImage2Props = {
  additionalClassNames?: string;
};

function VectorBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<VectorBackgroundImage2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          {children}
        </svg>
      </div>
    </div>
  );
}
type DropdownResolutionListItem32SBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function DropdownResolutionListItem32SBackgroundImageAndText({ text, additionalClassNames = "" }: DropdownResolutionListItem32SBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[32px] left-[2583.01px] w-[136.986px]", additionalClassNames)}>
      <div className="absolute bg-white h-[32px] left-0 right-0 top-0" data-name="bg" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#1f1f1f] text-[12px] top-[8px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type DropdownPrecisionListItem32CenteredBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function DropdownPrecisionListItem32CenteredBackgroundImageAndText({ text, additionalClassNames = "" }: DropdownPrecisionListItem32CenteredBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute bg-white h-[32px] left-0 right-0 top-0" data-name="bg" />
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(50%+0.5px)] not-italic text-[#1f1f1f] text-[12px] text-center top-[calc(50%-10px)] whitespace-nowrap">{text}</p>
    </div>
  );
}

function BackgroundImage8() {
  return (
    <div className="absolute flex inset-0 items-center justify-center">
      <div className="-rotate-90 flex-none size-[32px]">
        <div className="bg-white border border-[#efeff4] border-solid rounded-[4px] size-full" data-name="box" />
      </div>
    </div>
  );
}
type ModalHeaderLBackgroundImageAndTextProps = {
  text: string;
};

function ModalHeaderLBackgroundImageAndText({ text }: ModalHeaderLBackgroundImageAndTextProps) {
  return (
    <div className="absolute h-[41px] left-[-1px] top-[-1px] w-[406px]">
      <div className="absolute bg-[#f8f8ff] h-[40px] left-0 right-0 rounded-tl-[6px] rounded-tr-[6px] top-0" data-name="bg" />
      <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[11px] w-[289px]">{text}</p>
      <div className="absolute overflow-clip right-[9px] size-[24px] top-[8px]" data-name="icons/close">
        <div className="absolute inset-[29.17%]" data-name="close">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
              <path d={svgPaths.p37f7c400} stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
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

function BackgroundImage7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <BackgroundImage4 />
      <IndicatorMenuItemButtonDefault className="col-1 h-[30px] ml-px mt-0 relative row-1 w-[48px]" />
    </div>
  );
}
type NameBackgroundImageAndTextProps = {
  text: string;
};

function NameBackgroundImageAndText({ text }: NameBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function BackgroundImage6() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex h-px items-center justify-center left-[60px] top-[804px] w-[1368px]">
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-[1368px] w-px" data-name="border_chart" />
      </div>
    </div>
  );
}

function BackgroundImage5() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-[24px] items-center justify-center relative shrink-0 w-px">
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-px rounded-[6px] w-[24px]" data-name="divider" />
      </div>
    </div>
  );
}

function BackgroundImage4() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className="col-1 flex h-[24px] items-center justify-center ml-0 mt-[3px] relative row-1 w-px">
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-px rounded-[6px] w-[24px]" data-name="divider" />
      </div>
    </div>
  );
}

function IndicatorMenuItemButtonDefaultBackgroundImage1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[48px]">
      <div className="absolute bottom-[10%] left-1/4 overflow-clip right-1/4 top-[10%]" data-name="icons/settings">
        <VectorBackgroundImage1 />
      </div>
    </div>
  );
}

function UpBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[30px] ml-0 mt-0 relative row-1 w-[48px]" data-name="indicator_menu_item/button/default">
        <div className="absolute bottom-[10%] left-1/4 overflow-clip right-1/4 top-[10%]" data-name="icons/settings">
          <div className="absolute flex inset-1/4 items-center justify-center">
            <div className="-scale-y-100 flex-none rotate-90 size-[12px]">
              <VectorBackgroundImage2 additionalClassNames="relative size-full">{children}</VectorBackgroundImage2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundImage3() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className="absolute flex h-px items-center justify-center left-[-1px] top-0 w-[1368px]">
      <div className="-rotate-90 flex-none">
        <div className="bg-[#babac1] h-[1368px] w-px" data-name="border_chart" />
      </div>
    </div>
  );
}
type IndicatorMenuShortBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function IndicatorMenuShortBackgroundImageAndText({ text, additionalClassNames = "" }: IndicatorMenuShortBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex items-center px-[12px] py-[8px] rounded-[6px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1px_4px_20px_0px_rgba(49,49,49,0.02)]" />
      <p className="font-['Source_Sans_Pro:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type CoordinatesBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function CoordinatesBackgroundImageAndText({ text, additionalClassNames = "" }: CoordinatesBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex items-center py-[8px]", additionalClassNames)}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f26d60] text-[12px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function IndicatorBackgroundImage() {
  return (
    <div className="absolute contents left-0 top-[12px]">
      <div className="absolute bg-[#09977e] h-[67px] left-0 top-[12px] w-px" />
      <div className="absolute bg-[#f26d60] h-[57px] left-[34px] top-[22px] w-px" />
      <div className="absolute bg-[#f26d60] h-[62px] left-[17px] top-[17px] w-px" />
      <div className="absolute bg-[#f26d60] h-[53px] left-[51px] top-[26px] w-px" />
      <div className="absolute bg-[#f26d60] h-[47px] left-[69px] top-[32px] w-px" />
      <div className="absolute bg-[#09977e] h-[53px] left-[86px] top-[26px] w-px" />
      <div className="absolute bg-[#09977e] h-[57px] left-[103px] top-[22px] w-px" />
      <div className="absolute bg-[#09977e] h-[60px] left-[121px] top-[19px] w-px" />
      <div className="absolute bg-[#f26d60] h-[57px] left-[139px] top-[22px] w-px" />
      <div className="absolute bg-[#f26d60] h-[54px] left-[156px] top-[25px] w-px" />
      <div className="absolute bg-[#f26d60] h-[50px] left-[174px] top-[29px] w-px" />
      <div className="absolute bg-[#f26d60] h-[47px] left-[191px] top-[32px] w-px" />
      <div className="absolute bg-[#f26d60] h-[43px] left-[209px] top-[36px] w-px" />
      <div className="absolute bg-[#f26d60] h-[41px] left-[226px] top-[38px] w-px" />
      <div className="absolute bg-[#f26d60] h-[39px] left-[244px] top-[40px] w-px" />
      <div className="absolute bg-[#f26d60] h-[36px] left-[261px] top-[43px] w-px" />
      <div className="absolute bg-[#f26d60] h-[32px] left-[279px] top-[47px] w-px" />
      <div className="absolute bg-[#f26d60] h-[28px] left-[296px] top-[51px] w-px" />
      <div className="absolute bg-[#f26d60] h-[24px] left-[314px] top-[55px] w-px" />
      <div className="absolute bg-[#f26d60] h-[21px] left-[331px] top-[58px] w-px" />
      <div className="absolute bg-[#f26d60] h-[18px] left-[349px] top-[61px] w-px" />
      <div className="absolute bg-[#f26d60] h-[15px] left-[366px] top-[64px] w-px" />
      <div className="absolute bg-[#f26d60] h-[12px] left-[383px] top-[67px] w-px" />
      <div className="absolute bg-[#f26d60] h-[9px] left-[401px] top-[70px] w-px" />
      <div className="absolute bg-[#f26d60] h-[7px] left-[419px] top-[72px] w-px" />
      <div className="absolute bg-[#f26d60] h-[4px] left-[437px] top-[75px] w-px" />
      <div className="absolute flex h-[9px] items-center justify-center left-[507px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[9px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[22px] items-center justify-center left-[577px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[22px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[53px] items-center justify-center left-[647px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[53px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[107px] items-center justify-center left-[717px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[107px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[88px] items-center justify-center left-[787px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[88px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[69px] items-center justify-center left-[857px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[69px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[53px] items-center justify-center left-[927px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[53px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[27px] items-center justify-center left-[997px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[27px] w-px" />
        </div>
      </div>
      <div className="absolute bg-[#09977e] h-[2px] left-[1067px] top-[77px] w-px" />
      <div className="absolute bg-[#09977e] h-[24px] left-[1137px] top-[55px] w-px" />
      <div className="absolute bg-[#f26d60] h-[27px] left-[1207px] top-[52px] w-px" />
      <div className="absolute bg-[#f26d60] h-[7px] left-[1277px] top-[72px] w-px" />
      <div className="absolute bg-[#f26d60] h-[2px] left-[455px] top-[77px] w-px" />
      <div className="absolute flex h-[11px] items-center justify-center left-[525px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[11px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[27px] items-center justify-center left-[595px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[27px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[72px] items-center justify-center left-[665px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[72px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[104px] items-center justify-center left-[735px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[104px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[84px] items-center justify-center left-[805px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[84px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[66px] items-center justify-center left-[875px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[66px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[48px] items-center justify-center left-[945px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[48px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[15px] items-center justify-center left-[1015px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[15px] w-px" />
        </div>
      </div>
      <div className="absolute bg-[#09977e] h-[4px] left-[1085px] top-[75px] w-px" />
      <div className="absolute bg-[#09977e] h-[32px] left-[1155px] top-[47px] w-px" />
      <div className="absolute bg-[#f26d60] h-[24px] left-[1225px] top-[55px] w-px" />
      <div className="absolute bg-[#f26d60] h-[17px] left-[1295px] top-[62px] w-px" />
      <div className="absolute flex h-[4px] items-center justify-center left-[472px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[4px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[15px] items-center justify-center left-[542px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[15px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[32px] items-center justify-center left-[612px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[32px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[84px] items-center justify-center left-[682px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[84px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[95px] items-center justify-center left-[752px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[95px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[79px] items-center justify-center left-[822px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[79px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[63px] items-center justify-center left-[892px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[63px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[45px] items-center justify-center left-[962px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[45px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[9px] items-center justify-center left-[1032px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[9px] w-px" />
        </div>
      </div>
      <div className="absolute bg-[#09977e] h-[10px] left-[1102px] top-[69px] w-px" />
      <div className="absolute bg-[#09977e] h-[40px] left-[1172px] top-[39px] w-px" />
      <div className="absolute bg-[#f26d60] h-[10px] left-[1242px] top-[69px] w-px" />
      <div className="absolute flex h-[7px] items-center justify-center left-[489px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[7px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[19px] items-center justify-center left-[559px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[19px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[40px] items-center justify-center left-[629px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[40px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[99px] items-center justify-center left-[699px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#f26d60] h-[99px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[92px] items-center justify-center left-[769px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[92px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[75px] items-center justify-center left-[839px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[75px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[59px] items-center justify-center left-[909px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[59px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[37px] items-center justify-center left-[979px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[37px] w-px" />
        </div>
      </div>
      <div className="absolute flex h-[4px] items-center justify-center left-[1049px] top-[78px] w-px">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#09977e] h-[4px] w-px" />
        </div>
      </div>
      <div className="absolute bg-[#09977e] h-[18px] left-[1119px] top-[61px] w-px" />
      <div className="absolute bg-[#f26d60] h-[32px] left-[1189px] top-[47px] w-px" />
      <div className="absolute bg-[#f26d60] h-[4px] left-[1259px] top-[75px] w-px" />
    </div>
  );
}
type NumbersBackgroundImageProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
};

function NumbersBackgroundImage({ text, text1, text2, text3, text4, text5, text6, text7, text8 }: NumbersBackgroundImageProps) {
  return (
    <div className="absolute contents left-[1302px] top-[-1px]">
      <div className="absolute bg-white h-[200px] left-[1302px] top-[-1px] w-[65px]" data-name="right_side_bar_bg" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1310px] not-italic text-[#8e8e93] text-[10px] top-[172px] whitespace-nowrap">{text}</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1310px] not-italic text-[#8e8e93] text-[10px] top-[152px] whitespace-nowrap">{text1}</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1310px] not-italic text-[#8e8e93] text-[10px] top-[132px] whitespace-nowrap">{text2}</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1310px] not-italic text-[#8e8e93] text-[10px] top-[112px] whitespace-nowrap">{text3}</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1310px] not-italic text-[#8e8e93] text-[10px] top-[92px] whitespace-nowrap">{text4}</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1310px] not-italic text-[#8e8e93] text-[10px] top-[72px] whitespace-nowrap">{text5}</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1310px] not-italic text-[#8e8e93] text-[10px] top-[52px] whitespace-nowrap">{text6}</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1310px] not-italic text-[#8e8e93] text-[10px] top-[32px] whitespace-nowrap">{text7}</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1310px] not-italic text-[#8e8e93] text-[10px] top-[12px] whitespace-nowrap">{text8}</p>
      <div className="absolute bg-[#efeff4] h-[199px] left-[1302px] top-0 w-px" data-name="divider" />
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ additionalClassNames = "" }: BackgroundImage2Props) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-px items-center justify-center left-[-1px] w-[1367px]", additionalClassNames)}>
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-[1367px] w-px" data-name="line_chart" />
      </div>
    </div>
  );
}

function GridBackgroundImage() {
  return (
    <div className="absolute contents left-[-1px] top-[-1px]">
      <BackgroundImage2 additionalClassNames="top-[18px]" />
      <BackgroundImage2 additionalClassNames="top-[38px]" />
      <BackgroundImage2 additionalClassNames="top-[58px]" />
      <BackgroundImage2 additionalClassNames="top-[78px]" />
      <BackgroundImage2 additionalClassNames="top-[98px]" />
      <BackgroundImage2 additionalClassNames="top-[118px]" />
      <BackgroundImage2 additionalClassNames="top-[138px]" />
      <BackgroundImage2 additionalClassNames="top-[158px]" />
      <BackgroundImage2 additionalClassNames="top-[178px]" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[69px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[139px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[209px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[279px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[349px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[419px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[489px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[559px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[629px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[699px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[769px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[839px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[909px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[979px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[1049px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[1119px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[1189px] top-[-1px] w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[232px] left-[1259px] top-[-1px] w-px" data-name="line_chart" />
    </div>
  );
}

function ExchangeDescriptionBackgroundImage() {
  return (
    <div className="absolute contents left-[18px] top-px">
      <div className="absolute bg-white content-stretch flex gap-[16px] items-center left-[18px] py-[10px] top-px">
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-pre">{`Bitcoin  / U.S. Dollar  ·  1D  ·  BITSTAMP  ·  Renko [ATR(14), 419.86]      `}</p>
        <div className="relative shrink-0 size-[16px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="market_open">
              <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" fillOpacity="0.2" id="Ellipse 4" r="8" />
              <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" id="Ellipse 5" r="4" />
            </g>
          </svg>
        </div>
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-pre">
          <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{"O"}</span>
          <span className="leading-[normal]">{` `}</span>
          <span className="leading-[normal] text-[#f26d60]">{"10076.64"}</span>
          <span className="leading-[normal]">{`   `}</span>
          <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{"H"}</span>
          <span className="leading-[normal]">{` `}</span>
          <span className="leading-[normal] text-[#f26d60]">{"10076.64"}</span>
          <span className="leading-[normal]">{`  `}</span>
          <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{"L"}</span>
          <span className="leading-[normal]">{` `}</span>
          <span className="leading-[normal] text-[#f26d60]">{"9656.78"}</span>
          <span className="leading-[normal]">{`  `}</span>
          <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{`C `}</span>
          <span className="leading-[normal] text-[#f26d60]">{"9656.78"}</span>
        </p>
        <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f26d60] text-[12px] whitespace-pre">{`-419.86  (-4.17%)`}</p>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[12px] items-center left-[18px] top-[37px]">
        <div className="bg-white content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#f26d60] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f26d60] text-[12px] whitespace-nowrap">{"13623.25"}</p>
        </div>
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8e8e93] text-[12px] whitespace-nowrap">{"7.14"}</p>
        <div className="bg-white content-stretch flex items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#00b1c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00b1c7] text-[12px] whitespace-nowrap">{"13630.39"}</p>
        </div>
      </div>
    </div>
  );
}

function PriceBarBackgroundImage() {
  return (
    <div className="absolute contents left-[1303px] top-[-6px]">
      <div className="absolute contents left-[1303px] top-[-6px]">
        <div className="absolute bg-white h-[772px] left-[1303px] rounded-br-[6px] rounded-tr-[6px] top-0 w-[65px]" data-name="right_side_bar_bg" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[354px] whitespace-nowrap">{"9800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[334px] whitespace-nowrap">{"10000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[394px] whitespace-nowrap">{"9400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[374px] whitespace-nowrap">{"9600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[434px] whitespace-nowrap">{"9000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[414px] whitespace-nowrap">{"9200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[474px] whitespace-nowrap">{"8600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[454px] whitespace-nowrap">{"8800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[514px] whitespace-nowrap">{"8200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[494px] whitespace-nowrap">{"8400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[574px] whitespace-nowrap">{"7600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[554px] whitespace-nowrap">{"7800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[534px] whitespace-nowrap">{"8000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[614px] whitespace-nowrap">{"7200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[594px] whitespace-nowrap">{"7400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[654px] whitespace-nowrap">{"6800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[634px] whitespace-nowrap">{"7000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[674px] whitespace-nowrap">{"6600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[714px] whitespace-nowrap">{"6200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[694px] whitespace-nowrap">{"-"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[314px] whitespace-nowrap">{"10200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[294px] whitespace-nowrap">{"10400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[274px] whitespace-nowrap">{"10600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[254px] whitespace-nowrap">{"10800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[234px] whitespace-nowrap">{"11000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[214px] whitespace-nowrap">{"11200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[194px] whitespace-nowrap">{"11400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[174px] whitespace-nowrap">{"11600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[154px] whitespace-nowrap">{"11800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[134px] whitespace-nowrap">{"12000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[114px] whitespace-nowrap">{"12200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[94px] whitespace-nowrap">{"12400.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[74px] whitespace-nowrap">{"12600.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[54px] whitespace-nowrap">{"12800.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[34px] whitespace-nowrap">{"13000.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[14px] whitespace-nowrap">{"13200.00"}</p>
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[#8e8e93] text-[10px] top-[-6px] whitespace-nowrap">{"13400.00"}</p>
      </div>
      <div className="absolute bg-[#efeff4] h-[772px] left-[1303px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-white content-stretch flex items-center left-[1319px] px-[6px] py-[4px] rounded-[4px] top-[8px]">
        <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f1f1f] text-[12px] whitespace-nowrap">{"USD"}</p>
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
};

function TimeLineBackgroundImage({ text, text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18 }: TimeLineBackgroundImageProps) {
  return (
    <div className="absolute contents left-0 top-[740px]">
      <div className="absolute bg-white h-[32px] left-0 rounded-bl-[6px] rounded-br-[6px] top-[740px] w-[1368px]" data-name="month_bg" />
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1260px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1191px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text1}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1051px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text2}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[980px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text3}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[910px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text4}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1121px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text5}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[841px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text6}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[771px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text7}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[700px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text8}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[630px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text9}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[560px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text10}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[490px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text11}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[420px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text12}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[350px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text13}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[281px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text14}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[210px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text15}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[140px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text16}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[71px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text17}</p>
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[12px] not-italic text-[#8e8e93] text-[12px] text-center top-[749px] whitespace-nowrap">{text18}</p>
    </div>
  );
}

function RenkoBarsBackgroundImage() {
  return (
    <div className="absolute h-[584px] left-px overflow-clip top-[97px] w-[1302px]">
      <div className="absolute contents left-[-18px] top-0">
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
        <div className="absolute bg-[#f26d60] h-[46px] left-[1067px] top-[46px] w-[35px]" />
        <div className="absolute bg-[#f26d60] h-[114px] left-[804px] top-[70px] w-px" />
        <div className="absolute bg-[#f26d60] h-[46px] left-[542px] top-[184px] w-[35px]" />
        <div className="absolute bg-[#f26d60] h-[46px] left-[822px] top-[184px] w-[35px]" />
        <div className="absolute bg-[#f26d60] h-[46px] left-[1102px] top-[92px] w-[35px]" />
        <div className="absolute bg-[#09977e] h-[46px] left-[892px] top-[184px] w-[35px]" />
        <div className="absolute bg-[#09977e] h-[88px] left-[909px] top-[203px] w-px" />
        <div className="absolute bg-[#09977e] h-[46px] left-[612px] top-[184px] w-[35px]" />
        <div className="absolute bg-[#09977e] h-[46px] left-[682px] top-[184px] w-[35px]" />
        <div className="absolute bg-[#09977e] h-[46px] left-[717px] top-[138px] w-[35px]" />
        <div className="absolute bg-[#09977e] h-[46px] left-[927px] top-[138px] w-[35px]" />
        <div className="absolute bg-[#09977e] h-[46px] left-[997px] top-[46px] w-[35px]" />
        <div className="absolute bg-[#09977e] h-[46px] left-[752px] top-[92px] w-[35px]" />
        <div className="absolute bg-[#09977e] h-[46px] left-[962px] top-[92px] w-[35px]" />
        <div className="absolute bg-[#09977e] h-[46px] left-[1032px] top-0 w-[35px]" />
        <div className="absolute bg-[#f26d60] h-[46px] left-[577px] top-[230px] w-[35px]" />
        <div className="absolute bg-[#f26d60] h-[46px] left-[857px] top-[230px] w-[35px]" />
        <div className="absolute bg-[#f26d60] h-[46px] left-[1137px] top-[138px] w-[35px]" />
        <div className="absolute bg-[#f26d60] h-[46px] left-[647px] top-[230px] w-[35px]" />
        <div className="absolute bg-[#f26d60] h-[99px] left-[664px] top-[166px] w-px" />
        <div className="absolute bg-[#f26d60] h-[46px] left-[332px] top-[92px] w-[35px]" />
        <div className="absolute bg-[#09977e] h-[46px] left-[402px] top-[92px] w-[35px]" />
        <div className="absolute bg-[#09977e] h-[132px] left-[419px] top-[92px] w-px" />
        <div className="absolute bg-[#f26d60] h-[46px] left-[367px] top-[138px] w-[35px]" />
      </div>
      <div className="absolute bg-[#f26d60] h-[46px] left-[1172px] top-[184px] w-[35px]" />
      <div className="absolute bg-[#f26d60] h-[46px] left-[1207px] top-[230px] w-[35px]" />
      <div className="absolute bg-[#f26d60] h-[46px] left-[1242px] top-[276px] w-[35px]" />
      <div className="absolute bg-[#f26d60] h-[46px] left-[1277px] top-[322px] w-[35px]" />
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ additionalClassNames = "" }: BackgroundImage1Props) {
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
      <BackgroundImage1 additionalClassNames="top-[40px]" />
      <BackgroundImage1 additionalClassNames="top-[20px]" />
      <BackgroundImage1 additionalClassNames="top-0" />
      <BackgroundImage1 additionalClassNames="top-[80px]" />
      <BackgroundImage1 additionalClassNames="top-[100px]" />
      <BackgroundImage1 additionalClassNames="top-[160px]" />
      <BackgroundImage1 additionalClassNames="top-[200px]" />
      <BackgroundImage1 additionalClassNames="top-[260px]" />
      <BackgroundImage1 additionalClassNames="top-[300px]" />
      <BackgroundImage1 additionalClassNames="top-[360px]" />
      <BackgroundImage1 additionalClassNames="top-[400px]" />
      <BackgroundImage1 additionalClassNames="top-[480px]" />
      <BackgroundImage1 additionalClassNames="top-[520px]" />
      <BackgroundImage1 additionalClassNames="top-[600px]" />
      <BackgroundImage1 additionalClassNames="top-[640px]" />
      <BackgroundImage1 additionalClassNames="top-[140px]" />
      <BackgroundImage1 additionalClassNames="top-[240px]" />
      <BackgroundImage1 additionalClassNames="top-[320px]" />
      <BackgroundImage1 additionalClassNames="top-[440px]" />
      <BackgroundImage1 additionalClassNames="top-[560px]" />
      <BackgroundImage1 additionalClassNames="top-[680px]" />
      <BackgroundImage1 additionalClassNames="top-[720px]" />
      <BackgroundImage1 additionalClassNames="top-[700px]" />
      <BackgroundImage1 additionalClassNames="top-[660px]" />
      <BackgroundImage1 additionalClassNames="top-[620px]" />
      <BackgroundImage1 additionalClassNames="top-[580px]" />
      <BackgroundImage1 additionalClassNames="top-[500px]" />
      <BackgroundImage1 additionalClassNames="top-[460px]" />
      <BackgroundImage1 additionalClassNames="top-[420px]" />
      <BackgroundImage1 additionalClassNames="top-[380px]" />
      <BackgroundImage1 additionalClassNames="top-[340px]" />
      <BackgroundImage1 additionalClassNames="top-[280px]" />
      <BackgroundImage1 additionalClassNames="top-[220px]" />
      <BackgroundImage1 additionalClassNames="top-[180px]" />
      <BackgroundImage1 additionalClassNames="top-[120px]" />
      <BackgroundImage1 additionalClassNames="top-[60px]" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[210px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[420px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[630px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[910px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[1120px] top-0 w-px" data-name="line_chart" />
      <div className="absolute bg-[#efeff4] h-[772px] left-[1260px] top-0 w-px" data-name="line_chart" />
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

function IndicatorMenuItemButtonDefaultBackgroundImage() {
  return (
    <div className="col-1 h-[30px] ml-px mt-0 relative row-1 w-[48px]">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="absolute bottom-[10%] left-1/4 overflow-clip right-1/4 top-[10%]" data-name="icons/settings">
        <IconBackgroundImage />
      </div>
    </div>
  );
}

function IconBackgroundImage() {
  return (
    <div className="absolute inset-[12.5%]">
      <div className="absolute inset-[-2.78%_-2.77%_-2.78%_-2.78%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <g id="icon">
            <path d={svgPaths.p7267780} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p35c99300} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundImage({ additionalClassNames = "" }: BackgroundImageProps) {
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
    <div className={clsx("-translate-x-1/2 -translate-y-1/2 absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] py-[8px] rounded-[3px]", additionalClassNames)}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">{text}</p>
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
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-[24px] items-center justify-center relative shrink-0 w-px">
      <div className="-rotate-90 flex-none">
        <div className="bg-[#efeff4] h-px rounded-[6px] w-[24px]" data-name="divider" />
      </div>
    </div>
  );
}

function VectorBackgroundImage1() {
  return (
    <BackgroundImage9>
      <path d={svgPaths.p37c74100} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
    </BackgroundImage9>
  );
}
type IconsSmallChevronDownBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconsSmallChevronDownBackgroundImage({ additionalClassNames = "" }: IconsSmallChevronDownBackgroundImageProps) {
  return (
    <div className="absolute overflow-clip right-[2px] size-[24px] top-[4px]">
      <VectorBackgroundImage additionalClassNames="absolute inset-[45.83%_37.5%_41.67%_37.5%]" />
    </div>
  );
}
type IconsCrossesCrossBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconsCrossesCrossBackgroundImage({ additionalClassNames = "" }: IconsCrossesCrossBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <g id="cross">
            <path d="M3 0.5V5.5" id="Vector 42" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" />
            <path d="M0.5 3L5.5 3" id="Vector 43" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type IconsColumnsBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconsColumnsBackgroundImage({ additionalClassNames = "" }: IconsColumnsBackgroundImageProps) {
  return (
    <div className={clsx("absolute bg-white rounded-[0.5px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-[-0.5px] pointer-events-none rounded-[1px]" />
    </div>
  );
}
type IconsCirclesBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconsCirclesBackgroundImage({ additionalClassNames = "" }: IconsCirclesBackgroundImageProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, white)" id="Ellipse 13" r="3" stroke="var(--stroke-0, #1F1F1F)" />
        </svg>
      </div>
    </div>
  );
}
type VectorBackgroundImageProps = {
  additionalClassNames?: string;
};

function VectorBackgroundImage({ additionalClassNames = "" }: VectorBackgroundImageProps) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute inset-[-16.67%_-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
          <path d="M0.5 0.5L3.5 3.5L6.5 0.5" id="Vector" stroke="var(--stroke-0, #8E8E93)" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function IconsSmallChevronUpBackgroundImage() {
  return (
    <div className="absolute overflow-clip right-[2px] size-[24px] top-[4px]">
      <div className="absolute flex inset-[45.83%_37.5%_41.67%_37.5%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[3px] w-[6px]">
          <VectorBackgroundImage additionalClassNames="relative size-full" />
        </div>
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

function IconsLine({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/line">
      <div className="absolute inset-[37.5%_12.5%_33.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-2.78%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 8.00001">
            <path d={svgPaths.p34105e00} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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

function IconsRemoveSmall({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/remove_small">
      <div className="absolute inset-[16.67%_20.83%]" data-name="bin">
        <div className="absolute inset-[-3.13%_-3.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 17">
            <g id="bin">
              <path d="M0.5 3.70001H2.05556H14.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p2649000} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.94446 7.70001V12.5" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.05566 7.70001V12.5" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconsFullscreen({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/fullscreen">
      <VectorBackgroundImage1 />
    </div>
  );
}

function IndicatorMenuItemButtonDefault({ className }: { className?: string }) {
  return (
    <div className={className || "h-[30px] relative w-[48px]"} data-name="indicator_menu_item/button/default">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <IconsFullscreen className="absolute bottom-[10%] left-1/4 overflow-clip right-1/4 top-[10%]" />
    </div>
  );
}

function ButtonRoundDefault({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="button/round/default">
      <div className="absolute inset-[-80%_-102.5%_-120%_-97.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <g filter="url(#filter0_d_37_2690)" id="round_bg">
            <circle cx="59" cy="52" fill="var(--fill-0, white)" fillOpacity="0.9" r="20" />
            <circle cx="59" cy="52" r="19.5" stroke="var(--stroke-0, #F8F8FF)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="120" id="filter0_d_37_2690" width="120" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="1" dy="8" />
              <feGaussianBlur stdDeviation="20" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_37_2690" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_37_2690" mode="normal" result="shape" />
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
            <VectorBackgroundImage2 additionalClassNames="absolute inset-1/4">
              <path d={svgPaths.p3325e520} id="Vector" stroke="var(--stroke-0, #BABAC1)" strokeLinecap="round" strokeLinejoin="round" />
            </VectorBackgroundImage2>
          </div>
          <div className="col-1 ml-[16px] mt-[8px] overflow-clip relative row-1 size-[24px]" data-name="icons/arrow_left">
            <VectorBackgroundImage2 additionalClassNames="absolute inset-1/4">
              <path d={svgPaths.p2c236e10} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </VectorBackgroundImage2>
          </div>
        </div>
        <UpperBarDefaultBackgroundImage />
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="save">
          <div className="bg-white col-1 h-[40px] ml-0 mt-0 row-1 w-[116px]" data-name="bg" />
          <p className="col-1 font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] ml-[47px] mt-[11px] not-italic relative row-1 text-[#1f1f1f] text-[14px] text-right whitespace-nowrap">Save</p>
          <div className="col-1 ml-[76px] mt-[8px] overflow-clip relative row-1 size-[24px]" data-name="icons/small_chevron/down">
            <VectorBackgroundImage additionalClassNames="absolute inset-[45.83%_37.5%_41.67%_37.5%]" />
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
          <IconsFullscreen className="absolute inset-[20%_28.57%] overflow-clip" />
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
              <BackgroundImage10 additionalClassNames="inset-[-3.13%_-3.13%_-3.12%_-3.13%]">
                <path d={svgPaths.pb3a6d80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage10>
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
          <IconsIndicators className="absolute inset-[20%_77.19%_20%_21.05%] overflow-clip" />
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

export default function AwesomeOscillator() {
  return (
    <div className="bg-[#efeff4] relative size-full" data-name="Awesome Oscillator">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[#00b1c7] text-[103px] top-[110px] whitespace-nowrap">Awesome Oscillator</p>
      <div className="absolute h-[30px] left-[1115px] top-[648px] w-[48px]" data-name="indicator_menu_item/button/default">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <IconsRemoveSmall className="absolute bottom-[10%] left-1/4 overflow-clip right-1/4 top-[10%]" />
      </div>
      <IndicatorMenuItemButtonDefault className="absolute h-[30px] left-[836px] top-[648px] w-[48px]" />
      <IndicatorMenuItemButtonDefault className="absolute h-[30px] left-[968px] top-[648px] w-[48px]" />
      <IndicatorMenuItemButtonDefault className="absolute h-[30px] left-[838px] top-[759px] w-[48px]" />
      <div className="absolute contents left-[930px] top-[493px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Settings" additionalClassNames="left-[calc(50%-700.5px)] top-[calc(50%-954px)]" />
        <BackgroundImage additionalClassNames="inset-[17.91%_70.83%_81.85%_28.75%]" />
      </div>
      <IndicatorMenuItemButtonDefault className="absolute h-[30px] left-[942px] top-[537px] w-[48px]" />
      <div className="absolute contents left-[809px] top-[715px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Maximize Pane" additionalClassNames="left-[calc(50%-804.5px)] top-[calc(50%-732px)]" />
        <BackgroundImage additionalClassNames="inset-[25.5%_73.95%_74.26%_25.63%]" />
      </div>
      <div className="absolute contents left-[938px] top-[715px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Minimize Pane" additionalClassNames="left-[calc(50%-676.5px)] top-[calc(50%-732px)]" />
        <BackgroundImage additionalClassNames="inset-[25.5%_70.11%_74.26%_29.47%]" />
      </div>
      <div className="absolute contents left-[809px] top-[604px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Move Pane Up" additionalClassNames="left-[calc(50%-806.5px)] top-[calc(50%-843px)]" />
        <BackgroundImage additionalClassNames="inset-[21.71%_74.01%_78.05%_25.57%]" />
      </div>
      <div className="absolute contents left-[934px] top-[604px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Move Pane Down" additionalClassNames="left-[calc(50%-674px)] top-[calc(50%-843px)]" />
        <BackgroundImage additionalClassNames="inset-[21.71%_70.03%_78.05%_29.55%]" />
      </div>
      <div className="absolute contents left-[1090px] top-[604px]" data-name="tooltip">
        <TooltipBackgroundImageAndText text="Remove Pane" additionalClassNames="left-[calc(50%-527px)] top-[calc(50%-843px)]" />
        <BackgroundImage additionalClassNames="inset-[21.71%_65.62%_78.05%_33.96%]" />
      </div>
      <div className="absolute h-[30px] left-[966px] top-[759px] w-[48px]" data-name="indicator_menu_item/button/default">
        <div className="absolute bg-white inset-0" data-name="bg" />
        <div className="absolute bg-[rgba(0,177,199,0.1)] inset-[6.67%_20.83%] rounded-[4px]" data-name="selected_bg" />
        <div className="absolute bottom-[10%] left-1/4 overflow-clip right-1/4 top-[10%]" data-name="icons/settings">
          <BackgroundImage9>
            <path d={svgPaths.p1946bd80} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
          </BackgroundImage9>
        </div>
      </div>
      <div className="absolute contents left-[808px] top-[493px]" data-name="copy">
        <div className="absolute h-[30px] left-[812px] top-[537px] w-[48px]" data-name="indicator_menu_item/button/default">
          <div className="absolute bg-white inset-0" data-name="bg" />
          <div className="absolute bottom-[10%] left-1/4 overflow-clip right-1/4 top-[10%]" data-name="icons/settings">
            <IconBackgroundImage />
          </div>
        </div>
        <div className="absolute contents left-[808px] top-[493px]" data-name="tooltip">
          <div className="absolute bg-[#1f1f1f] content-stretch flex items-center left-[808px] px-[15px] py-[8px] rounded-[3px] top-[493px]" data-name="tooltip">
            <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Copy</p>
          </div>
          <BackgroundImage additionalClassNames="inset-[17.91%_74.7%_81.85%_24.88%]" />
        </div>
      </div>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[124px] not-italic text-[70px] text-black top-[1623px] whitespace-nowrap">Default</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[1724px] not-italic text-[70px] text-black top-[1623px] whitespace-nowrap">Menu_on_hover</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[809px] not-italic text-[70px] text-black top-[349px] whitespace-nowrap">Tooltips</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[125px] not-italic text-[70px] text-black top-[349px] whitespace-nowrap">Menus</p>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[124px] overflow-clip top-[1765px] w-[1440px]" data-name="AO_default">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <div className="absolute h-[772px] left-0 top-0 w-[1368px]" data-name="chart_items">
            <ChartLayoutBackgroundImage />
            <RenkoBarsBackgroundImage />
          </div>
          <TimeLineBackgroundImage text="22" text1="Nov" text2="Oct" text3="24" text4="Sep" text5="25" text6="19" text7="13" text8="5" text9="Aug" text10="18" text11="16" text12="14" text13="Jul" text14="28" text15="27" text16="26" text17="24" text18="30" />
          <PriceBarBackgroundImage />
          <ExchangeDescriptionBackgroundImage />
        </div>
        <BackgroundImage6 />
        <div className="absolute bg-white h-[199px] left-[61px] overflow-clip top-[605px] w-[1367px]" data-name="indicator_field">
          <GridBackgroundImage />
          <NumbersBackgroundImage text="-100.00" text1="-80.00" text2="-60.00" text3="-40.00" text4="-20.00" text5="0.00" text6="20.00" text7="40.00" text8="60.00" />
          <BackgroundImage3 />
          <IndicatorBackgroundImage />
          <CoordinatesBackgroundImageAndText text="-8.81" additionalClassNames="left-[58px] px-[2px] top-[9px]" />
          <IndicatorMenuShortBackgroundImageAndText text="AO" additionalClassNames="left-[17px] top-[9px]" />
        </div>
        <LogoCryptohopperExtended className="absolute h-[38px] left-[78px] top-[748px] w-[169px]" />
        <ToolsBarDefault className="absolute h-[836px] left-0 top-[64px] w-[48px]" />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <ButtonRoundDefault className="absolute left-[calc(94.44%-55px)] size-[40px] top-[745px]" />
        <div className="absolute bg-white content-stretch flex items-center left-[calc(88.89%-36px)] px-[2px] py-px rounded-[6px] top-[71px]" data-name="indicator_menu/main_pane">
          <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1px_4px_20px_0px_rgba(49,49,49,0.02)]" />
          <div className="content-stretch flex items-center relative shrink-0" data-name="tools">
            <IndicatorMenuItemButtonDefaultBackgroundImage1 />
            <BackgroundImage5 />
            <UpBackgroundImage>
              <path d={svgPaths.p3325e520} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </UpBackgroundImage>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[1724px] overflow-clip top-[1765px] w-[1440px]" data-name="AO_default">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <div className="absolute h-[772px] left-0 top-0 w-[1368px]" data-name="chart_items">
            <ChartLayoutBackgroundImage />
            <RenkoBarsBackgroundImage />
          </div>
          <TimeLineBackgroundImage text="22" text1="Nov" text2="Oct" text3="24" text4="Sep" text5="25" text6="19" text7="13" text8="5" text9="Aug" text10="18" text11="16" text12="14" text13="Jul" text14="28" text15="27" text16="26" text17="24" text18="30" />
          <PriceBarBackgroundImage />
          <ExchangeDescriptionBackgroundImage />
        </div>
        <BackgroundImage6 />
        <div className="absolute bg-white h-[199px] left-[61px] overflow-clip top-[605px] w-[1367px]" data-name="indicator_field">
          <GridBackgroundImage />
          <NumbersBackgroundImage text="-100.00" text1="-80.00" text2="-60.00" text3="-40.00" text4="-20.00" text5="0.00" text6="20.00" text7="40.00" text8="60.00" />
          <BackgroundImage3 />
          <IndicatorBackgroundImage />
          <CoordinatesBackgroundImageAndText text="-8.81" additionalClassNames="left-[58px] top-[9px]" />
          <div className="absolute bg-white content-stretch flex gap-[12px] items-center left-[17px] px-[12px] py-px rounded-[6px] top-[9px]" data-name="indicator_menu/extended">
            <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)]" />
            <NameBackgroundImageAndText text="AO" />
            <div className="content-stretch flex items-center leading-[0] relative shrink-0" data-name="tools">
              <BackgroundImage7 />
              <BackgroundImage7 />
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="copy">
                <BackgroundImage4 />
                <IndicatorMenuItemButtonDefaultBackgroundImage />
              </div>
              <BackgroundImage7 />
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="remove">
                <BackgroundImage4 />
                <div className="col-1 h-[30px] ml-px mt-0 relative row-1 w-[38px]" data-name="small_setting_item">
                  <IconsRemoveSmall className="absolute inset-[10%_5.26%_10%_31.58%] overflow-clip" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <LogoCryptohopperExtended className="absolute h-[38px] left-[78px] top-[748px] w-[169px]" />
        <ToolsBarDefault className="absolute h-[836px] left-0 top-[64px] w-[48px]" />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <ButtonRoundDefault className="absolute left-[calc(94.44%-55px)] size-[40px] top-[745px]" />
        <div className="absolute bg-white content-stretch flex items-center left-[calc(88.89%-36px)] px-[2px] py-px rounded-[6px] top-[71px]" data-name="indicator_menu/main_pane">
          <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1px_4px_20px_0px_rgba(49,49,49,0.02)]" />
          <div className="content-stretch flex items-center relative shrink-0" data-name="tools">
            <IndicatorMenuItemButtonDefaultBackgroundImage1 />
            <BackgroundImage5 />
            <UpBackgroundImage>
              <path d={svgPaths.p3325e520} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
            </UpBackgroundImage>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex gap-[12px] items-center left-[125px] px-[12px] py-px rounded-[6px] top-[506px]" data-name="indicator_menu/extended">
        <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)]" />
        <NameBackgroundImageAndText text="AO" />
        <div className="content-stretch flex items-center leading-[0] relative shrink-0" data-name="tools">
          <BackgroundImage7 />
          <BackgroundImage7 />
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="copy">
            <BackgroundImage4 />
            <IndicatorMenuItemButtonDefaultBackgroundImage />
          </div>
          <BackgroundImage7 />
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="remove">
            <BackgroundImage4 />
            <div className="col-1 h-[30px] ml-px mt-0 relative row-1 w-[38px]" data-name="small_setting_item">
              <IconsRemoveSmall className="absolute inset-[10%_5.26%_10%_31.58%] overflow-clip" />
            </div>
          </div>
        </div>
      </div>
      <CoordinatesBackgroundImageAndText text="-8.81" additionalClassNames="left-[166px] px-[2px] top-[464px]" />
      <IndicatorMenuShortBackgroundImageAndText text="AO" additionalClassNames="left-[125px] top-[464px]" />
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[1727px] not-italic text-[70px] text-black top-[349px] whitespace-nowrap">Settings</p>
      <div className="absolute border border-[#efeff4] border-solid h-[271px] left-[2315px] overflow-clip rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[466px] w-[406px]" data-name="indicator_menu/Ao/inputs">
        <div className="absolute bg-white h-[271px] left-[-1px] rounded-[6px] top-[-1px] w-[406px]" data-name="bg_modal" />
        <div className="absolute contents left-[14px] top-[223px]" data-name="buttons">
          <ButtonSecondarySDefault className="absolute h-[32px] left-[calc(50%+13px)] top-[224px] w-[80px]" />
          <ButtonSPrimaryDefault className="absolute h-[32px] left-[calc(66.67%+40.33px)] top-[224px] w-[80px]" />
          <ButtonTextDefaultBackgroundImageAndText text="Reset Settings" additionalClassNames="top-[231px]" />
        </div>
        <div className="absolute contents left-[14px] top-[107px]" data-name="option">
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[114px] whitespace-nowrap">Resolution</p>
          <div className="absolute h-[32px] left-[calc(33.33%+12.67px)] top-[108px] w-[139px]" data-name="dropdown/text_centered/long/default">
            <div className="absolute bg-white border border-[#efeff4] border-solid h-[32px] left-0 right-0 rounded-[4px] top-0" data-name="box" />
            <IconsSmallChevronDownBackgroundImage />
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(50%-10px)] not-italic text-[#1f1f1f] text-[14px] text-center top-[calc(50%-10px)] whitespace-nowrap">Same as symbol</p>
          </div>
        </div>
        <div className="absolute contents left-[14px] top-[55px]" data-name="tabs">
          <div className="absolute bg-[#efeff4] h-px left-[15px] rounded-[6px] top-[87px] w-[376px]" data-name="divider" />
          <div className="absolute contents left-[15px] top-[57px]" data-name="style">
            <div className="absolute bg-[#00b1c7] h-px left-[15px] rounded-[6px] top-[87px] w-[39px]" data-name="divider" />
            <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#00b1c7] text-[14px] top-[57px] whitespace-nowrap">Inputs</p>
          </div>
          <div className="absolute contents left-[calc(16.67%+9.33px)] top-[56px]" data-name="coordinates">
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(16.67%+9.33px)] not-italic text-[#1f1f1f] text-[14px] top-[56px] whitespace-nowrap">Style</p>
          </div>
        </div>
        <ModalHeaderLBackgroundImageAndText text="Awesome Oscillator" />
      </div>
      <div className="absolute border border-[#efeff4] border-solid h-[344px] left-[1727px] overflow-clip rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[466px] w-[406px]" data-name="indicator_menu/AO/style">
        <div className="absolute bg-white h-[344px] left-[-1px] rounded-[6px] top-[-1px] w-[406px]" data-name="bg_modal" />
        <div className="absolute bg-[#efeff4] h-px left-[14px] rounded-[6px] top-[211px] w-[376px]" data-name="divider" />
        <div className="absolute contents left-[14px] top-[296px]" data-name="buttons">
          <ButtonSecondarySDefault className="absolute h-[32px] left-[calc(50%+13px)] top-[297px] w-[80px]" />
          <ButtonSPrimaryDefault className="absolute h-[32px] left-[calc(66.67%+40.33px)] top-[297px] w-[80px]" />
          <ButtonTextDefaultBackgroundImageAndText text="Reset Settings" additionalClassNames="top-[304px]" />
        </div>
        <div className="absolute contents left-[14px] top-[232px]" data-name="option">
          <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[240px] whitespace-nowrap">Precision</p>
          <div className="absolute h-[32px] left-[calc(33.33%+12.67px)] top-[233px] w-[137px]" data-name="dropdown/text_centered/short/default">
            <div className="absolute bg-white border border-[#efeff4] border-solid h-[32px] left-0 right-0 rounded-[4px] top-0" data-name="box" />
            <IconsSmallChevronDownBackgroundImage />
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(50%-7px)] not-italic text-[#1f1f1f] text-[14px] text-center top-[calc(50%-10px)] whitespace-nowrap">Values</p>
          </div>
        </div>
        <div className="absolute contents left-[14px] top-[107px]" data-name="option">
          <div className="absolute left-[calc(33.33%+12.67px)] size-[32px] top-[108px]" data-name="dropdown/color/default">
            <BackgroundImage8 />
            <div className="absolute bg-[#f26d60] inset-[12.5%] rounded-[4px]" data-name="color" />
          </div>
          <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[115px] whitespace-nowrap">Color 1</p>
          <div className="absolute h-[32px] left-[calc(50%-11px)] top-[108px] w-[93px]" data-name="dropdown/width_style/default">
            <div className="absolute bg-white border border-[#efeff4] border-solid h-[32px] left-0 right-0 rounded-[4px] top-0" data-name="box" />
            <IconsSmallChevronDownBackgroundImage />
            <div className="absolute h-0 left-[12px] right-[26px] top-[15.5px]">
              <div className="absolute inset-[-0.5px_-2.08%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
                  <path d="M0.5 0.5H24.5" id="Vector 48" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute h-[32px] left-[calc(66.67%+26.33px)] top-[108px] w-[94px]" data-name="dropdown/text+icon/default">
            <div className="absolute bg-white border border-[#efeff4] border-solid h-[32px] left-0 right-0 rounded-[4px] top-0" data-name="box" />
            <IconsSmallChevronDownBackgroundImage />
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[35px] not-italic right-[26px] text-[#1f1f1f] text-[14px] top-[6px]">Histo</p>
            <IconsIndicators className="absolute left-[5px] overflow-clip size-[24px] top-[4px]" />
          </div>
        </div>
        <div className="absolute contents left-[14px] top-[159px]" data-name="option">
          <div className="absolute left-[calc(33.33%+12.67px)] size-[32px] top-[160px]" data-name="dropdown/color/default">
            <BackgroundImage8 />
            <div className="absolute bg-[#09977e] inset-[12.5%] rounded-[4px]" data-name="color" />
          </div>
          <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[167px] whitespace-nowrap">Color 2</p>
        </div>
        <div className="absolute contents left-[14px] top-[55px]" data-name="tabs">
          <div className="absolute bg-[#efeff4] h-px left-[15px] rounded-[6px] top-[87px] w-[376px]" data-name="divider" />
          <div className="absolute contents left-[15px] top-[56px]" data-name="style">
            <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[56px] whitespace-nowrap">Inputs</p>
          </div>
          <div className="absolute contents left-[calc(16.67%+9.33px)] top-[57px]" data-name="coordinates">
            <div className="absolute bg-[#00b1c7] inset-[25.29%_73.65%_74.42%_18.97%] rounded-[6px]" data-name="underline" />
            <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[calc(16.67%+9.33px)] not-italic text-[#00b1c7] text-[14px] top-[57px] whitespace-nowrap">Style</p>
          </div>
        </div>
        <ModalHeaderLBackgroundImageAndText text="Awesome Oscillator" />
      </div>
      <div className="absolute h-[48px] left-[1851px] top-[873px] w-[159px]" data-name="line_menu/line_width">
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
      <div className="absolute h-[32px] left-[2023px] top-[873px] w-[125px]" data-name="dropdown/text+icon/active">
        <div className="absolute bg-white border border-[#00b1c7] border-solid h-[32px] left-0 right-0 rounded-[4px] top-0" data-name="box" />
        <IconsSmallChevronUpBackgroundImage />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[35px] not-italic right-[26px] text-[#1f1f1f] text-[14px] top-[6px]">Line</p>
        <IconsLine className="absolute left-[5px] overflow-clip size-[24px] top-[4px]" />
      </div>
      <div className="absolute h-[433px] left-[2023px] top-[909px] w-[179px]" data-name="dropdown_menu/styles">
        <div className="absolute contents inset-0" data-name="dropdown/styles">
          <div className="absolute bg-white border border-[#efeff4] border-solid inset-0 rounded-[4px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)]" data-name="bg" />
          <div className="absolute bg-[#efeff4] h-px left-[8px] right-[8px] rounded-[6px] top-[64px]" data-name="divider" />
          <div className="absolute h-[40px] left-px right-px top-[65px]" data-name="list_item_40/S/icon">
            <div className="absolute bg-[#f8f8ff] inset-0" data-name="highlight" />
            <div className="absolute bottom-[20%] contents left-[12px] top-[20%]">
              <p className="absolute bottom-1/4 font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[48px] not-italic text-[#1f1f1f] text-[14px] top-1/4 whitespace-nowrap">Line</p>
              <IconsLine className="absolute bottom-[20%] left-[12px] overflow-clip top-[20%] w-[24px]" />
            </div>
          </div>
          <div className="absolute h-[40px] left-px right-px top-[105px]" data-name="list_item_40/S/icon">
            <div className="absolute bg-white inset-0" data-name="highlight" />
            <div className="absolute bottom-[20%] contents left-[12px] top-[20%]">
              <p className="absolute bottom-1/4 font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[48px] not-italic text-[#1f1f1f] text-[14px] top-1/4 whitespace-nowrap">Line with breaks</p>
              <div className="absolute bottom-[20%] left-[12px] overflow-clip top-[20%] w-[24px]" data-name="icons/line_with_breaks">
                <div className="absolute inset-[16.67%_12.5%]">
                  <div className="absolute inset-[0_-2.78%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16">
                      <g id="Group 103">
                        <path d={svgPaths.p26c08da0} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5 0V16" id="Vector 41" stroke="var(--stroke-0, #1F1F1F)" strokeDasharray="2 2" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[40px] left-px right-px top-[145px]" data-name="list_item_40/S/icon">
            <div className="absolute bg-white inset-0" data-name="highlight" />
            <div className="absolute bottom-[20%] contents left-[12px] top-[20%]">
              <p className="absolute bottom-1/4 font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[48px] not-italic text-[#1f1f1f] text-[14px] top-1/4 whitespace-nowrap">Step Line</p>
              <div className="absolute bottom-[20%] left-[12px] top-[20%] w-[24px]" data-name="icons/step_line">
                <div className="absolute inset-[12.5%_16.67%]">
                  <div className="absolute inset-[-2.78%_-3.13%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
                      <path d={svgPaths.p1300df00} id="Vector 40" stroke="var(--stroke-0, #1F1F1F)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[40px] left-px right-px top-[185px]" data-name="list_item_40/S/icon">
            <div className="absolute bg-white inset-0" data-name="highlight" />
            <div className="absolute bottom-[20%] contents left-[12px] top-[20%]">
              <p className="absolute bottom-1/4 font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[48px] not-italic text-[#1f1f1f] text-[14px] top-1/4 whitespace-nowrap">Histogram</p>
              <IconsIndicators className="absolute bottom-[20%] left-[12px] overflow-clip top-[20%] w-[24px]" />
            </div>
          </div>
          <div className="absolute h-[40px] left-px right-px top-[225px]" data-name="list_item_40/S/icon">
            <div className="absolute bg-white inset-0" data-name="highlight" />
            <div className="absolute bottom-[20%] contents left-[12px] top-[20%]">
              <p className="absolute bottom-1/4 font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[48px] not-italic text-[#1f1f1f] text-[14px] top-1/4 whitespace-nowrap">Cross</p>
              <div className="absolute bottom-[20%] left-[12px] top-[20%] w-[24px]" data-name="icons/crosses">
                <IconsCrossesCrossBackgroundImage additionalClassNames="inset-[33.33%_62.5%_45.83%_16.67%]" />
                <IconsCrossesCrossBackgroundImage additionalClassNames="inset-[62.5%_33.33%_16.67%_45.83%]" />
                <IconsCrossesCrossBackgroundImage additionalClassNames="inset-[16.67%_20.83%_62.5%_58.33%]" />
              </div>
            </div>
          </div>
          <div className="absolute h-[40px] left-px right-px top-[265px]" data-name="list_item_40/S/icon">
            <div className="absolute bg-white inset-0" data-name="highlight" />
            <div className="absolute bottom-[20%] contents left-[12px] top-[20%]">
              <p className="absolute bottom-1/4 font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[48px] not-italic text-[#1f1f1f] text-[14px] top-1/4 whitespace-nowrap">Area</p>
              <div className="absolute bottom-[20%] left-[12px] overflow-clip top-[20%] w-[24px]" data-name="icons/area">
                <div className="absolute inset-[16.67%_12.5%]" data-name="icon">
                  <div className="absolute inset-[-3.13%_-2.78%_0_-2.78%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 16.5">
                      <g id="icon">
                        <path d={svgPaths.p15ba4100} fill="var(--fill-0, #1F1F1F)" id="Vector" />
                        <path d={svgPaths.pe1b0200} fill="var(--fill-0, #1F1F1F)" id="Vector_2" />
                        <path d={svgPaths.p124b7900} id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p38579700} fill="var(--fill-0, #1F1F1F)" id="Vector_4" />
                        <path d={svgPaths.p16007600} fill="var(--fill-0, #1F1F1F)" id="Vector_5" />
                        <path d={svgPaths.p2eeed240} fill="var(--fill-0, #1F1F1F)" id="Vector_6" />
                        <path d={svgPaths.p3226c700} fill="var(--fill-0, #1F1F1F)" id="Vector_7" />
                        <path d={svgPaths.p1fce4c80} fill="var(--fill-0, #1F1F1F)" id="Vector_8" />
                        <path d={svgPaths.p378162f0} fill="var(--fill-0, #1F1F1F)" id="Vector_9" />
                        <path d={svgPaths.p3fefd400} fill="var(--fill-0, #1F1F1F)" id="Vector_10" />
                        <path d={svgPaths.p3e36cb80} fill="var(--fill-0, #1F1F1F)" id="Vector_11" />
                        <path d={svgPaths.p22433d00} fill="var(--fill-0, #1F1F1F)" id="Vector_12" />
                        <path d={svgPaths.p3e9bcc00} fill="var(--fill-0, #1F1F1F)" id="Vector_13" />
                        <path d={svgPaths.p3051c580} fill="var(--fill-0, #1F1F1F)" id="Vector_14" />
                        <path d={svgPaths.p3e542100} fill="var(--fill-0, #1F1F1F)" id="Vector_15" />
                        <path d={svgPaths.p1c6a5100} fill="var(--fill-0, #1F1F1F)" id="Vector_16" />
                        <path d={svgPaths.p3a77fc80} fill="var(--fill-0, #1F1F1F)" id="Vector_17" />
                        <path d={svgPaths.p221ead00} fill="var(--fill-0, #1F1F1F)" id="Vector_18" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[40px] left-px right-px top-[305px]" data-name="list_item_40/S/icon">
            <div className="absolute bg-white inset-0" data-name="highlight" />
            <div className="absolute bottom-[20%] contents left-[12px] top-[20%]">
              <p className="absolute bottom-1/4 font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[48px] not-italic text-[#1f1f1f] text-[14px] top-1/4 whitespace-nowrap">Area with breaks</p>
              <div className="absolute bottom-[20%] left-[12px] overflow-clip top-[20%] w-[24px]" data-name="icons/area_with_break">
                <div className="absolute inset-[8.33%_12.5%]" data-name="icon">
                  <div className="absolute inset-[0_-2.78%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
                      <g id="icon">
                        <path d={svgPaths.p2e6cdb00} fill="var(--fill-0, #1F1F1F)" id="Vector" />
                        <path d={svgPaths.p219cf200} fill="var(--fill-0, #1F1F1F)" id="Vector_2" />
                        <g id="Group 103">
                          <path d={svgPaths.p894cf00} id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M10.5 0V20" id="Vector 41" stroke="var(--stroke-0, #1F1F1F)" strokeDasharray="2 2" />
                        </g>
                        <path d={svgPaths.p2c92a480} fill="var(--fill-0, #1F1F1F)" id="Vector_4" />
                        <path d={svgPaths.p3e0bb800} fill="var(--fill-0, #1F1F1F)" id="Vector_5" />
                        <path d={svgPaths.p22b80600} fill="var(--fill-0, #1F1F1F)" id="Vector_6" />
                        <path d={svgPaths.p3ae4b100} fill="var(--fill-0, #1F1F1F)" id="Vector_7" />
                        <path d={svgPaths.p38f0d800} fill="var(--fill-0, #1F1F1F)" id="Vector_8" />
                        <path d={svgPaths.pf7a4780} fill="var(--fill-0, #1F1F1F)" id="Vector_9" />
                        <path d={svgPaths.p3a043200} fill="var(--fill-0, #1F1F1F)" id="Vector_10" />
                        <path d={svgPaths.p324a480} fill="var(--fill-0, #1F1F1F)" id="Vector_11" />
                        <path d={svgPaths.p33e39a80} fill="var(--fill-0, #1F1F1F)" id="Vector_12" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[40px] left-px right-px top-[345px]" data-name="list_item_40/S/icon">
            <div className="absolute bg-white inset-0" data-name="highlight" />
            <div className="absolute bottom-[20%] contents left-[12px] top-[20%]">
              <p className="absolute bottom-1/4 font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[48px] not-italic text-[#1f1f1f] text-[14px] top-1/4 whitespace-nowrap">Columns</p>
              <div className="absolute bottom-[20%] left-[12px] top-[20%] w-[24px]" data-name="icons/columns">
                <div className="absolute contents inset-[16.67%_16.67%_8.33%_16.67%]" data-name="columns">
                  <IconsColumnsBackgroundImage additionalClassNames="inset-[45.83%_66.67%_8.33%_16.67%]" />
                  <IconsColumnsBackgroundImage additionalClassNames="inset-[16.67%_41.67%_8.33%_41.67%]" />
                  <IconsColumnsBackgroundImage additionalClassNames="inset-[62.5%_16.67%_8.33%_66.67%]" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute h-[40px] left-px right-px top-[385px]" data-name="list_item_40/S/icon">
            <div className="absolute bg-white inset-0" data-name="highlight" />
            <div className="absolute bottom-[20%] contents left-[12px] top-[20%]">
              <p className="absolute bottom-1/4 font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[48px] not-italic text-[#1f1f1f] text-[14px] top-1/4 whitespace-nowrap">Circles</p>
              <div className="absolute bottom-[20%] left-[12px] top-[20%] w-[24px]" data-name="icons/circles">
                <IconsCirclesBackgroundImage additionalClassNames="inset-[29.17%_62.5%_45.83%_12.5%]" />
                <IconsCirclesBackgroundImage additionalClassNames="inset-[12.5%_20.83%_62.5%_54.17%]" />
                <IconsCirclesBackgroundImage additionalClassNames="inset-[62.5%_33.33%_12.5%_41.67%]" />
              </div>
            </div>
          </div>
          <div className="absolute contents left-[8px] top-[12px]" data-name="switcher_point">
            <div className="absolute contents left-[8px] top-[12px]" data-name="bg_line">
              <div className="absolute bg-[#f8f8ff] h-[40px] left-[8px] opacity-50 right-[8px] rounded-[4px] top-[12px]" data-name="highlight" />
              <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[14px] not-italic text-[#1f1f1f] text-[14px] top-[calc(50%-193.5px)] whitespace-nowrap">Price Line</p>
              <div className="-translate-y-1/2 absolute h-[22px] right-[14px] top-[calc(50%-184.5px)] w-[36px]" data-name="switcher/off">
                <div className="absolute bg-[#babac1] inset-0 rounded-[15.5px]" data-name="Rectangle" />
                <div className="absolute bg-white inset-[9.09%_44.44%_9.09%_5.56%] rounded-[15.5px]" data-name="Rectangle" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[32px] left-[1732px] top-[873px] w-[106px]" data-name="dropdown/text_centered/short/active">
        <div className="absolute bg-white border border-[#00b1c7] border-solid h-[32px] left-0 right-0 rounded-[4px] top-0" data-name="box" />
        <IconsSmallChevronUpBackgroundImage />
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(50%-7px)] not-italic text-[#1f1f1f] text-[14px] text-center top-[calc(50%-10px)] whitespace-nowrap">Values</p>
      </div>
      <div className="absolute contents inset-[31.25%_44.84%_57.26%_51.98%]" data-name="dropdown/precision">
        <div className="absolute bg-white border border-[#efeff4] border-solid inset-[31.25%_44.84%_57.26%_51.98%] rounded-[4px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)]" data-name="bg" />
        <div className="absolute inset-[31.52%_44.86%_67.38%_52%]" data-name="list_item/32/centered">
          <div className="absolute bg-[#f8f8ff] h-[32px] left-0 right-0 top-0" data-name="bg" />
          <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(50%+0.5px)] not-italic text-[#1f1f1f] text-[12px] text-center top-[calc(50%-10px)] whitespace-nowrap">Default</p>
        </div>
        <DropdownPrecisionListItem32CenteredBackgroundImageAndText text="0" additionalClassNames="inset-[32.62%_44.86%_66.29%_52%]" />
        <DropdownPrecisionListItem32CenteredBackgroundImageAndText text="1" additionalClassNames="inset-[33.71%_44.86%_65.2%_52%]" />
        <DropdownPrecisionListItem32CenteredBackgroundImageAndText text="2" additionalClassNames="inset-[34.8%_44.86%_64.1%_52%]" />
        <DropdownPrecisionListItem32CenteredBackgroundImageAndText text="3" additionalClassNames="inset-[35.9%_44.86%_63.01%_52%]" />
        <DropdownPrecisionListItem32CenteredBackgroundImageAndText text="4" additionalClassNames="inset-[36.99%_44.86%_61.91%_52%]" />
        <DropdownPrecisionListItem32CenteredBackgroundImageAndText text="5" additionalClassNames="inset-[38.09%_44.86%_60.82%_52%]" />
        <DropdownPrecisionListItem32CenteredBackgroundImageAndText text="6" additionalClassNames="inset-[39.18%_44.86%_59.73%_52%]" />
        <DropdownPrecisionListItem32CenteredBackgroundImageAndText text="7" additionalClassNames="inset-[40.27%_44.86%_58.63%_52%]" />
        <DropdownPrecisionListItem32CenteredBackgroundImageAndText text="8" additionalClassNames="bg-white inset-[41.37%_44.86%_57.54%_52%]" />
      </div>
      <div className="absolute h-[32px] left-[2582px] top-[809px] w-[139px]" data-name="dropdown/text_centered/long/active">
        <div className="absolute bg-white border border-[#00b1c7] border-solid h-[32px] left-0 right-0 rounded-[4px] top-0" data-name="box" />
        <IconsSmallChevronUpBackgroundImage />
        <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[calc(50%-10px)] not-italic text-[#1f1f1f] text-[14px] text-center top-[calc(50%-10px)] whitespace-nowrap">Same as symbol</p>
      </div>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[2582px] not-italic text-[16px] text-black top-[776px] whitespace-nowrap">Resolution</p>
      <div className="absolute contents left-[2582px] top-[845px]" data-name="dropdown/resolution">
        <div className="absolute bg-white border border-[#efeff4] border-solid inset-[28.89%_18.34%_55.25%_77.49%] rounded-[4px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)]" data-name="bg" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="Same as symbol" additionalClassNames="top-[853px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="1 minute" additionalClassNames="top-[885px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="3 minutes" additionalClassNames="top-[917px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="5 minutes" additionalClassNames="top-[949px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="15 minutes" additionalClassNames="top-[981px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="30 minutes" additionalClassNames="top-[1013px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="45 minutes" additionalClassNames="top-[1045px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="1 hour" additionalClassNames="top-[1077px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="2 hours" additionalClassNames="top-[1109px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="3 hours" additionalClassNames="top-[1141px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="4 hours" additionalClassNames="top-[1173px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="1 day" additionalClassNames="top-[1205px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="1 week" additionalClassNames="top-[1237px]" />
        <DropdownResolutionListItem32SBackgroundImageAndText text="1 month" additionalClassNames="top-[1269px]" />
      </div>
      <div className="absolute h-[252px] left-[1555px] top-[877px] w-[164px]" data-name="tool_menu/color">
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
          <div className="absolute inset-[84.92%_30.49%_4.76%_53.66%] rounded-[2px]" data-name="color">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[2px]">
              <img alt="" className="absolute h-[108.33%] left-[-0.15%] max-w-none top-0 w-[100.31%]" src={imgColor} />
            </div>
          </div>
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
              <div className="absolute bg-size-[110.00000238418579px_110.00000238418579px] bg-top-left inset-0 rounded-[6px]" style={{ backgroundImage: `url('${imgOpacityScale}')` }} />
              <img alt="" className="absolute max-w-none object-cover rounded-[6px] size-full" src={imgOpacityScale1} />
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
    </div>
  );
}