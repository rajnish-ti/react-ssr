import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchRequestQuery } from "../actions";

const Home = ({ request, query }) => {
  const [count, setCount] = useState(0);

  console.log("request", request);

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Increase Count
      </button>
      <div>{JSON.stringify(request?.data)}</div>
      <button onClick={query}>RE-FETCH API</button>
    </div>
  );
};

Home.fetchData = ({ dispatch }) => {
  console.log("second");
  dispatch(fetchRequestQuery());
};

const mapStateToProps = ({ request }) => ({
  request,
});

const mapDispatchToProps = (dispatch) => ({
  query: () => dispatch(fetchRequestQuery()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
