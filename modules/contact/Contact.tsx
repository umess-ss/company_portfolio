"use client";

/**
 * Owner: Anish (@anish)
 * Module rules: import only from data/, lib/, components/ui/ (plus the
 * app/actions server action) — never from another module. All CSS custom
 * properties live in globals.css.
 */
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { submitContact } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import type { SiteConfig } from "@/lib/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/ui/reveal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const SERVICE_OPTIONS = [
  "AI Systems",
  "Custom Software",
  "Mobile App",
  "Other",
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Please enter at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  serviceInterest: z.enum(SERVICE_OPTIONS, {
    message: "Please choose a service.",
  }),
  message: z.string().min(20, "Tell us a bit more — at least 20 characters."),
  _honeypot: z.string().max(0),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export interface ContactProps {
  site: SiteConfig;
}

export function Contact({ site }: ContactProps) {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      serviceInterest: undefined,
      message: "",
      _honeypot: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      const result = await submitContact(values);
      if (result.success) {
        toast.success("Message sent! We'll be in touch soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeader
            eyebrow="Start a project"
            title="Tell us what you're building."
            className="mb-6 md:mb-8"
          />
          <Reveal delay={90} className="flex flex-col gap-5">
            <p className="font-body text-contour-strong">
              Send a short note about the problem you want solved. One of the
              four of us — never a salesperson — reads it and replies with
              honest next steps.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="font-body text-signal underline decoration-signal/40 underline-offset-4 transition hover:decoration-signal"
            >
              {site.email}
            </a>
            <p className="flex items-center gap-2 font-body text-sm text-contour-strong">
              <MapPin className="size-4 shrink-0 text-pine" aria-hidden="true" />
              {site.location}
            </p>
            <p className="flex items-center gap-2 font-body text-sm text-contour-strong">
              <Clock className="size-4 shrink-0 text-pine" aria-hidden="true" />
              We reply {site.responseTime}
            </p>
          </Reveal>
        </div>
        <Reveal delay={180} className="lg:col-span-3">
          <Card className="border-contour/20 bg-white p-8 shadow-sm">
            <CardContent className="p-0">
              <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
            noValidate
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body text-ink">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" autoComplete="name" {...field} />
                  </FormControl>
                  <FormMessage className="text-signal text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body text-ink">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-signal text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body text-ink">
                    What do you need?
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value ?? ""}>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-signal text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-body text-ink">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="What are you building, and when do you want it shipped?"
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-signal text-sm" />
                </FormItem>
              )}
            />
            {/* Honeypot — hidden from humans, bots fill it and get rejected */}
            <FormField
              control={form.control}
              name="_honeypot"
              render={({ field }) => (
                <FormItem className="hidden" aria-hidden="true">
                  <FormLabel>Leave this field empty</FormLabel>
                  <FormControl>
                    <Input tabIndex={-1} autoComplete="off" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Sending…" : "Send message"}
            </Button>
          </form>
              </Form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
