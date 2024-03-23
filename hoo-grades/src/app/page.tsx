import Navbar from "@/components/Navbar";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className={outfit.className}>
      <Navbar {...outfit} />
    </main>
  );
}
