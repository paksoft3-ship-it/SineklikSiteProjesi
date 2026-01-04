'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sendQuoteEmail, sendQuoteConfirmation } from '@/lib/email';
import pagesData from '@/data/nl/pages.json';

// Validation schema
const quoteSchema = z.object({
  firstName: z.string().min(2, 'Voornaam is verplicht'),
  lastName: z.string().min(2, 'Achternaam is verplicht'),
  email: z.string().email('Ongeldig e-mailadres'),
  phone: z.string().min(10, 'Ongeldig telefoonnummer'),
  street: z.string().min(5, 'Adres is verplicht'),
  postalCode: z.string().regex(/^[1-9][0-9]{3}\s?[A-Za-z]{2}$/, 'Ongeldige postcode'),
  city: z.string().min(2, 'Plaats is verplicht'),
  productType: z.string().min(1, 'Selecteer een producttype'),
  quantity: z.number().min(1, 'Minimaal 1 product').max(99, 'Maximaal 99 producten'),
  width: z.number().min(10, 'Minimale breedte is 10 cm').max(500, 'Maximale breedte is 500 cm'),
  height: z.number().min(10, 'Minimale hoogte is 10 cm').max(500, 'Maximale hoogte is 500 cm'),
  message: z.string().optional(),
  preferredContact: z.enum(['E-mail', 'Telefoon', 'WhatsApp']),
  privacyAccepted: z.boolean().refine(val => val === true, 'U moet akkoord gaan met het privacybeleid'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { offerte } = pagesData;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      quantity: 1,
      preferredContact: 'E-mail',
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare email data
      const emailData = {
        customerName: `${data.firstName} ${data.lastName}`,
        customerEmail: data.email,
        customerPhone: data.phone,
        customerAddress: `${data.street}, ${data.postalCode} ${data.city}`,
        productType: data.productType,
        dimensions: `${data.width} x ${data.height} cm`,
        quantity: data.quantity,
        options: '',
        message: data.message || 'Geen opmerkingen',
        estimatedPrice: 'Op aanvraag',
        preferredContact: data.preferredContact,
      };

      // Send email to admin
      const adminEmailSent = await sendQuoteEmail(emailData);
      
      // Send confirmation to customer
      if (adminEmailSent) {
        await sendQuoteConfirmation(emailData);
      }

      if (adminEmailSent) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2">
          {offerte.success.title}
        </h3>
        <p className="text-green-600 dark:text-green-400">
          {offerte.success.message}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-bold text-secondary dark:text-white mb-4">
          {offerte.form.sections.personal.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">
              {offerte.form.sections.personal.fields.firstName.label} *
            </label>
            <input
              type="text"
              {...register('firstName')}
              className={cn('input', errors.firstName && 'border-red-500')}
              placeholder={offerte.form.sections.personal.fields.firstName.placeholder}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              {offerte.form.sections.personal.fields.lastName.label} *
            </label>
            <input
              type="text"
              {...register('lastName')}
              className={cn('input', errors.lastName && 'border-red-500')}
              placeholder={offerte.form.sections.personal.fields.lastName.placeholder}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              {offerte.form.sections.personal.fields.email.label} *
            </label>
            <input
              type="email"
              {...register('email')}
              className={cn('input', errors.email && 'border-red-500')}
              placeholder={offerte.form.sections.personal.fields.email.placeholder}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              {offerte.form.sections.personal.fields.phone.label} *
            </label>
            <input
              type="tel"
              {...register('phone')}
              className={cn('input', errors.phone && 'border-red-500')}
              placeholder={offerte.form.sections.personal.fields.phone.placeholder}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div>
        <h3 className="text-lg font-bold text-secondary dark:text-white mb-4">
          {offerte.form.sections.address.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="label">
              {offerte.form.sections.address.fields.street.label} *
            </label>
            <input
              type="text"
              {...register('street')}
              className={cn('input', errors.street && 'border-red-500')}
              placeholder={offerte.form.sections.address.fields.street.placeholder}
            />
            {errors.street && (
              <p className="text-red-500 text-sm mt-1">{errors.street.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              {offerte.form.sections.address.fields.postalCode.label} *
            </label>
            <input
              type="text"
              {...register('postalCode')}
              className={cn('input', errors.postalCode && 'border-red-500')}
              placeholder={offerte.form.sections.address.fields.postalCode.placeholder}
            />
            {errors.postalCode && (
              <p className="text-red-500 text-sm mt-1">{errors.postalCode.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              {offerte.form.sections.address.fields.city.label} *
            </label>
            <input
              type="text"
              {...register('city')}
              className={cn('input', errors.city && 'border-red-500')}
              placeholder={offerte.form.sections.address.fields.city.placeholder}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div>
        <h3 className="text-lg font-bold text-secondary dark:text-white mb-4">
          {offerte.form.sections.products.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="label">
              {offerte.form.sections.products.fields.productType.label} *
            </label>
            <select
              {...register('productType')}
              className={cn('input', errors.productType && 'border-red-500')}
            >
              <option value="">Selecteer een product</option>
              {offerte.form.sections.products.fields.productType.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.productType && (
              <p className="text-red-500 text-sm mt-1">{errors.productType.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              {offerte.form.sections.products.fields.quantity.label} *
            </label>
            <input
              type="number"
              {...register('quantity', { valueAsNumber: true })}
              className={cn('input', errors.quantity && 'border-red-500')}
              placeholder={offerte.form.sections.products.fields.quantity.placeholder}
              min={1}
              max={99}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">
                {offerte.form.sections.products.fields.width.label} *
              </label>
              <input
                type="number"
                {...register('width', { valueAsNumber: true })}
                className={cn('input', errors.width && 'border-red-500')}
                placeholder={offerte.form.sections.products.fields.width.placeholder}
              />
              {errors.width && (
                <p className="text-red-500 text-sm mt-1">{errors.width.message}</p>
              )}
            </div>
            <div>
              <label className="label">
                {offerte.form.sections.products.fields.height.label} *
              </label>
              <input
                type="number"
                {...register('height', { valueAsNumber: true })}
                className={cn('input', errors.height && 'border-red-500')}
                placeholder={offerte.form.sections.products.fields.height.placeholder}
              />
              {errors.height && (
                <p className="text-red-500 text-sm mt-1">{errors.height.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h3 className="text-lg font-bold text-secondary dark:text-white mb-4">
          {offerte.form.sections.additional.title}
        </h3>
        <div className="space-y-4">
          <div>
            <label className="label">
              {offerte.form.sections.additional.fields.message.label}
            </label>
            <textarea
              {...register('message')}
              className="input min-h-[120px]"
              placeholder={offerte.form.sections.additional.fields.message.placeholder}
            />
          </div>
          <div>
            <label className="label">
              {offerte.form.sections.additional.fields.preferredContact.label}
            </label>
            <div className="flex flex-wrap gap-4">
              {offerte.form.sections.additional.fields.preferredContact.options.map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    {...register('preferredContact')}
                    value={option}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="text-gray-700 dark:text-gray-300">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          {...register('privacyAccepted')}
          className="w-5 h-5 mt-0.5 text-primary rounded"
        />
        <label className="text-sm text-gray-600 dark:text-gray-400">
          {offerte.form.privacy}{' '}
          <a href="/privacy" className="text-primary hover:underline">
            Lees ons privacybeleid
          </a>
        </label>
      </div>
      {errors.privacyAccepted && (
        <p className="text-red-500 text-sm">{errors.privacyAccepted.message}</p>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-red-600 dark:text-red-400">
            Er is iets misgegaan. Probeer het opnieuw of neem telefonisch contact op.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Bezig met verzenden...
          </>
        ) : (
          offerte.form.submit
        )}
      </button>
    </form>
  );
};

export default QuoteForm;
