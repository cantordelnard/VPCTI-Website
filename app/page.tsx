import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Quote, MapPin, Mail, Phone, Link } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* --- FULL-HEIGHT HERO --- */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-white/90"></div>
          <Image
            src="/construction-hero.jpg"
            alt="Construction professionals at work"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto text-center px-4">
            <div className="mb-4 md:mb-6">
              <span className="inline-block px-3 py-1 md:px-5 md:py-2 bg-blue-600 text-white rounded-full text-xs md:text-sm font-medium tracking-wider mb-2">
                ENGINEERS • ARCHITECTS • DESIGNERS • BUILDERS
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              <span className="text-blue-600">VPower</span> Construction and Trading Inc.
            </h1>
            <p className="text-sm md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 md:mb-24 px-4">
              Nationwide service with precision, power, and craftsmanship that
              defines the standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Get Free Estimate
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:border-white hover:text-white px-6 py-4 sm:px-8 sm:py-5 text-base sm:text-lg rounded-full transition-colors duration-300"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block px-4 py-1 md:px-5 md:py-2 bg-blue-600 text-white rounded-full text-xs md:text-sm font-medium tracking-wider mb-4 md:mb-6">
              OUR ADVANTAGE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Why Clients Choose VPower
            </h2>
            <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto mb-8 md:mb-10"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              Delivering exceptional results through innovative solutions and
              proven expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative p-6 md:p-8 lg:p-10 bg-white rounded-xl md:rounded-2xl border border-gray-100 hover:border-blue-200 transition-all hover:-translate-y-1 md:hover:-translate-y-2 shadow-sm hover:shadow-md md:hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-xl md:rounded-t-2xl"></div>
                <div className="bg-blue-50/50 p-3 md:p-4 rounded-full w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-blue-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR SERVICES --- */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block px-4 py-1 md:px-5 md:py-2 bg-blue-600 text-white rounded-full text-xs md:text-sm font-medium tracking-wider mb-4 md:mb-6">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Comprehensive Building Solutions
            </h2>
            <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto mb-8 md:mb-10"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4">
              From concept to completion, we handle every aspect of your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-md md:hover:shadow-lg transition-all hover:-translate-y-1 md:hover:-translate-y-2 h-full"
              >
                <div className="aspect-video relative overflow-hidden bg-gray-200">
                  <Image
                    src={service.image || "/service-default.jpg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <CardHeader className="pb-0 px-4 pt-4 md:px-6 md:pt-6">
                  <CardTitle className="text-xl md:text-2xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 pb-6 px-4 md:pt-6 md:pb-8 md:px-6">
                  <ul className="space-y-3 md:space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-600 mt-0.5 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="text-sm md:text-base text-gray-700">
                          {item}
                        </span>
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 md:mb-20 gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-1 md:px-5 md:py-2 bg-blue-600 text-white rounded-full text-xs md:text-sm font-medium tracking-wider mb-4 md:mb-6">
                OUR WORK
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Featured Projects
              </h2>
              <div className="w-20 md:w-24 h-1 bg-blue-600 mt-4 md:mt-6 md:mx-0 mx-auto"></div>
            </div>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-500 hover:text-white hover:border-white px-6 py-4 md:px-8 md:py-5 text-base md:text-lg rounded-full"
            >
              View All Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group overflow-hidden">
                <div className="aspect-[4/3] relative rounded-lg md:rounded-xl overflow-hidden bg-gray-200 mb-4 md:mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="px-1 md:px-2">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-blue-600">
                    {project.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block px-4 py-1 md:px-5 md:py-2 bg-blue-600 text-white rounded-full text-xs md:text-sm font-medium tracking-wider">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 md:mt-6 mb-4 md:mb-6">
              Trusted By Industry Leaders
            </h2>
            <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto mb-8 md:mb-10"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Serving clients throughout the Philippines with consistent quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative p-6 md:p-8 lg:p-10 bg-white rounded-xl md:rounded-2xl border border-gray-200 hover:border-blue-200 transition-all hover:-translate-y-1 md:hover:-translate-y-2 shadow-sm hover:shadow-md md:hover:shadow-lg"
              >
                <Quote className="absolute top-6 left-6 w-6 h-6 md:top-8 md:left-8 md:w-8 md:h-8 text-blue-200" />
                <div className="pl-10 md:pl-12">
                  <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mr-3 md:mr-4 font-medium text-white text-sm md:text-base">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base md:text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT & LOCATION --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="mb-8 md:mb-10">
                <span className="inline-block px-4 py-1 md:px-5 md:py-2 bg-blue-600 text-white rounded-full text-xs md:text-sm font-medium tracking-wider mb-4 md:mb-6">
                  CONTACT US
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                  Let's Build Together
                </h2>
                <div className="w-20 md:w-24 h-1 bg-blue-600 mb-8 md:mb-10"></div>
                <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                  Reach out to discuss your project requirements with our team!
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                      Our Address
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      B17 L26 Dama De Noche Street,
                      <br />
                      Pk. 4 Brgy. Sta. Ana, Taytay,
                      <br />
                      Rizal 1920, Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                      Email Us
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      <a
                        href="mailto:vpowerconstruction12@gmail.com"
                        className="hover:text-blue-600 transition-colors"
                      >
                        vpowerconstruction12@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 md:p-3 rounded-full mr-3 md:mr-4">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                      Call Us
                    </h3>
                    <div className="text-sm md:text-base text-gray-600 space-y-1 md:space-y-2">
                      <span className="block">895-0883</span>
                      <span className="block">(0949) 8800368</span>
                      <span className="block">(0926) 7028672</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[300px] md:min-h-[500px] bg-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-lg mt-8 md:mt-0">
              {/* Replace with your actual map component or iframe */}
              <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                <div className="text-center p-6 md:p-8">
                  <div className="bg-blue-100 p-3 md:p-4 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <MapPin className="w-5 h-5 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                    Our Location
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Taytay, Rizal, Philippines
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us today for a free consultation and project estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-white hover:text-blue-800 px-8 py-5 md:px-10 md:py-6 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Get Free Estimate
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-800 px-8 py-5 md:px-10 md:py-6 text-base md:text-lg rounded-full"
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data arrays remain the same as previous example

// Data arrays
const benefits = [
  {
    title: "Nationwide Service",
    description:
      "We serve clients throughout the Philippines with consistent quality and standards",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    title: "Integrated Services",
    description:
      "Complete solutions from design to construction with our team of engineers and architects",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Commitment to Quality",
    description:
      "Uncompromising standards in every project with meticulous attention to detail",
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
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
      "3D renderings",
    ],
    image: "/construction-hero.jpg",
  },
  {
    title: "Construction Services",
    items: [
      "Residential buildings",
      "Commercial structures",
      "Interior build-outs",
      "Project management",
    ],
    image: "/construction-hero.jpg",
  },
  {
    title: "Engineering Solutions",
    items: [
      "Structural engineering",
      "Electrical systems",
      "Plumbing design",
      "Construction supervision",
    ],
    image: "/construction-hero.jpg",
  },
];

const testimonials = [
  {
    name: "Roberto Santos",
    company: "Santos Development Corp",
    initials: "RS",
    quote:
      "VPower Construction delivered our mixed-use development project on time and within budget. Their team's coordination between design and construction was impressive.",
  },
  {
    name: "Maria Gonzales",
    company: "Gonzales Residence",
    initials: "MG",
    quote:
      "From design to completion, VPower made our dream home a reality. Their attention to detail and quality craftsmanship exceeded our expectations.",
  },
  {
    name: "James Lim",
    company: "Lim Commercial Properties",
    initials: "JL",
    quote:
      "We've worked with VPower on three projects now. Their nationwide capability means we get consistent quality across all our locations.",
  },
];

const projects = [
  {
    title: "Taytay Residential Complex",
    type: "Residential Development",
    image: "/projects.jpg",
  },
  {
    title: "Ortigas Office Tower",
    type: "Commercial Construction",
    image: "/projects.jpg",
  },
  {
    title: "Rizal Provincial Hospital",
    type: "Institutional Project",
    image: "/projects.jpg",
  },
];