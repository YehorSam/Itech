<?php

if (isset($_POST['submit']))
{
	$file = fopen('result.txt','w+');
	fputs($file,$_POST['mood']);
	fclose($file);
}
?>