"use client";

import { useState } from "react";

export default function ContactPage() {
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

  const contactTypes = [
    [
      "Business Partnership",
      "브랜드 협업 및 제휴 관련 문의",
    ],
    [
      "Marketing Inquiry",
      "온라인 광고 및 마케팅 관련 문의",
    ],
    [
      "Commerce & Product",
      "커머스 입점 및 상품 협업 문의",
    ],
    [
      "Lecture / Interview / PR",
      "강연, 인터뷰, 언론 및 PR 관련 문의",
    ],
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
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-black"
              >
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
        <div className="absolute bottom-[-120px] left-[-120px] h-[360px] w-[360px] rounded-full bg-[#d9f99d]/45 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex rounded-full border border-[#12b76a]/20 bg-white px-4 py-2 text-[11px] font-bold tracking-[0.22em] text-[#099250] shadow-sm">
            CONTACT
          </p>

          <h1 className="mt-6 max-w-4xl text-[40px] font-bold leading-[1.12] tracking-[-0.055em] md:text-[68px]">
            OUR H.L.D.S와 함께할
            <br />
            제안과 문의를 기다립니다.
          </h1>

          <p className="mt-7 max-w-2xl text-[16px] leading-8 text-black/55">
            비즈니스 제휴, 광고·마케팅, 커머스 협업, 강연 및 인터뷰 등
            다양한 문의를 받고 있습니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactTypes.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-[30px] border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1"
            >
              <p className="text-[11px] font-bold tracking-[0.24em] text-[#099250]">
                CONTACT TYPE
              </p>

              <h3 className="mt-5 text-[22px] font-bold tracking-[-0.045em]">
                {title}
              </h3>

              <p className="mt-4 text-[14px] leading-7 text-black/55">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
              CONTACT INFO
            </p>

            <h2 className="mt-5 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[52px]">
              이메일 또는
              <br />
              카카오채널로
              <br />
              문의해주세요.
            </h2>

            <p className="mt-6 max-w-md text-[15px] leading-8 text-black/55">
              현재 문의는 이메일 및 카카오채널 중심으로 운영되고 있으며,
              평일 기준 순차적으로 답변드립니다.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[32px] border border-black/10 bg-[#f7f8f6] p-7">
              <p className="text-[12px] font-bold tracking-[0.22em] text-black/40">
                E-MAIL
              </p>

              <a
                href="mailto:hologadese@naver.com"
                className="mt-4 block text-[24px] font-bold tracking-[-0.045em] transition hover:text-[#12b76a]"
              >
                hologadese@naver.com
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[32px] border border-black/10 bg-[#f7f8f6] p-7">
                <p className="text-[12px] font-bold tracking-[0.22em] text-black/40">
                  PHONE
                </p>

                <p className="mt-4 text-[22px] font-bold tracking-[-0.045em]">
                  0507-1350-5806
                </p>
              </div>

              <div className="rounded-[32px] border border-black/10 bg-[#f7f8f6] p-7">
                <p className="text-[12px] font-bold tracking-[0.22em] text-black/40">
                  KAKAO CHANNEL
                </p>

                <p className="mt-4 text-[22px] font-bold tracking-[-0.045em]">
                  @ourhlds
                </p>
              </div>
            </div>

            <div className="rounded-[32px] border border-black/10 bg-[#111] p-8 text-white">
              <p className="text-[12px] font-bold tracking-[0.22em] text-[#8fffc1]">
                OPERATING HOURS
              </p>

              <p className="mt-4 text-[24px] font-bold tracking-[-0.045em]">
                평일 AM 09:00 - PM 06:00
              </p>

              <p className="mt-4 text-[14px] leading-7 text-white/55">
                주말 및 공휴일 문의는 순차적으로 확인 후 답변드립니다.
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
                  사업장 소재지 : 광주광역시 동구 백서로 125번길 34-2,
                  5층 아이27호
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
              Copyright © OUR H.L.D.S(아우어 에이치엘디에스)
              All Rights Reserved.
            </p>

            <p>One-person lifestyle company based in Gwangju.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}