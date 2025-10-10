import { google } from 'googleapis';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  content: string;
  timestamp: Date;
  ip: string;
}

export class GoogleSheetsService {
  private sheets;
  private sheetId: string;

  constructor() {
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    this.sheetId = process.env.GOOGLE_SHEETS_SHEET_ID || '';

    if (!privateKey || !clientEmail || !this.sheetId) {
      throw new Error(`Missing Google Sheets configuration: ${!privateKey ? 'PRIVATE_KEY ' : ''}${!clientEmail ? 'CLIENT_EMAIL ' : ''}${!this.sheetId ? 'SHEET_ID' : ''}`);
    }

    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          private_key: privateKey,
          client_email: clientEmail,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      this.sheets = google.sheets({ version: 'v4', auth });
    } catch (error) {
      console.error('Error initializing Google Sheets auth:', error);
      throw new Error('Failed to initialize Google Sheets authentication');
    }
  }

  async appendContactData(data: ContactFormData): Promise<void> {
    try {
      const values = [
        [
          data.name,
          data.email,
          data.phone,
          data.content,
          data.timestamp.toISOString(),
          data.ip,
        ],
      ];

      await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.sheetId,
        range: 'Sheet1!A:F', // Adjust range if your sheet has a different name
        valueInputOption: 'RAW',
        requestBody: {
          values,
        },
      });

      console.log('Data successfully added to Google Sheets');
    } catch (error) {
      console.error('Error adding data to Google Sheets:', error);
      throw error;
    }
  }

  async initializeSheet(): Promise<void> {
    try {
      // Check if headers exist, if not add them
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.sheetId,
        range: 'Sheet1!A1:F1',
      });

      if (!response.data.values || response.data.values.length === 0) {
        // Add headers
        await this.sheets.spreadsheets.values.update({
          spreadsheetId: this.sheetId,
          range: 'Sheet1!A1:F1',
          valueInputOption: 'RAW',
          requestBody: {
            values: [['Name', 'Email', 'Phone', 'Message', 'Timestamp', 'IP']],
          },
        });
        console.log('Headers added to Google Sheets');
      }
    } catch (error) {
      console.error('Error initializing Google Sheets:', error);
      throw error;
    }
  }
}