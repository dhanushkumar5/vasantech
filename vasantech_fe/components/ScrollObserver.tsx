"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // Navbar Scroll Shadow Adjustment
    const header = document.getElementById("main-header");
    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add("shadow-md");
        } else {
          header.classList.remove("shadow-md");
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Scroll Reveal Observer
    const reveals = document.querySelectorAll(".reveal-on-scroll");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");

              // Sequential step highlighting if entering doorstep section
              if (entry.target.id === "doorstep-container") {
                const stepBadges = entry.target.querySelectorAll(".step-badge");
                stepBadges.forEach((badge, index) => {
                  setTimeout(() => {
                    badge.classList.add("scale-110");
                    setTimeout(() => badge.classList.remove("scale-110"), 400);
                  }, index * 250);
                });
              }

              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      reveals.forEach((el) => observer.observe(el));

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return null;
}
