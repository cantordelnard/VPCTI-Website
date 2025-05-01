import Link from 'next/link'
import { Button } from './ui/button'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/75 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-foreground">
          <span className="text-xl">VPCTI</span>
          {/* <span className="hidden sm:inline-block text-sm text-primary">Construction</span> */}
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Careers
          </Link>
        </nav>

        <Button className="bg-primary hover:bg-ios-blue-600">
          Contact Us
        </Button>
      </div>
    </header>
  )
}