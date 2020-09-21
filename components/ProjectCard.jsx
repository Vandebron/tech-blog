import React from "react";
import { BoxShadow, Icon, H5 } from "@vandebron/windmolen";

export default function ProjectCard({ title, icon }) {
  return (
    <BoxShadow
      style={{
        width: "100%",
        padding: 15,
        display: "flex",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          paddingRight: 10,
          borderRight: "1px solid #000",
          marginRight: 20,
        }}
      >
        <Icon name={icon} />
      </div>
      <H5 style={{ margin: 0 }}>{title}</H5>
    </BoxShadow>
  );
}
