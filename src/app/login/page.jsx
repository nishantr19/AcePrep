"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
const LoginPage = () => {
  
  const {data,status}=useSession();
  const router=useRouter(); 
   console.log(data,status);

   if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/")
  }


  return (
    <div className={styles.container}>
       
      <div className={styles.wrapper}>
      <div className={styles.imgco}>
                <Image src="/userim.jpg" alt="" fill className={styles.image} />
          </div>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
      </div>
    </div>
  );
};

export default LoginPage;