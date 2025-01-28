"use client"
import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Footer from '@/components/footer';

export default function Farming() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <Image
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070"
              className="object-cover w-full h-full"
              alt="Farming Operations"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-4">
          <div className="max-w-4xl mx-auto text-center slide-in">
            <h1 className="text-4xl md:text-6xl mb-6">
              Sustainable Farming Practices
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Modern agricultural solutions with traditional farming wisdom
            </p>
            <div className='space-x-2 space-y-2'>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </Button>
              <Button
                size="lg"
                className="bg-transparent hover:bg-white/90 text-white hover:text-black/90 border"
              >
                Partner With Us <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
