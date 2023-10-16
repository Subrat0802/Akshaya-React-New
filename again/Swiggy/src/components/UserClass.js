import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("child constructor");
    this.state = {
        userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url: "https://xyz.com"
        }
    };
  }
  async componentDidMount(){
    // console.log("child mounting")
    
    const data = await fetch("https://api.github.com/users/Subrat0802");
    const json = await data.json();

    this.setState({
        userInfo: json,

    })
    // console.log(json);

  }
  render() {
    const {avatar_url, name, login} = this.state.userInfo;
    const {phone} = this.props;
    // console.log("child render");    
    return (
      <div className="user-card">   
        <img src={avatar_url}></img>     
        <h2>UserClass Name: {name}</h2>
        <h3>userClass Username: {login}</h3>
        <h3>Class phone: {phone}</h3>
      </div>
    );
  }
}

export default UserClass;








// class UserClass extends React.Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         count: 0,
//         count1: 1,
//         count2: 2,
//         count3: 3,
//         count4: 4,
//       };
//     }
//     componentDidMount(){
      
//     }
//     render() {
//       const { name, email, phone } = this.props;
//       const { count, count1, count2, count3 } = this.state;
//       return (
//         <div className="user-card">
//           <h1>Count = {count}</h1>
//           <h1>Count1 = {count1}</h1>
//           <h1>Count2 = {count2}</h1>
//           <h1>Count3 = {count3}</h1>
//           <button
//             onClick={() => {
//               // Todo never update state variable directly
//               this.setState({
//                 count: this.state.count + 1,
//                 count1: this.state.count1 + 1,
//                 count2: this.state.count2 + 1,
//                 count3: this.state.count3 + 1,
//               });
//             }}
//           >
//             Count1 Increase
//           </button>
//           <h2>UserClass Name: {name}</h2>
//           <h3>userClass Email: {email}</h3>
//           <h4>UserClass Contact: {phone}</h4>
//         </div>
//       );
//     }
//   }
  
//   export default UserClass;
  