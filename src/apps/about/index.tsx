import avatarImage from "./ico2.png";
import { aboutProfile } from "@/shared/data/profile";
import type { AppComponentProps } from "@/shared/types/app";

export function AboutApp({ window }: AppComponentProps) {
  const { intro, interests, principles, stats, story } = aboutProfile;
  const avatarSrc = intro.avatarSrc || avatarImage.src;

  return (
    <section className="about-app">
      <div className="about-shell">
        <header className="about-topbar">
          <p className="about-topbar__title">{window.title} .exe // character profile</p>
          <p className="about-topbar__status">{intro.status}</p>
        </header>

        <div className="about-content">
          <div className="about-layout">
            <section className="about-card about-hero">
              <div className="about-avatar-panel">
                <div className="about-avatar-frame" aria-label="Avatar do perfil">
                  <img src={avatarSrc} alt={intro.avatarAlt} />
                </div>
                <p className="about-avatar-caption">Avatar equipado // pixel profile loaded</p>
              </div>

              <div className="about-hero-body">
                <header className="about-identity">
                  <p className="about-block__eyebrow">{intro.location}</p>
                  <h1 className="about-name">{intro.name}</h1>
                  <p className="about-role">{intro.role}</p>
                  <p className="about-title">{intro.title}</p>
                  <p className="about-description">{intro.description}</p>
                </header>

                <div className="about-stats" aria-label="Status do perfil">
                  {stats.map((item) => (
                    <article key={item.label} className="about-stat">
                      <p className="about-list__label">{item.label}</p>
                      <p className="about-stat__value">{item.value}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <div className="about-grid">
              <section className="about-card about-panel" aria-labelledby="story-panel-title">
                <p className="about-block__eyebrow">Main Story</p>
                <h2 id="story-panel-title" className="about-panel__title">
                  Quem eu sou fora do formato de currículo
                </h2>

                <div className="about-story-list">
                  {story.map((entry) => (
                    <article key={entry.id} className="about-story">
                      <p className="about-story__label">{entry.label}</p>
                      <h3 className="about-story__title">{entry.title}</h3>
                      <p className="about-story__body">{entry.body}</p>
                    </article>
                  ))}
                </div>
              </section>

              <aside className="about-card about-panel" aria-labelledby="inventory-panel-title">
                <p className="about-block__eyebrow">Inventory</p>
                <h2 id="inventory-panel-title" className="about-panel__title">
                  Interesses e traços
                </h2>

                <div className="about-list">
                  {principles.map((item) => (
                    <article key={item} className="about-list-item">
                      <p className="about-list__label">Mindset</p>
                      <p className="about-list__value">{item}</p>
                    </article>
                  ))}
                </div>

                <div className="about-list">
                  <p className="about-list__label">Side Items</p>
                  <div className="about-side-items">
                    {interests.map((item) => (
                      <article key={item} className="about-side-item">
                        <p className="about-side-item__text">{item}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </aside>
            </div>

            <section className="about-card about-footer">
              <p className="about-footer__label">Final Note</p>
              <p className="about-footer__text">
                Gosto de tecnologia quando ela deixa de ser apenas ferramenta e passa a ser
                estrutura. Esse app existe para mostrar esse lado de forma mais pessoal:
                técnico, sim, mas humano e com identidade própria.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
