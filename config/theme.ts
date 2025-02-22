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
            },
            secondary: {
              background: "{primary.100}",
              hoverBackground: "{primary.200}",
              activeBackground: "{primary.400}",
              color: "{primary.600}",
              hoverColor: "{primary.600}",
              borderColor: "{surface.200}",
              activeBorderColor: "{primary.300}",
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
              background: "{rose.100}",
              hoverBackground: "{primary.200}",
              activeBackground: "{primary.400}",
              color: "{primary.600}",
              hoverColor: "{primary.600}",
              borderColor: "{surface.200}",
              activeBorderColor: "{primary.300}",
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
    tag: {
      colorScheme: {
        light: {
          secondary: {
            color: "{primary.600}",
            background: "{primary.100}",
          },
          warn: {
            color: "{amber.600}",
            background: "{amber.100}",
          },
        },
      },
    },
    datepicker: {
      colorScheme: {
        light: {
          today: {
            background: "{primary.200}",
          },
        },
      },
    },
    progressspinner: {
      colorScheme: {
        light: {
          root: {
            "color.1": "{primary.400}",
            "color.2": "{primary.800}",
            "color.3": "{primary.400}",
            "color.4": "{primary.800}",
          },
        },
      },
    },
    chip: {
      colorScheme: {
        light: {
          root: {
            background: "{rose.700}",
            color: "{surface.100}",
          },
          removeIcon: {
            background: "{rose.700}",
            color: "{surface.100}",
          },
        },
      },
    },
    radiobutton: {
      root: {
        checkedBackground: "{rose.700}",
        checkedBorderColor: "{rose.700}",
        checkedFocusBorderColor: "{rose.700}",
        checkedHoverBackground: "{rose.600}",
        checkedHoverBorderColor: "{rose.600}",
      },
    },
  },
});

export default theme;
