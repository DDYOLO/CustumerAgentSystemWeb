import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#1677ff",
    borderRadius: 6,
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  components: {
    Layout: {
      bodyBg: "#f5f7fb",
      siderBg: "#101828",
      triggerBg: "#101828",
    },
    Card: {
      borderRadiusLG: 8,
    },
  },
};
