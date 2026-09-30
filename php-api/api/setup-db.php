<?php
// ── Run this file ONCE to create the database table ─────────────────────────
// Visit: drupal.abacusdesk.com/highwayroop/api/setup-db.php
// Then delete this file from your server for security.
//
require_once __DIR__ . '/db-config.php';

try {
    $pdo = new PDO(
        "mysql:host={$dbHost};dbname={$dbName};charset=utf8mb4",
        $dbUser, $dbPass,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    $pdo->exec("
        CREATE TABLE IF NOT EXISTS page_content (
            id          INT AUTO_INCREMENT PRIMARY KEY,
            page        VARCHAR(100) UNIQUE NOT NULL,
            content     LONGTEXT NOT NULL,
            updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    ");

    // Import default homepage content from the JSON file
    $jsonPath = __DIR__ . '/../content/homepage.json';
    if (file_exists($jsonPath)) {
        $default = file_get_contents($jsonPath);
        $stmt = $pdo->prepare(
            "INSERT IGNORE INTO page_content (page, content) VALUES ('homepage', ?)"
        );
        $stmt->execute([$default]);
        echo '<p style="color:green;font-family:monospace">✓ Database table created and default content imported.</p>';
    } else {
        echo '<p style="color:orange;font-family:monospace">⚠ Table created, but content/homepage.json not found — add content via admin.</p>';
    }

    echo '<p style="color:#333;font-family:monospace">Delete this file (setup-db.php) from your server now.</p>';

} catch (PDOException $e) {
    echo '<p style="color:red;font-family:monospace">Error: ' . htmlspecialchars($e->getMessage()) . '</p>';
}
