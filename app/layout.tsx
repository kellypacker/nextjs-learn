import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px border-b-black border-l-transparent border-r-transparent"
/>
    </html>
  );
}
