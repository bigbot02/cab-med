<?php
header('Content-Type: application/json');
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$username = $data['username'];
$password = $data['password'];

// Fetch the user from the database
$sql = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($sql);

$response = array();
if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();
    // Verify the password
    if (password_verify($password, $user['password'])) {
        $response['success'] = true;
    } else {
        $response['success'] = false;
    }
} else {
    $response['success'] = false;
}
echo json_encode($response);

$conn->close();
