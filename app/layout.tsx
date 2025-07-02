import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ZagaFit - Fit & Lifestyle by Zaga',
  description: 'Health, Fitness, Tracking and Journaling App by Zaga',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-primary">{children}</body>
    </html>
  );
}
