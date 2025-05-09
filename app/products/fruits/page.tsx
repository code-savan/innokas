"use client"
import Navigation from '@/components/ui/navigation';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Footer from '@/components/footer';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';

export default function Fruits() {
  // Fruit category data with multiple images for each category
  const fruitCategories = [
    {
      title: "Apples",
      description: "Our apples are carefully selected from the finest orchards, ensuring crisp texture and sweet flavor in every bite. We offer a variety of types to suit different taste preferences.",
      varieties: [
        "Golden Delicious",
        "Granny Smith",
        "Top Red Apple",
        "Crisp Red Apple",
        "Flash Gala /Royal Gala/ Big Bucks",
        "Pink Lady",
        "Joya Crisp Red",
        "Crisp Pink"
      ],
      images: [
        "https://images.unsplash.com/photo-1610397962076-02407a169a5b?q=80&w=3174",
        "https://images.unsplash.com/photo-1600423115367-87ea7661688f?q=80&w=1000",
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1000",
        "/apple1.jpeg",
        "/apple2.jpeg",
        "/apple3.jpeg"
      ]
    },
    {
      title: "Pears",
      description: "Our pears are juicy and sweet with a slightly grainy texture. They're harvested at the perfect moment to ensure optimal ripeness and flavor when they reach your table.",
      varieties: [
        "Packham Triumph",
        "William Bon Chretien",
        "Vermont Beauty"
      ],
      images: [
        "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?q=80&w=2940",
        "https://images.unsplash.com/photo-1453487021979-5b739b2849f4?q=80&w=2013",
        "https://images.unsplash.com/photo-1591513917350-c0653b22c009?q=80&w=2944",
        "https://images.unsplash.com/photo-1602586947950-0212cd0e1770?q=80&w=2940",
        "https://images.unsplash.com/photo-1570115114436-63d3405246e7?q=80&w=3087",
        "https://images.unsplash.com/photo-1517428956741-0e738679fc79?q=80&w=3135"
      ]
    },
    {
      title: "Grapes",
      description: "Our grapes are plump, juicy, and bursting with flavor. Available in various colors and sizes, they're perfect for snacking, adding to salads, or creating a stunning fruit platter.",
      varieties: [
        "White Seedless Grapes - Sugraone",
        "Red Seedless Grapes - Crimson Seedless",
        "Black Seedless Grapes",
        "Red Seeded Grape - Red Globe"
      ],
      images: [
        "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=2073",
        "/grape1.jpeg",
        "/grape2.jpeg",
        "/grape3.jpeg",
        "/grape4.jpeg"
      ]
    },
    {
      title: "Citrus",
      description: "Our citrus fruits are bright, zesty, and packed with vitamin C. Each variety offers a unique balance of sweet and tangy flavors, perfect for juicing or enjoying fresh.",
      varieties: [
        "Easy Peeler - Clementine & Narcodot",
        "Grapefruit",
        "Orange - Naval",
        "Valencia",
        "Autumn Gold"
      ],
      images: [
        "https://images.unsplash.com/photo-1597714026720-8f74c62310ba?q=80&w=2070",
        "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?q=80&w=3096",
        "https://images.unsplash.com/photo-1528580152190-66d551db2e06?q=80&w=2940",
        "https://images.unsplash.com/photo-1654509480655-327cc2b46f86?q=80&w=2268",
        "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=3024"
      ]
    },
    {
      title: "Plums",
      description: "Our plums are succulent with a perfect balance of sweetness and tartness. Their rich, deep colors indicate the intense flavors within, making them a delicious snacking option.",
      varieties: [
        "Angeleno",
        "Africa Delight",
        "Black Splendor"
      ],
      images: [
        "https://images.unsplash.com/photo-1518834903818-7d1557333fda?q=80&w=1374",
        "https://images.unsplash.com/photo-1503267509980-772860efc568?q=80&w=3132",
        "https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?q=80&w=2940",
        "https://images.unsplash.com/photo-1627544282015-38a64d2ce8c1?q=80&w=2940",
        "https://images.unsplash.com/photo-1560287820-f71eda3d75c9?q=80&w=3164"
      ]
    }
  ];

  // Create persistent autoplay instances
  const autoplayRefs = useRef(
    Array(fruitCategories.length + 1).fill(null).map(() =>
      Autoplay({ delay: 4000, stopOnInteraction: false })
    )
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
          plugins={[autoplayRefs.current[0]]}
          className="min-w-full h-full overflow-hidden"
        >
          <CarouselContent>
            {fruitCategories.map((category, index) => (
              <CarouselItem key={index} className="relative h-screen">
                {/* Fixed background image with overlay */}
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
                      Discover our premium selection of {category.title.toLowerCase()}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-[50px] right-[80px] z-40 flex w-fit">
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

          {fruitCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">{category.title}</h3>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Static Image Gallery */}
                <div className="grid grid-cols-2 gap-4">
                  {category.images.slice(0, 5).map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`relative rounded-lg overflow-hidden ${imgIndex === 0 ? 'col-span-2 h-60' : 'h-40'}`}
                    >
                      <Image
                        src={image}
                        alt={`${category.title} image ${imgIndex + 1}`}
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

              {index < fruitCategories.length - 1 && (
                <div className="border-b border-gray-200 mt-8"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
