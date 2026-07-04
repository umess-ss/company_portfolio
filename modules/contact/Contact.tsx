"use client";

/**
 * Owner: Anish (@anish)
 * Module rules: import only from data/, lib/, components/ui/ (plus the
 * app/actions server action) — never from another module. All CSS custom
 * properties live in globals.css.
 */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { submitContact } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
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

export function Contact() {
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
    <section id="contact" className="bg-paper py-24">
      <div className="mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-contour">
            Start a project
          </p>
          <h2 className="mt-4 font-display text-3xl font-medium text-ink">
            Tell us what you&apos;re building.
          </h2>
        </Reveal>
        <Reveal delay={90}>
          <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-6"
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
        </Reveal>
      </div>
    </section>
  );
}
