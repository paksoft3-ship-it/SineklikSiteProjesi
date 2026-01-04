import React from 'react';
import Image from 'next/image';

export const PaymentIcons = () => {
    return (
        <div className="flex flex-wrap items-center justify-end gap-3 mt-4 w-full">
            {/* PayPal */}
            <div className="h-6 sm:h-7 bg-white rounded flex items-center justify-center border border-gray-200 dark:border-gray-700" title="PayPal">
                <Image
                    src="/images/payments/paypal.png"
                    alt="PayPal"
                    width={40}
                    height={28}
                    className="h-full w-auto object-contain p-1"
                />
            </div>

            {/* Visa */}
            <div className="h-6 sm:h-7 bg-white rounded flex items-center justify-center p-0.5 border border-gray-200 dark:border-gray-700" title="Visa">
                <Image
                    src="/images/payments/visa.png"
                    alt="Visa"
                    width={40}
                    height={28}
                    className="h-full w-auto object-contain"
                />
            </div>

            {/* MasterCard */}
            <div className="h-6 sm:h-7 bg-white rounded flex items-center justify-center border border-gray-200 dark:border-gray-700" title="MasterCard">
                <Image
                    src="/images/payments/mastercard.png"
                    alt="MasterCard"
                    width={40}
                    height={28}
                    className="h-full w-auto object-contain"
                />
            </div>

            {/* Amex */}
            <div className="h-6 sm:h-7 bg-white rounded flex items-center justify-center border border-gray-200 dark:border-gray-700" title="American Express">
                <Image
                    src="/images/payments/amex.png"
                    alt="American Express"
                    width={40}
                    height={28}
                    className="h-full w-auto object-contain"
                />
            </div>

            {/* Apple Pay */}
            <div className="h-6 sm:h-7 bg-white rounded flex items-center justify-center border border-gray-200 dark:border-gray-700" title="Apple Pay">
                <Image
                    src="/images/payments/applepay.png"
                    alt="Apple Pay"
                    width={40}
                    height={28}
                    className="h-full w-auto object-contain p-0.5"
                />
            </div>

            {/* Stripe */}
            <div className="h-6 sm:h-7 bg-white rounded flex items-center justify-center border border-gray-200 dark:border-gray-700" title="Stripe">
                <Image
                    src="/images/payments/stripe.png"
                    alt="Stripe"
                    width={40}
                    height={28}
                    className="h-full w-auto object-contain p-1"
                />
            </div>
        </div>
    );
};
