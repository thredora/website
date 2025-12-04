import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions = () => {
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
          Terms and Conditions
        </h1>

        {/* Content */}
        <div className="text-white space-y-4" style={{ fontFamily: 'Libre Caslon Text, serif' }}>
          <p className="text-xs md:text-sm">
            Last Updated: 25/11/2025
          </p>
          <p className="text-sm md:text-base">
            Welcome to Thredora. These Terms & Conditions ("Terms") govern your access to and use of the Thredora website and services ("Service"). By using Thredora, you agree to these Terms.
          </p>
          <p className="text-sm md:text-base">
            By continuing to use Thredora, you acknowledge and agree to these Terms.
          </p>

          {/* Section 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">1. Eligibility</h2>
            <p className="text-sm md:text-base mb-1">
              Thredora is intended for users 13 years and older.
            </p>
            <p className="text-sm md:text-base mb-1">
              Users between 13–18 must use the Service only with parental or guardian consent.
            </p>
            <p className="text-sm md:text-base">
              By using Thredora, you confirm that you meet this requirement.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">2. About Thredora</h2>
            <p className="text-sm md:text-base mb-1">Thredora provides:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>A digital wardrobe</li>
              <li>AI-powered outfit recommendations</li>
              <li>Image processing (including via third-party AI models)</li>
              <li>Styling suggestions</li>
              <li>A "Rate My Fits" feature for AI-generated outfit evaluations</li>
            </ul>
            <p className="text-sm md:text-base mt-1">
              All outputs are suggestions only and are not guarantees of accuracy, fit, or personal suitability.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">3. User Accounts</h2>
            <p className="text-sm md:text-base mb-1">
              You must provide accurate information when creating an account (e.g., WhatsApp login).
            </p>
            <p className="text-sm md:text-base mb-1">You are responsible for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Maintaining account confidentiality</li>
              <li>All actions taken under your account</li>
            </ul>
            <p className="text-sm md:text-base mt-1 mb-1">Thredora reserves the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Suspend or terminate your account at our discretion,</li>
              <li>With or without prior notice,</li>
              <li>For any reason, including violation of these Terms, misuse, or safety concerns.</li>
            </ul>
            <p className="text-sm md:text-base mt-1">
              We will not be liable for any loss arising from such suspension or removal.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">4. Content You Upload</h2>
            <p className="text-sm md:text-base mb-1">
              By uploading photos, measurements, or personal descriptions, you represent that:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>You own the rights to this content or have permission to use it</li>
              <li>It does not violate any laws or third-party rights</li>
              <li>It complies with our Acceptable Use Policy</li>
            </ul>
            <p className="text-sm md:text-base mt-1 mb-1">You may NOT upload content that includes:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Nudity, sexually explicit material, or minors depicted in unsafe ways</li>
              <li>Violence, harassment, hate speech, or discrimination</li>
              <li>Copyrighted material you do not own</li>
              <li>Illegal activities</li>
              <li>Attempts to trick, jailbreak, or exploit the AI systems</li>
            </ul>
            <p className="text-sm md:text-base mt-1">
              Violations may result in immediate account removal.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">5. License to Use the Service</h2>
            <p className="text-sm md:text-base mb-1">
              We grant you a limited, non-transferable, revocable license to use Thredora for personal, non-commercial purposes.
            </p>
            <p className="text-sm md:text-base mb-1">You may not:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Reverse engineer, scrape, or extract data</li>
              <li>Train your own models on Thredora outputs</li>
              <li>Attempt to access restricted systems or APIs</li>
              <li>Use Thredora for commercial styling without permission</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">6. AI Processing</h2>
            <p className="text-sm md:text-base mb-1">
              Thredora uses external AI models to process images and generate recommendations.
            </p>
            <p className="text-sm md:text-base mb-1">By using the Service, you agree that:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Your photos may be processed by third-party AI providers</li>
              <li>These providers may temporarily handle the image to generate results</li>
              <li>Thredora does not train its models on user photos</li>
              <li>Thredora may train models on non-user images (e.g., clothing datasets)</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">7. Outputs & Accuracy Disclaimer</h2>
            <p className="text-sm md:text-base mb-1">
              All styling suggestions, outfit ratings, and image transformations are AI-generated.
            </p>
            <p className="text-sm md:text-base mb-1">They are not professional advice.</p>
            <p className="text-sm md:text-base mb-1">Thredora does not guarantee:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Accuracy</li>
              <li>Fit predictions</li>
              <li>Style suitability</li>
              <li>Emotional, psychological, or body-related assessments</li>
            </ul>
            <p className="text-sm md:text-base mt-1">Use suggestions at your discretion.</p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">8. Payment, Subscriptions & Refunds</h2>
            <p className="text-sm md:text-base mb-1">If Thredora introduces paid services:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Charges may be in multiple currencies</li>
              <li>Payments will be handled through our internal payment gateway</li>
              <li>Refunds are generally not provided</li>
              <li>However, you may contact us for case-by-case exceptions.</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">9. External Links</h2>
            <p className="text-sm md:text-base mb-1">
              Thredora currently does not redirect users to external purchase sites.
            </p>
            <p className="text-sm md:text-base">
              If we add this in the future, we are not responsible for third-party terms, products, or policies.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">10. Data Deletion</h2>
            <p className="text-sm md:text-base mb-1">If you delete your account:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Your personal data will be deleted within 30 days</li>
              <li>Minimal logs may be retained for security, fraud prevention, and compliance</li>
              <li>More details are in the Privacy Policy.</li>
            </ul>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">11. Service Changes</h2>
            <p className="text-sm md:text-base">
              We may update, modify, or discontinue parts of the Service at any time.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">12. Limitation of Liability</h2>
            <p className="text-sm md:text-base mb-1">
              Thredora is provided on an "as is" and "as available" basis.
            </p>
            <p className="text-sm md:text-base mb-1">We are not liable for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm md:text-base">
              <li>Losses from inaccurate AI suggestions</li>
              <li>Service interruptions</li>
              <li>Account terminations</li>
              <li>Deletion of content</li>
              <li>Third-party AI processing</li>
            </ul>
            <p className="text-sm md:text-base mt-1">Your use of the Service is at your own risk.</p>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">13. Governing Law</h2>
            <p className="text-sm md:text-base">
              These Terms are governed by the laws of India, with Bengaluru, Karnataka as the jurisdiction.
            </p>
          </div>

          {/* Section 14 */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">14. Contact</h2>
            <p className="text-sm md:text-base">
              For questions, account issues, or deletion requests:
            </p>
            <p className="text-sm md:text-base mt-1">
              📩 thread@thredora.com
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

export default TermsAndConditions;
