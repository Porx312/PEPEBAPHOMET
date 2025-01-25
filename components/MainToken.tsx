import { Button } from "@/components/ui/button";

export default function MainContent() {
  return (
    <main className="container mx-auto mt-8 p-4 text-white">
      <section id="about" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">About Magic Token</h2>
        <p className="mb-4">
          Magic Token is a revolutionary cryptocurrency that brings the wonder
          of magic to the blockchain. Our token powers a platform where users
          can trade magical artifacts, cast spells, and participate in mystical
          quests.
        </p>
        <Button className="bg-purple-500 hover:bg-purple-600">
          Learn More
        </Button>
      </section>

      <section id="tokenomics" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Tokenomics</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Total Supply: 1,000,000,000 MAGIC</li>
          <li>Circulating Supply: 600,000,000 MAGIC</li>
          <li>Burn Mechanism: 2% of each transaction</li>
          <li>Reward Pool: 5% of total supply for staking rewards</li>
        </ul>
        <Button className="bg-purple-500 hover:bg-purple-600">
          View Whitepaper
        </Button>
      </section>

      <section id="roadmap" className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Roadmap</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Q2 2023: Token Launch and Initial Exchange Listings</li>
          <li>Q3 2023: Launch of Magic Marketplace for NFT trading</li>
          <li>Q4 2023: Introduction of Spell Casting feature</li>
          <li>Q1 2024: Mobile App Release</li>
          <li>Q2 2024: Cross-chain Bridge Implementation</li>
        </ol>
        <Button className="bg-purple-500 hover:bg-purple-600">
          Join Our Community
        </Button>
      </section>
    </main>
  );
}
