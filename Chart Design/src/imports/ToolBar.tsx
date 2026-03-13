import clsx from "clsx";
import svgPaths from "./svg-mftxr52rhv";

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-0 top-0">
      <div className="content-stretch flex flex-col items-start relative shrink-0">{children}</div>
      <div className="bg-[#efeff4] h-px rounded-[6px] shrink-0 w-[32px]" data-name="divider" />
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <ButtonToolDefault className="relative shrink-0 size-[48px]" />
        <ButtonToolDefault className="relative shrink-0 size-[48px]" />
      </div>
      <div className="bg-[#efeff4] h-px rounded-[6px] shrink-0 w-[32px]" data-name="divider" />
      <ButtonToolDefault className="relative shrink-0 size-[48px]" />
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={additionalClassNames}>
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">{children}</p>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper3 additionalClassNames={clsx("absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] py-[8px] rounded-[3px]", additionalClassNames)}>{children}</Wrapper3>;
}

function Icon3({ children }: React.PropsWithChildren<{}>) {
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

function Icon2({ children }: React.PropsWithChildren<{}>) {
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

function Line({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[16.67%_12.5%_12.5%_16.67%]">
      <div className="absolute inset-[-2.94%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="line">{children}</g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[41.67%]">
      <div className="absolute inset-[-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <g id="icon">{children}</g>
        </svg>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
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
type RemoveMenuToolsListItem40LTextProps = {
  text: string;
  additionalClassNames?: string;
};

function RemoveMenuToolsListItem40LText({ text, additionalClassNames = "" }: RemoveMenuToolsListItem40LTextProps) {
  return (
    <div className={clsx("absolute h-[40px] left-[1013px] w-[228px]", additionalClassNames)}>
      <div className="absolute bg-white h-[40px] left-0 right-0 top-0" data-name="bg" />
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[20px] not-italic text-[#1f1f1f] text-[14px] top-[11px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 14">
        <path d={svgPaths.p21c8ad00} fill="var(--fill-0, #1F1F1F)" id="tiptool" />
      </svg>
    </div>
  );
}
type TooltipTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TooltipText({ text, additionalClassNames = "" }: TooltipTextProps) {
  return <Wrapper3 additionalClassNames={clsx("absolute bg-[#1f1f1f] content-stretch flex items-center px-[15px] rounded-[3px]", additionalClassNames)}>{text}</Wrapper3>;
}

function Icon() {
  return (
    <Wrapper>
      <path d="M0.5 2.5L20.5 2.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
      <path d={svgPaths.p1e2ea900} fill="var(--fill-0, #F8F8FF)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
    </Wrapper>
  );
}
type IconsRulerHelper1Props = {
  additionalClassNames?: string;
};

function IconsRulerHelper1({ additionalClassNames = "" }: IconsRulerHelper1Props) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="-rotate-45 flex-none h-[3.494px] w-[0.873px]">
        <div className="bg-[#1f1f1f] rounded-[1px] size-full" />
      </div>
    </div>
  );
}
type IconsRulerHelperProps = {
  additionalClassNames?: string;
};

function IconsRulerHelper({ additionalClassNames = "" }: IconsRulerHelperProps) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="-rotate-45 flex-none h-[2.62px] w-[0.873px]">
        <div className="bg-[#1f1f1f] rounded-[1px] size-full" />
      </div>
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
        <Line>
          <path d={svgPaths.p10769600} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p6353880} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p263d7500} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
        </Line>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <Wrapper1>
      <path d={svgPaths.p312e4100} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
    </Wrapper1>
  );
}

