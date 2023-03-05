import { addDecorator } from "@storybook/react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const GlabalStyle = createGlobalStyle`
html,
body,
textarea{
  padding: 0,
  margin: 0,
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif:
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  transsition: .25s;
  color: #000000;
}
`;

//Themeの適用
addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlabalStyle />
    {story()}
  </ThemeProvider>
));

//next/imageの差し替え(Next.js製はstorybookでは動作しないため)
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) =>
    typeof props.src === "string" ? (
      <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
});

Object.defineProperty(NextImage, "__esModule", {
  configurable: true,
  value: true,
});
