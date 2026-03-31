import React from 'react';

const CookiePolicy: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 pt-32 min-h-screen">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
                <p className="text-gray-300 text-lg">
                    Your go-to resource for understanding how we protect your data, your customers, and your business.
                </p>
            </div>

            <div className="space-y-8 text-gray-200 leading-relaxed">
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">1. What Are Cookies?</h2>
                    <p>
                        Cookies are small text files stored on your device (computer, smartphone, tablet)
                        when you visit a website. They help websites remember your preferences, analyze site performance,
                        improve user experiences, and deliver personalized content and ads.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">2. Why We Use Cookies</h2>
                    <p className="mb-4">We use cookies and similar technologies to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Ensure the website functions properly</li>
                        <li>Recognize returning users</li>
                        <li>Analyze usage patterns and improve perfomance</li>
                        <li>Enable secure login and user sessions</li>
                        <li>Enable social media features</li>
                        <li>Provide personalized content and relevant marketing</li>
                        <li>Facilitate integration with third-party platforms (eg: social media, analytics, CRM tools)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">3. Types of Cookies We Use</h2>
                    <p className="mb-4">
                        You must be at least 18 years old or the age of majority in your jurisdiction to use our Services.
                        By agreeing to these Terms, you represent and guarantee that you have the legal authority to do so.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">4. Managing Your Cookie Preferences</h2>
                    <p className="mb-4">
                        You have the right to control and manage your cookie settings.
                        When you first visit our website, you will be prompted to accept or customize your cookie
                        preferences via a cookie banner.
                    </p>
                    <p className="mb-4">
                        You can also:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Adjust browser settings to block or adjust cookies</li>
                        <li>Use “Do Not Track” browser settings, if supported</li>
                        <li>Revisit our Cookie Settings Page at any time to modify consent</li>
                    </ul>
                </section>
                We may allow trusted third-party partners to place cookies to support our analytics, marketing, or service integrations. These partners include:
                Google Analytics / Tag Manager
                LinkedIn Insight Tag
                HubSpot, Salesforce, or other CRMs
                Facebook Pixel
                Twitter/X Ads
                YouTube or Vimeo embeds
                Intercom or other customer support tools
                These third parties may use cookies as governed by their own privacy policies. We encourage you to review their terms directly.
                <section>
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">5. Third-Party Cookies and Services</h2>
                    <p className="mb-4">
                        We may allow trusted third-party partners to place cookies to support our analytics, marketing, or service integrations. These partners include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li>Google Analytics / Tag Manager</li>
                        <li>LinkedIn Insight Tag</li>
                        <li>Salesforce Analytics</li>
                        <li>HubSpot / Other CRMs</li>
                        <li>Facebook Pixel</li>
                        <li>Twitter / X Ads</li>
                        <li>YouTube or Vimeo embeds</li>
                        <li>Intercom or other customer support tools</li>
                        <li>These third parties may use cookies as governed by their own privacy policies. We encourage you to review their terms directly.</li>
                    </ul>
                    <p className="mt-4">
                        These third parties may collect information governed by their own privacy policies. We encourage you to review their terms directly.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">6. Retention of Cookie Data</h2>
                    <p className="mb-4">Cookies will remain on your device for a duration based on their type:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                        <li><strong className="text-white">Session cookies:</strong> Deleted when your browser is closed</li>
                        <li><strong className="text-white">Persistent cookies:</strong>Remain until they are manually deleted or they expire (up to 12 months)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">7. Children's Privacy</h2>
                    <p>
                        We do not knowingly collect personal information from children under the age of 16 without verified parental consent. If you believe a child has provided us data,
                        please contact us immediately.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">8. Updates to This Cookie Policy</h2>
                    <p className="mb-4">
                        We may revise this Cookies Policy periodically. Changes will be posted on this page with an applicable effective date. We encourage users to review it regularly.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">9. Contact Us</h2>
                    <p className="mb-4">
                        For questions about these Terms, please contact:
                    </p>
                    <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg space-y-2 text-gray-300">
                        <p>Email: support@neuralmindatlas.ai</p>
                        <p>Location: NeuralMindAtlas LLC</p>
                        <p>415 Peachtree Parkway, Suite 250-1031, Cumming, GA 30041, United States</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CookiePolicy;