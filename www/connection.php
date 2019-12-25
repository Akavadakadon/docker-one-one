<?php
global $link;
$host = 'db';
$database = 'ajax';
$user = 'root';
$password = 'root';
$debug = false; //Отображать ошибки
$close_link = false; //Закрывать подключение (не работает с подключаемыми файлами)
$link = mysqli_connect($host, $user, $password, $database);
function db_query($sql, $pairs = array()) {
	global $link;
	if (!empty($pairs)) {
		foreach ($pairs as $key => $value) {
			if (is_numeric($value)) {
				$sql = str_replace($key, $value, $sql);
			} else {
				$sql = str_replace($key, "'" . $link->real_escape_string($value) . "'", $sql);
			}
		}
	}
	return $result;
}
if ($debug == true) {
	if (!$link)
		echo "Ошибка ".mysqli_connect_errno( )."</br>".mysqli_connect_error( );
	else
		echo "Успешное подключение!";
}
if ($close_link == true)
	mysqli_close($link);
?>
