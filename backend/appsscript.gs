function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var name = data.name;
  var email = data.email;
  var product = data.product;
  var notes = data.notes;

  // Email to customer
  GmailApp.sendEmail(email, 'SkyReach Order Confirmation',
    'Thank you for using SkyReach! Your order will be here in about 10 minutes.');

  // Notification to owner
  var ownerEmail = 'owner@example.com';
  var message = 'New order from ' + name + ': ' + product + '.\nNotes: ' + notes;
  GmailApp.sendEmail(ownerEmail, 'New SkyReach Order', message);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
