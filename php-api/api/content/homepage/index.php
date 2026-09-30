<?php
session_start();
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// __DIR__ = highwayroop/api/content/homepage
// apiDir  = highwayroop/api
// siteDir = highwayroop
$apiDir   = dirname(dirname(__DIR__));
$siteDir  = dirname($apiDir);
$jsonPath = $siteDir . '/content/homepage.json';

require_once $apiDir . '/db-config.php';

function getDB($dbHost, $dbName, $dbUser, $dbPass) {
    return new PDO(
        "mysql:host={$dbHost};dbname={$dbName};charset=utf8mb4",
        $dbUser, $dbPass,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
}

// ── GET ─────────────────────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $pdo  = getDB($dbHost, $dbName, $dbUser, $dbPass);
        $stmt = $pdo->query("SELECT content FROM page_content WHERE page = 'homepage' LIMIT 1");
        $row  = $stmt->fetch(PDO::FETCH_ASSOC);
        echo $row ? $row['content'] : (file_exists($jsonPath) ? file_get_contents($jsonPath) : '{}');
    } catch (PDOException $e) {
        echo file_exists($jsonPath) ? file_get_contents($jsonPath) : '{}';
    }
    exit;
}

// ── POST ────────────────────────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (empty($_SESSION['admin_logged_in'])) {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized — please log in']);
        exit;
    }

    $body = file_get_contents('php://input');
    json_decode($body);
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
        exit;
    }

    $saved = false;

    try {
        $pdo  = getDB($dbHost, $dbName, $dbUser, $dbPass);
        $stmt = $pdo->prepare("
            INSERT INTO page_content (page, content) VALUES ('homepage', ?)
            ON DUPLICATE KEY UPDATE content = ?, updated_at = NOW()
        ");
        $stmt->execute([$body, $body]);
        $saved = true;
    } catch (PDOException $e) {}

    if (is_writable(dirname($jsonPath)) || is_writable($jsonPath)) {
        file_put_contents($jsonPath, $body);
        $saved = true;
    }

    echo $saved
        ? json_encode(['success' => true])
        : json_encode(['error' => 'Could not save — check DB config or file permissions']);
    if (!$saved) http_response_code(500);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
