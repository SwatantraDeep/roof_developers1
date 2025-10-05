
// Home page component for Roof Developers
// Modern architect consultancy homepage: hero, services, about, awards

import BannerCarousel from './BannerCarousel'; // Modern banner carousel

function Home() {
  // Service cards data (can be made dynamic later)
  const services = [
    {
      title: 'Structural Design',
      desc: 'Safe, efficient engineering and load analysis for all building types.'
    },
    {
      title: 'Architectural Design',
      desc: 'Concepts, drawings, and permit-ready plans tailored to your needs.'
    },
    {
      title: 'Interior Design',
      desc: 'Space planning, finishes, and furniture layouts for inspiring interiors.'
    },
    {
      title: 'Exterior Design',
      desc: 'Façade design and landscape coordination for a lasting impression.'
    },
    {
      title: 'Vastu Consultation',
      desc: 'Harmonize design with vastu principles for wellbeing and prosperity.'
    },
    {
      title: 'Material Consultancy',
      desc: 'Sourcing, costing, and material guidance for optimal performance.'
    }
  ];

  return (
    <main>
      {/* Modern Banner Carousel Section */}
      <BannerCarousel />

      {/* Services Section - grid of cards */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section - studio philosophy and expertise */}
      <section className="about">
        <h2>About Roof Developers</h2>
        <div className="about-row">
          {/* About image can be added here if available */}
          <div className="about-text">
            <p>
              Roof Developers is a team of architects, engineers, and designers delivering end-to-end construction consultancy. We blend technical rigour with thoughtful design to deliver projects on time and on budget. Our approach is collaborative, client-focused, and driven by a passion for innovative, sustainable solutions.
            </p>
            <p>
              We specialize in master planning, architecture, interiors, and turnkey solutions, with a portfolio spanning residential, commercial, institutional, and hospitality projects across India.
            </p>
          </div>
        </div>
      </section>

      {/* Awards/Recognition Section - optional, for credibility */}
      <section className="awards">
        <h2>Recognition & Awards</h2>
        <ul>
          <li>FOAID Awards 2021, New Delhi</li>
          <li>Multiple design competition wins</li>
          <li>Featured in leading architecture publications</li>
        </ul>
      </section>

      {/* Contact Section - info and CTA */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p><strong>Phone:</strong> +91 99999 99999</p>
        <p><strong>Email:</strong> hello@roofdevelopers.example</p>
        <p><strong>Location:</strong> Mumbai, India</p>
        {/* TODO: Add contact form and WhatsApp link */}
      </section>
    </main>
  );
}

export default Home;
