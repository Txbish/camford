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
                <span className="text-yellow-500">Camford Tutors</span>
                ,
                <br />
                Where <span className="text-yellow-500">
                  Learning
                </span> Meets{" "}
                <span className="text-yellow-500">Excellence</span>!
              </h1>
              <p className="text-lg text-white/80">
                At Camford Tutors, we are committed to helping students unlock
                their full academic potential through personalised and effective
                tutoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/pricing">
                  <Button size="lg" variant="secondary">
                    Get Started
                  </Button>
                </Link>
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
            <div className="relative h-[300px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/Happy-Man.jpg"
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
                  "Expert one-on-one tutoring for GCSE & A-Level Maths, focused on building confidence and exam success.",
                icon: <BookOpen className="h-6 w-6 text-white" />,
              },
              {
                title: "English - GCSE, A-Level",
                description: "Literature, Writing, Grammar and Comprehension.",
                icon: <BookOpen className="h-6 w-6 text-white" />,
              },
              {
                title: "Science - GCSE, A-Level",
                description: "Biology, Chemistry and Physics.",
                icon: <BookOpen className="h-6 w-6 text-white" />,
              },
              {
                title: "Exam Preparation - GCSE, A-Level",
                description:
                  "Focused and effective exam preparation for GCSE & A-Level to boost performance and confidence.",
                icon: <BookOpen className="h-6 w-6 text-white" />,
              },
              {
                title: "Test Preparation - UCAT",
                description:
                  "Targeted UCAT test preparation to improve speed, strategy, and score.",
                icon: <BookOpen className="h-6 w-6 text-white" />,
              },
              {
                title: "Interview Preparation - Medicine, Dentistry",
                description:
                  "Tailored interview coaching for Medicine and Dentistry to help you stand out with confidence.",
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
    </Layout>
  );
}
