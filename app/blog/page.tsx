import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/footer';

export default function Blog() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <img
              src="/blog.jpg"
              alt="Agricultural innovation"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-4">
          <div className="max-w-4xl mx-auto text-center slide-in">
            <h1 className="text-4xl md:text-6xl mb-6">
              Latest News & Insights
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Stay updated with the latest developments in agriculture
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of Cold Chain Logistics",
                image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                date: "April 15, 2024",
                description: "Exploring innovative solutions in cold chain management."
              },
              {
                title: "Sustainable Farming Practices",
                image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                date: "April 10, 2024",
                description: "How we're promoting environmentally responsible agriculture."
              },
              {
                title: "Innovation in Agriculture",
                image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
                date: "April 5, 2024",
                description: "New technologies shaping the future of farming."
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden slide-in">
                <div className="h-48 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
