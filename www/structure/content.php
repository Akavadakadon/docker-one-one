<header class="main__header">
	<div class="main__header-inner">
		<ol class="breadcrumbs">
			<li class="breadcrumbs__item breadcrumbs__item_home">
				<a class="breadcrumbs__link" href="/">
					<span class="breadcrumbs__hidden-text">Главная</span>
				</a>
			</li>
		</ol>
		<?php
	    	require_once 'connection.php';
			if (isset($_GET['page']) && $_GET['page'] != NULL) {
				$content_row = mysqli_query($link, "SELECT * FROM content WHERE alias_menu = '".$_GET['page']."'");
				$row = mysqli_fetch_row($content_row);
				if (isset($row))
					echo "<h1 class=\"main__header-title\">".$row[2]."</h1></div></header><div class=\"content\">".$row[3];
				else
					echo "<h1 class=\"main__header-title\">Ошибка</h1></div></header><div class=\"content\"><p>Страница не существует или была перемещена. Вы можете вернуться назад или перейти на <a href=\"/\">главную страницу</a></p>";
			}
			else {
				$content_row = mysqli_query($link, "SELECT * FROM content WHERE alias_menu = 'main'");
				$row = mysqli_fetch_row($content_row);
				echo "<h1 class=\"main__header-title\">".$row[2]."</h1></div></header><div class=\"content\">".$row[3];
			}
			mysqli_free_result($content_row);
		?>
</div>