import React from 'react';
import { customerReviews } from '../../data/reviews';
import { RatingDistribution } from './RatingDistribution';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from 'lucide-react';
import { restaurantConfig } from '../../data/restaurant';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#141414] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4B400]/15 text-[#F4B400] text-xs font-bold uppercase tracking-wider mb-2">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Social Proof & Sentiment</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2">
            Real guest experiences from our restaurant on Pangani Street, Arusha. Rated {restaurantConfig.rating} / 5 stars across {restaurantConfig.reviewCount} verified reviews.
          </p>
        </div>

        {/* 2-Column Layout: Rating Visualization + Review Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Distribution breakdown (4 cols) */}
          <div className="lg:col-span-5">
            <RatingDistribution />
          </div>

          {/* Right: Customer Reviews Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {customerReviews.map((review) => (
              <article
                key={review.id}
                id={`review-card-${review.id}`}
                className="p-5 sm:p-6 rounded-2xl bg-[#1A1A1A] border border-[#2B2B2B] hover:border-[#F4B400]/40 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${
                          s <= review.rating
                            ? 'fill-[#F4B400] text-[#F4B400]'
                            : 'fill-neutral-700 text-neutral-700'
                        }`}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] text-neutral-500 font-medium">{review.date}</span>
                </div>

                <blockquote className="text-sm sm:text-base text-neutral-200 font-normal leading-relaxed italic">
                  "{review.content}"
                </blockquote>

                <div className="pt-3 border-t border-[#262626] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#F4B400] text-black font-black text-xs flex items-center justify-center">
                      {review.author.charAt(0)}
                    </div>
                    <span className="font-bold text-white">{review.author}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-neutral-400 flex items-center gap-1 text-[11px]">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      {review.source}
                    </span>
                  </div>

                  {review.highlightedItem && (
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-[#242424] text-[10px] font-semibold text-[#F4B400]">
                      {review.highlightedItem}
                    </span>
                  )}
                </div>
              </article>
            ))}

            <div className="p-4 rounded-xl bg-[#171717] border border-[#262626] text-center text-xs text-neutral-400">
              <span>All reviews shown are genuine sentiments sourced from verified Google visitors. No reviews have been fabricated.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
