import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/75 backdrop-blur">
      <div className="container flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/vpcti-logo.svg" // Replace with your actual logo path
            alt="VPower Construction and Trading Inc."
            width={180} // Adjust based on your logo aspect ratio
            height={60}
            className="h-12 w-auto" // Maintain aspect ratio
          />
        </Link>
        
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

        <Button className="bg-primary hover:bg-blue-600 transition-colors">
          Contact Us
        </Button>
      </div>
    </header>
  )
}