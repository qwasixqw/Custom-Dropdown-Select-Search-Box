'use strict';

const menuItem = document.querySelector('.select-menu');
const menuButton = menuItem.querySelector('.select-menu__button');
const menuText = menuItem.querySelector('.select-menu__text');
const optionsWrap = document.querySelector('.options');
const optionsList = document.querySelector('.options__list');
const searchInput = document.querySelector('.options__input input');

const countries = [
	'Афганистан',
	'Албания',
	'Алжир',
	'Андорра',
	'Ангола',
	'Антигуа и Барбуда',
	'Аргентина',
	'Армения',
	'Австралия',
	'Австрия',
	'Азербайджан',
	'Багамы',
	'Бахрейн',
	'Бангладеш',
	'Барбадос',
	'Беларусь',
	'Бельгия',
	'Белиз',
	'Бенин',
	'Бутан',
	'Боливия',
	'Босния и Герцеговина',
	'Ботсвана',
	'Бразилия',
	'Бруней',
	'Болгария',
	'Буркина-Фасо',
	'Бурунди',
	'Камбоджа',
	'Камерун',
	'Канада',
	'Кабо-Верде',
	'Центральноафриканская Республика',
	'Чад',
	'Чили',
	'Китай',
	'Колумбия',
	'Коморы',
	'Конго',
	'Коста-Рика',
	'Хорватия',
	'Куба',
	'Кипр',
	'Чехия',
	'Дания',
	'Джибути',
	'Доминика',
	'Доминиканская Республика',
	'Восточный Тимор',
	'Эквадор',
	'Египет',
	'Эль Сальвадор',
	'Экваториальная Гвинея',
	'Эритрея',
	'Эстония',
	'Эфиопия',
	'Фиджи',
	'Финляндия',
	'Франция',
	'Габон',
	'Гамбия',
	'Грузия',
	'Германия',
	'Гана',
	'Греция',
	'Гренада',
	'Гватемала',
	'Гвинея',
	'Гвинея-Бисау',
	'Гайана',
	'Гаити',
	'Гондурас',
	'Венгрия',
	'Исландия',
	'Индия',
	'Индонезия',
	'Иран',
	'Ирак',
	'Ирландия',
	'Израиль',
	'Италия',
	'Ямайка',
	'Япония',
	'Иордания',
	'Казахстан',
	'Кения',
	'Кирибати',
	'Кувейт',
	'Кыргызстан',
	'Лаос',
	'Латвия',
	'Ливан',
	'Лесото',
	'Либерия',
	'Ливия',
	'Лихтенштейн',
	'Литва',
	'Люксембург',
	'Македония',
	'Мадагаскар',
	'Малави',
	'Малайзия',
	'Мальдивы',
	'Мали',
	'Мальта',
	'Маршалловы Острова',
	'Мавритания',
	'Маврикий',
	'Мексика',
	'Микронезия',
	'Молдова',
	'Монако',
	'Монголия',
	'Черногория',
	'Марокко',
	'Мозамбик',
	'Мьянма',
	'Намибия',
	'Науру',
	'Непал',
	'Нидерланды',
	'Новая Зеландия',
	'Никарагуа',
	'Нигер',
	'Нигерия',
	'Норвегия',
	'Оман',
	'Пакистан',
	'Палау',
	'Панама',
	'Папуа — Новая Гвинея',
	'Парагвай',
	'Перу',
	'Филиппины',
	'Польша',
	'Португалия',
	'Катар',
	'Румыния',
	'Россия',
	'Руанда',
	'Сент-Китс и Невис',
	'Сент-Люсия',
	'Сент-Винсент и Гренадины',
	'Самоа',
	'Сан-Марино',
	'Сан-Томе и Принсипи',
	'Саудовская Аравия',
	'Сенегал',
	'Сербия',
	'Сейшельские Острова',
	'Сьерра-Леоне',
	'Сингапур',
	'Словакия',
	'Словения',
	'Соломоновы Острова',
	'Сомали',
	'Южная Африка',
	'Южный Судан',
	'Испания',
	'Шри-Ланка',
	'Судан',
	'Суринам',
	'Свазиленд',
	'Швеция',
	'Швейцария',
	'Сирия',
	'Таджикистан',
	'Танзания',
	'Таиланд',
	'Того',
	'Тонга',
	'Тринидад и Тобаго',
	'Тунис',
	'Турция',
	'Туркменистан',
	'Тувалу',
	'Уганда',
	'Украина',
	'Объединенные Арабские Эмираты',
	'Соединенное Королевство',
	'США',
	'Уругвай',
	'Узбекистан',
	'Вануату',
	'Ватикан',
	'Венесуэла',
	'Вьетнам',
	'Йемен',
	'Замбия',
	'Зимбабве',
];

menuItem.addEventListener('click', buttonHandler);
optionsWrap.addEventListener('click', updateName);
searchInput.addEventListener('keyup', (event) => {
	let arr = [];
	let searchedValue = event.target.value.toLowerCase();

	arr = countries
		.filter((country) => {
			return country.toLowerCase().includes(searchedValue);
		})
		.map((country) => {
			return `<div class="options__item">
				<div class="options__country">${country}</div>
			</div>`;
		})
		.join('');

	optionsList.innerHTML = arr ? arr : `<p class="options__empty">Ничего не найдено</p>`;
});

function addCountryNames() {
	optionsList.innerHTML = '';

	countries.forEach((country) => {
		const item = `<div class="options__item">
			<div class="options__country">${country}</div>
		</div>`;

		optionsList.innerHTML += item;
	});
}
addCountryNames();

function updateName(event) {
	const typeOptions = event.target.classList.contains('options__country');

	if (typeOptions) {
		menuText.textContent = event.target.textContent;

		optionsWrap.classList.remove('active');
		menuButton.classList.remove('active');
	}

	searchInput.value = '';

	addCountryNames();
}

function buttonHandler() {
	menuButton.classList.toggle('active');
	optionsWrap.classList.toggle('active');
}
