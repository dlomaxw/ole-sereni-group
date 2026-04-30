import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { AuthProvider } from "@/context/AuthContext";


export const metadata: Metadata = {
  title: {
    default: 'Ole Sereni Group | Premium Construction Finishing & Architectural Systems',
    template: '%s | Ole Sereni Group',
  },
  description:
    'Ole Sereni Group delivers premium construction finishing and architectural systems — aluminium & glass, gypsum works, painting, tiling, carpentry, and electrical installations — for residential, commercial, and institutional projects in Uganda.',
  keywords: [
    'construction finishing Uganda',
    'aluminium glass systems Kampala',
    'gypsum ceiling works Uganda',
    'interior finishing contractors Uganda',
    'Ole Sereni Group',
    'commercial fit-out Kampala',
    'curtain wall facades Uganda',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    siteName: 'Ole Sereni Group',
    title: 'Ole Sereni Group | Premium Construction Finishing',
    description: 'Premium construction finishing and architectural systems across East Africa.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Lato:wght@300;400;700;900&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Ole Sereni Group',
              description: 'Premium construction finishing and architectural systems specialists.',
              telephone: '+256767358604',
              email: 'sales@oleserenigroup.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Forest Mall, Block A, 1st Floor, Suite 48',
                addressLocality: 'Kampala',
                addressCountry: 'UG',
              },
              url: 'https://oleserenigroup.com',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFAB />
        </AuthProvider>
      </body>

    </html>
  );
}

