import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-4xl font-bold">VPCTI</h3>
            <p className="text-blue-200">
              Building excellence with precision and innovation since 1995.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-blue-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-blue-200 hover:text-white">
                Home
              </Link>
              <Link href="/about" className="block text-blue-200 hover:text-white">
                About Us
              </Link>
              <Link href="/services" className="block text-blue-200 hover:text-white">
                Services
              </Link>
              <Link href="/projects" className="block text-blue-200 hover:text-white">
                Projects
              </Link>
              <Link href="/contact" className="block text-blue-200 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <nav className="space-y-2">
              <Link href="#" className="block text-blue-200 hover:text-white">
                Commercial Construction
              </Link>
              <Link href="#" className="block text-blue-200 hover:text-white">
                Residential Development
              </Link>
              <Link href="#" className="block text-blue-200 hover:text-white">
                Renovations
              </Link>
              <Link href="#" className="block text-blue-200 hover:text-white">
                Project Management
              </Link>
              <Link href="#" className="block text-blue-200 hover:text-white">
                Design-Build
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-300">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-blue-200">123 Construction Ave, Building City, BC 12345</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300" />
                <Link href="tel:+5551234567" className="text-blue-200 hover:text-white">
                  (555) 123-4567
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300" />
                <Link href="mailto:info@vpcti.com" className="text-blue-200 hover:text-white">
                  info@vpcti.com
                </Link>
              </div>
            </address>

          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} VPower Construction and Trading Inc. All rights reserved. Developed by Delnard Cantor.</p>
        </div>
      </div>
    </footer>
  )
}