import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { Linkedin, Twitter, Youtube, Facebook, Instagram, Slack } from "lucide-react";

const footerSections = [
  {
    heading: "Company Info",
    links: [
      {
        label: "About Us",
        href: "/about",
      },
      {
        label: "Our Founder",
        href: "/about#founder",
      },
      {
        label: "Our Team",
        href: "/about#ourteam",
      },
      {
        label: "Alliance and Partnerships",
        href: "/alliance-and-partnerships",
      },
      {
        label: "Careers",
        href: "/alliance-and-partnerships#opportunities",
      },
      // {
      //     label: "Partnerships",
      //     href: "#"
      // }
    ],
  },
  {
    heading: "Legal",
    links: [
      {
        label: "Terms of Service",
        href: "/terms-of-service",
      },
      {
        label: "Cookie Policy",
        href: "/cookie-policy",
      },
    ],
  },
  {
    heading: "Community",
    links: [
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Events",
        href: "/newsroom#events",
      },
      // {
      //     label: "Testimonials",
      //     href: "/alliance-and-partnerships#teamtestimonials"
      // },
      {
        label: "Media Announcements",
        href: "/newsroom#pressreleases",
      },
      {
        label: "Resources",
        href: "/resources",
      },
    ],
  },
  {
    heading: "Product",
    links: [
      // {
      //     label: "Solutions",
      //     href: "/solutions"
      // },
      {
        label: "Use Cases",
        href: "/solutions#usecasebasedsolutions",
      },
    ],
  },
  // {
  //     heading: 'Resources, E-books',
  //     links: [
  //         {
  //             label: "Resources",
  //             href: "/resources"
  //         },
  //         {
  //             label: "Case Studies",
  //             href: "#"
  //         },
  // {
  //     label: "Whitepapers",
  //     href: "#"
  // },
  //     ]
  // },
  // {
  //     heading: 'Conversion',
  //     links: [
  //         {
  //             label: "Get Link Demo",
  //             href: "#"
  //         },
  //         {
  //             label: "Try for free",
  //             href: "/solutions#usecasebasedsolutions"
  //         },
  //         {
  //             label: "Contact Sales",
  //             href: "#"
  //         },
  //         {
  //             label: "Pilot Trial",
  //             href: "#"
  //         },
  //         {
  //             label: "Join the waitlist",
  //             href: "/solutions#roadmap"
  //         }
  //     ]
  // },
  // {
  //     heading: 'Compliances',
  //     links: [
  //         {
  //             label: "Trust Portal",
  //             href: "/trust-portal"
  //         },
  //     ]
  // },
  {
    heading: "Support",
    links: [
      // {
      //     label: "Help Center",
      //     href: "/solutions#helpcenter"
      // },
      {
        label: "Contact",
        href: "/about#contact",
      },
      {
        label: "FAQ",
        href: "/faqs",
      },
      // {
      //     label: "Connect with a local expert",
      //     href: "/about#connectwithalocalexpert"
      // },
      // {
      //     label: "Documentation",
      //     href: "#"
      // },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-white bg-black">
      <div className="absolute w-2/3 h-[800px] xl:left-[200px] -top-[900px] rounded-full bg-black" />

      <div className="relative px-4 py-12 mx-auto md:max-w-5xl xl:max-w-7xl">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 md:ml-[150px] xl:ml-36 xl:gap-16">
          {footerSections.map(({ heading, links }) => (
            <div key={heading} className="w-full">
              <h3 className="mb-4 text-sm font-medium text-[#777777] ">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-white transition-colors hover:underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8 lg:mr-24 pl-16">
          <div className="text-sm text-gray-300">Terms of Service • Cookie Policy</div>

          <div className="flex items-center gap-4">
            <a aria-label="LinkedIn" href="http://www.linkedin.com/in/neural-mind-atlas-adminstrator-3844b0366" target="_blank" rel="noopener noreferrer" className="text-gray-200">
              <Linkedin size={20} />
            </a>
            <a aria-label="X" href="https://x.com/NeuralMindAtlas" target="_blank" rel="noopener noreferrer" className="text-gray-200">
              <Twitter size={20} />
            </a>
            <a aria-label="YouTube" href="https://www.youtube.com/@NeuralMindAtlas" target="_blank" rel="noopener noreferrer" className="text-gray-200">
              <Youtube size={20} />
            </a>
            {/* <a aria-label="Facebook" href="#" className="text-gray-200">
              <Facebook size={20} />
            </a> */}
            <a aria-label="Instagram" href="https://www.instagram.com/neuralmindatlas/" target="_blank" rel="noopener noreferrer" className="text-gray-200">
              <Instagram size={20} />
            </a>
            {/* <a aria-label="Slack" href="https://www.reddit.com/user/neuralmindatlas/" target="_blank" rel="noopener noreferrer" className="text-gray-200">
              <Slack size={20} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