function IconsHorizontalLine({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/horizontal_line">
      <Wrapper>
        <path d="M0.5 2.5L20.5 2.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p1e2ea900} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
      </Wrapper>
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

function IconsCursorTool({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-name="icons/cursor_tool">
      <Icon1 />
    </div>
  );
}

export default function ToolBar() {
  return (
    <div className="bg-[#efeff4] relative size-full" data-name="Tool_bar">
      <div className="absolute h-[836px] left-[36px] top-[118px] w-[48px]" data-name="tools_bar/default">
        <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
        <Wrapper4>
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/cursor">
            <div className="absolute bg-[#dcf5f7] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/cursor_tool">
              <Wrapper1>
                <path d={svgPaths.p312e4100} fill="var(--fill-0, #DCF5F7)" id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
              </Wrapper1>
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
        </Wrapper4>
      </div>
      <div className="absolute h-[836px] left-[108px] top-[118px] w-[48px]" data-name="tools_bar/trend_line">
        <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
        <Wrapper4>
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/cursor">
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/cursor_tool">
              <Icon1 />
            </div>
          </div>
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="tool_bg" />
            <div className="absolute bg-[#dcf5f7] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/trend_line">
              <Line>
                <path d={svgPaths.p10769600} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p6353880} fill="var(--fill-0, #DCF5F7)" id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p263d7500} fill="var(--fill-0, #DCF5F7)" id="Vector_3" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
              </Line>
            </div>
          </div>
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0" data-name="tool_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/horizontal_line">
              <Icon />
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
        </Wrapper4>
      </div>
      <div className="absolute h-[836px] left-[323px] top-[118px] w-[48px]" data-name="tools_bar/default">
        <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
        <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-0 top-0">
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/cursor">
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/cursor_tool">
                <Wrapper1>
                  <path d={svgPaths.p312e4100} fill="var(--fill-0, #F8F8FF)" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                </Wrapper1>
              </div>
            </div>
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/trend_line">
                <Line>
                  <path d={svgPaths.p10769600} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p6353880} fill="var(--fill-0, #F8F8FF)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p263d7500} fill="var(--fill-0, #F8F8FF)" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                </Line>
              </div>
            </div>
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/horizontal_line">
                <Icon />
              </div>
            </div>
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/fib_retracement">
                <div className="absolute inset-[20.83%_12.54%_21.24%_12.5%]" data-name="icon">
                  <div className="absolute inset-[-3.6%_-2.78%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9898 14.9032">
                      <g id="icon">
                        <path d="M0.5 8.88704L18.4362 8.88704" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0.5 4.69358L18.4362 4.69358" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0.5 0.5L18.4362 0.5" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0.5 13.0806L18.4362 13.0806" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p830500} fill="var(--fill-0, #F8F8FF)" id="Vector_5" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p2852f280} fill="var(--fill-0, #F8F8FF)" id="Vector_6" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/fib_extension">
                <div className="absolute inset-[16.67%_12.5%_12.5%_16.67%]" data-name="icon">
                  <div className="absolute inset-[-2.94%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0001 18">
                      <g id="icon">
                        <path d="M0.5 13.4523L17.5 13.4523" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p3ed16360} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p9817e60} id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0.5 17.5L17.5 17.5" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p37eada00} fill="var(--fill-0, #F8F8FF)" id="Vector_5" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p184b5df0} fill="var(--fill-0, #F8F8FF)" id="Vector_6" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p9bdec80} fill="var(--fill-0, #F8F8FF)" id="Vector_7" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.04541 6.16662V7.78567" id="Vector 4" stroke="var(--stroke-0, #1F1F1F)" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/short_position">
                <Icon3>
                  <path d="M2.125 7.00004L18.375 15.125" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0.5 7.00004L18.375 7.00004" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0.5 2.12504L18.375 2.12504" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0.5 15.125L18.375 15.125" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.peae880} fill="var(--fill-0, #F8F8FF)" id="Vector_5" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p3371f000} fill="var(--fill-0, #F8F8FF)" id="Vector_6" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p15376380} fill="var(--fill-0, #F8F8FF)" id="Vector_7" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p1230e400} fill="var(--fill-0, #F8F8FF)" id="Vector_8" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                </Icon3>
              </div>
            </div>
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/long_position">
                <Icon3>
                  <path d={svgPaths.p310d7500} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0.5 10.25L18.375 10.25" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0.5 2.12504L18.375 2.12504" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0.5 15.125L18.375 15.125" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.peae880} fill="var(--fill-0, #F8F8FF)" id="Vector_5" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p18bdc560} fill="var(--fill-0, #F8F8FF)" id="Vector_6" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p15376380} fill="var(--fill-0, #F8F8FF)" id="Vector_7" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p201c4080} fill="var(--fill-0, #F8F8FF)" id="Vector_8" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                </Icon3>
              </div>
            </div>
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/projection">
                <Icon2>
                  <path d={svgPaths.p23cbed00} id="arc" stroke="var(--stroke-0, #1F1F1F)" />
                  <path d={svgPaths.peae880} fill="var(--fill-0, #F8F8FF)" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p3af6a400} fill="var(--fill-0, #F8F8FF)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p3bbd1e00} fill="var(--fill-0, #F8F8FF)" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                </Icon2>
              </div>
            </div>
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/date_&_price_range">
                <div className="absolute inset-[12.5%_8.33%_8.33%_12.5%]" data-name="icon">
                  <div className="absolute inset-[-2.63%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="icon">
                        <rect fill="var(--fill-0, #F8F8FF)" height="17" id="Rectangle 33" rx="0.5" stroke="var(--stroke-0, #1F1F1F)" width="17" x="1.5" y="1.5" />
                        <g id="arrows">
                          <g id="Vector">
                            <path d={svgPaths.p19bebd80} fill="#F8F8FF" />
                            <path d={svgPaths.pb09f380} stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                          <g id="Vector_2">
                            <path d="M8.5 5.125L10 3.5L11.5 5.125" fill="#F8F8FF" />
                            <path d={svgPaths.pd25d700} stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </g>
                        <path d={svgPaths.p1b49b1f0} fill="var(--fill-0, #F8F8FF)" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                        <path d={svgPaths.p3302e140} fill="var(--fill-0, #F8F8FF)" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/channel">
                <div className="absolute contents inset-[4.66%_7.31%_6.82%_4.17%]" data-name="icon">
                  <div className="absolute flex inset-[31.18%_16.15%_17.45%_32.49%] items-center justify-center">
                    <div className="-rotate-45 flex-none h-[2.997px] w-[14.437px]">
                      <div className="relative size-full">
                        <div className="absolute inset-[-16.69%_-3.46%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4375 3.99654">
                            <g id="Group 34">
                              <path d="M0.5 1.82142L14.9375 1.82142" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d={svgPaths.p23ab5e00} fill="var(--fill-0, #F8F8FF)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
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
                              <path d="M2.30471 2.33125H20.1702" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d={svgPaths.p1a23180} fill="var(--fill-0, #F8F8FF)" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                              <path d={svgPaths.p233f1f80} fill="var(--fill-0, #F8F8FF)" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/type">
                <div className="absolute inset-[20.83%]" data-name="icon">
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
              </div>
            </div>
          </div>
          <div className="bg-[#efeff4] h-px rounded-[6px] shrink-0 w-[32px]" data-name="divider" />
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4" data-name="icons/ruler">
                <div className="absolute contents inset-[8.34%_4.16%_4.16%_8.34%]" data-name="ruler">
                  <div className="absolute flex inset-[8.34%_4.16%_4.16%_8.34%] items-center justify-center">
                    <div className="-rotate-45 flex-none h-[6.988px] w-[22.711px]">
                      <div className="relative rounded-[0.3px] size-full">
                        <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-[-0.5px] pointer-events-none rounded-[0.8px]" />
                      </div>
                    </div>
                  </div>
                  <IconsRulerHelper additionalClassNames="inset-[64.95%_73.65%_24.75%_16.06%]" />
                  <IconsRulerHelper1 additionalClassNames="inset-[57.23%_63.36%_29.9%_23.77%]" />
                  <IconsRulerHelper1 additionalClassNames="inset-[41.79%_47.92%_45.34%_39.22%]" />
                  <IconsRulerHelper1 additionalClassNames="inset-[26.35%_32.48%_60.78%_54.66%]" />
                  <IconsRulerHelper additionalClassNames="inset-[49.51%_58.21%_40.2%_31.5%]" />
                  <IconsRulerHelper additionalClassNames="inset-[34.07%_42.77%_55.64%_46.94%]" />
                  <IconsRulerHelper additionalClassNames="inset-[18.63%_27.33%_71.08%_62.38%]" />
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
              <div className="absolute bg-white inset-0" data-name="tool_bg" />
              <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
              <div className="absolute inset-1/4 overflow-clip" data-name="icons/zoom_in">
                <Icon2>
                  <path d={svgPaths.p1ac4f00} id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5 18.5L11.8684 11.8684" id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="Group 40">
                    <path d="M7.13171 4.28943V9.97364" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.28955 7.13159H9.97376" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </Icon2>
              </div>
            </div>
          </div>
          <div className="bg-[#efeff4] h-px rounded-[6px] shrink-0 w-[32px]" data-name="divider" />
          <div className="relative shrink-0 size-[48px]" data-name="button/tool/default">
            <div className="absolute bg-white inset-0" data-name="tool_bg" />
            <div className="absolute bg-[#f8f8ff] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
            <div className="absolute inset-1/4 overflow-clip" data-name="icons/remove_large">
              <div className="absolute inset-[12.5%_16.67%]" data-name="bin">
                <div className="absolute inset-[-2.78%_-3.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
                    <g id="bin">
                      <path d="M0.5 4.09998H2.27778H16.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p1e289c80} id="Vector_2" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.7222 8.6001V14.0001" id="Vector_3" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.2778 8.6001V14.0001" id="Vector_4" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[377px] top-[318px]" data-name="tooltip">
        <TooltipText text="Fibonacci Extension" additionalClassNames="left-[384px] py-[8px] top-[318px]" />
        <Helper additionalClassNames="inset-[29.67%_79.08%_69.06%_20.53%]" />
      </div>
      <div className="absolute contents left-[377px] top-[222px]" data-name="tooltip">
        <TooltipText text="Horizontal Line" additionalClassNames="left-[384px] py-[8px] top-[222px]" />
        <Helper additionalClassNames="inset-[20.96%_79.08%_77.77%_20.53%]" />
      </div>
      <div className="absolute contents left-[377px] top-[270px]" data-name="tooltip">
        <TooltipText text="Fibonacci Retracement" additionalClassNames="left-[384px] py-[8px] top-[270px]" />
        <Helper additionalClassNames="inset-[25.32%_79.08%_73.41%_20.53%]" />
      </div>
      <div className="absolute contents left-[377px] top-[366px]" data-name="tooltip">
        <TooltipText text="Short Position" additionalClassNames="left-[384px] py-[8px] top-[366px]" />
        <Helper additionalClassNames="inset-[34.03%_79.08%_64.7%_20.53%]" />
      </div>
      <div className="absolute contents left-[377px] top-[413px]" data-name="tooltip">
        <TooltipText text="Long Position" additionalClassNames="left-[384px] py-[8px] top-[413px]" />
        <Helper additionalClassNames="inset-[38.29%_79.08%_60.44%_20.53%]" />
      </div>
      <div className="absolute contents left-[377px] top-[462px]" data-name="tooltip">
        <TooltipText text="Projection" additionalClassNames="left-[384px] py-[8px] top-[462px]" />
        <Helper additionalClassNames="inset-[42.74%_79.08%_55.99%_20.53%]" />
      </div>
      <div className="absolute contents left-[377px] top-[509px]" data-name="tooltip">
        <Wrapper2 additionalClassNames="left-[384px] top-[509px]">{`Date & Price Range`}</Wrapper2>
        <Helper additionalClassNames="inset-[47.01%_79.08%_51.72%_20.53%]" />
      </div>
      <div className="absolute contents left-[377px] top-[558px]" data-name="tooltip">
        <TooltipText text="Channel" additionalClassNames="left-[384px] py-[8px] top-[558px]" />
        <Helper additionalClassNames="inset-[51.45%_79.08%_47.28%_20.53%]" />
      </div>
      <div className="absolute contents left-[377px] top-[671px]" data-name="tooltip">
        <TooltipText text="Measure" additionalClassNames="left-[384px] py-[8px] top-[671px]" />
        <Helper additionalClassNames="inset-[61.71%_79.08%_37.02%_20.53%]" />
      </div>
      <div className="absolute contents left-[377px] top-[606px]" data-name="tooltip">
        <TooltipText text="Text" additionalClassNames="left-[384px] py-[8px] top-[606px]" />
        <Helper additionalClassNames="inset-[55.81%_79.08%_42.92%_20.53%]" />
      </div>
      <div className="absolute contents left-[377px] top-[717px]" data-name="tooltip">
        <TooltipText text="Zoom In" additionalClassNames="left-[384px] py-[10px] top-[717px]" />
        <Helper additionalClassNames="inset-[66.06%_79.08%_32.67%_20.53%]" />
      </div>
      <div className="absolute contents left-[471px] top-[719px]" data-name="tooltip">
        <TooltipText text="Zoom Out" additionalClassNames="left-[478px] py-[8px] top-[719px]" />
        <Helper additionalClassNames="inset-[66.06%_73.97%_32.67%_25.65%]" />
      </div>
      <div className="absolute contents left-[377px] top-[784px]" data-name="tooltip">
        <TooltipText text="Remove drawings" additionalClassNames="left-[384px] py-[8px] top-[784px]" />
        <Helper additionalClassNames="inset-[71.96%_79.08%_26.77%_20.53%]" />
      </div>
      <div className="absolute contents left-[519px] top-[784px]" data-name="tooltip">
        <TooltipText text="Remove indicators" additionalClassNames="left-[526px] py-[8px] top-[784px]" />
        <Helper additionalClassNames="inset-[71.96%_71.35%_26.77%_28.27%]" />
      </div>
      <div className="absolute contents left-[665px] top-[784px]" data-name="tooltip">
        <Wrapper2 additionalClassNames="left-[672px] top-[784px]">{`Remove drawings & Indicators`}</Wrapper2>
        <Helper additionalClassNames="inset-[71.96%_63.4%_26.77%_36.22%]" />
      </div>
      <div className="absolute contents left-[377px] top-[174px]" data-name="tooltip">
        <TooltipText text="Trend Line" additionalClassNames="left-[384px] py-[8px] top-[174px]" />
        <Helper additionalClassNames="inset-[16.61%_79.08%_82.12%_20.53%]" />
      </div>
      <div className="absolute contents left-[377px] top-[126px]" data-name="tooltip">
        <TooltipText text="Cursor" additionalClassNames="left-[384px] py-[8px] top-[126px]" />
        <Helper additionalClassNames="inset-[12.25%_79.08%_86.48%_20.53%]" />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[323px] not-italic text-[40px] text-black top-[42px] whitespace-nowrap">Elements On Hover</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[958px] not-italic text-[40px] text-black top-[42px] whitespace-nowrap">Remove Menu</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[1445px] not-italic text-[40px] text-black top-[42px] whitespace-nowrap">Zoom In/Out</p>
      <p className="absolute font-['Source_Sans_Pro:Bold',sans-serif] leading-[1.5] left-[36px] not-italic text-[40px] text-black top-[39px] whitespace-nowrap">Default</p>
      <div className="absolute h-[836px] left-[958px] top-[118px] w-[48px]" data-name="tools_bar/remove_menu">
        <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
        <div className="absolute inset-[0_0_94.26%_0]" data-name="button/tool/cursor">
          <IconsCursorTool className="absolute inset-1/4 overflow-clip" />
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
        <ButtonToolDefault className="absolute inset-[70.93%_0_23.33%_0]" />
        <ButtonToolDefault className="absolute inset-[78.71%_0_15.55%_0]" />
        <ButtonToolDefault1 additionalClassNames="absolute inset-[5.74%_0_88.52%_0]" />
        <div className="absolute bg-[#efeff4] inset-[64.11%_16.67%_35.77%_16.67%] rounded-[6px]" data-name="divider" />
        <div className="absolute bg-[#efeff4] inset-[77.63%_16.67%_22.25%_16.67%] rounded-[6px]" data-name="divider" />
        <div className="absolute h-[38px] left-[39px] top-[663px] w-[9px]" data-name="remove_menu">
          <div className="absolute contents left-[-7px] top-0" data-name="remove_menu">
            <div className="absolute bg-[#f8f8ff] inset-0 rounded-[2px]" data-name="selected_bg" />
            <div className="absolute left-[-7px] overflow-clip size-[24px] top-[7px]" data-name="icons/small_chevron/right">
              <div className="absolute flex inset-[39.58%_43.75%_35.42%_43.75%] items-center justify-center">
                <div className="-rotate-90 flex-none h-[3px] w-[6px]">
                  <div className="relative size-full" data-name="Vector">
                    <div className="absolute inset-[-16.67%_-8.33%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 4">
                        <path d="M0.5 0.5L3.5 3.5L6.5 0.5" id="Vector" stroke="var(--stroke-0, #1F1F1F)" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[1012px] top-[781px]" data-name="remove_menu_tools">
        <div className="absolute bg-white border border-[#efeff4] border-solid h-[136px] left-[1012px] right-[594px] rounded-[4px] shadow-[1px_8px_40px_0px_rgba(67,67,67,0.12)] top-[781px]" data-name="bg" />
        <RemoveMenuToolsListItem40LText text="Remove drawings" additionalClassNames="top-[789px]" />
        <RemoveMenuToolsListItem40LText text="Remove indicators" additionalClassNames="top-[829px]" />
        <div className="absolute h-[40px] left-[1013px] top-[869px] w-[228px]" data-name="list_item_40/L">
          <div className="absolute bg-[#dcf5f7] h-[40px] left-0 right-0 top-0" data-name="bg" />
          <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] left-[20px] not-italic text-[#00b1c7] text-[14px] top-[11px] whitespace-nowrap">{`Remove drawings & indicators`}</p>
        </div>
      </div>
      <div className="absolute h-[836px] left-[1445px] top-[118px] w-[48px]" data-name="tools_bar/zoom">
        <div className="absolute bg-white inset-0 rounded-tr-[6px]" data-name="bg_tools" />
        <div className="absolute inset-[0_0_94.26%_0]" data-name="button/tool/cursor">
          <IconsCursorTool className="absolute inset-1/4 overflow-clip" />
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
        <div className="absolute inset-[70.93%_0_23.33%_0]" data-name="button/tool/default">
          <div className="absolute bg-white inset-0" data-name="tool_bg" />
          <div className="absolute bg-[#dcf5f7] inset-[10.42%] rounded-[4px]" data-name="selected_bg" />
          <div className="absolute inset-1/4 overflow-clip" data-name="icons/zoom_in">
            <Icon2>
              <path d={svgPaths.p1ac4f00} id="Vector" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.5 18.5L11.8684 11.8684" id="Vector_2" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
              <g id="Group 40">
                <path d="M7.13171 4.28943V9.97364" id="Vector_3" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.28955 7.13159H9.97376" id="Vector_4" stroke="var(--stroke-0, #00B1C7)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </Icon2>
          </div>
        </div>
        <ButtonToolDefault className="absolute inset-[76.67%_0_17.58%_0]" />
        <ButtonToolDefault className="absolute inset-[84.45%_0_9.81%_0]" />
        <ButtonToolDefault1 additionalClassNames="absolute inset-[5.74%_0_88.52%_0]" />
        <div className="absolute bg-[#efeff4] inset-[64.11%_16.67%_35.77%_16.67%] rounded-[6px]" data-name="divider" />
        <div className="absolute bg-[#efeff4] inset-[83.37%_16.67%_16.51%_16.67%] rounded-[6px]" data-name="divider" />
      </div>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[1525px] not-italic text-[16px] text-black top-[715px] w-[216px] whitespace-pre-wrap">{`When  something is zoomed in, Zoom out appears under Zoom In `}</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[165px] not-italic text-[16px] text-black top-[176px] whitespace-nowrap">Active</p>
      <p className="absolute font-['Source_Sans_Pro:Regular',sans-serif] leading-[1.5] left-[325px] not-italic text-[16px] text-black top-[90px] whitespace-nowrap">Hover</p>
    </div>
  );
}