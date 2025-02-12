import React from "react";
import "./App.css";

function App() {
  const testimonials = [
    { name: "John Doe", text: "This company transformed my business! Excellent service and support." },
    { name: "Jane Smith", text: "Their web development team is top-notch. Highly recommended!" },
    { name: "Emily Johnson", text: "Professional and reliable. The best decision I made for my business." },
    { name: "Michael Brown", text: "Outstanding marketing strategies that increased my revenue!" },
  ];

  const partners = [
    { name: "Company A", logo: "https://via.placeholder.com/150?text=Company+A" },
    { name: "Company B", logo: "https://via.placeholder.com/150?text=Company+B" },
    { name: "Company C", logo: "https://via.placeholder.com/150?text=Company+C" },
    { name: "Company D", logo: "https://via.placeholder.com/150?text=Company+D" },
    { name: "Company E", logo: "https://via.placeholder.com/150?text=Company+E" },
  ];

  return (
    <div className="app">
      {/* Section 1: Headers */}
      <header className="header">
        <h1>My Business</h1>
        <nav>
          <ul>
            <li><a href="#cover">Home</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Section 2: Cover */}
      <section id="cover" className="cover">
        <h2>Welcome to Our Website</h2>
        <p>Your success is our mission.</p>
        
        <div className="button-container">
          <button className="circle-btn">Learn</button>
          <button className="circle-btn">Sign Up</button>
          <button className="circle-btn">Contact</button>
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Partners */}
      <section id="partners" className="partners">
        <h2>Our Trusted Partners</h2>
        <div className="partner-list">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
