import React from 'react';
import VerticalTimeline from '.';

interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
}

const MyWebsite = () => {
  const myTimelineEvents: TimelineEvent[] = [
    {
      date: 'Jan 2024 - May 2024',
      title: 'Full Stack Engineer Intern',
      description: 'MongoDB, React, TypeScript, Node.js, Express.js, Docker, OpenAI, Python',
    },
    {
      date: 'March 2023 - Aug 2023',
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