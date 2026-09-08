import React from 'react';
import { getLiveRestaurantStatus } from '../../utils/openingHours';
import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export const RestaurantStatusBadge: React.FC = () => {
  const status = getLiveRestaurantStatus();

  return (
    <div
      id="live-status-badge"
      className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#1A1A1A]/90 border border-[#2E2E2E] backdrop-blur-md shadow-lg"
    >
      <div className="relative flex items-center justify-center">
        <span
          className={`w-3 h-3 rounded-full ${
            status.isOpen ? 'bg-emerald-500' : 'bg-rose-500'
          }`}
        />
        {status.isOpen && (
          <span className="absolute w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-75" />
        )}
      </div>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-black uppercase tracking-wider text-white">
            {status.statusText}
          </span>
          {status.isOpen ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
          )}
        </div>
        <span className="text-[11px] text-neutral-400 font-medium">
          {status.subText}
        </span>
      </div>
    </div>
  );
};
