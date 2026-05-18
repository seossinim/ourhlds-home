"use client";

import { useState } from "react";

export default function Home() {
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

  const brands = [
    ["1OUR", "1인 가구 라이프스타일 커머스"],
    ["홀로알다", "1인 가구 익명 커뮤니티"],
    ["OUR SIGNAL", "온라인 광고 & 마케팅 플랫폼"],
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

      <section className="relative overflow-hidden px-5 pb-20 pt-32">
        <div className="absolute right-[-120px] top-[120px] h-[420px] w-[420px] rounded-full bg-[#12b76a]/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#d9f99d]/45 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-[#12b76a]/20 bg-white px-4 py-2 text-[11px] font-bold tracking-[0.2em] text-[#099250] shadow-sm">
              OUR H.L.D.S · 1인 가구 라이프스타일 스타트업
            </p>

            <h1 className="max-w-4xl text-[40px] font-bold leading-[1.12] tracking-[-0.055em] md:text-[72px]">
              혼자 사는 삶을
              <br />
              더 편리하고,
              <br />
              더 감각적으로.
            </h1>

            <p className="mt-7 max-w-xl text-[16px] leading-8 text-black/55">
              OUR H.L.D.S는 제품 기획, 유통, 판매, 플랫폼, 온라인 광고와
              마케팅을 연결하며 1인 가구의 생활 방식을 새롭게 제안합니다.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/business"
                className="rounded-full bg-[#111] px-6 py-3 text-[13px] font-semibold text-white transition hover:-translate-y-0.5"
              >
                비즈니스 보기
              </a>
              <a
                href="/pr"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-[13px] font-semibold text-black/65 shadow-sm transition hover:-translate-y-0.5 hover:text-black"
              >
                PR 보기
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[36px] border border-black/10 bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <div className="rounded-[28px] bg-[#111] p-6 text-white">
                <p className="text-[11px] font-bold tracking-[0.24em] text-[#8fffc1]">
                  OUR ECOSYSTEM
                </p>

                <div className="mt-8 grid gap-4">
                  {brands.map(([name, desc]) => (
                    <a
                      key={name}
                      href="/business"
                      className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 transition hover:bg-white/[0.1]"
                    >
                      <h3 className="text-[28px] font-bold tracking-[-0.05em]">
                        {name}
                      </h3>
                      <p className="mt-2 text-[14px] text-white/55">{desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-3xl border border-black/10 bg-white px-5 py-4 shadow-xl">
              <p className="text-[11px] font-bold text-black/40">
                BUSINESS AREA
              </p>
              <p className="mt-1 text-[14px] font-semibold">
                기획 · 유통 · 플랫폼 · 광고
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {["제품 기획", "유통 / 판매", "플랫폼", "온라인 광고 & 마케팅"].map(
            (item) => (
              <div
                key={item}
                className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <div className="mb-5 h-2 w-10 rounded-full bg-[#12b76a]" />
                <p className="text-[20px] font-bold tracking-[-0.04em]">
                  {item}
                </p>
                <p className="mt-4 text-[14px] leading-7 text-black/50">
                  1인 가구의 생활과 브랜드 성장을 연결하는 실행 중심
                  비즈니스를 만듭니다.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="mb-4 text-[11px] font-bold tracking-[0.28em] text-[#099250]">
              BRAND FILM
            </p>

            <h2 className="text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[54px]">
              브랜드와 사람을
              <br />
              연결하는 이야기.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-black/50">
              OUR H.L.D.S는 콘텐츠, 커뮤니티, 플랫폼을 기반으로 다양한
              사람과 브랜드를 연결하며 성장하고 있습니다.
            </p>

            <div className="mt-8 rounded-[24px] border border-black/10 bg-[#f7f8f6] p-5">
              <p className="text-[12px] font-bold tracking-[0.2em] text-[#099250]">
                FEATURED VIDEO
              </p>
              <p className="mt-3 text-[18px] font-bold tracking-[-0.04em] text-black">
                Viva Republica · Toss
              </p>
              <p className="mt-2 text-[14px] leading-6 text-black/50">
                토스 이승건 대표와의 만남 및 스타트업 관련 이야기.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-black/10 bg-[#f1f4f1] shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/i-epdaWM_iA?autoplay=1&mute=1&loop=1&playlist=i-epdaWM_iA&rel=0"
              title="OUR H.L.D.S Brand Film"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
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