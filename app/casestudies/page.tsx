//  // app/case-study/page.tsx
//  import CaseStudyAarkay from "@/app/components/CaseStudyAarkay";
  
//  export default function Page(): JSX.Element {
//    return <CaseStudyAarkay />;
//  }
 import Link from "next/link";
import { JSX } from "react";


 export default function Page(): JSX.Element {
 return (
 <main className="py-24 px-6 max-w-5xl mx-auto">
 <h1 className="text-4xl font-extrabold mb-8">Case Studies</h1>
 
 
 <div className="grid md:grid-cols-2 gap-6">
 <Link href="/casestudies/modern-trade" className="p-6 border rounded-lg bg-white/5 hover:bg-white/6">Modern Trade Uplift</Link>
 <Link href="/casestudies/aarkay" className="p-6 border rounded-lg bg-white/5 hover:bg-white/6">Digital Enablement – Aarkay</Link>
 <Link href="/casestudies/cleanomatics" className="p-6 border rounded-lg bg-white/5 hover:bg-white/6">D2C Phygital – Cleanomatics</Link>
 <Link href="/casestudies/abm" className="p-6 border rounded-lg bg-white/5 hover:bg-white/6">B2B ABM Engine</Link>
 <Link href="/casestudies/cleanomatics-bigin" className="p-6 border rounded-lg bg-white/5 hover:bg-white/6">Bigin – Cleanomatics</Link>
 </div>
 </main>
 );
 }