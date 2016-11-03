<?php

/* ----------------------------------------------------------------------------
 * Riddles4U - Amazing Riddles Game Platform
 *
 * @package     Riddles4U
 * @author      Alex Tselegidis <alextselegidis@gmail.com>
 * @copyright   Copyright (c) 2016, BigBlackCode
 * @license     http://opensource.org/licenses/GPL-3.0 - GPLv3
 * @link        http://riddles4u.com
 * @since       v1.0.0
 * ---------------------------------------------------------------------------- */

require_once 'autoload.php';
require_once 'config.php';

/**
 * Backend API Access File
 *
 * Supported Operations:
 *
 * - Get Riddle Question
 * - Check Riddle Answer
 * - Get Ad Image
 * - Redirect To Ad URL
 */


/**
 * Output JSON response.
 *
 * @param array $data Associative array with the JSON data.
 * @param int $statusCode Provide a valid HTTP status code for the response (default 200).
 */
function output(array $data, $statusCode = 200) {
    header('Content-Type: application/json; charset:utf-8');
    http_response_code($statusCode);
    echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
}

// Dummy response for riddles page.
echo json_encode([
     'title' => 'Test Riddle #01',
    'content' => 'This is the riddle content which will normally contain the riddle question.'
]);