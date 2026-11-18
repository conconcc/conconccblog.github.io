import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    // 저장소 이름을 conconcc.github.io 로 정하면 이 주소가 맞다.
    // 다른 이름이면 astro.config.ts 에 base 도 함께 설정해야 한다.
    url: "https://conconcc.github.io/",
    title: "conconcc blog",
    description: "개발 기록과 학습 노트.",
    author: "conconcc",
    profile: "https://github.com/conconcc",
    ogImage: "default-og.jpg",
    lang: "ko",
    timezone: "Asia/Seoul",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
    toc: true,
  },
  socials: [{ name: "github", url: "https://github.com/conconcc" }],
  shareLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
