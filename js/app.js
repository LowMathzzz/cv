import {
  availableLanguages,
  getSavedLanguage,
  getTranslations,
  saveLanguage
} from './i18n.js';

const cv = document.getElementById('cv');
const pdfButton = document.getElementById('pdf');
const languageButtons = document.querySelectorAll('[data-lang]');

const ul = (items, cls = '') =>
  `<ul${cls ? ` class="${cls}"` : ''}>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;

const entry = (bold, italic, place, date, items) =>
  `<div class="row"><div><b>${bold}</b>, <i>${italic}</i></div><div class="meta"><span>${place}</span><span>${date}</span></div></div>${ul(items)}`;

function render(language) {
  const t = getTranslations(language);

  document.documentElement.lang = language;
  document.querySelector('.toolbar').setAttribute('aria-label', t.toolbarLabel);
  cv.innerHTML = `
    <header>
      <h1>Mateo Italo Loechle Arias</h1>
      <p>${t.role}</p>
      <p>${t.loc} | <a href="mailto:mateoloechle@outlook.com">mateoloechle@outlook.com</a> | +51 942116054 |
        <a href="https://lowmath.dev">lowmath.dev</a></p>
      <p class="icons">
        <a href="https://www.linkedin.com/in/mateo-italo-loechle-arias-186173329/"><img src="https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/linkedin.svg" alt="LinkedIn">LinkedIn</a>
        <a href="https://github.com/LowMathzzz"><img src="https://cdn.jsdelivr.net/npm/simple-icons@11.14.0/icons/github.svg" alt="GitHub">GitHub</a>
      </p>
    </header>
    <hr>
    <h2>${t.summary}</h2>
    <div><b>${t.sumRole}</b>, <i>${t.sumStack}</i></div>${ul(t.sumItems)}
    <h2>${t.education}</h2>
    ${entry('Universidad Peruana de Ciencias Aplicadas (UPC)', t.degree, t.eduPlace, t.eduDate, t.eduItems)}
    <h2>${t.experience}</h2>
    ${entry('Arias y Arias Corredores de Seguros', t.expRole, t.expPlace, t.expDate, t.expItems)}
    <h2>${t.projects}</h2>
    ${entry('DoxaCore', t.projRole, t.projPlace, t.projDate, t.projItems)}
    <h2>${t.skills}</h2>
    ${ul(t.skillRows.map(([key, value]) => `<b>${key}:</b> ${value}`), 'skills')}
    <h2>${t.languages}</h2>${ul(t.langItems)}
    <h2>${t.certs}</h2>${ul(t.certItems)}`;

  pdfButton.textContent = t.pdf;
  pdfButton.setAttribute('aria-label', t.pdf);
  document.title = `CV - Mateo Italo Loechle Arias (${language.toUpperCase()})`;
  languageButtons.forEach(button => {
    button.classList.toggle('on', button.dataset.lang === language);
    button.setAttribute('aria-pressed', button.dataset.lang === language);
  });
  saveLanguage(language);
}

languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const language = button.dataset.lang;
    if (availableLanguages.includes(language)) render(language);
  });
});

pdfButton.addEventListener('click', () => window.print());
render(getSavedLanguage());
