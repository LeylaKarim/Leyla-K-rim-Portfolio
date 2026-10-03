// ==========================================
// 0. Settings
// ==========================================
// E-poçt ünvanını bura yaz (məs: "ad@example.com"). Boş qalsa, Email düyməsi və əlaqə formu gizlədilir.
const CONTACT_EMAIL = "";

const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ==========================================
// 1. Translations (EN / AZ / RU)
// ==========================================
const translations = {
    en: {
        name: "Leyla Karim",
        nav_about: "About", nav_skills: "Skills", nav_exp: "Experience", nav_edu: "Education", nav_work: "Work", nav_contact: "Contact",
        hero_badge: "Education + Technology + Digital Skills",
        hero_desc: "I teach Microsoft Office programs in a simple and practical way and also give online Informatics lessons. Alongside this, I am developing my knowledge in frontend development.",
        btn_about: "About Me", btn_talk: "Get in Touch",
        about_title: "About Me",
        about_p1: "I hold a bachelor's degree in Mathematics and Informatics Teaching. I currently teach Microsoft Office programs, with a focus on the practical use of Word, Excel, PowerPoint and Access. I also give online Informatics lessons and develop my knowledge in frontend development.",
        about_p2: "Besides learning technology, it is important to me to explain it to others in a simple and understandable way. On my YouTube channel I share practical Microsoft Office lessons and prepare content aimed at developing Informatics and digital skills.",
        stat_1: "Microsoft Office", stat_2: "Online Informatics", stat_3: "Frontend Development", stat_4: "Mathematics & Informatics",
        skills_title: "Skills",
        sg_front: "Frontend", sg_office: "Microsoft Office", sg_teach: "Teaching",
        sk_rwd: "Responsive Web Design",
        t1: "Microsoft Office Training", t2: "Online Informatics Teaching", t3: "Informatics Education", t4: "Practical Learning", t5: "Lesson Preparation",
        exp_title: "Experience",
        exp1_role: "Microsoft Office Instructor", exp1_date: "Current position",
        exp1_b1: "Teaching Microsoft Word, Excel, PowerPoint and Access",
        exp1_b2: "Preparing practical exercises and lesson materials",
        exp1_b3: "Explaining computer and Office concepts in a simple and understandable way",
        exp1_b4: "Creating practical Excel and Microsoft Office learning content",
        exp1_b5: "Helping learners develop everyday digital skills",
        exp2_role: "Online Informatics Teacher", exp2_org: "Online Teaching",
        exp2_b1: "Conducting Informatics lessons online",
        exp2_b2: "Explaining Informatics concepts in a clear and practical way",
        exp2_b3: "Preparing lessons according to learners' needs",
        exp2_b4: "Supporting students with exercises and practical tasks",
        exp3_role: "Pedagogical Practice — Informatics & Mathematics", exp3_org: "Sumqayıt City Technical Lyceum No. 23",
        edu_title: "Education & Certificates", edu_h: "Education", edu_univ: "Sumqayıt State University",
        edu_deg: "Bachelor's Degree — Mathematics and Informatics Teaching",
        cert_h: "Certificates", cert2: "Frontend Development — High Honour",
        yt_title: "Leyla Kərim — Microsoft Office Tutorials",
        yt_desc: "Lessons where I learn and teach Microsoft Office programs in a simple and practical way. Useful, application-focused videos on Excel, Word, PowerPoint and other Office topics.",
        yt_btn: "Go to YouTube channel",
        inf_title: "Online Informatics Lessons", inf_alt: "Online Informatics Lessons by Leyla Kərim",
        inf_p1: "I conduct Informatics lessons online and explain concepts in a clear and practical way.",
        inf_p2: "Lessons are prepared according to learners' needs, with exercises and practical tasks to support understanding.",
        work_title: "Projects & Content",
        proj1_title: "Microsoft Office Tutorials", proj1_desc: "Practical educational content covering Microsoft Word, Excel, PowerPoint and Access.",
        proj2_title: "Excel Educational Content", proj2_desc: "Practical Excel lessons covering formulas, functions, Ribbon tools and real-life examples.",
        proj3_title: "Online Informatics Lessons", proj3_desc: "Online Informatics teaching and educational materials.",
        proj4_title: "Personal Portfolio", proj4_desc: "This personal portfolio website showcasing my education, teaching experience, skills and digital work.",
        tag_formulas: "Formulas", tag_functions: "Functions", btn_watch: "Watch on YouTube", btn_more: "Learn more",
        contact_title: "Let's Connect",
        contact_desc: "For collaboration, lessons or any other questions, you are welcome to get in touch with me.",
        form_name: "Name", form_email: "Email", form_msg: "Your message...", form_btn: "Send Message",
        form_ok: "Your email app should open now.", form_unavail: "Email is not set up yet — please reach me via LinkedIn.",
        footer: "© 2026 Leyla Kərim. All rights reserved.",
        roles: ["Microsoft Office Teacher", "Online Informatics Teacher", "Junior Frontend Developer"]
    },
    az: {
        name: "Leyla Kərim",
        nav_about: "Haqqımda", nav_skills: "Bacarıqlar", nav_exp: "Təcrübə", nav_edu: "Təhsil", nav_work: "Layihələr", nav_contact: "Əlaqə",
        hero_badge: "Təhsil + Texnologiya + Rəqəmsal bacarıqlar",
        hero_desc: "Mən Microsoft Office proqramlarını sadə və praktik şəkildə öyrədirəm, həmçinin onlayn informatika dərsləri keçirəm. Bununla yanaşı, frontend development istiqamətində biliklərimi inkişaf etdirirəm.",
        btn_about: "Haqqımda", btn_talk: "Əlaqə saxla",
        about_title: "Haqqımda",
        about_p1: "Mən Riyaziyyat və İnformatika müəllimliyi üzrə bakalavr təhsili almışam. Hazırda Microsoft Office proqramları üzrə dərslər keçirəm və xüsusilə Word, Excel, PowerPoint və Access proqramlarının praktik istifadəsini öyrədirəm. Eyni zamanda onlayn informatika dərsləri keçir və frontend development istiqamətində biliklərimi inkişaf etdirirəm.",
        about_p2: "Texnologiyanı öyrənməklə yanaşı, onu başqalarına sadə və başa düşülən formada izah etmək mənim üçün vacibdir. YouTube kanalımda Microsoft Office üzrə praktik dərslər paylaşır, informatika və rəqəmsal bacarıqların inkişafına yönəlmiş məzmun hazırlayıram.",
        stat_1: "Microsoft Office", stat_2: "Onlayn İnformatika", stat_3: "Frontend Development", stat_4: "Riyaziyyat və İnformatika",
        skills_title: "Bacarıqlar",
        sg_front: "Frontend", sg_office: "Microsoft Office", sg_teach: "Tədris",
        sk_rwd: "Responsiv Veb Dizayn",
        t1: "Microsoft Office təlimi", t2: "Onlayn informatika tədrisi", t3: "İnformatika təhsili", t4: "Praktik öyrənmə", t5: "Dərs hazırlığı",
        exp_title: "Təcrübə",
        exp1_role: "Microsoft Office müəllimi", exp1_date: "Hazırkı vəzifə",
        exp1_b1: "Microsoft Word, Excel, PowerPoint və Access proqramlarının tədrisi",
        exp1_b2: "Praktik tapşırıqların və dərs materiallarının hazırlanması",
        exp1_b3: "Kompüter və Office anlayışlarının sadə və başa düşülən şəkildə izahı",
        exp1_b4: "Praktik Excel və Microsoft Office tədris məzmununun hazırlanması",
        exp1_b5: "Öyrənənlərin gündəlik rəqəmsal bacarıqlarının inkişafına dəstək",
        exp2_role: "Onlayn informatika müəllimi", exp2_org: "Onlayn tədris",
        exp2_b1: "İnformatika dərslərinin onlayn keçirilməsi",
        exp2_b2: "İnformatika anlayışlarının aydın və praktik şəkildə izahı",
        exp2_b3: "Dərslərin öyrənənlərin ehtiyaclarına uyğun hazırlanması",
        exp2_b4: "Tələbələrə tapşırıq və praktik işlərdə dəstək",
        exp3_role: "Pedaqoji praktika — İnformatika və Riyaziyyat", exp3_org: "Sumqayıt şəhər 23 nömrəli texniki fənlər təmayüllü lisey",
        edu_title: "Təhsil və Sertifikatlar", edu_h: "Təhsil", edu_univ: "Sumqayıt Dövlət Universiteti",
        edu_deg: "Bakalavr — Riyaziyyat və İnformatika müəllimliyi",
        cert_h: "Sertifikatlar", cert2: "Frontend Development — High Honour",
        yt_title: "Leyla Kərim — Microsoft Office Tutorials",
        yt_desc: "Microsoft Office proqramlarını sadə və praktik şəkildə öyrəndiyim və öyrətdiyim dərslər. Excel, Word, PowerPoint və digər Office mövzuları üzrə faydalı və tətbiq yönümlü videolar.",
        yt_btn: "YouTube kanalına keç",
        inf_title: "Onlayn İnformatika dərsləri", inf_alt: "Leyla Kərim tərəfindən onlayn informatika dərsləri",
        inf_p1: "İnformatika dərslərini onlayn keçirir və anlayışları aydın və praktik şəkildə izah edirəm.",
        inf_p2: "Dərslər öyrənənlərin ehtiyaclarına uyğun hazırlanır, anlamanı möhkəmləndirmək üçün tapşırıq və praktik işlər əlavə olunur.",
        work_title: "Layihələr və Məzmun",
        proj1_title: "Microsoft Office dərsləri", proj1_desc: "Microsoft Word, Excel, PowerPoint və Access üzrə praktik tədris məzmunu.",
        proj2_title: "Excel tədris məzmunu", proj2_desc: "Formullar, funksiyalar, Ribbon alətləri və real həyat nümunələri əhatə edən praktik Excel dərsləri.",
        proj3_title: "Onlayn İnformatika dərsləri", proj3_desc: "Onlayn informatika tədrisi və tədris materialları.",
        proj4_title: "Şəxsi portfolio", proj4_desc: "Təhsilimi, tədris təcrübəmi, bacarıqlarımı və rəqəmsal işlərimi təqdim edən bu şəxsi portfolio saytı.",
        tag_formulas: "Formullar", tag_functions: "Funksiyalar", btn_watch: "YouTube-da izlə", btn_more: "Ətraflı",
        contact_title: "Gəlin əlaqə saxlayaq",
        contact_desc: "Əməkdaşlıq, dərslər və ya digər suallarınız üçün mənimlə əlaqə saxlaya bilərsiniz.",
        form_name: "Ad", form_email: "E-poçt", form_msg: "Mesajınız...", form_btn: "Mesaj göndər",
        form_ok: "E-poçt proqramınız indi açılmalıdır.", form_unavail: "E-poçt hələ quraşdırılmayıb — zəhmət olmasa LinkedIn vasitəsilə yazın.",
        footer: "© 2026 Leyla Kərim. Bütün hüquqlar qorunur.",
        roles: ["Microsoft Office müəllimi", "Onlayn informatika müəllimi", "Junior Frontend Developer"]
    },
    ru: {
        name: "Лейла Керим",
        nav_about: "Обо мне", nav_skills: "Навыки", nav_exp: "Опыт", nav_edu: "Образование", nav_work: "Проекты", nav_contact: "Контакты",
        hero_badge: "Образование + Технологии + Цифровые навыки",
        hero_desc: "Я просто и практично преподаю программы Microsoft Office, а также провожу онлайн-уроки информатики. Параллельно развиваю знания в области frontend-разработки.",
        btn_about: "Обо мне", btn_talk: "Связаться",
        about_title: "Обо мне",
        about_p1: "Я получила степень бакалавра по направлению «Преподавание математики и информатики». Сейчас преподаю программы Microsoft Office, особое внимание уделяя практическому использованию Word, Excel, PowerPoint и Access. Также провожу онлайн-уроки информатики и развиваю знания в области frontend-разработки.",
        about_p2: "Помимо изучения технологий, для меня важно объяснять их другим просто и понятно. На своём YouTube-канале я делюсь практическими уроками по Microsoft Office и готовлю материалы, направленные на развитие информатики и цифровых навыков.",
        stat_1: "Microsoft Office", stat_2: "Онлайн-информатика", stat_3: "Frontend-разработка", stat_4: "Математика и информатика",
        skills_title: "Навыки",
        sg_front: "Frontend", sg_office: "Microsoft Office", sg_teach: "Преподавание",
        sk_rwd: "Адаптивный веб-дизайн",
        t1: "Обучение Microsoft Office", t2: "Онлайн-преподавание информатики", t3: "Информатика в образовании", t4: "Практическое обучение", t5: "Подготовка уроков",
        exp_title: "Опыт работы",
        exp1_role: "Преподаватель Microsoft Office", exp1_date: "Текущая должность",
        exp1_b1: "Преподавание Microsoft Word, Excel, PowerPoint и Access",
        exp1_b2: "Подготовка практических заданий и учебных материалов",
        exp1_b3: "Простое и понятное объяснение компьютерных понятий и работы в Office",
        exp1_b4: "Создание практических учебных материалов по Excel и Microsoft Office",
        exp1_b5: "Помощь в развитии повседневных цифровых навыков",
        exp2_role: "Преподаватель информатики онлайн", exp2_org: "Онлайн-преподавание",
        exp2_b1: "Проведение уроков информатики онлайн",
        exp2_b2: "Ясное и практичное объяснение понятий информатики",
        exp2_b3: "Подготовка уроков с учётом потребностей учеников",
        exp2_b4: "Поддержка студентов в выполнении упражнений и практических заданий",
        exp3_role: "Педагогическая практика — информатика и математика", exp3_org: "Сумгаитский городской технический лицей № 23",
        edu_title: "Образование и сертификаты", edu_h: "Образование", edu_univ: "Сумгаитский государственный университет",
        edu_deg: "Бакалавр — преподавание математики и информатики",
        cert_h: "Сертификаты", cert2: "Frontend Development — High Honour",
        yt_title: "Leyla Kərim — Microsoft Office Tutorials",
        yt_desc: "Уроки, в которых я изучаю и преподаю программы Microsoft Office просто и практично. Полезные видео по Excel, Word, PowerPoint и другим темам Office.",
        yt_btn: "Перейти на YouTube-канал",
        inf_title: "Онлайн-уроки информатики", inf_alt: "Онлайн-уроки информатики от Лейлы Керим",
        inf_p1: "Я провожу уроки информатики онлайн и объясняю понятия ясно и практично.",
        inf_p2: "Уроки готовятся с учётом потребностей учеников, с упражнениями и практическими заданиями для лучшего понимания.",
        work_title: "Проекты и контент",
        proj1_title: "Уроки Microsoft Office", proj1_desc: "Практический обучающий контент по Microsoft Word, Excel, PowerPoint и Access.",
        proj2_title: "Обучающий контент по Excel", proj2_desc: "Практические уроки Excel: формулы, функции, инструменты Ribbon и примеры из жизни.",
        proj3_title: "Онлайн-уроки информатики", proj3_desc: "Онлайн-преподавание информатики и учебные материалы.",
        proj4_title: "Личное портфолио", proj4_desc: "Этот сайт-портфолио, представляющий моё образование, педагогический опыт, навыки и цифровые работы.",
        tag_formulas: "Формулы", tag_functions: "Функции", btn_watch: "Смотреть на YouTube", btn_more: "Подробнее",
        contact_title: "Давайте свяжемся",
        contact_desc: "По вопросам сотрудничества, уроков и другим вопросам вы можете связаться со мной.",
        form_name: "Имя", form_email: "Email", form_msg: "Ваше сообщение...", form_btn: "Отправить сообщение",
        form_ok: "Сейчас должна открыться ваша почтовая программа.", form_unavail: "Почта пока не настроена — пожалуйста, напишите через LinkedIn.",
        footer: "© 2026 Лейла Керим. Все права защищены.",
        roles: ["Преподаватель Microsoft Office", "Преподаватель информатики онлайн", "Junior Frontend-разработчик"]
    }
};

