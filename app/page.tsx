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
          I’m Parth Gupta, a recent Mathematics–Computer Science graduate from UC San Diego. I’m passionate about transforming statistics into clear, actionable insights through interactive charts and visualizations seamlessly integrated into full stack applications. My background combines consulting-style problem solving, developing end-to-end systems that leverage AI/ML techniques to analyze text data and deliver built-in data analytics capabilities, and strengthening mathematical understanding in the education industry. This combination of analytical expertise and engineering skills allows me to design systems that collect, process, and analyze data to uncover insights, identify trends, and generate actionable metrics. I’m motivated to transform complex datasets into clear insights and actionable metrics that drive strategic, data-informed decisions.
        </p>
      </div>
    </section>
  );
}
