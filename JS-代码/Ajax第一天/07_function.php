<?php  
/**
 * @task php中的函数(function)
 * 在php中，假如我们在调用有参数的函数的时候，
 * 没有给参数 会报错

 在php中，如果要给参数，必须声明默认参数的值，如果传入了实参，会输出实参，如果没有给，输出默认值
 */
function fun($name="itcast"){
	echo $name;
}
fun("qiaofeng");
?>