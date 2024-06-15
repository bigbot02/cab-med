<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    exit(0);
}
error_log("PHP script started");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $postData = file_get_contents("php://input");
    $data = json_decode($postData, true);

    error_log(print_r($data, true));

    $title = $data['title'];
    $firstName = $data['firstName'];
    $lastName = $data['lastName'];
    $username = $data['username'];
    $email = $data['email'];
    $cin = $data['cin'];
    $profession = $data['profession'];
    $licenseNumber = $data['licenseNumber'] ?? null;
    $specialization = $data['specialization'] ?? null;
    $experience = $data['experience'] ?? null;
    $insuranceInfo = $data['insuranceInfo'] ?? null;
    $primaryPhysician = $data['primaryPhysician'] ?? null;
    $medicalHistory = $data['medicalHistory'] ?? null;
    $city = $data['city'];
    $password = password_hash($data['password'], PASSWORD_BCRYPT);
    $acceptTerms = isset($data['acceptTerms']) ? 1 : 0;
    $policy = isset($data['policy']) ? 1 : 0;

    $sql = "INSERT INTO users (title, first_name, last_name, username, email, cin, profession, license_number, specialization, experience, insurance_info, primary_physician, medical_history, city, password, accept_terms, policy) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        error_log("Prepare failed: (" . $conn->errno . ") " . $conn->error);
        die("Prepare failed: (" . $conn->errno . ") " . $conn->error);
    }

    $bind = $stmt->bind_param("sssssssssiissssii", $title, $firstName, $lastName, $username, $email, $cin, $profession, $licenseNumber, $specialization, $experience, $insuranceInfo, $primaryPhysician, $medicalHistory, $city, $password, $acceptTerms, $policy);

    if ($bind === false) {
        error_log("Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error);
        die("Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error);
    }

    $exec = $stmt->execute();

    if ($exec === false) {
        error_log("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
        die("Execute failed: (" . $stmt->errno . ") " . $stmt->error);
    } else {
        echo json_encode(["message" => "New record created successfully"]);
    }

    $stmt->close();
    $conn->close();
}
