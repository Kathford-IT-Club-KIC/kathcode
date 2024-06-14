import { defineConfig, passthroughImageService } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [
    starlight({
      title: "KathCode",
      social: {
        github: "https://github.com/Kathford-IT-Club-KIC",
      },
      sidebar: [
        {
          label: "Introduction",
          link: "/introduction",
          items: [],
        },
        {
          label: "Event Timeline",
          items: [{ label: "Timeline", link: "/event-timeline/timeline/" }],
        },
        {
          label: "Rulebook",
          items: [
            { label: "Kathcode Rulebook", link: "/rules/rules/" },
            { label: "Initial Selection Criteria", link: "/rules/selection/" },
            { label: "Evaulation Criteria", link: "/rules/evaulate/" },
          ],
        },
        {
          label: "Registration",
          items: [
            { label: "How to register?", link: "/registration/register/" },
          ],
        },
        {
          label: "Sponsor",
          items: [{ label: "Sponsorship", link: "/sponsorship/sponsor/" }],
        },
        {
          label: "Contact",
          items: [{ label: "Contact us", link: "/contacts/contact/" }],
        },
      ],
    }),
  ],
});
