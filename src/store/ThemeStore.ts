import { themeModes } from "@/constants/theme";
import { reactive } from "vue";

export const themeStore = reactive({
  theme: themeModes.DARK,
  setTheme(theme: themeModes) {
    this.theme = theme;
    localStorage.setItem(
      "color-theme",
      this.theme === themeModes.DARK ? "dark" : "light"
    );
  },
  toggleTheme() {
    this.theme =
      this.theme === themeModes.DARK ? themeModes.LIGHT : themeModes.DARK;
    localStorage.setItem(
      "color-theme",
      this.theme === themeModes.DARK ? "dark" : "light"
    );
  },
});
