"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  manufacturer: z.string({ message: "Please select a manufacturer." }).min(1, "Please select a manufacturer."),
  details: z.string().optional(),
});

export function ConsultationEngine() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedPhone, setSubmittedPhone] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      details: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a production environment, this would post to an API route.
    setSubmittedPhone(values.phone);
    setIsSubmitted(true);
  }

  return (
    <section id="consultation" className="bg-onyx py-16 md:py-24 px-4 border-t border-carbon relative">
      <div className="absolute inset-0 bg-carbon/20 mix-blend-multiply pointer-events-none" />
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-onyx border border-carbon rounded-none">
            <div className="border-b border-carbon p-8 md:p-12 bg-carbon/30">
              <h2 className="font-heading text-2xl md:text-3xl text-titanium uppercase tracking-tight">
                Schedule <span className="text-[#10FF00]">Service</span>
              </h2>
              <p className="text-grey-bore mt-2 font-mono text-xs tracking-widest uppercase">
                Request an Appointment
              </p>
            </div>
            
            <CardContent className="p-8 md:p-12 relative min-h-[400px]">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center h-full space-y-6"
                >
                  <div className="w-16 h-16 rounded-full border border-[#10FF00] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#10FF00]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 className="font-heading text-xl md:text-2xl text-titanium uppercase">Request Received</h3>
                  <p className="text-grey-bore max-w-md text-sm leading-relaxed">
                    Thank you. Your service consultation request has been received. A master technician will review your vehicle&apos;s requirements and contact you directly at <span className="text-titanium">{submittedPhone}</span>.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-carbon text-titanium hover:border-[#10FF00] hover:text-[#10FF00] rounded-none"
                    onClick={() => {
                      setIsSubmitted(false);
                      form.reset();
                    }}
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-titanium text-xs uppercase tracking-widest">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="JOHN DOE" {...field} className="bg-carbon border-white/10 text-titanium focus-visible:ring-[#10FF00] focus-visible:border-[#10FF00] rounded-none h-12 uppercase" />
                            </FormControl>
                            <FormMessage className="text-destructive text-xs" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-titanium text-xs uppercase tracking-widest">Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 555-5555" {...field} className="bg-carbon border-white/10 text-titanium focus-visible:ring-[#10FF00] focus-visible:border-[#10FF00] rounded-none h-12 uppercase" />
                            </FormControl>
                            <FormMessage className="text-destructive text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-titanium text-xs uppercase tracking-widest">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="JOHN@EXAMPLE.COM" {...field} className="bg-carbon border-white/10 text-titanium focus-visible:ring-[#10FF00] focus-visible:border-[#10FF00] rounded-none h-12 uppercase" />
                            </FormControl>
                            <FormMessage className="text-destructive text-xs" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="manufacturer"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-titanium text-xs uppercase tracking-widest">Manufacturer</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-carbon border-white/10 text-titanium focus:ring-[#10FF00] focus:border-[#10FF00] rounded-none h-12">
                                  <SelectValue placeholder="SELECT MANUFACTURER" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-onyx border-carbon text-titanium rounded-none">
                                <SelectItem value="ferrari" className="focus:bg-carbon focus:text-[#10FF00] uppercase">FERRARI</SelectItem>
                                <SelectItem value="lamborghini" className="focus:bg-carbon focus:text-[#10FF00] uppercase">LAMBORGHINI</SelectItem>
                                <SelectItem value="rolls-royce" className="focus:bg-carbon focus:text-[#10FF00] uppercase">ROLLS-ROYCE</SelectItem>
                                <SelectItem value="bentley" className="focus:bg-carbon focus:text-[#10FF00] uppercase">BENTLEY</SelectItem>
                                <SelectItem value="mclaren" className="focus:bg-carbon focus:text-[#10FF00] uppercase">MCLAREN</SelectItem>
                                <SelectItem value="porsche" className="focus:bg-carbon focus:text-[#10FF00] uppercase">PORSCHE</SelectItem>
                                <SelectItem value="other" className="focus:bg-carbon focus:text-[#10FF00] uppercase">OTHER MANUFACTURER</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-destructive text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="details"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-titanium text-xs uppercase tracking-widest">Service Requirements</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="DESCRIBE SPECIFIC MECHANICAL ISSUES OR REQUESTED SERVICES..." 
                              className="resize-none bg-carbon border-white/10 text-titanium focus-visible:ring-[#10FF00] focus-visible:border-[#10FF00] rounded-none min-h-[120px] uppercase" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-destructive text-xs" />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-[#10FF00] text-onyx font-heading uppercase tracking-widest hover:bg-[#10FF00]/90 rounded-none h-14 text-sm">
                      Book Appointment
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
