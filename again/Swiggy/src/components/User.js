import { useState } from "react";

const User = ({name,email,phone}) => {
    const [count, setCount] = useState(0);
    const [count1] = useState(1);
    const handleClick = () => {
        count=1;
        setCount(count);
    }

    async function getuserInfo(){
        
    }

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button>click</button>
      <h1>Count1 = {count1}</h1>
      <h2>Name: {name}</h2>
      <h3>Email: {email}</h3>
      <h4>Contact: {phone}</h4>
    </div>
  );
};

export default User;
