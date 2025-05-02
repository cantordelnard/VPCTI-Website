"use client"

import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/75 backdrop-blur">
      <div className="container flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/vpcti-logo.svg"
            alt="VPower Construction and Trading Inc."
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Careers
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex bg-primary hover:bg-blue-600 transition-colors">
            Contact Us
          </Button>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute inset-x-0 top-20 bg-background shadow-lg md:hidden">
            <div className="container px-4 py-6 space-y-6">
              <nav className="flex flex-col gap-6">
                <Link 
                  href="/" 
                  className="text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="#" 
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="#" 
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="#" 
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="#" 
                  className="text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>
              </nav>
              
              <Button className="w-full bg-primary hover:bg-blue-600 transition-colors">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}