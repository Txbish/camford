"use client";
import { useState } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Instagram, Facebook, Twitter } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setResponseMessage("");
    try {
      const res = await fetch("/api/send-contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResponseMessage(data.error || "Something went wrong.");
      }
    } catch (err) {
      setResponseMessage("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12">
            CONTACT US
          </h1>

          <Card className="shadow-md">
            <CardContent className="p-6 pt-6">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Side - Contact Form */}
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Leave us a message</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Full Name"
                        className="mt-1"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="mt-1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        className="mt-1 min-h-[150px]"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full"
                    >
                      {loading ? "Sending..." : "Send"}
                    </Button>
                    {responseMessage && (
                      <p className="text-sm text-center mt-2 text-muted-foreground">
                        {responseMessage}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right Side - Contact Info */}
                <div className="space-y-6">
                  {/* <div>
                    <h2 className="text-xl font-semibold mb-2">Our Office</h2>
                    <p className="text-muted-foreground">
                      Camford Tutors
                      <br />
                      B 37/3 Ground Floor, Double Road,
                      <br />
                      Garden Town, Lahore, Pakistan
                    </p>
                  </div> */}

                  <div>
                    <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
                    <p className="text-muted-foreground">
                      Phone: +44 7910 071398
                      <br />
                      Email: contact@camfordtutors.com
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Youtube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
