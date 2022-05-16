<?php
//include auth_session.php file on all user panel pages
include("auth_session.php");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Dashboard - Client area</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="form">
        <p>Hey, <?php echo $_SESSION['username']; ?>! Are you in need of help?</p>
        <p>You can contact me via my email christian.malmstein@outlook.com.</p>
        <p><a href="dashboard.php">start</a></p>
        <p><a href="logout.php">Logout</a></p>
        