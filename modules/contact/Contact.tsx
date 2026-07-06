"use client";

/**

 * Module rules: import only from data/, lib/, components/ — never
 * from another module. All CSS custom properties live in globals.css.
 *
 * Frontend-only contact: the form validates client-side and opens the
 * visitor's mail client with a pre-filled message (no backend).
 */
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

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
  "Web Development",
  "App Development",
  "AI Systems",
  "Education Management System",
  "Bulk SMS",
  "SEO & Digital Marketing",
  "Graphic Design",
  "Other",
] as const;

const contactSchema = z.object({
  name: z.string().min(2, "Please enter at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(1, "Please enter your phone number."),
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
      phone: "",
      serviceInterest: undefined,
      message: "",
      _honeypot: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    if (values._honeypot !== "") return;

    const subject = encodeURIComponent(
      `[${values.serviceInterest}] Project inquiry from ${values.name}`,
    );
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name} (${values.email})`,
    );
    window.open(`mailto:${site.email}?subject=${subject}&body=${body}`, "_self");

    toast.success("Opening your mail app — send the drafted email to reach us.");
    form.reset();
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-5 lg:px-12">
        <div className="lg:col-span-2">
          <SectionHeader
            eyebrow="Contact us"
            title="Tell us what you're building."
            className="mb-6 md:mb-8"
          />
          <Reveal delay={90} className="flex flex-col gap-5">
            <p className="font-body text-contour-strong">
              Send a short note about the problem you want solved. An engineer —
              never a salesperson — reads it and replies with honest next
              steps.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="font-body text-signal underline decoration-signal/40 underline-offset-4 transition hover:decoration-signal"
            >
              {site.email}
            </a>
            <p className="flex items-center gap-2 font-body text-sm text-contour-strong">
              <MapPin className="size-4 shrink-0 text-signal" aria-hidden="true" />
              {site.location}
            </p>
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-2 font-body text-sm text-signal underline decoration-signal/40 underline-offset-4 transition hover:decoration-signal"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              {site.phone}
            </a>
            <p className="flex items-center gap-2 font-body text-sm text-contour-strong">
              <Clock className="size-4 shrink-0 text-signal" aria-hidden="true" />
              We reply {site.responseTime}
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-contour/60 shadow-sm">
              <iframe
                title="Office Location"
                src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Advanced%20College%20of%20Engg.%20Management+(Advanced%20College%20of%20Engg.%20Management)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Reveal>
        </div>
        <Reveal delay={180} className="lg:col-span-3">
          <Card className="rounded-2xl border-contour/60 bg-card p-8 shadow-sm">
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
                          <Input
                            placeholder="Your name"
                            autoComplete="name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-sm text-destructive" />
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
                            placeholder="name@gmail.com"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-sm text-destructive" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-ink">Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="9812345678"
                            autoComplete="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-sm text-destructive" />
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
                        <Select
                          onValueChange={field.onChange}
                          value={field.value ?? ""}
                        >
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
                        <FormMessage className="text-sm text-destructive" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-ink">
                          Your message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="What are you building? What problem should it solve?"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-sm text-destructive" />
                      </FormItem>
                    )}
                  />
                  {/* Honeypot — hidden from real users, catches naive bots */}
                  <FormField
                    control={form.control}
                    name="_honeypot"
                    render={({ field }) => (
                      <FormItem className="hidden" aria-hidden="true">
                        <FormControl>
                          <Input tabIndex={-1} autoComplete="off" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="px-6"
                    disabled={form.formState.isSubmitting}
                  >
                    Send message
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
