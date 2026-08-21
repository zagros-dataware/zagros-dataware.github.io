import Image from "next/image";
import Link from "next/link";
import { site, footerLinks } from "@/lib/site";
import { basePath } from "@/lib/basePath";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061321] text-slate-400">
      <div className="mx-auto grid w-[90%] max-w-6xl gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-3 text-lg font-bold text-white">
            <Image
              src={`${basePath}/logo.png`}
              alt={`${site.name} logo`}
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            {site.name}
          </Link>
          <p className="mt-4 max-w-xs text-sm">{site.tagline}</p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-sm font-semibold tracking-wide text-white uppercase">
              {heading}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm">
        <div className="mx-auto w-[90%] max-w-6xl">
          &copy; {new Date().getFullYear()} {site.legalName}. All rights
          reserved. Registered in {site.location}.
        </div>
      </div>
    </footer>
  );
}
