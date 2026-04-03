const USERNAME = "JoMULLOA";
const EXCLUDED_REPOS = new Set(["JoMULLOA.github.io", "JoMULLOA"]);
const DEFAULT_LANG = "es";

const state = {
  repos: [],
  filtered: [],
  lang: DEFAULT_LANG
};

const I18N = {
  es: {
    "nav.about": "Perfil",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "hero.kicker": "Ingeniero Civil en Informatica",
    "hero.title": "Desarrollo soluciones tecnologicas con foco en impacto real y calidad tecnica.",
    "hero.description": "Profesional con experiencia practica en programacion, evaluacion y diseno de sistemas. Interesado en inteligencia artificial, desarrollo de software y tecnologias emergentes.",
    "hero.ctaProjects": "Ver proyectos",
    "metrics.repos": "Repositorios publicos",
    "metrics.stars": "Stars acumuladas",
    "metrics.language": "Lenguaje principal",
    "metrics.updated": "Ultima actualizacion",
    "about.eyebrow": "Perfil Profesional",
    "about.title": "Jose Manriquez Ulloa | Ingeniero Civil en Informatica",
    "about.description": "Apasionado por el desarrollo de soluciones tecnologicas, con experiencia en evaluacion y diseno de sistemas. Destaco por resolucion de problemas, trabajo en equipo, compromiso y aprendizaje continuo.",
    "about.educationTitle": "Educacion",
    "about.educationBody": "Ingenieria Civil en Informatica - Universidad del Bio-Bio (2021-2025)",
    "about.educationExtra": "Talentos UdeC - Universidad de Concepcion (2017-2019)",
    "about.focusTitle": "Enfoque",
    "about.focusBody": "Inteligencia artificial, desarrollo de software, automatizacion y tecnologias emergentes.",
    "projects.eyebrow": "Portafolio en vivo",
    "projects.title": "Proyectos destacados",
    "projects.description": "Seleccion automatica de repositorios con mayor senal tecnica y actividad reciente.",
    "projects.searchPlaceholder": "Buscar por nombre o descripcion...",
    "projects.allLanguages": "Todos los lenguajes",
    "projects.empty": "No hay resultados para ese filtro.",
    "experience.eyebrow": "Experiencia",
    "experience.title": "Experiencia destacada",
    "experience.wessex.title": "The Wessex School - Rama de Rugby",
    "experience.wessex.period": "Proyecto de titulo | abr. 2025 - dic. 2025",
    "experience.wessex.body": "Evaluacion y desarrollo de software para automatizar inscripciones, asistencia, pagos y ventas usando Flutter multiplataforma.",
    "experience.afp.title": "AFP Capital - VP Finanzas y Riesgo",
    "experience.afp.period": "Practicante | feb. 2025 - mar. 2025",
    "experience.afp.body": "Automatizacion de encuestas HTML con Apps Script, flujos de datos en Python y reportes dinamicos en Power BI para analisis de riesgo.",
    "experience.ubb.title": "Universidad del Bio-Bio - CIM",
    "experience.ubb.period": "Practicante | ago. 2023 - ene. 2024 y oct. 2024 - dic. 2024",
    "experience.ubb.body": "Proyectos de robotica y vision computacional con Python: sockets, deteccion ArUco y sistema de reconocimiento facial para acceso automatizado.",
    "skills.eyebrow": "Stack tecnico",
    "skills.title": "Radar de habilidades",
    "skills.description": "Distribucion de lenguajes basada en repositorios publicos y herramientas de trabajo.",
    "timeline.eyebrow": "Actividad reciente",
    "timeline.title": "Timeline de repositorios",
    "contact.title": "Contacto profesional",
    "contact.description": "Disponible para colaborar en proyectos de desarrollo de software, automatizacion e iniciativas de innovacion tecnologica.",
    "footer.backToTop": "Volver arriba",
    "ui.repo": "Repositorio",
    "ui.demo": "Demo",
    "ui.stars": "Estrellas",
    "ui.updated": "Actualizado",
    "ui.noDescription": "Proyecto sin descripcion publicada.",
    "ui.unspecified": "Sin especificar",
    "ui.loading": "Cargando datos de GitHub...",
    "ui.synced": "Datos sincronizados con GitHub",
    "ui.fetchError": "No se pudieron cargar los repositorios. Intenta mas tarde.",
    "ui.lastSyncDate": "Ultima sincronizacion"
  },
  en: {
    "nav.about": "Profile",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.kicker": "Computer Engineering Professional",
    "hero.title": "I build technology solutions focused on real impact and technical quality.",
    "hero.description": "Engineer with practical experience in programming, evaluation, and system design. Interested in AI, software development, and emerging technologies.",
    "hero.ctaProjects": "View projects",
    "metrics.repos": "Public repositories",
    "metrics.stars": "Total stars",
    "metrics.language": "Top language",
    "metrics.updated": "Latest update",
    "about.eyebrow": "Professional Profile",
    "about.title": "Jose Manriquez Ulloa | Computer Engineer",
    "about.description": "Passionate about building technology solutions, with hands-on experience in system evaluation and design. Strong in problem-solving, teamwork, commitment, and continuous learning.",
    "about.educationTitle": "Education",
    "about.educationBody": "Computer Engineering - Universidad del Bio-Bio (2021-2025)",
    "about.educationExtra": "Talentos UdeC - Universidad de Concepcion (2017-2019)",
    "about.focusTitle": "Focus Areas",
    "about.focusBody": "Artificial intelligence, software development, automation, and emerging technologies.",
    "projects.eyebrow": "Live Portfolio",
    "projects.title": "Highlighted projects",
    "projects.description": "Automatic selection of repositories with strongest technical signal and recent activity.",
    "projects.searchPlaceholder": "Search by name or description...",
    "projects.allLanguages": "All languages",
    "projects.empty": "No results match this filter.",
    "experience.eyebrow": "Experience",
    "experience.title": "Relevant Experience",
    "experience.wessex.title": "The Wessex School - Rugby Division",
    "experience.wessex.period": "Thesis Project | Apr. 2025 - Dec. 2025",
    "experience.wessex.body": "Evaluation and development of software to automate registration, attendance, payments, and sales using Flutter for cross-platform delivery.",
    "experience.afp.title": "AFP Capital - Finance & Risk VP",
    "experience.afp.period": "Intern | Feb. 2025 - Mar. 2025",
    "experience.afp.body": "HTML survey automation with Apps Script, Python data flows, and dynamic Power BI reports for risk analysis.",
    "experience.ubb.title": "Universidad del Bio-Bio - CIM",
    "experience.ubb.period": "Intern | Aug. 2023 - Jan. 2024 and Oct. 2024 - Dec. 2024",
    "experience.ubb.body": "Robotics and computer vision projects with Python: sockets, ArUco detection, and facial recognition system for automated lab access.",
    "skills.eyebrow": "Technical Stack",
    "skills.title": "Skills Radar",
    "skills.description": "Language distribution from public repositories and common tools.",
    "timeline.eyebrow": "Recent Activity",
    "timeline.title": "Repository timeline",
    "contact.title": "Professional Contact",
    "contact.description": "Available to collaborate on software development, automation, and innovation-driven technology initiatives.",
    "footer.backToTop": "Back to top",
    "ui.repo": "Repository",
    "ui.demo": "Live demo",
    "ui.stars": "Stars",
    "ui.updated": "Updated",
    "ui.noDescription": "Project without public description.",
    "ui.unspecified": "Unspecified",
    "ui.loading": "Loading data from GitHub...",
    "ui.synced": "Data synced from GitHub",
    "ui.fetchError": "Repositories could not be loaded. Please try again later.",
    "ui.lastSyncDate": "Last sync"
  }
};

