import React from 'react';
import { ratingStats } from '../../data/reviews';
import { Star, CheckCircle2 } from 'lucide-react';

export const RatingDistribution: React.FC = () => {
  return (
    <div className="p-6 rounded-3xl bg-[#1A1A1A] border border-[#2B2B2B] shadow-xl flex flex-col justify-between">
      {/* Top Rating Summary */}
      <div className="flex items-center gap-4 pb-5 border-b border-[#282828]">
        <div className="text-center">
          <span className="font-heading font-black text-4xl sm:text-5xl text-white block leading-none">
            {ratingStats.averageRating}
          </span>
          <span className="text-[11px] text-neutral-400 font-semibold mt-1 block">out of 5</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={`w-4 h-4 ${
                  s <= 4 ? 'fill-[#F4B400] text-[#F4B400]' : 'fill-[#F4B400]/40 text-[#F4B400]'
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-neutral-300 font-bold">
            Based on {ratingStats.totalReviews} verified Google reviews
          </p>
          <div className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
            <CheckCircle2 className="w-3 h-3" />
            <span>Verified Public Sentiment</span>
          </div>
        </div>
      </div>

      {/* Horizontal Star Bars */}
      <div className="space-y-2.5 py-4">
        {ratingStats.breakdown.map((row) => (
          <div key={row.stars} className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1 w-8 shrink-0 text-neutral-400 font-bold">
              <span>{row.stars}</span>
              <Star className="w-3 h-3 fill-neutral-400 text-neutral-400" />
            </div>

            <div className="flex-1 h-2.5 bg-[#262626] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#F4B400] rounded-full transition-all duration-700 ease-out"
                style={{ width: `${row.percentage}%` }}
              />
            </div>

            <span className="w-8 text-right text-[11px] text-neutral-400 font-medium">
              {row.percentage}%
            </span>
          </div>
        ))}
      </div>

      {/* Highlighted tags based on customer mentions */}
      <div className="pt-4 border-t border-[#282828]">
        <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block mb-2">
          Frequently Mentioned by Diners
        </span>
        <div className="flex flex-wrap gap-1.5">
          {ratingStats.highlights.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] px-2.5 py-1 rounded-lg bg-[#242424] text-neutral-300 border border-[#333333]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
