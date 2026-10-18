export const site = {
  name: "Elite Shades",
  liveUrl: "https://eliteshades.co.nz",
  phoneDisplay: "022 314 6299",
  phoneHref: "tel:+64223146299",
  email: "info@eliteshades.co.nz",
  emailHref: "mailto:info@eliteshades.co.nz",
  area: "Christchurch & Waimakariri",
  areaLong: "Christchurch & Waimakariri District",
  googleReviews:
    "https://www.google.com/search?q=Elite+Shades+Christchurch+reviews",
} as const;

export function live(path = "/"): string {
  if (path === "/") return `${site.liveUrl}/`;
  return `${site.liveUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
