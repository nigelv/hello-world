import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function baseProps({ title, ...props }: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": title ? undefined : true,
    role: title ? ("img" as const) : undefined,
    ...props,
  };
}

export function WindowIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 12h18M12 3v18" />
    </svg>
  );
}

export function GutterIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M4 8h16v3H4z" />
      <path d="M6 11v7M18 11v7" />
      <path d="M4 18h16" />
      <path d="M8 5l2 3M12 4v4M16 5l-2 3" />
    </svg>
  );
}

export function PressureIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M4 20h16" />
      <path d="M7 20V10l5-6 5 6v10" />
      <path d="M10 14h4" />
      <path d="M9 17h6" />
    </svg>
  );
}

export function SolarIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <rect x="3" y="8" width="18" height="10" rx="1" />
      <path d="M3 13h18M9 8V5M15 8V5" />
      <path d="M12 18v3" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps({ ...props, strokeWidth: props.strokeWidth ?? 0 })} {...rest} fill="currentColor" stroke="none">
      {title ? <title>{title}</title> : null}
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.05 1.11-6.47-4.7-4.58 6.49-.94L12 2.5z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  const { title, ...rest } = props;
  return (
    <svg {...baseProps(props)} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14z" />
      <path d="M5 19c2-4 6-8 12-10" />
    </svg>
  );
}
