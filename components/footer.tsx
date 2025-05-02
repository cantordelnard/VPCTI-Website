import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold">VPCTI</h3>
            <p className="text-blue-200 text-sm sm:text-base leading-relaxed">
              Nationwide service with precision, power, and craftsmanship that
              defines the standard.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="#"
                className="text-blue-300 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2 sm:space-y-3">
              <Link
                href="/"
                className="block text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="block text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Our Services</h4>
            <nav className="space-y-2 sm:space-y-3">
              <Link
                href="#"
                className="block text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                Architectural Design
              </Link>
              <Link
                href="#"
                className="block text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                Engineering Solutions
              </Link>
              <Link
                href="#"
                className="block text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                Residential Construction
              </Link>
              <Link
                href="#"
                className="block text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                Commercial Projects
              </Link>
              <Link
                href="#"
                className="block text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
              >
                Project Management
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">
              Contact Details
            </h4>
            <address className="not-italic space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <p className="text-blue-200 text-sm sm:text-base">
                  B17 L26 Dama De Noche Street,
                  <br />
                  Pk. 4 Brgy. Sta. Ana, Taytay,
                  <br />
                  Rizal 1920, Philippines
                </p>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div className="text-blue-200 space-y-1 text-sm sm:text-base">
                  <Link
                    href="tel:8950883"
                    className="block hover:text-white transition-colors"
                  >
                    895-0883
                  </Link>
                  <Link
                    href="tel:09498800368"
                    className="block hover:text-white transition-colors"
                  >
                    (0949) 8800368
                  </Link>
                  <Link
                    href="tel:09267028672"
                    className="block hover:text-white transition-colors"
                  >
                    (0926) 7028672
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
                <Link
                  href="mailto:vpowerconstruction12@gmail.com"
                  className="text-blue-200 hover:text-white transition-colors text-sm sm:text-base"
                >
                  vpowerconstruction12@gmail.com
                </Link>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-blue-300 text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} VPower Construction and Trading
            Inc. All rights reserved. | Developed by Delnard Cantor
          </p>
        </div>
      </div>
    </footer>
  );
}
