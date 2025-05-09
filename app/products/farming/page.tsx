"use client"
import Navigation from '@/components/ui/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

export default function Farming() {
  // Rice categories with varieties and images
  const riceCategories = [
    {
      title: "Innokas Rice",
      description: "Innokas Rice products are sourced from premium farms and processed using modern techniques to preserve quality, flavor, and nutritional value. Our rice varieties cater to diverse culinary preferences and dietary needs.",
      varieties: [
        "Parboiled Rice",
        "Basmati Rice",
        "Long Grain Rice",
        "Short Grain Rice",
        "Brown Rice"
      ],
      images: [
        "https://images.unsplash.com/photo-1592997572594-34be01bc36c7?q=80&w=2940",
        "/rice1.jpeg",
        "/rice2.jpeg",
        "/rice3.jpeg",
        "https://images.unsplash.com/photo-1704972269889-f0fdd7f0e7c3?q=80&w=2940"
      ],
      benefits: [
        "Naturally grown with minimal pesticides",
        "Processed in state-of-the-art facilities",
        "Consistent quality and taste",
        "Rich in essential nutrients",
        "Available in various packaging options"
      ]
    }
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
            {riceCategories.map((category, index) => (
              <CarouselItem key={index} className="relative h-screen">
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={category.images[0]}
                    alt={`${category.title} main image`}
                    className="object-cover w-full h-full"
                    fill
                    priority
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                </div>

                <div className="relative h-full flex items-center justify-center text-white px-4 z-10">
                  <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl mb-6 animate-fade-up">
                      {category.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-up">
                      Premium quality rice for all your culinary needs
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* About Rice Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Quality Rice</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Innokas Nigeria Limited, we are dedicated to providing the finest quality rice products to meet the diverse needs of our customers. Our rice is carefully selected from premium sources and undergoes rigorous quality checks to ensure exceptional taste, texture, and nutritional value.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We offer a wide range of rice varieties, from aromatic Basmati to nutritious Brown Rice, catering to different culinary preferences and dietary requirements. Our commitment to excellence ensures that every grain of Innokas Rice delivers a perfect cooking experience and delightful meals.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Our Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {riceCategories[0].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <p>{benefit}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rice Varieties Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Rice Varieties</h2>

          {riceCategories.map((category, index) => (
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
                        alt={`Rice image ${imgIndex + 1}`}
                        className="w-full h-full object-cover object-center"
                        width={300}
                        height={300}
                      />
                    </div>
                  ))}
                </div>

                {/* Description and Varieties */}
                <div>
                  <p className="text-lg text-gray-700 mb-6">{category.description}</p>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Available Varieties</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.varieties.map((variety, vIndex) => (
                        <div key={vIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Badge variant="secondary" className="mr-2" />
                          <span>{variety}</span>
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

      {/* Rice Cooking Tips Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Rice Cooking Tips</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Perfect Parboiled Rice",
                tip: "Rinse thoroughly before cooking. Use a 1:2 rice to water ratio and allow to rest for 5 minutes after cooking for fluffy results."
              },
              {
                title: "Aromatic Basmati",
                tip: "Soak for 30 minutes before cooking. Use a 1:1.5 rice to water ratio for perfect texture and enhanced aroma."
              },
              {
                title: "Nutritious Brown Rice",
                tip: "Requires more water and longer cooking time. Use a 1:2.5 ratio and simmer for about 35-40 minutes until tender."
              }
            ].map((tip, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tip.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
