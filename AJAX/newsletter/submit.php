<?php
	$akcja = $_GET['akcja'];
	
	if($akcja){
		$ret = "Twój wpis został pozytywnie dodany:\n";
	}else{
		$ret = "Twój wpis został poprawnie usunięty:\n";
	}
	foreach($_POST as $val){
		$ret .= $val."\n";
	}
	$ret = substr($ret, 0, strlen($ret)-2);
	echo $ret;
?>