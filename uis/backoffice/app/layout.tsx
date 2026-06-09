import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HealthCore Digital Backoffice",
  description: "HealthCore internal operations dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-900">
        <div className="min-h-screen">
          <header className="border-b border-slate-200 bg-slate-950 text-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">HealthCore Digital</p>
                <p className="mt-1 text-xl font-semibold">Internal Operations</p>
              </div>
              <div className="rounded-2xl bg-slate-900 px-4 py-2 text-sm text-slate-300 shadow-sm shadow-slate-950/20">
                Dashboard overview
              </div>
            </div>
          </header>

          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 lg:grid-cols-[260px_minmax(0,1fr)]">
            <aside className="hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:block">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Navigation</p>
                <nav className="space-y-2 text-sm font-medium text-slate-700">
                  <a className="block rounded-2xl bg-slate-100 px-4 py-3" href="#overview">
                    Overview
                  </a>
                  <a className="block rounded-2xl px-4 py-3 hover:bg-slate-100" href="#denial-rate">
                    Denial rate
                  </a>
                  <a className="block rounded-2xl px-4 py-3 hover:bg-slate-100" href="#payer-table">
                    Payer analytics
                  </a>
                </nav>
              </div>
            </aside>
            <main className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
