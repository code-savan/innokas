"use client"
import Navigation from '@/components/ui/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Clock, ShieldCheck, MapPin, BarChart4, CheckCircle2, Users, Award, BarChart3, Globe, Lightbulb, CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Image from 'next/image';
import Footer from '@/components/footer';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export default function Logistics() {
  // Logistics services data from the PDF
  const logisticsServices = [
    {
      title: "Transportation Solutions",
      description: "Following the fast-growing economy in the Africa region; Nigeria mostly, and the fact that Nigeria imports more than 85% of goods and equipment consumed locally, INNOKAS Limited, has set up facilities to help citizens purchase through a network of partner offices in Nigeria.",
      services: [
        "Handling of goods and services from one state to the other",
        "Inter-State Transportation"
      ],
      images: [
        "/logistics.jpeg",
        "/bus1.jpeg",
        "/bus2.jpeg",
        "https://images.unsplash.com/photo-1532939163844-547f958e91b4?q=80&w=3088",
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940"
      ]
    }
  ];

  // Service quality promises from the PDF
  const qualityPromises = [
    "Acting with absolute speed and efficiency",
    "Personalizing services to meet customer need at any and all levels",
    "Responding to feedback with affirmative actions"
  ];

  // Logistics enhancement strategies from the PDF
  const enhancementStrategies = [
    "Team of outstanding Logistics professionals",
    "High Level logistics expert",
    "Experienced in improving logistics performance of companies",
    "Experience in a broad range of supply market",
    "Tried and tested innovative logistics methodologies"
  ];

  // Create persistent autoplay instance
  const autoplayRef = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayRef.current]}
          className="min-w-full h-full overflow-hidden"
        >
          <CarouselContent>
            <CarouselItem className="relative h-screen">
              {/* Background image with overlay */}
              <div className="absolute inset-0">
                <Image
                  src="/logistics.jpeg"
                  alt="Logistics operations"
                  className="object-cover w-full h-full"
                  fill
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />
              </div>

              <div className="relative h-full flex items-center justify-center text-white px-4 z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-4xl md:text-6xl mb-6 animate-fade-up">
                    Innokas Transport
                  </h1>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-up">
                    Reliable transportation services across Nigeria
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Under this product line the mission is to enhance the commercial performance of our clients, through the application of exceptional logistic experience and expertise by working in a broad range of sectors, for individuals, small, medium and large companies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Innokas Transport aims to become a major player in the logistic sector through its experienced and committed staff.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Service Quality Promise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-600 mb-4">We are committed to keeping our Quality Service Promise program through:</p>
                  {qualityPromises.map((promise, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p>{promise}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Transportation Services</h2>

          {logisticsServices.map((category, index) => (
            <div key={index} className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-4">
                  {category.images.slice(0, 5).map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`relative rounded-lg overflow-hidden ${imgIndex === 0 ? 'col-span-2 h-60' : 'h-40'}`}
                    >
                      <Image
                        src={image}
                        alt={`Logistics image ${imgIndex + 1}`}
                        className="w-full h-full object-cover object-center"
                        width={300}
                        height={300}
                      />
                    </div>
                  ))}
                </div>

                {/* Description and Services */}
                <div>
                  <p className="text-lg text-gray-700 mb-6">{category.description}</p>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Our Services Include</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {category.services.map((service, sIndex) => (
                        <div key={sIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Badge variant="secondary" className="mr-2" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhancement Strategies Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Enhancing Client Profitability</h2>
          <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Enhancing clients&apos; profitability by improving the management of their purchased goods and services is achieved through a unique combination of:
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Expert Team",
                description: "Team of outstanding Logistics professionals"
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "High-Level Expertise",
                description: "High Level logistics expert"
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-primary" />,
                title: "Performance Improvement",
                description: "Experienced in improving logistics performance of companies"
              },
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Market Experience",
                description: "Experience in a broad range of supply market"
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-primary" />,
                title: "Proven Methodologies",
                description: "Tried and tested innovative logistics methodologies"
              }
            ].map((strategy, index) => (
              <div key={index} className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300"></div>
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300">
                      {strategy.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Why Choose Innokas Transport?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Nationwide Network</p>
                      <p className="text-gray-600">Our services cover the entire Nigeria with reliable inter-state transportation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Experienced Personnel</p>
                      <p className="text-gray-600">Our staff are committed to delivering exceptional service quality</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Tailored Solutions</p>
                      <p className="text-gray-600">We personalize services to meet specific customer needs at all levels</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-full min-h-[320px]">
                <Image
                  src="/bus1.jpeg"
                  alt="Innokas Transport Fleet"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
