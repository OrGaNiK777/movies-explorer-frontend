const url = "https://api.movies.exporer.diplom.nomoreparties.co";
//const url = "http://localhost:4000";
const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

function checkingResponse(res) {
	if (res.ok) {
		return res.json();
	}
	// если ошибка, отклоняем промис
	return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (email, password, name) => {
	return fetch(`${url}/signup`, {
		method: "POST",
		headers: headers,
		body: JSON.stringify({ password, email, name }),
	}).then((res) => checkingResponse(res));
};

export const authorize = (email, password) => {
	return fetch(`${url}/signin`, {
		method: "POST",
		headers: headers,
		credentials: 'include',
		body: JSON.stringify({ email, password }),
	}).then((res) => checkingResponse(res));
};

export const checkToken = () => {
	return fetch(`${url}/users/me`, {
		method: "GET",
		headers: headers,
		credentials: 'include',
	}).then((res) => { return checkingResponse(res) });
};