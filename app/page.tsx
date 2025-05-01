import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Quote, MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* --- FULL-HEIGHT HERO --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-white"></div>
          <Image 
            src="/construction-hero.jpg" 
            alt="Construction site"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <div className="max-w-1xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="text-blue-600">VPower</span> Construction and Trading Inc.
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-medium">
              Engineers, Architects, Designers and Builders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                Get Free Estimate
              </Button>
              <Button
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
              >
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <span className="inline-block px-5 py-2.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium tracking-wider">
              OUR ADVANTAGE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">
              Nationwide Construction Excellence
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="text-center p-10 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 transition-all"
              >
                <div className="bg-blue-50 p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR SERVICES --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <span className="inline-block px-5 py-2.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium tracking-wider">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">
              Comprehensive Building Solutions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all h-full"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image 
                    src={`/service-${service.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-0">
                  <CardTitle className="text-2xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 pb-8">
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR PROJECTS --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-6">
            <div className="text-center md:text-left">
              <span className="inline-block px-5 py-2.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium tracking-wider mb-4">
                OUR WORK
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-blue-600 mt-6 md:mx-0 mx-auto"></div>
            </div>
            <Button
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-100 px-8 py-6 text-lg rounded-full"
            >
              View All Projects
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group overflow-hidden">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-gray-200 mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="px-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-600">{project.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <span className="inline-block px-5 py-2.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium tracking-wider">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">
              Building Trust Nationwide
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
              VPCTI is not limited in its geographical services; we serve clients throughout the Philippines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative p-10 bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all"
              >
                <Quote className="absolute top-8 left-8 w-8 h-8 text-blue-200" />
                <div className="pl-12">
                  <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mr-4 font-medium text-blue-800 text-lg">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & LOCATION --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-10">
                <span className="inline-block px-5 py-2.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium tracking-wider mb-4">
                  CONTACT US
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <div className="w-24 h-1 bg-blue-600"></div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Our Address</h3>
                    <p className="text-gray-600">
                      Block 17 Lot 26 Dama De Noche Street,<br />
                      Pk. 4 Brgy. Sta. Ana, Taytay,<br />
                      Rizal 1920, Philippines
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      <a href="mailto:vpowerconstruction12@gmail.com" className="hover:text-blue-600 transition-colors">
                        vpowerconstruction12@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600 space-y-1">
                      <span className="block">895-0883</span>
                      <span className="block">(0949) 8800368</span>
                      <span className="block">(0926) 7028672</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden">
              {/* Replace with your actual map component or iframe */}
              <div className="h-full w-full flex items-center justify-center text-gray-500">
                <p>Map Location Will Appear Here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact VPower Construction today for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Get Free Estimate
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10 px-10 py-6 text-lg rounded-full"
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data arrays
const benefits = [
  {
    title: "Nationwide Service",
    description: "We serve clients throughout the Philippines with consistent quality and standards",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Integrated Services",
    description: "Complete solutions from design to construction with our team of engineers and architects",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Commitment to Quality",
    description: "Uncompromising standards in every project with meticulous attention to detail",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "Architectural Design",
    items: [
      "Custom home designs",
      "Commercial building plans",
      "Space planning",
      "3D renderings"
    ],
  },
  {
    title: "Construction Services",
    items: [
      "Residential buildings",
      "Commercial structures",
      "Interior build-outs",
      "Project management"
    ],
  },
  {
    title: "Engineering Solutions",
    items: [
      "Structural engineering",
      "Electrical systems",
      "Plumbing design",
      "Construction supervision"
    ],
  },
];

const testimonials = [
  {
    name: "Roberto Santos",
    company: "Santos Development Corp",
    initials: "RS",
    quote: "VPower Construction delivered our mixed-use development project on time and within budget. Their team's coordination between design and construction was impressive.",
  },
  {
    name: "Maria Gonzales",
    company: "Gonzales Residence",
    initials: "MG",
    quote: "From design to completion, VPower made our dream home a reality. Their attention to detail and quality craftsmanship exceeded our expectations.",
  },
  {
    name: "James Lim",
    company: "Lim Commercial Properties",
    initials: "JL",
    quote: "We've worked with VPower on three projects now. Their nationwide capability means we get consistent quality across all our locations.",
  },
];

const projects = [
  {
    title: "Taytay Residential Complex",
    type: "Residential Development",
    image: "/images/project-1.jpg",
  },
  {
    title: "Ortigas Office Tower",
    type: "Commercial Construction",
    image: "/images/project-2.jpg",
  },
  {
    title: "Rizal Provincial Hospital",
    type: "Institutional Project",
    image: "/images/project-3.jpg",
  },
];