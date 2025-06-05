# SkyReach Drone Delivery

This repository contains a simple demo website for a drone delivery business.

## Website

Open `index.html` in your browser to see the landing page.
The site is preconfigured to submit orders to the included Google Apps
Script endpoint. If you fork this project, edit `script.js` and change
the `APPS_SCRIPT_URL` constant to your own deployed Apps Script URL.

## Google Apps Script

The script under `backend/appsscript.gs` expects JSON data with the
following fields:

- `name`
- `email`
- `location`
- `notes`
- `item`

When a request is received, it sends an order confirmation to the
customer and notifies the site owner about the request.

## Troubleshooting

If you see "There was an issue submitting your order" in the browser,
check the following:

1. The `APPS_SCRIPT_URL` constant in `script.js` is set to your Apps
   Script deployment URL.
2. Your Apps Script web app is deployed with permissions allowing
   anyone to access the script.

The order form includes a dropdown with common skin care products. Feel free
to modify `index.html` to adjust the available items or prices.
