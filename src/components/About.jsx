import aboutData from '@/data/About.json';

export default function About() {
  return (
    <section className="section about" id={aboutData.sectionId} aria-label="about me">
      <div className="container">
        <div className="about-content">
          <h2 className="h2 section-title" data-reveal="right">
            {aboutData.titleLines[0]} <br />
            {aboutData.titleLines[1]}
          </h2>

          <div className="wrapper has-before" data-reveal="right">
            <p className="section-text">{aboutData.description}</p>

            <img
              src={aboutData.signature.src}
              width={aboutData.signature.width}
              height={aboutData.signature.height}
              loading="lazy"
              alt={aboutData.signature.alt}
              className="img"
            />
          </div>
        </div>

        <figure className="about-banner" data-reveal="left">
          <div className="img-holder has-before" style={{ '--width': aboutData.banner.width, '--height': aboutData.banner.height }}>
            <img
              src={aboutData.banner.src}
              width={aboutData.banner.width}
              height={aboutData.banner.height}
              loading="lazy"
              alt={aboutData.banner.alt}
              className="img-cover"
            />
          </div>

          <img
            src={aboutData.shape1.src}
            width={aboutData.shape1.width}
            height={aboutData.shape1.height}
            loading="lazy"
            alt={aboutData.shape1.alt}
            className="shape shape-1"
          />

          <img
            src={aboutData.shape2.src}
            width={aboutData.shape2.width}
            height={aboutData.shape2.height}
            loading="lazy"
            alt={aboutData.shape2.alt}
            className="shape shape-2"
          />
        </figure>

        <img
          src={aboutData.shape3.src}
          width={aboutData.shape3.width}
          height={aboutData.shape3.height}
          loading="lazy"
          alt={aboutData.shape3.alt}
          className="shape shape-3"
        />
      </div>
    </section>
  );
}
