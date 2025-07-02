import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", path: "/" },
        { label: "About Us", path: "/about" },
        { label: "Services", path: "/allCategories" },
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Terms of Services", path: "/terms" },
        { label: "Support", path: "/contact" },
      ],
    },
    {
      title: "Core Features",
      links: [
        { label: "Buy Gaming Accounts", path: "/buy-accounts" },
        { label: "Sell Gaming Accounts", path: "/sell-accounts" },
     
      ],
    },
    {
      title: "Social Media",
      links: [
        { label: "Facebook", path: "https://facebook.com" },
        { label: "Instagram", path: "https://instagram.com" },
        { label: "LinkedIn", path: "https://linkedin.com" },
        { label: "X (Twitter)", path: "https://x.com" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 px-6 md:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16">
          {/* Logo & Description */}
          <div>
               <div className="text-2xl font-bold text-blue-900">
                 <Link to="/">
                   DH<span className="text-blue-600">H</span>
                 </Link>
               </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              dhpay is a secure platform for buying, selling, and verifying
              gaming accounts across Arabian countries.
            </p>
          </div>

          {/* Dynamic Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {link.path.startsWith("http") ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 transition"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-600 hover:text-blue-600 transition"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DHPAY. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
