import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function JobFilters() {
  return (
    <div className="space-y-6">
      {/* Location Filter */}
      <div className="space-y-4">
        <h3 className="font-medium">Location</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="remote" />
            <Label htmlFor="remote">Remote</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="hybrid" />
            <Label htmlFor="hybrid">Hybrid</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="onsite" />
            <Label htmlFor="onsite">On-site</Label>
          </div>
        </div>
        <Input placeholder="City, state, or zip code" />
      </div>

      {/* Job Type Filter */}
      <div className="space-y-4">
        <h3 className="font-medium">Job Type</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="fulltime" />
            <Label htmlFor="fulltime">Full-time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="parttime" />
            <Label htmlFor="parttime">Part-time</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="contract" />
            <Label htmlFor="contract">Contract</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="internship" />
            <Label htmlFor="internship">Internship</Label>
          </div>
        </div>
      </div>

      {/* Experience Level Filter */}
      <div className="space-y-4">
        <h3 className="font-medium">Experience Level</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="entry" />
            <Label htmlFor="entry">Entry Level</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="mid" />
            <Label htmlFor="mid">Mid Level</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="senior" />
            <Label htmlFor="senior">Senior Level</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="executive" />
            <Label htmlFor="executive">Executive</Label>
          </div>
        </div>
      </div>

      {/* Salary Range Filter */}
      <div className="space-y-4">
        <h3 className="font-medium">Salary Range</h3>
        <div className="space-y-6">
          <Slider defaultValue={[50000, 150000]} min={0} max={250000} step={5000} />
          <div className="flex items-center justify-between">
            <span className="text-sm">$50,000</span>
            <span className="text-sm">$150,000</span>
          </div>
        </div>
      </div>

      {/* Industry Filter */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="industry">
          <AccordionTrigger className="font-medium">Industry</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="tech" />
                <Label htmlFor="tech">Technology</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="healthcare" />
                <Label htmlFor="healthcare">Healthcare</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="finance" />
                <Label htmlFor="finance">Finance</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="education" />
                <Label htmlFor="education">Education</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="retail" />
                <Label htmlFor="retail">Retail</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Date Posted Filter */}
      <div className="space-y-4">
        <h3 className="font-medium">Date Posted</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="today" />
            <Label htmlFor="today">Today</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="week" />
            <Label htmlFor="week">Past Week</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="month" />
            <Label htmlFor="month">Past Month</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="anytime" />
            <Label htmlFor="anytime">Anytime</Label>
          </div>
        </div>
      </div>
    </div>
  )
}

