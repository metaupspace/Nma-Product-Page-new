import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    <footer className="relative overflow-hidden text-white bg-brand-dark-blue">
      <div className="absolute w-2/3 h-[800px] xl:left-[200px] -top-[900px] rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 blur-[530.35px]" />

      <div className="relative px-4 py-12 mx-auto md:max-w-5xl xl:max-w-7xl">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 md:ml-[150px] xl:ml-36 xl:gap-16">
          {footerSections.map(({ heading, links }) => (
            <div key={heading} className="w-full">
              <h3 className="mb-4 text-sm font-medium text-brand-cyan">
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

        {/* Socials + Copyright */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <div className="flex gap-4">
            {[
              {
                img: (
                  <Image
                    src="/assets/FaceBook.png"
                    alt="Facebook"
                    height={30}
                    width={34}
                  />
                ),
                name: "facebook",
                link: "#"
              },
              {
                img: (
                  <Image
                    src="/assets/X.png"
                    alt="Twitter"
                    height={30}
                    width={34}
                  />
                ),
                link: "https://x.com/NeuralMindAtlas",
                name: "twitter",
              },
              {
                img: (
                  <Image
                    src="/assets/Instagram.png"
                    alt="Instagram"
                    width={34}
                    height={30}
                  />
                ),
                link: "https://www.instagram.com/neuralmindatlas/",
                name: "Instagram",
              },
              {
                img: (
                  <Image
                    src="/assets/Linkedin.png"
                    alt="Linkedin"
                    width={34}
                    height={30}
                  />
                ),
                name: "Linkedin",
                link: "http://www.linkedin.com/in/neural-mind-atlas-adminstrator-3844b0366"
              },
              {
                img: (
                  <Image
                    src="/assets/youtube.png"
                    alt="Youtube"
                    width={34}
                    height={30}
                  />
                ),
                name: "Youtube",
                link: "https://www.youtube.com/@NeuralMindAtlas"
              },
              {
                img: (
                  <Image
                    src="/assets/reddit.png"
                    alt="Reddit"
                    width={34}
                    height={30}
                  />
                ),
                name: "Reddit",
                link: "https://www.reddit.com/user/neuralmindatlas/"
              },
            ].map((item) => (
              <Link key={item.name} href={item.link}>
                <button className="p-3 rounded-full hover:bg-gray-500">
                  {item.img}
                </button>
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            © 2025{" "}
            <Link className="underline" href="/">
              Neural Mind Atlas
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
