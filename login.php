<?php
include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Insert data into the database
    $sql = "INSERT INTO userss (email, password) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        die('Error preparing the SQL statement: ' . $conn->error);
    }
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    
    if ($stmt->affected_rows > 0) {
        echo "Data stored successfully!";
        header('Location: index.html');
        exit();
    } else {
        echo "Error storing data: " . $conn->error;
    }
    $stmt->close();
} else {
    echo "Both email and password fields are required.";
}

$conn->close();
?>