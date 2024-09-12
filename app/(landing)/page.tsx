import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Landing Page (Unprotected)
      <Link href={"/dashboard"}>
      <Button>
        Login
      </Button>
      </Link>
      <Link href={"/sign-up"}>
      <Button>
        Register
      </Button>
      </Link>

    </div>
  );
}
