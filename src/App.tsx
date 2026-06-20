import { ArrowUpRight, CheckCircle, EnvelopeSimple, GithubLogo, Sparkle, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Reveal } from "./components/Reveal";
import { contactItems, navItems, profileFacts, profileHighlights, projects, skillGroups } from "./data/portfolio";
import type { Project } from "./data/portfolio";

function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.18, 0.4, 0.62] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

function useMediaQuery(query: string) {
  const getMatches = () => typeof window !== "undefined" && window.matchMedia(query).matches;
  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQuery.matches);

    updateMatches();
    mediaQuery.addEventListener("change", updateMatches);
    return () => mediaQuery.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
}

function Header({ activeId }: { activeId: string }) {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Kembali ke bagian Home">
        BW
      </a>

      <nav className="site-nav" aria-label="Navigasi utama">
        {navItems.map((item) => {
          const id = item.href.replace("#", "");
          return (
            <a key={item.href} href={item.href} className={activeId === id ? "is-active" : undefined}>
              {item.label}
            </a>
          );
        })}
      </nav>

      <a className="nav-contact" href="https://www.canva.com/design/DAHIDbyiUAc/MUQ6LQRl_ofzA8QlRVv3-g/edit?utm_content=DAHIDbyiUAc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noreferrer">
        Open CV
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-panel" id="home" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="section-kicker">Portofolio Digital</p>
        <h1 id="hero-title">Bayu Widiartana</h1>
        <p className="hero-copy">Mahasiswa Teknologi Informasi di ITB STIKOM Bali dengan fokus pada pengembangan web dan desain antarmuka.</p>
        <div className="hero-actions" aria-label="Aksi utama">
          <a className="button primary" href="#projects">
            Lihat Proyek
            <ArrowUpRight weight="bold" />
          </a>
          <a className="button secondary" href="#profile">
            Profil Saya
          </a>
        </div>
      </div>

      <div className="hero-portrait" aria-label="Foto profesional placeholder">
        <img src="/foto-profile.webp" alt="Foto profesional placeholder Bayu Widiartana" width="500" height="500" decoding="async" />
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section className="section-panel profile-section" id="profile" aria-labelledby="profile-title">
      <Reveal className="section-heading compact">
        <h2 id="profile-title">Profil Diri</h2>
        <p>Berikut adalah beberapa informasi tentang latar belakang dan minat saya dalam pengembangan web.</p>
      </Reveal>

      <div className="profile-layout">
        <Reveal className="profile-statement">
          <p>Saya memiliki minat pada pengembangan web, desain antarmuka, animasi UI, dan pengolahan data. Dalam proses belajar, saya terbiasa mengubah kebutuhan menjadi tampilan yang mudah dipakai dan dapat dijelaskan secara runtut.</p>
          <p>Tujuan karier saya adalah menjadi Web Developer yang mampu membangun produk digital dengan struktur teknis kuat, pengalaman pengguna baik, dan komunikasi hasil kerja yang jelas.</p>
        </Reveal>

        <Reveal className="fact-grid" delay={0.1}>
          {profileFacts.map((fact) => (
            <article className="fact-item" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </article>
          ))}
        </Reveal>
      </div>

      <div className="highlight-grid">
        {profileHighlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal className="highlight-item" delay={index * 0.06} key={item.title}>
              <Icon aria-hidden="true" weight="duotone" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function ProjectPreviewImage({ project }: { project: Project }) {
  return (
    <div className="project-image-frame">
      <picture>
        <source media="(max-width: 680px)" srcSet={project.cardImage.mobile} />
        <img src={project.cardImage.desktop} alt={project.cardImage.alt} width={project.cardImage.width} height={project.cardImage.height} loading="lazy" decoding="async" />
      </picture>
    </div>
  );
}

function ProjectCard({ project, index, onSelect }: { project: Project; index: number; onSelect: (project: Project) => void }) {
  return (
    <Reveal>
      <article className="project-card">
        <ProjectPreviewImage project={project} />

        <div className="project-card-body">
          <div className="project-card-meta">
            <span>{project.type}</span>
            <span aria-hidden="true">{(index + 1).toString().padStart(2, "0")}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>

          <div className="project-tools" aria-label={`Teknologi untuk ${project.title}`}>
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>

        <div className="project-actions">
          <button className="project-action detail-action" type="button" onClick={() => onSelect(project)}>
            <Sparkle aria-hidden="true" weight="duotone" />
            Lihat Detail
          </button>
          <a className="project-action link-action" href={project.link} target="_blank" rel="noreferrer">
            Link Proyek
            <ArrowUpRight aria-hidden="true" weight="bold" />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectDetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return createPortal(
    <div className="project-detail-backdrop" onClick={onClose}>
      <article className="project-detail-modal" role="dialog" aria-modal="true" aria-labelledby="project-detail-title" aria-describedby="project-detail-summary" onClick={(event) => event.stopPropagation()}>
        <button className="detail-close" type="button" onClick={onClose} aria-label="Tutup detail proyek" autoFocus>
          <X aria-hidden="true" weight="bold" />
        </button>

        <div className="detail-visual">
          <picture>
            <source media="(max-width: 680px)" srcSet={project.cardImage.mobile} />
            <img src={project.detailImage.desktop} alt={project.detailImage.alt} width={project.detailImage.width} height={project.detailImage.height} loading="lazy" decoding="async" />
          </picture>
        </div>

        <div className="detail-content">
          <p className="project-type">{project.type}</p>
          <h3 id="project-detail-title">{project.title}</h3>
          <p id="project-detail-summary" className="detail-summary">
            {project.summary}
          </p>

          <dl className="detail-list">
            <div>
              <dt>Latar belakang</dt>
              <dd>{project.background}</dd>
            </div>
            <div>
              <dt>Tujuan</dt>
              <dd>{project.goal}</dd>
            </div>
            <div>
              <dt>Peran</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Hasil</dt>
              <dd>{project.result}</dd>
            </div>
          </dl>

          <div className="detail-tools" aria-label={`Teknologi untuk ${project.title}`}>
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <div className="detail-actions">
            <button className="project-action detail-action" type="button" onClick={onClose}>
              Tutup
            </button>
            <a className="project-action link-action" href={project.link} target="_blank" rel="noreferrer">
              Buka Proyek
              <ArrowUpRight aria-hidden="true" weight="bold" />
            </a>
          </div>
        </div>
      </article>
    </div>,
    document.body,
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="section-panel projects-section" id="projects" aria-labelledby="projects-title">
      <Reveal className="section-heading">
        <h2 id="projects-title">Daftar Proyek Terbaik</h2>
        <p>Berikut adalah beberapa proyek yang telah saya kerjakan, menunjukkan kemampuan dan pengalaman dalam pengembangan web.</p>
      </Reveal>

      <div className="project-gallery">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} onSelect={setSelectedProject} key={project.title} />
        ))}
      </div>

      {selectedProject ? <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  );
}

