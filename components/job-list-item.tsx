import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bookmark, Clock, MapPin } from "lucide-react"

interface JobListItemProps {
  id: string
  title: string
  company: string
  logo: string
  image?: string
  location: string
  type: string
  salary: string
  posted: string
  description: string
}

export default function JobListItem({
  id,
  title,
  company,
  logo,
  image = "/placeholder.svg?height=200&width=600&text=Job+Listing&fontWeight=bold&fontSize=24&textColor=%23ffffff&bgColor=%234F46E5&bgGradient=true",
  location,
  type,
  salary,
  posted,
  description,
}: JobListItemProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start gap-4">
          <div className="relative h-20 w-20 md:h-16 md:w-16 flex-shrink-0">
            <Image src={logo || "/placeholder.svg"} alt={company} fill className="rounded-md object-cover shadow-md" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-semibold text-lg">{title}</h3>
              <Badge variant={location === "Remote" ? "default" : "outline"}>{type}</Badge>
            </div>
            <p className="text-muted-foreground">{company}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{posted}</span>
              </div>
            </div>
            <p className="font-medium">{salary}</p>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

            {/* Add job image */}
            <div className="mt-4 relative h-40 w-full rounded-md overflow-hidden shadow-md">
              <Image src={image || "/placeholder.svg"} alt={`${title} at ${company}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between">
        <Button variant="outline" size="sm" className="gap-1">
          <Bookmark className="h-4 w-4" />
          <span>Save</span>
        </Button>
        <Link href={`/jobs/${id}`}>
          <Button size="sm">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

