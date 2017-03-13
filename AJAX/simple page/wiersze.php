<?php
	sleep(3);
	$ret = "";

foreach(new DirectoryIterator('wiersze/') as $file){
	if(!$file->isDot()){
		$tmp = $file->getFilename();
		$tmp = substr($tmp, 0, strlen($tmp)-5);
		$ret .= $tmp.";";
	}
}
$ret = substr($ret, 0, strlen($ret)-1);

echo $ret;
?>