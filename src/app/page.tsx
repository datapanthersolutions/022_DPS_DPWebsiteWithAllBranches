"use client";

import React from "react";
import LandingPage from "./LandingPage";
import { CardHoverEffectDemo } from "./cardHover";
import ResponsiveFooter from "./Footer";
import FancyWhatWeDo from "./WhatWeDo";
import ModernNavbar from "./Navigation";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonials";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCards";
import { FeaturesSectionDemo } from "./FeatureSection";
import Contact from "./ContactUs";
import AIML from "./AIML";
import OurOfferings from "./Offerings";
import { HeroParallaxDemo } from "./Parallelx";
import BlogPage from "./Blog";





export default function Home() {
  return (
    <>

    <section><ModernNavbar/></section>
    
    <section><LandingPage /></section>
    <section className="bg-slate-50"><HeroParallaxDemo/></section>
    <section> <AIML/></section>
    <section><FancyWhatWeDo/></section>
    <section><OurOfferings/></section>
    <section><CardHoverEffectDemo/></section>
    <section><BlogPage/></section>
    <section> <FeaturesSectionDemo/></section>
    <section> <AnimatedTestimonialsDemo/></section>
    <section> <InfiniteMovingCardsDemo/></section>
    <section> <Contact/></section>
    <section> <ResponsiveFooter/></section>
    </>
  );
}

