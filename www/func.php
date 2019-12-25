<?php
// если команда не задана - выходим сразу
header('Content-Type: text/html; charset=UTF-8');
if (empty($_POST['command'])) exit;
require_once dirname(__FILE__) . '/connection.php';
// инициализация выходного массива данных
$data = array();
// обработка команд
switch ($_POST['command']) {
case 'load-table':
	$id = empty($_POST['tableID'])? 'menu' : $_POST['tableID'];
	$res = mysqli_query($link, "SELECT * FROM ".$id);
	if ($res->num_rows)
		while ($r = $res->fetch_object())
			$data[] = $r;
		break;
case 'delete':
	$tableID = $_POST['tableID'];
	$id = empty($_POST['deleteID'])? 0 : $_POST['deleteID'];
	mysqli_query($link, "DELETE FROM ".$tableID." WHERE id = ".$id);
case 'edit':
	$table = $_POST['table'];
	$id = $_POST['id'];
	$title = $_POST['title'];
	$text = $_POST['text'];
	mysqli_query($link, "UPDATE ".$table." SET title = '".$title."', text = '".$text."' WHERE id = ".$id);
case 'add':
	$table = $_POST['table'];
	$id = $_POST['id'];
	$alias = $_POST['alias'];
	$title = $_POST['title'];
	$text = $_POST['text'];
	mysqli_query($link, "INSERT INTO ".$table." (id, alias_menu, title, text) VALUE (".$id.", '".$alias."', '".$title."', '".$text."')");
}
echo json_encode($data, true);
?>