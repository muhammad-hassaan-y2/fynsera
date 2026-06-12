import React from 'react';

type FynseraLogoProps = {
  className?: string;
};

export default function FynseraLogo({ className = '' }: FynseraLogoProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="12" fill="currentColor" />
      <path
        d="M9.5 11.5C14.4 11.5 18 12.8 20 15.4V30C17.7 27.5 14.2 26.2 9.5 26.2V11.5Z"
        fill="var(--fynsera-logo-paper, #F8F1DF)"
      />
      <path
        d="M30.5 11.5C25.6 11.5 22 12.8 20 15.4V30C22.3 27.5 25.8 26.2 30.5 26.2V11.5Z"
        fill="var(--fynsera-logo-paper, #F8F1DF)"
        opacity=".72"
      />
      <path
        d="M13 16.2H20M13 20.2H20M20 15.4L26.8 11.5"
        stroke="var(--fynsera-logo-ink, #103E35)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24.2 11.5H27V14.3"
        stroke="var(--fynsera-logo-ink, #103E35)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
