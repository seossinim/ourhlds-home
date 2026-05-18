"use client";

import { useState } from "react";
import Image from "next/image";

export default function BusinessPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([0, 0, 0]);

  const navItems = [
    { name: "Business", href: "/business" },
    { name: "CEO", href: "/ceo" },
    { name: "PR", href: "/pr" },
    { name: "History", href: "/history" },
    { name: "CI", href: "/ci" },
    { name: "Partners", href: "/partners" },
    { name: "IR", href: "/ir" },
  ];

  const businesses = [
    {
      name: "1OUR",
      type: "Lifestyle Commerce",
      title: "1인 가구의 생활을 더 편하게 만드는 커머스",
      desc: "혼자 사는 사람에게 필요한 제품을 기획하고, 유통하고, 판매합니다. 단순 판매가 아니라 생활 장면에 맞는 제품과 콘텐츠를 함께 제안합니다.",
      points: [
        "생활용품 큐레이션",
        "1인 가구 맞춤 상품",
        "스마트스토어 운영",
        "앰버서더 콘텐츠 연계",
      ],
      images: [
        "/images/1our/1.png",
        "/images/1our/2.png",
        "/images/1our/3.png",
        "/images/1our/4.png",
      ],
    },
    {
      name: "홀로알다",
      type: "Community Platform",
      title: "혼자 사는 사람들의 이야기가 모이는 커뮤니티",
      desc: "1인 가구가 겪는 외로움, 생활 고민, 감정, 정보들을 익명으로 나눌 수 있는 커뮤니티 플랫폼입니다.",
      points: [
        "익명 커뮤니티",
        "AI 감정 피드백",
        "생활 정보 공유",
        "1인 가구 데이터 기반",
      ],
      images: [
        "/images/holoalda/1.png",
        "/images/holoalda/2.png",
        "/images/holoalda/3.png",
        "/images/holoalda/4.png",
      ],
    },
    {
      name: "OUR SIGNAL",
      type: "Marketing Platform",
      title: "온라인 광고와 마케팅을 더 쉽게 연결하는 플랫폼",
      desc: "소상공인, 1인 사업자, 초기 브랜드가 복잡한 계약 없이 필요한 광고와 마케팅을 요청하고 실행할 수 있도록 돕습니다.",
      points: [
        "광고 요청 시스템",
        "AI 기반 분석",
        "마케터 매칭",
        "결과 리포트",
      ],
      images: [
        "/images/oursignal/1.png",
        "/images/oursignal/2.png",
        "/images/oursignal/3.png",
        "/images/oursignal/4.png",
      ],
    },
  ];

  const videos = [
    {
      brand: "1OUR",
      title: "1OUR 홍보 CF형 영상",
      videoId: "8IoI25x7vVI",
    },
    {
      brand: "홀로알다",
      title: "홀로알다 CF형 영상",
      videoId: "3OgZoTvQiJs",
    },
    {
      brand: "OUR SIGNAL",
      title: "OUR SIGNAL 홍보 CF형 영상",
      videoId: "vfG7zJq-hpU",
    },
  ];

  const changeImage = (businessIndex: number, imageIndex: number) => {
    setActiveImages((prev) => {
      const next = [...prev];
      next[businessIndex] = imageIndex;
      return next;
    });
  };

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
            BUSINESS AREA
          </p>

          <h1 className="mt-6 max-w-4xl text-[40px] font-bold leading-[1.12] tracking-[-0.055em] md:text-[68px]">
            1인 가구의 삶에서
            <br />
            비즈니스의 기회를 찾습니다.
          </h1>

          <p className="mt-7 max-w-2xl text-[16px] leading-8 text-black/55">
            OUR H.L.D.S는 제품 기획, 유통, 판매, 커뮤니티, 플랫폼, 온라인
            광고를 하나의 흐름으로 연결합니다.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
            OUR BUSINESS
          </p>

          <div className="mt-10 grid gap-10">
            {businesses.map((business, businessIndex) => (
              <article
                key={business.name}
                className="grid gap-8 rounded-[36px] border border-black/10 bg-white/70 p-7 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 lg:grid-cols-[0.95fr_1.05fr] lg:p-10"
              >
                <div>
                  <p className="text-[11px] font-bold tracking-[0.24em] text-[#099250]">
                    0{businessIndex + 1} · {business.type}
                  </p>

                  <h2 className="mt-5 text-[42px] font-bold tracking-[-0.06em]">
                    {business.name}
                  </h2>

                  <h3 className="mt-6 text-[28px] font-bold leading-tight tracking-[-0.05em] md:text-[38px]">
                    {business.title}
                  </h3>

                  <p className="mt-6 max-w-2xl text-[15px] leading-8 text-black/55">
                    {business.desc}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {business.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-black/10 bg-white px-5 py-4 text-[14px] font-semibold text-black/65"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="overflow-hidden rounded-[30px] border border-black/10 bg-[#111] p-3 shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-black">
                      <Image
                        src={business.images[activeImages[businessIndex]]}
                        alt={`${business.name} preview`}
                        fill
                        priority={businessIndex === 0}
                        className="object-cover transition duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {business.images.map((image, imageIndex) => (
                      <button
                        key={image}
                        onClick={() => changeImage(businessIndex, imageIndex)}
                        className={`overflow-hidden rounded-2xl border bg-black p-1 transition duration-300 hover:-translate-y-1 ${
                          activeImages[businessIndex] === imageIndex
                            ? "border-[#12b76a]"
                            : "border-black/10 opacity-55 hover:opacity-100"
                        }`}
                      >
                        <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                          <Image
                            src={image}
                            alt={`${business.name} thumbnail ${
                              imageIndex + 1
                            }`}
                            fill
                            className="object-cover"
                            sizes="120px"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold tracking-[0.28em] text-[#099250]">
                BRAND VIDEO
              </p>
              <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[54px]">
                브랜드를 보여주는
                <br />
                세 개의 짧은 장면.
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-7 text-black/50">
              1OUR, 홀로알다, OUR SIGNAL의 방향성을 영상으로 보여줍니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {videos.map((video) => (
              <article
                key={video.videoId}
                className="overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-sm"
              >
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="p-6">
                  <p className="text-[11px] font-bold tracking-[0.24em] text-[#099250]">
                    {video.brand}
                  </p>
                  <h3 className="mt-3 text-[21px] font-bold tracking-[-0.04em]">
                    {video.title}
                  </h3>
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
              BUSINESS PORTFOLIO
            </p>
            <h2 className="mt-4 text-[34px] font-bold leading-tight tracking-[-0.055em] md:text-[52px]">
              우리는 직접 운영하고,
              <br />
              직접 연결합니다.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Commerce Operation", "스마트스토어와 브랜드 상품 운영"],
              ["Community Building", "1인 가구 커뮤니티와 감정 기반 서비스"],
              ["Content IP", "대표 IP와 브랜드 콘텐츠 제작"],
              ["Marketing Platform", "소상공인·초기 브랜드 광고 플랫폼"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-[26px] border border-white/10 bg-white/[0.05] p-6"
              >
                <p className="text-[18px] font-bold tracking-[-0.04em]">
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