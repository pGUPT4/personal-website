import React from 'react';
import VerticalTimeline from '.'; // Adjust the import path

interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
}

const MyWebsite = () => {
  const myTimelineEvents: TimelineEvent[] = [
    {
      date: 'Jan 2024 - May 2024',
      title: 'Web Developer and AI Intern',
      description: 'MongoDB, React TypeScript, Python, Docker, OpenAI',
    },
    {
      date: 'March 2023 - Aug 2022',
      title: 'Tutor',
    },
    {
      date: 'Aug 2022 - Sep 2022',
      title: 'Full Stack Intern',
      description: 'JavaScript, Python, HTML, CSS',
    },
  ];

  return (
    <div>
      <h1>My Journey</h1>
      <VerticalTimeline events={myTimelineEvents} />
    </div>
  );
};

export default MyWebsite;