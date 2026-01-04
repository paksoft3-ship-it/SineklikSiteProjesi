import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const quoteSchema = z.object({
  customer: z.object({
    firstName: z.string().min(2, 'Voornaam is verplicht'),
    lastName: z.string().min(2, 'Achternaam is verplicht'),
    email: z.string().email('Ongeldig e-mailadres'),
    phone: z.string().min(10, 'Ongeldig telefoonnummer'),
    address: z.object({
      street: z.string().min(5, 'Adres is verplicht'),
      postalCode: z.string().regex(/^[1-9][0-9]{3}\s?[A-Za-z]{2}$/, 'Ongeldige postcode'),
      city: z.string().min(2, 'Plaats is verplicht'),
      country: z.string().default('Nederland'),
    }),
  }),
  items: z.array(z.object({
    productId: z.string(),
    productName: z.string(),
    quantity: z.number().min(1),
    dimensions: z.object({
      width: z.number().min(10),
      height: z.number().min(10),
    }),
    options: z.record(z.string()),
    price: z.number(),
  })),
  message: z.string().optional(),
  preferredContact: z.enum(['email', 'phone', 'whatsapp']),
  totalPrice: z.number(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = quoteSchema.parse(body);
    
    // Generate quote ID
    const quoteId = `Q-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    
    // In a real application, you would:
    // 1. Save the quote to a database
    // 2. Send notification email to admin
    // 3. Send confirmation email to customer
    
    // For now, we'll simulate the response
    const quote = {
      id: quoteId,
      ...validatedData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    // Log the quote (in production, save to database)
    console.log('New quote request:', quote);
    
    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Offerte aanvraag succesvol ontvangen',
        data: {
          quoteId: quote.id,
          estimatedResponse: '24 uur',
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Quote API error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validatiefout',
          errors: error.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      {
        success: false,
        message: 'Er is een fout opgetreden. Probeer het opnieuw.',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // This endpoint could be used to retrieve quotes (for admin panel)
  // For now, return method not allowed for unauthenticated requests
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  );
}
