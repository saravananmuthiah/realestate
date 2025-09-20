"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

const footerLinks = {
  company: [
    { name: "aboutUs", href: "/about" },
    { name: "projects", href: "/projects" },
    { name: "services", href: "/services" },
    { name: "testimonials", href: "/testimonials" },
  ],
  services: [
    { name: "architectureDesign", href: "/services#architecture" },
    { name: "construction", href: "/services#construction" },
    { name: "interiorDesign", href: "/services#interior" },
    { name: "customVillas", href: "/services#villas" },
  ],
  contact: [
    { name: "contactUs", href: "/contact" },
    { name: "scheduleVisit", href: "/contact#schedule" },
  ],
};

const socialLinks = [
  { name: "facebook", icon: Facebook, href: "#" },
  { name: "twitter", icon: Twitter, href: "#" },
  { name: "instagram", icon: Instagram, href: "#" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const pathname = usePathname();

  // Extract locale from pathname (e.g., "/en/about" -> "en")
  const locale = pathname.split('/')[1] || 'en';
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('companyName')}</h3>
            <p className="text-gray-300 mb-4">
              {t('companyDescription')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={t(social.name)}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('ourServices')}</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('getInTouch')}</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-gray-300">{t('phoneNumber')}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-gray-300">{t('emailAddress')}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-gray-300">{t('location')}</span>
              </div>
            </div>
            <div className="mt-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                {t('getInTouch')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
