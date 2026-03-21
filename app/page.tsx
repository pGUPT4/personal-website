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
          I’m Parth Gupta, a Mathematics–Computer Science graduate from UC San Diego now based in New York City.
          <br/><br/>
          I’m driven by turning raw, messy information into clear stories that help people make better decisions—whether that’s uncovering patterns in everyday data, streamlining processes for teams, or supporting better outcomes in education and community settings. My journey has taken me through hands-on consulting-style projects, where I’ve built end-to-end solutions to analyze and deliver insights, and real-world roles in education, where I’ve focused on gathering accurate information to inform research and analysis.
          <br/><br/>
          I enjoy the challenge of bridging complex details with practical impact: collecting reliable data, spotting trends, then communicate findings to business decisions. Whether it’s for business strategy, educational improvement, or creative fields, I’m excited to bring thoughtful, data-informed perspectives to collaborative teams.
          <br/><br/>
          I’m actively seeking my next full-time analyst role and available to start immediately. I’d love to chat about how I can contribute to your team!
        </p>
      </div>
    </section>
  );
}
