# conconcc blog

Astro + [AstroPaper](https://github.com/satnaing/astro-paper) 테마(MIT)로 만든 블로그.

## 실행

Node.js 22.23.4 이상(또는 24)이 필요하다.

```sh
pnpm install --frozen-lockfile
pnpm run dev      # 로컬 미리보기
pnpm run build    # 빌드(타입 검사 + 검색 색인 포함)
```

## 글 쓰기

`src/content/posts/` 에 마크다운 파일을 추가한다. 머리말에 `title`, `pubDatetime`, `description`, `tags` 가 필요하다.

## 배포

`main` 브랜치에 push 하면 GitHub Actions(`.github/workflows/deploy.yml`)가 GitHub Pages 로 배포한다.
저장소 Settings → Pages 의 Source 를 **GitHub Actions** 로 설정해야 한다.

## 공개 전 점검

이 저장소는 공개 저장소다. 글을 커밋하기 전에 개인정보와 비공개 기록이 섞이지 않았는지 확인한다.
