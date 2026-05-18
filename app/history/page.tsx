"use client";

import { useState } from "react";

export default function HistoryPage() {
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

  const highlights = [
    ["2020", "HOLO 프로젝트 시작"],
    ["2021", "브랜드 리더·문화경영대상 수상"],
    ["2023", "홀로알다 공식 런칭"],
    ["2024", "OUR H.L.D.S 설립"],
    ["2025", "1OUR·OUR SIGNAL 확장"],
    ["2026", "AI 감정피드백·광고 플랫폼 전환"],
  ];

  const timeline = [
    {
      year: "2026",
      title: "AI와 온라인 광고 플랫폼으로 확장",
      items: [
        "홀로알다 AI 감정피드백 기능 개발 및 실적용",
        "스퀘어스 스타트업 지원 프로그램 선정 및 마케팅 협력",
        "OUR SIGNAL 온라인 광고 플랫폼 전환 개발 프로젝트 진행",
        "신인 크리에이터 육성 프로젝트 추진",
      ],
    },
    {
      year: "2025",
      title: "콘텐츠·커머스·플랫폼 사업 고도화",
      items: [
        "도서 『그대는 찬란하고 예쁘잖아』 정식 출간",
        "코리아 스타트업 포럼 2025 세종 창업 한마당 워크샵 참석",
        "1OUR 네이버 스마트스토어·인스타그램 Shop·토스쇼핑 연동 추진",
        "홀로알다 실시간 뉴스·기후변화·AI 감정 피드백 기능 개발",
        "OUR SIGNAL 신규 온라인 광고 브랜드 론칭",
        "코리아 스타트업 포럼 정회원사 전환",
      ],
    },
    {
      year: "2024",
      title: "OUR H.L.D.S 설립과 브랜드 사업화",
      items: [
        "OUR H.L.D.S 기업 설립",
        "OUR H.L.D.S 기업 PR 온라인 콘퍼런스 개최",
        "1OUR 1인 가구 이커머스 브랜드 정식 런칭",
        "제9회 글로벌 이노베이터 페스타(GIF 2024) 초청 스타트업 강연",
      ],
    },
    {
      year: "2023",
      title: "홀로알다와 1인 가구 플랫폼 전환",
      items: [
        "국내 1인 가구 익명 플랫폼 홀로알다 런칭",
        "1OUR 쇼핑 브랜드 런칭 예고",
        "온라인 소비패턴 설문조사 참여 이벤트 진행",
      ],
    },
    {
      year: "2022",
      title: "홀로 운영과 1인 가구 강연 활동",
      items: [
        "제3회 스윙투앱 베스트 어워드 홀로 우수상 수상",
        "1인가구 콘퍼런스 초청 서비스 세션 강연",
        "제3회 Y-STAR와 꿈꾸라 초청 1인 가구 강연",
        "홀로 누적 다운로드 1,953명 및 회원 396명 돌파",
        "홀로 서비스 종료 및 홀로알다 리빌딩 전환",
      ],
    },
    {
      year: "2021",
      title: "수상·투자 네트워크·앱 성장",
      items: [
        "한국 브랜드리더 소셜네트워킹 부문 대상 수상",
        "제16회 대한민국 문화경영대상 소셜네트워킹 부문 대상 수상",
        "컴업 2021 참석 및 투자사 미팅",
        "데이터바우처 지역 수요 발굴 시범사업 선정",
        "해외문화홍보원 초청 2021 세계미래포럼 참석",
        "홀로 다운로드 1,302명 및 회원 280명 돌파",
      ],
    },
    {
      year: "2020",
      title: "HOLO의 시작",
      items: [
        "홀로(HOLO) 프로토타입 제작 및 시험 제작",
        "홀로 예비창업",
        "구글플레이·원스토어·앱스토어 출시",
        "홀로TALK·홀로마켓 기능 업데이트",
        "초기 다운로드 300명 및 회원 100명 돌파",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f8f6] text-[#111]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
          <a href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#111] text-[11px] font-bold text-white">
              OUR
            </div>
            <div>
              <p className="text-[13px] font-bold tracking-[0.24em]">OUR H.L.D.S</p>
              <p className="text-[11px] text-black/45">One-person lifestyle startup</p>
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
            <a href="/contact" className="hidden rounded-full bg-[#111] px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#12b76a] sm:inline-flex">
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
              <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 rounded-2xl bg-[#111] px-5 py-4 text-center text-[14px] font-bold text-white">
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
            HISTORY
          </p>

          <h1 className="mt-6 max-w-4xl text-[40px] font-bold leading-[1.12] tracking-[-0.055em] md:text-[68px]">
            계속 시도하고,
            <br />
            다시 연결해온 기록.
          </h1>

          <p className="mt-7 max-w-2xl text-[16px] leading-8 text-black/55">
            OUR H.L.D.S는 HOLO 프로젝트에서 시작해 커뮤니티, 커머스, 콘텐츠,
            온라인 광고 플랫폼으로 확장하며 1인 가구 라이프스타일 생태계를 만들어가고 있습니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3 xl:grid-cols-6">
          {highlights.map(([year, text]) => (
            <div key={year} className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-[26px] font-bold tracking-[-0.05em] text-[#099250]">{year}</p>
              <p className="mt-4 text-[14px] font-semibold leading-6 text-black/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
              TIMELINE
            </p>
            <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[54px]">
              프로젝트에서 기업으로,
              <br />
              기업에서 플랫폼으로.
            </h2>
          </div>

          <div className="grid gap-8">
            {timeline.map((block) => (
              <article
                key={block.year}
                className="grid gap-8 rounded-[36px] border border-black/10 bg-[#f7f8f6] p-7 shadow-sm lg:grid-cols-[0.35fr_1.65fr] lg:p-10"
              >
                <div>
                  <p className="text-[48px] font-bold leading-none tracking-[-0.06em] text-[#099250]">
                    {block.year}
                  </p>
                  <p className="mt-4 text-[13px] font-bold tracking-[0.2em] text-black/35">
                    OUR HISTORY
                  </p>
                </div>

                <div>
                  <h3 className="text-[26px] font-bold tracking-[-0.045em] md:text-[36px]">
                    {block.title}
                  </h3>

                  <div className="mt-7 grid gap-3">
                    {block.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-[14px] font-semibold leading-6 text-black/60"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-[11px] font-bold tracking-[0.28em] text-[#8fffc1]">
              GROWTH STORY
            </p>
            <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[52px]">
              실패와 전환까지
              <br />
              브랜드의 기록으로 남깁니다.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Build", "프로토타입을 만들고 실제 시장에서 검증합니다."],
              ["Pivot", "프로젝트 종료와 전환을 통해 더 나은 구조로 재설계합니다."],
              ["Launch", "커뮤니티·커머스·콘텐츠 서비스를 직접 운영합니다."],
              ["Scale", "OUR SIGNAL을 통해 온라인 광고 플랫폼으로 확장합니다."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[26px] border border-white/10 bg-white/[0.05] p-6">
                <p className="text-[20px] font-bold tracking-[-0.04em]">{title}</p>
                <p className="mt-4 text-[14px] leading-7 text-white/50">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white px-5 py-12 text-[#111]">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-black/10 bg-[#f7f8f6] p-7 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr]">
            <div>
              <p className="text-[20px] font-bold tracking-[-0.04em]">OUR H.L.D.S</p>
              <p className="mt-1 text-[13px] text-black/45">아우어 에이치엘디에스</p>
              <p className="mt-5 max-w-sm text-[13px] leading-6 text-black/50">
                제품 기획 / 유통 / 판매 / 플랫폼 / 온라인 광고 & 마케팅
              </p>
            </div>

            <div className="grid gap-5 text-[12px] leading-6 text-black/50 md:grid-cols-2">
              <div>
                <p className="mb-3 text-[13px] font-bold text-black/80">Company</p>
                <p>사업자 등록 번호 : 697-36-01404</p>
                <p>통신판매업 신고번호 : 제 2024-광주동구-0363호</p>
                <p>사업장 소재지 : 광주광역시 동구 백서로 125번길 34-2, 5층 아이27호</p>
                <p>물류 창고 소재지 : 계약 예정</p>
              </div>

              <div>
                <p className="mb-3 text-[13px] font-bold text-black/80">Contact</p>
                <p>비즈니스 문의 : hologadese@naver.com</p>
                <p>대표번호 : 0507-1350-5806</p>
                <p>카카오채널 : @ourhlds</p>
                <p>운영시간 : 평일 AM 09:00 - PM 06:00</p>
              </div>

              <div className="md:col-span-2">
                <p className="mb-3 text-[13px] font-bold text-black/80">Account</p>
                <p>기업 계좌 1 : 카카오뱅크 3333-31-2546318 [아우어에이치엘디에스]</p>
                <p>기업 계좌 2 : 국민은행 773901-01-613735 [아우어에이치엘디에스]</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-black/10 pt-6 text-[11px] text-black/35 md:flex-row md:items-center md:justify-between">
            <p>Copyright © OUR H.L.D.S(아우어 에이치엘디에스) All Rights Reserved.</p>
            <p>One-person lifestyle company based in Gwangju.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}