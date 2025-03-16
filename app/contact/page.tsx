import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12">CONTACT US</h1>

          <Card className="shadow-md">
            <CardContent className="p-6 pt-6">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Leave us a message</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Full Name" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Your email address" className="mt-1" />
                    </div>

                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea id="message" placeholder="How can we help you?" className="mt-1 min-h-[150px]" />
                    </div>

                    <Button className="w-full">Send</Button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg">Weekend UX</h3>
                    <p className="mt-1 text-muted-foreground">
                      B 37/3 Ground Floor Double United
                      <br />
                      States, Newyork, Garden Road: 110015
                    </p>
                  </div>

                  <div>
                    <p className="font-medium">+123 2333 2334</p>
                    <p className="mt-1 text-muted-foreground">hello@info.com.ng</p>
                  </div>

                  <div className="flex gap-4">
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      <Youtube className="h-5 w-5" />
                      <span className="sr-only">YouTube</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}

