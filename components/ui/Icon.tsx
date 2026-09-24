const paths = {
  check: <path d="M5 12.5l4.2 4.2L19 7" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  minus: <path d="M6 12h12" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="M9 6l6 6-6 6" />,
  down: <path d="M6 9l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M8.1 8.1L20 20M8.1 15.9L20 4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.2-4 4.3-6 8-6s6.8 2 8 6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c1-3.4 3.5-5 6.5-5s5.5 1.6 6.5 5M16 4.5a3.5 3.5 0 010 7M18 15c2 .6 3.1 2.2 3.6 5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.5V20h16V9.5M3 4h18l-1.5 5.5a3 3 0 01-5.5 0 3 3 0 01-5.9 0 3 3 0 01-5.6 0L3 4z" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  chart: <path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3M20 16V6" />,
  bell: (
    <>
      <path d="M6 16V11a6 6 0 1112 0v5l1.5 2h-15L6 16z" />
      <path d="M10 20.5a2 2 0 004 0" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 10h19M6.5 15h4" />
    </>
  ),
  gift: (
    <>
      <rect x="3.5" y="8" width="17" height="4" rx="1" />
      <path d="M5 12v8.5h14V12M12 8v12.5M12 8C10.5 4 6.5 4 6.5 6.3S10 8 12 8zm0 0c1.5-4 5.5-4 5.5-1.7S14 8 12 8z" />
    </>
  ),
  crown: <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8z" />,
  star: <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8L12 3.5z" />,
  tag: (
    <>
      <path d="M3 12.2V4a1 1 0 011-1h8.2l8.3 8.3a1.5 1.5 0 010 2.1l-7.1 7.1a1.5 1.5 0 01-2.1 0L3 12.2z" />
      <circle cx="7.5" cy="7.5" r="1.3" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  repeat: <path d="M17 2.5l3 3-3 3M4 11V9.5a4 4 0 014-4h12M7 21.5l-3-3 3-3M20 13v1.5a4 4 0 01-4 4H4" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  shield: <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6L12 3z" />,
  zap: <path d="M13 2.5L4.5 13.5H12l-1 8 8.5-11H12l1-8z" />,
  message: <path d="M4 5.5h16v11H9l-5 4v-15z" />,
  phone: <path d="M5 3.5h3.5l2 5-2.5 1.5a11 11 0 005.5 5.5l1.5-2.5 5 2v3.5a2 2 0 01-2 2A16.5 16.5 0 013 5.5a2 2 0 012-2z" />,
  inbox: <path d="M3 13l3-8h12l3 8v6H3v-6zm0 0h5l1.5 2.5h5L16 13h5" />,
  trend: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 6.5L12 13l8.5-6.5" />
    </>
  ),
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </>
  ),
  tiktok: <path d="M14 3v11.5a3.5 3.5 0 11-3.5-3.5M14 3c.4 2.8 2.2 4.6 5 5" />,
  google: <path d="M20.5 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h4.8a4.2 4.2 0 01-1.8 2.7v2.2h2.9c1.7-1.6 2.6-3.9 2.6-6.6zM12 21c2.4 0 4.5-.8 5.9-2.2L15 16.6c-.8.6-1.8.9-3 .9-2.3 0-4.3-1.6-5-3.7H4v2.3A9 9 0 0012 21zM7 13.8a5.4 5.4 0 010-3.5V8H4a9 9 0 000 8.1l3-2.3zM12 6.6c1.3 0 2.5.5 3.4 1.3l2.6-2.6A9 9 0 004 8l3 2.3c.7-2.1 2.7-3.7 5-3.7z" />,
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2.2a9.7 9.7 0 00-8.4 14.6L2.3 21.7l5-1.3A9.7 9.7 0 1012 2.2zm0 17.7c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1112 19.9zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.5 6.5 0 01-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 00-.7.3 2.8 2.8 0 00-.9 2.1c0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.4-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.4-.2z"
    />
  ),
} as const;

export type IconName = keyof typeof paths;

export default function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.5,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
