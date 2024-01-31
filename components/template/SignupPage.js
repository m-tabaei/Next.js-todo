import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();
  const {status} = useSession();

  useEffect(()=>{if (status ===
      "authenticated"
      )
  router.replace("/")},[status,router]
      )

  const signUpHandler = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data)
    if (data.status === "success") router.push("/signin");
  };

  return (
    <div className="signin-form">
      <h3>Regestration Form</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signUpHandler}>Register</button>
      <p>Have an account?</p>
      <Link href="/signin">Signin</Link>
    </div>
  );
}

export default SignupPage;
