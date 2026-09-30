'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowDown, ArrowUp, ArrowUpRight, ChevronRight, Camera, Menu, Play, X } from 'lucide-react'
import { GlobalLanguageSwitcher } from '@/components/global-language-switcher'
import { useGlobalLanguage } from '@/components/global-language-provider'

const homeCopy = {
  ar: {
    nav: ['الرئيسية', 'التجربة', 'المعرض', 'تواصل معنا'], heroEyebrow: 'ABHA SAUDI LOUNGE — تجربة مختلفة', heroTitle: <>حيث تلتقي<br /><em>الثقافة السعودية</em><br />بالروح المصرية</>, heroCopy: 'مساحة تجمع دفء الضيافة، تفاصيل الثقافة، ولحظات تستحق أن تُعاش.', experienceCta: 'عيش التجربة', galleryCta: 'شاهد المعرض', scroll: 'اسحب للاستكشاف', location: 'أبها، السعودية', storyLabel: 'قصتنا البصرية', storyTitle: <>دفءٌ يُرى.<br /><span>وثقافةٌ تُعاش.</span></>, storyLead: 'في أبها، نخلق مساحة تتجاوز فكرة المكان. هنا تلتقي تفاصيل الثقافة السعودية بكرم الروح المصرية، في تجربة حسية هادئة، معاصرة، ومليئة بالحياة.', storyBody: 'كل زاوية تحكي جزءاً من الحكاية — من الضوء والمواد، إلى القهوة واللقاء. مكان للجلوس، للتأمل، ولصناعة لحظة مختلفة.', stayClose: 'خلّك قريب', atmosphere: 'أجواء أبها', menuLabel: 'القائمة', menuTitle: <>نكهاتٌ<br /><span>تجمعنا.</span></>, menuBody: 'اكتشف قائمة أبها — اختيارات صُممت لترافق وقتك، وتكمل تفاصيل تجربتك.', menuCta: 'تعال جرّب', menuNote: <>طعمٌ من<br />كل مكان</>, galleryLabel: 'من أجواء أبها', galleryTitle: <>لحظات<br /><span>تُحفظ.</span></>, galleryBody: 'لقطات من عالمنا، كما نراه ونعيشه.', madeFor: 'صُنع للقاء', contactLabel: 'تواصل معنا', contactTitle: <>نلتقي<br /><span>قريباً.</span></>, contactBody: 'تابع جديد أبها وأجواءنا اليومية عبر منصاتنا الاجتماعية.', footer: 'حيث تلتقي الثقافة السعودية بالروح المصرية', footerSub: '….تجربة مختلفة تنتظرك', backTop: 'العودة للأعلى', bottom: ['الرئيسية', 'القائمة', 'التجربة', 'تواصل']
  },
  en: {
    nav: ['Home', 'Experience', 'Gallery', 'Contact'], heroEyebrow: 'ABHA SAUDI LOUNGE — A different experience', heroTitle: <>Where Saudi<br /><em>culture meets</em><br />Egyptian soul</>, heroCopy: 'A warm lounge for generous hospitality, cultural details, and moments worth lingering over.', experienceCta: 'Experience it', galleryCta: 'View the gallery', scroll: 'Scroll to explore', location: 'Abha, Saudi Arabia', storyLabel: 'Our visual story', storyTitle: <>Warmth you can see.<br /><span>Culture you can feel.</span></>, storyLead: 'At ABHA, we create more than a place. Saudi cultural details meet the generosity of the Egyptian spirit in a calm, contemporary experience full of life.', storyBody: 'Every corner tells part of the story — from light and materials to coffee and conversation. A place to sit, reflect, and make a different kind of moment.', stayClose: 'Stay close', atmosphere: 'Abha atmosphere', menuLabel: 'The menu', menuTitle: <>Flavours<br /><span>that bring us together.</span></>, menuBody: 'Explore ABHA’s menu — made to accompany your time and complete the experience.', menuCta: 'Try the menu', menuNote: <>A taste from<br />everywhere</>, galleryLabel: 'From ABHA', galleryTitle: <>Moments<br /><span>worth keeping.</span></>, galleryBody: 'A few frames from the world we see and live in.', madeFor: 'Made for gathering', contactLabel: 'Contact us', contactTitle: <>See you<br /><span>soon.</span></>, contactBody: 'Follow ABHA for new moments and daily lounge atmosphere.', footer: 'Where Saudi culture meets Egyptian soul', footerSub: '….a different kind of experience awaits', backTop: 'Back to top', bottom: ['Home', 'Menu', 'Experience', 'Contact']
  }
} as const

