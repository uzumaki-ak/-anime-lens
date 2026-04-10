import galleryData from '@/data/Gallery.json';
import { ArrowUpRight } from 'lucide-react';

// ─── Gallery section component for showcasing featured projects
export default function Gallery() {
  return (
    <section className="section gallery" id={galleryData.sectionId}>
      <div className="container">
        {/* ─── Gallery card grid layout */}
        <ul className="gallery-list">
          {galleryData.items.map((item, index) => (
            <li className="gallery-item" data-reveal key={index}>
              {item.cards.map((card, cardIndex) => (
                <div className="gallery-card" key={cardIndex}>
                  {/* ─── Gallery card image preview */}
                  <figure
                    className="card-banner img-holder has-before"
                    style={{ '--width': card.width, '--height': card.height }}
                  >
                    <img
                      src={card.image}
                      width={card.width}
                      height={card.height}
                      loading="lazy"
                      alt={card.alt}
                      className="img-cover"
                    />
                  </figure>

                  {/* ─── Gallery card text content */}
                  <div className="card-content">
                    <h3 className="h6">
                      <a href={card.link} className="card-title">
                        {card.title}
                      </a>
                    </h3>

                    <span className="card-tag">{card.tag}</span>
                  </div>

                  {/* ─── Gallery card action icon */}
                  <a href={card.link} className="btn-icon" aria-label="view project">
                    <ArrowUpRight size={22} />
                  </a>
                </div>
              ))}
            </li>
          ))}
        </ul>

        {/* ─── Scroll down indicator link */}
        <a href={galleryData.scrollDownLink} className="scroll-down">
          <img src="/scroll-down.svg" width="40" height="66" loading="lazy" alt="mouse scroll" />
        </a>

        {/* ─── Decorative gallery shape element */}
        <img
          src={galleryData.shapeImage.src}
          width={galleryData.shapeImage.width}
          height={galleryData.shapeImage.height}
          loading="lazy"
          alt={galleryData.shapeImage.alt}
          className="shape"
        />
      </div>
    </section>
  );
}
