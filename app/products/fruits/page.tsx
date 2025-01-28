"use client"
import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Apple, Grape, Diamond as Lemon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Footer from '@/components/footer';
import Autoplay from 'embla-carousel-autoplay';

export default function Fruits() {
  const fruitCategories = [
    {
      image: "https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?q=80&w=2070",
      title: "Apples",
      varieties: [
        "Golden Delicious",
        "Granny Smith",
        "Top Red Apple",
        "Crisp Red Apple",
        "Flash Gala /Royal Gala/ Big Bucks",
        "Pink Lady",
        "Joya Crisp Red",
        "Crisp Pink"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=2070",
      title: "Pears",
      varieties: [
        "Packham Triumph",
        "William Bon Chretien",
        "Vermont Beauty"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=2073",
      title: "Grapes",
      varieties: [
        "White Seedless Grapes - Sugraone",
        "Red Seedless Grapes - Crimson Seedless",
        "Black Seedless Grapes",
        "Red Seeded Grape - Red Globe"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?q=80&w=2070",
      title: "Citrus",
      varieties: [
        "Easy Peeler - Clementine & Narcodot",
        "Grapefruit",
        "Orange - Naval",
        "Valencia",
        "Autumn Gold"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1621371205896-3082fa811d54?q=80&w=2070",
      title: "Plums",
      varieties: [
        "Angeleno",
        "Africa Delight",
        "Black Splendor"
      ]
    }
  ];

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
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent>
            {fruitCategories.map((category, index) => (
              <CarouselItem key={index} className="relative h-screen">
                <div className="absolute inset-0">
                  <div className="relative h-full">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                  </div>
                </div>

                <div className="relative h-full flex items-center justify-center text-white px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl mb-6 animate-fade-up">
                      {category.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-up">
                      Discover our premium selection of {category.title.toLowerCase()}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-[50px] right-[80px] z-40 flex  w-fit">
            <CarouselPrevious className="bg-white/30 hover:bg-white/50 text-white m-0" />
            <CarouselNext className="bg-white/30 hover:bg-white/50 text-white" />
          </div>
        </Carousel>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Quality Fruits</h2>
              <p className="text-lg text-gray-600 mb-6">
                Under these products line we offer an expertise as a major dealer in Apples of different varieties, Plum, Grapes, Pear, Kiwi, Citrus, Strawberry, Blueberry, Date, Garlic, Vegetables. Our mission is to contribute to the growth and success of our clients by helping them create a market structure which to transact on the sales, distribution and retail of different kind of fruits and citrus without any difficulty or hinderances from the Nigeria market as being structured.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The business philosophy is to be a major dealer in the importation and sales of fruits suitable for individual and household consumption at same time helping individuals and various household maintain a good and healthy balance by consuming of foods not detrimental to their health.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Our Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    "High quality freshly packed fruits",
                    "Wide range and varieties to choose from",
                    "High distribution channel",
                    "Fresh and highly hygienic",
                    "Fair and competitive prices"
                  ].map((benefit, index) => (
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

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Fruit Categories</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {fruitCategories.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <span className="text-xl font-semibold">{category.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.varieties.map((variety, vIndex) => (
                      <Badge
                        key={vIndex}
                        variant="secondary"
                        className="text-sm py-2 px-4 justify-start"
                      >
                        {variety}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
