function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var name = data.name;
  var email = data.email;
  var location = data.location;
  var item = data.item;
  var notes = data.notes;

  // Email to customer
  GmailApp.sendEmail(email, 'SkyReach Order Confirmation',
    'Thank you for using SkyReach! Your order will be here in about 10 minutes.');

  // Notification to owner
  var ownerEmail = 'owner@example.com';
  var message = 'New order from ' + name + ' at ' + location + '\nItem: ' + item + '\nNotes: ' + notes;
  GmailApp.sendEmail(ownerEmail, 'New SkyReach Order', message);

  var output = ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
  output.append("\n"); // ensure valid response
  try {
    output.setHeader('Access-Control-Allow-Origin', '*');
  } catch (e) {
    // setHeader may not be available in some contexts
  }
  return output;
}
