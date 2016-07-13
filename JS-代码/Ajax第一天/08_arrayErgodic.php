<?php
/**
 * @task php中的数组(array)遍历(ergodic)
 注意:在php中，数组没有length属性
 * for循环：只能遍历索引数组
 * foreach循环：索引数组 关联数组
 */
// 索引数组
$arr=array("a","b","c");
$length=count($arr);
// echo "$length";
for($i=0;$i<$length;$i++){
	echo $arr[$i]."<br>";
}


// 关联数组
$arrKey=array("name"=>"itcast","age"=>18);
// foreach (数组的名称 as $key => $value) {
// 	# code...
// }
foreach ($arrKey as $key => $value) {
echo $key."<br>";
}

  ?>
