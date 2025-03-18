import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Award, Users } from "lucide-react";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-600 text-white">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Welcome To{" "}
                <span className="text-secondary-foreground">
                  Camford Tutors
                </span>
                ,
                <br />
                Where{" "}
                <span className="text-secondary-foreground">Learning</span>{" "}
                Meets{" "}
                <span className="text-secondary-foreground">Excellence</span>!
              </h1>
              <p className="text-lg text-white/80">
                At Camford Tutors, we are committed to helping students unlock
                their full academic potential through personalized and effective
                tutoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  Get free trial
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Public Speaking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Career-Oriented</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">Creative Thinking</span>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/Homepage.webp"
                alt="Tutor with laptop"
                fill
                className="object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Maths - GCSE, A-Level",
                description:
                  "Lessons on design that cover the most recent developments.",
                icon: <BookOpen className="h-6 w-6 text-white" />,
              },
              {
                title: "English - GCSE, A-Level",
                description:
                  "Classes in development that cover the most recent advancements in web.",
                icon: <BookOpen className="h-6 w-6 text-white" />,
              },
              {
                title: "Science - GCSE, A-Level",
                description:
                  "User Interface Design courses that cover the most recent trends.",
                icon: <BookOpen className="h-6 w-6 text-white" />,
              },
              {
                title: "Exam Preparation - GCSE",
                description:
                  "Lessons on design that cover the most recent developments.",
                icon: <BookOpen className="h-6 w-6 text-white" />,
              },
              {
                title: "Test Preparation - GCSE",
                description:
                  "Classes in development that cover the most recent advancements in web.",
                icon: <BookOpen className="h-6 w-6 text-white" />,
              },
              {
                title: "Interview Preparation - Medicine, Dentistry",
                description:
                  "User Interface Design courses that cover the most recent trends.",
                icon: <BookOpen className="h-6 w-6 text-white" />,
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="#"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Camford Tutors
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Experienced Tutors",
                description:
                  "Our team consists of experienced educators from prestigious universities with in-depth knowledge of their subjects and a passion for teaching.",
                image: "/experiencedTutors.webp",
              },
              {
                title: "Flexible Scheduling",
                description: "We offer online sessions to fit your schedule.",
                image: "/flexibleScheduling.webp",
              },
              {
                title: "Proven Track Record",
                description:
                  "Our tutors have helped students achieve significant improvements in their academic performance.",
                image: "/trackRecord.webp",
              },
              {
                title: "Supportive Environment",
                description:
                  "We foster a nurturing space where students feel motivated and confident to learn.",
                image: "/supportiveEnvironment.webp",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="relative h-40 w-40 mx-auto mb-4">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover mix-blend-multiply rounded-xl"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Testimonials
          </h2>

          <div className="relative h-[400px] w-auto mx-auto">
            <Image
              src="/mapTestimonial.svg"
              alt="World map with testimonials"
              fill
              className="object-contain"
            />
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg max-w-[350px]">
              <div className="text-center font-semibold">Rocky Dixon</div>
              <p className="text-sm text-center text-muted-foreground">
                "The features on monday.com make our team work faster and easier
                to organize"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our recent blogs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Three Pillars of User Delight",
                date: "November 15, 2014",
                excerpt:
                  "Delight can be experienced viscerally, behaviorally, and reflectively. A great design is...",
                image: "/ThreePillars.svg",
                tags: ["Research", "UI UX"],
              },
              {
                title: "UX Mapping Methods",
                date: "September 24, 2017",
                excerpt:
                  "Visual-design principles can be applied consistently throughout the process of creating a product UX map...",
                image: "/ui.svg",
                tags: ["Research", "UI Design"],
              },
              {
                title: "Agile Development Projects and Usability",
                date: "March 14, 2014",
                excerpt:
                  "Agile methods aim to overcome usability barriers in traditional development, but pose new threats to user experience quality...",
                image: "/Agile.webp",
                tags: ["Programming", "Research", "Development"],
              },
            ].map((blog, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">
                    {blog.date}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                  <p className="text-muted-foreground mb-4">{blog.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
