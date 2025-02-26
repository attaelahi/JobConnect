import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import JobFilters from "@/components/job-filters"
import JobListItem from "@/components/job-list-item"
import Pagination from "@/components/pagination"

export default function JobsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Perfect Job</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Browse thousands of job opportunities across various industries and locations
              </p>
            </div>
            <div className="w-full max-w-2xl">
              <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Job title, keywords, or company" className="w-full pl-8" />
                </div>
                <Button>Search Jobs</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Search Results */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr]">
            {/* Filters Sidebar */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                  Clear All
                </Button>
              </div>
              <JobFilters />
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold">1,245 Jobs Found</h2>
                  <p className="text-sm text-muted-foreground">Based on your search criteria</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Sort by:</span>
                  <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                    <option>Most Relevant</option>
                    <option>Newest</option>
                    <option>Highest Salary</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {/* Job Items */}
                <JobListItem
                  id="1"
                  title="Senior Frontend Developer"
                  company="TechCorp"
                  logo="/placeholder.svg?height=40&width=40&text=TC"
                  image="/placeholder.svg?height=200&width=600&text=Frontend+Development"
                  location="San Francisco, CA"
                  type="Full-time"
                  salary="$120,000 - $150,000"
                  posted="2 days ago"
                  description="We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces and implementing designs."
                />
                <JobListItem
                  id="2"
                  title="Product Manager"
                  company="InnovateCo"
                  logo="/placeholder.svg?height=40&width=40&text=IC"
                  image="/placeholder.svg?height=200&width=600&text=Product+Management"
                  location="New York, NY"
                  type="Full-time"
                  salary="$110,000 - $140,000"
                  posted="3 days ago"
                  description="Join our product team to lead the development of innovative solutions. You will work closely with engineering, design, and marketing teams."
                />
                <JobListItem
                  id="3"
                  title="UX/UI Designer"
                  company="DesignHub"
                  logo="/placeholder.svg?height=40&width=40&text=DH"
                  image="/placeholder.svg?height=200&width=600&text=UX+Design"
                  location="Remote"
                  type="Contract"
                  salary="$90,000 - $120,000"
                  posted="1 day ago"
                  description="We're seeking a talented UX/UI Designer to create beautiful, intuitive interfaces for our products. You should have a strong portfolio showcasing your design skills."
                />
                <JobListItem
                  id="4"
                  title="Data Scientist"
                  company="DataWorks"
                  logo="/placeholder.svg?height=40&width=40&text=DW"
                  image="/placeholder.svg?height=200&width=600&text=Data+Science"
                  location="Boston, MA"
                  type="Full-time"
                  salary="$130,000 - $160,000"
                  posted="5 days ago"
                  description="Join our data science team to analyze complex datasets and build predictive models. Strong background in statistics and machine learning required."
                />
                <JobListItem
                  id="5"
                  title="DevOps Engineer"
                  company="CloudSys"
                  logo="/placeholder.svg?height=40&width=40&text=CS"
                  image="/placeholder.svg?height=200&width=600&text=DevOps"
                  location="Remote"
                  type="Full-time"
                  salary="$115,000 - $145,000"
                  posted="1 week ago"
                  description="We're looking for a DevOps Engineer to help us build and maintain our cloud infrastructure. Experience with AWS, Docker, and Kubernetes is required."
                />
              </div>

              {/* Pagination */}
              <Pagination totalPages={10} currentPage={1} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

