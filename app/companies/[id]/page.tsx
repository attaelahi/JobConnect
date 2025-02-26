import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Building2, Clock, Globe, MapPin, Users } from "lucide-react"
import JobListItem from "@/components/job-list-item"

export default function CompanyPage({ params }: { params: { id: string } }) {
  // This would typically come from an API based on the company ID
  const company = {
    id: params.id,
    name: "TechCorp",
    logo: "/placeholder.svg?height=120&width=120&text=TC",
    banner: "/placeholder.svg?height=400&width=1200&text=TechCorp+Headquarters",
    description:
      "TechCorp is a leading technology company specializing in cloud-based solutions for businesses. We are dedicated to creating innovative products that help our clients succeed in the digital age.",
    industry: "Technology",
    location: "San Francisco, CA",
    founded: "2010",
    size: "501-1000 employees",
    website: "https://techcorp-example.com",
    photos: [
      "/placeholder.svg?height=300&width=400&text=Office+Space",
      "/placeholder.svg?height=300&width=400&text=Team+Meeting",
      "/placeholder.svg?height=300&width=400&text=Company+Event",
      "/placeholder.svg?height=300&width=400&text=Work+Environment",
      "/placeholder.svg?height=300&width=400&text=Cafeteria",
      "/placeholder.svg?height=300&width=400&text=Recreation+Area",
    ],
    openPositions: [
      {
        id: "1",
        title: "Senior Frontend Developer",
        company: "TechCorp",
        logo: "/placeholder.svg?height=40&width=40&text=TC",
        image: "/placeholder.svg?height=200&width=600&text=Frontend+Development",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120,000 - $150,000",
        posted: "2 days ago",
        description:
          "We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces and implementing designs.",
      },
      {
        id: "2",
        title: "Product Manager",
        company: "TechCorp",
        logo: "/placeholder.svg?height=40&width=40&text=TC",
        image: "/placeholder.svg?height=200&width=600&text=Product+Management",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        posted: "3 days ago",
        description:
          "Join our product team to lead the development of innovative solutions. You will work closely with engineering, design, and marketing teams.",
      },
      {
        id: "3",
        title: "DevOps Engineer",
        company: "TechCorp",
        logo: "/placeholder.svg?height=40&width=40&text=TC",
        image: "/placeholder.svg?height=200&width=600&text=DevOps",
        location: "Remote",
        type: "Full-time",
        salary: "$115,000 - $145,000",
        posted: "1 week ago",
        description:
          "We're looking for a DevOps Engineer to help us build and maintain our cloud infrastructure. Experience with AWS, Docker, and Kubernetes is required.",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Company Banner */}
      <section className="w-full relative">
        <div className="relative h-64 md:h-80 w-full">
          <Image
            src={company.banner || "/placeholder.svg"}
            alt={`${company.name} headquarters`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container px-4 md:px-6 pb-8">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
              <div className="relative -mt-16 md:mt-0 md:-mb-16 z-10">
                <div className="h-32 w-32 rounded-xl overflow-hidden border-4 border-background bg-background">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left text-white md:pb-16">
                <h1 className="text-3xl font-bold tracking-tighter">{company.name}</h1>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                  <div className="flex items-center gap-1 text-white/80">
                    <Building2 className="h-4 w-4" />
                    <span>{company.industry}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/80">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/80">
                    <Users className="h-4 w-4" />
                    <span>{company.size}</span>
                  </div>
                </div>
              </div>
              <div className="md:ml-auto md:pb-16">
                <Link href={company.website} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="bg-white text-black hover:bg-white/90 hover:text-black">
                    <Globe className="h-4 w-4 mr-2" />
                    Visit Website
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Content */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="jobs">Open Positions ({company.openPositions.length})</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About {company.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{company.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Building2 className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <span className="font-medium">Industry</span>
                          <p className="text-muted-foreground">{company.industry}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <span className="font-medium">Headquarters</span>
                          <p className="text-muted-foreground">{company.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <span className="font-medium">Founded</span>
                          <p className="text-muted-foreground">{company.founded}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <span className="font-medium">Company Size</span>
                          <p className="text-muted-foreground">{company.size}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                        <div>
                          <span className="font-medium">Website</span>
                          <p className="text-muted-foreground">
                            <Link href={company.website} className="text-primary hover:underline">
                              {company.website.replace("https://", "")}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Join Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    At {company.name}, we're passionate about creating innovative solutions that make a difference. We
                    offer a collaborative work environment where creativity and initiative are valued and rewarded.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                    <div className="border rounded-lg p-4 space-y-2">
                      <h3 className="font-medium">Competitive Compensation</h3>
                      <p className="text-sm text-muted-foreground">
                        We offer competitive salaries and comprehensive benefits packages.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4 space-y-2">
                      <h3 className="font-medium">Professional Growth</h3>
                      <p className="text-sm text-muted-foreground">
                        Continuous learning and career development opportunities.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4 space-y-2">
                      <h3 className="font-medium">Work-Life Balance</h3>
                      <p className="text-sm text-muted-foreground">Flexible work arrangements and generous time off.</p>
                    </div>
                    <div className="border rounded-lg p-4 space-y-2">
                      <h3 className="font-medium">Inclusive Culture</h3>
                      <p className="text-sm text-muted-foreground">
                        We celebrate diversity and foster an inclusive environment.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4 space-y-2">
                      <h3 className="font-medium">Modern Workspace</h3>
                      <p className="text-sm text-muted-foreground">
                        State-of-the-art facilities designed for collaboration.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4 space-y-2">
                      <h3 className="font-medium">Impactful Work</h3>
                      <p className="text-sm text-muted-foreground">
                        Opportunity to work on projects that make a real difference.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="jobs" className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Open Positions</h2>
                  <Badge variant="outline" className="text-sm">
                    {company.openPositions.length} jobs
                  </Badge>
                </div>
                {company.openPositions.map((job) => (
                  <JobListItem
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    company={job.company}
                    logo={job.logo}
                    image={job.image}
                    location={job.location}
                    type={job.type}
                    salary={job.salary}
                    posted={job.posted}
                    description={job.description}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="photos" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Company Photos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {company.photos.map((photo, index) => (
                      <div key={index} className="relative h-60 rounded-lg overflow-hidden">
                        <Image
                          src={photo || "/placeholder.svg"}
                          alt={`${company.name} workplace ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

