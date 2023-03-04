import React from "react";
import Apis from "../components/Apis";
// import tripapis from "../components/TripApis";

import { Input } from "antd";
import { Button } from "antd";

const { Search } = Input;

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Trip.com",
      datapayload: [],
      isLoding: false
    };
  }
  componentDidMount() {
    // this.setState({ datapayload: Apis });
    // console.log("component did mount", this.state.datapayload);
    // this.setState({ isLoading: false });

    this.getApis();
  }
  getApis() {
    fetch(Apis)
      .then(() => {
        console.log("success");
        if (Apis.status === "success") {
          this.setState({ datapayload: Apis, isLoading: true });
          console.log("datapay", this.state.datapayload);
        }
        // this.setState({ datapayload: Apis });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }
  handleSearch(value) {
    console.log("value", value);
  }
  render() {
    return (
      <>
        <div className="headerInfo">
          <p className="Tripcom"> {this.state.name} </p>
        </div>
        <div className="headerInfo">
          <Search
            placeholder="input search text"
            onSearch={(value) => this.handleSearch(value)}
          />
          <Button type="primary">App</Button>
          <Button type="primary">search</Button>

          <Button type="dashed">sign/Register</Button>
        </div>
        <div>
          {this.state.isLoading
            ? this.state.datapayload.map((element, key) => {
                return (
                  <div>
                    {element.data.forEach((elements) => {
                      <p>{elements}</p>;
                    })}
                  </div>
                );
              })
            : "errors"}
        </div>
      </>
    );
  }
}
export default Trip;
