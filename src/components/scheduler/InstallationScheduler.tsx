'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface DaySlots {
  date: Date;
  slots: TimeSlot[];
}

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const times = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];

  times.forEach((time, idx) => {
    slots.push({
      id: `slot-${idx}`,
      time,
      available: Math.random() > 0.3, // 70% available
    });
  });

  return slots;
};

const generateCalendarDays = (startDate: Date): DaySlots[] => {
  const days: DaySlots[] = [];
  const current = new Date(startDate);

  for (let i = 0; i < 14; i++) {
    const date = new Date(current);
    date.setDate(current.getDate() + i);

    // Skip weekends
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      days.push({
        date,
        slots: generateTimeSlots(),
      });
    }
  }

  return days;
};

interface InstallationSchedulerProps {
  onSchedule?: (date: Date, time: string, details: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  notes: string;
}

export default function InstallationScheduler({ onSchedule }: InstallationSchedulerProps) {
  const [step, setStep] = useState<'date' | 'time' | 'details' | 'confirm'>('date');
  const [selectedDate, setSelectedDate] = useState<DaySlots | null>(null);
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    city: '',
    notes: '',
  });

  const calendarDays = generateCalendarDays(new Date());

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('nl-NL', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    });
  };

  const formatFullDate = (date: Date) => {
    return date.toLocaleDateString('nl-NL', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      onSchedule?.(selectedDate.date, selectedTime.time, formData);
      setStep('confirm');
    }
  };

  const steps = [
    { id: 'date', label: 'Datum', icon: 'fa-calendar' },
    { id: 'time', label: 'Tijd', icon: 'fa-clock' },
    { id: 'details', label: 'Gegevens', icon: 'fa-user' },
    { id: 'confirm', label: 'Bevestiging', icon: 'fa-check' },
  ];

  const currentStepIndex = steps.findIndex((s) => s.id === step);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-primary px-6 py-4">
        <h3 className="font-display text-xl font-bold text-white">
          <i className="fas fa-calendar-check mr-2"></i>
          Montage Afspraak Plannen
        </h3>
        <p className="text-blue-100 text-sm mt-1">
          Selecteer een datum en tijd voor professionele montage
        </p>
      </div>

      {/* Progress Steps */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex items-center">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  idx <= currentStepIndex
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                }`}
                animate={{
                  scale: step === s.id ? 1.1 : 1,
                }}
              >
                {idx < currentStepIndex ? (
                  <i className="fas fa-check"></i>
                ) : (
                  <i className={`fas ${s.icon}`}></i>
                )}
              </motion.div>
              {idx < steps.length - 1 && (
                <div
                  className={`w-12 md:w-24 h-1 mx-2 rounded ${
                    idx < currentStepIndex
                      ? 'bg-primary'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {/* Step 1: Date Selection */}
          {step === 'date' && (
            <motion.div
              key="date"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Kies een datum
              </h4>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {calendarDays.map((day, idx) => {
                  const hasAvailability = day.slots.some((s) => s.available);
                  return (
                    <motion.button
                      key={idx}
                      onClick={() => {
                        if (hasAvailability) {
                          setSelectedDate(day);
                          setStep('time');
                        }
                      }}
                      disabled={!hasAvailability}
                      className={`p-3 rounded-xl text-center transition ${
                        selectedDate?.date.getTime() === day.date.getTime()
                          ? 'bg-primary text-white'
                          : hasAvailability
                          ? 'bg-gray-100 dark:bg-gray-700 hover:bg-primary/10 text-gray-700 dark:text-gray-300'
                          : 'bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-600 cursor-not-allowed'
                      }`}
                      whileHover={hasAvailability ? { scale: 1.05 } : {}}
                      whileTap={hasAvailability ? { scale: 0.95 } : {}}
                    >
                      <div className="text-xs opacity-70">
                        {day.date.toLocaleDateString('nl-NL', { weekday: 'short' })}
                      </div>
                      <div className="text-lg font-bold">
                        {day.date.getDate()}
                      </div>
                      <div className="text-xs opacity-70">
                        {day.date.toLocaleDateString('nl-NL', { month: 'short' })}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 2: Time Selection */}
          {step === 'time' && selectedDate && (
            <motion.div
              key="time"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Kies een tijdstip
                  </h4>
                  <p className="text-sm text-gray-500">{formatFullDate(selectedDate.date)}</p>
                </div>
                <button
                  onClick={() => setStep('date')}
                  className="text-primary text-sm hover:underline"
                >
                  <i className="fas fa-arrow-left mr-1"></i> Andere datum
                </button>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {selectedDate.slots.map((slot) => (
                  <motion.button
                    key={slot.id}
                    onClick={() => {
                      if (slot.available) {
                        setSelectedTime(slot);
                        setStep('details');
                      }
                    }}
                    disabled={!slot.available}
                    className={`p-3 rounded-xl text-center transition ${
                      selectedTime?.id === slot.id
                        ? 'bg-primary text-white'
                        : slot.available
                        ? 'bg-gray-100 dark:bg-gray-700 hover:bg-primary/10 text-gray-700 dark:text-gray-300'
                        : 'bg-gray-50 dark:bg-gray-800 text-gray-300 dark:text-gray-600 line-through cursor-not-allowed'
                    }`}
                    whileHover={slot.available ? { scale: 1.05 } : {}}
                    whileTap={slot.available ? { scale: 0.95 } : {}}
                  >
                    <i className="fas fa-clock text-xs mr-1"></i>
                    {slot.time}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Details Form */}
          {step === 'details' && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Uw gegevens
                </h4>
                <button
                  onClick={() => setStep('time')}
                  className="text-primary text-sm hover:underline"
                >
                  <i className="fas fa-arrow-left mr-1"></i> Terug
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Naam *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Telefoon *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Adres *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Postcode *
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Plaats *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Opmerkingen
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {step === 'confirm' && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <motion.div
                className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <motion.i
                  className="fas fa-check text-3xl text-green-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </motion.div>
              <h4 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Afspraak bevestigd!
              </h4>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Uw montage-afspraak is ingepland voor:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 inline-block mb-6">
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  {selectedDate && formatFullDate(selectedDate.date)}
                </p>
                <p className="text-primary font-semibold">
                  {selectedTime?.time} uur
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                U ontvangt een bevestiging per email op {formData.email}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      {step !== 'confirm' && (
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
          <div className="text-sm text-gray-500">
            {selectedDate && selectedTime && (
              <span>
                <i className="fas fa-calendar mr-1"></i>
                {formatDate(selectedDate.date)} om {selectedTime.time}
              </span>
            )}
          </div>
          {step === 'details' && (
            <motion.button
              onClick={handleSubmit}
              className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Bevestig afspraak
            </motion.button>
          )}
        </div>
      )}
    </div>
  );
}
