import { site } from "@/lib/site";

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 5.5l7 5.5 7-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path
        d="M10 3a7 7 0 0 0-6.1 10.4L3 17l3.7-.9A7 7 0 1 0 10 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7.3 8.8c-.1-.6.3-1.1.9-1.1h.4c.3 0 .5.2.6.5l.3 1-.6.6c.4.7 1 1.3 1.7 1.7l.6-.6 1 .3c.3.1.5.3.5.6v.4c0 .6-.5 1-1.1.9-1.8-.3-3.4-1.9-3.7-3.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none">
      <path
        d="M17 3 2.5 9.2c-.6.3-.6 1.1.1 1.3l3.6 1.1 1.4 4.4c.2.6 1 .7 1.4.2l2-2.3 3.7 2.7c.5.4 1.2.1 1.4-.5L18.4 4c.2-.7-.5-1.3-1.4-1Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M6.2 11.5 15 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

const channels = [
  {
    key: "email",
    label: "Email",
    sub: site.email,
    href: `mailto:${site.email}`,
    icon: EnvelopeIcon,
    external: false,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    sub: site.phoneDisplay,
    href: site.whatsappLink,
    icon: WhatsAppIcon,
    external: true,
  },
  {
    key: "telegram",
    label: "Telegram",
    sub: site.phoneDisplay,
    href: site.telegramLink,
    icon: TelegramIcon,
    external: true,
  },
];

export default function ContactChannels({
  variant = "dark",
  size = "md",
  align = "center",
}: {
  variant?: "dark" | "light";
  size?: "md" | "sm";
  align?: "center" | "start";
}) {
  const isDark = variant === "dark";
  const isSmall = size === "sm";

  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      {channels.map(({ key, label, sub, href, icon: Icon, external }) => (
        <a
          key={key}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={`flex items-center gap-3 rounded-lg transition-colors ${
            isSmall ? "px-4 py-2.5" : "px-5 py-3"
          } ${
            isDark
              ? "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
              : "bg-bg-light text-primary ring-1 ring-black/5 hover:bg-primary/5"
          }`}
        >
          <Icon className="h-5 w-5 flex-shrink-0" />
          <span className="text-left leading-tight">
            <span className="block text-sm font-semibold">{label}</span>
            <span className={`block text-xs font-normal ${isDark ? "text-white/70" : "text-secondary"}`}>
              {sub}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
