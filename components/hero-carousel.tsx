"use client"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"

const carouselItems = [
  {
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Understanding Sickle Cell Disease",
    description:
      "Comprehensive information about causes, symptoms, diagnosis, treatment options, and management strategies.",
    alt: "Medical researcher examining blood samples in laboratory",
  },
  {
    image:
      "https://images.unsplash.com/photo-1631815588090-d1bcbe9a8545?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    title: "Expert Medical Care",
    description: "Learn about specialized treatments and healthcare providers for sickle cell disease management.",
    alt: "Medical team discussing patient care in hospital",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Breakthrough Research",
    description: "Explore the latest advancements in sickle cell research and promising new treatments.",
    alt: "Scientific research equipment in laboratory studying blood cells",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Support Our Mission",
    description: "Your donation helps fund research, education, and support for those affected by sickle cell disease.",
    alt: "Person living actively with chronic condition",
    isDonation: true,
  },
]

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [api, setApi] = useState<CarouselApi>()

  const handleSlideChange = useCallback((index: number) => {
    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }, [])

  // Setup carousel API
  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap())
    })
  }, [api])

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext()
      }
    }, 7000)
    return () => clearInterval(interval)
  }, [api])

  return (
    <Carousel className="w-full relative" opts={{ loop: true, duration: 50 }} setApi={setApi}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10 pointer-events-none"></div>

      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div
              className="relative h-[500px] sm:h-[550px] md:h-[650px] lg:h-[750px] w-full overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 100, 0, 0.8), rgba(26, 35, 126, 0.6)), url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12">
                <div className="text-center max-w-4xl">
                  <div
                    className={`mb-4 transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4 drop-shadow-md">
                      {item.title}
                    </h1>
                  </div>

                  <div
                    className={`transition-all duration-500 ${activeIndex === index ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}
                  >
                    <p className="max-w-[800px] text-gray-100 text-lg md:text-xl mx-auto mb-8 drop-shadow-md">
                      {item.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      {item.isDonation ? (
                        <Link href="/donate" className="w-full sm:w-auto">
                          <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 w-full sm:w-auto text-base">
                            <Heart className="mr-2 h-5 w-5" />
                            Donate Now
                          </Button>
                        </Link>
                      ) : (
                        <Link href="/about" className="w-full sm:w-auto">
                          <Button
                            size="lg"
                            className="bg-brand-green hover:bg-brand-green/90 w-full sm:w-auto text-base"
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </Link>
                      )}
                      <Link href={item.isDonation ? "/about" : "/resources"} className="w-full sm:w-auto">
                        <Button
                          variant="outline"
                          size="lg"
                          className="bg-transparent border-2 border-brand-gold text-brand-gold hover:bg-brand-gold/10 w-full sm:w-auto text-base"
                        >
                          {item.isDonation ? "Learn More" : "Find Resources"}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => {
              if (api) {
                api.scrollTo(index)
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <CarouselPrevious className="left-4 z-20 bg-brand-green/20 hover:bg-brand-green/40 border-none text-white" />
      <CarouselNext className="right-4 z-20 bg-brand-green/20 hover:bg-brand-green/40 border-none text-white" />
    </Carousel>
  )
}
