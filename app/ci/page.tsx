"use client";

import { useState } from "react";
import Image from "next/image";

export default function CIPage() {
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

  const keywords = [
    ["Trend", "트렌드에 빠르게 반응하는 브랜드"],
    ["Change", "생활의 변화를 관찰하는 기업"],
    ["Innovation", "1인 가구 시장을 새롭게 해석하는 스타트업"],
  ];

  const principles = [
    ["Minimal", "불필요한 장식을 덜어낸 미니멀한 인상"],
    ["Black & White", "블랙과 화이트를 중심으로 한 명확한 대비"],
    ["Flexible", "웹·모바일·콘텐츠·커머스에 확장 가능한 구조"],
    ["Young Startup", "2030 세대와 1인 가구 시장을 향한 젊은 감각"],
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

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-[#12b76a]/20 bg-white px-4 py-2 text-[11px] font-bold tracking-[0.22em] text-[#099250] shadow-sm">
              CORPORATE IDENTITY
            </p>

            <h1 className="mt-6 max-w-4xl text-[40px] font-bold leading-[1.12] tracking-[-0.055em] md:text-[68px]">
              OUR가 되는 사람들,
              <br />
              OUR H.L.D.S의 방향성.
            </h1>

            <p className="mt-7 max-w-2xl text-[16px] leading-8 text-black/55">
              OUR H.L.D.S의 CI는 1인 가구 청년들이 함께 모여 OUR, 우리가
              되는 브랜드의 방향성을 담고 있습니다.
            </p>
          </div>

          <div className="rounded-[36px] border border-black/10 bg-white p-8 shadow-[0_25px_80px_rgba(0,0,0,0.06)]">
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
              BRAND CORE
            </p>
            <div className="mt-7 grid gap-3">
              {["2030", "MZ Youth", "One-person Household", "Lifestyle Platform"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/10 bg-[#f7f8f6] px-5 py-4 text-[16px] font-bold tracking-[-0.04em] text-black/70"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {keywords.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1"
            >
              <p className="text-[11px] font-bold tracking-[0.26em] text-[#099250]">
                {title}
              </p>
              <p className="mt-4 text-[18px] font-bold tracking-[-0.04em]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-[#111] text-[24px] text-white shadow-sm">
            ▦
          </div>

          <p className="mt-7 text-[11px] font-bold tracking-[0.24em] text-[#099250]">
            TREND / CHANGE / INNOVATION
          </p>

          <h2 className="mt-5 text-[30px] font-bold leading-[1.55] tracking-[-0.05em] md:text-[46px]">
            대한민국 2030
            <br />
            MZ 청년세대
            <br />
            1인 가구 대표 기업
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-8 text-black/50">
            브랜드의 정체성은 단순한 로고가 아니라, 1인 가구의 생활 방식과
            청년 세대의 변화에 반응하는 OUR H.L.D.S의 태도를 보여줍니다.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 border-t border-black/10 pt-24 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-[58px] font-bold leading-none tracking-[-0.075em] md:text-[86px]">
              symbol
            </p>

            <p className="mt-8 max-w-md text-[15px] font-semibold leading-8 text-black/60">
              심볼은 1인 가구의 청년들이 함께 모여 OUR, 우리가 되는 브랜드의
              방향성을 강조하기 위해 OUR이라는 단어를 시각적으로 정제한
              형태입니다.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                "OUR = 우리가 되는 브랜드",
                "Black & White 기반의 명확한 인상",
                "콘텐츠·커머스·플랫폼 전반에 적용 가능한 확장성",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-[#f7f8f6] px-5 py-4 text-[14px] font-semibold text-black/60"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[40px] border border-black/10 bg-white p-10 shadow-[0_20px_70px_rgba(0,0,0,0.055)] md:p-16">
            <div className="relative mx-auto aspect-[16/9] max-w-4xl">
              <Image
                src="/images/ci/symbol.png"
                alt="OUR H.L.D.S symbol"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8f6] px-5 py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.58fr_1.42fr]">
          <div>
            <p className="text-[58px] font-bold leading-[0.95] tracking-[-0.075em] md:text-[82px]">
              logo
              <br />
              type
            </p>

            <p className="mt-8 max-w-sm text-[15px] leading-8 text-black/55">
              OUR H.L.D.S의 로고타입은 심볼과 워드마크를 결합해 다양한 매체와
              환경에서 사용할 수 있도록 구성됩니다.
            </p>
          </div>

          <div className="grid gap-8">
            <article className="rounded-[40px] border border-black/10 bg-white p-10 shadow-[0_20px_70px_rgba(0,0,0,0.045)] md:p-14">
              <div className="mb-8 flex items-center justify-between gap-4">
                <p className="text-[13px] font-bold tracking-[0.18em] text-black/50">
                  horizontal ver.
                </p>
                <p className="hidden rounded-full border border-black/10 px-4 py-2 text-[11px] font-bold text-black/35 sm:block">
                  PRIMARY LOGOTYPE
                </p>
              </div>

              <div className="relative aspect-[16/5]">
                <Image
                  src="/images/ci/logo-horizontal.png"
                  alt="OUR H.L.D.S horizontal logo"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 100vw, 70vw"
                />
              </div>
            </article>

            <article className="rounded-[40px] border border-black/10 bg-white p-10 shadow-[0_20px_70px_rgba(0,0,0,0.045)] md:p-14">
              <div className="mb-8 flex items-center justify-between gap-4">
                <p className="text-[13px] font-bold tracking-[0.18em] text-black/50">
                  vertical ver.
                </p>
                <p className="hidden rounded-full border border-black/10 px-4 py-2 text-[11px] font-bold text-black/35 sm:block">
                  SECONDARY LOGOTYPE
                </p>
              </div>

              <div className="relative aspect-[16/5]">
                <Image
                  src="/images/ci/logo-vertical.png"
                  alt="OUR H.L.D.S vertical logo"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 100vw, 70vw"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#8fffc1]">
              BRAND PRINCIPLE
            </p>

            <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[52px]">
              단순하고 선명하게,
              <br />
              오래 남는 브랜드로.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map(([title, desc]) => (
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