
import React, { useState } from 'react';
import { JOB_DATA } from './data';
import { Job } from './types';
import JobCard from './components/JobCard';
import JobDetails from './components/JobDetails';

const App: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleBackToList = () => {
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {selectedJob ? (
        <JobDetails job={selectedJob} onBack={handleBackToList} />
      ) : (
        <div className="max-w-4xl mx-auto py-12 px-6">
          <header className="flex justify-between items-end mb-10">
            <div>
              <h1 className="text-[#25324B] text-[32px] font-black leading-tight">Opportunities</h1>
              <p className="text-[#7C8493] text-sm font-medium mt-1">Showing 73 results</p>
            </div>
            <div className="flex items-center gap-2 text-[#25324B] text-sm font-semibold cursor-pointer">
              <span className="text-[#7C8493]">Sort by:</span>
              <div className="flex items-center gap-1 border-r border-[#D6DDEB] pr-4">
                <span>Most relevant</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#4640DE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </header>

          <div className="space-y-4">
            {JOB_DATA.map((job) => (
              <JobCard 
                key={job.id} 
                job={job} 
                onClick={handleJobClick} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
