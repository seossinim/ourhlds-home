"use client";

import { useState } from "react";
import Image from "next/image";

export default function PartnersPage() {
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

  const partners = [
    {
      name: "NEXT UNICORN",
      kr: "넥스트유니콘",
      desc: "스타트업 투자 유치 플랫폼",
      role: "스타트업 회원사",
      image: "/images/partners/nextunicorn-v2.png",
      url: "https://www.nextunicorn.kr",
      tags: ["Startup", "Investment", "Network"],
    },
    {
      name: "Korea Startup Forum",
      kr: "코리아스타트업포럼",
      desc: "스타트업 정회원사 네트워크",
      role: "정회원사",
      image: "/images/partners/ksf-v2.png",
      url: "https://www.kstartupforum.org",
      tags: ["Startup", "Community", "Forum"],
    },
    {
      name: "KITA",
      kr: "한국무역협회",
      desc: "무역·비즈니스 네트워크",
      role: "회원사 가입 예정",
      image: "/images/partners/kita-v2.png",
      url: "https://www.kita.net",
      tags: ["Business", "Trade", "Network"],
    },
    {
      name: "FLOW WORKS",
      kr: "플로우웍스",
      desc: "디자인 외주 협업",
      role: "디자인 협업 파트너",
      image: "/images/partners/flowworks-v2.png",
      url: "https://flowworks.io",
      tags: ["Design", "Creative", "Outsourcing"],
    },
    {
      name: "CONTACT VC",
      kr: "컨택브이씨",
      desc: "스타트업·투자사 연결 플랫폼",
      role: "스타트업 매각·M&A 네트워크",
      image: "/images/partners/contactvc-v2.png",
      url: "https://contactvc.kr",
      tags: ["VC", "M&A", "Investment"],
    },
    {
      name: "Startup Plus",
      kr: "스타트업플러스",
      desc: "공공기관 스타트업 플랫폼",
      role: "스타트업 지원사업 활용",
      image: "/images/partners/startupplus-v2.png",
      url: "https://www.startup-plus.kr",
      tags: ["Public", "Support", "Startup"],
    },
    {
      name: "Innovforest",
      kr: "혁신의숲",
      desc: "스타트업 성장 분석 플랫폼",
      role: "스타트업 데이터 네트워크",
      image: "/images/partners/innovforest-v2.png",
      url: "https://www.innoforest.co.kr",
      tags: ["Data", "Growth", "Startup"],
    },
    {
      name: "SQUARES",
      kr: "스퀘어스",
      desc: "스타트업 지원 프로그램",
      role: "마케팅 협력 및 선정 서비스 지원",
      image: "/images/partners/squares-v2.png",
      url: "https://www.squares.ai",
      tags: ["Program", "Marketing", "Support"],
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

        <div className="relative mx-auto max-w-7xl">
          <p className="inline-flex rounded-full border border-[#12b76a]/20 bg-white px-4 py-2 text-[11px] font-bold tracking-[0.22em] text-[#099250] shadow-sm">
            PARTNERSHIP NETWORK
          </p>

          <h1 className="mt-6 max-w-4xl text-[40px] font-bold leading-[1.12] tracking-[-0.055em] md:text-[68px]">
            함께 연결되고,
            <br />
            함께 성장합니다.
          </h1>

          <p className="mt-7 max-w-2xl text-[16px] leading-8 text-black/55">
            OUR H.L.D.S는 스타트업, 투자, 플랫폼, 공공 네트워크, 디자인
            협업 파트너와 함께 1인 가구 라이프스타일 시장의 새로운 흐름을
            만들어가고 있습니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            ["Startup Network", "스타트업 생태계와 연결된 성장 네트워크"],
            ["Business Support", "사업 확장과 협업을 위한 지원 구조"],
            ["Creative Partner", "콘텐츠·브랜드·디자인 실행 파트너십"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1"
            >
              <p className="text-[11px] font-bold tracking-[0.26em] text-[#099250]">
                {title}
              </p>
              <p className="mt-4 text-[18px] font-bold leading-7 tracking-[-0.04em]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
                BUSINESS PARTNERS
              </p>
              <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[54px]">
                OUR H.L.D.S와 연결된
                <br />
                파트너 네트워크.
              </h2>
            </div>

            <p className="max-w-md text-[15px] leading-7 text-black/50">
              각 파트너와의 연결은 사업 확장, 네트워크, 마케팅 협력,
              스타트업 성장 기반을 강화하는 데 활용됩니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-[34px] border border-black/10 bg-[#f7f8f6] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="border-b border-black/10 bg-white">
                  <div className="relative aspect-[1200/630] w-full overflow-hidden">
                    <Image
                      src={partner.image}
                      alt={`${partner.kr} logo`}
                      fill
                      priority={partner.name === "NEXT UNICORN"}
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[11px] font-bold tracking-[0.22em] text-[#099250]">
                    PARTNER
                  </p>

                  <h3 className="mt-4 text-[22px] font-bold tracking-[-0.045em]">
                    {partner.kr}
                  </h3>

                  <p className="mt-2 text-[13px] font-semibold text-black/40">
                    {partner.name}
                  </p>

                  <p className="mt-5 text-[14px] leading-7 text-black/55">
                    {partner.desc}
                  </p>

                  <p className="mt-3 text-[13px] font-semibold text-black/70">
                    {partner.role}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {partner.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] font-bold text-black/45"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 text-[13px] font-bold text-[#099250]">
                    Visit Website →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#8fffc1]">
              PARTNERSHIP VALUE
            </p>

            <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[52px]">
              혼자 성장하지 않고,
              <br />
              연결을 통해 확장합니다.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Network", "스타트업 생태계 안에서 연결과 기회를 확장합니다."],
              ["Support", "지원사업과 협력 프로그램을 통해 실행 기반을 만듭니다."],
              ["Data", "시장과 성장 흐름을 분석하며 사업 방향을 고도화합니다."],
              ["Creative", "브랜드와 콘텐츠 실행력을 협업으로 강화합니다."],
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