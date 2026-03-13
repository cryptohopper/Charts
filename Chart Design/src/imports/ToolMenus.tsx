import clsx from "clsx";
import svgPaths from "./svg-2jlpmarha3";
import imgIconCryptohopper from "figma:asset/f1841337e214c3907e27f0e01bfbc7696f6af6d9.png";
import imgRectangle317 from "figma:asset/70017910a949817aa1c11716388ee64b40b2eafa.png";
import imgRgbLogoDarkNoBg011 from "figma:asset/bfb3fe6da9e88a568cbf5fd07d74cee065bbcbc3.png";
import imgOpacityScale from "figma:asset/7658e7e9a7ed0c1c3dd735be9be8e1932aae9269.png";
import imgOpacityScale1 from "figma:asset/96620d5081eb1173faf51622afd13844ad334d90.png";
type BackgroundImage9Props = {
  additionalClassNames?: string;
};

function BackgroundImage9({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage9Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        {children}
      </svg>
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

function BackgroundImage8({ children }: React.PropsWithChildren<{}>) {
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

function IconBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[41.67%_8.33%]">
      <div className="absolute inset-[-12.5%_-2.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 5">
          <g id="icon">{children}</g>
        </svg>
      </div>
    </div>
  );
}

function BackgroundImage7({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage8>
      <g id="icon">{children}</g>
    </BackgroundImage8>
  );
}

function Frame6BackgroundImage() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-[32px] items-center justify-center relative shrink-0 w-px">
      <div className="-rotate-90 flex-none">
        <div className="bg-white h-px rounded-[6px] w-[32px]" data-name="divider" />
      </div>
    </div>
  );
}
type DateBackgroundImageAndTextProps = {
  text: string;
};

function DateBackgroundImageAndText({ text }: DateBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[calc(44.44%+48px)] top-[804px]">
      <div className="absolute bg-[#00b1c7] h-[19px] left-[calc(44.44%+48px)] top-[804px] w-[65px]" data-name="card_bg" />
      <div className="absolute flex h-[4px] items-center justify-center left-1/2 top-[804px] w-[0.5px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-white h-[0.5px] w-[4px]" data-name="indicator" />
        </div>
      </div>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(44.44%+55px)] not-italic text-[12px] text-white top-[806px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type PriceBackgroundImageAndTextProps = {
  text: string;
};

function PriceBackgroundImageAndText({ text }: PriceBackgroundImageAndTextProps) {
  return (
    <div className="absolute contents left-[calc(94.44%+4px)] top-[329px]">
      <div className="absolute bg-[#00b1c7] h-[19px] left-[calc(94.44%+4px)] top-[329px] w-[64px]" data-name="card_bg" />
      <div className="absolute bg-white h-px left-[calc(94.44%+4px)] top-[338px] w-[4px]" data-name="indicator_line" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[calc(100%-68px)] not-italic text-[12px] text-white top-[331px] whitespace-nowrap">{text}</p>
    </div>
  );
}

function HorizontalLineEditModeBackgroundImage() {
  return (
    <div className="absolute h-[9px] left-[60px] top-[334px] w-[1368px]">
      <div className="absolute inset-[-11.11%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1368 11">
          <g id="horizontal_line/edit_mode">
            <path d="M0 5H1368V6H0V5Z" fill="var(--fill-0, #00B1C7)" id="horizontal_line" />
            <circle cx="660.5" cy="5.5" fill="var(--fill-0, white)" id="marker" r="5" stroke="var(--stroke-0, #00B1C7)" />
          </g>
        </svg>
      </div>
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
        <BackgroundImage7>
          <path d={svgPaths.pbbda80} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p6a25a00} id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
        </BackgroundImage7>
      </div>
    </div>
  );
}

