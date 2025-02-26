import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Briefcase, PenTool, Database, Building, LineChart, Stethoscope, GraduationCap } from "lucide-react"

export default function JobCategories() {
  const categories = [
    {
      id: "tech",
      name: "Technology",
      count: 1245,
      icon: <Code className="h-6 w-6" />,
      color: "#4F46E5", // Indigo
    },
    {
      id: "business",
      name: "Business",
      count: 857,
      icon: <Briefcase className="h-6 w-6" />,
      color: "#10B981", // Emerald
    },
    {
      id: "design",
      name: "Design",
      count: 423,
      icon: <PenTool className="h-6 w-6" />,
      color: "#EC4899", // Pink
    },
    {
      id: "data",
      name: "Data Science",
      count: 390,
      icon: <Database className="h-6 w-6" />,
      color: "#6366F1", // Indigo
    },
    {
      id: "engineering",
      name: "Engineering",
      count: 521,
      icon: <Building className="h-6 w-6" />,
      color: "#F59E0B", // Amber
    },
    {
      id: "marketing",
      name: "Marketing",
      count: 387,
      icon: <LineChart className="h-6 w-6" />,
      color: "#EF4444", // Red
    },
    {
      id: "healthcare",
      name: "Healthcare",
      count: 473,
      icon: <Stethoscope className="h-6 w-6" />,
      color: "#8B5CF6", // Violet
    },
    {
      id: "education",
      name: "Education",
      count: 253,
      icon: <GraduationCap className="h-6 w-6" />,
      color: "#3B82F6", // Blue
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Browse by Category</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore jobs across different industries and specializations
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/jobs/categories/${category.id}`}>
              <Card className="overflow-hidden h-full transition-colors hover:bg-muted/50">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div
                    className="rounded-full p-3 mb-4 border"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
                      borderColor: `${category.color}30`,
                      color: category.color,
                    }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} jobs</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

