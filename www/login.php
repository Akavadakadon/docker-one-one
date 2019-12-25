<!DOCTYPE html>
<html>
<head>
	<title>Авторизация</title>
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
							<h1 class=\"main__header-title\">Авторизация</h1>
						</div>
					</header>
					<div class=\"content\">
						<div class="lessons-list">
							<?php
								$data = $_POST;
								if ( isset($data['do_login']) ){
									$user = R::findOne('users', 'login = ?', array($data['login']));
									if ( $user ){
										//логин существует
										if ( password_verify($data['password'], $user->password) )
										{
											//если пароль совпадает, то нужно авторизовать пользователя
											$_SESSION['logged_user'] = $user;
											echo '<div class="login-form__success">Вы авторизованы!<br/> Можете перейти на <a href="/">главную</a> страницу.</div>';
										}
										else
											$errors[] = 'Неверно введен пароль!';
									}
									else
										$errors[] = 'Пользователь с таким логином не найден!';
									//выводим ошибки авторизации
									if ( ! empty($errors) )
										echo '<div class="login-form__warning">' .array_shift($errors). '</div>';
								}
							?>
							<form class="login-form__form" action="login.php" method="POST">
								<div class="login-form__line login-form__header">
									<h4 class="login-form__title">Вход</h4>
									<div class="login-form__header-delimiter">/</div>
									<div class="login-form__header-aside">
										<a class="login-form__button-link login-form__register" href="signup">Регистрация</a>
									</div>
								</div>
								<div class="login-form__body">
									<div class="login-form__line login-form__row login-form__row-wrap">
										<div class="login-form__form-control">
											<label class="login-form__label">Логин:</label>
											<span class="text-input login-form__input">
												<input class="text-input__control" type="text" name="login" value="<?php echo @$data['login']; ?>" maxlength="50" tabindex="1">
											</span>
										</div>
										<div class="login-form__form-control">
											<label class="login-form__label">Пароль:</label>
											<span class="text-input text-input_with-aside login-form__input">
												<input class="text-input__control" type="password" name="password" value="<?php echo @$data['password']; ?>" maxlength="30" tabindex="2">
											</span>
										</div>
										<div class="login-form__form-control login-form__submit">
											<button class="button button_action" type="submit" name="do_login" tabindex="3">
												<span class="button__text">Войти</span>
											</button>
										</div>
									</div>
									<div class="login-form__line login-form__social-logins">
										<span>Войдите или зарегистрируйтесь в системе. Если у вас возникли проблемы, обратитесь к <a href="mailto:dgutnichenko@mail.ru">администратору</a>.</span>
									</div>
								</div>
							</form>
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