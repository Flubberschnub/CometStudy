<?php>
$serverName = "KAREM\\karen"; //serverName\instanceName
$connectionInfo = array( "Database"=>"Hacker Snackers", "UID"=>"Karen123", "PWD"=>"12345");

$conn=sqlsrv_connect($serverName, $connectionInfo);

if( $conn ) {
    echo "Connection established.<br />";
}else{
    echo "Connection could not be established.<br />";
    die( print_r( sqlsrv_errors(), true));
}

$result = $conn->query("SELECT * FROM makeTeam");

while($row = $result->fetch_array()) {
    $rows[] = $row;
}

foreach ($rows as $value) {
      // or don't use an index when adding a value to the array         
      $components[] = $value[0];
}

echo json_encode($components);
<php>