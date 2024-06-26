import Image from "next/image";
import { siteConfig } from "./config/site-config";
import { Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const GridItems = new Array(12).fill(0);
console.log(GridItems);

export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full gap-10">
      <div className="flex-1 h-full max-w-md p-8">
      <div className="flex flex-col h-full space-y-6 rounded-md">
        <Image src="/foto.png" alt="avatar" width="120" height="120" priority loading="eager"/>
        {/* <Image src="/soul.png" alt="backavatar" width="120" height="120" priority loading="eager"/> */}

      <div>
        <div className="text-xl font-semibold text-primary overflow-auto">{siteConfig.title}
        </div>
        <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
        <p className="text-2xl font-light text-neutral-500">{siteConfig.bio}</p>
      </div>
        <div className="flex items-center gap-6 justify-between text-sm">
          <a className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800" 
          href={siteConfig.locationLink}>
            <MapPin size={16}/>
            {siteConfig.location}
            </a>
            <a className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800" 
          href={`mailto:${siteConfig.email}`}>Contact me
            <Mail size={16}/>
            </a>
        </div>
        <div className="flex items-center justify-center w-full pt-6 border-t border-neutral-100 dark:border-neutral-800">
        <div className="container flex items-center justify-between">
        <div className="text-xs text-neutral-500">
            ©2024 tofu. All Rights Reserved
        </div>
       {/*  <ThemeToggle /> */}
            </div>
            </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 h-full p-6">
        <div className="w-full h-full grid grid-cols-4 auto-rows-[76px] gap-19"></div>
      </div>
    </main>
  );
}
