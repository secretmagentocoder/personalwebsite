<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required = ['name', 'email', 'subject', 'message'];
foreach ($required as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => "Field '$field' is required"]);
        exit;
    }
}

// Sanitize inputs
$name = filter_var($input['name'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$subject = filter_var($input['subject'], FILTER_SANITIZE_STRING);
$message = filter_var($input['message'], FILTER_SANITIZE_STRING);

// Validate email
if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email address']);
    exit;
}

// Email configuration
$to = 'anasmagento@gmail.com';
$from = $email;
$subject_line = "Portfolio Contact Form: " . $subject;

// Email body
$body = "New contact form submission from your portfolio website\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Subject: $subject\n\n";
$body .= "Message:\n$message\n\n";
$body .= "---\n";
$body .= "This email was sent from your portfolio contact form at anas.local";

// Email headers
$headers = "From: Portfolio Contact Form <noreply@anas.local>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
$success = mail($to, $subject_line, $body, $headers);

if ($success) {
    echo json_encode([
        'success' => true,
        'message' => 'Email sent successfully'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send email. Please try again or contact directly.'
    ]);
}
?>

