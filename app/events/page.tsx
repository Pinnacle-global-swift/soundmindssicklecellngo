"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, Users, ArrowRight, Search, Filter, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Event type definition
interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  category: "awareness" | "fundraising" | "education" | "support" | "research"
  featured?: boolean
  registrationLink?: string
}

// Sample events data
const eventsData: Event[] = [
  {
    id: 1,
    title: "World Sickle Cell Day Awareness Walk",
    date: "June 19, 2025",
    time: "9:00 AM - 12:00 PM",
    location: "Central Park, New York",
    description:
      "Join us for our annual awareness walk to commemorate World Sickle Cell Day. This family-friendly event includes a 5K walk, educational booths, and activities for children.",
    image:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "awareness",
    featured: true,
    registrationLink: "/events/register/1",
  },
  {
    id: 2,
    title: "Sickle Cell Research Symposium",
    date: "July 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Medical Research Center, Boston",
    description:
      "A symposium bringing together researchers, healthcare professionals, and patients to discuss the latest advancements in sickle cell disease research and treatment.",
    image:
      "https://images.unsplash.com/photo-1576089073624-b5751a8f4de9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "research",
    registrationLink: "/events/register/2",
  },
  {
    id: 3,
    title: "Annual Fundraising Gala",
    date: "September 10, 2025",
    time: "6:30 PM - 10:00 PM",
    location: "Grand Ballroom, Hilton Hotel, Chicago",
    description:
      "Our elegant annual gala raises funds to support sickle cell research, education, and patient support programs. Enjoy dinner, entertainment, and a silent auction.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "fundraising",
    featured: true,
    registrationLink: "/events/register/3",
  },
  {
    id: 4,
    title: "Parent Support Group Meeting",
    date: "May 25, 2025",
    time: "7:00 PM - 8:30 PM",
    location: "Community Center, Atlanta",
    description:
      "A monthly support group for parents and caregivers of children with sickle cell disease. Share experiences, learn coping strategies, and connect with others.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "support",
  },
  {
    id: 5,
    title: "Educational Workshop for Healthcare Providers",
    date: "August 5, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "University Medical Center, Philadelphia",
    description:
      "A comprehensive workshop for healthcare providers on best practices for managing sickle cell disease, including pain management, preventive care, and patient communication.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "education",
    registrationLink: "/events/register/5",
  },
  {
    id: 6,
    title: "Youth Camp for Children with Sickle Cell",
    date: "July 10-15, 2025",
    time: "All Day",
    location: "Camp Sunshine, Lake George, NY",
    description:
      "A week-long summer camp for children with sickle cell disease. Activities include swimming, arts and crafts, sports, and educational sessions about managing the condition.",
    image:
      "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "support",
    featured: true,
    registrationLink: "/events/register/6",
  },
  {
    id: 7,
    title: "Community Blood Drive",
    date: "May 30, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Community Blood Center, Houston",
    description:
      "Help support patients with sickle cell disease by donating blood. This special blood drive focuses on increasing the diversity of the blood supply to better match the needs of sickle cell patients.",
    image:
      "https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    category: "awareness",
    registrationLink: "/events/register/7",
  },
  {
    id: 8,
    title: "Sickle Cell Advocacy Day",
    date: "October 12, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "State Capitol Building, Sacramento",
    description:
      "Join us as we meet with legislators to advocate for policies that improve the lives of people with sickle cell disease. Training will be provided for all participants.",
    image:
      "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    category: "awareness",
    registrationLink: "/events/register/8",
  },
]

