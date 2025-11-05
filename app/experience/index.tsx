import React from 'react';
import './Timeline.css';

export interface TimelineEvent {
    date: string;
    title: string;
    description?: string;
    company?: string;
  }

interface VerticalTimelineProps {
  events: TimelineEvent[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ events }) => {
  return (
    <div className="relative w-4/5 max-w-2xl mx-auto py-4">
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 bg-neutral-400 dark:bg-neutral-600`}
        aria-hidden="true"
      />
      {events.map((event, index) => (
        <div key={index} className="relative mb-8">
            <div
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-black bg-white dark:bg-neutral-800 flex items-center justify-center"
              >
                {<span className="w-2 h-2 rounded-full bg-black"></span>}
            </div>
          <div
            className={`relative w-3/5 px-0 py-0 ${
                index % 2 === 0 ? 'text-left left-14' : 'text-right left-12'
              }`}
            style={{
              transform: index % 2 === 0 ? 'translateX(-20%)' : 'translateX(50%)', 
            }}
          >
            <h3 className="text-sm font-bold text-neutral-600 dark:text-neutral-400 mb-1">
              {event.date}
            </h3>
            <h4 className="text-lg font-semibold text-black dark:text-white">
              {event.title}
            </h4>
            {event.company && (
              <h5 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 italic">
                {event.company}
              </h5>
            )}
            {event.description && (
              <p className="text-neutral-500 dark:text-neutral-300 mt-1">
                {event.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;