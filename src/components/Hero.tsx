import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="w-36 h-36 rounded-full border-4 border-zinc-200 dark:border-zinc-700 mx-auto mb-8 overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            <Image src="/pic.png" alt="Kundan Thota" width={144} height={144} className="object-cover w-full h-full" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
            Hi, I&apos;m{" "}
            <span className="text-[#00b894]">Kundan Thota</span>
          </h1>
          <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-4 max-w-3xl mx-auto">
            I help climate tech and energy companies solve critical data problems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="mailto:kundanthota@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
