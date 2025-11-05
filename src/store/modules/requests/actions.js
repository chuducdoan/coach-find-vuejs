export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://my-project-1554289997307-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to send request");
      throw error;
    }
    newRequest.id = response.name;
    newRequest.coachId = payload.coachId;

    context.commit("addRequest", newRequest);
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters["auth/userId"];
    const token = context.rootGetters["auth/token"];
    const response = await fetch(
      `https://my-project-1554289997307-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to send request");
      throw error;
    }

    const requests = [];

    for (var key in responseData) {
      const request = {
        id: key,
        message: responseData[key].message,
        userEmail: responseData[key].userEmail,
        coachId: coachId,
      };
      requests.push(request);
    }

    context.commit("setRequest", requests);
  },
};
