import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"

export default function FeaturedJobs() {
  // This would typically come from an API
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      logo: "/placeholder.svg?height=40&width=40&text=TC&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%234F46E5",
      image:
        "/placeholder.svg?height=200&width=300&text=Frontend+Development&fontWeight=bold&fontSize=20&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateCo",
      logo: "/placeholder.svg?height=40&width=40&text=IC&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%2310B981",
      image:
        "/placeholder.svg?height=200&width=300&text=Product+Management&fontWeight=bold&fontSize=20&textColor=%23ffffff&bgColor=%2310B981&bgGradient=true",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      posted: "3 days ago",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignHub",
      logo: "/placeholder.svg?height=40&width=40&text=DH&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%23EC4899",
      image:
        "/placeholder.svg?height=200&width=300&text=UX+Design&fontWeight=bold&fontSize=20&textColor=%23ffffff&bgColor=%23EC4899&bgGradient=true",
      location: "Remote",
      type: "Contract",
      salary: "$90,000 - $120,000",
      posted: "1 day ago",
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataWorks",
      logo: "/placeholder.svg?height=40&width=40&text=DW&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%236366F1",
      image:
        "/placeholder.svg?height=200&width=300&text=Data+Science&fontWeight=bold&fontSize=20&textColor=%23ffffff&bgColor=%236366F1&bgGradient=true",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      posted: "5 days ago",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudSys",
      logo: "/placeholder.svg?height=40&width=40&text=CS&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%23F59E0B",
      image:
        "/placeholder.svg?height=200&width=300&text=DevOps&fontWeight=bold&fontSize=20&textColor=%23ffffff&bgColor=%23F59E0B&bgGradient=true",
      location: "Remote",
      type: "Full-time",
      salary: "$115,000 - $145,000",
      posted: "1 week ago",
    },
    {
      id: 6,
      title: "Marketing Specialist",
      company: "GrowthCo",
      logo: "/placeholder.svg?height=40&width=40&text=GC&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%23EF4444",
      image:
        "/placeholder.svg?height=200&width=300&text=Marketing&fontWeight=bold&fontSize=20&textColor=%23ffffff&bgColor=%23EF4444&bgGradient=true",
      location: "Chicago, IL",
      type: "Part-time",
      salary: "$60,000 - $80,000",
      posted: "3 days ago",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Jobs</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover opportunities from top companies hiring right now
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {featuredJobs.map((job) => (
            <Card key={job.id} className="overflow-hidden">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={job.image || "/placeholder.svg"}
                  alt={`${job.title} at ${job.company}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-md overflow-hidden">
                      <Image
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-white">
                      <h3 className="font-semibold text-sm">{job.company}</h3>
                    </div>
                  </div>
                  <Badge variant={job.location === "Remote" ? "default" : "outline"} className="bg-white/90 text-black">
                    {job.type}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{job.posted}</span>
                  </div>
                  <p className="font-medium">{job.salary}</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex justify-between w-full">
                  <Button variant="outline" size="sm">
                    Save
                  </Button>
                  <Link href={`/jobs/${job.id}`}>
                    <Button size="sm">View Job</Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/jobs">
            <Button variant="outline">View All Jobs</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

