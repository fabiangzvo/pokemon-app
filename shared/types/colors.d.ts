// tailwind-colors.d.ts

type Tonalities = {
  [key in
    | 50
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 950]?: string;
};

type Colors = {
  transparent: string;
  current: string;
  slate: Tonalities;
  gray: Tonalities;
  zinc: Tonalities;
  neutral: Tonalities;
  stone: Tonalities;
  red: Tonalities;
  orange: Tonalities;
  amber: Tonalities;
  yellow: Tonalities;
  lime: Tonalities;
  green: Tonalities;
  emerald: Tonalities;
  teal: Tonalities;
  cyan: Tonalities;
  sky: Tonalities;
  blue: Tonalities;
  indigo: Tonalities;
  violet: Tonalities;
  purple: Tonalities;
  fuchsia: Tonalities;
  pink: Tonalities;
  rose: Tonalities;
};

declare module "tailwind-colors" {
  const colors: Colors;
  export default colors;
}
