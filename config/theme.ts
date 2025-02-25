import { definePreset } from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import colors from "tailwind-colors";

const theme = definePreset(Aura, {
  semantic: {
    primary: colors.red,
    colorScheme: {
      light: {
        primary: {
          color: "{primary.950}",
          contrastColor: "#ffff",
          hoverColor: "{primary.700}",
          activeColor: "{primary.300}",
          focusBackground: "{primary.300}",
          disableBackground: "#BFBFBF",
        },
        highlight: {
          background: "{primary.50}",
          focusBackground: "{primary.300}",
          color: "{primary.500}",
          focusColor: "{primary.900}",
        },
      },
      dark: {
        primary: {
          color: "{primary.950}",
          contrastColor: "#ffff",
          hoverColor: "{primary.700}",
          activeColor: "{primary.300}",
          focusBackground: "{primary.300}",
        },
        highlight: {
          background: "{primary.50}",
          focusBackground: "{primary.300}",
          color: "{primary.500}",
          focusColor: "{primary.900}",
        },
      },
    },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          root: {
            primary: {
              focusBackground: "{primary.300}",
              background: "#F22539",
              borderColor: "#C00E20",
            },
            secondary: {
              background: "#F5F5F5",
              borderColor: "#F5F5F5",
              color: "#BFBFBF",
              hoverBackground: "#F5F5F5",
              hoverBorderColor: "#F5F5F5",
              hoverColor: "#BFBFBF",
            },
            help: {
              background: "{rose.700}",
              hoverBackground: "{rose.900}",
              activeBackground: "{rose.600}",
              color: "{surface.100}",
              hoverColor: "{rose.100}",
              borderColor: "{surface.200}",
              activeBorderColor: "{primary.300}",
            },
          },
        },
        dark: {
          root: {
            primary: {
              activeBackground: "{rose.700}",
              activeBorderColor: "{rose.700}",
              activeColor: "{rose.700}",
              background: "{rose.700}",
              borderColor: "{rose.700}",
              color: "{primary.contrast.color}",
              focusBackground: "{rose.300}",
              focusRing: { color: "{rose.700}", shadow: "none" },
              hoverBackground: "{rose.600}",
              hoverBorderColor: "{rose.600}",
              hoverColor: "{surface.100}",
            },
            secondary: {
              background: "#F5F5F5",
              borderColor: "#F5F5F5",
              color: "#BFBFBF",
              hoverBackground: "#F5F5F5",
              hoverBorderColor: "#F5F5F5",
              hoverColor: "#BFBFBF",
            },
            help: {
              background: "{rose.700}",
              hoverBackground: "{rose.900}",
              activeBackground: "{rose.600}",
              color: "{surface.100}",
              hoverColor: "{rose.100}",
              borderColor: "{surface.200}",
              activeBorderColor: "{primary.300}",
            },
          },
        },
      },
    },
  },
});

export default theme;