// Category badge colors
const categoryColors = {
  awareness: "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300",
  fundraising: "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300",
  education: "bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900 dark:text-purple-300",
  support: "bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900 dark:text-amber-300",
  research: "bg-indigo-100 text-indigo-800 hover:bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300",
}

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(eventsData)
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([])
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Animation for loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Filter events based on search term and category
  useEffect(() => {
    const filtered = eventsData.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory ? event.category === selectedCategory : true

      return matchesSearch && matchesCategory
    })

    setFilteredEvents(filtered)

    // Set featured events
    setFeaturedEvents(eventsData.filter((event) => event.featured))

    // Set upcoming events (all events for demo purposes)
    setUpcomingEvents(eventsData)
  }, [searchTerm, selectedCategory])

  // Function to handle category selection
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value === "all" ? null : value)
  }

  // Function to get category badge color
  const getCategoryBadgeClass = (category: string) => {
    return categoryColors[category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-green">
            Events & Activities
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
            Join us for educational workshops, fundraising events, support groups, and awareness activities related to
            sickle cell disease.
          </p>
        </div>

        {/* Featured Events Carousel */}
        <div className="relative overflow-hidden rounded-xl shadow-xl">
          <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
            {featuredEvents.length > 0 && (
              <div className="relative aspect-[21/9] overflow-hidden">
                <Image
                  src={featuredEvents[0].image || "/placeholder.svg"}
                  alt={featuredEvents[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <Badge className="mb-3 bg-brand-green hover:bg-brand-green/90">Featured Event</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{featuredEvents[0].title}</h2>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{featuredEvents[0].date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{featuredEvents[0].time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{featuredEvents[0].location}</span>
                    </div>
                  </div>
                  <p className="mb-4 max-w-3xl">{featuredEvents[0].description}</p>
                  {featuredEvents[0].registrationLink && (
                    <Link href={featuredEvents[0].registrationLink}>
                      <Button className="bg-brand-green hover:bg-brand-green/90">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
            </div>
          )}
        </div>

        {/* Search and Filter */}
        <div className="bg-brand-green/5 p-6 rounded-xl border border-brand-green/20">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search events by title, description, or location"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Select onValueChange={handleCategoryChange}>
                <SelectTrigger>
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="awareness">Awareness</SelectItem>
                  <SelectItem value="fundraising">Fundraising</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-2 mb-8 bg-brand-green/10">
            <TabsTrigger value="all" className="data-[state=active]:bg-brand-green data-[state=active]:text-white">
              All Events
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-brand-green data-[state=active]:text-white">
              Upcoming Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No events found matching your search criteria.</p>
                <Button
                  className="mt-4 bg-brand-green hover:bg-brand-green/90"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory(null)
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div
                className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
              >
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden border-brand-green/20 h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <Badge className={`absolute top-2 right-2 ${getCategoryBadgeClass(event.category)}`}>
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-brand-green">{event.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center mt-1">
                          <Calendar className="h-4 w-4 mr-2 text-brand-green" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Clock className="h-4 w-4 mr-2 text-brand-green" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-2 text-brand-green" />
                          <span>{event.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 line-clamp-3">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      {event.registrationLink ? (
                        <Link href={event.registrationLink} className="w-full">
                          <Button className="w-full bg-brand-green hover:bg-brand-green/90">Register Now</Button>
                        </Link>
                      ) : (
                        <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300" disabled>
                          Registration Coming Soon
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-6">
            <div
              className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
            >
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden border-brand-green/20 h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Badge className={`absolute top-2 right-2 ${getCategoryBadgeClass(event.category)}`}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-brand-green">{event.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 mr-2 text-brand-green" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-2 text-brand-green" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-2 text-brand-green" />
                        <span>{event.location}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 line-clamp-3">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    {event.registrationLink ? (
                      <Link href={event.registrationLink} className="w-full">
                        <Button className="w-full bg-brand-green hover:bg-brand-green/90">Register Now</Button>
                      </Link>
                    ) : (
                      <Button className="w-full bg-gray-200 text-gray-700 hover:bg-gray-300" disabled>
                        Registration Coming Soon
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Host an Event Section */}
        <div className="bg-brand-green/10 p-8 rounded-xl border border-brand-green/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-green mb-4">Host Your Own Event</h2>
              <p className="text-gray-600 mb-4">
                Interested in organizing an event to raise awareness or funds for sickle cell disease? We can help you
                plan and promote your event.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Community fundraisers</span>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>School awareness programs</span>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                  <span>Corporate sponsorship opportunities</span>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="bg-brand-green hover:bg-brand-green/90">
                    Contact Us to Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[250px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Group of volunteers organizing an event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-brand-green">Volunteer at Our Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our events wouldn't be possible without the help of dedicated volunteers. Whether you have a few hours or a
            few days to spare, your support makes a difference.
          </p>
          <div className="flex justify-center">
            <Link href="/volunteer">
              <Button className="bg-brand-green hover:bg-brand-green/90">
                <Heart className="mr-2 h-4 w-4" />
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
