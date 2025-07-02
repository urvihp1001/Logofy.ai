import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h2 className="text-4xl font-bold mb-6">Welcome to Logofy.ai</h2>
    <Button className="mb-4">
      Visit Logofy.ai
    </Button>
  </div>  
  );
}
