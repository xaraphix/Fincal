import { themeModes } from "@/constants/theme";
import { reactive } from "vue";

export const themeStore = reactive({
  theme: themeModes.DARK,
  setTheme(theme: themeModes) {
    this.theme = theme;
    localStorage.setItem("color-theme", this.theme);

    document?.querySelector("html")?.classList.remove(themeModes.DARK);
    document?.querySelector("html")?.classList.remove(themeModes.LIGHT);
    document?.querySelector("html")?.classList.add(this.theme);
  },
  toggleTheme() {
    this.theme =
      this.theme === themeModes.DARK ? themeModes.LIGHT : themeModes.DARK;
    localStorage.setItem("color-theme", this.theme);
    document?.querySelector("html")?.classList.remove(themeModes.DARK);
    document?.querySelector("html")?.classList.remove(themeModes.LIGHT);
    document?.querySelector("html")?.classList.add(this.theme);
  },
});
