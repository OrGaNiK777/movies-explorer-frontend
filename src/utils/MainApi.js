class Api {
	constructor(options) {
		// тело конструктора
		this._url = options.url;
		this._headers = options.headers;
	}

	// обработка результата ответа сервера
	_checkingResponse(res) {
		if (res.ok) {
			return res.json();
		}
		// если ошибка, отклоняем промис
		return Promise.reject(`Ошибка: ${res.status}`);
	}

	_request(url, options) {
		return fetch(url, options).then(this._checkingResponse);
	}

	//получение данных о пользователе
	getUserInfo() {
		return this._request(`${this._url}/users/me`, {
			headers: this._headers,
			credentials: 'include',
		});
	}

	//обновление данных о пользователе
	patchUserInfo(name, email) {
		return this._request(`${this._url}/users/me`, {
			method: "PATCH",
			headers: this._headers,
			credentials: 'include',
			body: JSON.stringify({ name, email }),
		});
	}

	//выгрузка сохраненных фильмов
	getMovieCurrentUser() {
		return this._request(`${this._url}/movies`, {
			headers: this._headers,
			credentials: 'include',
		});
	}

	//отправка данных нового фильма
	postMovies(data) {
		return this._request(`${this._url}/movies`, {
			method: "post",
			headers: this._headers,
			credentials: 'include',
			body: JSON.stringify({
				country: data.country,
				director: data.director,
				duration: data.duration,
				year: data.year,
				description: data.description,
				image: `https://api.nomoreparties.co${data.image.url}`,
				trailerLink: data.trailerLink,
				nameRU: data.nameRU,
				nameEN: data.nameEN,
				thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
				movieId: data.id
			}),
		});
	}

	//Удаление фильма
	deleteMoviesById(id) {
		return this._request(`${this._url}/movies/${id}`, {
			method: "DELETE",
			headers: this._headers,
			credentials: 'include',
		});
	}

	//выход с сайта
	loginOut() {
		return this._request(`${this._url}/signout`, {
			method: "DELETE",
			headers: this._headers,
			credentials: 'include',
		});
	}
}

const api = new Api({
	url: "http://localhost:4000",
	//url: "https://api.mesto.organik.nomoredomains.xyz",
	headers: {
		"Content-Type": "application/json"
	},
},
);

export default api;
