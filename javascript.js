
/*
 PRO-MAX ACADÉMIE
 ÉCOLE DE JOURNALISME
 ENG | FRA | KRE
*/

(() => {
  "use strict";

  const translations = {
    en: {
      home: "Home",
      about: "About",
      courses: "Courses",
      programs: "Programs",
      professor: "AI Professor",
      contact: "Contact",
      register: "Register",
      login: "Student Login",
      welcome: "PRO-MAX ACADÉMIE",
      subtitle: "School of Journalism",
      tagline: "Learn. Report. Inform.",
      description:
        "Professional journalism education for radio, television and digital media.",
      start: "Start Learning",
      radio: "Radio Journalism",
      television: "Television Journalism",
      digital: "Digital Media",
      ethics: "Journalism Ethics",
      interview: "Interview Techniques",
      news: "News Reporting",
      production: "Media Production",
      certificate: "Certificate",
      askProfessor: "Ask the AI Professor",
      professorDescription:
        "Meet your Haitian AI journalism professor.",
      footer: "Building Today, Ready for Tomorrow."
    },

    fr: {
      home: "Accueil",
      about: "À propos",
      courses: "Cours",
      programs: "Programmes",
      professor: "Professeure IA",
      contact: "Contact",
      register: "Inscription",
      login: "Connexion étudiant",
      welcome: "PRO-MAX ACADÉMIE",
      subtitle: "École de Journalisme",
      tagline: "Apprendre. Reporter. Informer.",
      description:
        "Formation professionnelle en journalisme pour la radio, la télévision et les médias numériques.",
      start: "Commencer la formation",
      radio: "Journalisme radio",
      television: "Journalisme télévisé",
      digital: "Médias numériques",
      ethics: "Éthique journalistique",
      interview: "Techniques d'interview",
      news: "Reportage d'actualité",
      production: "Production médiatique",
      certificate: "Certificat",
      askProfessor: "Consulter la professeure IA",
      professorDescription:
        "Rencontrez votre professeure haïtienne de journalisme IA.",
      footer: "Bâtir pour aujourd'hui, prêts pour demain."
    },

    ht: {
      home: "Akèy",
      about: "Konsènan",
      courses: "Kou",
      programs: "Pwogram",
      professor: "Pwofesè AI",
      contact: "Kontak",
      register: "Enskripsyon",
      login: "Koneksyon Elèv",
      welcome: "PRO-MAX ACADÉMIE",
      subtitle: "Lekòl Jounalis",
      tagline: "Aprann. Rapòte. Enfòme.",
      description:
        "Fòmasyon pwofesyonèl nan jounalis pou radyo, televizyon ak medya dijital.",
      start: "Kòmanse Aprann",
      radio: "Jounalis Radyo",
      television: "Jounalis Televizyon",
      digital: "Medya Dijital",
      ethics: "Etik Jounalis",
      interview: "Teknik Entèvyou",
      news: "Repòtaj Nouvèl",
      production: "Pwodiksyon Medya",
      certificate: "Sètifika",
      askProfessor: "Poze Pwofesè AI Kesyon",
      professorDescription:
        "Rankontre pwofesè AI fanm ayisyèn ou an.",
      footer: "Bati pou Jodi a, Pare pou Demen."
    }
  };

  function changeLanguage(lang) {
    if (!translations[lang]) return;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const translated = translations[lang][key];

      if (translated !== undefined) {
        el.textContent = translated;
      }
    });

    document.querySelectorAll("[data-lang]").forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    try {
      localStorage.setItem("promax_journalism_lang", lang);
    } catch (error) {
      // Page remains usable without local storage.
    }
  }

  document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("[data-lang]").forEach(btn => {
      btn.addEventListener("click", () => {
        changeLanguage(btn.dataset.lang);
      });
    });

    let savedLanguage = "ht";

    try {
      savedLanguage =
        localStorage.getItem("promax_journalism_lang") || "ht";
    } catch (error) {
      savedLanguage = "ht";
    }

    changeLanguage(savedLanguage);

    const menuToggle =
      document.getElementById("menuToggle") ||
      document.querySelector(".menu-toggle");

    const nav =
      document.getElementById("mainNav") ||
      document.querySelector(".main-nav");

    if (menuToggle && nav) {
      menuToggle.addEventListener("click", () => {
        const opened = nav.classList.toggle("open");
        menuToggle.setAttribute(
          "aria-expanded",
          String(opened)
        );
      });
    }

    const year = document.getElementById("currentYear");
    if (year) {
      year.textContent = new Date().getFullYear();
    }

    const video = document.getElementById("professorVideo");
    const soundToggle = document.getElementById("soundToggle");

    if (video && soundToggle) {
      soundToggle.addEventListener("click", () => {
        video.muted = !video.muted;
        soundToggle.textContent =
          video.muted ? "🔇 Sound Off" : "🔊 Sound On";
        soundToggle.setAttribute(
          "aria-pressed",
          String(!video.muted)
        );
      });
    }

  });

  window.changeLanguage = changeLanguage;
})();
