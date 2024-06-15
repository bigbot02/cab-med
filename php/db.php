// php/db.php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "medicaldb";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>