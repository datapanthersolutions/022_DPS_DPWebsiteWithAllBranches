import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "hasan",
      designation: "Software Developer at DataPanther",
      src: "https://media.licdn.com/dms/image/v2/D5603AQEMFytVezS8fA/profile-displayphoto-shrink_200_200/B56ZYWLFEVHoAg-/0/1744128726660?e=2147483647&v=beta&t=_4VPyr_N5nlYSWZoZVYV3yeMgMqLr-bTKLWU_umUaws",
    },
   
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Irfan Shareef",
      designation: "Python Automation Engineer at DataPanther",
      src: "https://avatars.githubusercontent.com/u/139055687?v=4",
    },
    
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}