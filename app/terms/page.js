import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Quick Analytics',
};

export default function TermsOfService() {
  return (
    <main className="section" style={{ minHeight: '100vh', paddingTop: '8rem', backgroundColor: 'var(--background)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '3rem' }}>
          <Link href="/" style={{ color: 'var(--primary)', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Home
          </Link>
        </div>
        
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>Effective Date: July 3, 2026</p>

        <div className="glass-panel" style={{ padding: '3rem 2.5rem', backgroundColor: '#fff' }}>
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
            <p style={{ marginBottom: '1rem' }}>
              By downloading, installing, or using the Quick Analytics Chrome Extension ("the Extension"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use the Extension.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Description of Service</h2>
            <p style={{ marginBottom: '1rem' }}>
              Quick Analytics is a browser extension that allows users to securely view Google Analytics 4 (GA4) data for the specific web page they are currently browsing. The Extension operates locally on your device and communicates directly with Google Analytics APIs to fetch and display this data.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Integration with Google Services</h2>
            <p style={{ marginBottom: '1rem' }}>
              The Extension requires access to your Google Analytics account via OAuth2 authentication to function. 
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              <li style={{ marginBottom: '0.5rem' }}>You are solely responsible for maintaining the confidentiality of your Google account credentials.</li>
              <li style={{ marginBottom: '0.5rem' }}>Your use of the Extension must comply with Google's own Terms of Service and API policies.</li>
              <li>We are not affiliated with, endorsed by, or sponsored by Google LLC.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Intellectual Property</h2>
            <p style={{ marginBottom: '1rem' }}>
              The Extension, including its code, design, and branding, is the intellectual property of the developer. You may not copy, modify, distribute, sell, or lease any part of our Extension, nor may you reverse engineer or attempt to extract the source code, unless you have our written permission.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>5. Disclaimer of Warranties</h2>
            <p style={{ marginBottom: '1rem' }}>
              The Extension is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the Extension will be error-free, secure, or operate without interruption. We are not responsible for the accuracy of the data provided by Google Analytics APIs.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>6. Limitation of Liability</h2>
            <p style={{ marginBottom: '1rem' }}>
              In no event shall the developer of Quick Analytics be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Extension, including but not loss of data or business interruption, even if advised of the possibility of such damages.
            </p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>7. Changes to Terms</h2>
            <p style={{ marginBottom: '1rem' }}>
              We reserve the right to modify or replace these Terms of Service at any time. Any changes will be effective immediately upon posting the updated Terms in the Extension or on our Chrome Web Store page. Your continued use of the Extension following the posting of any changes constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at <a href="mailto:amiyoghosh00@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>amiyoghosh00@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
