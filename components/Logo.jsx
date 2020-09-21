import { Logo as LogoComponent, H3 } from "@vandebron/windmolen";

export default function Logo({ inverted = false }) {
  return (
    <div style={{ cursor: "pointer", ["user-select"]: "none" }}>
      <LogoComponent inverted={inverted} />
      &nbsp;
      <H3 as="span" color="green" style={{ fontSize: 28 }}>
        .tech
      </H3>
    </div>
  );
}
