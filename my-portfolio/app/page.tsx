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
        I’m Parth Gupta, a Mathematics–Computer Science major at UC San Diego, graduated in March 2025. I’m passionate about building full stack systems that combine thoughtful design with smart engineering. With experience across consulting-inspired environments and data-informed development, I’m drawn to projects that bridge technology with real-world problem solving. I thrive in fast-paced settings where I can learn quickly, think critically, and contribute to meaningful outcomes. I’m especially excited by roles that push me to grow across software, strategy, and user-focused impact.
        </p>
      </div>
    </section>
  );
}
