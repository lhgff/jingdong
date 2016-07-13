<?php 
$arr=array("name"=>"itcast","age"=>10);

echo json_encode($arr);
$str='{"name":"itheima","age":10}';
print_r(json_decode($str,true));

 ?>