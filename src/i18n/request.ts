import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from '../config';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;
    console.log("getRequestConfig resolved locale:", locale);

    // Validate that the incoming `locale` parameter is valid
    if (!locale || !locales.includes(locale as any)) {
        locale = 'nl';
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
