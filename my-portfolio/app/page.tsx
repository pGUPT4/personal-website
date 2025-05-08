import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image
        src="/Parth.png"
        alt="Profile photo"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
        unoptimized
        width={160}
        height={160}
        priority
      />
      <h1 className="mb-8 text-2xl font-medium">
        About me!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I’m Parth Gupta, a Mathematics–Computer Science major at the University of California, San Diego, graduating in March 2025. My academic foundation combines rigorous problem-solving with a strong computational mindset, which I’ve applied through hands-on experience in web development, AI-driven applications, and data visualization. I'm particularly interested in full stack development, with a growing focus on building intelligent, user-centric systems at the intersection of AI, consulting, and fintech. I thrive in fast-paced environments where I can bridge technical solutions with real-world impact, and I’m driven by opportunities that challenge me to think critically and build efficiently.
        </p>
      </div>
    </section>
  );
}
