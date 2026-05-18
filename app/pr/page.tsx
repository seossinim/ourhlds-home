"use client";

import { useState } from "react";

export default function PRPage() {
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

  const featured = [
    {
      category: "AI SERVICE",
      date: "2026.04",
      title: "홀로알다 AI 감정피드백 기능 개발 및 실적용",
      desc: "1인 가구 커뮤니티 홀로알다에 AI 기반 감정 피드백 기능을 적용하며 서비스 고도화를 진행했습니다.",
      links: [
        ["시민일보", "https://www.siminilbo.co.kr/news/newsview.php?ncode=1160281124101629"],
        ["하이뉴스", "https://www.hinews.co.kr/view.php?ud=202604151643048889dacadeb388_48"],
      ],
    },
    {
      category: "BRAND LAUNCH",
      date: "2025.09",
      title: "온라인 광고 브랜드 OUR SIGNAL 론칭",
      desc: "소상공인과 초기 브랜드를 위한 온라인 광고·마케팅 플랫폼 브랜드 OUR SIGNAL을 선보였습니다.",
      links: [
        ["경상일보", "https://www.ksilbo.co.kr/news/articleView.html?idxno=1035679"],
        ["하이뉴스", "https://www.hinews.co.kr/view.php?ud=202509011535381850b28ba9f00a_48"],
      ],
    },
    {
      category: "LECTURE",
      date: "2024.10",
      title: "GIF 2024 글로벌 이노베이터 페스타 초청 강연",
      desc: "OUR H.L.D.S 서은호 대표가 스타트업 강연 연사로 초청되어 1인 가구 플랫폼과 창업 경험을 공유했습니다.",
      links: [
        ["피앤피뉴스", "https://www.gosiweek.com/article/1065602517139893"],
        ["경상일보", "https://www.ksilbo.co.kr/news/articleView.html?idxno=1012142"],
      ],
    },
  ];

  const pressList = [
    {
      category: "COMPANY",
      date: "2024.07",
      title: "OUR H.L.D.S 기업 설립",
      desc: "홀로 비전 2.0 프로젝트를 기반으로 1인 가구 라이프스타일 스타트업 OUR H.L.D.S를 설립했습니다.",
      media: "경상일보 외",
      url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=1004696",
    },
    {
      category: "CONFERENCE",
      date: "2024.07",
      title: "OUR H.L.D.S 기업 PR 온라인 콘퍼런스 개최",
      desc: "회사 비전과 브랜드 방향성을 소개하는 온라인 PR 콘퍼런스를 진행했습니다.",
      media: "내외경제TV 외",
      url: "https://www.nbntv.co.kr/news/articleView.html?idxno=3022155",
    },
    {
      category: "COMMERCE",
      date: "2024.08",
      title: "1OUR 1인 가구 이커머스 브랜드 정식 런칭",
      desc: "1인 가구 생활에 필요한 제품을 큐레이션하는 라이프스타일 커머스 브랜드 1OUR를 정식 런칭했습니다.",
      media: "경상일보 외",
      url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=1006922",
    },
    {
      category: "MEDIA",
      date: "2025.05",
      title: "위클리 NEWS PICK 신규 콘텐츠 론칭 예고",
      desc: "대표 콘텐츠 IP 확장을 위해 뉴스 큐레이션 기반 콘텐츠 ‘위클리 NEWS PICK’을 선보였습니다.",
      media: "내외경제TV 외",
      url: "https://www.nbntv.co.kr/news/articleView.html?idxno=4000670",
    },
    {
      category: "MEDIA",
      date: "2025.06",
      title: "위클리 NEWS PICK 신규 콘텐츠 론칭 성료",
      desc: "신규 콘텐츠 론칭 이후 브랜드 콘텐츠 운영과 미디어 확장 가능성을 보여주었습니다.",
      media: "경상일보 외",
      url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=1028833",
    },
    {
      category: "STARTUP",
      date: "2025.11",
      title: "코리아 스타트업 포럼 2025 세종 창업 한마당 워크샵 참석",
      desc: "스타트업 생태계 네트워크와 연결하며 사업 확장 기반을 다졌습니다.",
      media: "경상일보 외",
      url: "https://www.ksilbo.co.kr/news/articleView.html?idxno=1041212",
    },
    {
      category: "BOOK",
      date: "2025.12",
      title: "도서 『그대는 찬란하고 예쁘잖아』 정식 출간",
      desc: "대표의 콘텐츠 창작 경험과 감성 브랜딩을 기반으로 한 힐링 에세이를 출간했습니다.",
      media: "내외경제TV 외",
      url: "https://www.nbntv.co.kr/news/articleView.html?idxno=4015095",
    },
    {
      category: "CREATOR",
      date: "2026.02",
      title: "신인 크리에이터 육성 프로젝트 추진",
      desc: "콘텐츠 제작 경험을 기반으로 신인 크리에이터 발굴 및 육성 프로젝트를 추진했습니다.",
      media: "내외경제TV 외",
      url: "https://www.nbntv.co.kr/news/articleView.html?idxno=4018624",
    },
    {
      category: "PARTNERSHIP",
      date: "2026.04",
      title: "스퀘어스 스타트업 지원 프로그램 선정 및 마케팅 협력",
      desc: "스타트업 지원 프로그램에 선정되어 서비스 고도화와 마케팅 협력 기반을 마련했습니다.",
      media: "공식 블로그",
      url: "https://blog.naver.com/ourhldscompany/224245851891",
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
            PR & MEDIA
          </p>

          <h1 className="mt-6 max-w-4xl text-[40px] font-bold leading-[1.12] tracking-[-0.055em] md:text-[68px]">
            OUR H.L.D.S의
            <br />
            활동과 이야기를 전합니다.
          </h1>

          <p className="mt-7 max-w-2xl text-[16px] leading-8 text-black/55">
            언론 보도, 강연, 브랜드 런칭, 콘텐츠 활동을 통해 1인 가구
            라이프스타일 스타트업으로서의 흐름을 만들어가고 있습니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
            FEATURED PR
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featured.map((item) => (
              <article
                key={item.title}
                className="rounded-[34px] border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="rounded-full bg-[#e9fbf1] px-4 py-2 text-[11px] font-bold tracking-[0.18em] text-[#099250]">
                    {item.category}
                  </p>
                  <p className="text-[13px] font-bold text-black/35">{item.date}</p>
                </div>

                <h2 className="mt-6 text-[25px] font-bold leading-tight tracking-[-0.05em]">
                  {item.title}
                </h2>

                <p className="mt-5 text-[14px] leading-7 text-black/55">
                  {item.desc}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {item.links.map(([label, url]) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-black/10 bg-[#f7f8f6] px-4 py-2 text-[12px] font-bold text-black/55 transition hover:border-[#12b76a] hover:text-[#099250]"
                    >
                      {label} →
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
                PRESS RELEASE
              </p>
              <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[54px]">
                주요 언론 보도와
                <br />
                대외 활동.
              </h2>
            </div>

            <p className="max-w-md text-[15px] leading-7 text-black/50">
              회사의 성장 흐름을 보여줄 수 있는 대표 보도와 대외 활동을
              중심으로 정리했습니다.
            </p>
          </div>

          <div className="grid gap-5">
            {pressList.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-5 rounded-[30px] border border-black/10 bg-[#f7f8f6] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:grid-cols-[0.22fr_1fr_0.22fr]"
              >
                <div>
                  <p className="text-[11px] font-bold tracking-[0.2em] text-[#099250]">
                    {item.category}
                  </p>
                  <p className="mt-3 text-[15px] font-bold text-black/40">{item.date}</p>
                </div>

                <div>
                  <h3 className="text-[22px] font-bold leading-tight tracking-[-0.045em] group-hover:text-[#099250]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-black/55">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-col justify-between md:items-end">
                  <p className="text-[13px] font-bold text-black/40">{item.media}</p>
                  <p className="mt-5 text-[13px] font-bold text-[#099250]">
                    Read More →
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
              MEDIA VALUE
            </p>

            <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[52px]">
              콘텐츠와 사업,
              <br />
              브랜드를 연결하는
              <br />
              OUR H.L.D.S의 기록.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Press", "언론 보도를 통해 회사와 서비스의 신뢰도를 쌓습니다."],
              ["Lecture", "강연과 행사 참여로 스타트업 경험을 공유합니다."],
              ["Brand", "1OUR, 홀로알다, OUR SIGNAL의 브랜드 가치를 확장합니다."],
              ["Content", "콘텐츠 제작 경험을 기반으로 사람과 시장을 연결합니다."],
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