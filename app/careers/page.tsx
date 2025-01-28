import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/footer';

export default function Careers() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <img
              src="/career.jpg"
              alt="Team collaboration"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-4">
          <div className="max-w-4xl mx-auto text-center slide-in">
            <h1 className="text-4xl md:text-6xl mb-6">
              Join Our Growing Team
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Build your career with a leader in agricultural innovation
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Current Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Agricultural Engineer",
                location: "Lagos, Nigeria",
                type: "Full-time",
                description: "Looking for an experienced agricultural engineer to join our innovation team."
              },
              {
                title: "Supply Chain Manager",
                location: "Lagos, Nigeria",
                type: "Full-time",
                description: "Seeking a supply chain professional to optimize our distribution network."
              },
              {
                title: "Quality Control Specialist",
                location: "Lagos, Nigeria",
                type: "Full-time",
                description: "Join our quality assurance team to maintain our high product standards."
              },
              {
                title: "Marketing Coordinator",
                location: "Lagos, Nigeria",
                type: "Full-time",
                description: "Help us share our story and connect with our customers."
              }
            ].map((job, index) => (
              <Card key={index} className="slide-in">
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>
                    {job.location} • {job.type}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <Button variant="outline" className='hover:text-white'>
                    Apply Now <ArrowRight className="ml-2" size={16} />
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
