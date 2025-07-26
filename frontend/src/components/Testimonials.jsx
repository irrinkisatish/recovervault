import React from "react";
import { Carousel } from "@mantine/carousel";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import "@mantine/carousel/styles.css";

const testimonials = [
  {
    quote: "Recovered $10,000 in crypto! Very professional.",
    author: "James L.",
  },
  {
    quote: "They helped me after a fake investment platform scammed me.",
    author: "Sarah K.",
  },
  {
    quote: "Incredible service and great support throughout the process.",
    author: "Michael T.",
  },
  {
    quote: "Transparent pricing and real updates!",
    author: "Priya R.",
  },
  {
    quote: "Got my money back after 8 months of struggle. Highly recommend!",
    author: "Anand V.",
  },
];

export default function Testimonials() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          What Our Clients Say
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Real testimonials from people we've helped recover their funds.
        </p>

        <Carousel
          withIndicators
          loop
          slideSize="33.3333%"
          slidesToScroll={1}
          align="start"
          height={220}
          slideGap="md"
          plugins={[autoplay.current]}
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "100%" },
          ]}
        >
          {testimonials.map((t, i) => (
            <Carousel.Slide key={i}>
              <Card className="rounded-2xl shadow-lg border max-w-md mx-auto h-full">
                <CardContent className="p-6">
                  <Quote className="text-gray-400 mb-3" size={28} />
                  <p className="text-gray-800 text-lg italic">"{t.quote}"</p>
                  <p className="mt-4 text-sm text-right text-gray-600">
                    – {t.author}
                  </p>
                </CardContent>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
}
