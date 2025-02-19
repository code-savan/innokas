/* eslint-disable react/no-unescaped-entities */
"use client"
import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Snowflake, Apple, Truck, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Footer from '@/components/footer';
import PaymentWarning from '@/components/PaymentWarning';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

export default function Home() {
  const carouselSlides = [
    {
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074",
      title: "Your trusted partner for high-quality fruits, frozen foods, and agricultural products",
      description: "Delivering excellence in agricultural products across Nigeria and beyond",
    },
    {
      image: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Premium Quality Frozen Foods",
      description: "From farm-fresh vegetables to premium fish, maintaining nutritional value and taste",
    },
    {
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070",
      title: "Fresh, Natural, and Delicious Fruits",
      description: "Experience the sweetness of nature with our carefully selected fresh fruits",
    },
    {
      image: "/logistics.jpeg",
      title: "Efficient and Reliable Logistics Solutions",
      description: "Seamless transportation and storage solutions for your agricultural products",
    }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      {/* <p>Pay Your balance innokas</p> */}
      {/* <PaymentWarning /> */}


      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="min-w-full h-full overflow-hidden"
        >
          <CarouselContent>
            {carouselSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative h-screen">
                <div className="absolute inset-0">
                  <div className="relative h-full">
                    <Image
                      src={slide.image}
                      alt={`Slide ${index + 1}`}
                      className="object-cover w-full h-full"
                      fill
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50" />
                  </div>
                </div>

                <div className="relative h-full flex items-center justify-center text-white px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl mb-6 animate-fade-up">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-up">
                      {slide.description}
                    </p>
                    <div className='md:space-x-2 space-y-2 animate-fade-up'>
                        <Link href={"/products/fruits"}>
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white mb-2 md:mb-0"
                      >
                        Explore Our Products <ArrowRight className="ml-2" size={16} />
                      </Button>
                        </Link>
                        <Link href={"/contact"}>

                      <Button
                        size="lg"
                        className="bg-transparent hover:bg-white/90 text-white hover:text-black/90 border w-[260px] md:w-fit"
                        >
                        Reach Out <ArrowRight className="ml-2" size={16} />
                      </Button>
                          </Link>
                    </div>
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

      {/* Who We Are Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in">
            <h2 className="text-3xl md:text-4xl mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Innokas Nigeria Limited, we pride ourselves on being a leading provider of premium agricultural products.
              With years of experience in the industry, we've built a reputation for excellence in delivering high-quality
              fruits, frozen foods, and agricultural solutions to our valued customers.
            </p>
            <Link href={"/about"}>
            <Button variant="outline" className="group hover:text-white">
              Learn More About Us
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            </Link>
          </div>
          <div className="relative h-[400px] slide-in">
            <Image
              src="/about.jpeg"
              alt="Warehouse operations"
              className="rounded-lg object-cover w-full h-full"
              fill
            />
          </div>
        </div>
      </section>

      {/* Product Lines Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Our Product Lines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Frozen Food",
                icon: <Snowflake className="h-8 w-8 text-primary" />,
                description: "Premium quality frozen meats, seafood, and ready-to-cook products.",
                route: "/products/frozen-foods"
              },
              {
                title: "Fresh Fruits",
                icon: <Apple className="h-8 w-8 text-primary" />,
                description: "Locally sourced and imported fresh fruits for wholesale and retail.",
                route: "/products/fruits"
              },
              {
                title: "Innokas Rice",
                icon: <Leaf className="h-8 w-8 text-primary" />,
                description: "Premium quality rice for all your needs",
                route: "/products/farming"
              },
              {
                title: "Logistics",
                icon: <Truck className="h-8 w-8 text-primary" />,
                description: "Efficient distribution and cold chain logistics services.",
                route: "/products/logistics"
              }
            ].map((product, index) => (
              <Card key={index} className="slide-in">
                <CardHeader>
                  <div className="mb-4">{product.icon}</div>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{product.description}</CardDescription>
                  <Link href={product.route}>
                  <Button variant="link" className="mt-4 p-0">
                    Learn More <ChevronRight className="ml-1" size={16} />
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Team collaboration"
            className="object-cover w-full h-full"
            fill
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl text-white mb-6">Join Our Team</h2>
            <p className="text-lg text-gray-200 mb-8">
              We're always looking for talented individuals who share our passion for excellence
              and innovation in the agricultural sector.
            </p>
            <Link href={"/careers"}>
            <Button className="bg-white text-primary hover:bg-gray-100">
              Explore Careers <ArrowRight className="ml-2" size={16} />
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News and Blog Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Latest News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expanding Our Cold Chain Network",
                image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Learn about our latest investments in cold chain infrastructure."
              },
              {
                title: "Sustainable Farming Practices",
                image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Discover how we're promoting sustainable agriculture."
              },
              {
                title: "New Product Launch",
                image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                description: "Introducing our new line of premium frozen products."
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden slide-in">
                <div className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>

                  <Button variant="link" className="p-0">
                    Read More <ChevronRight className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
          <Link href={"/blog"}>
            <Button variant="outline" className='hover:text-white'>
              View All Posts <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-in">
              <h2 className="text-3xl md:text-4xl mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our products or services? We'd love to hear from you.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input type="text" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input type="text" className="w-full p-2 border rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows={4} className="w-full p-2 border rounded-md"></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
            <div className="slide-in">
              <div className="h-full min-h-[400px] bg-gray-200 rounded-lg">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-300 rounded-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.376110190765!2d3.353950075240568!3d6.473952993517849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b38f04ee0d5%3A0x576c2f0f7d681747!2sSaka%20Alao!5e0!3m2!1sen!2sng!4v1736853464156!5m2!1sen!2sng"
                      className='w-full h-full'
                      style={{border:0}}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                  </div>
                </div>
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
