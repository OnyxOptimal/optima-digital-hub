export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0a0f1e 0%, #1a1f2e 100%)', color: 'white' }}>
      {/* Hero Section */}
      <section style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ color: '#00d9ff', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
          AI-Powered Marketing Services
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', lineHeight: '1.1', marginBottom: '24px' }}>
          Finally, Marketing That{' '}
          <span style={{ background: 'linear-gradient(90deg, #00d9ff, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Works While You Run
          </span>{' '}
          Your Business
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}>
          Local businesses in Beaumont and Southeast Texas deserve marketing that actually gets results. 
          We combine AI technology with proven strategies to get you found, booked, and busy.
        </p>
        <a 
          href="#contact" 
          style={{ 
            display: 'inline-block', 
            background: '#fbbf24', 
            color: '#0a0f1e', 
            padding: '16px 32px', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            fontSize: '1.1rem',
            transition: 'transform 0.2s'
          }}
        >
          Get Your Free Marketing Audit
        </a>
      </section>

      {/* Services Section */}
      <section style={{ padding: '60px 20px', background: '#0f1420' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px' }}>
            What We Do
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { title: 'AI Content Creation', desc: 'Blog posts, social media, and email sequences written by AI, refined by humans.' },
              { title: 'Website Design', desc: 'Fast, mobile-friendly websites that turn visitors into customers.' },
              { title: 'Social Media Management', desc: 'Consistent posting, engagement, and growth across all platforms.' },
              { title: 'Local SEO', desc: 'Get found when customers in Beaumont search for what you offer.' },
              { title: 'Email Marketing', desc: 'Automated sequences that nurture leads and drive repeat business.' },
              { title: 'AI Automation', desc: 'Smart systems that handle repetitive tasks so you can focus on what matters.' }
            ].map((service, i) => (
              <div key={i} style={{ background: '#1a1f2e', padding: '30px', borderRadius: '12px', border: '1px solid #2a3a4e' }}>
                <h3 style={{ color: '#00d9ff', marginBottom: '12px', fontSize: '1.25rem' }}>{service.title}</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Section */}
      <section style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
            Built for <span style={{ color: '#00d9ff' }}>Southeast Texas</span>
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#94a3b8', lineHeight: '1.8', marginBottom: '40px' }}>
            We know the Golden Triangle. We understand local business. And we know how to get 
            Beaumont, Port Arthur, and Orange customers through your doors. No cookie-cutter 
            solutions. Just marketing that works for your market.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" style={{ padding: '80px 20px', background: '#0f1420', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
            Ready to Get Found?
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#94a3b8', marginBottom: '40px' }}>
            Let's talk about what's working, what's not, and where AI can help you grow faster.
          </p>
          <div style={{ background: '#1a1f2e', padding: '40px', borderRadius: '12px', border: '1px solid #2a3a4e' }}>
            <p style={{ marginBottom: '20px', color: '#94a3b8' }}>
              📧 Email us at: <a href="mailto:hello@optimadigitalhub.com" style={{ color: '#00d9ff', textDecoration: 'none' }}>hello@optimadigitalhub.com</a>
            </p>
            <p style={{ color: '#94a3b8' }}>
              Or fill out the form below (coming soon)
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #2a3a4e', color: '#64748b' }}>
        <p>© 2026 OptimaDigitalHub. Serving Southeast Texas.</p>
      </footer>
    </main>
  );
}