const projectGrid = document.getElementById("projectGrid");
const languageFilter = document.getElementById("languageFilter");
const searchInput = document.getElementById("searchInput");
const skillCloud = document.getElementById("skillCloud");
const timelineList = document.getElementById("timelineList");
const emptyState = document.getElementById("emptyState");

const repoCount = document.getElementById("repoCount");
const totalStars = document.getElementById("totalStars");
const topLanguage = document.getElementById("topLanguage");
const activeYear = document.getElementById("activeYear");
const footerText = document.getElementById("footerText");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const langBtn = document.getElementById("langBtn");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

langBtn.addEventListener("click", toggleLanguage);

searchInput.addEventListener("input", applyFilters);
languageFilter.addEventListener("change", applyFilters);

applyStaticTranslations();
init();

async function init() {
  try {
    const repos = await fetchRepos();
    state.repos = repos
      .filter((repo) => !EXCLUDED_REPOS.has(repo.name))
      .sort((a, b) => scoreRepo(b) - scoreRepo(a));

    populateFilters();
    updateMetrics();
    renderSkillCloud();
    renderTimeline();
    applyFilters();

    footerText.textContent = `${t("ui.synced")} | ${formatLocaleDate(new Date().toISOString())}`;
  } catch (error) {
    footerText.textContent = t("ui.fetchError");
    projectGrid.innerHTML = `<p class="empty-state">Error al cargar GitHub: ${error.message}</p>`;
    console.error(error);
  }
}

