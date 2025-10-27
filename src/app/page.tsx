"use client";

import React from "react";
import LandingPage from "./LandingPage";
import { CardHoverEffectDemo } from "./cardHover";
import FancyWhatWeDo from "./WhatWeDo";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCards";
import { FeaturesSectionDemo } from "./FeatureSection";
import AIML from "./AIML";
import OurOfferings from "./Offerings";
import GenerativeAIImpact from "./GenAi";
import IndustryUseCases from "./IndustryUseCase";
import LLMWeAreExcelAt from "./LLMWeAreExcelAt";
import CompaniesSection from "./Testimonials";
import TechnologiesPage from "./TechnologiesPage";

export default function Home() {
  return (
    <>
    <section><LandingPage /></section>
    <section> <AIML/></section>
    <section><TechnologiesPage/></section>
    <section><LLMWeAreExcelAt/></section>
    <section><GenerativeAIImpact/></section>
    <section><FancyWhatWeDo/></section>
    <section><CompaniesSection/></section>
    <section><OurOfferings/></section>
    <section> <FeaturesSectionDemo/></section>
    </>
    
  );
}

