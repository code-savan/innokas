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

export default function FrozenFoods() {
  // Frozen food categories with product listings and images
  const frozenCategories = [
    {
      title: "Frozen Fish",
      description: "Our frozen fish products are carefully selected and flash-frozen to preserve freshness and flavor. We offer a wide variety of fish types to meet your culinary needs.",
      products: [
        "Mackerel",
        "Horse Mackerel",
        "Red Pacu",
        "Croaker",
        "Tilapia",
        "Mullet",
        "Herring",
        "Blue Whitening",
        "Hake",
        "Alaska",
        "Rockfish"
      ],
      images: [
        "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=2940",
        "https://images.unsplash.com/photo-1582359425634-e3ded9a93770?q=80&w=2940",
        "https://images.unsplash.com/photo-1642517245785-c89127ba8bcd?q=80&w=3174",
        "https://images.unsplash.com/photo-1642517245891-74906b8d8873?q=80&w=3174",
        "https://images.unsplash.com/photo-1668532697600-d0ddf56ece30?q=80&w=3087"
      ]
    },
    {
      title: "Frozen Beef",
      description: "Our premium frozen beef products are sourced from quality suppliers and processed to maintain tenderness and nutritional value. Perfect for a variety of traditional dishes.",
      products: [
        "Frozen Beef Liver",
        "Frozen Beef Heart",
        "Frozen Beef Feet (Cow Leg)",
        "Frozen Beef Lips",
        "Frozen Beef Snout",
        "Frozen Beef Gullet",
        "Frozen Beef Head Meat"
      ],
      images: [
        "https://images.pexels.com/photos/112781/pexels-photo-112781.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "/frozen1.jpg",
        "/frozen2.jpg",
        "/frozen3.jpg",
        "/frozen4.jpg"
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

      {/* Hero Section with Carousel */}
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
            {frozenCategories.map((category, index) => (
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

      {/* About Frozen Foods Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Quality Frozen Foods</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Innokas Nigeria Limited, we pride ourselves on providing top-quality frozen foods that maintain their nutritional value and original taste. Our state-of-the-art freezing techniques ensure that all products remain fresh from our storage to your table.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We offer an extensive range of frozen fish and beef products sourced from trusted suppliers who meet our strict quality standards. Our commitment to excellence means you can always rely on Innokas for consistent quality and prompt delivery.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Our Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    "Flash-frozen to preserve nutritional value",
                    "Rigorous quality control processes",
                    "Consistent supply throughout the year",
                    "Prompt and reliable delivery service",
                    "Competitive pricing for bulk orders"
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

      {/* Product Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Frozen Products</h2>

          {frozenCategories.map((category, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">{category.title}</h3>

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
                        alt={`${category.title} image ${imgIndex + 1}`}
                        className="w-full h-full object-cover object-center"
                        width={300}
                        height={300}
                      />
                    </div>
                  ))}
                </div>

                {/* Description and Products */}
                <div>
                  <p className="text-lg text-gray-700 mb-6">{category.description}</p>

                  <div>
                    <h4 className="text-xl font-semibold mb-4">Available Products</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.products.map((product, pIndex) => (
                        <div key={pIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <Badge variant="secondary" className="mr-2" />
                          <span>{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index < frozenCategories.length - 1 && (
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
