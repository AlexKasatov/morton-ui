import type { Config } from "tailwindcss";
import sharedConfig from "@morton-ui/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx", "./src/**/*.ts"],
  prefix: "ui-",
  presets: [sharedConfig],
};

export default config;
