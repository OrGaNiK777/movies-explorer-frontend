//const url = "https://api.movies.exporer.diplom.nomoreparties.co";
const url = "http://localhost:5000";
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

export const register = async (email, password, name) => {
	const res = await fetch(`${url}/signup`, {
		method: "POST",
		headers: headers,
		body: JSON.stringify({ password, email, name }),
	});
	return checkingResponse(res);
};

export const authorize = async (email, password) => {
	const res = await fetch(`${url}/signin`, {
		method: "POST",
		headers: headers,
		credentials: 'include',
		body: JSON.stringify({ email, password }),
	});
	return checkingResponse(res);
};

export const checkToken = async () => {
	const res = await fetch(`${url}/users/me`, {
		method: "GET",
		headers: headers,
		credentials: 'include',
	});
	return checkingResponse(res);
};