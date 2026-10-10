"use client";

import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Frontend Development",
  "Full Stack Development",
  "React & Next.js",
  "Responsive Web Design",
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080811]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-wide"
            >
              <span className="text-white">Smita</span>
              <span className="text-violet-500">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Full Stack Developer passionate about building modern,
              responsive and user-friendly web applications.
            </p>

            <a
              href="mailto:smitamittal55@gmail.com"
              className="mt-5 inline-block text-sm text-violet-400 transition hover:text-violet-300"
            >
              smitamittal55@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:text-violet-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              What I Do
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-gray-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Let's Connect
            </h3>

            <p className="mt-5 text-sm leading-6 text-gray-400">
              Have a project or opportunity in mind? I'd love to
              hear from you.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-500 hover:to-indigo-500"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Smita Mittal. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            Built with{" "}
            <span className="text-violet-400">Next.js</span>
            {" "} & {" "}
            <span className="text-indigo-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}