let currentLang = 'en';
let rolesArray = translations.en.roles;
let roleIndex = 0, charIndex = 0, isDeleting = false;

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    rolesArray = translations[lang].roles;
    roleIndex = 0; charIndex = 0; isDeleting = false;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = translations[lang][el.getAttribute('data-i18n')];
        if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const value = translations[lang][el.getAttribute('data-i18n-placeholder')];
        if (value !== undefined) el.placeholder = value;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const value = translations[lang][el.getAttribute('data-i18n-alt')];
        if (value !== undefined) el.alt = value;
    });
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
    try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// ==========================================
// 2. Typing Effect
// ==========================================
const typingElement = document.getElementById('typing-text');
if (typingElement) {
    if (reduceMotion) {
        typingElement.textContent = rolesArray[0];
    } else {
        (function typeOut() {
            const role = rolesArray[roleIndex];
            charIndex += isDeleting ? -1 : 1;
            typingElement.textContent = role.substring(0, charIndex);
            let speed = isDeleting ? 30 : 90;
            if (!isDeleting && charIndex >= role.length) { speed = 1800; isDeleting = true; }
            else if (isDeleting && charIndex <= 0) { isDeleting = false; roleIndex = (roleIndex + 1) % rolesArray.length; speed = 400; }
            setTimeout(typeOut, speed);
        })();
    }
}

