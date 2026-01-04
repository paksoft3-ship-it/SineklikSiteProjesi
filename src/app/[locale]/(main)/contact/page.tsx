import { Metadata } from 'next';
import { Link } from '@/navigation';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

// Import data
import pagesData from '@/data/nl/pages.json';

export const metadata: Metadata = {
  title: pagesData.contact.metaTitle,
  description: pagesData.contact.metaDescription,
};

export default function ContactPage() {
  const { contact } = pagesData;

  return (
    <div className="bg-bg-light-1 dark:bg-bg-dark-1">
      {/* Hero Section */}
      <section className="bg-secondary dark:bg-bg-dark-2 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {contact.hero.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {contact.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-8">
                Contactgegevens
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {contact.info.address.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                      {contact.info.address.value}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {contact.info.phone.label}
                    </h3>
                    <a
                      href={`tel:${contact.info.phone.value.replace(/\s/g, '')}`}
                      className="text-primary hover:underline"
                    >
                      {contact.info.phone.value}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {contact.info.email.label}
                    </h3>
                    <a
                      href={`mailto:${contact.info.email.value}`}
                      className="text-primary hover:underline"
                    >
                      {contact.info.email.value}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {contact.info.whatsapp.label}
                    </h3>
                    <a
                      href={`https://wa.me/${contact.info.whatsapp.value.replace(/\s/g, '').replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      {contact.info.whatsapp.value}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {contact.info.workingHours.label}
                    </h3>
                    <ul className="space-y-1">
                      {contact.info.workingHours.days.map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between text-gray-600 dark:text-gray-400"
                        >
                          <span>{item.day}</span>
                          <span className="ml-8">{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 dark:bg-gray-700 rounded-2xl h-64 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Google Maps integratie
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
                <h2 className="font-display text-2xl font-bold text-secondary dark:text-white mb-6">
                  {contact.form.title}
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
