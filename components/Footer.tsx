import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061321] py-8 text-center text-sm text-slate-500">
      <div className="mx-auto w-[90%] max-w-6xl">
        <p>
          &copy; {new Date().getFullYear()} {site.legalName}. All rights
          reserved. Registered in {site.location}.
        </p>
      </div>
    </footer>
  );
}
