// Test script to verify Google Sheets integration
// Run with: node scripts/test-sheets.js

const { GoogleSheetsService } = require('../lib/googleSheets.ts');

async function testGoogleSheets() {
  try {
    console.log('Testing Google Sheets integration...');
    
    const sheetsService = new GoogleSheetsService();
    
    // Initialize sheet with headers
    await sheetsService.initializeSheet();
    console.log('✅ Sheet initialized successfully');
    
    // Test adding data
    await sheetsService.appendContactData({
      name: 'Test User',
      email: 'test@example.com',
      phone: '+1234567890',
      content: 'This is a test message',
      timestamp: new Date(),
      ip: '127.0.0.1'
    });
    console.log('✅ Test data added successfully');
    
    console.log('🎉 Google Sheets integration is working!');
  } catch (error) {
    console.error('❌ Error testing Google Sheets:', error.message);
  }
}

testGoogleSheets();