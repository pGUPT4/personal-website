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
          I’m Parth Gupta, a recent Mathematics–Computer Science graduate from UC San Diego, now based in New York City.
          <br/><br/>
          I’m driven by turning raw, messy information into clear stories that help people make better decisions — whether uncovering patterns in everyday data, streamlining processes for teams, or supporting better outcomes in education and community settings. My journey has combined hands-on data collection and validation through field research with technical work building data pipelines, analyzing datasets, and creating visualizations.
          <br/><br/>
          Through my software engineering internships, I gained experience developing reliable systems, working with APIs and workflows, and turning data into interactive insights. My academic projects have further strengthened my ability to process large datasets, build models, and deliver clear, actionable findings through dashboards and analysis.
          <br/><br/>
          I enjoy bridging complex details with practical impact and am excited to bring this blend of real-world data handling and technical analysis to collaborative teams — whether in business strategy, educational improvement, or other dynamic environments.
          <br/><br/>
          I’m actively seeking my next full-time analyst role and available to start immediately. I’d love to chat about how I can contribute to your team.
        </p>
      </div>
    </section>
  );
}