function MenuItemColorBackgroundImage() {
  return (
    <div className="h-[38px] relative shrink-0 w-[48px]">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#00b1c7] left-1/2 rounded-[2px] size-[24px] top-1/2" data-name="color" />
    </div>
  );
}
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ additionalClassNames = "" }: BackgroundImage6Props) {
  return (
    <div className={clsx("absolute bg-white content-stretch flex items-center py-px rounded-[6px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <IconsDragBackgroundImage additionalClassNames="relative shrink-0" />
      <BackgroundImage3 additionalClassNames="relative shrink-0" />
      <MenuItemColorBackgroundImage />
      <BackgroundImage3 additionalClassNames="relative shrink-0" />
      <MenuItemWidthStyleSolid className="h-[38px] relative shrink-0 w-[62px]" />
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

function ExchangeDescriptionBackgroundImage() {
  return (
    <div className="absolute contents left-[18px] top-0">
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
          <div className="relative shrink-0 size-[16px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="market_open">
                <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" fillOpacity="0.2" id="bg" r="8" />
                <circle cx="8" cy="8" fill="var(--fill-0, #29C79E)" id="dot" r="4" />
              </g>
            </svg>
          </div>
          <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-[12px]">
            <div className="content-stretch flex font-['Source_Sans_Pro:Regular',sans-serif] gap-[2px] items-center leading-[0] relative shrink-0">
              <BackgroundImageAndText text="O" additionalClassNames="whitespace-nowrap" />
              <p className="relative shrink-0 text-[#09977e] whitespace-pre">
                <span className="leading-[normal]">{"13065.10"}</span>
                <span className="leading-[normal] text-[#1f1f1f]">{`   `}</span>
              </p>
            </div>
            <div className="content-stretch flex font-['Source_Sans_Pro:Regular',sans-serif] gap-[2px] items-center relative shrink-0 whitespace-nowrap">
              <BackgroundImageAndText text="H" additionalClassNames="leading-[0]" />
              <p className="leading-[normal] relative shrink-0 text-[#09977e]">{"13480.00"}</p>
            </div>
            <div className="content-stretch flex gap-[2px] items-center leading-[normal] relative shrink-0 whitespace-nowrap">
              <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] relative shrink-0 text-[#3e3e3e]">{"L"}</p>
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] relative shrink-0 text-[#09977e]">{"13057.09"}</p>
            </div>
            <div className="content-stretch flex gap-[2px] items-center relative shrink-0 whitespace-nowrap">
              <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] relative shrink-0 text-[#3e3e3e]">{"C"}</p>
              <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] relative shrink-0 text-[#09977e]">
                <span className="leading-[normal]">{"13407.46"}</span>
                <span className="leading-[normal] text-[#1f1f1f]">{` `}</span>
              </p>
            </div>
          </div>
          <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09977e] text-[12px] whitespace-pre">{`+340.73 (+2.61%)  `}</p>
        </div>
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
    <p className={clsx("relative shrink-0 text-[#1f1f1f]", additionalClassNames)}>
      <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal]">{text}</span>
      <span className="leading-[normal]">{` `}</span>
    </p>
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
  );
}

function RighstSideBarBackgroundImage() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute contents left-0 top-0">
        <div className="absolute bg-white h-[772px] left-[1303px] rounded-br-[6px] rounded-tr-[6px] top-0 w-[65px]" data-name="right_side_bar_bg" />
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
        <div className="absolute flex h-px items-center justify-center left-0 top-[739px] w-[1368px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <div className="bg-[#efeff4] h-[1368px] w-px" data-name="border_chart" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[1304px] top-[342px]">
        <div className="absolute bg-[#09977e] h-[19px] left-[1304px] top-[342px] w-[64px]" data-name="card_bg" />
        <div className="absolute bg-white h-px left-[1304px] top-[351px] w-[4px]" data-name="indicator_line" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[1312px] not-italic text-[12px] text-white top-[344px] whitespace-nowrap">{"11338.45"}</p>
      </div>
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

function BackgroundImage1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-0 left-[calc(50%-7px)] top-[calc(50%-0.5px)] w-[24px]">
      <div className="absolute inset-[-0.5px_-2.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 1">
          <path d="M0.5 0.5H24.5" id="Vector 48" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" />
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

function BackgroundImage() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+17px)] overflow-clip size-[24px] top-1/2">
      <VectorBackgroundImage />
    </div>
  );
}
type IconsSmallChevronDownBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconsSmallChevronDownBackgroundImage({ additionalClassNames = "" }: IconsSmallChevronDownBackgroundImageProps) {
  return (
    <div className={clsx("absolute overflow-clip size-[24px] top-[192px]", additionalClassNames)}>
      <VectorBackgroundImage />
    </div>
  );
}

