'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/ui/Button';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail } from '@/lib/email';

// Import data
import pagesData from '@/data/nl/pages.json';

const contactSchema = z.object({
  name: z.string().min(2, 'Naam moet minimaal 2 tekens bevatten'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Selecteer een onderwerp'),
  message: z.string().min(10, 'Bericht moet minimaal 10 tekens bevatten'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { contact } = pagesData;
  const { fields } = contact.form;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const success = await sendContactEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      });

      if (success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Bericht verzonden!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {contact.form.success}
        </p>
        <Button
          variant="outline"
          onClick={() => setSubmitStatus('idle')}
        >
          Nieuw bericht versturen
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus === 'error' && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 dark:text-red-300">
            {contact.form.error}
          </p>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="label">
          {fields.name.label} <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          placeholder={fields.name.placeholder}
          className={`input ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="label">
          {fields.email.label} <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          placeholder={fields.email.placeholder}
          className={`input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="label">
          {fields.phone.label}
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          placeholder={fields.phone.placeholder}
          className="input"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="label">
          {fields.subject.label} <span className="text-red-500">*</span>
        </label>
        <select
          {...register('subject')}
          id="subject"
          className={`input ${errors.subject ? 'border-red-500 focus:ring-red-500' : ''}`}
        >
          <option value="">Selecteer een onderwerp</option>
          {fields.subject.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label">
          {fields.message.label} <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          placeholder={fields.message.placeholder}
          className={`input resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
      >
        {contact.form.submit}
      </Button>
    </form>
  );
};

export default ContactForm;
