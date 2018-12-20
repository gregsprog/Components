import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <h3>HelloWorld!</h3>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard header="china">
      <div><h4>Cooler</h4></div>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          content="Good stuff"
        /> 
      </ApprovalCard>
      <ApprovalCard>  
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00PM"
          avatar={faker.image.avatar()}
          content="I agree"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          avatar={faker.image.avatar()}
          content="Way to go"
        />
      </ApprovalCard>  
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
