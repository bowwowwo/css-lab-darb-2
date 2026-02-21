<?php header("Content-Type: text/plain");
    
function triangle($n){
    $max = $n*$n; // lielakais iespej nr
    $dig = strlen($max);
    for($i = 1; $i <= $n; $i++){

        for($k = 1; $k <= ($n - $i); $k++) echo str_repeat(" ", $dig) . " "; // cik vajag likt atstarpes
        for($j = 1; $j <= $i; $j++){
            $num = $i * $j;
            if(strlen($num) <= $dig) $num = str_repeat(" ", $dig- strlen($num)) . $num; // ci plats ir 1 nr
            echo $num . " ";
        }
        echo "\n";
    }
}

triangle(20);
?>