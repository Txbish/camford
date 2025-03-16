import Layout from "@/components/layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">FAQ's</h1>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="general">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="general">General Information</TabsTrigger>
              <TabsTrigger value="services">Services & Pricing</TabsTrigger>
              <TabsTrigger value="scheduling">Scheduling & Availability</TabsTrigger>
              <TabsTrigger value="payment">Payment & Refunds</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    What subjects do you offer tuition for?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer tuition for a wide range of subjects, including English, Mathematics, Biology, Chemistry
                    and Physics. We cater to mainly GCSE and A-Level students.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Do you provide tuition for all grade levels?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we provide tuition for students from primary school through university level, with a focus on
                    GCSE and A-Level students.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">How are your tutors selected?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our tutors go through a rigorous selection process that evaluates their academic credentials,
                    teaching experience, and communication skills. We only select the top candidates who demonstrate
                    exceptional knowledge in their subject areas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">Are your tutors qualified?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, all our tutors have at minimum a bachelor's degree in their subject area, and many have
                    advanced degrees. They also have teaching experience and undergo regular training to stay updated
                    with curriculum changes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="services" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">What services do you offer?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer one-on-one tutoring, group sessions, exam preparation, homework help, and specialized
                    subject coaching for students at all levels.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">How much do your services cost?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our pricing varies based on the subject, level, and tutor experience. Please visit our pricing page
                    for detailed information or contact us for a personalized quote.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="scheduling" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">How do I schedule a session?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    You can schedule a session through our online booking system, by calling our office, or by emailing
                    us with your preferred times.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">What is your cancellation policy?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We require 24 hours notice for cancellations. Late cancellations may be subject to a fee.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="payment" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    What payment methods do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We accept credit/debit cards, bank transfers, and PayPal. Payment is typically required before each
                    session or can be arranged on a monthly basis.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Do you offer refunds?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    If you're not satisfied with a session, please contact us within 48 hours and we'll work to resolve
                    the issue or provide a refund.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="other" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Do you offer online tutoring?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we offer both in-person and online tutoring options to accommodate different preferences and
                    needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">How do I become a tutor?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    To apply as a tutor, please visit our "Become a Tutor" page and submit your application with your CV
                    and relevant qualifications.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}

