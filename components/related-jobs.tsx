import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"

export default function RelatedJobs() {
  // This would typically come from an API
  const relatedJobs = [
    {
      id: 2,
      title: "Frontend Developer",
      company: "WebTech",
      logo: "/placeholder.svg?height=40&width=40&text=WT&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%233B82F6",
      image:
        "/placeholder.svg?height=150&width=300&text=Frontend+Development&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%233B82F6&bgGradient=true",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "React Developer",
      company: "AppWorks",
      logo: "/placeholder.svg?height=40&width=40&text=AW&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%238B5CF6",
      image:
        "/placeholder.svg?height=150&width=300&text=React+Development&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%238B5CF6&bgGradient=true",
      location: "Remote",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "UI Engineer",
      company: "DesignLabs",
      logo: "/placeholder.svg?height=40&width=40&text=DL&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%23EC4899",
      image:
        "/placeholder.svg?height=150&width=300&text=UI+Engineering&fontWeight=bold&fontSize=18&textColor=%23ffffff&bgColor=%23EC4899&bgGradient=true",
      location: "New York, NY",
      type: "Full-time",
      salary: "$115,000 - $145,000",
      posted: "5 days ago",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter">Similar Jobs</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore other opportunities that match your skills and experience
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {relatedJobs.map((job) => (
            <Card key={job.id} className="overflow-hidden">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={job.image || "/placeholder.svg"}
                  alt={`${job.title} at ${job.company}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-md overflow-hidden shadow-md">
                      <Image
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <Badge variant={job.location === "Remote" ? "default" : "outline"} className="bg-white/90 text-black">
                    {job.type}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
                <div className="mt-4 space-y-2">
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
      </div>
    </section>
  )
}

