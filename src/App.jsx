import { useEffect, useRef, useState } from 'react'
import logo from './assets/logo.png'
import header from './assets/header.jpg'
import xlogo from './assets/xlogo.png'

const content = {
  fa: {
    dir: 'rtl',
    htmlLang: 'fa',
    brandTop: '',
    brand: 'جبهه شیر و خورشید ایتالیا',
    navHome: 'صفحه اصلی',
    navStatement: 'بیانیه',
    navFounders: 'بنیان‌گذاران',
    navContact: 'ارتباط',
    heroBadge: 'بیانیه اعلام موجودیت',
    heroTitle: 'آغاز فعالیت جبهه شیر و خورشید ایتالیا',
    heroText: 'گامی بلند در جهت سازمان‌دهی فعالیت‌های دیاسپورای ایرانیان در ایتالیا',
    statementTitle: 'بیانیه اعلام موجودیت',
    paragraphs: [
      'هم‌میهنان عزیز؛',
      'ما، جمعی متکثر از فعالین سیاسی، دانشجویان و دانش‌آموختگان مقیم ایتالیا، با در نظر گرفتن شرایط خطیر و تاریخی میهنمان، بر آن شدیم تا با تشکیل «جبهه شیر و خورشید ایتالیا»، گامی بلند در جهت سازمان‌دهی فعالیت‌های دیاسپورای ایرانیان در ایتالیا برداریم؛ و بدین‌وسیله آغاز فعالیت این جبهه را اعلام می‌نماییم.',
      'تحولات اجتماعی و سیاسی ایران در سال‌های گذشته نشان داده است که نقش نیروهای ملی، آگاه و مسئول، به‌ویژه نسل جوان، در شکل‌گیری مسیر آینده کشور تعیین‌کننده بوده و خواهد بود. در چنین شرایطی، ضرورت ایجاد بستری منسجم برای همفکری و اقدام‌های موثر جمعی بیش از پیش احساس می‌شود.',
      'ما با تاکید بر نقش تاریخی و رهبری شاهزاده رضا پهلوی، تلاش خواهیم کرد تا با گردهم‌آوردن ایرانیان دغدغه‌مند در ایتالیا، زیر چتر فراگیر این سازمان، نقشی موثر در پیشبرد مطالبات آزادی‌خواهانه ملت ایران در این کشور ایفا کنیم.',
      'فعالیت «جبهه شیر و خورشید ایتالیا» که همزمان با نوروز ۲۵۸۵ شاهنشاهی و زادروز پیام‌آور مهر و هویت ایرانی، آشو زرتشت، اعلام موجودیت می‌کند، مبتنی بر چهار اصل خلل‌ناپذیر اعلامی از سوی شاهزاده رضا پهلوی است و این جبهه خود را بخشی از سازوکار همکاری ملی و پشتیبان «سامانه گذار» می‌داند.',
      'ما خود را متعهد به اصول بنیادین ملی‌گرایی، پایبندی به کنش دموکراتیک، شفافیت و گفت‌وگو محوری میدانیم؛ و بر صداقت، پاسخ‌گویی، شایسته‌سالاری و پرهیز از هرگونه تبعیض و رفتار انحصارطلبانه تاکید داریم.',
      'در پایان، از تمامی ایرانیان مقیم ایتالیا - از کنشگران و دانشجویان، تا پژوهشگران و جوانان علاقه‌مند - صمیمانه دعوت می‌کنیم تا با پیوستن به جبهه شیر و خورشید، در مسیر ساختن آینده‌ای مبتنی بر آزادی، پیشرفت و اراده‌ی جمعی برای ایران عزیزمان، همراه شوند.',
      'به امید آنکه این آخرین تلاش ما برای سازماندهی نیروهای ملی در تبعید باشد و آزادی میهنمان، مسیر بازگشت تمام ایرانیان در تبعید را به سرزمین مادری فراهم سازد.'
    ],
    closingA: 'پاینده ایران',
    closingB: 'جاوید شاه',
    foundersTitle: 'بنیان‌گذاران جبهه شیر و خورشید ایتالیا',
    foundersNote: 'به‌ترتیب حروف الفبا',
    founders: [
      'آندره ماری رهبر',
      'آریا آذرمهر',
      'آیسان احمدی',
      'امیرسالار خسروی',
      'بهنام صفایی',
      'پرنیا قناتی',
      'توسکا جهاندیده',
      'دارا کامیار',
      'داریوش ناطقی',
      'زهره پاک زاد',
      'شاهین قدسی',
      'شایان عباسیان (آزاد)',
      'فریبا کریمی',
      'مریم پزشکی'
    ],
    contactTitle: 'ارتباط با ما',
    contactText: 'برای ارتباط رسانه‌ای، همکاری و عضویت، از همین بخش با ما در تماس باشید.',
    footer: '© 2026 جبهه شیر و خورشید ایتالیا',
    langLabel: 'فارسی'
  },
  en: {
    dir: 'ltr',
    htmlLang: 'en',
    brandTop: '',
    brand: 'Lion and Sun Front Italy',
    navHome: 'Home',
    navStatement: 'Statement',
    navFounders: 'Founders',
    navContact: 'Contact',
    heroBadge: 'Founding Statement',
    heroTitle: 'Launch of the Lion and Sun Front Italy',
    heroText: 'A major step toward organizing the activities of the Iranian diaspora in Italy',
    statementTitle: 'Founding Statement',
    paragraphs: [
      'Dear compatriots,',
      'We, a diverse group of political activists, students, and graduates residing in Italy, in view of the grave and historic conditions of our homeland, have decided to establish the “Lion and Sun Front Italy” in order to take a major step toward organizing the activities of the Iranian diaspora in Italy; and hereby announce the beginning of this front’s activities.',
      'The social and political developments in Iran in recent years have shown that the role of national, aware, and responsible forces, especially the younger generation, has been and will remain decisive in shaping the future course of the country. Under such circumstances, the need for a coherent platform for collective reflection and effective action is felt more strongly than ever.',
      'With emphasis on the historic role and leadership of Crown Prince Reza Pahlavi, we will strive to bring together concerned Iranians in Italy under the broad umbrella of this organization and to play an effective role in advancing the freedom-seeking demands of the Iranian nation in this country.',
      'The activities of the “Lion and Sun Front Italy,” which declares its establishment simultaneously with Nowruz 2585 of the Imperial calendar and the birth anniversary of Asho Zartosht, the herald of Iranian identity and affection, are founded on the four inviolable principles announced by Crown Prince Reza Pahlavi. This front also considers itself part of the framework of national cooperation and a supporter of the “Transition Platform.”',
      'We regard ourselves as committed to the fundamental principles of nationalism, democratic action, transparency, and dialogue; and we emphasize honesty, accountability, meritocracy, and the rejection of all forms of discrimination and monopolistic behavior.',
      'In conclusion, we sincerely invite all Iranians residing in Italy — from activists and students to researchers and interested young people — to join the Lion and Sun Front and stand with us in building a future for our beloved Iran based on freedom, progress, and collective will.',
      'We hope this will be our last effort to organize national forces in exile, and that the liberation of our homeland will pave the way for the return of all exiled Iranians to their motherland.'
    ],
    closingA: 'Long live Iran',
    closingB: 'Javid Shah',
    foundersTitle: 'Founders of the Lion and Sun Front Italy',
    foundersNote: 'Alphabetical order',
    founders: [
      'Amirsalar Khosravi',
      'André M. Rahbar',
      'Ariya Azarmehr',
      'Aysan Ahmadi',
      'Behnam Safayi',
      'Dara Kamyar',
      'Daryoush Nateghi',
      'Fariba Karimi',
      'Maryam Pezeshki',
      'Parniya Ghanati',
      'Shahin Ghodsi',
      'Shayan Abbasian (Azad)',
      'Tooska Jahandideh',
      'Zohreh Pakzad'
    ],
    contactTitle: 'Contact',
    contactText: 'For media inquiries, collaboration, and membership, connect with us here.',
    footer: '© 2026 Lion and Sun Front Italy',
    langLabel: 'English'
  }
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="1" className="icon-fill" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
      <path d="M3 7.5C3 6.67 3.67 6 4.5 6h15c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-15C3.67 18 3 17.33 3 16.5v-9Z" />
      <path d="m4 8 8 5 8-5" />
    </svg>
  )
}

