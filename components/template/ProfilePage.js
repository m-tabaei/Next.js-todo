import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import ProfileForm from "../module/ProfileForm";

function ProfilePage() {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState(null);

  useEffect(()=>{},[])

const fetchProfile= async()=>{
    const res = await fetch("/api/profile")
    const data = await res.json()
    if(data.status === "success" && data.data.name && data.data.lastName){
        setData(data.data);
    }
}


  const submitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({ name, lastName, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="profile-form">
      <h2>
        <CgProfile />
        Profile
      </h2>
   {data ?("mohammad"):(   <ProfileForm
        name={name}
        lastName={lastName}
        setName={setName}
        setLastName={setLastName}
        password={password}
        setPassword={setPassword}
        submitHandler={submitHandler}
      />)}
    </div>
  );
}

export default ProfilePage;
