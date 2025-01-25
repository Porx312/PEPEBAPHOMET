import { Menu, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Button
        variant="ghost"
        size="icon"
        className="text-black flex items-center gap-2 hover:text-[#d400ff]"
      >
        <Menu className="h-6 w-6" />
        <span className="font-bold">MENU</span>
      </Button>
      <div className="flex-1 flex justify-center">
        <h2 className="ml-2 text-xl font-bold">PEPE MAGICO</h2>
      </div>

      <div className="flex items-center gap-4">
        <ThumbsUp className="h-6 w-6" />
        <Button className="bg-[#d400ff] text-black hover:bg-[#ff39f5] font-bold">
          Buy SANDY
        </Button>
      </div>
    </nav>
  );
}
