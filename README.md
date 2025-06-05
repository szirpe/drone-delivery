# SkyReach Drone Delivery

This repository contains a simple demo website for a drone delivery business.

## Website

Open `index.html` in your browser to see the landing page.
Before submitting orders, edit `script.js` and replace the
`APPS_SCRIPT_URL` constant with the URL of your deployed Google Apps
Script Web App. If this value is left as the default placeholder, the
site will show an error when submitting the form.

## Google Apps Script

The script under `backend/appsscript.gs` expects JSON data with the
following fields:

- `name`
- `email`
- `location`
- `notes`

When a request is received, it sends an order confirmation to the
customer and notifies the site owner about the request.

## Troubleshooting

If you see "There was an issue submitting your order" in the browser,
check the following:

1. The `APPS_SCRIPT_URL` constant in `script.js` is set to your Apps
   Script deployment URL.
2. Your Apps Script web app is deployed with permissions allowing
   anyone to access the script.
