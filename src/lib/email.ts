import emailjs from '@emailjs/browser';

// EmailJS Configuration - Replace with your actual IDs
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_QUOTE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_QUOTE || 'quote_template';
const EMAILJS_TEMPLATE_CONTACT = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT || 'contact_template';
const EMAILJS_TEMPLATE_ORDER = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ORDER || 'order_template';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Email templates interfaces
interface QuoteEmailData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  productType: string;
  dimensions: string;
  quantity: number;
  options: string;
  message: string;
  estimatedPrice: string;
  preferredContact: string;
}

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

interface OrderConfirmationData {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  items: string;
  subtotal: string;
  shipping: string;
  vat: string;
  total: string;
  paymentMethod: string;
  estimatedDelivery: string;
}

/**
 * Send quote request email
 */
export const sendQuoteEmail = async (data: QuoteEmailData): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_QUOTE,
      {
        to_email: 'info@windowspecialist.nl', // Admin email
        customer_name: data.customerName,
        customer_email: data.customerEmail,
        customer_phone: data.customerPhone,
        customer_address: data.customerAddress,
        product_type: data.productType,
        dimensions: data.dimensions,
        quantity: data.quantity,
        options: data.options,
        message: data.message,
        estimated_price: data.estimatedPrice,
        preferred_contact: data.preferredContact,
        date: new Date().toLocaleDateString('nl-NL'),
      },
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Quote email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send quote email:', error);
    return false;
  }
};

/**
 * Send quote confirmation to customer
 */
export const sendQuoteConfirmation = async (data: QuoteEmailData): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_QUOTE,
      {
        to_email: data.customerEmail,
        customer_name: data.customerName,
        is_confirmation: true,
        product_type: data.productType,
        dimensions: data.dimensions,
        quantity: data.quantity,
        estimated_price: data.estimatedPrice,
        date: new Date().toLocaleDateString('nl-NL'),
      },
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Quote confirmation sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send quote confirmation:', error);
    return false;
  }
};

/**
 * Send contact form email
 */
export const sendContactEmail = async (data: ContactEmailData): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_CONTACT,
      {
        to_email: 'info@windowspecialist.nl',
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone || 'Niet opgegeven',
        subject: data.subject,
        message: data.message,
        date: new Date().toLocaleDateString('nl-NL'),
      },
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Contact email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
};

/**
 * Send order confirmation email
 */
export const sendOrderConfirmation = async (data: OrderConfirmationData): Promise<boolean> => {
  try {
    // Send to admin
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ORDER,
      {
        to_email: 'orders@windowspecialist.nl',
        order_number: data.orderNumber,
        customer_name: data.customerName,
        customer_email: data.customerEmail,
        customer_phone: data.customerPhone,
        shipping_address: data.shippingAddress,
        items: data.items,
        subtotal: data.subtotal,
        shipping: data.shipping,
        vat: data.vat,
        total: data.total,
        payment_method: data.paymentMethod,
        estimated_delivery: data.estimatedDelivery,
        is_admin: true,
      },
      EMAILJS_PUBLIC_KEY
    );
    
    // Send confirmation to customer
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ORDER,
      {
        to_email: data.customerEmail,
        order_number: data.orderNumber,
        customer_name: data.customerName,
        items: data.items,
        subtotal: data.subtotal,
        shipping: data.shipping,
        vat: data.vat,
        total: data.total,
        payment_method: data.paymentMethod,
        estimated_delivery: data.estimatedDelivery,
        is_admin: false,
      },
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Order confirmation sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send order confirmation:', error);
    return false;
  }
};

/**
 * Send newsletter subscription email
 */
export const sendNewsletterWelcome = async (email: string, name?: string): Promise<boolean> => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      'newsletter_template',
      {
        to_email: email,
        customer_name: name || 'Beste klant',
        date: new Date().toLocaleDateString('nl-NL'),
      },
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Newsletter welcome sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send newsletter welcome:', error);
    return false;
  }
};
