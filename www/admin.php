<!DOCTYPE html>
<html>
<head>
	<title>Панель управления</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0">
	<link href="//fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700%7COpen+Sans+Condensed:700&amp;subset=latin,latin-ext,cyrillic,cyrillic-ext" rel="stylesheet">
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
	<link rel="stylesheet" type="text/css" href="assets/css/styles.css" />
	<script src="/assets/js/init.js"></script>
	<script src="/assets/js/head.js"></script>
	<script type="text/javascript" src="/assets/js/jquery-3.3.1.js"></script>
	<script type="text/javascript" src="/assets/js/cursach.js"></script>
</head>
<body>
    <div class="page-wrapper">
		<div class="sitetoolbar">
			<?php include ("structure/menu.php");?>
		</div>
		<div class="page page_inner_padding">
			<div class="page__inner">
				<main class="main main_width-limit">
					<header class="main__header">
						<div class="main__header-inner">
							<h1 class=\"main__header-title\">Панель управления</h1>
						</div>
					</header>
					<div class=\"content\">
						<div class="lessons-list">
							<?php if ( isset ($_SESSION['logged_user']) && $_SESSION['logged_user']->user_group == 2 ) : ?>
							<!-- КОД ДЛЯ АДМИНА -->
							<div id="table"></div>
							<div id="edittable"></div>
							<div id="buttons"></div>
							<script type="text/javascript">
								$(function () {
								  var CR = new CURSACH({
								  tableID: "table",
								  edittableID: "edittable",
								  buttonID: "buttons",
								  ajaxUrl: "/func.php"});
								});
							</script>
							<!-- КОНЕЦ КОДА ДЛЯ АДМИНА -->
							<?php else : ?>
								<div class="login-form__error">У вас нет доступа, к этой странице! <a href="/login">Авторизируйтесь</a> или напишите <a href="mailto:dgutnichenko@mail.ru">администратору</a>.</div>
							<?php endif; ?>
						</div>
					</div>
				</main>
			</div>
		</div>
	</div>
	<div class="page-footer">
		<?php include ("structure/footer.php");?>
	</div>
</body>
</html>