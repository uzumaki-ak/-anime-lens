import serviceData from '@/data/Service.json';
import { ArrowRight } from 'lucide-react';

// ─── Services section component for displaying available offerings
export default function Service() {
  return (
    <section className="section service" id={serviceData.sectionId} aria-labelledby="service-lable">
      {/* ─── Services section subtitle */}
      <p className="section-subtitle container" id="service-lable">
        {serviceData.subtitle}
      </p>

      {/* ─── Services card list layout */}
      <ul className="service-list">
        {serviceData.services.map((service, index) => (
          <li data-reveal key={index}>
            <div className="service-card container">
              {/* ─── Service icon/image */}
              <img
                src={service.image}
                width={service.width}
                height={service.height}
                loading="lazy"
                alt={service.alt}
                className="img"
              />

              {/* ─── Service title and description */}
              <div>
                <h3 className="h3 card-title">{service.title}</h3>
                <p className="card-subtitle">{service.description}</p>
              </div>

              {/* ─── Service action link */}
              <a href={service.link} className="btn-icon" aria-label="See more">
                <ArrowRight size={28} />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
