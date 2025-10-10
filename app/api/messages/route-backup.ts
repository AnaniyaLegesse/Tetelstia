import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

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

    // Create message document
    const newMessage = {
      name,
      email,
      phone: phone || '',
      content,
      createdAt: new Date(),
      read: false,
      ip: (request as CustomNextRequest).ip || (request.headers.get('x-forwarded-for') || 'unknown')
    };

    // Insert into database
    const result = await messagesCollection.insertOne(newMessage);

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