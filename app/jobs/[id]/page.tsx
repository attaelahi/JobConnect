import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Building2, Clock, DollarSign, Globe, MapPin, Share2, Bookmark } from "lucide-react"
import RelatedJobs from "@/components/related-jobs"

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  // Update the job object to include more detailed images
  const job = {
    id: params.id,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    logo: "/placeholder.svg?height=80&width=80&text=TC&fontWeight=bold&fontSize=24&textColor=%23ffffff&bgColor=%234F46E5",
    banner:
      "/placeholder.svg?height=300&width=1200&text=TechCorp+Modern+Office&fontWeight=bold&fontSize=32&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true",
    coverImage:
      "/placeholder.svg?height=400&width=800&text=Frontend+Development+Team&fontWeight=bold&fontSize=28&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    description: `
    <p>TechCorp is looking for a Senior Frontend Developer to join our growing team. You will be responsible for building user interfaces and implementing designs that provide an exceptional user experience.</p>
    
    <h3>Responsibilities:</h3>
    <ul>
      <li>Develop new user-facing features using React.js</li>
      <li>Build reusable components and libraries for future use</li>
      <li>Translate designs and wireframes into high-quality code</li>
      <li>Optimize components for maximum performance across devices and browsers</li>
      <li>Collaborate with backend developers and designers</li>
    </ul>
    
    <h3>Requirements:</h3>
    <ul>
      <li>5+ years of experience in frontend development</li>
      <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model</li>
      <li>Thorough understanding of React.js and its core principles</li>
      <li>Experience with popular React.js workflows (Redux, Hooks, etc.)</li>
      <li>Familiarity with RESTful APIs and GraphQL</li>
      <li>Knowledge of modern authorization mechanisms, such as JSON Web Token</li>
      <li>Familiarity with modern frontend build pipelines and tools</li>
      <li>Experience with common frontend development tools such as Babel, Webpack, NPM, etc.</li>
      <li>A knack for benchmarking and optimization</li>
    </ul>
    
    <h3>Benefits:</h3>
    <ul>
      <li>Competitive salary and equity package</li>
      <li>Health, dental, and vision insurance</li>
      <li>401(k) with company match</li>
      <li>Flexible work hours and remote work options</li>
      <li>Professional development budget</li>
      <li>Paid time off and parental leave</li>
    </ul>
  `,
    companyDescription:
      "TechCorp is a leading technology company specializing in cloud-based solutions for businesses. We are dedicated to creating innovative products that help our clients succeed in the digital age.",
    companyWebsite: "https://techcorp-example.com",
    companySize: "501-1000 employees",
    companyIndustry: "Technology",
    companyFounded: "2010",
    companyPhotos: [
      "/placeholder.svg?height=200&width=300&text=Modern+Office+Space&fontWeight=bold&fontSize=16&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true",
      "/placeholder.svg?height=200&width=300&text=Team+Meeting&fontWeight=bold&fontSize=16&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true",
      "/placeholder.svg?height=200&width=300&text=Company+Event&fontWeight=bold&fontSize=16&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true",
      "/placeholder.svg?height=200&width=300&text=Collaborative+Workspace&fontWeight=bold&fontSize=16&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true",
    ],
  }

  // Update the job details page to include more images
  return (
    <div className="flex flex-col min-h-screen">
      {/* Job Details Header */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6 md:items-center">
            <Image
              src={job.logo || "/placeholder.svg"}
              alt={job.company}
              width={100}
              height={100}
              className="rounded-lg shadow-lg"
            />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">{job.title}</h1>
              <div className="flex flex-wrap gap-2 items-center">
                <Link
                  href={`/companies/${job.company.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-lg font-medium hover:text-primary"
                >
                  {job.company}
                </Link>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Posted {job.posted}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="default">{job.type}</Badge>
                <Badge variant="outline" className="bg-green-50">
                  <DollarSign className="h-3 w-3 mr-1" />
                  {job.salary}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Banner */}
      <section className="w-full">
        <div className="relative h-64 w-full">
          <Image src={job.banner || "/placeholder.svg"} alt={`${job.company} office`} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* Job Details Content */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="flex-1 sm:flex-none">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save Job
                </Button>
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              {/* Cover Image */}
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={job.coverImage || "/placeholder.svg"}
                  alt={`${job.title} team`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Job Description */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Job Description</h2>
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">About {job.company}</h2>
                  <div className="flex items-center gap-4">
                    <Image
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      width={60}
                      height={60}
                      className="rounded-md shadow-md"
                    />
                    <div>
                      <h3 className="font-semibold">{job.company}</h3>
                      <Link
                        href={job.companyWebsite}
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        <Globe className="h-3 w-3" />
                        Visit Website
                      </Link>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{job.companyDescription}</p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-start gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="font-medium">Company Size:</span>
                        <p className="text-muted-foreground">{job.companySize}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Briefcase className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="font-medium">Industry:</span>
                        <p className="text-muted-foreground">{job.companyIndustry}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="font-medium">Founded:</span>
                        <p className="text-muted-foreground">{job.companyFounded}</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-2">
                    View Company Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Company Photos */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">Company Photos</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {job.companyPhotos.map((photo, index) => (
                      <div key={index} className="relative h-24 rounded-md overflow-hidden shadow-md">
                        <Image
                          src={photo || "/placeholder.svg"}
                          alt={`${job.company} workplace ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold">Job Details</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="font-medium">Location:</span>
                        <p className="text-muted-foreground">{job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Briefcase className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="font-medium">Job Type:</span>
                        <p className="text-muted-foreground">{job.type}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="font-medium">Salary Range:</span>
                        <p className="text-muted-foreground">{job.salary}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <span className="font-medium">Posted:</span>
                        <p className="text-muted-foreground">{job.posted}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Jobs */}
      <RelatedJobs />
    </div>
  )
}

