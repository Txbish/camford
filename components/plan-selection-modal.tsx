"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

// Define the plan types
interface Feature {
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: Feature[];
  popular?: boolean;
  discount?: number;
}

interface PlanSelectionModalProps {
  plan: Plan;
  isOpen: boolean;
  onClose: () => void;
}

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
});

type FormData = z.infer<typeof formSchema>;

export default function PlanSelectionModal({
  plan,
  isOpen,
  onClose,
}: PlanSelectionModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      console.log("Submitting form data:", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        plan: {
          id: plan.id,
          name: plan.name,
          price: plan.price,
          duration: plan.duration,
          features: plan.features.filter((f) => f.included).map((f) => f.name),
        },
      });

      // Send the form data to the server
      const response = await fetch("/api/send-plan-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          plan: {
            id: plan.id,
            name: plan.name,
            price: plan.price,
            duration: plan.duration,
            features: plan.features
              .filter((f) => f.included)
              .map((f) => f.name),
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      toast({
        title: "Success!",
        description:
          "Your plan selection has been submitted. We'll contact you shortly.",
      });

      reset();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description:
          typeof error === "object" && error !== null && "message" in error
            ? String(error.message)
            : "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe to {plan.name}</DialogTitle>
          <DialogDescription>
            Fill out the form below to subscribe to the {plan.name} at $
            {plan.price}
            {plan.duration}.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              {...register("name")}
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="+1 (555) 123-4567"
              {...register("phone")}
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <DialogFooter className="pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
