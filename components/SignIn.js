import { useState } from "react";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="column is-one-third has-background-dark full is-vcentered">
      <div className="container mx-4">
        <form className="field">
          <input
            className="control field input"
            type="email"
            placeholder="e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="control field input"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <input
            className="control input button is-link"
            type="submit"
            value="Sign In"
          />
          <Link href="/sign-up">Click Here To Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
