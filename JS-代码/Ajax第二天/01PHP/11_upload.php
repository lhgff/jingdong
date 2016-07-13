<?php 
header("Content-Type:text/html;charset=utf-8");
/**
 * @task 如何上传图片到网站上
 * $_FILES 数组  move_uploaded_file("临文件的名称","要把临时文件放到的地址和图片名称")

 array
  'photo' => 
    array
      'name' => string 'wanlum.jpg' (length=10)
      'type' => string 'image/jpeg' (length=10)
      'tmp_name' => string 'D:\wamp\tmp\php5B2A.tmp' (length=23)
      'error' => int 0
      'size' => int 71870
 * */
var_dump($_FILES);
// move_uploaded_file("临文件的路径","要把临时文件放到的地址和图片名称
 move_uploaded_file($_FILES['photo']['tmp_name'],"./img.jpg");
// sleep(3);
 ?>