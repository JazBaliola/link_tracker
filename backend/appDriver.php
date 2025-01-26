<?php

include_once("./get_user_info/GetInfo.class.php");

$GetInfo = new GetInfo();

if($_SERVER['REQUEST_METHOD'] === "GET" && isset($_GET['request'])) {

    $request = $_GET['request'];

    if($request == "country") {

    }


}


?>