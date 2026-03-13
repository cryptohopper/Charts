import svgPaths from "./svg-xdjvojnw8v";

function ButtonPrimaryMDefault({ className }: { className?: string }) {
  return (
    <div className={className || "h-[40px] relative w-[80px]"} data-name="button/primary/M/default">
      <div className="absolute bg-[#00b1c7] h-[40px] left-0 right-0 rounded-[3px] top-0" data-name="bg" />
      <p className="-translate-x-1/2 absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[calc(50%-0.5px)] not-italic text-[14px] text-center text-white top-[calc(50%-9px)] whitespace-nowrap">Copy</p>
    </div>
  );
}

export default function ModalSaveImageDefault() {
  return (
    <div className="relative size-full" data-name="modal/save_image/default">
      <div className="absolute bg-white border border-[#f8f8ff] border-solid h-[342px] left-0 rounded-[6px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-0 w-[406px]" data-name="bg_modal" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] left-[15px] not-italic text-[#1f1f1f] text-[0px] text-[14px] top-[57px] w-[376px]">
        <span className="leading-[20px]">{`Paste this code as high in the `}</span>
        <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[20px]">{`<head>`}</span>
        <span className="leading-[20px]">{` of the page as possible`}</span>
        <span className="leading-[20px]">:</span>
      </p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[0] left-[15px] not-italic text-[#1f1f1f] text-[0px] text-[14px] top-[152px] w-[376px]">
        <span className="leading-[20px]">{`Additionally paste this code in `}</span>
        <span className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[20px]">{`<body>`}</span>
        <span className="leading-[20px]">{` `}</span>
        <span className="leading-[20px]">tag:</span>
      </p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[247px] w-[376px]">Or you can paste widget as iframe:</p>
      <div className="absolute contents left-[15px] top-[88px]" data-name="input">
        <div className="absolute bg-white border border-[#efeff4] border-solid h-[40px] left-[15px] rounded-[4px] top-[88px] w-[281px]" data-name="input" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[6.65%] not-italic right-[28.33%] text-[#8e8e93] text-[14px] top-[calc(50%-73px)] whitespace-nowrap">{`http://www.cryptohopper.com/dsfdfsffsg//gc`}</p>
      </div>
      <div className="absolute contents left-[15px] top-[183px]" data-name="input">
        <div className="absolute bg-white border border-[#efeff4] border-solid h-[40px] left-[15px] rounded-[4px] top-[183px] w-[281px]" data-name="input" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[6.65%] not-italic right-[28.33%] text-[#8e8e93] text-[14px] top-[calc(50%+22px)] whitespace-nowrap">{`http://www.cryptohopper.com/dsfdfsffsg//gc`}</p>
      </div>
      <div className="absolute contents left-[15px] top-[278px]" data-name="input">
        <div className="absolute bg-white border border-[#efeff4] border-solid h-[40px] left-[15px] rounded-[4px] top-[278px] w-[281px]" data-name="input" />
        <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[20px] left-[6.65%] not-italic right-[28.33%] text-[#8e8e93] text-[14px] top-[calc(50%+117px)] whitespace-nowrap">{`http://www.cryptohopper.com/dsfdfsffsg//gc`}</p>
      </div>
      <ButtonPrimaryMDefault className="absolute h-[40px] left-[311px] top-[88px] w-[80px]" />
      <ButtonPrimaryMDefault className="absolute h-[40px] left-[311px] top-[183px] w-[80px]" />
      <ButtonPrimaryMDefault className="absolute h-[40px] left-[311px] top-[278px] w-[80px]" />
      <div className="absolute h-[41px] left-0 top-0 w-[406px]" data-name="modal_header/L">
        <div className="absolute bg-[#f8f8ff] h-[40px] left-0 right-0 rounded-tl-[6px] rounded-tr-[6px] top-0" data-name="bg" />
        <p className="absolute font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] left-[15px] not-italic text-[#1f1f1f] text-[14px] top-[11px] w-[289px]">Share</p>
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
    </div>
  );
}