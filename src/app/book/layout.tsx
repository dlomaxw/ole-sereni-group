import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule Site Consultation | Ole Sereni Group',
  description: 'Book a professional site visit with our structural leads and architectural system experts.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

