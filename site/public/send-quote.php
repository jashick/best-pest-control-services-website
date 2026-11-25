<?php
// Quote form handler (SiteGround PHP). Emails the request to the business, then sends the visitor to /thank-you/.
// Change $to if the client wants requests at another address. Honeypot field "company" catches bots.
$to = 'support@akillerservice.com';
$base = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/');
function back($base, $q) { header('Location: ' . $base . '/get-a-quote/?' . $q); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') back($base, '');
if (!empty($_POST['company'])) { header('Location: ' . $base . '/thank-you/'); exit; }
$clean = function ($k, $max) { return trim(substr(str_replace(["\r", "\n"], ' ', strip_tags($_POST[$k] ?? '')), 0, $max)); };
$name = $clean('name', 100);
$phone = $clean('phone', 40);
$email = $clean('email', 120);
$zip = $clean('zip', 10);
$msg = trim(substr(strip_tags($_POST['message'] ?? ''), 0, 4000));
if ($name === '' || $phone === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match('/^\d{5}(-\d{4})?$/', $zip)) back($base, 'error=1');
$host = preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'bestpestkillerservice.com');
$subject = 'New quote request from ' . $name . ' (' . $zip . ')';
$body = "New quote request from the website\n\nName: $name\nPhone: $phone\nEmail: $email\nZip code: $zip\n\nWhat they're dealing with:\n$msg\n\nSent from https://$host" . ($_SERVER['REQUEST_URI'] ?? '') . "\n";
$headers = "From: B.E.S.T. Website <noreply@$host>\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8\r\n";
@mail($to, $subject, $body, $headers, '-fnoreply@' . $host);
header('Location: ' . $base . '/thank-you/');
