function CURSACH(params) {
	//инициализация
	this.TT = 'content'; //Таблица
	this.TE = 0; //Элемент таблицы
	this.IDT = $('#' + params.tableID).get(0);
	this.EDT = $('#' + params.edittableID).get(0);
	this.IDB = $('#' + params.buttonID).get(0);
	this.url = params.ajaxUrl;
	// асинхронно получаем таблицу
	this.gettable = function(TID) {
		T = this;
		jQuery.ajax({
			method: 'POST',
			url: this.url,
			data: {
				command: 'load-table',
				tableID: TID,
			},
			success: function(data, textStatus, jqXHR) {
				var data = JSON.parse(data);
				if (data.length == 0)
					alert('Таблица пуста!');
				else
					T.buildSelect(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert('Ошибка в коде! ' + textStatus);
			}
		});
		this.TT = TID;
	}
	this.deletetable = function(DID) {
		T = this;
		jQuery.ajax({
			method: 'POST',
			url: this.url,
			data: {
				command: 'delete',
				tableID: this.TT,
				deleteID: DID,
			},
			success: function(data, textStatus, jqXHR) {
				alert('Запись была удалена!');
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert('Ошибка удаления!');
			}
		});
	}
	this.edittable = function(ID, TITLE, TEXT) {
		T = this;
		jQuery.ajax({
			method: 'POST',
			url: this.url,
			data: {
				command: 'edit',
				table: this.TT,
				id: ID,
				title: TITLE,
				text: TEXT,
			},
			success: function(data, textStatus, jqXHR) {
				alert('Запись была изменена!');
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert('Ошибка удаления!');
			}
		});
	}
	this.addtable = function(ID, ALIAS, TITLE, TEXT) {
		T = this;
		jQuery.ajax({
			method: 'POST',
			url: this.url,
			data: {
				command: 'add',
				table: this.TT,
				id: ID,
				alias: ALIAS,
				title: TITLE,
				text: TEXT,
			},
			success: function(data, textStatus, jqXHR) {
				alert('Запись была добавлена!');
			},
			error: function(jqXHR, textStatus, errorThrown) {
				alert('Ошибка удаления!');
			}
		});
	}
	//эта функция создаёт HTML table, на входе - массив
	this.buildSelect = function(data) {
		jQuery(this.IDT).html('');
		jQuery(this.IDB).html('');
		jQuery(this.IDT).append('<table style="margin-left: auto; margin-right: auto;"><caption>Таблица "'+this.TT+'"</caption><thead><tr class="odd"><th TTope="col">&nbsp;</th><th TTope="col">id</th><th TTope="col">alias_menu</th><th TTope="col">title</th></tr></thead><tbody id="result"></tbody></table>');
		var SL = jQuery(this.IDT).find('#result').get(0);
		for (index in data) {
			jQuery(SL).append('<tr><td style="text-align: center; vertical-align: middle;"><input type="radio" name="element" value="'+data[index].id+'"></td><td style="text-align: center; vertical-align: middle;">'+data[index].id+'</td><td style="text-align: center; vertical-align: middle;">'+data[index].alias_menu+'</td><td style="text-align: center; vertical-align: middle;">'+data[index].title+'</td></tr>');
		}
		var SK = jQuery(this.IDB);
			jQuery(SK).append('<div style="text-align: center;padding: 20px;"><input id="add" class="button button_action" style="margin: 0px 5px;" type="submit" value="Добавить" name="button"><input id="delete" class="button button_danger" style="margin: 0px 5px;" type="submit" value="Удалить" name="button"><input id="edit" class="button button_common" style="margin: 0px 5px;" type="submit" value="Изменить" name="button"><input id="refresh" class="button button_common" style="margin: 0px 5px;" type="submit" value="Обновить" name="button">');
		T = this;
		$( "#refresh" ).click(function() {
			T.gettable(T.TT);
		});
		jQuery("input").change(function() {
			jQuery(T.EDT).html('');
			var rad=document.getElementsByName('element');
			for (var i = 0; i < rad.length; i++) {
				if (rad[i].checked) {
				    //вывести информацию для изменения
					for (index in data){
						if (data[index].id == rad[i].value) {
							jQuery(T.EDT).append('<span>ID</span><input type="text" class="text-input__control" name="edit_id" value="'+data[index].id+'"><span>Алиас</span><input type="text" class="text-input__control" name="edit_alias_menu" value="'+data[index].alias_menu+'"><span>Название страницы</span><input type="text" class="text-input__control" name="edit_title" value="'+data[index].title+'"><br><span>Текста страницы</span><textarea class="text-input__control" name="edit_text">'+data[index].text+'</textarea>');
							break;
						}
					}
					//удалить запись
					$( "#delete" ).click(function() {
						T.deletetable(rad[i].value);
					});
					//редактировать запись
					$( "#edit" ).click(function() {
						var id=document.getElementsByName('edit_id');
						var title=document.getElementsByName('edit_title');
						var text=document.getElementsByName('edit_text');
						T.edittable(id[0].value, title[0].value, text[0].value);
					});
					$( "#add" ).click(function() {
						var id=document.getElementsByName('edit_id');
						var alias=document.getElementsByName('edit_alias_menu');
						var title=document.getElementsByName('edit_title');
						var text=document.getElementsByName('edit_text');
						T.addtable(id[0].value, alias[0].value, title[0].value, text[0].value);
					});
					break;
				}
			}
		});
	}
	this.gettable('content');
}