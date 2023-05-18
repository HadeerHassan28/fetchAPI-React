import React, { Component } from "react";
import axios from "axios";

class FetshApi extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    axios
      .get(
        "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
      )
      .then((res) =>
        this.setState({
          data: res.data,
        })
      );
  }

  render() {
    // console.log("the render", this.state.data);

    return (
      <div>
        <h1 style={{ color: "red" }}>INFO.</h1>

        <ul>
          {this.state.data.map((item) => (
            <div key={item.id}>
              <h4>{item.Title}</h4>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
export default FetshApi;
