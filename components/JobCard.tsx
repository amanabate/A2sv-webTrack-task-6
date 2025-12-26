
import React from 'react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  onClick: (job: Job) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  return (
    <div 
      onClick={() => onClick(job)}
      className="bg-white border border-[#D6DDEB] rounded-[20px] p-6 mb-4 flex gap-6 cursor-pointer hover:shadow-sm transition-shadow"
    >
      <div className="flex-shrink-0">
        <img 
          src={job.logo} 
          alt={job.company} 
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <div className="flex flex-col mb-2">
          <h3 className="text-[#25324B] font-bold text-lg leading-tight">{job.title}</h3>
          <p className="text-[#7C8493] text-sm mt-1">
            {job.company} <span className="mx-1">•</span> {job.location}
          </p>
        </div>
        <p className="text-[#25324B] text-sm leading-relaxed mb-4 line-clamp-3">
          {job.description}
        </p>
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#56CDAD]/10 text-[#56CDAD]">
            In Person
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFB836]/10 text-[#FFB836] border border-[#FFB836]/20">
            Education
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold border border-[#4640DE] text-[#4640DE]">
            IT
          </span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
