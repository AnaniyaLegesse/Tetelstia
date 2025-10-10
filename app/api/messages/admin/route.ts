import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://ananiyalegesse1:a918Pjk1jvGLLYJT@tilacluster.lzrq8ny.mongodb.net/?retryWrites=true&w=majority&appName=TilaCluster';
const DATABASE_NAME = 'teelestai_ccs';

export async function GET(request: NextRequest) {
  let client: MongoClient | null = null;

  try {
    // Add authentication check here
    // const session = await getServerSession(authOptions);
    // if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    client = new MongoClient(MONGODB_URI);
    await client.connect();
    
    const database = client.db(DATABASE_NAME);
    const messagesCollection = database.collection('messages');

    const messages = await messagesCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    console.log("request:", request);
    return NextResponse.json({ messages });

  } catch (error) {
    console.error('Error fetching messages:', error);
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