import * as React from "react";

const getPage = async (page : number, pLength : number) => {
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

const Table = () => {

  const [maxLength, setMaxLength] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);

  React.useEffect(() => {
    (async () => {
      try {

        const res = await getPage(1, 50);
        console.log(res);

        setMaxLength(res.len);

      } catch (err) {
        console.log(err);
        throw err;
      }

    })();
  }, []);

  return (
    <div>
      <div>
        <h1>Our users have problems</h1>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <input onChange={(e) => setLastPage(Number(e.target.value))} type="text" value={lastPage}/>
            <div>max: {maxLength}</div>
          </div>
          <div>
            <button onClick={() => getPage(lastPage, 50)}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Table;