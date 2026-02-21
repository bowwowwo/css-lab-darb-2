<?php

function getDay($date){
    return date('w', $date);
}

function sundays($n){
    
    $date = strtotime($n . '-01-01');

    if($n < 0){ //naturals skaitlis
    echo "Not a valid year";
    return false;
    }

    $d = getDay($date);

    if($d == 0){
        echo "Year " . $n . " had 53 Sundays.";
        return true;
    }
    else
        echo "Year " . $n . " did NOT have 53 Sundays.";
        return false;

}

function interval_sundays($start, $end){
    for($i = $start; $i <= $end; $i++){
        sundays($i);
        echo "<br>";
    }
}

interval_sundays(2000, 2023);

/*
2006
2012 (leap year)
2017
2023
2028 (leap year)
2034
2040 (leap year)
2045
2051
2056 (leap year)
2062
2068 (leap year)
2073
2079
2084 (leap year)
2090
2096 (leap year)
*/

?>