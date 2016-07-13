<?php  
/**
 * @task1 变量(variable)的命名规则？
  答：以英文字母，下划线，不能以数字开头  变量区分大小写  声明变量关键字var
 * @task2 如何定义php的变量(variable)？
在php中，以$开头的就是变量
 * */

  //定义一个字符串变量
$name="itcast";
echo $name;
echo "<br>";
  //定义一个整型变量(整数)
$age=18;
 echo $age;
 echo "<br>";
  //定义一个浮点型变量(小数)
$score=88.8;
echo $score;
 echo "<br>";
  //定义一个布尔型变量 1代表变量为true 0代表false
$flag=true;
echo $flag;
 echo "<br>";
  //定义一个一维数组（取出数组的元素）(索引数组)
$arr=array(1,2,3,4);
echo $arr;
echo "<br>";
  //定义一个二维数组（取出数组的元素）(索引数组)
$arr=array(
       array(1,2,3),
       array("a","b","c")
	);
echo $arr[1][0];
echo "<br>";
  // 定义一个关联数组
$arrKey= array('name' =>"itcasts" , 'age'=>18);

echo $arrKey["name"];
echo "<br>";
  //定义一个对象
 /**
 * 1.新建类
   2.实例化
   3.赋值
 */
 class  Car{
 	public  $color;
 	public  $log;
 };
 $car =new Car;
 echo $car->color="red";
 echo "<br>";
 echo $car->log="aodi";
?>



