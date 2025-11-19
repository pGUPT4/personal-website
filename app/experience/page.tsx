import React from 'react';
import VerticalTimeline from '.';

interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
  company?: string;
}

const MyWebsite = () => {
  const myTimelineEvents: TimelineEvent[] = [
    {
      date: 'December 2025',
      title: 'Field Researcher',
      company: 'University of Michigan',
    },
    {
      date: 'November 2025',
      title: 'Data Analyst',
      company: 'Bagelinos LLC',
    },
    {
      date: 'October 2025',
      title: 'Data Annotator',
      company: 'Toloka AI',
    },
    {
      date: 'September 2025',
      title: 'High School Teacher',
      company: 'School Professionals',
    },
    {
      date: 'Jan 2024 - May 2024',
      title: 'Full Stack Engineer Intern',
      company: 'More Seconds',
    },
    {
      date: 'March 2023 - Aug 2023',
      title: 'Tutor',
      company: 'Tutor.com'
    },
    {
      date: 'Aug 2022 - Sep 2022',
      title: 'Full Stack Intern',
      company: 'ThatNeedle.com',
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