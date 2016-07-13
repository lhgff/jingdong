<?php

	// 指定文档类型
	header('Content-Type: application/json; charset=utf-8');

	// 1、PHP连接数据库、读取数据
	// 2、一般情况下会将读取的数据转成数组
	// 3、需要通过json_encode() 来转成json
	// 4、可以将json数据echo，返回给js 或其它语言

	$result = file_get_contents('stars.json');

	echo $result;
	


?>