"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/data/business";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Products", href: "/products" },
    { name: "Brands", href: "/#brands" },
    { name: "Doorstep", href: "/#doorstep-service" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)] transition-all duration-300"
      id="main-header"
    >
      {/* Top Utility Banner */}
      <div className="bg-primary text-on-primary py-1.5 px-gutter-mobile lg:px-gutter-desktop">
        <div className="max-w-container-max mx-auto flex items-center justify-between font-label-sm text-label-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">
              location_on
            </span>
            <span>Computer, Laptop &amp; Printer Sales and Service • Kumbakonam</span>
          </div>
          <div className="hidden sm:flex items-center gap-space-md">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">
                electric_moped
              </span>
              <span>Doorstep Service Available</span>
            </span>
            <a
              className="flex items-center gap-1 hover:text-tertiary-fixed transition-colors"
              href={BUSINESS_INFO.phoneLink}
            >
              <span className="material-symbols-outlined text-[15px]">call</span>
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-on-primary-container">&quot;{BUSINESS_INFO.motto}&quot;</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        {/* Brand Logo */}
        <Link className="flex items-center gap-2.5 group" href="/">
          <div className="relative h-10 w-10 shrink-0">
            <Image
              alt="VASAN TECH Logo"
              src="/images/logo.svg"
              width={40}
              height={40}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-[20px] tracking-tight text-primary uppercase leading-tight">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-secondary leading-none">
              {BUSINESS_INFO.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-space-md font-label-md text-label-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className="nav-link text-on-surface-variant hover:text-primary transition-colors py-space-xs"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-space-xs sm:gap-space-sm">
          <Link
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container text-primary font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-all shadow-sm"
            href="/products"
          >
            <span className="material-symbols-outlined text-[18px]">storefront</span>
            <span>Explore Products</span>
          </Link>
          <a
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm"
            href={BUSINESS_INFO.phoneLink}
          >
            <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
            <span className="hidden sm:inline">{BUSINESS_INFO.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-tertiary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-all shadow-sm"
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-gutter-mobile py-space-md shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-on-surface font-label-md text-label-md hover:bg-surface-container hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="material-symbols-outlined text-[18px] text-outline">
                  chevron_right
                </span>
              </Link>
            ))}
            <div className="pt-2 border-t border-outline-variant/30 flex flex-col gap-2">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-container text-primary font-label-md"
              >
                <span className="material-symbols-outlined text-[18px]">storefront</span>
                <span>Explore Products Catalog</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
