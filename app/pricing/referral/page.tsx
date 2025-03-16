import Layout from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"

export default function ReferralPage() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-2">Student Referral Scheme</h1>
          <div className="h-1 w-24 bg-primary/20 rounded mb-8"></div>

          <Card className="shadow-md">
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Get up to 15% off the hourly rate for each student you refer to Camford Tutors
                </h2>
                <ul className="space-y-4">
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
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-muted-foreground">Please contact us directly when referring another student</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

