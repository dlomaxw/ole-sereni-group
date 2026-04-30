import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indicative Valuation Estimator | Ole Sereni Group',
  description: 'Calculate technical specifications and receive immediate indicative valuations for aluminium and glass structural systems.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

