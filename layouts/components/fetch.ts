"use strict";

export const solveProblem = async (userId : number) => {
  try {

    const res = await fetch("/solve", {
      method: "POST",
      headers: {
        "content-type" : "application/json",
      },
      body: JSON.stringify({id : userId}),
    });

    if (!res.ok)
      throw new Error(`HTTP response status: ${res.status}`);

    return res.json();

  } catch (err) {
    console.log(err);
    throw err;
  }
}

export const getPage = async (page : number, pLength : number) => {
  try {

    const res : Response = await fetch("/page", {
      method: "POST",
      headers: {
        "content-type" : "application/json",
      },
      body: JSON.stringify({
        page: page,
        pLength: pLength,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP status: ${res.status}`);
    }

    return res.json();

  } catch (err) {
    console.log(err);
    throw err;
  }
}