import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BriefcaseBusiness, Building2, MapPin, Search } from "lucide-react"
import FeaturedJobs from "@/components/featured-jobs"
import PopularCompanies from "@/components/popular-companies"
import JobCategories from "@/components/job-categories"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Find Your Dream Job Today
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with thousands of employers and discover opportunities that match your skills and career
                  goals.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Job title, keywords, or company" className="w-full pl-8" />
                  </div>
                  <Button type="submit">Search Jobs</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Popular: Software Engineer, Marketing, Remote, Healthcare
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <div className="flex items-center gap-1">
                  <BriefcaseBusiness className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">10,000+ Jobs</span>
                </div>
                <div className="flex items-center gap-1">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">1,000+ Companies</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">100+ Locations</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Job+Search+Illustration&fontWeight=bold&fontSize=24&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true"
                alt="Job search illustration"
                width={500}
                height={400}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Job Search Form */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Job title or keyword" className="w-full pl-8" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="text" placeholder="Location" className="w-full pl-8" />
                </div>
                <Button className="w-full">Find Jobs</Button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="secondary" className="cursor-pointer">
                  Remote
                </Badge>
                <Badge variant="secondary" className="cursor-pointer">
                  Full-time
                </Badge>
                <Badge variant="secondary" className="cursor-pointer">
                  Part-time
                </Badge>
                <Badge variant="secondary" className="cursor-pointer">
                  Contract
                </Badge>
                <Badge variant="secondary" className="cursor-pointer">
                  Entry Level
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <FeaturedJobs />

      {/* Popular Companies */}
      <PopularCompanies />

      {/* Job Categories */}
      <JobCategories />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Find Your Next Opportunity?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join thousands of job seekers who have found their dream jobs through JobConnect.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link href="/signup">
                <Button variant="secondary" size="lg">
                  Create an Account
                </Button>
              </Link>
              <Link href="/employer/post-job">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Post a Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

