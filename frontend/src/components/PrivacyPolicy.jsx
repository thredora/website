import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B98CFF] to-[#8643EF] py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors duration-300 mb-6"
          style={{ fontFamily: 'Libre Caslon Text, serif' }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to Home</span>
        </Link>

        {/* Main Heading */}
        <h1 
          className="text-3xl md:text-4xl font-bold text-white text-center mb-3"
          style={{ fontFamily: 'Libre Caslon Text, serif' }}
        >
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="text-white space-y-4" style={{ fontFamily: 'Libre Caslon Text, serif' }}>
          <p className="text-xs md:text-sm">
            Last Updated: 15/11/2025
          </p>
          <p className="text-sm md:text-base">
            Thredora ("we", "our", "us") values your privacy. This Policy describes how we collect, use, store, and protect your information.
          </p>
          <p className="text-sm md:text-base">
            By using Thredora, you agree to this Policy.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">1. Information We Collect</h2>
            <h3 className="text-lg md:text-xl font-semibold mb-1">1.1 Information You Provide</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Phone number (via WhatsApp login)</li>
              <li>Name</li>
              <li>Height or other measurements</li>
              <li>Photos you upload</li>
              <li>Personal styling preferences (text inputs)</li>
            </ul>
            <h3 className="text-lg md:text-xl font-semibold mb-1 mt-2">1.2 Automatically Collected Info</h3>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Device type</li>
              <li>Browser details</li>
              <li>Basic analytics (non-tracking, no third-party trackers)</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">2. How We Use Your Information</h2>
            <p className="text-sm md:text-base mb-1">We use your data to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Provide digital wardrobe and styling features</li>
              <li>Process images (internally and via third-party AI models)</li>
              <li>Generate outfit recommendations</li>
              <li>Improve service accuracy and performance</li>
              <li>Contact you for account-related purposes (WhatsApp or email)</li>
              <li>Operate subscription services</li>
            </ul>
            <p className="text-sm md:text-base mt-2 mb-1">We do not:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Sell your data</li>
              <li>Train models on user photos</li>
              <li>Share data with advertisers</li>
              <li>Share data with clothing brands or marketplaces</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">3. AI Processing</h2>
            <p className="text-sm md:text-base mb-1">Your images may be sent to relevant AI models to generate:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Clipped images</li>
              <li>Processed portraits</li>
              <li>Outfit suggestions</li>
              <li>Stylistic transformations</li>
            </ul>
            <p className="text-sm md:text-base mt-2 mb-1">These providers:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>May temporarily store or process images</li>
              <li>Are bound by their own privacy policies</li>
            </ul>
            <p className="text-sm md:text-base mt-2">
              We only send what is necessary for the requested feature.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">4. Image Storage</h2>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>User images and processed outputs may be stored on AWS (India region)</li>
              <li>You may request deletion at any time</li>
              <li>We delete data within 30 days of account deletion</li>
              <li>Raw and processed images are stored only to provide uninterrupted service unless you request removal.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">5. How We Protect Your Data</h2>
            <p className="text-sm md:text-base mb-1">We use:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Encrypted storage</li>
              <li>Secure AWS servers</li>
              <li>Internal access controls</li>
              <li>Strict data-handling protocols</li>
            </ul>
            <p className="text-sm md:text-base mt-2">
              However, no system is fully secure. Use Thredora at your discretion.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">6. Children's Privacy</h2>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Users must be 13 or older</li>
              <li>Users under 18 must have parental consent</li>
              <li>Parents may contact us to delete their child's data</li>
              <li>We do not knowingly store data of children under 13.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">7. Data Sharing</h2>
            <p className="text-sm md:text-base mb-1">We only share your data with:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Third-party AI providers to process photos</li>
              <li>Service providers facilitating authentication, storage, or infrastructure</li>
              <li>Payment processors if you opt into subscriptions</li>
            </ul>
            <p className="text-sm md:text-base mt-2 mb-1">We do not share your data with:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Clothing brands</li>
              <li>Advertisers</li>
              <li>Third-party marketplaces</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">8. Data Retention</h2>
            <p className="text-sm md:text-base mb-1">We keep your data:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>As long as your account is active</li>
              <li>Up to 30 days post-account deletion</li>
              <li>Minimal logs may be kept for security and compliance</li>
            </ul>
            <p className="text-sm md:text-base mt-2">
              You may request earlier deletion at any time.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">9. Your Rights</h2>
            <p className="text-sm md:text-base mb-1">You may request:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Access to your data</li>
              <li>Correction of your data</li>
              <li>Deletion of your data</li>
              <li>Clarification on how your data is used</li>
            </ul>
            <p className="text-sm md:text-base mt-2">
              Contact us at support@thredora.com.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">10. Communication</h2>
            <p className="text-sm md:text-base mb-1">We may contact you via:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>WhatsApp (login, verification, updates)</li>
              <li>Email (support, notifications)</li>
              <li>Optional promotional messages (only if you opt in)</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">11. Acceptable Use</h2>
            <p className="text-sm md:text-base mb-1">You agree not to upload:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Nudity, explicit content, or unsafe content involving minors</li>
              <li>Violence, hate speech, harassment</li>
              <li>Copyrighted material you do not own</li>
              <li>Malware, harmful code, or data intended to misuse the AI</li>
              <li>Attempts to compromise system integrity</li>
            </ul>
            <p className="text-sm md:text-base mt-2">
              Violations may lead to immediate account termination.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">12. Changes to This Policy</h2>
            <p className="text-sm md:text-base">
              We may update this Privacy Policy. Continued use means you accept the updated version.
            </p>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">13. Contact</h2>
            <p className="text-sm md:text-base">
              For privacy concerns, deletion requests, or questions:
            </p>
            <p className="text-sm md:text-base mt-1">
              📩 support@thredora.com
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 text-center">
          <Link 
            to="/" 
            className="inline-block bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm"
            style={{ fontFamily: 'Libre Caslon Text, serif' }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
