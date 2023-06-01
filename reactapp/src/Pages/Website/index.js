import React from "react";
import { AppShell } from "@mantine/core";
import WebsiteHeader from "../../Components/WebsiteHeader";
import HomePage from "./HomePage";

export default function Website() {
  return (
    <AppShell
      padding="md"
      header={<WebsiteHeader />}
      style={{ background: "#00274C" }}
    >
      <HomePage />
    </AppShell>
  );
}
