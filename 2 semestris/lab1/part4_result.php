<?php

require 'part3.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $start = isset($_POST['start']) ? (int)$_POST['start'] : 0;
    $end   = isset($_POST['end']) ? (int)$_POST['end'] : 0;

}

if($start < 0){
    echo "Not a natural nr";
    die();
}
if($end < 0){
    echo "Not a natural nr";
    die();
}

if($end < $start){
    echo "The end of the interval can't be smaller than the start of the interval.";
    die();
}

interval_sundays($start, $end);

?>