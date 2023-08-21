const url = " https://api.nomoreparties.co/beatfilm-movies";
const headers = {
  "Content-Type": "application/json",
};

function checkingResponse(res) {
  if (res.ok) {
    return res.json();
  }
  // если ошибка, отклоняем промис
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getMovies = async () => {
  const res = await fetch(`${url}`, {
    method: "GET",
    headers: headers
  });
  return checkingResponse(res);
};
