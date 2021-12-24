import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn } from "next-auth/client";

import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedin = true;

  return isUserLoggedin ? (
    <button type="button" className={styles.SignInButton}>
      <FaGithub color="#84d361" />
      Alberto Lutz
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.SignInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