// ==========================================
// 3. Custom Cursor & 3D Tilt (desktop only)
// ==========================================
if (!isTouchDevice) {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    document.documentElement.classList.add('has-cursor');

    window.addEventListener('mousemove', (e) => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        outline.animate({ left: e.clientX + 'px', top: e.clientY + 'px' }, { duration: 300, fill: 'forwards' });
    });
    document.querySelectorAll('a, button, input, textarea').forEach(el => {
        el.addEventListener('mouseenter', () => outline.classList.add('hover'));
        el.addEventListener('mouseleave', () => outline.classList.remove('hover'));
    });

    if (!reduceMotion) {
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mouseenter', () => card.style.transition = 'border-color 0.3s');
            card.addEventListener('mousemove', (e) => {
                const r = card.getBoundingClientRect();
                const tiltX = ((e.clientY - r.top) / r.height - 0.5) * -5;
                const tiltY = ((e.clientX - r.left) / r.width - 0.5) * 5;
                card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.015, 1.015, 1.015)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transition = '';
                card.style.transform = '';
            });
        });
    }
}

// ==========================================
// 4. Mobile Menu
// ==========================================
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
if (mobileBtn && navLinks) {
    const setMenu = (open) => {
        navLinks.classList.toggle('active', open);
        mobileBtn.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        document.body.style.overflow = open ? 'hidden' : '';
    };
    mobileBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('active')));
    document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => setMenu(false)));
}

