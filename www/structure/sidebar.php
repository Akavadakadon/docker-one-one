<?php
	require_once 'connection.php';
	if (isset($_GET['page']) && $_GET['page'] != NULL)
		$content_row = mysqli_query($link, "SELECT text FROM content WHERE alias_menu = '".$_GET['page']."'");
	else
		$content_row = mysqli_query($link, "SELECT text FROM content WHERE alias_menu = 'main'");
	$sidebar = mysqli_fetch_row($content_row);
	if (isset($sidebar)) {
		if (preg_match_all('|<a class=\"main__anchor\" (.+) href=\"(.+)\">(.+)</a>|isU', $sidebar[0], $arr)) {
			echo "<button class=\"sidebar__toggle\" data-sidebar-toggle=\"\"></button><div class=\"sidebar__inner\">
			<div class=\"sidebar__content\"><div class=\"sidebar__section\"><h4 class=\"sidebar__section-title\">Смежные разделы</h4>
			<nav class=\"sidebar__navigation\"><ul class=\"sidebar__navigation-links\">";
			for ($i = 0; $i < count($arr[3]); $i++)
				echo "<li class=\"sidebar__navigation-link\"><a class=\"sidebar__link\" href=\"".$arr[2][$i]."\">".$arr[3][$i]."</a></li>";
			echo "</ul></nav></div></div></div>";
		}
	}
	mysqli_free_result($content_row);
?>