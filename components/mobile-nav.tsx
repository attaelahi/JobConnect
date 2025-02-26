"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              JobConnect
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="container grid gap-6 py-6">
            <Link href="/jobs" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Find Jobs
            </Link>
            <Link href="/companies" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Companies
            </Link>
            <Link href="/resources" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Resources
            </Link>
            <Link href="/pricing" className="text-lg font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <div className="flex flex-col gap-4 pt-4">
              <Link href="/employer/dashboard" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  For Employers
                </Button>
              </Link>
              <Link href="/signin" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

