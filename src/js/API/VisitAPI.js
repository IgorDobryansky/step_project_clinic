export class VisitApi {
  constructor(visit) {
    this._visit = visit;
  }
  static visits = [];

  static async postVisit(visit) {
    let request = await fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
      },
      body: JSON.stringify({ ...visit, status: "open" }),
    });

    let response = await request.json();
    this.visits.push(response);
    return response;
  }

  static async putVisit(visit) {
    let request = await fetch(
      `https://ajax.test-danit.com/api/v2/cards/${visit.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
        },
        body: JSON.stringify({ ...visit }),
      }
    );

    let response = await request.json();
    return response;
  }

  static async deleteVisit(visit) {
    let request = await fetch(
      `https://ajax.test-danit.com/api/v2/cards/${visit.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
        },
      }
    );
    let response = await request.json();
    return response;
  }

  static async getVisit(visit) {
    let request = await fetch(
      `https://ajax.test-danit.com/api/v2/cards/${visit.id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
        },
      }
    );

    let response = await request.json();
    return response;
  }

  static async deleteAllVisit() {
    let request = await fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
      },
    });

    let response = await request.json();

    response.map((res) => {
      this.deleteVisit(res.id);
    });
  }

  static async getAllVisits() {
    let request = await fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
      },
    });

    let response = await request.json();

    response.map((res) => {
      this.visits.push(res);
    });
    return response;
  }
}
