# 이예림 포트폴리오

> 소프트웨어를 전공하며 데이터 · 블록체인 · AI로 금융을 탐구합니다.

[![Live Demo](https://img.shields.io/badge/Live-Demo-3182f6?style=flat-square)](https://yelim8902.github.io/portfolio-website/)
[![GitHub](https://img.shields.io/badge/GitHub-yelim8902-181717?style=flat-square&logo=github)](https://github.com/yelim8902)

## 소개

아주대학교 소프트웨어학과 재학생의 개인 포트폴리오 웹사이트입니다.
블록체인 보안, 데이터 분석, AI를 금융 도메인에 접목하는 프로젝트들을 소개합니다.

## 디자인

[al-folio](https://github.com/alshedivat/al-folio) 계열 연구자 홈페이지 스타일을 참고한 단일 페이지 구성입니다.

- 좁은 단일 컬럼 레이아웃, Inter + Pretendard 타이포그래피
- 논문 리스트 형식의 프로젝트 (썸네일 · 뱃지 · PAGE/PDF/CODE/VIDEO 링크)
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
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
└── README.md
```

## 섹션 구성

1. **About** — 소개 · 연구 관심사 · 프로필 사진
2. **News** — 날짜별 소식
3. **Experience** — 인턴 · 학부연구생 · 학회(BAY 기고글 링크) · 창업
4. **Selected Projects** — TRACE-X, 집지기, XAI-AML / Other projects
5. **Awards & Honors**
6. **Education · Skills**
7. **Contact** — 이메일 · 소셜 링크
8. **CV** — [cv/cv.pdf](cv/cv.pdf) (LaTeX 원본: `cv/cv.tex`, 빌드: `cd cv && xelatex cv.tex`)

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
