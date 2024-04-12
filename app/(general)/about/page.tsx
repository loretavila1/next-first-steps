import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['About Page', 'Loreto', 'Info']
};

export default function AboutPage(){
    return (
        <span className="text-7xl">AboutPage</span>
    )
} 