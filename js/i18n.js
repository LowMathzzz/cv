const translations = {
  es: {
    pdf: 'Descargar PDF',
    toolbarLabel: 'Idioma y acciones del documento',
    role: 'Software Engineer',
    loc: 'Lima, Perú (Open to Remote)',
    summary: 'RESUMEN',
    sumRole: 'Ingeniero de Software',
    sumStack: 'Backend & Mobile — Java/Spring • Flutter • AWS',
    sumItems: [
      'Backend developer con foco en Java y Spring Boot: APIs REST, WebSockets, WebHooks, modelado de datos y seguridad con JWT.',
      'Desarrollo móvil multiplataforma con Flutter y experiencia en proyectos web con Angular, Vue y React.',
      'Trabajo con AWS (EC2, Lambda), Docker, CI/CD (GitHub Actions, Jenkins) y observabilidad con Grafana.',
      'Arquitecturas limpias y escalables: microservicios, event-driven, hexagonal y Clean Architecture, con testing en JUnit y Mockito.'
    ],
    education: 'EDUCACIÓN',
    degree: 'Bachiller en Ingeniería de Software (en progreso)',
    eduPlace: 'Lima, Perú',
    eduDate: 'Mar 2022 – 2027 (graduación estimada)',
    eduItems: [
      'Apliqué principios de ingeniería de software, ciclo de vida del desarrollo (SDLC), diseño y pruebas para construir soluciones sólidas y fáciles de mantener.',
      'Profundicé en estructuras de datos avanzadas y análisis de algoritmos para optimizar el uso de tiempo y memoria.',
      'Diseñé modelos de datos en bases relacionales y NoSQL, priorizando consistencia, rendimiento y escalabilidad.'
    ],
    experience: 'EXPERIENCIA',
    expRole: 'Software Engineer (remoto, con presencialidad ocasional)',
    expPlace: 'Lima, Perú (remoto)',
    expDate: 'Dic 2025 – Sep 2026',
    expItems: [
      'Desarrollé de punta a punta <b>AAS-NET</b>, un CRM para corredores de seguros que centraliza pólizas, cuotas y vencimientos, siniestros, clientes y subagentes, y reportes exportables.',
      'Construí un backend modular en Spring Boot 3 y Java 21: lógica de negocio, API REST documentada en OpenAPI y modelo de datos en PostgreSQL para operar toda la cartera desde un solo sistema.',
      'Aseguré la API con autenticación stateless (Spring Security + JWT) y hardening —validación de entrada, rate limiting, cabeceras seguras—, con control de acceso por roles (RBAC) para subagentes, administrativos y gerentes.',
      'Implementé el cifrado de datos sensibles en reposo y reforcé la seguridad del frontend para proteger la información de clientes y pólizas.',
      'Contenericé la aplicación con Docker y automaticé build y despliegue con CI/CD en GitHub Actions; entregué el sistema completo trabajando de forma remota y coordinando con el equipo en sitio.'
    ],
    projects: 'PROYECTOS',
    projRole: 'Plataforma web de gestión operativa para restaurantes y parrillas',
    projPlace: 'Proyecto personal',
    projDate: '2025 – Presente',
    projItems: [
      'Plataforma SaaS modular de gestión operativa: asistencia y planilla, gastos y cuentas por pagar, conciliación de ventas, inventario por recetas y recepción de mercadería.',
      'Ingesta automática de archivos Excel (biométrico, reportes de ventas, pedidos de proveedores) con Apache POI y procesamiento asíncrono, alimentando un motor de cálculo de tardanzas, descuentos y sueldos.',
      'Frontend en React y TypeScript con dashboards de ventas, costos y personal.',
      'Seguridad por capas: cifrado de datos sensibles, RBAC con Spring Security, sesiones con expiración en Redis y rate limiting; desplegado con Docker en AWS.',
      '<i>Stack:</i> Java 21, Spring Boot 3, PostgreSQL, Redis, React, TypeScript, Docker, AWS.'
    ],
    skills: 'HABILIDADES TÉCNICAS',
    skillRows: [
      ['Desarrollo de software', 'Java, Kotlin, Dart, Python, TypeScript, JavaScript, C#, C++'],
      ['Cloud y DevOps', 'AWS (EC2, Lambda), Azure, GitHub Actions, Jenkins, Docker, CI/CD, Linux, Grafana'],
      ['Bases de datos', 'SQL, PostgreSQL, MongoDB, Redis'],
      ['Arquitectura y patrones de diseño', 'MVC, microservicios, arquitectura orientada a eventos, arquitectura hexagonal, Clean Architecture, APIs REST, WebSockets, WebHooks'],
      ['Frameworks y herramientas', 'Spring Boot, Flutter, Angular, Vue, React, JUnit, Mockito, Kafka, Stripe, Culqi, SendGrid'],
      ['Metodologías', 'Git, Git Flow, Maven, Scrum, PMBOK']
    ],
    languages: 'IDIOMAS',
    langItems: ['<b>Español</b> — Nativo', '<b>Inglés</b> — B2 (conversacional / profesional)'],
    certs: 'CERTIFICACIONES Y CURSOS',
    certItems: [
      'Introducción a MongoDB — Certificación',
      'Fundamentos de Scrum — Certificación',
      'Python — Certificación',
      'Java (Básico) — Certificación',
      'Meta Social Media Marketing Professional — Certificación',
      'Spring Boot — Curso',
      'Flutter — Curso de desarrollo móvil',
      'Desarrollo de Microservicios — Curso',
      'Backend Developer — En proceso'
    ]
  },
  en: {
    pdf: 'Download PDF',
    toolbarLabel: 'Language and document actions',
    role: 'Software Engineer',
    loc: 'Lima, Peru (Open to Remote)',
    summary: 'SUMMARY',
    sumRole: 'Software Engineer',
    sumStack: 'Backend & Mobile — Java/Spring • Flutter • AWS',
    sumItems: [
      'Backend developer focused on Java and Spring Boot: REST APIs, WebSockets, WebHooks, data modeling and JWT security.',
      'Cross-platform mobile development with Flutter and experience in web projects with Angular, Vue and React.',
      'Work with AWS (EC2, Lambda), Docker, CI/CD (GitHub Actions, Jenkins) and observability with Grafana.',
      'Clean, scalable architectures: microservices, event-driven, hexagonal and Clean Architecture, with testing in JUnit and Mockito.'
    ],
    education: 'EDUCATION',
    degree: "Bachelor's in Software Engineering (in progress)",
    eduPlace: 'Lima, Peru',
    eduDate: 'Mar 2022 – 2027 (expected graduation)',
    eduItems: [
      'Applied software engineering principles, the development life cycle (SDLC), design and testing to build robust, maintainable solutions.',
      'Studied advanced data structures and algorithm analysis to optimize time and memory usage.',
      'Designed data models for relational and NoSQL databases, prioritizing consistency, performance and scalability.'
    ],
    experience: 'EXPERIENCE',
    expRole: 'Software Engineer (remote, with occasional on-site presence)',
    expPlace: 'Lima, Peru (remote)',
    expDate: 'Dec 2025 – Sep 2026',
    expItems: [
      'Built <b>AAS-NET</b> end to end, a CRM for insurance brokers that centralizes policies, installments and due dates, claims, clients and sub-agents, and exportable reports.',
      'Built a modular Spring Boot 3 / Java 21 backend: business logic, a REST API documented in OpenAPI and a PostgreSQL data model to run the whole portfolio from a single system.',
      'Secured the API with stateless authentication (Spring Security + JWT) and hardening —input validation, rate limiting, secure headers—, with role-based access control (RBAC) for sub-agents, administrative staff and managers.',
      'Implemented encryption of sensitive data at rest and hardened frontend security to protect client and policy data.',
      'Containerized the app with Docker and automated build and deployment with CI/CD on GitHub Actions; delivered the complete system working remotely and coordinating with the on-site team.'
    ],
    projects: 'PROJECTS',
    projRole: 'Operations management web platform for restaurants and grills',
    projPlace: 'Personal project',
    projDate: '2025 – Present',
    projItems: [
      'Modular SaaS operations platform: attendance and payroll, expenses and accounts payable, sales reconciliation, recipe-based inventory and goods receiving.',
      'Automatic ingestion of Excel files (biometric, sales reports, supplier orders) with Apache POI and asynchronous processing, feeding a calculation engine for tardiness, deductions and salaries.',
      'React and TypeScript frontend with sales, cost and staff dashboards.',
      'Layered security: sensitive data encryption, RBAC with Spring Security, expiring sessions in Redis and rate limiting; deployed with Docker on AWS.',
      '<i>Stack:</i> Java 21, Spring Boot 3, PostgreSQL, Redis, React, TypeScript, Docker, AWS.'
    ],
    skills: 'TECHNICAL SKILLS',
    skillRows: [
      ['Software development', 'Java, Kotlin, Dart, Python, TypeScript, JavaScript, C#, C++'],
      ['Cloud & DevOps', 'AWS (EC2, Lambda), Azure, GitHub Actions, Jenkins, Docker, CI/CD, Linux, Grafana'],
      ['Databases', 'SQL, PostgreSQL, MongoDB, Redis'],
      ['Architecture & design patterns', 'MVC, microservices, event-driven architecture, hexagonal architecture, Clean Architecture, REST APIs, WebSockets, WebHooks'],
      ['Frameworks & tools', 'Spring Boot, Flutter, Angular, Vue, React, JUnit, Mockito, Kafka, Stripe, Culqi, SendGrid'],
      ['Methodologies', 'Git, Git Flow, Maven, Scrum, PMBOK']
    ],
    languages: 'LANGUAGES',
    langItems: ['<b>Spanish</b> — Native', '<b>English</b> — B2 (conversational / professional)'],
    certs: 'CERTIFICATIONS & COURSES',
    certItems: [
      'Introduction to MongoDB — Certification',
      'Scrum Fundamentals — Certification',
      'Python — Certification',
      'Java (Basic) — Certification',
      'Meta Social Media Marketing Professional — Certification',
      'Spring Boot — Course',
      'Flutter — Mobile development course',
      'Microservices Development — Course',
      'Backend Developer — In progress'
    ]
  }
};

export const availableLanguages = Object.freeze(Object.keys(translations));

export function getTranslations(language) {
  return translations[language] || translations.es;
}

export function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem('cvlang');
    return availableLanguages.includes(savedLanguage) ? savedLanguage : 'es';
  } catch (error) {
    return 'es';
  }
}

export function saveLanguage(language) {
  try {
    localStorage.setItem('cvlang', language);
  } catch (error) {
    // Language selection still works when storage is unavailable.
  }
}
