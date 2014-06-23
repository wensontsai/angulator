<?php
// db connection
$conn = new mysqli('localhost', 'root', '', 'angulator');

// initialize variables
$final_json_pass_array = array();

$users_query = "SELECT * FROM users ORDER BY id";
$execute_users_query = $conn->query($users_query);

// $users_query_result = $execute_users_query->fetch_object();
// echo "<pre>";
// var_dump($users_query_result);
// echo "<pre>";


// echo json_encode($users_query_result);


while($users_query_row = $execute_users_query->fetch_array()){
  $json_pass_array = array(
                "id" => $users_query_row['id'],
                "username" => $users_query_row['username'],
                "first_name" => $users_query_row['first_name'],
                "last_name" => $users_query_row['last_name'],
                "address" => $users_query_row['address']
                );

  array_push($final_json_pass_array, $json_pass_array);
}

echo json_encode($final_json_pass_array);
?>
