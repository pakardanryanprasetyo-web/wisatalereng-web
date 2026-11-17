interface WhatsAppIconProps {
  className?: string;
}

export function WhatsAppIcon({ className = 'w-6 h-6' }: WhatsAppIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9.5c.3 1.8 2.2 3.7 4 4l1.1-.8c.3-.2.7-.2 1 0l1.1.7c.3.2.4.6.2.9-.5.9-1.5 1.4-2.6 1.2-2.9-.5-5.3-2.9-5.8-5.8-.2-1.1.3-2.1 1.2-2.6.3-.2.7-.1.9.2l.7 1.1c.2.3.2.7 0 1l-.8 1.2z" />
    </svg>
  );
}
