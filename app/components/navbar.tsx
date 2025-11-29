import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <div className="w-full h-16 p-4 bg-white/20 backdrop-blur-md rounded-xl fixed top-0 z-500 flex justify-between items-center">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/">Back</Link>
      </div>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
