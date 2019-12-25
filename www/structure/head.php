<?php
	require_once 'connection.php';
	if (isset($_GET['page']) && $_GET['page'] != NULL)
		$content_row = mysqli_query($link, "SELECT title FROM menu WHERE alias = '".$_GET['page']."'");
	else
		$content_row = mysqli_query($link, "SELECT title FROM menu WHERE alias = 'main'");
	$head = mysqli_fetch_row($content_row);
	if (isset($head))
		echo "<title>".$head[0]."</title>";
	else
		echo "<title>Упс...</title>";
	mysqli_free_result($content_row);
?>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0">
<link href="//fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700%7COpen+Sans+Condensed:700&amp;subset=latin,latin-ext,cyrillic,cyrillic-ext" rel="stylesheet">
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
<link rel="stylesheet" type="text/css" href="assets/css/styles.css" />
<script src="/assets/js/init.js"></script>
<script src="/assets/js/head.js"></script>