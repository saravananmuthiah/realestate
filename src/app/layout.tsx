import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SK Promoters - Building Dreams into Homes | Coimbatore, Tamil Nadu",
  description: "SK Promoters specializes in building beautiful individual houses in Coimbatore and Udumalaipettai, Tamil Nadu. Discover our projects, services, and testimonials.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
