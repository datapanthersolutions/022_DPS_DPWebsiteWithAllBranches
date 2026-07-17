"use client";

import React from "react";
import LandingPage from "./LandingPage";
import FancyWhatWeDo from "./WhatWeDo";
import AIML from "./AIML";
import OurOfferings from "./Offerings";
import CaseStudySection from "./CaseStudySection";
import AISolution from "./oursolutions";
import CTA from "./cta";
import FeaturesSectionDemo from "./FeatureSection";

export default function Home() {
  return (
    <>
      <section><LandingPage /></section>
      <section> <AIML /></section>
      <section><AISolution /></section>
      <section>< FeaturesSectionDemo /></section>
      <section><CaseStudySection /></section>
      <section><OurOfferings /></section>
      <section><CTA /></section>
    </>

  );
}