function IconsRemoveSmall({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/remove_small">
      <BackgroundImage8>
        <g id="bin">
          <path d="M0.5 3.70001H2.05556H14.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2649000} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.94446 7.70001V12.5" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.05566 7.70001V12.5" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </BackgroundImage8>
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

function MenuItemWidthStyleSolid({ className }: { className?: string }) {
  return (
    <div className={className || "h-[38px] relative w-[62px]"} data-name="menu_item/width_style/solid_1">
      <div className="absolute bg-white inset-0" data-name="bg" />
      <BackgroundImage1 />
      <BackgroundImage />
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
              <BackgroundImage9 additionalClassNames="inset-[-3.13%]">
                <path d={svgPaths.p37c74100} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage9>
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
              <BackgroundImage9 additionalClassNames="inset-[-3.13%_-3.13%_-3.12%_-3.13%]">
                <path d={svgPaths.pb3a6d80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage9>
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

function ButtonToolDefault({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[48px]"} data-name="button/tool/default">
      <div className="absolute bg-white inset-0" data-name="tool_bg" />
      <div className="absolute inset-1/4 overflow-clip" data-name="icons/horizontal_line">
        <IconBackgroundImage>
          <path d="M0.5 2.5L20.5 2.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1e2ea900} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
        </IconBackgroundImage>
      </div>
    </div>
  );
}

function ToolsBarTrendLine({ className }: { className?: string }) {
  return (
    <div className={className || "h-[836px] relative w-[48px]"} data-name="tools_bar/trend_line">
      <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
      <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-0 top-0">
        <div className="content-stretch flex flex-col items-start relative shrink-0">
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/cursor">
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/cursor_tool">
              <div className="absolute inset-[41.67%]" data-name="icon">
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
            <div className="absolute bg-[#dcf5f7] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/trend_line">
              <div className="absolute inset-[16.67%_12.5%_12.5%_16.67%]" data-name="line">
                <div className="absolute inset-[-2.94%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="line">
                      <path d={svgPaths.p10769600} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p6353880} fill="var(--fill-0, #DCF5F7)" id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p263d7500} fill="var(--fill-0, #DCF5F7)" id="Vector_3" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0" data-name="tool_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/horizontal_line">
              <IconBackgroundImage>
                <path d="M0.5 2.5L20.5 2.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p1e2ea900} fill="var(--fill-0, #F8F8FF)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </IconBackgroundImage>
            </div>
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

function ButtonRoundDefault({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[40px]"} data-name="button/round/default">
      <div className="absolute inset-[-80%_-102.5%_-120%_-97.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 120">
          <g filter="url(#filter0_d_17_1119)" id="round_bg">
            <circle cx="59" cy="52" fill="var(--fill-0, white)" fillOpacity="0.9" r="20" />
            <circle cx="59" cy="52" r="19.5" stroke="var(--stroke-0, #F8F8FF)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="120" id="filter0_d_17_1119" width="120" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="1" dy="8" />
              <feGaussianBlur stdDeviation="20" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0 0.2625 0 0 0 0.12 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_17_1119" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_17_1119" mode="normal" result="shape" />
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

export default function ToolMenus() {
  return (
    <div className="bg-[#efeff4] relative size-full" data-name="Tool_menus">
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[86px] not-italic text-[103px] text-black top-[68px] whitespace-nowrap">1</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[86px] not-italic text-[103px] text-black top-[1326px] whitespace-nowrap">2</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[86px] not-italic text-[103px] text-black top-[2665px] whitespace-nowrap">3</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[86px] not-italic text-[103px] text-black top-[3900px] whitespace-nowrap">4</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[86px] not-italic text-[103px] text-black top-[4223px] whitespace-nowrap">5</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[192px] not-italic text-[#1f1f1f] text-[24px] top-[92px] w-[480px]">There are 2 types of tool menues for every tool: a small menu and an extended one. A small menu appears once a tool is being chosen.</p>
      <div className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[192px] not-italic text-[#1f1f1f] text-[24px] top-[1368px] w-[480px] whitespace-pre-wrap">
        <p className="mb-0">{`An extended menu “extends” from a small one when a tool was used or something has already been drawn with this or that tool. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>It disappears when another tool is chosen (in this case it is replaced by another small tool menu) or on click anywhere on the chart field.</p>
      </div>
      <div className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[192px] not-italic text-[#1f1f1f] text-[24px] top-[2706px] w-[872px] whitespace-pre-wrap">
        <p className="mb-0">{`When any option is chosen from a menu - an option gets grey background (dividers near the option become white) and a dropdown appears 4 px below and is aligned left. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>To exit a dropdown, a user has to click anywhere on the chart or on another option from the menu.</p>
      </div>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[192px] not-italic text-[#1f1f1f] text-[24px] top-[3941px] w-[518px]">Any tool menu can be restored with a click on a related drawing e.g. “Horizontal Line” tool menu appears again when a user clicks on an already drawn horizontal line.</p>
      <div className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[190px] not-italic text-[#1f1f1f] text-[24px] top-[4259px] whitespace-nowrap whitespace-pre">
        <p className="mb-0">{`Drawing is “locked” (it’s impossible to drag its ends, `}</p>
        <p>stretch it or move it anywhere)</p>
      </div>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[1128px] not-italic text-[#1f1f1f] text-[24px] top-[4295px] whitespace-nowrap">Drawing is unlocked</p>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[96px] overflow-clip top-[274px] w-[1440px]" data-name="horizontal_line/on">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLineBackgroundImage text="12" text1="9" text2="5" text3="3" text4="Oct" text5="7" text6="28" text7="25" text8="23" text9="21" text10="18" text11="16" text12="14" text13="11" text14="9" text15="7" text16="5" text17="3" text18="Sep" text19="30" />
          <RighstSideBarBackgroundImage />
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <ChartLayoutBackgroundImage />
            <div className="absolute h-[740px] left-0 overflow-clip top-0 w-[1304px]" data-name="bars">
              <BarsBackgroundImage />
            </div>
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
            <ButtonRoundDefault className="absolute left-[1245px] size-[40px] top-[681px]" />
          </div>
          <ExchangeDescriptionBackgroundImage />
        </div>
        <ToolsBarTrendLine className="absolute h-[836px] left-0 top-[64px] w-[48px]" />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <div className="absolute contents left-[calc(38.89%+60px)] top-[184px]" data-name="tool_menu/horizontal_line">
          <div className="absolute bg-white border border-[#efeff4] border-solid h-[40px] left-[calc(38.89%+60px)] rounded-[6px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)] top-[184px] w-[201px]" data-name="bg_tool_menu" />
          <div className="absolute contents left-[calc(50%+37px)] top-[185px]" data-name="style">
            <div className="absolute bg-white h-[38px] left-[calc(50%+37px)] rounded-br-[6px] rounded-tr-[6px] top-[185px] w-[62px]" data-name="bg" />
            <div className="absolute bg-[#3e3e3e] h-px left-[calc(50%+49px)] rounded-[6px] top-[203px] w-[24px]" data-name="style" />
            <IconsSmallChevronDownBackgroundImage additionalClassNames="left-[calc(55.56%-7px)]" />
          </div>
          <BackgroundImage3 additionalClassNames="absolute left-[calc(50%+36px)] top-[188px]" />
          <div className="absolute contents left-[calc(44.44%+54px)] top-[185px]" data-name="tickness">
            <div className="absolute bg-white h-[38px] left-[calc(44.44%+54px)] top-[185px] w-[62px]" data-name="bg" />
            <div className="absolute bg-[#3e3e3e] h-px left-[calc(44.44%+66px)] rounded-[6px] top-[203px] w-[24px]" data-name="thickness" />
            <IconsSmallChevronDownBackgroundImage additionalClassNames="left-[calc(50%+10px)]" />
          </div>
          <BackgroundImage3 additionalClassNames="absolute left-[calc(44.44%+53px)] top-[188px]" />
          <div className="absolute bg-[#61cad2] left-[calc(44.44%+17px)] rounded-[2px] size-[24px] top-[192px]" data-name="color" />
          <BackgroundImage3 additionalClassNames="absolute left-[calc(44.44%+4px)] top-[188px]" />
          <IconsDragBackgroundImage additionalClassNames="absolute left-[calc(38.89%+60px)] top-[192px]" />
        </div>
      </div>
      <div className="absolute contents left-[729px] top-[1383px]" data-name="tool_menu_extended/horizontal_line">
        <BackgroundImage6 additionalClassNames="left-[729px] top-[1383px]" />
      </div>
      <div className="absolute contents left-[251px] top-[4364px]" data-name="tool_menu_extended/horizontal_line">
        <BackgroundImage6 additionalClassNames="left-[251px] top-[4364px]" />
      </div>
      <div className="absolute contents left-[901px] top-[4364px]" data-name="tool_menu_extended/horizontal_line">
        <div className="absolute bg-white content-stretch flex items-center left-[901px] py-px rounded-[6px] top-[4364px]">
          <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <IconsDragBackgroundImage additionalClassNames="relative shrink-0" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <MenuItemColorBackgroundImage />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <MenuItemWidthStyleSolid className="h-[38px] relative shrink-0 w-[62px]" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <Icon className="h-[38px] relative shrink-0 w-[56px]" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <MenuItemIconDefault className="h-[38px] relative shrink-0 w-[66px]" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <div className="h-[38px] relative shrink-0 w-[56px]" data-name="lock">
            <div className="absolute bg-white inset-0" data-name="bg" />
            <div className="absolute inset-[18.42%_28.57%] overflow-clip" data-name="icons/lock">
              <BackgroundImage7>
                <path d={svgPaths.pbbda80} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p6a25a00} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
              </BackgroundImage7>
            </div>
          </div>
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <div className="h-[38px] relative shrink-0 w-[56px]" data-name="delete">
            <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
          </div>
        </div>
      </div>
      <div className="absolute contents left-[767px] top-[104px]" data-name="tool_menu/horizontal_line">
        <div className="absolute bg-white content-stretch flex items-center left-[767px] py-px rounded-[6px] top-[104px]">
          <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <IconsDragBackgroundImage additionalClassNames="relative shrink-0" />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <MenuItemColorBackgroundImage />
          <BackgroundImage3 additionalClassNames="relative shrink-0" />
          <div className="h-[38px] relative shrink-0 w-[62px]" data-name="menu_item/width_style/solid_1">
            <BackgroundImage1 />
            <BackgroundImage />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[96px] overflow-clip top-[1674px] w-[1440px]" data-name="horizontal_line/edit_mode">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLineBackgroundImage text="12" text1="9" text2="5" text3="3" text4="Oct" text5="7" text6="28" text7="25" text8="23" text9="21" text10="18" text11="16" text12="14" text13="11" text14="9" text15="7" text16="5" text17="3" text18="Sep" text19="30" />
          <RighstSideBarBackgroundImage />
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <ChartLayoutBackgroundImage />
            <div className="absolute h-[740px] left-0 overflow-clip top-0 w-[1304px]" data-name="bars">
              <BarsBackgroundImage />
            </div>
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
            <ButtonRoundDefault className="absolute left-[1245px] size-[40px] top-[681px]" />
          </div>
          <ExchangeDescriptionBackgroundImage />
        </div>
        <ToolsBarTrendLine className="absolute h-[836px] left-0 top-[64px] w-[48px]" />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <div className="absolute contents left-[calc(27.78%+67px)] top-[184px]" data-name="tool_menu_extended/horizontal_line">
          <div className="absolute bg-white border border-[#efeff4] border-solid h-[40px] left-[calc(27.78%+67px)] rounded-[6px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)] top-[184px] w-[506px]" data-name="bg_tool_menu" />
          <div className="absolute h-[38px] left-[calc(61.11%+35px)] top-[185px] w-[56px]" data-name="delete">
            <IconsRemoveSmall className="absolute inset-[18.42%_28.57%] overflow-clip" />
          </div>
          <BackgroundImage3 additionalClassNames="absolute left-[calc(61.11%+34px)] top-[188px]" />
          <LockBackgroundImage additionalClassNames="absolute left-[calc(61.11%-22px)] top-[185px]" />
          <BackgroundImage3 additionalClassNames="absolute left-[calc(61.11%-23px)] top-[188px]" />
          <MenuItemIconDefault className="absolute h-[38px] left-[calc(55.56%-9px)] top-[185px] w-[66px]" />
          <BackgroundImage3 additionalClassNames="absolute left-[calc(55.56%-10px)] top-[188px]" />
          <MenuItemIconDefault className="absolute h-[38px] left-[calc(50%+4px)] top-[185px] w-[66px]" />
          <BackgroundImage3 additionalClassNames="absolute left-[calc(50%+3px)] top-[188px]" />
          <Icon className="absolute h-[38px] left-[calc(44.44%+27px)] top-[185px] w-[56px]" />
          <BackgroundImage3 additionalClassNames="absolute left-[calc(44.44%+26px)] top-[188px]" />
          <div className="absolute contents left-[calc(38.89%+44px)] top-[185px]" data-name="style">
            <div className="absolute bg-white h-[38px] left-[calc(38.89%+44px)] top-[185px] w-[62px]" data-name="bg" />
            <div className="absolute bg-[#3e3e3e] h-px left-[calc(38.89%+56px)] rounded-[6px] top-[203px] w-[24px]" data-name="style" />
            <IconsSmallChevronDownBackgroundImage additionalClassNames="left-[44.44%]" />
          </div>
          <BackgroundImage3 additionalClassNames="absolute left-[calc(38.89%+43px)] top-[188px]" />
          <div className="absolute contents left-[calc(33.33%+61px)] top-[185px]" data-name="thickness">
            <div className="absolute bg-white h-[38px] left-[calc(33.33%+61px)] top-[185px] w-[62px]" data-name="bg" />
            <div className="absolute bg-[#3e3e3e] h-px left-[calc(33.33%+73px)] rounded-[6px] top-[203px] w-[24px]" data-name="thickness" />
            <IconsSmallChevronDownBackgroundImage additionalClassNames="left-[calc(38.89%+17px)]" />
          </div>
          <BackgroundImage3 additionalClassNames="absolute left-[calc(33.33%+60px)] top-[188px]" />
          <div className="absolute bg-[#61cad2] left-[calc(33.33%+24px)] rounded-[2px] size-[24px] top-[192px]" data-name="color" />
          <BackgroundImage3 additionalClassNames="absolute left-[calc(33.33%+11px)] top-[188px]" />
          <IconsDragBackgroundImage additionalClassNames="absolute left-[calc(27.78%+67px)] top-[192px]" />
        </div>
        <HorizontalLineEditModeBackgroundImage />
        <PriceBackgroundImageAndText text="11550.00" />
        <DateBackgroundImageAndText text="20 Sep, 20" />
      </div>
      <div className="absolute bg-[#f8f8ff] h-[900px] left-[102px] overflow-clip top-[2924px] w-[1440px]" data-name="horizontal_line/edit_mode">
        <FooterBarBackgroundImageAndText text="12: 25: 50 (UTC)" />
        <div className="absolute h-[772px] left-[60px] overflow-clip rounded-[6px] top-[64px] w-[1368px]" data-name="chart">
          <TimeLineBackgroundImage text="12" text1="9" text2="5" text3="3" text4="Oct" text5="7" text6="28" text7="25" text8="23" text9="21" text10="18" text11="16" text12="14" text13="11" text14="9" text15="7" text16="5" text17="3" text18="Sep" text19="30" />
          <RighstSideBarBackgroundImage />
          <div className="absolute h-[739px] left-0 overflow-clip top-0 w-[1303px]" data-name="chart_items">
            <ChartLayoutBackgroundImage />
            <div className="absolute h-[740px] left-0 overflow-clip top-0 w-[1304px]" data-name="bars">
              <BarsBackgroundImage />
            </div>
            <LogoCryptohopperExtended className="absolute h-[38px] left-[18px] top-[683px] w-[169px]" />
            <ButtonRoundDefault className="absolute left-[1245px] size-[40px] top-[681px]" />
          </div>
          <ExchangeDescriptionBackgroundImage />
        </div>
        <ToolsBarTrendLine className="absolute h-[836px] left-0 top-[64px] w-[48px]" />
        <UpperBarDefault className="absolute h-[40px] left-[60px] top-[12px] w-[1368px]" />
        <IconCryptohopper className="absolute left-[11px] size-[26px] top-[19px]" />
        <div className="absolute contents left-[calc(27.78%+67px)] top-[184px]" data-name="tool_menu_extended/horizontal_line">
          <div className="absolute bg-white content-stretch flex items-center left-[calc(27.78%+67px)] py-px rounded-[6px] top-[184px]">
            <div aria-hidden="true" className="absolute border border-[#efeff4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[1px_8px_32px_0px_rgba(49,49,49,0.08)]" />
            <IconsDragBackgroundImage additionalClassNames="relative shrink-0" />
            <Frame6BackgroundImage />
            <div className="h-[38px] relative shrink-0 w-[48px]" data-name="menu_item/color">
              <div className="absolute bg-[#f8f8ff] inset-0" data-name="bg" />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#00b1c7] left-1/2 rounded-[2px] size-[24px] top-1/2" data-name="color" />
            </div>
            <Frame6BackgroundImage />
            <MenuItemWidthStyleSolid className="h-[38px] relative shrink-0 w-[62px]" />
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
        <HorizontalLineEditModeBackgroundImage />
        <PriceBackgroundImageAndText text="11550.00" />
        <DateBackgroundImageAndText text="20 Sep, 20" />
        <div className="absolute contents left-[calc(33.33%+12px)] top-[228px]" data-name="tool_menu/color">
          <div className="absolute bg-white border border-[#efeff4] border-solid h-[252px] left-[calc(33.33%+12px)] rounded-[4px] shadow-[1px_8px_40px_0px_rgba(49,49,49,0.16)] top-[228px] w-[164px]" data-name="bg" />
          <div className="absolute contents left-[calc(38.89%+20px)] top-[272px]" data-name="selected_color">
            <div className="absolute bg-[#f2c847] left-[calc(38.89%+20px)] rounded-[2px] size-[26px] top-[272px]" data-name="color" />
            <div className="absolute border border-solid border-white left-[calc(38.89%+22px)] rounded-[2px] size-[22px] top-[274px]" data-name="selected" />
          </div>
          <div className="absolute contents left-[calc(33.33%+24px)] top-[272px]" data-name="colors">
            <div className="absolute bg-white border border-[#f0f0f9] border-solid left-[calc(33.33%+24px)] rounded-[2px] size-[26px] top-[272px]" data-name="color" />
            <div className="absolute bg-[#fdf368] left-[calc(33.33%+62px)] rounded-[2px] size-[26px] top-[272px]" data-name="color" />
            <div className="absolute bg-[#de5537] left-[calc(38.89%+58px)] rounded-[2px] size-[26px] top-[272px]" data-name="color" />
            <div className="absolute bg-[#e6e6e6] left-[calc(33.33%+24px)] rounded-[2px] size-[26px] top-[306px]" data-name="color" />
            <div className="absolute bg-[#d4e560] left-[calc(33.33%+62px)] rounded-[2px] size-[26px] top-[306px]" data-name="color" />
            <div className="absolute bg-[#9fce62] left-[calc(38.89%+20px)] rounded-[2px] size-[26px] top-[306px]" data-name="color" />
            <div className="absolute bg-[#c72c63] left-[calc(38.89%+58px)] rounded-[2px] size-[26px] top-[306px]" data-name="color" />
            <div className="absolute bg-[#808080] left-[calc(33.33%+24px)] rounded-[2px] size-[26px] top-[340px]" data-name="color" />
            <div className="absolute bg-[#61cad2] left-[calc(33.33%+62px)] rounded-[2px] size-[26px] top-[340px]" data-name="color" />
            <div className="absolute bg-[#4ea48b] left-[calc(38.89%+20px)] rounded-[2px] size-[26px] top-[340px]" data-name="color" />
            <div className="absolute bg-[#8728a6] left-[calc(38.89%+58px)] rounded-[2px] size-[26px] top-[340px]" data-name="color" />
            <div className="absolute bg-[#1a1a1a] left-[calc(33.33%+24px)] rounded-[2px] size-[26px] top-[374px]" data-name="color" />
            <div className="absolute bg-[#519be9] left-[calc(33.33%+62px)] rounded-[2px] size-[26px] top-[374px]" data-name="color" />
            <div className="absolute bg-[#424eac] left-[calc(38.89%+20px)] rounded-[2px] size-[26px] top-[374px]" data-name="color" />
            <div className="absolute bg-[#5d34ad] left-[calc(38.89%+58px)] rounded-[2px] size-[26px] top-[374px]" data-name="color" />
            <div className="absolute bg-[#a6a6a6] left-[calc(33.33%+24px)] rounded-[2px] size-[26px] top-[408px]" data-name="color" />
            <div className="absolute bg-[#04073d] left-[calc(33.33%+62px)] rounded-[2px] size-[26px] top-[408px]" data-name="color" />
            <div className="absolute bg-[#5e9f55] left-[calc(38.89%+20px)] rounded-[2px] size-[26px] top-[408px]" data-name="color" />
            <div className="absolute bg-[#a08fdd] left-[calc(38.89%+58px)] rounded-[2px] size-[26px] top-[408px]" data-name="color" />
            <div className="absolute bg-[#5e5e5e] left-[calc(33.33%+24px)] rounded-[2px] size-[26px] top-[442px]" data-name="color" />
            <div className="absolute bg-[#e93323] left-[calc(33.33%+62px)] rounded-[2px] size-[26px] top-[442px]" data-name="color" />
            <div className="absolute bg-[#f88922] left-[calc(38.89%+20px)] rounded-[2px] size-[26px] top-[442px]" data-name="color" />
            <div className="absolute contents left-[calc(38.89%+58px)] top-[442px]" data-name="add_color">
              <div className="absolute bg-white left-[calc(38.89%+58px)] rounded-[2px] size-[26px] top-[442px]" data-name="color" />
              <div className="absolute left-[calc(38.89%+59px)] size-[24px] top-[443px]" data-name="icons/plus">
                <div className="absolute inset-[29.17%]" data-name="Union">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                    <path d={svgPaths.p3fc86600} fill="var(--fill-0, #1F1F1F)" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute contents left-[calc(33.33%+24px)] top-[243px]" data-name="opacity_bar">
            <div className="absolute h-[8px] left-[calc(33.33%+24px)] pointer-events-none rounded-[6px] top-[246px] w-[140px]" data-name="opacity scale">
              <div aria-hidden="true" className="absolute inset-0 rounded-[6px]">
                <div className="absolute bg-size-[110.00000238418579px_110.00000238418579px] bg-top-left inset-0 rounded-[6px]" style={{ backgroundImage: `url('${imgOpacityScale}')` }} />
                <img alt="" className="absolute max-w-none object-cover rounded-[6px] size-full" src={imgOpacityScale1} />
              </div>
              <div aria-hidden="true" className="absolute border-[#babac1] border-[0.5px] border-solid inset-0 rounded-[6px]" />
            </div>
            <div className="absolute left-[calc(33.33%+64px)] size-[14px] top-[243px]" data-name="drag_ruler">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g id="drag_ruler">
                  <circle cx="7" cy="7" fill="var(--fill-0, white)" id="Ellipse 11" r="6.75" stroke="var(--stroke-0, #BABAC1)" strokeWidth="0.5" />
                  <circle cx="7" cy="7" fill="var(--fill-0, #F9F2DE)" id="Ellipse 12" r="4" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[40.5px] left-[500px] top-[4315.5px] w-[107px]">
        <div className="absolute inset-[-1.23%_-3.44%_-1.23%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.682 41.5">
            <path d={svgPaths.p739fd00} fill="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
    </div>
  );
}