// ==========================================
// 5. Theme Toggle
// ==========================================
let particleRGB = '34, 211, 238';
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(light) {
    document.body.classList.toggle('light-mode', light);
    particleRGB = light ? '124, 58, 237' : '34, 211, 238';
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-sun', light);
        icon.classList.toggle('fa-moon', !light);
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = light ? '#f5f7fc' : '#0b1020';
}
if (themeToggle) {
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) { /* ignore */ }
    applyTheme(saved === 'light');
    themeToggle.addEventListener('click', () => {
        const light = !document.body.classList.contains('light-mode');
        applyTheme(light);
        try { localStorage.setItem('theme', light ? 'light' : 'dark'); } catch (e) { /* ignore */ }
    });
}

// ==========================================
// 6. Particle Background
// ==========================================
const canvas = document.getElementById('particle-canvas');
if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const mouse = { x: null, y: null, radius: isTouchDevice ? 100 : 140 };

    window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener('touchmove', (e) => { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; }, { passive: true });
    window.addEventListener('touchend', () => { mouse.x = null; mouse.y = null; });

    class Particle {
        constructor() {
            this.size = Math.random() * 1.8 + 0.8;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = Math.random() - 0.5;
            this.vy = Math.random() - 0.5;
        }
        update() {
            if (this.x > canvas.width || this.x < 0) this.vx = -this.vx;
            if (this.y > canvas.height || this.y < 0) this.vy = -this.vy;
            if (mouse.x !== null) {
                const dx = mouse.x - this.x, dy = mouse.y - this.y;
                if (Math.hypot(dx, dy) < mouse.radius + this.size) {
                    this.x -= Math.sign(dx) * 3;
                    this.y -= Math.sign(dy) * 3;
                }
            }
            this.x += this.vx * 0.6;
            this.y += this.vy * 0.6;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${particleRGB}, 0.35)`;
            ctx.fill();
        }
    }

    function initCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const count = Math.min(60, Math.floor((canvas.width * canvas.height) / (window.innerWidth < 768 ? 16000 : 12000)));
        particles = Array.from({ length: count }, () => new Particle());
    }
    function animateCanvas() {
        requestAnimationFrame(animateCanvas);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => p.update());
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x, dy = particles[a].y - particles[b].y;
                const dist = dx * dx + dy * dy;
                if (dist < 14000) {
                    ctx.strokeStyle = `rgba(${particleRGB}, ${(1 - dist / 14000) * 0.18})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }
    window.addEventListener('resize', initCanvas);
    initCanvas();
    animateCanvas();
}