function XIconImage() {
  return <img src={xlogo} alt="X" className="x-logo-image" />
}

function App() {
  const [lang, setLang] = useState('fa')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const langRef = useRef(null)
  const headerRef = useRef(null)
  const t = content[lang]
  const statementRef = useRef(null)
  const foundersRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.documentElement.dir = t.dir
  }, [t])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const sections = ['home', 'statement', 'founders', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        root: null,
        rootMargin: '-140px 0px -70% 0px',
        threshold: [0.1, 0.2, 0.35, 0.5]
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const switchLanguage = (nextLang) => {
    setLang(nextLang)
    setMenuOpen(false)
  }

  const scrollToSection = (id) => {
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0
  
    const targetMap = {
      home: document.getElementById('home'),
      statement: statementRef.current,
      founders: foundersRef.current,
      contact: contactRef.current
    }
  
    const target = targetMap[id]
    if (!target) return
  
    const top = window.scrollY + target.getBoundingClientRect().top - headerHeight
  
    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  }

  const handleNavClick = (event, id) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <div className={`site-root ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap');

        :root {
          color-scheme: light;
          --surface: rgba(255, 255, 255, 0.8);
          --text: #0f172a;
          --muted: #475569;
          --muted-2: #64748b;
          --gold: #c79a37;
          --shadow-xl: 0 30px 80px rgba(2, 12, 27, 0.16);
          --shadow-lg: 0 18px 50px rgba(15, 23, 42, 0.1);
          --container: 1280px;
        }

        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background:
            radial-gradient(circle at top left, rgba(199, 154, 55, 0.08), transparent 26%),
            radial-gradient(circle at top right, rgba(37, 99, 235, 0.06), transparent 22%),
            linear-gradient(180deg, #f8fbff 0%, #eef4fb 40%, #e8eff8 100%);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button, input, textarea, select {
          font: inherit;
        }

        .site-root {
          min-height: 100vh;
          color: var(--text);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          position: relative;
          overflow: hidden;
        }

        .site-root::before,
        .site-root::after {
          content: "";
          position: fixed;
          pointer-events: none;
          z-index: 0;
          filter: blur(72px);
          opacity: 0.46;
        }

        .site-root::before {
          width: 320px;
          height: 320px;
          top: -60px;
          left: -70px;
          background: rgba(199, 154, 55, 0.13);
        }

        .site-root::after {
          width: 360px;
          height: 360px;
          top: 180px;
          right: -90px;
          background: rgba(59, 130, 246, 0.1);
        }

        .site-root.rtl,
        .site-root.rtl .brand-title,
        .site-root.rtl .hero-title,
        .site-root.rtl .hero-text,
        .site-root.rtl .statement-title,
        .site-root.rtl .statement-body,
        .site-root.rtl .contact-title,
        .site-root.rtl .contact-text,
        .site-root.rtl .nav-link,
        .site-root.rtl .lang-button,
        .site-root.rtl .lang-menu button,
        .site-root.rtl .hero-badge,
        .site-root.rtl .brand-top,
        .site-root.rtl .founder-name,
        .site-root.rtl .section-kicker,
        .site-root.rtl .founders-grid-title,
        .site-root.rtl .founders-note {
          font-family: "Noto Naskh Arabic", Tahoma, serif;
        }

        .page-layer {
          position: relative;
          z-index: 1;
        }

        .container {
          width: min(var(--container), calc(100% - 32px));
          margin: 0 auto;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 90;
          background: rgba(255, 255, 255, 0.76);
          backdrop-filter: blur(18px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.72);
          box-shadow: 0 8px 28px rgba(15, 23, 42, 0.05);
        }

        .topbar::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(199, 154, 55, 0.55), transparent);
        }

        .topbar-inner {
          min-height: 118px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 10px 0;
        }

        .brand-wrap {
          display: flex;
          align-items: center;
          gap: 18px;
          min-width: 0;
          flex: 1 1 auto;
        }

        .brand-logo {
          width: 158px;
          height: 158px;
          flex: 0 0 auto;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .brand-copy {
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .brand-top {
          margin: 0 0 8px;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-weight: 900;
          color: #64748b;
          white-space: nowrap;
        }

        .brand-title {
          margin: 0;
          font-size: clamp(20px, 1.8vw, 28px);
          line-height: 1.06;
          font-weight: 900;
          color: #071223;
          white-space: nowrap;
        }

        .nav-group {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: nowrap;
          flex: 0 0 auto;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(255,255,255,0.74);
          box-shadow: 0 10px 28px rgba(15,23,42,0.06);
          backdrop-filter: blur(14px);
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 16px;
          border-radius: 999px;
          color: #13233f;
          font-size: 15px;
          font-weight: 800;
          white-space: nowrap;
          transition: 180ms ease;
          cursor: pointer;
        }

        .nav-link:hover {
          background: rgba(15,23,42,0.06);
          color: #08172d;
        }

        .nav-link.active-nav {
          background: linear-gradient(135deg, #0b1d37 0%, #11335f 100%);
          color: #ffffff;
          box-shadow: 0 10px 24px rgba(8, 23, 45, 0.18);
        }

        .lang-dropdown {
          position: relative;
          min-width: 132px;
        }

        .lang-button {
          border: 1px solid rgba(255,255,255,0.26);
          background: linear-gradient(135deg, #0a203d 0%, #133c70 65%, #1a4b8a 100%);
          color: #fff;
          box-shadow: 0 16px 34px rgba(8, 23, 45, 0.22);
          border-radius: 18px;
          padding: 12px 16px;
          width: 132px;
          height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          font-size: 15px;
          font-weight: 900;
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }

        .lang-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 20px 40px rgba(8, 23, 45, 0.28);
          background: linear-gradient(135deg, #0c2647 0%, #15457f 65%, #20579d 100%);
        }

        .lang-caret {
          width: 10px;
          height: 10px;
          border-right: 2px solid currentColor;
          border-bottom: 2px solid currentColor;
          transform: rotate(45deg);
          margin-top: -3px;
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .lang-button[aria-expanded="true"] .lang-caret {
          transform: rotate(225deg);
          margin-top: 3px;
        }

        .lang-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          right: 0;
          width: 100%;
          min-width: 100%;
          padding: 8px;
          border-radius: 18px;
          background: rgba(255,255,255,0.97);
          border: 1px solid rgba(255,255,255,0.88);
          box-shadow: 0 22px 42px rgba(15,23,42,0.16);
          backdrop-filter: blur(18px);
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease;
          overflow: hidden;
        }

        .lang-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .lang-menu button {
          width: 100%;
          border: 0;
          background: transparent;
          text-align: inherit;
          padding: 12px 14px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          color: #0f172a;
          transition: background 180ms ease;
        }

        .lang-menu button:hover,
        .lang-menu button.active-lang {
          background: rgba(15,23,42,0.06);
        }

        .hero-shell {
          position: relative;
          min-height: 720px;
          border-radius: 42px;
          overflow: hidden;
          isolation: isolate;
          box-shadow: var(--shadow-xl);
          background: #0b1a33;
          border: 1px solid rgba(255,255,255,0.18);
        }

        .hero-image,
        .hero-overlay,
        .hero-glow {
          position: absolute;
          inset: 0;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transform: scale(1.01);
          opacity: 0.9;
          filter: saturate(1.02) contrast(1.01);
        }

        .hero-overlay {
          background:
            linear-gradient(180deg, rgba(5,15,32,0.04) 0%, rgba(5,15,32,0.1) 38%, rgba(5,15,32,0.34) 100%);
        }

        .hero-glow {
          background:
            radial-gradient(circle at 78% 18%, rgba(255,255,255,0.12), transparent 20%),
            radial-gradient(circle at 18% 30%, rgba(255,255,255,0.06), transparent 24%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          min-height: 720px;
          display: flex;
          align-items: flex-end;
          padding: 0 48px 34px;
        }

        .hero-copy {
          width: min(680px, 100%);
          text-align: left;
          padding: 16px 20px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015));
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.08);
          animation: floatCard 5.2s ease-in-out infinite;
        }

        .rtl .hero-copy {
          text-align: right;
          margin-left: auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(6px);
          color: #fff;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 10px;
          box-shadow: 0 8px 22px rgba(0,0,0,0.06);
        }

        .hero-badge::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--gold);
          box-shadow: 0 0 14px rgba(199,154,55,0.72);
        }

        .hero-badge-button {
          cursor: pointer;
        }

        .hero-badge-button:hover {
          background: rgba(255,255,255,0.16);
        }

        .hero-badge-button:focus {
          outline: none;
        }

        .hero-title {
          margin: 0 0 8px;
          color: #fff;
          font-size: clamp(36px, 4.6vw, 66px);
          line-height: 1.06;
          font-weight: 900;
          text-wrap: balance;
          text-shadow: 0 8px 28px rgba(0,0,0,0.16);
        }

        .hero-text {
          margin: 0;
          max-width: 680px;
          color: rgba(255,255,255,0.94);
          font-size: clamp(17px, 1.55vw, 21px);
          line-height: 1.6;
          font-weight: 600;
          text-shadow: 0 4px 18px rgba(0,0,0,0.14);
        }

        .section-head {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 18px;
        }

        .rtl .section-head {
          text-align: right;
        }

        .ltr .section-head {
          text-align: left;
        }

        .section-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #9a7a2b;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .section-kicker::before {
          content: "";
          width: 34px;
          height: 1px;
          background: linear-gradient(90deg, rgba(199, 154, 55, 0.26), rgba(199, 154, 55, 1));
        }

        .rtl .section-kicker::before {
          background: linear-gradient(270deg, rgba(199, 154, 55, 0.26), rgba(199, 154, 55, 1));
        }

        .glass-card {
          position: relative;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.52);
          backdrop-filter: blur(18px) saturate(180%);
          border-radius: 34px;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        .glass-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.14), transparent 24%),
            radial-gradient(circle at top right, rgba(199, 154, 55, 0.08), transparent 24%);
          pointer-events: none;
        }

        .statement-card {
          padding: clamp(24px, 3.4vw, 48px);
        }

        .statement-title {
          margin: 0 0 28px;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.18;
          font-weight: 900;
          color: #071223;
          text-align: left;
        }

        .rtl .statement-title,
        .rtl .statement-body,
        .rtl .brand-copy,
        .rtl .contact-box,
        .rtl .contact-main,
        .rtl .founders-grid-title,
        .rtl .founders-note {
          text-align: right;
        }

        .ltr .statement-title,
        .ltr .statement-body,
        .ltr .contact-box,
        .ltr .contact-main,
        .ltr .founders-grid-title,
        .ltr .founders-note {
          text-align: left;
        }

        .statement-body {
          color: #334155;
          font-size: clamp(18px, 1.55vw, 22px);
          line-height: 2.08;
          text-align: left;
        }

        .statement-body p {
          margin: 0 0 1.08em;
        }

        .statement-body p:first-child {
          color: #0f172a;
          font-weight: 800;
        }

        .statement-closing {
          margin-top: 22px;
          padding-top: 20px;
          border-top: 1px solid rgba(148,163,184,0.24);
          display: grid;
          gap: 8px;
          color: #0f172a;
          font-weight: 900;
          font-size: clamp(18px, 1.45vw, 21px);
        }

        .founders-section {
          padding-top: 20px;
        }

        .founders-card {
          padding: clamp(22px, 3vw, 40px);
        }

        .founders-grid-title {
          margin: 0 0 8px;
          font-size: clamp(28px, 3.1vw, 40px);
          line-height: 1.18;
          font-weight: 900;
          color: #071223;
        }

        .founders-note {
          margin: 0 0 22px;
          color: #64748b;
          font-size: 15px;
          line-height: 1.9;
          font-weight: 700;
        }

        .founders-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .founder-item {
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 78px;
          padding: 16px 18px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(255,255,255,0.88), rgba(248,250,252,0.76));
          border: 1px solid rgba(148,163,184,0.14);
          box-shadow: 0 12px 30px rgba(15,23,42,0.06);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .founder-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 36px rgba(15,23,42,0.09);
          border-color: rgba(199, 154, 55, 0.3);
        }

        .founder-bullet {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          flex: 0 0 auto;
          background: radial-gradient(circle at 30% 30%, #fff4d2, #c79a37 72%);
          box-shadow: 0 0 0 6px rgba(199, 154, 55, 0.08);
        }

        .founder-name {
          font-size: clamp(16px, 1.3vw, 20px);
          line-height: 1.6;
          font-weight: 800;
          color: #0f172a;
        }

        .contact-box {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 28px;
          border-radius: 34px;
          background:
            linear-gradient(135deg, rgba(8, 23, 45, 0.96) 0%, rgba(15, 45, 86, 0.94) 55%, rgba(19, 62, 112, 0.94) 100%);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 26px 60px rgba(8, 23, 45, 0.22);
          overflow: hidden;
        }

        .contact-box::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(199, 154, 55, 0.18), transparent 24%),
            radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 28%);
          pointer-events: none;
        }

        .contact-main,
        .contact-links {
          position: relative;
          z-index: 1;
        }

        .contact-main {
          display: flex;
          align-items: center;
          gap: 18px;
          max-width: 560px;
        }

        .contact-title {
          margin: 0 0 10px;
          font-size: clamp(28px, 2.9vw, 40px);
          line-height: 1.08;
          font-weight: 900;
          color: #ffffff;
        }

        .contact-text {
          margin: 0;
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          line-height: 1.9;
          font-weight: 500;
        }

        .contact-links {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .ltr .contact-links {
          justify-content: flex-start;
        }

        .contact-pill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          min-height: 66px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.1);
          box-shadow: 0 10px 24px rgba(0,0,0,0.1);
          backdrop-filter: blur(12px);
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .contact-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(0,0,0,0.18);
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.22);
        }

        .contact-pill-label {
          font-size: 15px;
          font-weight: 900;
          color: #ffffff;
          white-space: nowrap;
        }

        .contact-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          overflow: hidden;
        }

        .icon-mail {
          background: linear-gradient(135deg, #eef2ff, #dbeafe);
          color: #1e3a8a;
        }

        .icon-insta {
          background: linear-gradient(135deg, #fdf497 0%, #fd5949 35%, #d6249f 65%, #285AEB 100%);
          color: #ffffff;
        }

        .icon-svg {
          width: 22px;
          height: 22px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .icon-fill {
          fill: currentColor;
        }

        .x-logo-image {
          width: 40px;
          height: 40px;
          object-fit: contain;
          display: block;
          border-radius: 8px;
        }

        .footer {
          padding: 10px 0 34px;
          color: #64748b;
          font-size: 15px;
          text-align: center;
          font-weight: 700;
        }

        @keyframes floatCard {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 1180px) {
          .topbar-inner {
            gap: 16px;
          }

          .brand-title {
            font-size: 22px;
          }

          .hero-shell,
          .hero-content {
            min-height: 650px;
          }

          .contact-box {
            flex-direction: column;
            align-items: stretch;
          }

          .contact-links,
          .ltr .contact-links {
            justify-content: flex-start;
          }

          .rtl .contact-links {
            justify-content: flex-end;
          }
        }

        @media (max-width: 980px) {
          .topbar-inner {
            min-height: 150px;
            flex-direction: column;
            align-items: stretch;
            gap: 14px;
          }

          .brand-wrap,
          .nav-group {
            width: 100%;
          }

          .nav-group {
            justify-content: space-between;
            gap: 10px;
          }

          .brand-logo {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .brand-title {
            font-size: 24px;
            white-space: normal;
          }

          .nav-links {
            flex-wrap: wrap;
          }

          .hero-shell,
          .hero-content {
            min-height: 560px;
          }

          .hero-content {
            padding: 0 24px 24px;
          }

          .hero-copy {
            padding: 16px 18px;
          }

          .hero-title {
            font-size: 40px;
          }

          .statement-card,
          .founders-card {
            padding: 24px;
          }

          .founders-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .container {
            width: min(var(--container), calc(100% - 20px));
          }

          .topbar-inner {
            min-height: 172px;
            padding: 10px 0 12px;
          }

          .brand-wrap {
            align-items: center;
            gap: 14px;
          }

          .brand-logo {
            width: 104px;
            height: 104px;
          }

          .brand-title {
            font-size: 20px;
            white-space: normal;
          }

          .nav-group {
            flex-direction: column;
            align-items: stretch;
          }

          .nav-links {
            width: 100%;
            justify-content: space-between;
            gap: 4px;
            padding: 6px;
          }

          .nav-link {
            flex: 1 1 auto;
            font-size: 13px;
            padding: 10px 8px;
          }

          .lang-dropdown {
            width: 100%;
            min-width: 0;
          }

          .lang-button {
            width: 100%;
          }

          .lang-menu {
            width: 100%;
            min-width: 100%;
          }

          .hero {
            padding-top: 14px;
          }

          .hero-shell,
          .hero-content {
            min-height: 470px;
            border-radius: 30px;
          }

          .hero-content {
            padding: 0 18px 20px;
            align-items: flex-end;
          }

          .hero-copy {
            width: 100%;
            padding: 14px 14px;
            border-radius: 20px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-text {
            font-size: 16px;
            line-height: 1.7;
          }

          .hero-badge {
            font-size: 12px;
            padding: 10px 14px;
          }

          .statement-title,
          .founders-grid-title,
          .contact-title {
            font-size: 28px;
          }

          .statement-body {
            font-size: 17px;
            line-height: 2;
          }

          .contact-box {
            padding: 20px;
            border-radius: 28px;
          }

          .contact-pill {
            min-height: 58px;
            padding: 10px 14px;
          }

          .contact-pill-label {
            font-size: 14px;
          }

          .founder-item {
            min-height: 68px;
            padding: 14px 16px;
            border-radius: 18px;
          }

          .founder-name {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="page-layer">
        <header className="topbar" ref={headerRef}>
          <div className="container topbar-inner">
            <div className="brand-wrap">
              <div className="brand-logo">
                <img src={logo} alt={t.brand} />
              </div>

              <div className="brand-copy">
                {t.brandTop ? <p className="brand-top">{t.brandTop}</p> : null}
                <h1 className="brand-title">{t.brand}</h1>
              </div>
            </div>

            <div className="nav-group">
              <nav className="nav-links" aria-label="Main navigation">
                <a className={`nav-link ${activeSection === 'home' ? 'active-nav' : ''}`} href="#home" onClick={(e) => handleNavClick(e, 'home')}>{t.navHome}</a>
                <a className={`nav-link ${activeSection === 'statement' ? 'active-nav' : ''}`} href="#statement" onClick={(e) => handleNavClick(e, 'statement')}>{t.navStatement}</a>
                <a className={`nav-link ${activeSection === 'founders' ? 'active-nav' : ''}`} href="#founders" onClick={(e) => handleNavClick(e, 'founders')}>{t.navFounders}</a>
                <a className={`nav-link ${activeSection === 'contact' ? 'active-nav' : ''}`} href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>{t.navContact}</a>
              </nav>

              <div className="lang-dropdown" ref={langRef}>
                <button
                  className="lang-button"
                  type="button"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((prev) => !prev)}
                >
                  <span>{t.langLabel}</span>
                  <span className="lang-caret" />
                </button>

                <div className={`lang-menu ${menuOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className={lang === 'fa' ? 'active-lang' : ''}
                    onClick={() => switchLanguage('fa')}
                  >
                    فارسی
                  </button>
                  <button
                    type="button"
                    className={lang === 'en' ? 'active-lang' : ''}
                    onClick={() => switchLanguage('en')}
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section id="home" className="hero">
            <div className="container">
              <div className="hero-shell">
                <div className="hero-image">
                  <img src={header} alt={t.brand} />
                </div>
                <div className="hero-overlay" />
                <div className="hero-glow" />

                <div className="hero-content">
                  <div className="hero-copy">
                    <button
                      type="button"
                      className="hero-badge hero-badge-button"
                      onClick={() => scrollToSection('statement')}
                    >
                      {t.heroBadge}
                    </button>
                    <h2 className="hero-title">{t.heroTitle}</h2>
                    <p className="hero-text">{t.heroText}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="statement" className="section">
            <div className="container">
              <div className="section-head">
                <span className="section-kicker">{t.navStatement}</span>
              </div>

              <div className="glass-card statement-card">
                <h3 ref={statementRef} className="statement-title">{t.statementTitle}</h3>

                <div className="statement-body">
                  {t.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  <div className="statement-closing">
                    <div>{t.closingA}</div>
                    <div>{t.closingB}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="founders" className="section founders-section">
            <div className="container">
              <div className="section-head">
                <span className="section-kicker">{t.navFounders}</span>
              </div>

              <div className="glass-card founders-card">
                <h3 ref={foundersRef} className="founders-grid-title">{t.foundersTitle}</h3>
                <p className="founders-note">{t.foundersNote}</p>

                <div className="founders-grid">
                  {t.founders.map((name) => (
                    <div className="founder-item" key={name}>
                      <span className="founder-bullet" />
                      <div className="founder-name">{name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="contact-section">
            <div className="container">
              <div className="contact-box">
                <div className="contact-main">
                  <div>
                    <h3 ref={contactRef} className="contact-title">{t.contactTitle}</h3>
                    <p className="contact-text">{t.contactText}</p>
                  </div>
                </div>

                <div className="contact-links">
                  <a className="contact-pill" href="mailto:segreteria@shirokhorshid.it" aria-label="Email">
                    <span className="contact-pill-label">Email</span>
                    <span className="contact-icon-wrap icon-mail"><MailIcon /></span>
                  </a>

                  <a className="contact-pill" href="https://www.instagram.com/shirokhorshid.it/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <span className="contact-pill-label">Instagram</span>
                    <span className="contact-icon-wrap icon-insta"><InstagramIcon /></span>
                  </a>

                  <a className="contact-pill" href="https://x.com/shirokhorshidit" target="_blank" rel="noreferrer" aria-label="X">
                    <span className="contact-pill-label">X</span>
                    <span className="contact-icon-wrap"><XIconImage /></span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container">{t.footer}</div>
        </footer>
      </div>
    </div>
  )
}

export default App
