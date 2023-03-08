export async function postVisit(visitObject) {
  let request = await fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
    },
    body: JSON.stringify({ ...visitObject, status: "open" }),
  });

  let response = await request.json();
  return response;
}

export async function putVisit(visitObject) {
  let request = await fetch(
    `https://ajax.test-danit.com/api/v2/cards/${visitObject.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
      },
      body: JSON.stringify({
        title: "Визит к кардиологу",
        description: "Плановый визит",
        doctor: "Cardiologist",
        bp: "24",
        age: 23,
        weight: 70,
      }),
    }
  );

  let response = await request.json();
  return response;
}

export async function deleteVisit(visitId) {
  let request = await fetch(
    `https://ajax.test-danit.com/api/v2/cards/${visitId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
      },
    }
  );
}

export async function deleteAllVisit() {
  let request = await fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
    },
  });

  let response = await request.json();
  response.map((res) => {
    deleteVisit(res.id);
  });
}

export async function getAllVisits() {
  let request = await fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
    },
  });

  let response = await request.json();

  return response;
}

export async function updateVisitStatus() {
  let request = await fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
    },
  });

  let response = await request.json();

  return response;
}