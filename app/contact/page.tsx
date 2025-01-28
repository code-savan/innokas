import Navigation from '@/components/ui/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import Footer from '@/components/footer';

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <div className="relative h-full">
            <img
              src="/contact.jpg"
              alt="Contact us"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-4">
          <div className="max-w-4xl mx-auto text-center slide-in">
            <h1 className="text-4xl md:text-6xl mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              We're here to answer any questions you may have
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center slide-in">
              <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600"><span>
            <a href="tel:+2348089149601">+2348089149601</a>, <a href="tel:+2348123047312">+2348123047312</a>
            </span></p>
            </Card>
            <Card className="p-6 text-center slide-in">
              <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">info@innokas.com</p>
            </Card>
            <Card className="p-6 text-center slide-in">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-600">16, Cause Way Road, Saka Alao Street, Ijora 7up, Lagos State.</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="slide-in">
              <h2 className="text-3xl mb-6">Send Us a Message</h2>
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
                {/* Map will be embedded here */}
                <div className="w-full h-full rounded-lg overflow-hidden">
                <div className="w-full h-full  bg-gray-300 rounded-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.376110190765!2d3.353950075240568!3d6.473952993517849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b38f04ee0d5%3A0x576c2f0f7d681747!2sSaka%20Alao!5e0!3m2!1sen!2sng!4v1736853464156!5m2!1sen!2sng" className='w-full h-full'  style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
