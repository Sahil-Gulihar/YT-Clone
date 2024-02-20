import { VideoGrid } from "@/components/VideoGrid";
import {VideoCard} from "../components/VideoCard";
import { Inter } from "next/font/google";
import { AppBar } from "@/components/AppBar";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div >
      <AppBar />
      <VideoGrid />
    </div>
    
  );


}
