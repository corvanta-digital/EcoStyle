import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6">
              EcoStyle<span className="text-accent">.</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Sustainable fashion for a better future. We are committed to 100%
              transparency and zero-waste production.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Shop</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sustainable Denim
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sustainability Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span>
                  123 Green Avenue, Kyiv,
                  <br />
                  Ukraine 01001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} />
                <span>hello@ecostyle.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} />
                <span>+380 44 123 4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} EcoStyle. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
