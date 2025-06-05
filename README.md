# SkyReach Drone Delivery

This repository contains a simple demo website for a drone delivery business.

## Website

Open `index.html` in your browser to see the landing page. Update
`script.js` with your deployed Google Apps Script URL so form submissions
reach your backend.

## Google Apps Script

The script under `backend/appsscript.gs` expects JSON data with the
following fields:

- `name`
- `email`
- `location`
- `notes`

When a request is received, it sends an order confirmation to the
customer and notifies the site owner about the request.
