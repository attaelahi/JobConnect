import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PopularCompanies() {
  // Update the companies array to include banner images
  const companies = [
    {
      id: 1,
      name: "TechCorp",
      logo: "/placeholder.svg?height=80&width=80&text=TC&fontWeight=bold&fontSize=24&textColor=%23ffffff&bgColor=%234F46E5",
      banner:
        "/placeholder.svg?height=120&width=300&text=TechCorp+Banner&fontWeight=bold&fontSize=20&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true",
      industry: "Technology",
      location: "San Francisco, CA",
      openPositions: 12,
    },
    {
      id: 2,
      name: "InnovateCo",
      logo: "/placeholder.svg?height=80&width=80&text=IC&fontWeight=bold&fontSize=24&textColor=%23ffffff&bgColor=%2310B981",
      banner:
        "/placeholder.svg?height=120&width=300&text=InnovateCo+Banner&fontWeight=bold&fontSize=20&textColor=%23ffffff&bgColor=%2310B981&bgGradient=true",
      industry: "Software",
      location: "New York, NY",
      openPositions: 8,
    },
    {
      id: 3,
      name: "DesignHub",
      logo: "/placeholder.svg?height=80&width=80&text=DH&fontWeight=bold&fontSize=24&textColor=%23ffffff&bgColor=%23EC4899",
      banner:
        "/placeholder.svg?height=120&width=300&text=DesignHub+Banner&fontWeight=bold&fontSize=20&textColor=%23ffffff&bgColor=%23EC4899&bgGradient=true",
      industry: "Design",
      location: "Remote",
      openPositions: 5,
    },
    {
      id: 4,
      name: "DataWorks",
      logo: "/placeholder.svg?height=80&width=80&text=DW&fontWeight=bold&fontSize=24&textColor=%23ffffff&bgColor=%236366F1",
      banner:
        "/placeholder.svg?height=120&width=300&text=DataWorks+Banner&fontWeight=bold&fontSize=20&textColor=%23ffffff&bgColor=%236366F1&bgGradient=true",
      industry: "Data Science",
      location: "Boston, MA",
      openPositions: 7,
    },
  ]

  // Update the Card component to include the company banner
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Companies</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore top companies hiring on our platform
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {companies.map((company) => (
            <Card key={company.id} className="overflow-hidden">
              <div className="relative h-24 w-full overflow-hidden">
                <Image
                  src={company.banner || "/placeholder.svg"}
                  alt={`${company.name} banner`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="relative -mt-12 mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden border-4 border-background shadow-lg">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-lg">{company.name}</h3>
                <p className="text-sm text-muted-foreground">{company.industry}</p>
                <p className="text-sm text-muted-foreground">{company.location}</p>
                <p className="text-sm font-medium mt-2">{company.openPositions} open positions</p>
                <Link href={`/companies/${company.id}`} className="mt-4 w-full">
                  <Button variant="outline" className="w-full">
                    View Company
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/companies">
            <Button variant="outline">View All Companies</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

