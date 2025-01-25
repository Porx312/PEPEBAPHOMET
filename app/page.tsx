import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Send } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFD700] relative overflow-hidden flex flex-col stile">
      {/* Sunburst Background */}

      {/* Navigation */}
      <nav className="relative z-10 max-w-6xl mx-auto px-4 py-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            $PEPEBAPHOMET
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {/*    <Link href="/" className=" hover:text-white/70">
              Home
            </Link>
            <Link href="/how-to-buy" className=" hover:text-white/70">
            How to buy
            </Link>
            <Link href="/tokonomics" className=" hover:text-white/70">
            Tokonomics
            </Link>
            <Link href="/faq" className=" hover:text-white/70">
            Faq
            </Link> */}
            <Button className="bg-[#FF6B00] hover:bg-[#FF6B00]/70 text-white rounded-full px-6">
              BUY $PEPEBAPHOMET
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative  z-10 max-w-6xl mx-auto px-4 pt-12 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl  md:text-7xl font-bold mb-4">
              <span className="text-[#FF6B00]">LET</span>
              <br />
              <span className="text-white">PEPEBAPHOMET</span>
            </h1>
            <p className="text-lg mb-8 max-w-lg">
              <span className="text-[#FF6B00] font-semibold">
                Fill your wallets with profits
              </span>
              <p className="mt-2 text-white">
                Get ready for a mystical journey to wealth with PepeBaphomet{" "}
                <span className="text-orange-400">$BAPHO</span>, the meme coin
                that blends ancient wisdom with the power of profits. It&apos;s
                not just a token; it&apos;s a spiritual experience for your
                portfolio.
              </p>
            </p>

            <div className="flex items-center gap-4">
              <Button className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-lg">
                BUY $PEPEBAPHOMET
              </Button>
              <Link href="https://x.com/PepeBapho" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/10 backdrop-blur-sm"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="http://t.me/pepebaphometcoin" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/10 backdrop-blur-sm"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[340px] md:h-[500px] animate-float">
            <Image
              src="https://res.cloudinary.com/dq0pfesxe/image/upload/v1737761123/pepe_c6ftjb.png"
              alt="Pepe Character"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
