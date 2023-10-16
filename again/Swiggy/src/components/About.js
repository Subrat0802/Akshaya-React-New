import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {

  constructor(props){
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount(){
    // console.log("PARENT MOUNTING");
  }
  

  render() {
    // console.log("Parent render");
    return (
      <div>
        <br/>
        <h1>About Class Comopnent</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}  
          </UserContext.Consumer> 
        </div>
        <h2>This is Namaste React Web Series</h2>
        <br/>
        <UserClass
          name={"Subhra"}
          email={"subrat8@gmail.com"}
          phone={"8884422006"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       <br />
//       {/* <User name={"Function Subrat Mishra"}
//                 email={"piyush.subrat8@gmail.com"}
//                 phone={"7024422006"}/> */}
//       <br />
//       <br />
//       <UserClass
//         name={"Class Sittu Mishra"}
//         email={"sittu8@gmail.com"}
//         phone={"8884422006"}
//       />
//     </div>
//   );
// };

export default About;
