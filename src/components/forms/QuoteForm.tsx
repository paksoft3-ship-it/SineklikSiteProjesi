'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sendQuoteEmail, sendQuoteConfirmation } from '@/lib/email';
import { easings, durations } from '@/lib/animation-config';
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

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.normal, ease: easings.smooth },
    },
  };

  // Container animation for staggered fields
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Individual field animation
  const fieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: durations.normal, ease: easings.smooth },
    },
  };

  // Error message animation with shake
  const errorVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      x: [0, -8, 8, -8, 8, 0],
      transition: {
        x: { duration: 0.4, ease: 'easeInOut' },
        opacity: { duration: durations.fast },
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: durations.fast },
    },
  };

  // Field error animation
  const fieldErrorVariants = {
    hidden: { opacity: 0, y: -5, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { duration: durations.fast, ease: easings.smooth },
    },
    exit: {
      opacity: 0,
      y: -5,
      height: 0,
      transition: { duration: durations.fast },
    },
  };

  // Success animation
  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Success icon animation
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  // Section header animation
  const headerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: durations.normal, ease: easings.smooth },
    },
  };

  // Radio button animation
  const radioVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  if (submitStatus === 'success') {
    return (
      <motion.div
        className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 text-center"
        variants={successVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        </motion.div>
        <motion.h3
          className="text-2xl font-bold text-green-700 dark:text-green-300 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: durations.normal }}
        >
          {offerte.success.title}
        </motion.h3>
        <motion.p
          className="text-green-600 dark:text-green-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: durations.normal }}
        >
          {offerte.success.message}
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
      initial="hidden"
      animate="visible"
    >
      {/* Personal Information */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h3
          className="text-lg font-bold text-secondary dark:text-white mb-4"
          variants={headerVariants}
        >
          {offerte.form.sections.personal.title}
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fieldVariants}>
            <label className="label">
              {offerte.form.sections.personal.fields.firstName.label} *
            </label>
            <motion.input
              type="text"
              {...register('firstName')}
              className={cn('input', errors.firstName && 'border-red-500')}
              placeholder={offerte.form.sections.personal.fields.firstName.placeholder}
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
            />
            <AnimatePresence>
              {errors.firstName && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  variants={fieldErrorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.firstName.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div variants={fieldVariants}>
            <label className="label">
              {offerte.form.sections.personal.fields.lastName.label} *
            </label>
            <motion.input
              type="text"
              {...register('lastName')}
              className={cn('input', errors.lastName && 'border-red-500')}
              placeholder={offerte.form.sections.personal.fields.lastName.placeholder}
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
            />
            <AnimatePresence>
              {errors.lastName && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  variants={fieldErrorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.lastName.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div variants={fieldVariants}>
            <label className="label">
              {offerte.form.sections.personal.fields.email.label} *
            </label>
            <motion.input
              type="email"
              {...register('email')}
              className={cn('input', errors.email && 'border-red-500')}
              placeholder={offerte.form.sections.personal.fields.email.placeholder}
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  variants={fieldErrorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div variants={fieldVariants}>
            <label className="label">
              {offerte.form.sections.personal.fields.phone.label} *
            </label>
            <motion.input
              type="tel"
              {...register('phone')}
              className={cn('input', errors.phone && 'border-red-500')}
              placeholder={offerte.form.sections.personal.fields.phone.placeholder}
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
            />
            <AnimatePresence>
              {errors.phone && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  variants={fieldErrorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.phone.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Address Information */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h3
          className="text-lg font-bold text-secondary dark:text-white mb-4"
          variants={headerVariants}
        >
          {offerte.form.sections.address.title}
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="md:col-span-2" variants={fieldVariants}>
            <label className="label">
              {offerte.form.sections.address.fields.street.label} *
            </label>
            <motion.input
              type="text"
              {...register('street')}
              className={cn('input', errors.street && 'border-red-500')}
              placeholder={offerte.form.sections.address.fields.street.placeholder}
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
            />
            <AnimatePresence>
              {errors.street && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  variants={fieldErrorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.street.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div variants={fieldVariants}>
            <label className="label">
              {offerte.form.sections.address.fields.postalCode.label} *
            </label>
            <motion.input
              type="text"
              {...register('postalCode')}
              className={cn('input', errors.postalCode && 'border-red-500')}
              placeholder={offerte.form.sections.address.fields.postalCode.placeholder}
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
            />
            <AnimatePresence>
              {errors.postalCode && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  variants={fieldErrorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.postalCode.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div variants={fieldVariants}>
            <label className="label">
              {offerte.form.sections.address.fields.city.label} *
            </label>
            <motion.input
              type="text"
              {...register('city')}
              className={cn('input', errors.city && 'border-red-500')}
              placeholder={offerte.form.sections.address.fields.city.placeholder}
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
            />
            <AnimatePresence>
              {errors.city && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  variants={fieldErrorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.city.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Product Information */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h3
          className="text-lg font-bold text-secondary dark:text-white mb-4"
          variants={headerVariants}
        >
          {offerte.form.sections.products.title}
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="md:col-span-2" variants={fieldVariants}>
            <label className="label">
              {offerte.form.sections.products.fields.productType.label} *
            </label>
            <motion.select
              {...register('productType')}
              className={cn('input', errors.productType && 'border-red-500')}
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
            >
              <option value="">Selecteer een product</option>
              {offerte.form.sections.products.fields.productType.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </motion.select>
            <AnimatePresence>
              {errors.productType && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  variants={fieldErrorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.productType.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div variants={fieldVariants}>
            <label className="label">
              {offerte.form.sections.products.fields.quantity.label} *
            </label>
            <motion.input
              type="number"
              {...register('quantity', { valueAsNumber: true })}
              className={cn('input', errors.quantity && 'border-red-500')}
              placeholder={offerte.form.sections.products.fields.quantity.placeholder}
              min={1}
              max={99}
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
            />
            <AnimatePresence>
              {errors.quantity && (
                <motion.p
                  className="text-red-500 text-sm mt-1"
                  variants={fieldErrorVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {errors.quantity.message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-4" variants={fieldVariants}>
            <div>
              <label className="label">
                {offerte.form.sections.products.fields.width.label} *
              </label>
              <motion.input
                type="number"
                {...register('width', { valueAsNumber: true })}
                className={cn('input', errors.width && 'border-red-500')}
                placeholder={offerte.form.sections.products.fields.width.placeholder}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
              />
              <AnimatePresence>
                {errors.width && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    variants={fieldErrorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {errors.width.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div>
              <label className="label">
                {offerte.form.sections.products.fields.height.label} *
              </label>
              <motion.input
                type="number"
                {...register('height', { valueAsNumber: true })}
                className={cn('input', errors.height && 'border-red-500')}
                placeholder={offerte.form.sections.products.fields.height.placeholder}
                whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
              />
              <AnimatePresence>
                {errors.height && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    variants={fieldErrorVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {errors.height.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Additional Information */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.h3
          className="text-lg font-bold text-secondary dark:text-white mb-4"
          variants={headerVariants}
        >
          {offerte.form.sections.additional.title}
        </motion.h3>
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fieldVariants}>
            <label className="label">
              {offerte.form.sections.additional.fields.message.label}
            </label>
            <motion.textarea
              {...register('message')}
              className="input min-h-[120px]"
              placeholder={offerte.form.sections.additional.fields.message.placeholder}
              whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
            />
          </motion.div>
          <motion.div variants={fieldVariants}>
            <label className="label">
              {offerte.form.sections.additional.fields.preferredContact.label}
            </label>
            <div className="flex flex-wrap gap-4">
              {offerte.form.sections.additional.fields.preferredContact.options.map((option, index) => (
                <motion.label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                  variants={radioVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.input
                    type="radio"
                    {...register('preferredContact')}
                    value={option}
                    className="w-4 h-4 text-primary"
                  />
                  <span className="text-gray-700 dark:text-gray-300">{option}</span>
                </motion.label>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Privacy Checkbox */}
      <motion.div
        className="flex items-start gap-3"
        variants={fieldVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.input
          type="checkbox"
          {...register('privacyAccepted')}
          className="w-5 h-5 mt-0.5 text-primary rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <label className="text-sm text-gray-600 dark:text-gray-400">
          {offerte.form.privacy}{' '}
          <a href="/privacy" className="text-primary hover:underline">
            Lees ons privacybeleid
          </a>
        </label>
      </motion.div>
      <AnimatePresence>
        {errors.privacyAccepted && (
          <motion.p
            className="text-red-500 text-sm"
            variants={fieldErrorVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {errors.privacyAccepted.message}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {submitStatus === 'error' && (
          <motion.div
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-center gap-3"
            variants={errorVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AlertCircle className="w-5 h-5 text-red-500" />
            <p className="text-red-600 dark:text-red-400">
              Er is iets misgegaan. Probeer het opnieuw of neem telefonisch contact op.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 10px 30px -10px rgba(0, 123, 255, 0.4)' } : undefined}
        whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: durations.normal, ease: easings.smooth }}
      >
        <AnimatePresence mode="wait">
          {isSubmitting ? (
            <motion.span
              key="loading"
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              >
                <Loader2 className="w-5 h-5 mr-2" />
              </motion.span>
              Bezig met verzenden...
            </motion.span>
          ) : (
            <motion.span
              key="submit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {offerte.form.submit}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.form>
  );
};

export default QuoteForm;
