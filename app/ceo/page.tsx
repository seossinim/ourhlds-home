"use client";

import { useState } from "react";
import Image from "next/image";

export default function CEOPage() {
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

  const careers = [
    ["18년차", "온라인 콘텐츠 창작자"],
    ["SOOP", "1세대 최연소 베스트 스트리머"],
    ["Media", "연예Wa닷컴 창업자 및 발행인·편집인"],
    ["Startup", "홀로(Holo) 개발·출시·운영"],
  ];

  const awards = [
    "2021 한국 브랜드 리더 소셜네트워킹 부문 대상",
    "2021 제16회 대한민국 문화경영대상 소셜네트워킹 부문 대상",
    "2022 제3회 스윙투앱 베스트 어워드 홀로 우수상",
    "2022 1인가구 콘퍼런스 초청 강연 연사",
    "2022 제3회 Y-STAR와 꿈꾸라 초청 1인가구 강연 연사",
    "2024 제9회 글로벌 이노베이터 페스타(GIF) 초청 스타트업 강연 연사",
    "2030 힐링 에세이 『그대는 찬란하고 예쁘잖아』 정식 출간",
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

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="inline-flex rounded-full border border-[#12b76a]/20 bg-white px-4 py-2 text-[11px] font-bold tracking-[0.22em] text-[#099250] shadow-sm">
              CEO MESSAGE
            </p>

            <h1 className="mt-6 max-w-4xl text-[38px] font-bold leading-[1.12] tracking-[-0.055em] md:text-[66px]">
              콘텐츠와 사람을
              <br />
              연결해온 경험으로
              <br />
              1인 가구의 내일을 만듭니다.
            </h1>

            <p className="mt-7 max-w-2xl text-[16px] leading-8 text-black/55">
              OUR H.L.D.S는 콘텐츠, 커뮤니티, 커머스, 플랫폼을 연결하며
              1인 가구 라이프스타일의 새로운 흐름을 만들어가고 있습니다.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/business"
                className="rounded-full bg-[#111] px-6 py-3 text-[13px] font-semibold text-white transition hover:-translate-y-0.5"
              >
                비즈니스 보기
              </a>
              <a
                href="/history"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-[13px] font-semibold text-black/65 shadow-sm transition hover:-translate-y-0.5 hover:text-black"
              >
                연혁 보기
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[38px] border border-black/10 bg-[#111] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-black">
                <Image
                  src="/images/ceo/ceo.jpeg"
                  alt="OUR H.L.D.S CEO 서은호"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 48vw"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-3xl border border-black/10 bg-white px-5 py-4 shadow-xl">
              <p className="text-[11px] font-bold text-black/40">CEO</p>
              <p className="mt-1 text-[15px] font-bold">서은호 · 학생서씨</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
              PROFILE
            </p>
            <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[54px]">
              서은호
              <br />
              OUR H.L.D.S CEO
            </h2>
          </div>

          <div>
            <p className="text-[17px] leading-9 text-black/65">
              서은호 대표는 SOOP(아프리카TV) 플랫폼 초기 세대부터 활동해온
              1세대 스트리머이자 18년차 온라인 콘텐츠 창작자입니다. 전직
              언론인 출신으로 연예 전문 언론사 연예Wa닷컴을 창업하고
              최연소 발행인·편집인 대표를 역임했으며, 이후 1인 가구 기반
              서비스와 플랫폼 사업을 직접 기획하고 운영해 왔습니다.
            </p>

            <p className="mt-6 text-[17px] leading-9 text-black/65">
              콘텐츠를 통해 사람의 감정과 생활 흐름을 관찰해온 경험을 바탕으로,
              현재는 1OUR, 홀로알다, OUR SIGNAL을 중심으로 커머스·커뮤니티·
              온라인 광고 플랫폼을 연결하는 브랜드형 스타트업을 운영하고
              있습니다.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {careers.map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-[26px] border border-black/10 bg-[#f7f8f6] p-6"
                >
                  <p className="text-[26px] font-bold tracking-[-0.05em]">
                    {title}
                  </p>
                  <p className="mt-3 text-[14px] leading-6 text-black/55">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
              AWARD & SPEECH
            </p>
            <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[54px]">
              브랜드와 콘텐츠로
              <br />
              직접 증명해온 시간.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-black/50">
              수상, 강연, 미디어 활동을 통해 콘텐츠와 플랫폼 기반의 실행력을
              꾸준히 증명해왔습니다.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-[32px] border border-black/10 bg-[#f1f4f1] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/pC5N6TKoRRQ?autoplay=1&mute=1&loop=1&playlist=pC5N6TKoRRQ&rel=0"
                title="OUR H.L.D.S CEO Award Video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="rounded-[32px] border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-[13px] font-bold tracking-[0.24em] text-[#099250]">
                SELECTED HISTORY
              </p>

              <div className="mt-6 grid gap-3">
                {awards.map((award) => (
                  <div
                    key={award}
                    className="rounded-2xl border border-black/10 bg-[#f7f8f6] px-5 py-4 text-[14px] font-semibold leading-6 text-black/65"
                  >
                    {award}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#8fffc1]">
              PHILOSOPHY
            </p>
            <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[52px]">
              혼자 사는 삶도
              <br />
              충분히 감각적이고
              <br />
              따뜻할 수 있어야 합니다.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Content", "사람의 감정과 흐름을 읽는 콘텐츠 경험"],
              ["Community", "1인 가구가 서로 연결되는 커뮤니티"],
              ["Commerce", "혼자 사는 생활에 필요한 제품 제안"],
              ["Platform", "광고와 마케팅을 쉽게 연결하는 실행 시스템"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-[26px] border border-white/10 bg-white/[0.05] p-6"
              >
                <p className="text-[20px] font-bold tracking-[-0.04em]">
                  {title}
                </p>
                <p className="mt-4 text-[14px] leading-7 text-white/50">
                  {desc}
                </p>
              </div>
            ))}
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