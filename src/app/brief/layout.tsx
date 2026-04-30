import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Brief Intake | Ole Sereni Group',
  description: 'Submit your architectural project requirements directly to our engineering team for specialized structural analysis.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

