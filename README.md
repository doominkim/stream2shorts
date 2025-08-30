# Stream2Shorts 🎬

**Stream2Shorts**는 스트리머를 위한 자동 쇼츠 생성 SaaS 서비스입니다.  
스트리밍에서 발생한 영상을 입력하면, **자막(STT)** → **구간 선택/크롭** → **스타일 적용** → **쇼츠(Shorts) 자동 업로드** 파이프라인을 제공합니다.

---

## 🚀 주요 기능

- 🎞️ **클립 추출**: 긴 스트리밍 영상에서 원하는 구간만 잘라내기
- 💬 **자막 자동 생성**: STT(Whisper 등) 기반 실시간 자막 생성
- ✨ **자막 스타일링**: 폰트, 색상, 배경 등 커스터마이징 지원
- 📐 **화면 크롭**: 구간별로 다른 화면 영역 지정 가능
- ⏫ **YouTube Shorts 업로드**: 완성된 영상을 반자동/자동으로 업로드

---

## 🛠 기술 스택

- **Frontend**: React, Video.js, Cropper.js
- **Backend**: Node.js (NestJS), FFmpeg
- **Infra**: AWS (ECS, S3, RDS, CloudWatch)
- **AI/ML**: OpenAI Whisper, PyTorch 기반 STT
- **CI/CD**: GitHub Actions

---

## 📦 설치 및 실행

```bash
# 1. 레포지토리 클론
git clone https://github.com/<your-username>/stream2shorts.git
cd stream2shorts

# 2. 패키지 설치
pnpm install   # or npm install

# 3. 개발 서버 실행
pnpm dev

---

## 🎨 프론트엔드 레이아웃
- 상단 네비게이션 바와 좌측 사이드 메뉴가 포함된 기본 레이아웃을 제공합니다.
- **클립** 페이지에서 영상 목록과 간단한 편집기(Video.js, Cropper.js)를 확인할 수 있습니다.
- **쇼츠** 페이지에서는 생성된 쇼츠 목록과 YouTube 업로드 버튼을 제공합니다.
- **설정** 페이지에서는 치지직 및 YouTube API 키를 입력할 수 있는 폼이 있습니다.
