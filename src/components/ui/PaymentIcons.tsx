import React from 'react';

const paymentMethods = [
    { name: 'iDEAL', icon: 'fa-building-columns', color: 'text-[#CC0066]' },
    { name: 'Visa', icon: 'fa-cc-visa', color: 'text-[#1A1F71]' },
    { name: 'MasterCard', icon: 'fa-cc-mastercard', color: 'text-[#EB001B]' },
    { name: 'PayPal', icon: 'fa-cc-paypal', color: 'text-[#003087]' },
    { name: 'Apple Pay', icon: 'fa-cc-apple-pay', color: 'text-black' },
    { name: 'Amex', icon: 'fa-cc-amex', color: 'text-[#006FCF]' },
];

export const PaymentIcons = () => {
    return (
        <div className="flex flex-wrap items-center justify-end gap-3 mt-4 w-full">
            {paymentMethods.map((method) => (
                <div
                    key={method.name}
                    className="h-8 w-12 bg-white rounded flex items-center justify-center border border-gray-200 dark:border-gray-700"
                    title={method.name}
                >
                    <i className={`fab ${method.icon} text-xl ${method.color}`}></i>
                </div>
            ))}
        </div>
    );
};
