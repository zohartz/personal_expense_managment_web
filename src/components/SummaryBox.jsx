import React  from "react";
import Card from "react-bootstrap/Card";
// import Chart from "./Chart";
import {
  CircularProgressbar,
  // CircularProgressbarWithChildren,
  // buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SummaryBox = (props) => {
  const percentage = 60;
  const circleStyle = {
    width: "20px",// Customize the root svg element
    root: {},// Customize the path, i.e. the "completed progress"
    path: {// Path color
      stroke: `${props.textColor}`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: "butt",
      // Customize transition animation
      transition: "stroke-dashoffset 0.5s ease 0s",
      // Rotate the path
      //transform: 'rotate(0.25turn)',
      //transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: "#F9F8F4",
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: "butt",
      // Rotate the trail
      transform: "rotate(0.25turn)",
      transformOrigin: "center center",
    },
    // Customize the text
    text: {
      // Text color
      fill: `${props.textColor}`,
      // Text size
      fontSize: "16px",
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: "#01F7C3",
    },
  };
  const incomeColor ={
      color: 'red',
      marginTop: '50px'
    }

  return (
    <Card
      className="text-center"
      border="light"
      style={{ width: "18rem", margin: "15px" }}
    >
      {/* <Card.Header>Header</Card.Header> */}
      <Card.Body>
        <Card.Title className="mb-2 text-muted"> {props.title}</Card.Title>
        <br></br>
        { props.type !=='income' ?
        <div className="circularProgressbarDiv">
          <CircularProgressbar
            value={props.value}
            text={`${props.value}`}
            strokeWidth={5}
            styles={circleStyle}
          />
        </div>
        :
        <div>
            <h1 style = {incomeColor}>{props.value}</h1>
        </div>
        }
        {/* <div className="col-xs-12 col-sm-6 mb-2" key={"vhvk"}>
                <Chart
                  data={props.data}
                  //userConfig={this.props.userConfig}
                  titleName={props.title}
                />
              </div> */}
      </Card.Body>
    </Card>
    // <div class="card" style="width: 18rem;">
    //   <ul class="list-group list-group-flush">
    //     <li class="list-group-item">Cras justo odio</li>
    //     <li class="list-group-item">Dapibus ac facilisis in</li>
    //     <li class="list-group-item">Vestibulum at eros</li>
    //   </ul>
    // </div>
  );
};
SummaryBox.defaultProps = {
    value: 0,
    textColor: '',
    type:''
}
export default SummaryBox;
