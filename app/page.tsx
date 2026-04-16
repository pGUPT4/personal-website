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
          I’m passionate about transforming raw, messy information into clear, actionable stories that drive better decisions. Whether it’s uncovering hidden patterns in data, building efficient pipelines, creating insightful visualizations, or turning complex analysis into something practical and impactful.
          <br/><br/>
          My background blends hands-on field research and data validation with technical experience in software engineering internships, where I worked on APIs, workflows, and interactive dashboards. Through academic projects and professional roles, I’ve strengthened my skills in processing large datasets, building models, and delivering clear findings that support strategy and real-world outcomes.
          <br/><br/>
          I’m always excited to collaborate on interesting problems — whether it’s data analysis projects, joint explorations in tech and finance, knowledge sharing, or creative applications of data skills. I enjoy connecting complex details with practical impact and am open to conversations with like-minded people.
          <br/><br/>
          Feel free to reach out if you’d like to connect or explore potential collaborations!
          <br/><br/>
          I’d love to connect and discuss how we might work together.
        </p>
      </div>
    </section>
  );
}
