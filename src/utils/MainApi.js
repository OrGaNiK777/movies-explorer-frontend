//const url = "https://api.movies.exporer.diplom.nomoreparties.co"
const url = "http://localhost:4000"
const headers = {
	"Content-Type": "application/json"
}

// обработка результата ответа сервера
export const checkingResponse = (res) => {
	if (res.ok) {
		return res.json();
	}
	// если ошибка, отклоняем промис
	return Promise.reject(`Ошибка: ${res.status}`);
}

//получение данных о пользователе
export const getUserInfo = () => {
	return fetch(`${url}/users/me`, {
		headers: headers,
		credentials: 'include',
	}).then((res) => checkingResponse(res));
}

//обновление данных о пользователе
export function patchUserInfo(name, email) {
	return fetch(`${url}/users/me`, {
		method: "PATCH",
		headers: headers,
		credentials: 'include',
		body: JSON.stringify({ name, email }),
	}).then((res) => checkingResponse(res));
}

//выгрузка сохраненных фильмов
export function getMovieCurrentUser() {
	return fetch(`${url}/movies`, {
		headers: headers,
		credentials: 'include',
	}).then((res) => checkingResponse(res));
}

//отправка данных нового фильма
export const postMovies = async (data) => {
	const res = await fetch(`${url}/movies`, {
		method: "post",
		headers: headers,
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
	return checkingResponse(res);
}

//Удаление фильма
export async function deleteMoviesById(id) {
	const res = await fetch(`${url}/movies/${id}`, {
		method: "DELETE",
		headers: headers,
		credentials: 'include',
	});
	return checkingResponse(res);
}

//выход с сайта
export function loginOut() {
	return fetch(`${url}/signout`, {
		method: "DELETE",
		headers: headers,
		credentials: 'include',
	}).then((res) => checkingResponse(res));
}