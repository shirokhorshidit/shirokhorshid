import { useEffect, useRef, useState } from 'react'
import logo from './assets/logo.png'
import header from './assets/header.jpg'

const content = {
  fa: {
    dir: 'rtl',
    htmlLang: 'fa',
    brandTop: 'LION AND SUN FRONT ITALY',
    brand: 'جبهه‌ی شیر و خورشید ایتالیا',
    navHome: 'صفحه اصلی',
    navStatement: 'بیانیه',
    navFounders: 'بنیان‌گذاران',
    navContact: 'ارتباط',
    heroBadge: 'بیانیه اعلام موجودیت',
    heroTitle: 'آغاز فعالیت جبهه‌ی شیر و خورشید ایتالیا',
    heroText:
      'سازمان‌دهی نیروهای ملی ایرانیان مقیم ایتالیا با تکیه بر آزادی، شفافیت، همبستگی و کنش جمعی.',
    statementTitle: 'بیانیه اعلام موجودیت',
    paragraphs: [
      'هم‌میهنان عزیز؛',
      'ما، جمعی متکثر از فعالین سیاسی، دانشجویان و دانش‌آموختگان مقیم ایتالیا، با در نظر گرفتن شرایط خطیر و تاریخی میهنمان، بر آن شدیم تا با تشکیل «جبهه‌ شیر و خورشید ایتالیا»، گامی بلند در جهت سازمان‌دهی فعالیت‌های دیاسپورای ایرانیان در ایتالیا برداریم؛ و بدین‌وسیله آغاز فعالیت این جبهه را اعلام می‌نماییم.',
      'تحولات اجتماعی و سیاسی ایران در سال‌های گذشته نشان داده است که نقش نیروهای ملی، آگاه و مسئول، به‌ویژه نسل جوان، در شکل‌گیری مسیر آینده کشور تعیین‌کننده بوده و خواهد بود. در چنین شرایطی، ضرورت ایجاد بستری منسجم برای همفکری و اقدام‌های موثر جمعی بیش از پیش احساس می‌شود.',
      'ما با تاکید بر نقش تاریخی و رهبری شاهزاده رضا پهلوی، تلاش خواهیم کرد تا با گردهم‌آوردن ایرانیان دغدغه‌مند در ایتالیا، زیر چتر فراگیر این سازمان، نقشی موثر در پیشبرد مطالبات آزادی‌خواهانه ملت ایران در این کشور ایفا کنیم.',
      'فعالیت «جبهه‌ شیر و خورشید ایتالیا» که همزمان با نوروز ۲۵۸۵ شاهنشاهی و زادروز پیام‌آور مهر و هویت ایرانی، آشو زرتشت، اعلام موجودیت می‌کند، مبتنی بر چهار اصل خلل‌ناپذیر اعلامی از سوی شاهزاده رضا پهلوی است و این جبهه خود را بخشی از سازوکار همکاری ملی و پشتیبان «سامانه گذار» می‌داند.',
      'ما خود را متعهد به اصول بنیادین ملی‌گرایی، پایبندی به کنش دموکراتیک، شفافیت و گفت‌وگو محوری میدانیم؛ و بر صداقت، پاسخ‌گویی، شایسته‌سالاری و پرهیز از هرگونه تبعیض و رفتار انحصارطلبانه تاکید داریم.',
      'در پایان، از تمامی ایرانیان مقیم ایتالیا - از کنشگران و دانشجویان، تا پژوهشگران و جوانان علاقه‌مند - صمیمانه دعوت می‌کنیم تا با پیوستن به جبهه شیر و خورشید، در مسیر ساختن آینده‌ای مبتنی بر آزادی، پیشرفت و اراده‌ی جمعی برای ایران عزیزمان، همراه شوند.',
      'به امید آنکه این آخرین تلاش ما برای سازماندهی نیروهای ملی در تبعید باشد و آزادی میهنمان، مسیر بازگشت تمام ایرانیان در تبعید را به سرزمین مادری فراهم سازد.'
    ],
    closingA: 'پاینده ایران',
    closingB: 'جاوید شاه',
    foundersTitle: 'بنیان‌گذاران جبهه‌ شیر و خورشید ایتالیا',
    founders: [
      'آندره ماری رهبر',
      'آريا آذرمهر',
      'آیسان احمدی',
      'امیرسالار خسروی',
      'بهنام صفایی',
      'پرنیا قناتی',
      'توسکا جهاندیده',
      'دارا کامیار',
      'داریوش ناطقی',
      'زهره پاک زاد',
      'شایان عباسیان (آزاد)',
      'شاهین قدسی',
      'فریبا کریمی',
      'مریم پزشکی'
    ],
    contactTitle: 'ارتباط با ما',
    contactText: 'برای ارتباط رسانه‌ای، همکاری، عضویت و پیگیری فعالیت‌ها از راه‌های زیر با ما در تماس باشید.',
    footer: '© 2026 جبهه‌ی شیر و خورشید ایتالیا'
  },
  en: {
    dir: 'ltr',
    htmlLang: 'en',
    brandTop: 'LION AND SUN FRONT ITALY',
    brand: 'Lion and Sun Front Italy',
    navHome: 'Home',
    navStatement: 'Statement',
    navFounders: 'Founders',
    navContact: 'Contact',
    heroBadge: 'Founding Statement',
    heroTitle: 'Launch of the Lion and Sun Front Italy',
    heroText:
      'Organizing national Iranian forces in Italy through freedom, transparency, solidarity, and collective action.',
    statementTitle: 'Founding Statement',
    paragraphs: [
      'Dear compatriots,',
      'We, a diverse group of political activists, students, and graduates residing in Italy, in view of the grave and historic conditions of our homeland, have decided to establish the “Lion and Sun Front Italy” in order to take a major step toward organizing the activities of the Iranian diaspora in Italy; and hereby announce the beginning of this front’s activities.',
      'The social and political developments in Iran in recent years have shown that the role of national, aware, and responsible forces, especially the younger generation, has been and will remain decisive in shaping the future course of the country. Under such circumstances, the need for a coherent platform for collective reflection and effective action is felt more strongly than ever.',
      'With emphasis on the historic role and leadership of Crown Prince Reza Pahlavi, we will strive to bring together concerned Iranians in Italy under the broad umbrella of this organization and to play an effective role in advancing the freedom-seeking demands of the Iranian nation in this country.',
      'The activities of the “Lion and Sun Front Italy,” which declares its establishment simultaneously with Nowruz 2585 of the Imperial calendar and the birth anniversary of Asho Zartosht, the herald of Iranian identity and مهر, are founded on the four inviolable principles announced by Crown Prince Reza Pahlavi. This front also considers itself part of the framework of national cooperation and a supporter of the “Transition Platform.”',
      'We regard ourselves as committed to the fundamental principles of nationalism, democratic action, transparency, and dialogue; and we emphasize honesty, accountability, meritocracy, and the rejection of all forms of discrimination and monopolistic behavior.',
      'In conclusion, we sincerely invite all Iranians residing in Italy — from activists and students to researchers and interested young people — to join the Lion and Sun Front and stand with us in building a future for our beloved Iran based on freedom, progress, and collective will.',
      'We hope this will be our last effort to organize national forces in exile, and that the liberation of our homeland will pave the way for the return of all exiled Iranians to their motherland.'
    ],
    closingA: 'Long live Iran',
    closingB: 'Javid Shah',
    foundersTitle: 'Founders of the Lion and Sun Front Italy',
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
    contactText: 'For media inquiries, collaboration, membership, and updates, reach us through the channels below.',
    footer: '© 2026 Lion and Sun Front Italy'
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

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg x-icon-fixed" fill="currentColor">
      <path d="M18.244 2H21l-6.018 6.876L22 22h-5.49l-4.301-6.303L6.69 22H3.93l6.438-7.36L2 2h5.63l3.888 5.748L18.244 2Zm-.967 18.24h1.523L6.802 3.68H5.168L17.277 20.24Z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-svg">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.7 2.5 4.2 5.76 4.2 9S14.7 18.5 12 21M12 3C9.3 5.5 7.8 8.76 7.8 12S9.3 18.5 12 21" />
    </svg>
  )
}