// ==========================================
// 7. Scroll Reveal
// ==========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ==========================================
// 8. Profile Photo (shows automatically when the image loads)
// ==========================================
const profileImg = document.getElementById('profile-img');
const photoFrame = document.getElementById('photo-frame');
if (profileImg && photoFrame) {
    const markLoaded = () => { if (profileImg.naturalWidth > 0) photoFrame.classList.add('has-photo'); };
    if (profileImg.complete) markLoaded();
    profileImg.addEventListener('load', markLoaded);
}

// ==========================================
// 9. Contact (opens the visitor's email app)
// ==========================================
const emailBtn = document.getElementById('email-btn');
const contactBox = document.getElementById('contact-box');
const contactFormEl = document.getElementById('contact-form');
if (CONTACT_EMAIL && contactBox && contactFormEl) { contactBox.classList.remove('no-form'); contactFormEl.hidden = false; }
if (emailBtn) {
    if (CONTACT_EMAIL) emailBtn.href = 'mailto:' + CONTACT_EMAIL;
    else emailBtn.style.display = 'none';
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    const status = document.getElementById('form-status');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!CONTACT_EMAIL) { status.textContent = translations[currentLang].form_unavail; return; }
        const data = new FormData(contactForm);
        const subject = encodeURIComponent('Portfolio — ' + data.get('from_name'));
        const body = encodeURIComponent(data.get('message') + '\n\n' + data.get('from_name') + ' (' + data.get('reply_to') + ')');
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
        status.textContent = translations[currentLang].form_ok;
        contactForm.reset();
    });
}

// ==========================================
// 10. Init (restore saved language)
// ==========================================
let savedLang = null;
try { savedLang = localStorage.getItem('lang'); } catch (e) { /* ignore */ }
setLanguage(savedLang && translations[savedLang] ? savedLang : 'en');

// ==========================================
// 11. Nav: scrolled state + active section highlight
// ==========================================
const navbar = document.getElementById('navbar');
const spyLinks = Array.from(document.querySelectorAll('.nav-item'));
const spyTargets = spyLinks.map(a => document.querySelector(a.getAttribute('href')));
function onScroll() {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 24);
    const y = window.scrollY + 140;
    let current = -1;
    spyTargets.forEach((t, i) => { if (t && t.offsetTop <= y) current = i; });
    spyLinks.forEach((a, i) => a.classList.toggle('active', i === current));
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();