const demoAssets = {
  hero: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=85',
  hospitality: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=85',
  coffee: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=85',
  gathering: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85',
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-logo-frame ${compact ? 'brand-logo-frame--compact' : ''}`}>
      <img className="brand-logo" src="/abha-logo.png" alt="ABHA Saudi Lounge" />
    </span>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const { language } = useGlobalLanguage()
  const t = homeCopy[language]
  const links = t.nav.map((label, index) => [label, ['#home', '#experience', '#gallery', '#contact'][index]] as const)
  return (
    <header className="site-header">
      <a href="#home" className="header-logo"><Logo /></a>
      <nav className="desktop-nav" aria-label={language === 'ar' ? 'التنقل الرئيسي' : 'Primary navigation'}>
        {links.map(([label, href], index) => <a className={index === 0 ? 'active' : ''} href={href} key={href}>{label}</a>)}
      </nav>
      <div className="header-actions"><GlobalLanguageSwitcher /><Link href="/menu" className="header-cta">{t.menuCta} <ArrowUpRight aria-hidden="true" /></Link></div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}<ChevronRight /></a>)}
        <Link className="mobile-nav-cta" href="/menu" onClick={() => setOpen(false)}>{t.menuCta} <ArrowUpRight /></Link>
      </nav>}
    </header>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label"><span />{children}</p>
}

function HomePage() {
  const { language } = useGlobalLanguage()
  const t = homeCopy[language]
  return <main>
    <section id="home" className="hero">
      <div className="hero-image" role="img" aria-label="داخل صالة أبها السعودية" style={{ backgroundImage: `url(${demoAssets.hero})` }} />
      <div className="hero-shade" />
      <Header />
      <div className="hero-content">
        <p className="eyebrow">{t.heroEyebrow}</p>
        <h1>{t.heroTitle}</h1>
        <p className="hero-copy">{t.heroCopy}</p>
        <div className="hero-actions"><a className="button button-primary" href="#experience">{t.experienceCta} <ArrowUpRight /></a><a className="text-link" href="#gallery">{t.galleryCta} <Play /></a></div>
      </div>
      <div className="hero-footer"><span>01 / 01</span><span className="scroll-cue"><ArrowDown /> {t.scroll}</span><span>{t.location} <i /></span></div>
    </section>

    <section id="experience" className="story section-shell">
      <div className="story-heading"><SectionLabel>{t.storyLabel}</SectionLabel><h2>{t.storyTitle}</h2></div>
      <div className="story-copy"><p className="lead">{t.storyLead}</p><p>{t.storyBody}</p><a href="#contact" className="underlined-link">{t.stayClose} <ArrowUpRight /></a></div>
    </section>

    <section className="image-break" aria-label={t.atmosphere} style={{ backgroundImage: `url(${demoAssets.gathering})` }}><div className="image-break-overlay" /><div className="image-break-caption"><span>01</span><p>Atmosphere<br /><strong>{t.atmosphere}</strong></p></div></section>

    <section id="menu" className="menu-feature section-shell">
      <div className="menu-copy"><SectionLabel>{t.menuLabel}</SectionLabel><h2>{t.menuTitle}</h2><p>{t.menuBody}</p><Link className="button button-dark" href="/menu">{t.menuCta} <ArrowUpRight /></Link></div>
      <div className="menu-art"><div className="menu-circle"><span>ABHA</span><small>SAUDI LOUNGE</small></div><div className="menu-note">{t.menuNote}</div></div>
    </section>

    <section id="gallery" className="gallery-section">
      <div className="section-shell gallery-head"><div><SectionLabel>{t.galleryLabel}</SectionLabel><h2>{t.galleryTitle}</h2></div><p>{t.galleryBody}</p></div>
      <div className="gallery-grid"><div className="gallery-tall" style={{ backgroundImage: `url(${demoAssets.hospitality})` }} /><div className="gallery-small gallery-small-one" style={{ backgroundImage: `url(${demoAssets.hero})` }} /><div className="gallery-small gallery-small-two" style={{ backgroundImage: `url(${demoAssets.coffee})` }} /><div className="gallery-wide"><span>{t.madeFor}</span><strong>{t.madeFor}</strong></div></div>
    </section>

    <section id="contact" className="contact section-shell"><div><SectionLabel>{t.contactLabel}</SectionLabel><h2>{t.contactTitle}</h2></div><div className="contact-info"><p>{t.contactBody}</p><a href="https://www.instagram.com/abhasaudilounge" target="_blank" rel="noreferrer" className="social-link"><Camera /> @abhasaudilounge <ArrowUpRight /></a><a href="https://www.tiktok.com/@abha.saudi.lounge" target="_blank" rel="noreferrer" className="social-link">TikTok <span>@abha.saudi.lounge</span> <ArrowUpRight /></a></div></section>

    <footer className="footer"><Logo compact /><div className="footer-center">{t.footer}<span>{t.footerSub}</span></div><div className="footer-bottom"><span>© ABHA SAUDI LOUNGE</span><span>Instagram&nbsp;&nbsp; TikTok</span><a href="#home">{t.backTop} <ArrowUp /></a></div></footer>
    <div className="mobile-bottom-nav"><a href="#home">{t.bottom[0]}</a><Link href="/menu">{t.bottom[1]}</Link><a href="#experience">{t.bottom[2]}</a><a href="#contact">{t.bottom[3]}</a></div>
  </main>
}

export default function Page() { return <HomePage /> }
