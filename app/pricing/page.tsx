"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import PlanSelectionModal from "@/components/plan-selection-modal";

interface PricingCardProps {
  unit: string;
  title: string;
  description: string;
  features: { label: string; price?: string }[];
  buttonText: string;
}

const plans: PricingCardProps[] = [
  {
    unit: "/hour",
    title: "GCSE All Subjects",
    description:
      "Comprehensive tutoring for all GCSE subjects, tailored to each student's unique learning style. Improve your grades with focused 1-to-1 or group sessions.",
    features: [
      { label: "Online 1-to-1", price: "£30/hr" },
      { label: "Block bookings of 10 or more lessons", price: "£25/hr" },
      { label: "Group Session", price: "£20/hr" },
    ],
    buttonText: "Choose plan",
  },
  {
    unit: "/hour",
    title: "A-Level All Subjects",
    description:
      "Expert guidance for A-Level subjects to excel in exams and coursework. Get personalised support with 1-to-1 classes or learn together in group sessions.",
    features: [
      { label: "Online 1-to-1 Class", price: "£35/hr" },
      { label: "Block bookings of 10 or more lessons", price: "£30/hr" },
      { label: "Group Session", price: "£20/hr" },
    ],
    buttonText: "Choose plan",
  },
  {
    unit: "/hour",
    title: "UCAT",
    description:
      "Ace your UCAT with our expert-led preparation sessions. Master problem-solving, critical thinking, and other essential skills through targeted guidance.",
    features: [
      { label: "Online 1-to-1", price: "£40/hr" },
      { label: "Block bookings of 10 or more lessons", price: "£35/hr" },
    ],
    buttonText: "Choose plan",
  },
  {
    unit: "/hour",
    title: "Interview for Medical Universities",
    description:
      "Prepare for medical university interviews with mock sessions and expert feedback. Build confidence and showcase your skills with tailored interview coaching.",
    features: [
      { label: "Online 1-to-1 Class", price: "£45/hr" },
      { label: "Block bookings of 10 or more lessons", price: "£40/hr" },
    ],
    buttonText: "Choose plan",
  },
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<PricingCardProps | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: PricingCardProps) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Pricing Plans
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect tutoring plan for your educational needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.title}
              className="flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl hover:border-primary rounded-2xl border border-gray-200 shadow-lg"
            >
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-t-2xl text-white h-40">
                <CardTitle className="text-xl font-semibold">
                  {plan.title}
                </CardTitle>
                <p className="text-sm text-gray-100 mt-1">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex-grow p-6 bg-white rounded-b-2xl flex flex-col justify-between">
                <div className="mt-4 space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check
                        className="mr-2 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-gray-700">
                        {feature.label} {feature.price && `- ${feature.price}`}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button aligned at the bottom */}
                <Button
                  className="w-full mt-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  onClick={() => handleSelectPlan(plan)}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-3xl bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Student Referral Scheme</h2>
          <p className="mb-6">
            Get up to 15% off the hourly rate for each student you refer to
            Camford Tutors
          </p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
              <span>
                5% off the hourly rate for next 10 lessons when referring 1
                student
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
              <span>
                10% off the hourly rate for next 10 lessons when referring 2
                students
              </span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
              <span>
                15% off the hourly rate for next 10 lessons when referring 3 or
                more students
              </span>
            </li>
          </ul>

          <p className="mt-6 text-muted-foreground">
            Please contact us directly when referring another student
          </p>
        </div>
      </div>

      {selectedPlan && (
        <PlanSelectionModal
          plan={selectedPlan}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </Layout>
  );
}
