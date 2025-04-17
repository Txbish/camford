"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  Twitter,
  Linkedin,
  Facebook,
  Github,
  AtSign,
} from "lucide-react";
import { RiTiktokFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toaster } from "@/components/ui/toaster";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-primary">
        <div className="w-full px-4 md:px-8  flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/camford-logo.svg"
                alt="Logo"
                width={70} // Increased size
                height={70} // Increased size
                priority
                className="object-contain sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 -mr-2" // Adjusted margin
              />
              <span className="text-white text-xl font-bold">
                Camford Tutors
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-white hover:text-white/80"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-white hover:text-white/80"
              >
                About us
              </Link>
              <Link
                href="/tutors"
                className="text-sm font-medium text-white hover:text-white/80"
              >
                Our Tutors
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-sm font-medium text-white hover:text-white/80">
                    Pricing <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/pricing">Pricing Plans</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/pricing/referral">
                      Student Referral Scheme
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/contact"
                className="text-sm font-medium text-white hover:text-white/80"
              >
                Contact us
              </Link>
              <Link
                href="/faq"
                className="text-sm font-medium text-white hover:text-white/80"
              >
                FAQ's
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {/* <Link href="/signup" className="hidden md:block">
              <Button variant="ghost" className="bg-yellow-400" size="sm">
                Create Account
              </Button>
            </Link> */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-transparent border-0 text-white"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    About us
                  </Link>
                  <Link
                    href="/tutors"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Tutors
                  </Link>
                  <div className="flex flex-col gap-2 pl-4">
                    <Link
                      href="/pricing/tuition"
                      className="text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Cost of Tuition
                    </Link>
                    <Link
                      href="/pricing/referral"
                      className="text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Student Referral Scheme
                    </Link>
                  </div>
                  <Link
                    href="/contact"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact us
                  </Link>
                  <Link
                    href="/faq"
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ's
                  </Link>
                  <Link
                    href="/signup"
                    className="mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button className="w-full">Create free account</Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-primary text-white">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="flex items-center justify-center text-2xl font-bold gap-2"
              >
                <Image
                  src="/camford-logo.svg"
                  alt="Logo"
                  width={100} // Increased size
                  height={100} // Increased size
                  priority
                  className="object-cover sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" // Responsive sizing
                />
                <span className="flex items-center justify-center">
                  Camford
                </span>
              </Link>

              <p className="text-sm text-white/80 mt-2">
                Top learning experiences that create more talent in the world.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="font-medium">Product</div>
              <nav className="grid gap-2">
                <Link
                  href="#"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Overview
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Tutorials
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Pricing
                </Link>
              </nav>
            </div>
            <div className="grid gap-4">
              <div className="font-medium">Company</div>
              <nav className="grid gap-2">
                <Link
                  href="/about"
                  className="text-sm text-white/80 hover:text-white"
                >
                  About us
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Careers
                </Link>
                <div className="flex items-center gap-2">
                  <Link
                    href="contact"
                    className="text-sm text-white/80 hover:text-white"
                  >
                    Contact Us
                  </Link>
                  <span className="rounded-full bg-white px-2 py-0.5 text-xs font-medium text-primary">
                    New
                  </span>
                </div>
                <Link
                  href="#"
                  className="text-sm text-white/80 hover:text-white"
                >
                  News
                </Link>
              </nav>
            </div>
            <div className="grid gap-4">
              <div className="font-medium">Social</div>
              <nav className="grid gap-2">
                <Link
                  href="#"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/80 hover:text-white"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/80 hover:text-white"
                >
                  GitHub
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Dribbble
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-sm text-white/60">© All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-white/60 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <AtSign className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-white">
                <RiTiktokFill className="h-5 w-5" />
                <span className="sr-only">TikTok</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <Toaster />
    </div>
  );
}