function App() {
  const [lang, setLang] = useState('fa')
  const [menuOpen, setMenuOpen] = useState(false)
  const langRef = useRef(null)
  const t = content[lang]

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

  const switchLanguage = (nextLang) => {
    setLang(nextLang)
    setMenuOpen(false)
  }

  return (
    <div className={`site-root ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Vazirmatn:wght@400;500;700;800;900&display=swap');

        :root {
          color-scheme: light;
          --bg-1: #07111f;
          --bg-2: #0c1b33;
          --bg-3: #edf3fb;
          --surface: rgba(255, 255, 255, 0.72);
          --surface-strong: rgba(255, 255, 255, 0.92);
          --surface-dark: rgba(7, 17, 31, 0.72);
          --border: rgba(148, 163, 184, 0.18);
          --border-strong: rgba(255, 255, 255, 0.22);
          --text: #0f172a;
          --muted: #475569;
          --muted-2: #64748b;
          --navy: #08172d;
          --navy-2: #0f2d56;
          --gold: #d3a84d;
          --gold-2: #f2df9b;
          --shadow-xl: 0 28px 80px rgba(2, 12, 27, 0.18);
          --shadow-lg: 0 18px 50px rgba(15, 23, 42, 0.12);
          --shadow-md: 0 10px 30px rgba(15, 23, 42, 0.08);
          --radius-xl: 34px;
          --radius-lg: 24px;
          --radius-md: 18px;
          --container: 1280px;
          --header-h: 112px;
        }

        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          background:
            radial-gradient(circle at top left, rgba(213, 168, 77, 0.10), transparent 30%),
            radial-gradient(circle at top right, rgba(56, 189, 248, 0.08), transparent 26%),
            linear-gradient(180deg, #f7f9fd 0%, #eef4fb 42%, #e9f0f8 100%);
        }

        a { color: inherit; text-decoration: none; }
        button, input, textarea, select { font: inherit; }
        section[id] { scroll-margin-top: calc(var(--header-h) + 26px); }

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
          inset: auto;
          pointer-events: none;
          z-index: 0;
          filter: blur(70px);
          opacity: 0.5;
        }

        .site-root::before {
          width: 340px;
          height: 340px;
          top: -40px;
          left: -60px;
          background: rgba(211, 168, 77, 0.16);
        }

        .site-root::after {
          width: 360px;
          height: 360px;
          right: -80px;
          top: 180px;
          background: rgba(37, 99, 235, 0.10);
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
        .site-root.rtl .founders-grid-title {
          font-family: Vazirmatn, Tahoma, sans-serif;
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
          z-index: 80;
          background: rgba(255, 255, 255, 0.68);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.46);
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.04);
        }

        .topbar-inner {
          min-height: var(--header-h);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 10px 0;
        }

        .brand-wrap {
          display: flex;
          align-items: center;
          gap: 20px;
          min-width: 0;
        }

        .brand-logo-shell {
          position: relative;
          flex: 0 0 auto;
        }

        .brand-logo-shell::before {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 38px;
          background:
            linear-gradient(135deg, rgba(242, 223, 155, 0.65), rgba(211, 168, 77, 0.18)),
            rgba(255, 255, 255, 0.5);
          filter: blur(0.5px);
        }

        .brand-logo {
          position: relative;
          width: 122px;
          height: 122px;
          border-radius: 30px;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.96));
          box-shadow: 0 22px 44px rgba(15,23,42,0.14);
          border: 1px solid rgba(255,255,255,0.72);
        }

        .brand-logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .brand-copy {
          min-width: 0;
        }

        .brand-top {
          margin: 0 0 8px;
          font-size: 12px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          font-weight: 900;
          color: #64748b;
          white-space: nowrap;
        }

        .brand-title {
          margin: 0;
          font-size: clamp(32px, 3.15vw, 48px);
          line-height: 1.02;
          font-weight: 900;
          color: #071223;
          text-wrap: balance;
        }

        .nav-group {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: nowrap;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.58);
          border: 1px solid rgba(255,255,255,0.66);
          box-shadow: 0 12px 32px rgba(15,23,42,0.06);
          backdrop-filter: blur(14px);
        }

        .nav-link {
          position: relative;
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
        }

        .nav-link:hover {
          background: rgba(15,23,42,0.06);
          color: #08172d;
        }

        .lang-dropdown {
          position: relative;
        }

        .lang-button {
          border: 1px solid rgba(255,255,255,0.22);
          background:
            linear-gradient(135deg, #08172d 0%, #0f2d56 65%, #163f76 100%);
          color: #fff;
          box-shadow: 0 18px 36px rgba(8, 23, 45, 0.24);
          border-radius: 999px;
          padding: 12px 17px;
          min-width: 134px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          font-size: 15px;
          font-weight: 900;
          cursor: pointer;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .lang-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 22px 44px rgba(8, 23, 45, 0.30);
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
          top: calc(100% + 12px);
          right: 0;
          min-width: 184px;
          padding: 10px;
          border-radius: 20px;
          background: rgba(255,255,255,0.9);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 24px 50px rgba(15,23,42,0.16);
          backdrop-filter: blur(18px);
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease;
        }

        .ltr .lang-menu {
          right: auto;
          left: 0;
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
          border-radius: 14px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          color: #0f172a;
          transition: background 180ms ease, color 180ms ease;
        }

        .lang-menu button:hover,
        .lang-menu button.active-lang {
          background: rgba(15, 23, 42, 0.06);
        }

        .hero {
          padding: 24px 0 22px;
        }

        .hero-shell {
          position: relative;
          min-height: 720px;
          border-radius: 42px;
          overflow: hidden;
          isolation: isolate;
          box-shadow: var(--shadow-xl);
          background: #0b1a33;
          border: 1px solid rgba(255,255,255,0.22);
        }

        .hero-image,
        .hero-overlay,
        .hero-noise,
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
        }

        .hero-overlay {
          background:
            linear-gradient(90deg, rgba(5,15,32,0.10) 0%, rgba(5,15,32,0.42) 42%, rgba(5,15,32,0.88) 100%),
            linear-gradient(180deg, rgba(7,17,31,0.12) 0%, rgba(7,17,31,0.72) 100%);
        }

        .rtl .hero-overlay {
          background:
            linear-gradient(270deg, rgba(5,15,32,0.10) 0%, rgba(5,15,32,0.42) 42%, rgba(5,15,32,0.88) 100%),
            linear-gradient(180deg, rgba(7,17,31,0.12) 0%, rgba(7,17,31,0.72) 100%);
        }

        .hero-glow {
          background:
            radial-gradient(circle at 18% 24%, rgba(242, 223, 155, 0.16), transparent 26%),
            radial-gradient(circle at 78% 18%, rgba(255, 255, 255, 0.12), transparent 24%);
          mix-blend-mode: screen;
        }

        .hero-noise {
          opacity: 0.22;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 22px 22px;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          min-height: 720px;
          display: flex;
          align-items: flex-end;
          padding: 52px;
        }

        .hero-copy {
          width: min(800px, 100%);
          padding: 30px;
          border-radius: 30px;
          background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.06));
          border: 1px solid rgba(255,255,255,0.14);
          backdrop-filter: blur(14px);
          box-shadow: 0 16px 50px rgba(0,0,0,0.14);
          text-align: left;
        }

        .rtl .hero-copy {
          text-align: right;
          margin-left: auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(10px);
          color: #fff;
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 20px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.10);
        }

        .hero-badge::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--gold-2), var(--gold));
          box-shadow: 0 0 0 5px rgba(242, 223, 155, 0.10);
        }

        .hero-title {
          margin: 0 0 16px;
          color: #fff;
          font-size: clamp(38px, 5vw, 72px);
          line-height: 1.06;
          font-weight: 900;
          text-wrap: balance;
          text-shadow: 0 8px 28px rgba(0,0,0,0.18);
        }

        .hero-text {
          margin: 0;
          max-width: 680px;
          color: rgba(255,255,255,0.88);
          font-size: clamp(17px, 1.6vw, 21px);
          line-height: 1.9;
          font-weight: 500;
        }

        .section {
          padding: 20px 0;
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
          background: linear-gradient(90deg, rgba(211, 168, 77, 0.3), rgba(211, 168, 77, 1));
        }

        .rtl .section-kicker::before {
          background: linear-gradient(270deg, rgba(211, 168, 77, 0.3), rgba(211, 168, 77, 1));
        }

        .glass-card {
          position: relative;
          background: var(--surface);
          border: 1px solid rgba(255,255,255,0.48);
          backdrop-filter: blur(18px) saturate(180%);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        .glass-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.16), transparent 24%),
            radial-gradient(circle at top right, rgba(242, 223, 155, 0.12), transparent 24%);
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
        .rtl .founders-grid-title {
          text-align: right;
        }

        .statement-body {
          position: relative;
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
          padding-top: 10px;
        }

        .founders-card {
          padding: clamp(22px, 3vw, 40px);
        }

        .founders-grid-title {
          margin: 0 0 22px;
          font-size: clamp(28px, 3.1vw, 40px);
          line-height: 1.18;
          font-weight: 900;
          color: #071223;
        }

        .founders-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .founder-item {
          position: relative;
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 78px;
          padding: 16px 18px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(255,255,255,0.86), rgba(248,250,252,0.72));
          border: 1px solid rgba(148,163,184,0.16);
          box-shadow: 0 12px 30px rgba(15,23,42,0.06);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .founder-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 36px rgba(15,23,42,0.10);
          border-color: rgba(211, 168, 77, 0.32);
        }

        .founder-bullet {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          flex: 0 0 auto;
          background: radial-gradient(circle at 30% 30%, #fff6d9, #d3a84d 72%);
          box-shadow: 0 0 0 6px rgba(211, 168, 77, 0.10);
        }

        .founder-name {
          font-size: clamp(16px, 1.3vw, 20px);
          line-height: 1.6;
          font-weight: 800;
          color: #0f172a;
        }

        .contact-section {
          padding-top: 14px;
          padding-bottom: 32px;
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
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 26px 60px rgba(8, 23, 45, 0.22);
          overflow: hidden;
        }

        .contact-box::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(242, 223, 155, 0.18), transparent 24%),
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
          color: rgba(255,255,255,0.78);
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
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.10);
          box-shadow: 0 10px 24px rgba(0,0,0,0.10);
          backdrop-filter: blur(12px);
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease, border-color 180ms ease;
        }

        .contact-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(0,0,0,0.18);
          background: rgba(255,255,255,0.14);
          border-color: rgba(255,255,255,0.20);
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
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.14);
        }

        .icon-mail { background: linear-gradient(135deg, #eef2ff, #dbeafe); color: #1e3a8a; }
        .icon-insta { background: linear-gradient(135deg, #fdf497 0%, #fd5949 35%, #d6249f 65%, #285AEB 100%); color: #ffffff; }
        .icon-x { background: #0f172a; color: #ffffff; }
        .icon-web { background: linear-gradient(135deg, #ecfeff, #cffafe); color: #155e75; }

        .icon-svg {
          width: 22px;
          height: 22px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .icon-fill { fill: currentColor; }
        .x-icon-fixed { stroke: none; }

        .footer {
          padding: 10px 0 34px;
          color: #64748b;
          font-size: 15px;
          text-align: center;
          font-weight: 700;
        }

        @media (max-width: 1180px) {
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
          :root {
            --header-h: 164px;
          }

          .topbar-inner {
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
            width: 104px;
            height: 104px;
          }

          .brand-title {
            font-size: 28px;
          }

          .nav-links {
            flex-wrap: wrap;
          }

          .hero-shell,
          .hero-content {
            min-height: 560px;
          }

          .hero-content {
            padding: 24px;
          }

          .hero-copy {
            padding: 22px;
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
          :root {
            --header-h: 186px;
          }

          .container {
            width: min(var(--container), calc(100% - 20px));
          }

          .topbar-inner {
            padding: 10px 0 12px;
          }

          .brand-wrap {
            align-items: center;
            gap: 14px;
          }

          .brand-logo {
            width: 90px;
            height: 90px;
            border-radius: 24px;
          }

          .brand-top {
            font-size: 10px;
            letter-spacing: 0.18em;
          }

          .brand-title {
            font-size: 24px;
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
            padding: 10px 10px;
          }

          .lang-dropdown {
            width: 100%;
          }

          .lang-button {
            width: 100%;
          }

          .lang-menu,
          .ltr .lang-menu {
            left: 0;
            right: 0;
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
            padding: 18px;
            align-items: flex-end;
          }

          .hero-copy {
            width: 100%;
            border-radius: 24px;
            padding: 18px;
          }

          .hero-title {
            font-size: 32px;
          }

          .hero-text {
            font-size: 16px;
            line-height: 1.8;
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
        <header className="topbar">
          <div className="container topbar-inner">
            <div className="brand-wrap">
              <div className="brand-logo-shell">
                <div className="brand-logo">
                  <img src={logo} alt={t.brand} />
                </div>
              </div>

              <div className="brand-copy">
                <p className="brand-top">{t.brandTop}</p>
                <h1 className="brand-title">{t.brand}</h1>
              </div>
            </div>

            <div className="nav-group">
              <nav className="nav-links" aria-label="Main navigation">
                <a className="nav-link" href="#home">{t.navHome}</a>
                <a className="nav-link" href="#statement">{t.navStatement}</a>
                <a className="nav-link" href="#founders">{t.navFounders}</a>
                <a className="nav-link" href="#contact">{t.navContact}</a>
              </nav>

              <div className="lang-dropdown" ref={langRef}>
                <button
                  className="lang-button"
                  type="button"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((prev) => !prev)}
                >
                  <span>{lang === 'fa' ? 'فارسی' : 'English'}</span>
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
                <div className="hero-noise" />

                <div className="hero-content">
                  <div className="hero-copy">
                    <div className="hero-badge">{t.heroBadge}</div>
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
                <h3 className="statement-title">{t.statementTitle}</h3>

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
                <h3 className="founders-grid-title">{t.foundersTitle}</h3>

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
                    <h3 className="contact-title">{t.contactTitle}</h3>
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
                    <span className="contact-icon-wrap icon-x"><XIcon /></span>
                  </a>

                  <a className="contact-pill" href="https://shirokhorshid.it" target="_blank" rel="noreferrer" aria-label="Website">
                    <span className="contact-pill-label">Website</span>
                    <span className="contact-icon-wrap icon-web"><GlobeIcon /></span>
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
