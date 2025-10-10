import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
// import { GoogleSheetsService } from '@/lib/googleSheets';

// MongoDB connection string
const MONGODB_URI = 'mongodb+srv://ananiyalegesse1:a918Pjk1jvGLLYJT@tilacluster.lzrq8ny.mongodb.net/?retryWrites=true&w=majority&appName=TilaCluster';
const DATABASE_NAME = 'teelestai_ccs';


type CustomNextRequest = NextRequest & {
  ip: string;
};

export async function POST(request: NextRequest) {
    
   let client: MongoClient | null = null;

  try {
    const body = await request.json();
    const { name, email, phone, content } = body;

    // Validation
    if (!name || !email || !content) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    
    const database = client.db(DATABASE_NAME);
    const messagesCollection = database.collection('messages');

    const timestamp = new Date();
    const ipAddress = (request as CustomNextRequest).ip || (request.headers.get('x-forwarded-for') || 'unknown');

    // Create message document
    const newMessage = {
      name,
      email,
      phone: phone || '',
      content,
      createdAt: timestamp,
      read: false,
      ip: ipAddress
    };

    // Insert into database
    const result = await messagesCollection.insertOne(newMessage);

    // TODO: Google Sheets integration - temporarily disabled
    // Save to Google Sheets (don't let this fail the main operation)
    /*
    try {
      // Only attempt Google Sheets if all required env vars are present
      if (process.env.GOOGLE_SHEETS_PRIVATE_KEY && 
          process.env.GOOGLE_SHEETS_CLIENT_EMAIL && 
          process.env.GOOGLE_SHEETS_SHEET_ID) {
        
        const { GoogleSheetsService } = await import('@/lib/googleSheets');
        const googleSheetsService = new GoogleSheetsService();
        await googleSheetsService.appendContactData({
          name,
          email,
          phone: phone || '',
          content,
          timestamp,
          ip: ipAddress
        });
        console.log('Successfully saved to Google Sheets');
      } else {
        console.log('Google Sheets integration skipped - missing environment variables');
      }
    } catch (sheetsError) {
      console.error('Failed to save to Google Sheets:', sheetsError);
      // Continue execution - don't fail the main operation
    }
    */

    return NextResponse.json(
      { 
        message: 'Message sent successfully!', 
        id: result.insertedId 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  } finally {
    if (client) {
      await client.close();
    }
  }
}