import categoryData from '@/data/Category.json';

export default function Category() {
  return (
    <section className="section category" id={categoryData.sectionId} aria-label="skills">
      <div className="container">
        <ul className="category-list">
          {categoryData.items.map((item, index) => (
            <li className="category-item" data-reveal key={index}>
              <a href={item.link} className="category-card">
                <h3 className="h4 card-title">{item.title}</h3>

                <figure className="card-banner img-holder" style={{ '--width': item.width, '--height': item.height }}>
                  <img
                    src={item.image}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    alt={item.alt}
                    className="img-cover"
                  />
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
