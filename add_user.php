<?php
// db connection
$conn = new mysqli('localhost', 'root', '', 'angulator');

$add_user_query = "INSERT INTO users (username, first_name, last_name, address) VALUES ('" .$_REQUEST['username']. "','" .$_REQUEST['first_name']. "','" .$_REQUEST['last_name']. "','" .$_REQUEST['address']."')";
$execute_add_user_query = $conn->query($add_user_query);

echo json_encode($add_user_query ."** User successfully added!");
// $add_user_query_result = $execute_add_user_query->fetch_object();

// echo json_encode($add_user_query_result);

?>
