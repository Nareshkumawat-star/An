import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Resume - Naresh Kumawat",
  description:
    "View and download Naresh Kumawat's professional resume. Software Developer specializing in React, Next.js, and full-stack development.",
  keywords: resumeKeywords,
  openGraph: {
    title: "Resume - Naresh Kumawat",
    description:
      "View and download Naresh Kumawat's professional resume featuring his experience and skills.",
    url: "https://nareshkumawat.vercel.app/resume",
    siteName: "Naresh Kumawat",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Naresh Kumawat Resume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Naresh Kumawat",
    description:
      "View Naresh Kumawat's professional resume and experience.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <link
        rel="preload"
        href="/docs/Naresh_Kumawat_Resume.pdf"
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />
      {children}
    </>
  );
}
