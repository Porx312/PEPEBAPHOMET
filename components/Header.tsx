"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, TextIcon as Telegram, Wallet } from "lucide-react";

export default function Header() {
  const [walletAddress, setWalletAddress] = useState("0x1234...5678");

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard!");
  };

  return (
    <header className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/magic-logo.svg"
            alt="Magic Token Logo"
            width={50}
            height={50}
          />
          <h1 className="text-2xl font-bold">Magic Token</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#about" className="hover:text-purple-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#tokenomics" className="hover:text-purple-300">
                Tokenomics
              </Link>
            </li>
            <li>
              <Link href="#roadmap" className="hover:text-purple-300">
                Roadmap
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <Input
            value={walletAddress}
            readOnly
            className="bg-purple-700 text-white border-purple-600"
          />
          <Button onClick={copyWalletAddress} variant="outline" size="icon">
            <Wallet className="h-4 w-4" />
          </Button>
          <Link
            href="https://twitter.com/magictoken"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="https://t.me/magictoken"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon">
              <Telegram className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