function Skills() {
  return (
    <section className="section-panel skills-section" id="skills" aria-labelledby="skills-title">
      <Reveal className="section-heading compact">
        <h2 id="skills-title">Skill yang Dimiliki</h2>
        <p>Berikut adalah beberapa skill yang telah saya kuasai dalam pengembangan web.</p>
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal className="skill-card" delay={index * 0.04} key={group.title}>
              <div className="skill-card-header">
                <Icon aria-hidden="true" weight="duotone" />
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <CheckCircle aria-hidden="true" weight="fill" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section-panel contact-section" id="contact" aria-labelledby="contact-title">
      <Reveal className="contact-panel">
        <div>
          <Sparkle aria-hidden="true" weight="duotone" className="contact-icon" />
          <h2 id="contact-title">Mari Terhubung</h2>
          <p>Saya terbuka untuk diskusi tentang peluang kerja, proyek kolaboratif, atau sekadar bertukar ide. Jangan ragu untuk menghubungi saya!</p>
        </div>

        <div className="contact-list">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a href={item.href} className="contact-link" key={item.label} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}>
                <Icon aria-hidden="true" weight="duotone" />
                <span>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
                <ArrowUpRight aria-hidden="true" weight="bold" />
              </a>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

function SceneLayer() {
  const useStaticPoster = useMediaQuery("(max-width: 680px)");

  return (
    <div className="scene-layer" aria-hidden="true">
      {useStaticPoster ? (
        <img className="scene-poster" src="/orbital-archive-mobile.webp" alt="" width="768" height="1280" decoding="async" />
      ) : (
        <iframe
          className="spline-background"
          src="https://my.spline.design/orb-PmtAsCd9RoO2JFG16oN3YE91/"
          title="Animasi latar 3D Orbital Archive"
          frameBorder="0"
          width="100%"
          height="100%"
          allow="autoplay; fullscreen; xr-spatial-tracking"
        />
      )}
    </div>
  );
}

// Main application component
export default function App() {
  const sectionIds = navItems.map((item) => item.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  return (
    <div className="app-shell">
      <SceneLayer />

      <Header activeId={activeId} />

      <main>
        <Hero />
        <Profile />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="site-footer">
        <span>Bayu Widiartana</span>
        <a href="mailto:putuwidiart105@gmail.com">
          <EnvelopeSimple aria-hidden="true" weight="duotone" />
          Email
        </a>
        <a href="https://github.com/tubayu" target="_blank" rel="noreferrer">
          <GithubLogo aria-hidden="true" weight="duotone" />
          GitHub
        </a>
        <a href="#home">Kembali ke atas</a>
      </footer>
    </div>
  );
}
