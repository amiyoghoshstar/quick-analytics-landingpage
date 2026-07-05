import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section bg-grid" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '10rem', overflow: 'hidden' }}>
        <div className="glow-orb primary"></div>
        <div className="glow-orb secondary"></div>
        
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          
          <div className="animate-fade-up">
            <div className="badge" style={{ marginBottom: '2.5rem' }}>
              <span className="dot"></span>
              Now available on Chrome Web Store
            </div>
            
            <h1 className="text-gradient">Google Analytics, <br/><span className="text-gradient-primary">instantly.</span></h1>
            <p style={{ maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
              Connect your Google Analytics and view the current page's data with a single click. Everything stays completely private with credentials saved securely in your local storage.
            </p>
            
            <a href="https://chromewebstore.google.com/detail/glboijohmagfjkpmghfmmmipahbamigc" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Add to Chrome — It's Free
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          
          <div className="animate-fade-up delay-2" style={{ marginTop: '6rem', position: 'relative' }}>
            <div className="glass-panel animate-float" style={{ padding: '0', display: 'inline-block', width: '100%', maxWidth: '900px', height: '520px', position: 'relative', overflow: 'hidden' }}>
              
              {/* Fake Browser Header */}
              <div className="browser-header">
                <div className="browser-dots">
                  <div className="browser-dot red"></div>
                  <div className="browser-dot yellow"></div>
                  <div className="browser-dot green"></div>
                </div>
                <div className="browser-url">
                  example.com/current-page
                </div>
              </div>
              
              {/* Fake Content Area with Graph overlay */}
              <div style={{ padding: '50px', height: 'calc(100% - 60px)', display: 'flex', flexDirection: 'column', gap: '2.5rem', background: 'rgba(2, 6, 23, 0.3)' }}>
                <div style={{ width: '40%', height: '28px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}></div>
                <div style={{ width: '100%', height: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}></div>
                <div style={{ width: '85%', height: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}></div>
                <div style={{ width: '60%', height: '14px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px' }}></div>
                
                {/* Popup Simulation */}
                <div className="glass-panel" style={{ position: 'absolute', right: '50px', top: '100px', width: '340px', padding: '30px', zIndex: 10, background: 'rgba(15, 23, 42, 0.85)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{ fontWeight: '600', fontSize: '1.1rem', color: '#fff' }}>Page Analytics</div>
                    <div style={{ color: 'var(--secondary)', fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ display: 'inline-block', width: '6px', height: '6px', background: 'var(--secondary)', borderRadius: '50%', boxShadow: '0 0 8px var(--secondary)' }}></span>
                      Live
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
                    <div>
                      <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fff' }}>1,248</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Page Views</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '2rem', fontWeight: '700', color: '#fff' }}>2m 14s</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>Avg. Time</div>
                    </div>
                  </div>
                  
                  {/* Mini Chart */}
                  <div style={{ height: '100px', display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.1)', height: '40%', borderRadius: '4px' }}></div>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.15)', height: '60%', borderRadius: '4px' }}></div>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.12)', height: '50%', borderRadius: '4px' }}></div>
                    <div style={{ flex: 1, background: 'linear-gradient(to top, var(--primary), var(--secondary))', height: '100%', borderRadius: '4px', boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' }}></div>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.2)', height: '80%', borderRadius: '4px' }}></div>
                    <div style={{ flex: 1, background: 'rgba(255,255,255,0.15)', height: '70%', borderRadius: '4px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="glow-orb primary" style={{ top: '50%', left: '-10%', width: '500px', height: '500px', opacity: '0.2' }}></div>
        <div className="container">
          <div className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '700px', margin: '0 auto 5rem auto' }}>
            <h2>Elegantly <span className="text-gradient-primary">Simple.</span></h2>
            <p>We stripped away the complexity of analytics dashboards so you can focus on the numbers that matter for the page you are on right now.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
            <div className="glass-panel feature-card hover-lift animate-fade-up delay-1">
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', color: 'var(--secondary)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h3>Contextual Data</h3>
              <p>Stop searching through properties. Click the extension and instantly see the data for the exact URL you're visiting.</p>
            </div>
            
            <div className="glass-panel feature-card hover-lift animate-fade-up delay-2">
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', color: 'var(--primary)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3>Local & Secure</h3>
              <p>Your API credentials never leave your browser. They are encrypted and stored safely in your local extension storage.</p>
            </div>
            
            <div className="glass-panel feature-card hover-lift animate-fade-up delay-3">
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem', color: '#a855f7' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>Save Time</h3>
              <p>Eliminate the friction of switching tabs, logging in, and navigating Google Analytics just to check one page's performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Transparency Section */}
      <section className="section" style={{ padding: '4rem 0 8rem 0', position: 'relative' }}>
        <div className="container">
          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto', background: 'rgba(15, 23, 42, 0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 style={{ margin: 0, fontSize: '1.5rem', color: '#fff' }}>Data Transparency & Privacy</h3>
            </div>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              <strong>Quick Analytics</strong> requests read-only access to your Google Analytics data strictly to display metrics for the web page you are currently viewing. This data is used solely to provide the core functionality of the extension.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              <strong>Your data never leaves your device.</strong> All Google Analytics API credentials and fetched metrics are processed and stored locally within your browser's secure extension storage. We do not operate any backend servers to harvest your data, and your information is never shared, sold, or transmitted to any third parties.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '5rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem' }}>
            <div>
              <div style={{ fontWeight: '800', fontSize: '1.5rem', color: '#fff', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>Quick Analytics</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>The fastest way to view your page stats.</div>
            </div>
            
            <div style={{ display: 'flex', gap: '2.5rem' }}>
              <Link href="/terms" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }} className="hover-text-light">Terms of Service</Link>
              <Link href="/privacy" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }} className="hover-text-light">Privacy Policy</Link>
              <a href="https://chromewebstore.google.com/detail/glboijohmagfjkpmghfmmmipahbamigc" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }} className="hover-text-light">Chrome Web Store</a>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} Quick Analytics. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
