import Layout from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            FAQ's
          </h1>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="general">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="general">General Information</TabsTrigger>
              <TabsTrigger value="services">Services & Pricing</TabsTrigger>
              <TabsTrigger value="scheduling">
                Scheduling & Availability
              </TabsTrigger>
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
                    We offer tuition for a wide range of subjects, including
                    English, Mathematics, Biology, Chemistry and Physics. We
                    cater to mainly GCSE and A-Level students.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Do you provide tuition for all grade levels?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we provide tuition for students from primary school
                    through university level, with a focus on GCSE and A-Level
                    students.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">
                    How are your tutors selected?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our tutors go through a rigorous selection process that
                    evaluates their academic credentials, teaching experience,
                    and communication skills. We only select the top candidates
                    who demonstrate exceptional knowledge in their subject
                    areas.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">
                    Are your tutors qualified?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, all our tutors have at minimum a bachelor's degree in
                    their subject area, and many have advanced degrees. They
                    also have teaching experience and undergo regular training
                    to stay updated with curriculum changes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="services" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    How much does tuition cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Tuition costs vary depending on the subject, level, and
                    duration of the sessions. For specific pricing, please refer
                    to our pricing page or contact us directly for a
                    personalised quote.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Do you offer group or 1-to-1 sessions?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We offer both 1-to-1 private lessons and group tuition
                    options. Group lessons tend to be more affordable and are
                    ideal for students who enjoy collaborative learning, while
                    1-to-1 sessions provide more personalised attention.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">
                    Do you offer online or in-person tuition?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We are currently offering only online tuition to provide the
                    flexibility to both students and tutors. Our online lessons
                    are conducted via a user-friendly platform, allowing
                    students to learn from the comfort of their home.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">
                    Can I book a trial lesson?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes! We offer trial lessons so you can assess whether the
                    tutor and teaching approach are a good fit for your needs.
                    Please schedule a trial session through the link provided on
                    our home page.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium">
                    Do you offer discounts for multiple sessions or group
                    tuition?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we offer discounts for bulk bookings or group tuition.
                    Please check our pricing page for detailed information on
                    available discounts or contact us for a tailored offer.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-medium">
                    Is there a minimum number of sessions I need to book?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    There is no minimum number of sessions required. You can
                    book sessions as needed, whether it's just one lesson or a
                    longer-term arrangement.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="scheduling" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    What is the process for scheduling a lesson?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Scheduling is easy! Simply create an account on our website,
                    browse available tutors and subjects, and book your
                    preferred time slot. You’ll receive a confirmation email,
                    and your tutor will be ready at the scheduled time.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Can I reschedule or cancel a session?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, you can reschedule or cancel a session up to 24 hours
                    in advance. If you need to cancel within 24 hours, please
                    contact us, and we’ll do our best to accommodate you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">
                    How do I know if a tutor is available at my preferred time?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Our booking system allows you to view tutors' availability
                    in real-time. You can easily check the schedule of tutors
                    and select a time that works best for you.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">
                    Do you offer lessons during holidays or weekends?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we offer lessons on weekends and during most holidays,
                    subject to tutor availability. Please check with us for
                    specific dates and availability.
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
                    We accept various payment methods, including credit/debit
                    cards, bank transfers, and online payment platforms like
                    Stripe or Paypal.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    What happens if I miss a lesson or need to cancel?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    If you miss a lesson or need to cancel, please notify us at
                    least 24 hours in advance to avoid a cancellation fee. If
                    the tutor is available, we may be able to reschedule the
                    session.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="other" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">
                    How do I get started with your services?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    To get started, simply sign up on our website, choose your
                    preferred subject and tutor, and book your first lesson. Our
                    team is available to assist with any questions you may have
                    during the process.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">
                    Do you offer any free resources or trial materials?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we offer free resources such as practice tests, and
                    past papers on our website. Additionally, you can request a
                    trial lesson to experience our teaching style before
                    committing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">
                    Do you help with exam preparation or specific test
                    preparation?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we offer specialised tuition for exam preparation,
                    including university entrance exams, and interview
                    preparation. Our tutors will help students with test
                    strategies, practice exams, and topic revision.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">
                    Is there a contact number or support team I can reach out to
                    if I have issues?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Yes, we provide customer support through email and whatsapp.
                    Our team is available to answer your questions and resolve
                    any issues you may have.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
