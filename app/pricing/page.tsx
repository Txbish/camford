"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import PlanSelectionModal from "@/components/plan-selection-modal"

// Define the plan types
interface Feature {
  name: string
  included: boolean
}

interface Plan {
  id: string
  name: string
  description: string
  price: number
  duration: string
  features: Feature[]
  popular?: boolean
  discount?: number
}

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const plans: Plan[] = [
    {
      id: "basic",
      name: "Basic Plan",
      description: "Perfect for students who need occasional help with their studies",
      price: 29.99,
      duration: "per month",
      features: [
        { name: "1 subject tutoring", included: true },
        { name: "4 sessions per month", included: true },
        { name: "Study materials included", included: true },
        { name: "Progress tracking", included: true },
        { name: "Priority support", included: false },
        { name: "Exam preparation", included: false },
      ],
    },
    {
      id: "standard",
      name: "Standard Plan",
      description: "Ideal for students who need regular academic support",
      price: 59.99,
      duration: "per month",
      popular: true,
      features: [
        { name: "2 subjects tutoring", included: true },
        { name: "8 sessions per month", included: true },
        { name: "Study materials included", included: true },
        { name: "Progress tracking", included: true },
        { name: "Priority support", included: true },
        { name: "Exam preparation", included: false },
      ],
    },
    {
      id: "premium",
      name: "Premium Plan",
      description: "Comprehensive support for students aiming for academic excellence",
      price: 99.99,
      duration: "per month",
      features: [
        { name: "Unlimited subjects", included: true },
        { name: "12 sessions per month", included: true },
        { name: "Study materials included", included: true },
        { name: "Progress tracking", included: true },
        { name: "Priority support", included: true },
        { name: "Exam preparation", included: true },
      ],
    },
    {
      id: "family",
      name: "Family Plan",
      description: "Perfect for families with multiple students",
      price: 149.99,
      duration: "per month",
      discount: 15,
      features: [
        { name: "Support for 3 students", included: true },
        { name: "20 sessions per month", included: true },
        { name: "Study materials included", included: true },
        { name: "Progress tracking", included: true },
        { name: "Priority support", included: true },
        { name: "Exam preparation", included: true },
      ],
    },
  ]

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan)
    setIsModalOpen(true)
  }

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">Pricing Plans</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect tutoring plan for your educational needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card key={plan.id} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription className="mt-1.5">{plan.description}</CardDescription>
                  </div>
                  {plan.popular && <Badge className="bg-primary">Popular</Badge>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-baseline text-2xl font-semibold">
                  ${plan.price}
                  <span className="ml-1 text-sm font-normal text-muted-foreground">{plan.duration}</span>
                </div>
                {plan.discount && (
                  <Badge variant="outline" className="mt-2 text-green-600 border-green-600">
                    Save {plan.discount}%
                  </Badge>
                )}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check
                        className={`mr-2 h-5 w-5 flex-shrink-0 ${feature.included ? "text-green-500" : "text-muted-foreground"}`}
                        aria-hidden="true"
                      />
                      <span className={feature.included ? "" : "text-muted-foreground line-through"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleSelectPlan(plan)}
                >
                  Select Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-3xl bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Student Referral Scheme</h2>
          <p className="mb-6">Get up to 15% off the hourly rate for each student you refer to Camford Tutors</p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
              <span>5% off the hourly rate for next 10 lessons when referring 1 student</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
              <span>10% off the hourly rate for next 10 lessons when referring 2 students</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
              <span>15% off the hourly rate for next 10 lessons when referring 3 or more students</span>
            </li>
          </ul>

          <p className="mt-6 text-muted-foreground">Please contact us directly when referring another student</p>
        </div>
      </div>

      {selectedPlan && (
        <PlanSelectionModal plan={selectedPlan} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </Layout>
  )
}

