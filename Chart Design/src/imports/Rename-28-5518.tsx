import clsx from "clsx";
import svgPaths from "./svg-9frm0kn64p";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute size-[40px] top-[151px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        {children}
      </svg>
    </div>
  );
}
type ButtonSecondarySDefaultTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonSecondarySDefaultText({ text, additionalClassNames = "" }: ButtonSecondarySDefaultTextProps) {
  return (
    <div className={clsx("absolute h-[32px] top-[258px] w-[93px]", additionalClassNames)}>
      <div className="absolute bg-white border border-[#babac1] border-solid h-[32px] left-0 right-0 rounded-[2px] top-0" data-name="bg" />
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-1/2 not-italic text-[#8e8e93] text-[14px] text-center top-[calc(50%-9px)] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ButtonSPrimaryDefaultTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonSPrimaryDefaultText({ text, additionalClassNames = "" }: ButtonSPrimaryDefaultTextProps) {
  return (
    <div className={clsx("absolute h-[32px] top-[258px] w-[92px]", additionalClassNames)}>
      <div className="absolute bg-[#00b1c7] inset-0 rounded-[2px]" data-name="bg" />
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[calc(50%-0.5px)] not-italic text-[14px] text-center text-white top-[calc(50%-9px)] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Rename() {
  return (
    <div className="bg-[#efeff4] relative size-full" data-name="Rename">
      <div className="absolute contents left-[135px] top-[135px]" data-name="modal/success">
        <div className="absolute bg-white border border-[#f8f8ff] border-solid h-[170px] left-[135px] rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[135px] w-[230px]" data-name="bg_modal" />
        <div className="absolute content-stretch flex flex-col gap-[15px] items-start left-[150px] top-[203px]" data-name="button+text">
          <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1f1f1f] text-[14px] text-center w-[200px] whitespace-pre-wrap">{`“Unnamed Layout 1”  is successfully saved.`}</p>
          <div className="h-[32px] relative shrink-0 w-[200px]" data-name="button/S/primary/default">
            <div className="absolute bg-[#00b1c7] inset-0 rounded-[2px]" data-name="bg" />
            <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[calc(50%-0.5px)] not-italic text-[14px] text-center text-white top-[calc(50%-9px)] whitespace-nowrap">Ok</p>
          </div>
        </div>
        <div className="absolute contents left-[229px] top-[151px]" data-name="checkmark">
          <Wrapper additionalClassNames="left-[230px]">
            <circle cx="20" cy="20" fill="var(--fill-0, #00B1C7)" fillOpacity="0.1" id="Ellipse 9" r="20" />
          </Wrapper>
          <div className="absolute left-[229px] overflow-clip size-[40px] top-[151px]" data-name="icons/check_small">
            <div className="absolute inset-[37.5%_29.17%_37.5%_33.33%]" data-name="Vector">
              <div className="absolute inset-[-15%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
                  <path d={svgPaths.p254aad90} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[420px] top-[135px]" data-name="modal/fail">
        <div className="absolute bg-white border border-[#f8f8ff] border-solid h-[170px] left-[420px] rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[135px] w-[230px]" data-name="bg_modal" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[23.14%] not-italic right-[66.22%] text-[#1f1f1f] text-[14px] text-center top-[calc(50%-80px)]">An error occured while renaming the file.</p>
        <ButtonSPrimaryDefaultText text="Try Again" additionalClassNames="left-[543px]" />
        <ButtonSecondarySDefaultText text="Close" additionalClassNames="left-[435px]" />
        <div className="absolute contents left-[515px] top-[151px]" data-name="cross">
          <Wrapper additionalClassNames="left-[515px]">
            <circle cx="20" cy="20" fill="var(--fill-0, #FF6B5C)" fillOpacity="0.1" id="Ellipse 9" r="20" />
          </Wrapper>
          <div className="absolute left-[516px] size-[40px] top-[152px]" data-name="icons/multiply">
            <div className="absolute inset-[33.33%_37.5%_37.5%_33.33%]" data-name="multiply">
              <div className="absolute inset-[-12.85%_-12.85%_-12.86%_-12.86%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6666 14.6667">
                  <g id="multiply">
                    <path d={svgPaths.p65fe380} id="Vector" stroke="var(--stroke-0, #F26D60)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                    <path d={svgPaths.p2d29ca00} id="Vector_2" stroke="var(--stroke-0, #F26D60)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[705px] top-[135px]" data-name="modal/warning">
        <div className="absolute bg-white border border-[#f8f8ff] border-solid h-[170px] left-[705px] rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[135px] w-[230px]" data-name="bg_modal" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[38.3%] not-italic right-[51.06%] text-[#1f1f1f] text-[14px] text-center top-[calc(50%-80px)]">Do you really want to remove Chart Layout “Unnamed”?</p>
        <ButtonSPrimaryDefaultText text="Not Now" additionalClassNames="left-[828px]" />
        <ButtonSecondarySDefaultText text="Remove" additionalClassNames="left-[720px]" />
        <div className="absolute contents left-[800px] top-[151px]" data-name="cross">
          <Wrapper additionalClassNames="left-[800px]">
            <circle cx="20" cy="20" fill="var(--fill-0, #F88922)" id="Ellipse 9" opacity="0.2" r="20" />
          </Wrapper>
          <div className="-translate-x-1/2 absolute left-[calc(50%-120px)] overflow-clip size-[28px] top-[157px]" data-name="icons/remove_small">
            <div className="absolute inset-[16.67%_20.83%]" data-name="bin">
              <div className="absolute inset-[-4.29%_-4.89%_-4.28%_-4.9%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9333 20.2667">
                  <g id="bin">
                    <path d="M0.8 4.53334H2.61481H17.1333" id="Vector" stroke="var(--stroke-0, #F88922)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                    <path d={svgPaths.p27a61a00} id="Vector_2" stroke="var(--stroke-0, #F88922)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                    <path d="M7.15187 9.20002V14.8" id="Vector_3" stroke="var(--stroke-0, #F88922)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                    <path d="M10.7816 9.20002V14.8" id="Vector_4" stroke="var(--stroke-0, #F88922)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}