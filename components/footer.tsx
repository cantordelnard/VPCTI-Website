import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">VPCTI</h3>
            <p className="text-blue-200 leading-relaxed">
              Precision construction solutions with 25+ years of trusted expertise across the Philippines.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-blue-200 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-blue-200 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-blue-200 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/projects" className="block text-blue-200 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="block text-blue-200 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <nav className="space-y-3">
              <Link href="#" className="block text-blue-200 hover:text-white transition-colors">
                Architectural Design
              </Link>
              <Link href="#" className="block text-blue-200 hover:text-white transition-colors">
                Engineering Solutions
              </Link>
              <Link href="#" className="block text-blue-200 hover:text-white transition-colors">
                Residential Construction
              </Link>
              <Link href="#" className="block text-blue-200 hover:text-white transition-colors">
                Commercial Projects
              </Link>
              <Link href="#" className="block text-blue-200 hover:text-white transition-colors">
                Project Management
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Details</h4>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <p className="text-blue-200">
                  B17 L26 Dama De Noche Street,<br />
                  Pk. 4 Brgy. Sta. Ana, Taytay,<br />
                  Rizal 1920, Philippines
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <div className="text-blue-200 space-y-1">
                  <Link href="tel:8950883" className="block hover:text-white transition-colors">
                    895-0883
                  </Link>
                  <Link href="tel:09498800368" className="block hover:text-white transition-colors">
                    (0949) 8800368
                  </Link>
                  <Link href="tel:09267028672" className="block hover:text-white transition-colors">
                    (0926) 7028672
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <Link href="mailto:vpowerconstruction12@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                  vpowerconstruction12@gmail.com
                </Link>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} VPower Construction and Trading Inc. All rights reserved. | 
            Developed by Delnard Cantor
          </p>
        </div>
      </div>
    </footer>
  )
}