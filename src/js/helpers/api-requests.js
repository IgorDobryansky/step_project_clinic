const token = localStorage.getItem("clinic-token");

export async function postCard() {
  const request = await fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: "Визит к кардиологу",
      description: "Плановый визит",
      doctor: "Cardiologist",
      bp: "24",
      age: 23,
      weight: 70,
    }),
  });

  const response = await request.json();

  console.log(await response);
}

export async function deleteCard(cardId) {
  const request = await fetch(
    `https://ajax.test-danit.com/api/v2/cards/${cardId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const response = await request;

  console.log(await response);
}

export async function getCard(cardId) {
  const request = await fetch(
    `https://ajax.test-danit.com/api/v2/cards/${cardId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const response = await request.json();
  console.log(response);
}

export async function getAllCards() {
  try {
    const request = await fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!request.ok)
      throw `Вибачте. Помилка ${request.status}. Помилка авторизації. Авторизуйтесь, будь-ласка, повторно.`;

    const response = await request.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function editCard({
  id,
  title,
  description,
  doctor,
  bp,
  age,
  weight,
}) {
  const request = await fetch(
    `https://ajax.test-danit.com/api/v2/cards/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: id,
        title: title,
        description: description,
        doctor: doctor,
        bp: bp,
        age: age,
        weight: weight,
      }),
    }
  );

  const response = await request.json();

  console.log(await response);
}
