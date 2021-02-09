import { Logo as LogoComponent, H3 } from "@vandebron/windmolen";

export default function Logo({ inverted = false }) {
  return (
    <div
      style={{
        cursor: "pointer",
        ["user-select"]: "none",
        display: "flex",
        alignItems: "baseline",
      }}
    >
      <LogoComponent inverted={inverted} />
      &nbsp;
      <H3
        as="span"
        color="green"
        style={{ fontSize: 28, margin: 0, lineHeight: "auto" }}
      >
        .tech
      </H3>
    </div>
  );
}
