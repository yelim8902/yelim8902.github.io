# 이예림 포트폴리오

> AI agents · AI systems · blockchain security에 관심 있는 아주대학교 소프트웨어학과 학생의 홈페이지입니다.

[![Live Demo](https://img.shields.io/badge/Live-Demo-3182f6?style=flat-square)](https://yelim8902.github.io/portfolio-website/)
[![GitHub](https://img.shields.io/badge/GitHub-yelim8902-181717?style=flat-square&logo=github)](https://github.com/yelim8902)

## 소개

아주대학교 소프트웨어학과 재학생의 개인 홈페이지입니다.
경력, 프로젝트, 수상 내역과 LaTeX로 작성한 CV를 담고 있습니다.

## 디자인

[al-folio](https://github.com/alshedivat/al-folio) 계열 연구자 홈페이지 스타일을 참고한 단일 페이지 구성입니다.

- 좁은 단일 컬럼 레이아웃, Inter + Pretendard 타이포그래피
- 논문 리스트 형식의 프로젝트 (썸네일 · 뱃지 · PAGE/CODE/VIDEO 링크)
- 라이트/다크 테마 (시스템 설정 기본값, 수동 전환 저장)
- 반응형 (모바일 햄버거 메뉴)

## 기술 스택

| 분류 | 기술 |
|---|---|
| 마크업 | HTML5 |
| 스타일 | CSS3 (Custom Properties, Grid, Flexbox) |
| 스크립트 | Vanilla JavaScript (ES6+) |
| 폰트 | Inter, Pretendard Variable |
| 아이콘 | Font Awesome 6 |
| 배포 | GitHub Pages |

## 프로젝트 구조

```
portfolio-website/
├── index.html                 # 사이트 전체 (단일 페이지)
├── assets/
│   ├── css/styles.css         # 색상·글꼴 토큰은 맨 위 :root / [data-theme="dark"]
│   ├── js/main.js             # 다크 모드, 모바일 메뉴, 메뉴 하이라이트, 이메일 복사
│   └── images/
│       ├── profile/           # profile.jpg(프로필), og-profile.jpg(링크 미리보기), favicon.jpg
│       ├── logos/             # Experience 기관 로고 (ineeji, fsc, bay)
│       └── projects/          # Selected Projects 썸네일 (jipjigi, trace-x, xai-aml)
├── cv/
│   ├── cv.tex                 # LaTeX CV 원본
│   └── cv.pdf                 # 빌드 결과 (사이트 메뉴 "CV"가 이 파일을 엶)
├── archive/                   # 지금은 사이트에서 안 쓰지만 보관하는 파일
│   ├── images/                # 수상 사진·상장, 예전 프로젝트 썸네일, 예전 프로필
│   ├── docs/                  # 발표 자료, 상장 PDF
│   └── scripts/               # 예전 PDF 변환 스크립트
└── README.md
```

## 섹션 구성

1. **About** — 소개 · 관심 분야 · 프로필 사진 · 링크 아이콘
2. **News** — 날짜별 소식 (최신 5개까지만 표시)
3. **Experience** — 인턴 · 리포터 · 학회 · 창업 (기관 로고 포함)
4. **Selected Projects** — 집지기, TRACE-X, XAI-AML / more projects (접힘)
5. **Awards & Honors**
6. **Education · Skills**
7. **CV** — [cv/cv.pdf](cv/cv.pdf)

## 편집 가이드

| 하고 싶은 일 | 방법 |
|---|---|
| 뉴스 추가 | `index.html`의 `#news` 표 **맨 위**에 `<tr>` 추가. 6번째부터는 CSS로 자동 숨김 |
| 경력 추가 | `#experience`의 `<li class="cv-item has-logo">` 하나 복사. 로고는 `assets/images/logos/`에 넣고 경로 수정 (꽉 찬 정사각형 로고는 `cv-logo-photo` 클래스) |
| 대표 프로젝트 추가 | `#projects`의 `<li class="pub">` 하나 복사. 썸네일은 `assets/images/projects/` (4:3 비율 권장) |
| 기타 프로젝트 추가 | `<details class="more">` 안의 `<li>` 복사 후 `More projects (N)` 숫자 수정 |
| 수상 추가 | `#awards` 표에 `<tr>` 추가 |
| 프로필 사진 교체 | `assets/images/profile/profile.jpg` 교체. 링크 미리보기용 `og-profile.jpg`(600×600)도 함께 교체 |
| CV 수정 | `cv/cv.tex` 수정 후 `cd cv && xelatex cv.tex`로 `cv.pdf` 다시 생성 (XeLaTeX 필요) |
| 이미지 보관 | 안 쓰게 된 파일은 지우지 말고 `archive/` 아래로 이동 |

파일 이름은 영문 소문자와 하이픈(`trace-x.jpg`)으로 맞추면 경로 문제가 생기지 않습니다.

## 로컬 실행

```bash
git clone https://github.com/yelim8902/portfolio-website.git
cd portfolio-website

# VS Code Live Server 또는
python -m http.server 8000
```

## 연락처

- **이메일**: yelim2849@gmail.com
- **GitHub**: [yelim8902](https://github.com/yelim8902)
- **LinkedIn**: [yelim-lee](https://www.linkedin.com/in/yelim-lee-80899a305/)
- **기술 블로그**: [진강이의 성장일지](https://zingangyyy.tistory.com/)
