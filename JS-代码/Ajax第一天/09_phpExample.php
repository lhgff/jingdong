<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>PHP案例(example)</title>
</head>
<body>
	<?php 
/**
 * @task 如何把下面的二维数组中的数据写入到HTML中的导航上？
 *       $arr = array(
			array('广播'),
			array('发现', '文章', '心情'),
			array('专辑', '生活', '时尚', '兴趣'),
			array('Wiki'),
			array('小组')
		);
		1.要用foreach循环二维数组
		2.还要用另外一个foreach循环二维数组中的一维数组
 */
 $arr = array(
			array('广播'),
			array('发现', '文章', '心情'),
			array('专辑', '生活', '时尚', '兴趣'),
			array('Wiki'),
			array('小组')
		);

 foreach ($arr as $key => $value) {
 	foreach ($value as $k=> $v) {
 		echo $v."<br>";
 	}
 }
 ?>
</body>
</html>

