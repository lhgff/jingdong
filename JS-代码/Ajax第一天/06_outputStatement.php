<?php  
/**
 * @task php中的输出语句(output statement)：
 * echo  数据类型
 * print_r() 除了数据类型，还有数组结构以及数组的内容
 * var_dump() 除了数据类型，还有数组结构以及数组的内容和数组中值的类型(详细信息)
 */
$arr=array("a","b","c");

echo $arr; //数据类型
echo "<br>";

print_r($arr); //索引和值以及数组的结构
echo "<br>";

var_dump($arr);//详细信息  键值，值的数据类型 值得长度
echo "<br>";
// $flag=true;
 $flag=false;
print_r($flag);
echo "<br>";
var_dump($flag);
?>