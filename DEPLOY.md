# 사이트 배포 안내 (정적 배포)

현재 프로젝트는 HTML/CSS/JS 정적 파일만으로 동작하므로 GitHub Pages로 바로 배포 가능합니다.

## 1) Git 저장소 준비

```bash
git init
git add .
git commit -m "feat: add 100대명산 course map"
```

원격 저장소 추가(예시):

```bash
git remote add origin https://github.com/<USER>/<REPO>.git
git branch -M main
git push -u origin main
```

## 2) GitHub Pages 활성화

1. GitHub 저장소 → Settings → Pages
2. Source: `GitHub Actions` 선택
3. 워크플로우가 실행되어 배포 완료되면 표시된 URL로 접속

현재 저장소에는 `/.github/workflows/deploy-pages.yml`이 이미 등록되어 있어
`main` 브랜치 푸시 시 자동 배포됩니다.

## 3) 수동 배포(원클릭)

Actions 탭에서 `Deploy static site to GitHub Pages` 워크플로우를
`Run workflow`로 바로 실행할 수 있습니다.

## 참고

- `.gpx` 파일은 로컬 업로드용입니다. 대용량 폴더를 함께 배포하려면
  원본 폴더를 함께 커밋하거나 CDN/스토리지 연동이 필요할 수 있습니다.
