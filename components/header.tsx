import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BriefcaseBusiness, Search } from "lucide-react"
import MobileNav from "./mobile-nav"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <BriefcaseBusiness className="h-6 w-6 text-primary" />
            <span>JobConnect</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <Link href="/jobs" className="text-sm font-medium hover:text-primary">
              Find Jobs
            </Link>
            <Link href="/companies" className="text-sm font-medium hover:text-primary">
              Companies
            </Link>
            <Link href="/resources" className="text-sm font-medium hover:text-primary">
              Resources
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search jobs..." className="w-full pl-8" />
          </div>
          <Link href="/employer/dashboard">
            <Button variant="outline" size="sm">
              For Employers
            </Button>
          </Link>
          <Link href="/signin">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Sign Up</Button>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

