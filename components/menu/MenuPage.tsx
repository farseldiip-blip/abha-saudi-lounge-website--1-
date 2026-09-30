'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { GlobalLanguageSwitcher } from '@/components/global-language-switcher'
import { useGlobalLanguage } from '@/components/global-language-provider'
import { getMenuItems, menuCategories, menuHeroImage, menuNotice, type MenuItem } from './menu-data'

const copy = {
  ar: { brandHome: 'العودة إلى الرئيسية', navLabel: 'روابط القائمة', experience: 'التجربة', gallery: 'المعرض', contact: 'تواصل معنا', home: 'الرئيسية', heroEyebrow: 'ABHA SAUDI LOUNGE — قائمة تجريبية', heroTitle: 'المينيو', heroCopy: 'شوف اللي على مزاجك، وخلي القعدة تاخد وقتها.', categories: 'تصنيفات القائمة', empty: 'لسه بنحضّر اختيارات هذا القسم.', footer: 'حيث تلتقي الثقافة السعودية بالروح المصرية', footerSub: '….تجربة مختلفة تنتظرك', demoItem: 'صنف تجريبي', close: 'إغلاق', stayClose: 'خلّك قريب', language: 'اللغة', languageAr: 'العربية', languageEn: 'EN' },
  en: { brandHome: 'Back to home', navLabel: 'Menu links', experience: 'The experience', gallery: 'Gallery', contact: 'Contact', home: 'Home', heroEyebrow: 'ABHA SAUDI LOUNGE — DEMO MENU', heroTitle: 'The menu', heroCopy: 'Take your time, find your mood, and settle in.', categories: 'Menu categories', empty: 'We are still preparing something for this category.', footer: 'Where Saudi culture meets Egyptian soul', footerSub: '….a different kind of experience awaits', demoItem: 'DEMO ITEM', close: 'Close', stayClose: 'Stay close', language: 'Language', languageAr: 'العربية', languageEn: 'EN' },
} as const

export default function MenuPage() {
  const { language, isArabic } = useGlobalLanguage()
  const [category, setCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const t = copy[language]
  const items = getMenuItems(category)
  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedItem])

  return (
    <div className="abha-menu-page" dir={isArabic ? 'rtl' : 'ltr'} lang={language}>
      <header className="abha-menu-page__header">
        <a className="abha-menu-page__brand" href="/" aria-label={t.brandHome}><span className="abha-menu-page__logo-frame"><img className="abha-menu-page__logo" src="/abha-logo.png" alt="ABHA Saudi Lounge" /></span></a>
        <nav className="abha-menu-page__nav" aria-label={t.navLabel}><a href="/#experience">{t.experience}</a><a href="/#gallery">{t.gallery}</a><a href="/#contact">{t.contact}</a></nav>
        <div className="abha-menu-page__header-actions"><GlobalLanguageSwitcher /><a className="abha-menu-page__home-link" href="/"><ChevronLeft aria-hidden="true" /> {t.home}</a></div>
      </header>

      <section className="abha-menu-page__hero" aria-labelledby="menu-title"><div className="abha-menu-page__hero-image" style={{ backgroundImage: `url(${menuHeroImage})` }} role="img" aria-label={isArabic ? 'أجواء لاونج دافئة' : 'Warm lounge atmosphere'} /><div className="abha-menu-page__hero-shade" /><div className="abha-menu-page__hero-content"><p className="abha-menu-page__eyebrow">{t.heroEyebrow}</p><h1 id="menu-title">{t.heroTitle}</h1><p className="abha-menu-page__hero-copy">{t.heroCopy}</p></div></section>

      <main className="abha-menu-page__main"><p className="abha-menu-page__notice">{menuNotice[language]}</p><nav className="abha-menu-page__categories" aria-label={t.categories}>{menuCategories.map((item) => <button key={item.id} type="button" className={`abha-menu-page__category ${category === item.id ? 'abha-menu-page__category--active' : ''}`} onClick={() => setCategory(item.id)} aria-pressed={category === item.id}>{item.label[language]}</button>)}</nav>{items.length ? <div className="abha-menu-page__grid">{items.map((item) => <button key={item.id} type="button" className="abha-menu-page__card" onClick={() => setSelectedItem(item)} aria-label={`${isArabic ? 'عرض تفاصيل' : 'View details'} ${item.name[language]}`}><div className="abha-menu-page__card-image"><img src={item.image} alt="" loading="lazy" /></div><span className="abha-menu-page__card-info"><strong className="abha-menu-page__card-title">{item.name[language]}</strong><span className="abha-menu-page__card-price">{item.price[language]}</span></span><span className="abha-menu-page__card-description">{item.description[language]}</span></button>)}</div> : <p className="abha-menu-page__empty">{t.empty}</p>}</main>

      <footer className="abha-menu-page__footer">{t.footer}<span>{t.footerSub}</span></footer>

      {selectedItem && <div className="abha-menu-page__modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setSelectedItem(null) }}><div className="abha-menu-page__modal" role="dialog" aria-modal="true" aria-labelledby="menu-item-title"><button className="abha-menu-page__modal-close" type="button" onClick={() => setSelectedItem(null)} aria-label={t.close}><X /></button><div className="abha-menu-page__modal-image"><img src={selectedItem.image} alt="" /></div><div className="abha-menu-page__modal-copy"><p className="abha-menu-page__eyebrow">{t.demoItem}</p><h2 id="menu-item-title">{selectedItem.name[language]}</h2><p>{selectedItem.description[language]}</p><strong className="abha-menu-page__modal-price">{selectedItem.price[language]}</strong><a className="abha-menu-page__home-link" href="/#contact" onClick={() => setSelectedItem(null)}>{t.stayClose} <ArrowUpRight /></a></div></div></div>}
    </div>
  )
}
