import "@snurls/themes/themes.css";
import type { Preview } from "@storybook/react-vite";
import type { Decorator } from "@storybook/react";

// rootAttributes 정보를 별도로 선언
const rootAttributes = [
  {
    root: "body",
    attribute: "class",
    defaultState: {
      name: "light",
      value: "theme-light",
    },
    states: [
      {
        name: "dark",
        value: "theme-dark",
      },
    ],
  },
];

// 데코레이터 구현
const rootAttributeDecorator: Decorator = (Story, context) => {
  // 예: 테마 상태를 parameters 혹은 globals에서 읽어오는 형태로 확장할 수 있음
  const themeState =
    context.globals?.theme || rootAttributes[0].defaultState?.name || "light";
  const attrConfig = rootAttributes[0];

  // root element 찾기
  const rootEl = document.querySelector(attrConfig.root || "body");

  // class 적용
  if (rootEl) {
    // 기본값 제거
    attrConfig.states?.forEach((s) => {
      rootEl.classList.remove(s.value);
    });
    // 현재 상태값 적용
    let className = attrConfig.defaultState.value; // 기본값
    if (themeState === "dark") {
      className =
        attrConfig.states?.find((s) => s.name === "dark")?.value || className;
    }
    rootEl.classList.add(className);
  }

  return Story();
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    a11y: { test: "todo" },
  },
  decorators: [rootAttributeDecorator],
};

export default preview;
