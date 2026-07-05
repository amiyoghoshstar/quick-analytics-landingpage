import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Quick Analytics',
};

export default function PrivacyPolicy() {
  return (
    <main className="section" style={{ minHeight: '100vh', paddingTop: '8rem', backgroundColor: 'var(--background)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '3rem' }}>
          <Link href="/" style={{ color: 'var(--primary)', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Home
          </Link>
        </div>
        
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Effective Date: July 3, 2026</p>

        <div className="glass-panel" style={{ padding: '3rem 2.5rem', backgroundColor: '#fff' }}>
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Introduction</h2>
            <p style={{ marginBottom: '1rem' }}>
              This Privacy Policy describes how Quick Analytics ("we", "us", or "our") collects, uses, and handles your information when you use our Chrome Extension.
            </p>
            <p>
              Quick Analytics is designed to help you quickly check Google Analytics 4 data for the current page you are viewing. To provide this functionality, the extension requires access to certain data and permissions.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Information We Collect and How We Use It</h2>
            
            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>1. Google Analytics Data</h3>
            <p style={{ marginBottom: '1rem' }}>
              To display your analytics data, the extension uses the Google Analytics Data API (<a href="https://analyticsdata.googleapis.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://analyticsdata.googleapis.com/</a>) and Google Analytics Admin API (<a href="https://analyticsadmin.googleapis.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>https://analyticsadmin.googleapis.com/</a>).
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Authentication:</strong> The extension uses OAuth2 to authenticate you securely. We request the <code>https://www.googleapis.com/auth/analytics.readonly</code> scope, which allows the extension to view your Google Analytics data.</li>
              <li><strong>Data Handling:</strong> We only request read-only access. Your Google Analytics data is fetched directly from Google's servers and is displayed within the extension. We do not send this data to any external servers, nor do we collect or store it remotely.</li>
            </ul>

            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>2. Permissions Used</h3>
            <p style={{ marginBottom: '1rem' }}>The extension requires the following permissions to function correctly:</p>
            
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--surface-border)' }}>
                    <th style={{ padding: '1rem', fontWeight: '600' }}>Permission</th>
                    <th style={{ padding: '1rem', fontWeight: '600' }}>Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                    <td style={{ padding: '1rem', fontWeight: '500' }}><code>activeTab</code> &amp; <code>&lt;all_urls&gt;</code></td>
                    <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>Used to determine the URL of the current tab you are viewing so the extension can fetch relevant data for that specific page.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                    <td style={{ padding: '1rem', fontWeight: '500' }}><code>identity</code></td>
                    <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>Used to facilitate secure OAuth2 sign-in with your Google Account without exposing credentials to the extension.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                    <td style={{ padding: '1rem', fontWeight: '500' }}><code>storage</code></td>
                    <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>Used to save local preferences (e.g., your selected GA4 property) on your device. This data is not synced to our servers.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem', fontWeight: '500' }}><code>downloads</code></td>
                    <td style={{ padding: '1rem', color: 'var(--text-muted)' }}>Used to allow you to download reports or data visualizations generated by the extension directly to your device.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Data Storage and Security</h2>
            <p style={{ marginBottom: '1rem' }}>
              All data retrieved by the extension, including your Google Analytics data and preferences, is processed locally on your device.
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              <li style={{ marginBottom: '0.5rem' }}>We do not have backend servers that collect, store, or process your personal data.</li>
              <li>We do not sell, trade, or otherwise transfer your information to outside parties.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Third-Party Services</h2>
            <p>
              The extension communicates directly with Google's APIs to provide its core functionality. Your use of these services is governed by Google's Privacy Policy.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by updating the "Effective Date" at the top of this policy and publishing the updated policy on the Chrome Web Store.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, please contact the developer via the Chrome Web Store support tab or at <a href="mailto:amiyoghosh00@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>amiyoghosh00@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
