import MyFooter from "@/components/MyFooter.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyMenu from "@/components/MyMenu.vue";
import Process from "@/components/Process.vue";
import Service from "@/components/Service.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Facts from "@/components/Facts.vue";

export const globalRegisTrationComponents = (app) => {
  app
    .component("Facts", Facts)
    .component("Hero", Hero)
    .component("About", About)
    .component("Service", Service)
    .component("Process", Process)
    .component("MyMenu", MyMenu)
    .component("MyHeader", MyHeader)
    .component("MyFooter", MyFooter);
};
