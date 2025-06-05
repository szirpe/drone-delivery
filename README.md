# SkyReach Drone Delivery

This repository contains a simple demo website for SkyReach, an early-stage drone delivery company focused on lightweight skincare products.

## Website

Open `index.html` in your browser to see the landing page. The order form posts to a Google Apps Script endpoint defined in `script.js`.

## Google Apps Script

The backend expects JSON data with the following fields:

- `name`
- `email`
- `product`
- `notes`

When a request is received, it sends an order confirmation to the customer and notifies the site owner about the order.
