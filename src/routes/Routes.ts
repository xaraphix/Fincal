import CalculatorsVue from "@/components/Calculators.vue";
import Lumpsum from "@/components/Lumpsum.vue";
import MFReturns from "@/components/MFReturns.vue";
import SIP from "@/components/SIP.vue";
import SWP from "@/components/SWP.vue";

export const routes = [
  {
    path: "/",
    component: CalculatorsVue,
  },
  {
    path: "/calculators",
    component: CalculatorsVue,
    children: [
      { path: "sip", component: SIP },
      { path: "swp", component: SWP },
      { path: "lumpsum", component: Lumpsum },
      { path: "mf-returns", component: MFReturns },
    ],
  },
];
