<?php
session_start();

header('Content-Type: application/json; charset=utf-8');

if (!empty($_SESSION['admin_logged_in'])) {
    echo json_encode(['ok' => true, 'user' => $_SESSION['admin_user'] ?? 'admin']);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Not authenticated']);
}
