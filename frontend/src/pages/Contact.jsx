import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      value: "contact@financeai.com",
      description: "We typically respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Mon-Fri, 9 AM to 6 PM IST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Mumbai, Maharashtra 400001",
      description: "Our main office location",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50">

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
              <p className="text-gray-600 text-lg">
                Have a question or feedback? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-5">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border-gray-200 text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                      <method.icon className="h-6 w-6 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                    <div className="text-gray-900 font-medium mb-1">{method.value}</div>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form & Map */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Form */}
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="name">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="border-gray-600 p-1 text-gray-800 "
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="border-gray-600 p-1 text-gray-800"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="subject">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can we help?"
                        className="border-gray-600 p-1 text-gray-800"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2" htmlFor="message">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        className="border-gray-600 p-1 text-gray-800"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709658!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Link */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking for Answers?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Check out our frequently asked questions for quick answers.
            </p>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              View FAQ
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
