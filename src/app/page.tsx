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
import AIML from "./AIML";
import OurOfferings from "./Offerings";
import BlogPage from "./Blog";
import GenerativeAIImpact from "./GenAi";
import IndustryUseCases from "./IndustryUseCase";





export default function Home() {
  return (
    <>

    {/* <section><ModernNavbar/></section> */}
    
    <section><LandingPage /></section>
    <section> <AIML/></section>
    <section><GenerativeAIImpact/></section>
    <section><FancyWhatWeDo/></section>
    <section><OurOfferings/></section>
    <section><CardHoverEffectDemo/></section>
    <section><IndustryUseCases/></section>
    <section> <FeaturesSectionDemo/></section>
    {/* <section> <AnimatedTestimonialsDemo/></section> */}
    <section> <InfiniteMovingCardsDemo/></section>
    {/* <section> <ResponsiveFooter/></section> */}
    </>
  );
}

