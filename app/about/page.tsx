import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import Footer from '@/components/footer';
import TeamCard from "@/components/TeamCard"
import FeatureCard from "@/components/FeatureCard"
import { ArrowRight, Award, ShieldCheck, PiggyBank, Truck, Headphones, Star } from "lucide-react"

export default function About() {
    const teamMembers = [
        { name: "John Doe", role: "CEO", image: "/2.jpg" },
        { name: "Jane Smith", role: "COO", image: "/1.jpg" },
        { name: "Mike Johnson", role: "Head of Research", image: "/3.jpg" },
        { name: "Sarah Brown", role: "Marketing Director", image: "/4.jpg" },
      ]

      const features = [
        {
          title: "High-quality products",
          description: "We ensure that all our products meet the highest standards of quality.",
          Icon: Award,
        },
        {
          title: "Hygiene and freshness",
          description: "Our products are handled with utmost care to maintain hygiene and freshness.",
          Icon: ShieldCheck,
        },
        {
          title: "Competitive prices",
          description: "We offer fair and competitive prices without compromising on quality.",
          Icon: PiggyBank,
        },
        {
          title: "Strong distribution network",
          description: "Our efficient distribution network ensures timely delivery across Nigeria.",
          Icon: Truck,
        },
        {
          title: "Excellent customer service",
          description: "We prioritize customer satisfaction with our dedicated support team.",
          Icon: Headphones,
        },
      ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <img
              src="/abouthero.jpg"
              alt="Agricultural landscape"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-4">
          <div className="max-w-4xl mx-auto text-center slide-in">
            <h1 className="text-4xl md:text-6xl mb-6">
              Our Journey in Agricultural Excellence
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Building a sustainable future through innovation and dedication
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-in">
              <h2 className="text-3xl mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To revolutionize Nigeria's agricultural sector by providing high-quality products
                and innovative solutions that enhance food security and economic growth while
                maintaining the highest standards of sustainability and customer satisfaction.
              </p>
            </div>
            <div className="slide-in">
              <h2 className="text-3xl mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-8">
                To be the leading agricultural solutions provider in Africa, recognized for our
                commitment to quality, innovation, and sustainable practices that benefit our
                customers, communities, and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

       {/* Our Team */}
       <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from product quality to customer service."
              },
              {
                title: "Innovation",
                description: "We embrace new technologies and methods to improve our services and products."
              },
              {
                title: "Sustainability",
                description: "We are committed to environmentally responsible practices in all our operations."
              },
              {
                title: "Integrity",
                description: "We conduct our business with the highest standards of honesty and transparency."
              },
              {
                title: "Community",
                description: "We invest in our communities and contribute to their development and growth."
              },
              {
                title: "Partnership",
                description: "We build strong, lasting relationships with our stakeholders and partners."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm slide-in">
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


       {/* Why Choose Us */}
       <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>



       {/* Footer */}
       <Footer />
    </main>
  );
}
