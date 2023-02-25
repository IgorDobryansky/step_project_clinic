export default async function logInRequest(email, password) {
  const request = await fetch(
    "https://ajax.test-danit.com/api/v2/cards/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }
  );
  const response = await request;
  console.log(response);

  return response;
  // .then((response) => response.text())
  // .then((token) => {
  // });
  // localStorage.setItem("clinic-token", `${token}`);
}
