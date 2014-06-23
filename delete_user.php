<?php

// db connection
$conn = new mysqli('localhost', 'root', '', 'angulator');

$delete_user_query = "DELETE from users where id=" .$_REQUEST['id'];
$execute_delete_user_query = $conn->query($delete_user_query);

echo json_encode($delete_user_query ."** deleted sonnn!");
// $add_user_query_result = $execute_add_user_query->fetch_object();

// echo json_encode($add_user_query_result);


?>
