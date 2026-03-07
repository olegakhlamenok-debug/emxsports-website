import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

import Hero from "@/components/Hero";
import Events from "@/components/Events";
import Fighters from "@/components/Fighters";
import Results from "@/components/Results";
import About from "@/components/About";
import News from "@/components/News";
import Shop from "@/components/Shop";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "6StVWV2Dq3fHDBDEiMXtq2",
      token:
        "ze8C90C7BwTukYbmgcAXd16CwrwqykeRYNtFXrUF8ZArtElaIjQsF9wOc7eeHWhp3C9rOmYnu9ecgZI2eQ",
    },
  ],
  preview: process.env.NODE_ENV === "development",
});

// Register existing code components for use in Plasmic Studio

PLASMIC.registerComponent(Hero, {
  name: "Hero",
  description: "Main hero section with logo and featured event",
  props: {},
});

PLASMIC.registerComponent(Events, {
  name: "Events",
  description: "Upcoming events grid",
  props: {},
});

PLASMIC.registerComponent(Fighters, {
  name: "Fighters",
  description: "Fighter roster cards",
  props: {},
});

PLASMIC.registerComponent(Results, {
  name: "Results",
  description: "Latest fight results",
  props: {},
});

PLASMIC.registerComponent(About, {
  name: "About",
  description: "About EMX Sports with stats",
  props: {},
});

PLASMIC.registerComponent(News, {
  name: "News",
  description: "Latest media/news articles",
  props: {},
});

PLASMIC.registerComponent(Shop, {
  name: "Shop",
  description: "Merchandise shop section",
  props: {},
});

PLASMIC.registerComponent(Navbar, {
  name: "Navbar",
  description: "Navigation bar",
  props: {},
});

PLASMIC.registerComponent(Footer, {
  name: "Footer",
  description: "Site footer",
  props: {},
});
