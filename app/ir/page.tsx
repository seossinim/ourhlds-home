"use client";

import { useState } from "react";

export default function IRPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Business", href: "/business" },
    { name: "CEO", href: "/ceo" },
    { name: "PR", href: "/pr" },
    { name: "History", href: "/history" },
    { name: "CI", href: "/ci" },
    { name: "Partners", href: "/partners" },
    { name: "IR", href: "/ir" },
  ];

  const youtubeId = "E5ID5dzMq_k";
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  // 업로드 위치 예시
  // public/files/our-hlds-ir-deck-pre-series-a.pdf
  // public/files/our-hlds-ir-deck-pre-series-a.pdf 로 파일을 넣으면 아래 경로로 바로 다운로드됩니다.
  const irDeckFile = "/files/our-hlds-ir-deck-pre-series-a.pdf";

  const cards = [
    ["Commerce", "1OUR 기반 1인 가구 라이프스타일 커머스"],
    ["Community", "홀로알다 기반 익명 커뮤니티와 감정 데이터"],
    ["Marketing", "OUR SIGNAL 기반 온라인 광고·마케팅 플랫폼"],
    ["Content IP", "18년 콘텐츠 경험 기반 브랜드 IP 확장"],
  ];

  const highlights = [
    ["01", "1인 가구 시장", "소비·콘텐츠·생활·커뮤니티·광고 흐름이 연결되는 시장 변화에 집중합니다."],
    ["02", "브랜드 포트폴리오", "1OUR, 홀로알다, OUR SIGNAL을 하나의 생활형 플랫폼 생태계로 연결합니다."],
    ["03", "콘텐츠 기반 실행력", "대표의 크리에이터 경험과 실제 서비스 운영 경험을 바탕으로 빠르게 실행합니다."],
    ["04", "Pre-seed Target", "브랜드 확장, 콘텐츠 강화, 사용자 기반 확대, 신규 서비스 준비를 위한 성장 자금을 계획합니다."],
  ];

  const downloadItems = [
    {
      title: "OUR H.L.D.S 공식 IR DECK",
      desc: "Pre-Series A / 2026 Online IR Presentation / PDF",
      href: irDeckFile,
      label: "PDF 다운로드",
    },
    {
      title: "IR 발표 영상",
      desc: "OUR H.L.D.S 온라인 IR 영상 / YouTube",
      href: youtubeUrl,
      label: "영상 바로가기",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#111]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111] text-[11px] font-bold text-white">
              OUR
            </div>
            <div>
              <p className="text-[13px] font-bold tracking-[0.24em]">
                OUR H.L.D.S
              </p>
              <p className="text-[11px] text-black/45">
                One-person lifestyle startup
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-[13px] font-medium text-black/50 xl:flex">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-black">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden rounded-full bg-[#111] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#12b76a] sm:inline-flex"
            >
              Contact
            </a>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-[20px] font-bold text-black transition hover:bg-[#f1f3ef] xl:hidden"
              aria-label="모바일 메뉴"
            >
              {mobileMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-black/10 bg-white/95 px-5 py-4 shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl xl:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-black/5 py-4 text-[15px] font-semibold text-black/70 transition hover:text-[#12b76a]"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 rounded-2xl bg-[#111] px-5 py-4 text-center text-[14px] font-bold text-white"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden px-5 pb-20 pt-36">
        <div className="absolute right-[-140px] top-[120px] h-[420px] w-[420px] rounded-full bg-[#12b76a]/20 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#d9f99d]/45 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="inline-flex rounded-full border border-[#12b76a]/20 bg-white px-4 py-2 text-[11px] font-bold tracking-[0.22em] text-[#099250] shadow-sm">
              INVESTOR RELATIONS
            </p>

            <h1 className="mt-6 max-w-4xl text-[40px] font-bold leading-[1.08] tracking-[-0.06em] md:text-[68px]">
              OUR H.L.D.S
              <br />
              공식 IR 자료
            </h1>

            <p className="mt-7 max-w-2xl text-[16px] leading-8 text-black/55">
              콘텐츠, 커뮤니티, 커머스, 온라인 광고를 연결하는 1인 가구
              라이프스타일 스타트업 OUR H.L.D.S의 성장 전략과 생태계 구조를
              확인하실 수 있습니다.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={irDeckFile}
                download
                className="inline-flex items-center justify-center rounded-full bg-[#111] px-6 py-4 text-[14px] font-bold text-white transition hover:bg-[#12b76a]"
              >
                IR DECK 다운로드
              </a>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-4 text-[14px] font-bold text-black transition hover:border-[#12b76a] hover:text-[#099250]"
              >
                IR 영상 보기
              </a>
            </div>
          </div>

          <div className="rounded-[34px] border border-black/10 bg-white p-3 shadow-[0_24px_90px_rgba(0,0,0,0.08)]">
            <div className="aspect-video overflow-hidden rounded-[26px] bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title="OUR H.L.D.S IR Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[40px] border border-black/10 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.045)] md:p-12">
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
              IR DECK NOW AVAILABLE
            </p>

            <h2 className="mt-5 text-[32px] font-bold leading-tight tracking-[-0.055em] md:text-[48px]">
              사업 구조와 성장 전략을
              <br />
              한눈에 확인하세요.
            </h2>

            <p className="mt-6 text-[15px] leading-8 text-black/55">
              IR 자료에는 OUR H.L.D.S의 브랜드 구조, 시장 접근 방식, 수익
              모델, 플랫폼 확장 전략, Pre-seed 투자 계획이 포함되어 있습니다.
            </p>

            <div className="mt-8 grid gap-3">
              {downloadItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  download={item.href === irDeckFile ? true : undefined}
                  target={item.href === youtubeUrl ? "_blank" : undefined}
                  rel={item.href === youtubeUrl ? "noreferrer" : undefined}
                  className="group rounded-[26px] border border-black/10 bg-[#f7f8f6] p-5 transition hover:border-[#12b76a]/50 hover:bg-[#effaf4]"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[15px] font-bold text-black/80">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[13px] leading-6 text-black/45">
                        {item.desc}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-white px-4 py-2 text-[12px] font-bold text-[#099250] shadow-sm group-hover:bg-[#12b76a] group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-black/10 bg-[#f7f8f6] p-6">
              <p className="text-[13px] font-bold text-black/70">IR 관련 문의</p>
              <p className="mt-3 text-[15px] font-semibold text-black">
                hologadese@naver.com
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(([title, desc]) => (
              <div
                key={title}
                className="rounded-[30px] border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1"
              >
                <p className="text-[11px] font-bold tracking-[0.24em] text-[#099250]">
                  {title}
                </p>
                <p className="mt-5 text-[20px] font-bold leading-7 tracking-[-0.045em]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#8fffc1]">
                IR SUMMARY
              </p>

              <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[52px]">
                1인 가구 시장에서
                <br />
                실행 가능한 플랫폼으로
                <br />
                확장합니다.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map(([num, title, desc]) => (
                <div
                  key={title}
                  className="rounded-[26px] border border-white/10 bg-white/[0.05] p-6"
                >
                  <p className="text-[11px] font-bold tracking-[0.22em] text-[#8fffc1]">
                    {num}
                  </p>
                  <p className="mt-4 text-[22px] font-bold tracking-[-0.04em]">
                    {title}
                  </p>
                  <p className="mt-4 text-[14px] leading-7 text-white/50">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl rounded-[40px] border border-black/10 bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.045)] md:p-12">
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
            FUNDING DIRECTION
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <h2 className="text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[52px]">
                Pre-seed Target Funding
                <br />
                ₩500,000,000
              </h2>
              <p className="mt-6 text-[15px] leading-8 text-black/55">
                플랫폼 고도화, 브랜드 확장, 콘텐츠 강화, 사용자 기반 확대,
                운영 안정화, 신규 서비스 준비를 위한 성장 자금으로 활용될
                계획입니다.
              </p>
            </div>
            <div className="rounded-[30px] border border-[#12b76a]/20 bg-[#f1fbf5] p-7">
              <p className="text-[15px] font-bold text-black/75">
                OUR H.L.D.S는 이미 움직이고 있는 구조를 더 빠르게 확장하기
                위해 투자 유치를 검토합니다.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-black/50">
                단순 아이디어가 아닌, 실제 서비스 운영과 콘텐츠 제작 경험을
                바탕으로 성장 가능성을 증명해가는 스타트업입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white px-5 py-12 text-[#111]">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-black/10 bg-[#f7f8f6] p-7 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr]">
            <div>
              <p className="text-[20px] font-bold tracking-[-0.04em]">
                OUR H.L.D.S
              </p>
              <p className="mt-1 text-[13px] text-black/45">
                아우어 에이치엘디에스
              </p>
              <p className="mt-5 max-w-sm text-[13px] leading-6 text-black/50">
                제품 기획 / 유통 / 판매 / 플랫폼 / 온라인 광고 & 마케팅
              </p>
            </div>

            <div className="grid gap-5 text-[12px] leading-6 text-black/50 md:grid-cols-2">
              <div>
                <p className="mb-3 text-[13px] font-bold text-black/80">
                  Company
                </p>
                <p>사업자 등록 번호 : 697-36-01404</p>
                <p>통신판매업 신고번호 : 제 2024-광주동구-0363호</p>
                <p>
                  사업장 소재지 : 광주광역시 동구 백서로 125번길 34-2, 5층
                  아이27호
                </p>
                <p>물류 창고 소재지 : 계약 예정</p>
              </div>

              <div>
                <p className="mb-3 text-[13px] font-bold text-black/80">
                  Contact
                </p>
                <p>비즈니스 문의 : hologadese@naver.com</p>
                <p>대표번호 : 0507-1350-5806</p>
                <p>카카오채널 : @ourhlds</p>
                <p>운영시간 : 평일 AM 09:00 - PM 06:00</p>
              </div>

              <div className="md:col-span-2">
                <p className="mb-3 text-[13px] font-bold text-black/80">
                  Account
                </p>
                <p>
                  기업 계좌 1 : 카카오뱅크 3333-31-2546318
                  [아우어에이치엘디에스]
                </p>
                <p>
                  기업 계좌 2 : 국민은행 773901-01-613735
                  [아우어에이치엘디에스]
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-black/10 pt-6 text-[11px] text-black/35 md:flex-row md:items-center md:justify-between">
            <p>
              Copyright © OUR H.L.D.S(아우어 에이치엘디에스) All Rights
              Reserved.
            </p>
            <p>One-person lifestyle company based in Gwangju.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}