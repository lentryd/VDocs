/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.svg" {
  import { DefineComponent } from "vue";
  const content: DefineComponent;
  export default content;
}

declare module globalThis {
  const dataLayer: any[] = [];
}
