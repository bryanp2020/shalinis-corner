  <!--
  ==============================================
  BACKEND/AUTOMATION NOTES (copy into your README)
  ==============================================
  1) Replace YOUR_PAYPAL_CLIENT_ID in the SDK script tag.
  2) Create three PayPal Subscription Plans (Starter $49.99/mo, Pro $79.99/mo, Private $179.99/mo). Replace the placeholders in PAYPAL_PLANS above.
  3) Set WEBHOOK_URL to your automation endpoint (Make.com, Zapier, or your own serverless function):
     Expected payload from PayPal buttons: { source:'paypal', type:'subscription', plan:'Starter|Pro|Private', subscriptionID:'...' , consent:true }
     Expected payload from Zelle form:     { source:'zelle', type:'manual_confirm', name:'', email:'', txn:'', plan:'', consent:true }
  4) In your automation, send TWO emails after payment/confirmation:
     a) Order Confirmation (immediately)
     b) Thank You + Upcoming Menu & Ingredient List (immediately; also record email consent in your ESP)
  5) Store contacts in Mailchimp/ConvertKit/HubSpot and tag by plan. Use the consent flag to subscribe to marketing.
  6) For video delivery, schedule Google Meet links and send Unlisted YouTube/Vimeo recap URLs post-session.
  -->
