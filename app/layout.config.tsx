import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared"

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "nikiv.dev",
  },
  links: [
    {
      text: "GitHub",
      url: "https://github.com/nikitavoloboev",
    },
    {
      text: "X",
      url: "https://x.com/nikitavoloboev",
    },
  ],
}
