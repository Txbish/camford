import Image from "next/image";
import Layout from "@/components/layout";
import { Card } from "@/components/ui/card";

export default function TutorsPage() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <h1 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12">
          Our Tutors
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[400px] w-full">
            <Image
              src="/tutors-landscape.jpeg"
              alt="Landscape"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg">
              At Camford Tutors, we take great pride in the quality of our
              tutors. Each one is carefully selected through a rigorous
              recruitment process to ensure they meet our high standards of
              expertise and teaching excellence. We believe in building strong
              relationships between our tutors and students, creating a
              supportive and motivating learning environment. With our tutors,
              students not only gain academic knowledge but also the confidence
              and skills necessary to excel in their studies.
            </p>
          </div>
        </div>

        {/* <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Meet With Our Mentors
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            we take great pride in the quality of our tutors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Maria",
                role: "Application Support Analyst Lead",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Courtney Henry",
                role: "Director, Undergraduate Analytics and Planning",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Albert Flores",
                role: "Career Educator",
                image: "/placeholder.svg?height=150&width=150",
              },
              {
                name: "Marvin McKinney",
                role: "Co-op & Internships Program & Operations Manager",
                image: "/placeholder.svg?height=150&width=150",
              },
            ].map((tutor, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-primary text-white"
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={tutor.image || "/placeholder.svg"}
                      alt={tutor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{tutor.name}</h3>
                  <p className="text-sm text-white/80">{tutor.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </Layout>
  );
}
