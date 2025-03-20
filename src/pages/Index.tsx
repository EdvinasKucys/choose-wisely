
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="index-page">
      <Navbar />
      
      <Hero />
      
      <Features />
      
      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-content">
            <h2 className="section-title">How It Works</h2>
            <p className="section-description">
              Our platform uses advanced algorithms to analyze your preferences and match you with the perfect options.
            </p>
            
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">1</div>
                <h3 className="step-title">Tell Us About Yourself</h3>
                <p className="step-description">Complete a simple questionnaire about your preferences, style, and needs.</p>
              </div>
              
              <div className="step-item">
                <div className="step-number">2</div>
                <h3 className="step-title">Receive Personalized Recommendations</h3>
                <p className="step-description">Our algorithm will analyze your inputs and generate tailored recommendations.</p>
              </div>
              
              <div className="step-item">
                <div className="step-number">3</div>
                <h3 className="step-title">Make Informed Decisions</h3>
                <p className="step-description">Review detailed comparisons and make choices with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Simple Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-content">
            <h2 className="section-title">Simple Pricing</h2>
            <p className="section-description dark-text">
              Choose the plan that works best for you
            </p>
            
            <div className="pricing-container">
              <div className="pricing-card">
                <h3 className="pricing-title dark-text">Basic</h3>
                <div className="pricing-price dark-text">$9/month</div>
                <ul className="pricing-features">
                  <li className="dark-text">5 recommendations per month</li>
                  <li className="dark-text">Basic comparison tools</li>
                  <li className="dark-text">Email support</li>
                </ul>
                <button className="pricing-button">Get Started</button>
              </div>
              
              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <h3 className="pricing-title dark-text">Pro</h3>
                <div className="pricing-price dark-text">$19/month</div>
                <ul className="pricing-features">
                  <li className="dark-text">Unlimited recommendations</li>
                  <li className="dark-text">Advanced comparison tools</li>
                  <li className="dark-text">Priority support</li>
                  <li className="dark-text">Preference saving</li>
                </ul>
                <button className="pricing-button">Get Started</button>
              </div>
              
              <div className="pricing-card">
                <h3 className="pricing-title dark-text">Enterprise</h3>
                <div className="pricing-price dark-text">$49/month</div>
                <ul className="pricing-features">
                  <li className="dark-text">All Pro features</li>
                  <li className="dark-text">Custom integrations</li>
                  <li className="dark-text">Dedicated account manager</li>
                  <li className="dark-text">API access</li>
                </ul>
                <button className="pricing-button">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sponsors Section */}
      <section className="sponsors-section">
        <div className="container">
          <div className="section-content">
            <h2 className="section-title">Our Sponsors</h2>
            <p className="section-description">
              We're proud to be supported by these amazing partners
            </p>
            
            <div className="video-container">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/UvZfBz3zUlM" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
