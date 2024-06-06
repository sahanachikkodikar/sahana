<?php
include 'connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $destination = $_POST['destination'];
    $duration = $_POST['duration'];
    $guests = $_POST['guests'];

    $sql = "INSERT INTO bookings (destination, duration, guests) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $destination, $duration, $guests);

    if ($stmt->execute()) {
       header('Location: index.html');
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
    $conn->close();
}
?>
