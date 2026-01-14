'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { sendContactEmail } from '@/lib/email';
import { easings, durations } from '@/lib/animation-config';

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

  // Container animation for staggered fields
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  // Individual field animation
  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
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

  if (submitStatus === 'success') {
    return (
      <motion.div
        className="text-center py-8"
        variants={successVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        >
          <CheckCircle className="w-8 h-8 text-green-600" />
        </motion.div>
        <motion.h3
          className="text-xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: durations.normal }}
        >
          Bericht verzonden!
        </motion.h3>
        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: durations.normal }}
        >
          {contact.form.success}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: durations.normal }}
        >
          <Button
            variant="outline"
            onClick={() => setSubmitStatus('idle')}
          >
            Nieuw bericht versturen
          </Button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {submitStatus === 'error' && (
          <motion.div
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3"
            variants={errorVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700 dark:text-red-300">
              {contact.form.error}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name */}
      <motion.div variants={fieldVariants}>
        <label htmlFor="name" className="label">
          {fields.name.label} <span className="text-red-500">*</span>
        </label>
        <motion.input
          {...register('name')}
          type="text"
          id="name"
          placeholder={fields.name.placeholder}
          className={`input ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              className="mt-1 text-sm text-red-500"
              variants={fieldErrorVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Email */}
      <motion.div variants={fieldVariants}>
        <label htmlFor="email" className="label">
          {fields.email.label} <span className="text-red-500">*</span>
        </label>
        <motion.input
          {...register('email')}
          type="email"
          id="email"
          placeholder={fields.email.placeholder}
          className={`input ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              className="mt-1 text-sm text-red-500"
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

      {/* Phone */}
      <motion.div variants={fieldVariants}>
        <label htmlFor="phone" className="label">
          {fields.phone.label}
        </label>
        <motion.input
          {...register('phone')}
          type="tel"
          id="phone"
          placeholder={fields.phone.placeholder}
          className="input"
          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
        />
      </motion.div>

      {/* Subject */}
      <motion.div variants={fieldVariants}>
        <label htmlFor="subject" className="label">
          {fields.subject.label} <span className="text-red-500">*</span>
        </label>
        <motion.select
          {...register('subject')}
          id="subject"
          className={`input ${errors.subject ? 'border-red-500 focus:ring-red-500' : ''}`}
          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
        >
          <option value="">Selecteer een onderwerp</option>
          {fields.subject.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </motion.select>
        <AnimatePresence>
          {errors.subject && (
            <motion.p
              className="mt-1 text-sm text-red-500"
              variants={fieldErrorVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {errors.subject.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Message */}
      <motion.div variants={fieldVariants}>
        <label htmlFor="message" className="label">
          {fields.message.label} <span className="text-red-500">*</span>
        </label>
        <motion.textarea
          {...register('message')}
          id="message"
          rows={5}
          placeholder={fields.message.placeholder}
          className={`input resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
          whileFocus={{ scale: 1.01, boxShadow: '0 0 0 3px rgba(0, 123, 255, 0.1)' }}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              className="mt-1 text-sm text-red-500"
              variants={fieldErrorVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={fieldVariants}>
        <Button
          type="submit"
          size="lg"
          className="w-full"
          isLoading={isSubmitting}
        >
          {contact.form.submit}
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
