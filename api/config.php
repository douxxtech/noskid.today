<?php
// ratelimit things, for downcert
define('MIN_PERCENTAGE', 80);
define('MAX_PERCENTAGE', 100);
define('MAX_REQUESTS_PER_MINUTE', 3);
//notifications, only for downcert rn
define('DISCORD_WEBHOOK_URL', 'WBK_URL');

// database configuration
define('DB_HOST', 'dbhost');
define('DB_USER', 'dbuser');
define('DB_PASS', 'dbpwd');
define('DB_NAME', 'dbname');

// turnstile configuration
define('TURNSTILE_SECRET_KEY', 'turnstile_secret_key');
define('TURNSTILE_VERIFY_URL', 'https://challenges.cloudflare.com/turnstile/v0/siteverify');

//for the badges cache, the file is in /badges/cache.txt
define('CACHE_FILE', '../cache.txt');
define('CACHE_EXPIRY', 86400);

//maintenance toggle and lastest update pwd
define('ETC_PWD', 'etcpwd');

//certificate questions
$questions = [
    [
        'question' => 'should i star noskid.today ?',
        'answers' => [
            'yes'
        ],
        'correct' => 0
    ],
    [
        'question' => 'what if i dont want to star noskid.today ?',
        'answers' => [
            'you should still star noskid.today',
            'you should not star noskid.today'
        ],
        'correct' => 0
    ]
];


?>