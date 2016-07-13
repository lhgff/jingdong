<?php
// 读取文件的方法file_get_contents
	header("Content-Type:text/xml;charset=utf-8");
	// 读取xml文件的
	$result=file_get_contents("stars.xml");
	echo  $result;

?>