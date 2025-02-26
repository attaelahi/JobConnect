import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BriefcaseBusiness, Clock, FileText, LineChart, MailOpen, Plus, Users } from "lucide-react"

export default function EmployerDashboard() {
  // This would typically come from an API
  const postedJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "2 days ago",
      applicants: 12,
      status: "active",
      image:
        "/placeholder.svg?height=100&width=300&text=Frontend+Development&fontWeight=bold&fontSize=16&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true",
    },
    {
      id: 2,
      title: "UX Designer",
      location: "Remote",
      type: "Full-time",
      posted: "1 week ago",
      applicants: 24,
      status: "active",
      image:
        "/placeholder.svg?height=100&width=300&text=UX+Design&fontWeight=bold&fontSize=16&textColor=%23ffffff&bgColor=%23EC4899&bgGradient=true",
    },
    {
      id: 3,
      title: "Product Manager",
      location: "New York, NY",
      type: "Full-time",
      posted: "2 weeks ago",
      applicants: 18,
      status: "closed",
      image:
        "/placeholder.svg?height=100&width=300&text=Product+Management&fontWeight=bold&fontSize=16&textColor=%23ffffff&bgColor=%2310B981&bgGradient=true",
    },
  ]

  const recentApplicants = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Senior Frontend Developer",
      applied: "2 hours ago",
      status: "new",
      avatar:
        "/placeholder.svg?height=40&width=40&text=AJ&fontWeight=bold&fontSize=16&textColor=%23ffffff&bgColor=%234F46E5",
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "UX Designer",
      applied: "1 day ago",
      status: "reviewed",
      avatar:
        "/placeholder.svg?height=40&width=40&text=SW&fontWeight=bold&fontSize=16&textColor=%23ffffff&bgColor=%23EC4899",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Senior Frontend Developer",
      applied: "2 days ago",
      status: "interviewed",
      avatar:
        "/placeholder.svg?height=40&width=40&text=MB&fontWeight=bold&fontSize=16&textColor=%23ffffff&bgColor=%233B82F6",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter">Employer Dashboard</h1>
              <p className="text-muted-foreground">Manage your job postings and applicants</p>
            </div>
            <Link href="/employer/post-job">
              <Button className="gap-1">
                <Plus className="h-4 w-4" />
                Post a New Job
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Jobs</p>
                  <h3 className="text-2xl font-bold">2</h3>
                </div>
                <BriefcaseBusiness className="h-8 w-8 text-primary/60" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Applicants</p>
                  <h3 className="text-2xl font-bold">54</h3>
                </div>
                <Users className="h-8 w-8 text-primary/60" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">New Applications</p>
                  <h3 className="text-2xl font-bold">12</h3>
                </div>
                <MailOpen className="h-8 w-8 text-primary/60" />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Views This Week</p>
                  <h3 className="text-2xl font-bold">324</h3>
                </div>
                <LineChart className="h-8 w-8 text-primary/60" />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="jobs" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="jobs">Posted Jobs</TabsTrigger>
              <TabsTrigger value="applicants">Recent Applicants</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="jobs" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {postedJobs.map((job) => (
                  <Card key={job.id}>
                    <div className="relative h-32 w-full overflow-hidden">
                      <Image src={job.image || "/placeholder.svg"} alt={job.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <Badge
                          variant={job.status === "active" ? "default" : "secondary"}
                          className="bg-white/90 text-black"
                        >
                          {job.status === "active" ? "Active" : "Closed"}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{job.title}</CardTitle>
                          <CardDescription className="mt-1">{job.location}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Posted {job.posted}</span>
                        </div>
                        <div className="font-medium">{job.applicants} applicants</div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Link href={`/employer/jobs/${job.id}/applicants`}>
                        <Button size="sm">View Applicants</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="applicants" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Applicants</CardTitle>
                  <CardDescription>Review and manage recent job applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentApplicants.map((applicant) => (
                      <div
                        key={applicant.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center gap-4">
                          <Image
                            src={applicant.avatar || "/placeholder.svg"}
                            alt={applicant.name}
                            width={40}
                            height={40}
                            className="rounded-full shadow-md"
                          />
                          <div>
                            <h4 className="font-medium">{applicant.name}</h4>
                            <p className="text-sm text-muted-foreground">{applicant.position}</p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                              <Clock className="h-3 w-3" />
                              <span>Applied {applicant.applied}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              applicant.status === "new"
                                ? "default"
                                : applicant.status === "reviewed"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {applicant.status === "new"
                              ? "New"
                              : applicant.status === "reviewed"
                                ? "Reviewed"
                                : "Interviewed"}
                          </Badge>
                          <Link href={`/employer/applicants/${applicant.id}`}>
                            <Button variant="ghost" size="sm">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/employer/applicants" className="w-full">
                    <Button variant="outline" className="w-full">
                      View All Applicants
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Job Performance</CardTitle>
                  <CardDescription>View analytics for your job postings</CardDescription>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-40 w-40 mb-4">
                      <Image
                        src="/placeholder.svg?height=160&width=160&text=Analytics+Chart&fontWeight=bold&fontSize=16&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true"
                        alt="Analytics chart"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <p className="text-muted-foreground">
                      Analytics visualization showing views, applications, and other metrics for your job postings.
                    </p>
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

