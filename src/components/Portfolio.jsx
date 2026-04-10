import portfolioData from '@/data/Portfolio.json';
import { ArrowUpRight } from 'lucide-react';

// ─── Portfolio section component for showcasing project work
export default function Portfolio() {
  return (
    <section className="section portfolio" id={portfolioData.sectionId} aria-labelledby="portfolio-label">
      <div className="container">
        {/* ─── Portfolio project grid layout */}
        <div className="portfolio-list">
          {portfolioData.columns.map((column, columnIndex) => (
            <div className="wrapper" key={columnIndex}>
              {/* ─── Portfolio section title (displayed once based on column config) */}
              {column.showTitle && (
                <h2 className="h2 section-title" id="portfolio-label" data-reveal>
                  {portfolioData.sectionTitle}
                </h2>
              )}

              {/* ─── Portfolio project cards */}
              {column.projects.map((project, projectIndex) => (
                <div className="portfolio-card" data-reveal key={projectIndex}>
                  {/* ─── Project preview image */}
                  <figure
                    className="card-banner img-holder has-before"
                    style={{ '--width': project.width, '--height': project.height }}
                  >
                    <img
                      src={project.image}
                      width={project.width}
                      height={project.height}
                      loading="lazy"
                      alt={project.alt}
                      className="img-cover"
                    />
                  </figure>

                  {/* ─── Project title and category tag */}
                  <div className="card-content">
                    <h3 className="h4">
                      <a href={project.link} className="card-title">
                        {project.title}
                      </a>
                    </h3>

                    <p className="card-tag">{project.tag}</p>
                  </div>

                  {/* ─── Project action icon */}
                  <a href={project.link} className="btn-icon" aria-label="See more">
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ─── Decorative portfolio shape element */}
        <img
          src={portfolioData.shapeImage.src}
          width={portfolioData.shapeImage.width}
          height={portfolioData.shapeImage.height}
          loading="lazy"
          alt={portfolioData.shapeImage.alt}
          className="shape"
        />
      </div>
    </section>
  );
}
