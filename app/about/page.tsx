import Image from "next/image";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Target,
  Award,
  Lightbulb,
  GraduationCap,
  Link,
} from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-primary text-white">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                About{" "}
                <span className="text-secondary-foreground">
                  Camford Tutors
                </span>
              </h1>
              <p className="text-lg text-white/90">
                At Camford Tutors, we are committed to helping students reach
                their full academic potential through personalized and effective
                tutoring. Whether you need assistance with specific school
                subjects, preparing for exams, or working on specific learning
                goals, we provide tailored tuition services that ensure your
                success. Our mission is to build students' confidence and
                knowledge while making learning engaging and rewarding.
              </p>
              <div>
                <Button size="lg" variant="secondary">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Tutor helping a student with coursework"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">Our Features</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Interactive learning workspace visualization"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold">
                Manage everything in one workspace
              </h3>
              <p className="text-lg text-muted-foreground">
                Planning, tracking and delivering your team's best work has
                never been easier. An integrated workspace that's simple to use.
                TeamFlow lets you spend less time managing your work and more
                time actually doing it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Camford Tutors started with a vision to provide high-quality
                tuition to students of all ages and academic levels. Our
                founders, a group of passionate educators from top universities
                including Cambridge and Oxford, recognized the need for
                accessible, individualized learning experiences. Over the years,
                we've helped students improve their grades, master new skills,
                and reach their academic goals.
              </p>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Professional tutor with digital learning tools"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Attention Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex items-center justify-center">
              <div className="relative h-[280px] w-[280px] md:h-[320px] md:w-[320px] rounded-full overflow-hidden border-8 border-slate-100 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="One-on-one tutoring session with focused attention"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 320px"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Personalized Attention</h2>
              <p className="text-lg text-primary font-medium">
                One-on-one tutoring tailored to individual needs.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that every student deserves personalized attention to
                address their specific learning needs. Our one-on-one tutoring
                approach ensures that each student receives customized
                instruction that targets their unique challenges and builds on
                their strengths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Our Philosophy</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                At Camford Tutors, we believe that every student is unique, and
                so are their learning needs. That's why we focus on creating
                customized learning plans for each student, designed to meet
                their specific challenges and goals. We understand that the
                conventional classroom approach doesn't work for everyone, so we
                take a more personalized approach, and our dedicated tutors work
                closely with students to foster a deeper understanding of the
                subject matter.
              </p>

              <div className="space-y-4 mt-8">
                <h3 className="text-xl font-bold">We emphasize:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-5 w-5 text-primary">
                      <Target className="h-5 w-5" />
                    </div>
                    <span>
                      <strong>Personalized Attention:</strong> One-on-one
                      tutoring tailored to individual needs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-5 w-5 text-primary">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <span>
                      <strong>Expert Tutors:</strong> A team of experienced,
                      qualified, and passionate educators.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 h-5 w-5 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <span>
                      <strong>Growth and Confidence:</strong> Encouraging
                      students to embrace challenges and celebrate their
                      progress.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-primary/5 border-none shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Focus</h3>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Schedule</h3>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Learn</h3>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-none shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Time</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Tutors Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Professional tutor explaining concepts with digital tablet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Expert Tutors</h2>
              <p className="text-xl text-white/90">
                A team of experienced, qualified, and passionate educators.
              </p>
              <p className="text-lg text-white/80">
                Our tutors are selected through a rigorous process that
                evaluates their academic credentials, teaching experience, and
                communication skills. We only work with tutors who demonstrate
                exceptional knowledge in their subject areas and a genuine
                passion for teaching.
              </p>
              <Button asChild variant="secondary">
                <a href="/tutors">Meet our Tutors</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Learning Environment
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Modern classroom setting with digital learning tools"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating on a project"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Online tutoring session in progress"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Student celebrating academic achievement"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to Excel in Your Studies?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join Camford Tutors today and experience the difference that
              personalized, expert tutoring can make in your academic journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
