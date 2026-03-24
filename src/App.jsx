import { useEffect, useState } from 'react'
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
    navContact: 'ارتباط',
    statementTitle: 'بیانیه اعلام موجودیت',
    heroBadge: 'بیانیه اعلام موجودیت',
    heroTitle: 'آغاز فعالیت جبهه‌ی شیر و خورشید ایتالیا',
    paragraphs: [
      'هم‌میهنان عزیز؛',
      'ما، جمعی متکثر از فعالین سیاسی، دانشجویان و دانش‌آموختگان مقیم ایتالیا، با در نظر گرفتن شرایط خطیر و تاریخی میهنمان، بر آن شده‌ایم تا با تشکیل «جبهه‌ی شیر و خورشید ایتالیا»، گامی در جهت سازمان‌دهی فعالیت‌های دیاسپورای ایرانیان در ایتالیا برداریم و بدین‌وسیله آغاز فعالیت این جبهه را اعلام می‌نماییم.',
      'تحولات اجتماعی و سیاسی ایران در سال‌های گذشته نشان داده است که نقش نیروهای آگاه و مسئول، به‌ویژه نسل جوان، در شکل‌گیری مسیر آینده کشور تعیین‌کننده بوده و خواهد بود. در چنین شرایطی، ضرورت ایجاد بستری منسجم برای همفکری و اقدام‌های جمعی بیش از پیش احساس می‌شود.',
      '«جبهه‌ی شیر و خورشید ایتالیا» با تاکید بر نقش تاریخی و رهبری شاهزاده رضا پهلوی، تلاش خواهد کرد تا با گردهم‌آوردن ایرانیان دغدغه‌مند در ایتالیا زیر چتر فراگیر این سازمان، نقشی موثر در پیشبرد مطالبات آزادی‌خواهانه ملت ایران در این کشور ایفا کند.',
      'فعالیت جبهه‌ی شیر و خورشید ایتالیا که همزمان با نوروز ۲۵۸۵ شاهنشاهی و زادروز پیام‌آور هویت ایرانی، زرتشت، اعلام موجودیت می‌کند، مبتنی بر چهار اصل خلل‌ناپذیر اعلامی از سوی شاهزاده رضا پهلوی خواهد بود. این جبهه، همچنین خود را بخشی از سازوکار همکاری ملی و پشتیبان «سامانه گذار» می‌داند.',
      'ما خود را متعهد به اصولی همچون ملی‌گرایی، شفافیت، پایبندی به رفتار دموکراتیک و گفت‌وگومحوری می‌دانیم، و بر صداقت، پاسخ‌گویی، شایسته‌سالاری و پرهیز از هرگونه تبعیض و رفتار انحصارطلبانه تاکید می‌کنیم.',
      'در پایان، از تمامی ایرانیان ساکن ایتالیا — از کنشگران و دانشجویان، تا پژوهشگران و جوانان علاقه‌مند — دعوت می‌کنیم تا با پیوستن به این جبهه، در مسیر ساختن آینده‌ای مبتنی بر آزادی، پیشرفت و اراده‌ی جمعی برای ایران، همراه شوند.',
      'جبهه‌ی شیر و خورشید ایتالیا در روزهای آینده نمایندگان خود را در شهرهای مختلف ایتالیا معرفی خواهد کرد.'
    ],
    foundersTitle: 'بنیان‌گذاران جبهه‌ی شیر و خورشید ایتالیا',
    founderA: 'پاینده ایران',
    founderB: 'جاویدشاه',
    contactTitle: 'ارتباط با ما',
    footer: '© 2026 جبهه‌ی شیر و خورشید ایتالیا'
  },
  en: {
    dir: 'ltr',
    htmlLang: 'en',
    brandTop: 'LION AND SUN FRONT ITALY',
    brand: 'Lion and Sun Front Italy',
    navHome: 'Home',
    navStatement: 'Statement',
    navContact: 'Contact',
    statementTitle: 'Founding Statement',
    heroBadge: 'Founding Statement',
    heroTitle: 'Launch of the Lion and Sun Front Italy',
    paragraphs: [
      'Dear compatriots,',
      'We, a diverse group of political activists, students, and graduates residing in Italy, in view of the critical and historic conditions of our homeland, have decided to establish the “Lion and Sun Front Italy” in order to help organize the activities of the Iranian diaspora in Italy, and hereby announce the beginning of this front’s activities.',
      'The social and political developments in Iran in recent years have shown that the role of aware and responsible forces, especially the younger generation, has been and will remain decisive in shaping the country’s future. Under such conditions, the need for a coherent platform for collective reflection and action is felt more than ever.',
      'With emphasis on the historic role and leadership of Crown Prince Reza Pahlavi, the “Lion and Sun Front Italy” will strive to bring together concerned Iranians in Italy under the broad umbrella of this organization and to play an effective role in advancing the freedom-seeking demands of the Iranian nation in this country.',
      'The activities of the Lion and Sun Front Italy, which declares its establishment simultaneously with Nowruz 2585 of the Imperial calendar and the birth anniversary of Zoroaster, the herald of Iranian identity, will be based on the four inviolable principles announced by Crown Prince Reza Pahlavi. This front also considers itself part of the framework of national cooperation and a supporter of the “Transition Platform”.',
      'We commit ourselves to principles such as nationalism, transparency, adherence to democratic conduct, and dialogue, and we emphasize honesty, accountability, meritocracy, and the rejection of all forms of discrimination and monopolistic behavior.',
      'In conclusion, we invite all Iranians residing in Italy — from activists and students to researchers and interested young people — to join this front and accompany us in building a future for Iran based on freedom, progress, and collective will.',
      'The Lion and Sun Front Italy will introduce its representatives in different cities across Italy in the coming days.'
    ],
    foundersTitle: 'Founders of the Lion and Sun Front Italy',
    founderA: 'Long live Iran',
    founderB: 'Javid Shah',
    contactTitle: 'Contact',
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
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
    document.documentElement.dir = t.dir
  }, [t])

  return (
    <div className={`site-root ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
      <style>{`
        :root {
          color-scheme: light;
          --bg: #f3f6fb;
          --surface: rgba(255,255,255,0.88);
          --surface-strong: #ffffff;
          --border: rgba(148,163,184,0.16);
          --text: #0f172a;
          --muted: #475569;
          --muted-2: #64748b;
          --navy: #071a39;
          --navy-2: #123360;
          --shadow: 0 18px 46px rgba(15,23,42,0.08);
          --radius-xl: 30px;
          --radius-lg: 22px;
          --container: 1200px;
          --header-h: 104px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: radial-gradient(circle at top, #ffffff 0%, var(--bg) 45%, #e9eef7 100%); }
        a { color: inherit; }
        section[id] { scroll-margin-top: calc(var(--header-h) + 18px); }

        .site-root {
          min-height: 100vh;
          color: var(--text);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .site-root.rtl,
        .site-root.rtl .brand-title,
        .site-root.rtl .hero-title,
        .site-root.rtl .statement-title,
        .site-root.rtl .statement-body,
        .site-root.rtl .contact-title,
        .site-root.rtl .contact-mini,
        .site-root.rtl .nav-link,
        .site-root.rtl .lang-button,
        .site-root.rtl .lang-menu button,
        .site-root.rtl .hero-badge,
        .site-root.rtl .brand-top,
        .site-root.rtl .contact-icon-label {
          font-family: "B Nazanin", "B Zar", Tahoma, serif;
        }

        .container {
          width: min(var(--container), calc(100% - 32px));
          margin: 0 auto;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 60;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(226,232,240,0.9);
        }

        .topbar-inner {
          min-height: var(--header-h);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand-wrap {
          display: flex;
          align-items: center;
          gap: 18px;
          min-width: 0;
        }

        .brand-logo {
          width: 90px;
          height: 90px;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,252,0.96));
          box-shadow: 0 14px 34px rgba(15,23,42,0.10);
          border: 1px solid rgba(226,232,240,0.95);
          flex: 0 0 auto;
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
          margin: 0 0 5px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-weight: 800;
          color: var(--muted-2);
          white-space: nowrap;
        }

        .brand-title {
          margin: 0;
          font-size: clamp(30px, 3vw, 42px);
          line-height: 1.06;
          font-weight: 900;
          color: #091223;
          white-space: nowrap;
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
          flex-wrap: nowrap;
        }

        .nav-link {
          text-decoration: none;
          color: #14233f;
          font-size: 16px;
          font-weight: 800;
          padding: 10px 14px;
          border-radius: 999px;
          transition: 180ms ease;
          white-space: nowrap;
        }

        .nav-link:hover {
          background: rgba(15,23,42,0.06);
        }

        .lang-dropdown {
          position: relative;
        }

        .lang-button {
          border: 1px solid rgba(148,163,184,0.18);
          background: linear-gradient(135deg, var(--navy), var(--navy-2));
          color: #fff;
          box-shadow: 0 12px 30px rgba(8,26,55,0.22);
          border-radius: 999px;
          padding: 11px 16px;
          min-width: 122px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
        }

        .lang-caret {
          width: 9px;
          height: 9px;
          border-right: 2px solid currentColor;
          border-bottom: 2px solid currentColor;
          transform: rotate(45deg);
          margin-top: -3px;
          flex: 0 0 auto;
        }

        .lang-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          min-width: 170px;
          background: rgba(255,255,255,0.96);
          border: 1px solid rgba(148,163,184,0.14);
          box-shadow: 0 18px 38px rgba(15,23,42,0.12);
          border-radius: 18px;
          padding: 8px;
          display: none;
          backdrop-filter: blur(14px);
        }

        .ltr .lang-menu {
          right: auto;
          left: 0;
        }

        .lang-dropdown:hover .lang-menu,
        .lang-dropdown:focus-within .lang-menu {
          display: block;
        }

        .lang-menu button {
          width: 100%;
          border: 0;
          background: transparent;
          text-align: inherit;
          padding: 11px 12px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          color: #0f172a;
        }

        .lang-menu button:hover,
        .lang-menu button.active-lang {
          background: rgba(15,23,42,0.06);
        }

        .hero {
          padding: 24px 0 18px;
        }

        .hero-shell {
          position: relative;
          min-height: 600px;
          border-radius: 38px;
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(15,23,42,0.18);
          isolation: isolate;
          background: #0b1a33;
        }

        .hero-image,
        .hero-overlay {
          position: absolute;
          inset: 0;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .hero-overlay {
          background:
            linear-gradient(90deg, rgba(5,15,32,0.14) 0%, rgba(5,15,32,0.46) 42%, rgba(5,15,32,0.76) 100%),
            linear-gradient(180deg, rgba(5,15,32,0.10) 0%, rgba(5,15,32,0.66) 100%);
        }

        .rtl .hero-overlay {
          background:
            linear-gradient(270deg, rgba(5,15,32,0.14) 0%, rgba(5,15,32,0.46) 42%, rgba(5,15,32,0.76) 100%),
            linear-gradient(180deg, rgba(5,15,32,0.10) 0%, rgba(5,15,32,0.66) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          min-height: 600px;
          display: flex;
          align-items: flex-end;
          padding: 50px;
        }

        .hero-copy {
          width: min(760px, 100%);
          text-align: left;
        }

        .rtl .hero-copy {
          text-align: right;
          margin-left: auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          padding: 12px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(10px);
          color: white;
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 18px;
        }

        .hero-title {
          margin: 0;
          color: white;
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.14;
          font-weight: 900;
          text-wrap: balance;
        }

        .section {
          padding: 18px 0;
        }

        .glass-card {
          background: var(--surface);
          border: 1px solid var(--border);
          backdrop-filter: blur(16px);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow);
        }

        .statement-card {
          padding: clamp(24px, 3.3vw, 44px);
        }

        .statement-title {
          margin: 0 0 24px;
          font-size: clamp(30px, 4vw, 42px);
          line-height: 1.24;
          font-weight: 900;
          color: #0c172b;
          text-align: left;
        }

        .rtl .statement-title,
        .rtl .statement-body,
        .rtl .brand-copy,
        .rtl .contact-box,
        .rtl .contact-main {
          text-align: right;
        }

        .statement-body {
          color: #334155;
          font-size: clamp(18px, 1.6vw, 22px);
          line-height: 2.06;
          text-align: left;
        }

        .statement-body p {
          margin: 0 0 1.08em;
        }

        .founders {
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid rgba(148,163,184,0.24);
          color: #0f172a;
          font-weight: 800;
        }

        .contact-section {
          padding-top: 6px;
          padding-bottom: 30px;
        }

        .contact-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 20px 24px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(255,255,255,0.96), rgba(248,250,252,0.92));
          border: 1px solid rgba(148,163,184,0.14);
          box-shadow: 0 16px 40px rgba(15,23,42,0.08);
        }

        .contact-main {
          display: flex;
          align-items: center;
          gap: 18px;
          flex: 0 0 auto;
        }

        .contact-title {
          margin: 0;
          font-size: clamp(24px, 2.7vw, 34px);
          line-height: 1.1;
          font-weight: 900;
          color: #0f172a;
        }

        .contact-mini {
          margin: 6px 0 0;
          color: var(--muted-2);
          font-size: 15px;
          font-weight: 700;
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
          min-height: 64px;
          border-radius: 999px;
          text-decoration: none;
          border: 1px solid rgba(148,163,184,0.14);
          background: rgba(255,255,255,0.96);
          box-shadow: 0 10px 26px rgba(15,23,42,0.06);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .contact-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(15,23,42,0.10);
          border-color: rgba(100,116,139,0.28);
        }

        .contact-pill-label {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          white-space: nowrap;
        }

        .contact-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }

        .icon-mail { background: linear-gradient(135deg, #eef2ff, #e0e7ff); color: #312e81; }
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
          padding: 6px 0 28px;
          color: var(--muted-2);
          font-size: 15px;
          text-align: center;
        }

        @media (max-width: 1100px) {
          .brand-title {
            white-space: normal;
          }

          .hero-shell,
          .hero-content {
            min-height: 540px;
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

        @media (max-width: 860px) {
          :root {
            --header-h: 144px;
          }

          .topbar-inner {
            padding: 12px 0;
            align-items: flex-start;
            flex-direction: column;
          }

          .brand-wrap,
          .nav-group {
            width: 100%;
          }

          .nav-group {
            justify-content: space-between;
            gap: 10px;
          }

          .brand-title {
            font-size: 26px;
            white-space: normal;
          }

          .brand-logo {
            width: 76px;
            height: 76px;
            border-radius: 20px;
          }

          .nav-links {
            gap: 4px;
            flex-wrap: wrap;
          }

          .nav-link {
            font-size: 14px;
            padding: 9px 12px;
          }

          .lang-button {
            min-width: 108px;
            font-size: 14px;
            padding: 10px 14px;
          }

          .hero {
            padding-top: 18px;
          }

          .hero-shell,
          .hero-content {
            min-height: 430px;
          }

          .hero-content {
            padding: 22px;
          }

          .hero-title {
            font-size: 34px;
          }

          .hero-badge {
            font-size: 12px;
            padding: 10px 14px;
          }

          .statement-card {
            padding: 22px;
          }

          .statement-title {
            font-size: 28px;
          }

          .statement-body {
            font-size: 18px;
            line-height: 2;
          }

          .contact-box {
            padding: 18px;
            gap: 16px;
          }

          .contact-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .rtl .contact-main {
            align-items: flex-end;
          }

          .contact-links {
            gap: 10px;
          }

          .contact-pill {
            min-height: 56px;
            padding: 10px 14px;
          }

          .contact-pill-label {
            font-size: 14px;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-wrap">
            <div className="brand-logo">
              <img src={logo} alt={t.brand} />
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
              <a className="nav-link" href="#contact">{t.navContact}</a>
            </nav>

            <div className="lang-dropdown">
              <button className="lang-button" type="button">
                <span>{lang === 'fa' ? 'فارسی' : 'English'}</span>
                <span className="lang-caret" />
              </button>
              <div className="lang-menu">
                <button
                  type="button"
                  className={lang === 'fa' ? 'active-lang' : ''}
                  onClick={() => setLang('fa')}
                >
                  فارسی
                </button>
                <button
                  type="button"
                  className={lang === 'en' ? 'active-lang' : ''}
                  onClick={() => setLang('en')}
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
              <div className="hero-content">
                <div className="hero-copy">
                  <div className="hero-badge">{t.heroBadge}</div>
                  <h2 className="hero-title">{t.heroTitle}</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="statement" className="section">
          <div className="container">
            <div className="glass-card statement-card">
              <h3 className="statement-title">{t.statementTitle}</h3>
              <div className="statement-body">
                {t.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="founders">
                  <div>{t.foundersTitle}</div>
                  <div style={{ marginTop: '10px' }}>{t.founderA}</div>
                  <div>{t.founderB}</div>
                </div>
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
                  <p className="contact-mini">segreteria@shirokhorshid.it</p>
                </div>
              </div>

              <div className="contact-links">
                <a className="contact-pill" href={`mailto:segreteria@shirokhorshid.it`} aria-label="Email">
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
  )
}

export default App
