import React from "react";
import { ChevronRight } from "lucide-react";

const sidebarItems = [
  "Introduction",
  "Definitions",
  "Account Terms",
  "User Rights & Responsibilities",
  "Privacy & Data Collection",
  "Intellectual Property",
  "Termination",
  "Limitations of Liability",
  "Governing Law",
  "Contact Information",
];

const sections = [
  {
    title: "Introduction",
    content: [
      "Welcome to our platform. These Terms and Conditions govern your use of our website and services.",
      "By accessing or using our services, you agree to be bound by these terms. Please read them carefully before proceeding with the use of our services.",
    ],
  },
  {
    title: "Definitions",
    content: [
      '"Service" refers to the website and services provided by our platform.',
      '"User" means any individual who accesses or uses the Service.',
      '"Content" encompasses all information, text, graphics, and data available through the Service.',
      '"Account" refers to the user\'s registered profile on our platform.',
    ],
  },
  {
    title: "Account Terms",
    content: [
      "You must be at least 18 years old to use this Service.",
      "You must provide accurate, complete, and current information when creating an account.",
      "You are responsible for maintaining the security of your account credentials.",
      "You must notify us immediately of any unauthorized access to your account.",
    ],
  },
  {
    title: "User Rights & Responsibilities",
    content: [
      "Users retain all rights to any content they submit, post, or display on the Service.",
      "Users must not upload any content that infringes upon intellectual property rights.",
      "Users are responsible for all activity that occurs under their account.",
      "Users must comply with all applicable laws and regulations.",
    ],
  },
  {
    title: "Privacy & Data Collection",
    content: [
      "We collect and process personal data as described in our Privacy Policy.",
      "We implement appropriate security measures to protect your personal information.",
      "We may use cookies and similar tracking technologies to enhance user experience.",
      "Users can control their privacy settings through their account dashboard.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "All content, features, and functionality of the Service are owned by us and protected by international laws.",
      "Users may not copy, modify, or distribute our content without explicit permission.",
      "We respect intellectual property rights and expect users to do the same.",
    ],
  },
  {
    title: "Termination",
    content: [
      "We reserve the right to terminate or suspend access to our Service immediately, without prior notice.",
      "Upon termination, your right to use the Service will cease immediately.",
      "All provisions of the Terms which should survive termination shall survive.",
    ],
  },
  {
    title: "Limitations of Liability",
    content: [
      "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
      "Our liability is limited to the maximum extent permitted by law.",
      "We make no warranties about the completeness, reliability, or accuracy of the Service.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with applicable laws.",
      "Any disputes shall be resolved in the courts of the applicable jurisdiction.",
      "You agree to submit to the personal jurisdiction of these courts.",
    ],
  },
  {
    title: "Contact Information",
    content: [
      "For any questions about these Terms, please contact us at:",
      "Email: support@company.com",
      "Address: 123 Legal Street, Compliance City, 12345",
      "Phone: (555) 123-4567",
    ],
  },
];

const TermsAndServices = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-8 px-4 pt-52">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="bg-white rounded-lg p-6 h-fit">
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 cursor-pointer"
              >
                <span className="text-sm">{item}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="col-span-1 md:col-span-3 bg-white rounded-lg p-8 space-y-12">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((para, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default TermsAndServices;
