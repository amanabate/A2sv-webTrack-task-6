
import React from 'react';
import { Job } from '../types';

interface JobDetailsProps {
  job: Job;
  onBack: () => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job, onBack }) => {
  return (
    <div className="max-w-6xl mx-auto p-8 animate-in fade-in duration-300">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-[#4640DE] font-semibold hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Opportunities
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16">
        {/* Left Column */}
        <div className="space-y-10">
          <section>
            <h2 className="text-[#25324B] font-extrabold text-2xl mb-4">Description</h2>
            <p className="text-[#25324B] text-sm leading-relaxed">
              {job.fullDescription}
            </p>
          </section>

          <section>
            <h2 className="text-[#25324B] font-extrabold text-2xl mb-4">Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="9" stroke="#56CDAD" strokeWidth="1.5"/>
                      <path d="M6 10L9 13L14 8" stroke="#56CDAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#25324B] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-[#25324B] font-extrabold text-2xl mb-4">Ideal Candidate we want</h2>
            <ul className="space-y-2">
              {job.idealCandidate.map((item, index) => {
                const parts = item.split(':');
                return (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#25324B] mt-[6px]">•</span>
                    <span className="text-[#25324B] text-sm leading-relaxed">
                      {parts.length > 1 ? (
                        <>
                          <span className="font-bold">{parts[0]}:</span>
                          {parts.slice(1).join(':')}
                        </>
                      ) : (
                        <span className="font-bold">{item}</span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h2 className="text-[#25324B] font-extrabold text-2xl mb-4">When & Where</h2>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-[#4640DE]/5 rounded-full flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4640DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <p className="text-[#25324B] text-sm leading-relaxed pt-1">
                {job.whenWhere}
              </p>
            </div>
          </section>
        </div>

        {/* Right Column / Sidebar */}
        <div className="space-y-12">
          <section>
            <h2 className="text-[#25324B] font-black text-[32px] mb-8">About</h2>
            <div className="space-y-8">
              <AboutItem label="Posted On" value={job.postedOn} icon="plus-circle" />
              <AboutItem label="Deadline" value={job.deadline} icon="flame" />
              <AboutItem label="Location" value={job.location} icon="map-pin" />
              <AboutItem label="Start Date" value={job.startDate} icon="calendar" />
              <AboutItem label="End Date" value={job.endDate} icon="calendar-grid" />
            </div>
          </section>

          <section>
            <h2 className="text-[#25324B] font-extrabold text-2xl mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {job.categories.map((cat, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-xs font-semibold ${i === 0 ? 'bg-[#FFB836]/10 text-[#FFB836]' : 'bg-[#56CDAD]/10 text-[#56CDAD]'}`}>
                  {cat}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-[#25324B] font-extrabold text-2xl mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {job.requiredSkills.map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-sm text-xs font-semibold bg-[#4640DE]/5 text-[#4640DE]">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const AboutItem = ({ label, value, icon }: { label: string; value: string; icon: string }) => {
  const getIcon = () => {
    switch(icon) {
      case 'plus-circle':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
        );
      case 'flame':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
          </svg>
        );
      case 'map-pin':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
        );
      case 'calendar':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        );
      case 'calendar-grid':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="3" y1="14" x2="21" y2="14"/><line x1="3" y1="18" x2="21" y2="18"/><line x1="7" y1="10" x2="7" y2="22"/><line x1="11" y1="10" x2="11" y2="22"/><line x1="15" y1="10" x2="15" y2="22"/><line x1="19" y1="10" x2="19" y2="22"/>
          </svg>
        );
      default: return null;
    }
  }

  return (
    <div className="flex items-start gap-5">
      <div className="w-[52px] h-[52px] rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-[#F8F9FB] flex items-center justify-center flex-shrink-0 text-[#4640DE]">
        {getIcon()}
      </div>
      <div className="pt-1">
        <p className="text-[#A8ADB7] text-[16px] font-medium leading-none mb-2">{label}</p>
        <p className="text-[#25324B] text-[20px] font-bold leading-tight">{value}</p>
      </div>
    </div>
  )
}

export default JobDetails;
