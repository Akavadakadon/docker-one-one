<div class="sitetoolbar__content">
   <div class="sitetoolbar__logo-wrap">
      <a class="sitetoolbar__link sitetoolbar__link_logo" href="/">
         <img class="sitetoolbar__logo sitetoolbar__logo_normal" src="/assets/images/source/logo.png" alt="">
      </a>
   </div>
   <div class="sitetoolbar__nav-toggle-wrap">
      <button class="sitetoolbar__nav-toggle" type="button"></button>
   </div>
   <nav class="sitetoolbar__sections">
		<ul class="sitetoolbar__sections-list">
			<?php
				require_once 'connection.php';
				$result = mysqli_query($link, "SELECT * FROM menu WHERE position_item > -2"); //список элементов главного меню
				$rows = mysqli_num_rows($result);
				$count_item = 0;
				$count_subitem = 0;
				for ($i = 0;$i < $rows;$i++) {
					$row = mysqli_fetch_row($result); //получаем одну строку из БД
					if ($row[3] >= 0) {
						//сортировка пузырьком
						if ($count_item == 0 || ($count_item != 0 && $item[$count_item - 1][3] < $row[3])) for ($j = 0;$j < 5;++$j) $item[$count_item][$j] = $row[$j];
						else for ($j = $count_item;$j >= 0;$j--) {
							if ($j != 0 && $item[$j - 1][3] > $row[3]) for ($k = 0;$k < 5;$k++) $item[$j][$k] = $item[$j - 1][$k];
							else {
								for ($k = 0;$k < 5;$k++) $item[$j][$k] = $row[$k];
								break;
							}
						}
						$count_item++;
					}
					//если появился подэлемент
					else {
						for ($j = 0;$j < 5;$j++) $subitem[$count_subitem][$j] = $row[$j];
						$count_subitem++;
					}
				}
				mysqli_free_result($result);
				//item - отсортированный список пунктов меню
				//subitem - список подпунктов меню
				//выводим меню
				for ($k = 0;$k < $count_item;$k++) {
					$arr = json_decode($item[$k][4], true);
					if ($arr[0] == "") {
						if ($item[$k][2] == $_GET['page']) //выделяем пункт меню текущей страницы
						echo "<li class=\"sitetoolbar__section sitetoolbar__section_current\">";
						else
						//иначе не выделяем пункт меню
						echo "<li class=\"sitetoolbar__section\">";
						echo "<a class=\"sitetoolbar__link\" href=\"/?page=" . $item[$k][2] . "\" title=\"" . $item[$k][1] . "\">" . $item[$k][1] . "</a></li>";
					} else {
						for ($s = 0;$s < count($subitem);$s++) if ($subitem[$s][2] == $_GET['page']) $subitemcheck = $subitem[$s][0];
						for ($s = 0;$s < count($arr);$s++) if ($arr[$s] == $subitemcheck) {
							echo "<li class=\"sitetoolbar__section sitetoolbar__section_dropdown sitetoolbar__section_current\">";
							break;
						} else if ($s == count($arr) - 1) echo "<li class=\"sitetoolbar__section sitetoolbar__section_dropdown\">";
						echo "<button class=\"sitetoolbar__dropdown-button\" data-dropdown-toggler=\"\">" . $item[$k][1] . "</button><div class=\"sitetoolbar__dropdown-wrap\"><div class=\"sitetoolbar__dropdown-body\"><ul class=\"sitetoolbar__dropdown-items\">";
						for ($i = 0;$i < count($arr);$i++) {
							for ($s = 0;$s < count($subitem);$s++) if ($subitem[$s][0] == $arr[$i]) {
								echo "<li class=\"sitetoolbar__dropdown-item\"><a class=\"sitetoolbar__secondary-link sitetoolbar__dropdown-link\" href=\"/?page=" . $subitem[$s][2] . "\" title=\"" . $subitem[$s][1] . "\">" . $subitem[$s][1] . "</a></li>";
								break;
							}
						}
						echo "</ul><div></div></li>";
					}
				}
			?>
		</ul>
	</nav>
	<div class="sitetoolbar__book-wrap"><a class="buy-book-button" href="http://megalizard.ru"><span class="buy-book-button__extra-text">#MegaLizard</span></a></div>

</div>
<div class="tablet-menu">
   <div class="tablet-menu__line">
      <div class="tablet-menu__content">
         <select class="tablet-menu__nav input-select input-select input-select_small" onchange="if(this.value) window.location.href=this.value">
			 <?php
				for ($k = 0; $k < $count_item; $k++) {
					$arr = json_decode($item[$k][4], true);
					if ($arr[0] == "") {
						if ($item[$k][2] == $_GET['page']) echo "<option value=\"/?page=" . $item[$k][2] . "\" selected=\"\">" . $item[$k][1] . "</option>";
						else echo "<option value=\"/?page=" . $item[$k][2] . "\">" . $item[$k][1] . "</option>";
					} else {
						echo "<option disabled=\"\">" . $item[$k][1] . "</option>";
						for ($i = 0; $i < count($arr); $i++) {
							for ($s = 0; $s < count($subitem); $s++) if ($subitem[$s][0] == $arr[$i]) {
								echo "<option value=\"/?page=" . $subitem[$s][2] . "\" selected=\"\">" . $subitem[$s][1] . "</option>";
								break;
							}
						}
					}
				}
			?>
         </select>
      </div>
   </div>
</div>
