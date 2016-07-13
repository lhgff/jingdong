<?php  
header("Content-Type:text/html;charset=utf-8");
/**
 * @task 如何获取html中表单中用户填写的信息
 * 1.get请求  $_GET(关联数组)  内嵌数组
 * 总结 $_GET[表单中input的name属性的值]
 * 2.post请求 $_POST(关联数组)
 */
// print_r($_GET);
// print_r($_POST);

// 功能： 模拟用户登录
// 分析:1.在数据库中应该存有这个用户的账号和密码
            // 2.从前端传过来的数据和数据库中的用户的账号和密码做对比
               // 3.假如相同，代表登录成功，假如不想等，登录失败
// 1.在数据库中应该存有这个用户的账号和密码
// $user = array('linxinru' =>"linxinru520",'linqingxia'=>123456 );
$username=$_GET['username']; //用户提交过来的用户名
$password=$_GET['password'] ;//用户提交过来的密码
echo "nihao";
// array_key_exists(key, array) 判断key值在不在此数组中

// var_dump(array_key_exists("linxinru1",$user));  linxinru520==         sdfafasdf
// if(array_key_exists($username,$user) && $user[$username]==$password){
// 	echo "登录成功";
// }else{
// 	echo "登录失败";
// }

// $arr = array('itcast' =>123  );
// echo $arr['itcast']
?>