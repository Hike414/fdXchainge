import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-950 to-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">fdXchainge</h2>
            <p className="text-white/80 text-sm">
              Where your money grows steadily, securely, and smartly.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/80 hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="text-white/80 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-white transition">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} fdXchainge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