async function fetchRepos() {
  const response = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

function scoreRepo(repo) {
  const stars = repo.stargazers_count || 0;
  const forks = repo.forks_count || 0;
  const descriptionBonus = repo.description ? 1 : 0;
  const recentWeight = Math.max(0, 100 - daysSince(repo.updated_at));
  return stars * 4 + forks * 2 + descriptionBonus + recentWeight * 0.04;
}

function daysSince(dateString) {
  const now = Date.now();
  const then = new Date(dateString).getTime();
  return Math.floor((now - then) / (1000 * 60 * 60 * 24));
}

function updateMetrics() {
  repoCount.textContent = state.repos.length;

  const stars = state.repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
  totalStars.textContent = stars;

  const langMap = languageCountMap(state.repos);
  const [firstLanguage] = Object.entries(langMap).sort((a, b) => b[1] - a[1])[0] || ["N/A"];
  topLanguage.textContent = firstLanguage;

  const lastUpdated = state.repos[0]?.updated_at;
  activeYear.textContent = lastUpdated ? new Date(lastUpdated).getFullYear() : "N/A";
}

function languageCountMap(repos) {
  return repos.reduce((acc, repo) => {
    const key = repo.language || t("ui.unspecified");
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function populateFilters() {
  const langMap = languageCountMap(state.repos);
  const languages = Object.keys(langMap).sort((a, b) => a.localeCompare(b));

  languages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language;
    option.textContent = `${language} (${langMap[language]})`;
    languageFilter.appendChild(option);
  });
}

function applyFilters() {
  const term = searchInput.value.trim().toLowerCase();
  const language = languageFilter.value;
  const fallbackLanguage = t("ui.unspecified");

  state.filtered = state.repos.filter((repo) => {
    const matchesLanguage = language === "all" || (repo.language || fallbackLanguage) === language;
    const searchable = `${repo.name} ${repo.description || ""}`.toLowerCase();
    const matchesTerm = searchable.includes(term);
    return matchesLanguage && matchesTerm;
  });

  renderProjects();
}

function renderProjects() {
  projectGrid.innerHTML = "";

  state.filtered.forEach((repo) => {
    const card = document.getElementById("projectTemplate").content.cloneNode(true);
    card.querySelector(".project-title").textContent = repo.name;
    card.querySelector(".project-language").textContent = repo.language || t("ui.unspecified");
    card.querySelector(".project-description").textContent = repo.description || t("ui.noDescription");
    card.querySelector(".meta-stars").textContent = `${t("ui.stars")}: ${repo.stargazers_count || 0}`;
    card.querySelector(".meta-updated").textContent = `${t("ui.updated")}: ${formatLocaleDate(repo.updated_at)}`;

    const repoLink = card.querySelector(".repo-link");
    repoLink.href = repo.html_url;
    repoLink.textContent = t("ui.repo");

    const liveLink = card.querySelector(".live-link");
    if (repo.homepage) {
      liveLink.hidden = false;
      liveLink.href = repo.homepage;
      liveLink.textContent = t("ui.demo");
    }

    projectGrid.appendChild(card);
  });

  emptyState.hidden = state.filtered.length > 0;
}

function renderSkillCloud() {
  skillCloud.innerHTML = "";
  const entries = Object.entries(languageCountMap(state.repos)).sort((a, b) => b[1] - a[1]);

  entries.forEach(([language, count]) => {
    const pill = document.createElement("span");
    pill.className = "skill-pill";
    pill.textContent = `${language} · ${count}`;
    skillCloud.appendChild(pill);
  });
}

function renderTimeline() {
  timelineList.innerHTML = "";
  const topRecent = state.repos.slice(0, 7);

  topRecent.forEach((repo) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${repo.name}</strong>
      <small>${formatLocaleDate(repo.updated_at)} · ${repo.language || t("ui.unspecified")}</small>
      <span>${repo.description || t("ui.noDescription")}</span>
    `;
    timelineList.appendChild(item);
  });
}

function formatLocaleDate(dateString) {
  const locale = state.lang === "es" ? "es-CL" : "en-US";
  return new Date(dateString).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function applyStaticTranslations() {
  const dict = I18N[state.lang];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      element.setAttribute("placeholder", dict[key]);
    }
  });

  document.documentElement.setAttribute("lang", state.lang);
  langBtn.textContent = state.lang === "es" ? "EN" : "ES";
  footerText.textContent = t("ui.loading");

  const allOption = languageFilter.querySelector("option[value='all']");
  if (allOption) {
    allOption.textContent = t("projects.allLanguages");
  }
}

function toggleLanguage() {
  state.lang = state.lang === "es" ? "en" : "es";
  languageFilter.innerHTML = `<option value="all">${t("projects.allLanguages")}</option>`;
  applyStaticTranslations();
  populateFilters();
  applyFilters();
  renderTimeline();
  renderSkillCloud();
}

function t(key) {
  return I18N[state.lang][key] || key;
}
