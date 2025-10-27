
"use client";
import React from "react";
import { motion } from "framer-motion";

type TypographyProps<T extends React.ElementType> = {
  as?: T;
  color?: string;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

function Typography<T extends React.ElementType = "span">({
  as,
  color,
  className,
  children,
  ...rest
}: TypographyProps<T>) {
  const Component = as || "span";
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
}

export default function ResponsiveFooter() {
  return (
    <footer className="w-full bg-[#03020A] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/dpnew.png"
                alt="Data Panther Logo"
                className="h-auto w-auto mr-3"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Typography as="h4" className="text-lg font-semiserif mb-4">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li>
                <Typography
                  as="a"
                  href="/AboutUs"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="/Services"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Our Services
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="/Insights"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Insights
                </Typography>
              </li>
              <li>
                <Typography
                  as="a"
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Careers
                </Typography>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <Typography as="h4" className="text-lg font-semiserif mb-4">
              Services
            </Typography>
            <ul className="space-y-2">
              {["Data Analytics", "Machine Learning", "Business Intelligence", "Data Visualization", "Consulting"].map(
                (service) => (
                  <li key={service}>
                    <Typography
                      as="a"
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {service}
                    </Typography>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <Typography as="h4" className="text-lg font-semiserif mb-4">
              Contact Info
            </Typography>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-gray-400 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <Typography className="text-gray-300 text-sm">
                  Hyderabad, Telangana
                </Typography>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <Typography className="text-gray-300 text-sm">
                  +91 9948531867
                </Typography>
              </div>
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <Typography className="text-gray-300 text-sm">
                  info@datapanthersolutions.com
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
            <Typography className="text-gray-400 text-sm">
              © 2025 Data Panther. All rights reserved.
            </Typography>
            <div className="flex space-x-8">
              <Typography
                as="a"
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Typography>
              <Typography
                as="a"
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Typography>
              <Typography
                as="a"
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
