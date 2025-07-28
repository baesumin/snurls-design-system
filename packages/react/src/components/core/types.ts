import { vars } from "@snurls/themes";
import { StyleSprinkles } from "./styles.css";

type AsProps = {
  as?: Exclude<keyof React.JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color?: keyof typeof vars.colors.$scale;
  background?: keyof typeof vars.colors.$scale;
};

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
