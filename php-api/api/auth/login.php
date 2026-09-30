<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$body = file_get_contents('php://input');
$data = json_decode($body, true);

if (!$data || !isset($data['username'], $data['password'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

// Admin credentials — change password hash by running:
// php -r "echo password_hash('YourNewPassword', PASSWORD_DEFAULT);"
define('ADMIN_USER', 'admin');
define('ADMIN_HASH', '$2y$10$KZc2nNI1vlnnhIBposqF2OOVlZoEt4QbFDaZdhBkNhdBLCrRRaC22');

$username = trim($data['username']);
$password = $data['password'];

if ($username === ADMIN_USER && password_verify($password, ADMIN_HASH)) {
    session_regenerate_id(true);
    $_SESSION['admin_logged_in'] = true;
    $_SESSION['admin_user']      = $username;
    echo json_encode(['success' => true]);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid username or password']);
}
