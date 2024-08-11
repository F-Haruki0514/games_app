import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>this is StartPage</div>
      <Link href="/login">To Login Page</Link>
    </div>
    
  );
}
