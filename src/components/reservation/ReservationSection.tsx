import React, { useState } from 'react';
import { restaurantConfig } from '../../data/restaurant';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MessageCircle,
  Utensils,
  PartyPopper,
  ShieldCheck
} from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [date, setDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState('4');
  const [seatingArea, setSeatingArea] = useState('indoor-booth');
  const [occasion, setOccasion] = useState('casual-dinner');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '11:30', '12:30', '13:30', '14:30',
    '17:00', '18:00', '19:00', '20:00', '20:45'
  ];

  const occasions = [
    { value: 'casual-dinner', label: 'Casual Dinner / Lunch' },
    { value: 'birthday', label: 'Birthday Celebration 🎂' },
    { value: 'family-feast', label: 'Family Gathering 👨‍👩‍👧‍👦' },
    { value: 'business', label: 'Work / Business Lunch 💼' },
    { value: 'date-night', label: 'Date Night ✨' },
  ];

  const seatingOptions = [
    { id: 'indoor-booth', label: 'Cozy Dining Booth', note: 'Comfortable cushioned booth' },
    { id: 'main-table', label: 'Central Table', note: 'Spacious for groups' },
    { id: 'quick-dine', label: 'Fast Casual Counter', note: 'Quick meal stop' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Formulate WhatsApp reservation text
    const occLabel = occasions.find(o => o.value === occasion)?.label || occasion;
    const seatLabel = seatingOptions.find(s => s.id === seatingArea)?.label || seatingArea;
    const message = `*CHIC-N-FILL TABLE RESERVATION REQUEST*\n\n` +
      `👤 *Name:* ${fullName || 'Guest'}\n` +
      `📞 *Phone:* ${phoneNumber || 'Via WhatsApp'}\n` +
      `📅 *Date:* ${date}\n` +
      `⏰ *Time:* ${time}\n` +
      `👥 *Guests:* ${guests} Persons\n` +
      `🪑 *Seating Preference:* ${seatLabel}\n` +
      `🎉 *Occasion:* ${occLabel}\n` +
      (specialRequests ? `📝 *Notes:* ${specialRequests}\n` : '') +
      `\n📍 Pangani St, Arusha • Looking forward to confirmation!`;

    const whatsappUrl = `https://wa.me/${restaurantConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab after a brief moment
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <section id="reserve" className="py-20 bg-[#121212] border-b border-[#252525] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#F4B41A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4B41A]/15 text-[#F4B41A] text-xs font-black uppercase tracking-wider mb-3 border border-[#F4B41A]/20">
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Your Spot</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            RESERVE A TABLE
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-2.5">
            Spaces for every story on Pangani Street. Enjoy hot crispy chicken, stone-baked pizzas, and welcoming hospitality without the wait.
          </p>
        </div>

        {/* 2-Column Grid: Left Reservation Form, Right Perks & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#1A1A1A] p-6 sm:p-8 rounded-3xl border border-[#2D2D2D] shadow-2xl relative">
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#F4B41A]/20 border border-[#F4B41A] text-[#F4B41A] flex items-center justify-center mx-auto mb-2 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-black text-2xl text-white">
                  Table Reservation Sent!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#F4B41A]">{fullName || 'Guest'}</strong>! We are routing your booking to our Pangani Street host team via WhatsApp for instant confirmation.
                </p>
                <div className="p-4 rounded-2xl bg-[#242424] border border-[#333333] max-w-md mx-auto text-left text-xs space-y-1.5 text-neutral-300">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Date & Time:</span>
                    <span className="font-bold text-white">{date} at {time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Party Size:</span>
                    <span className="font-bold text-white">{guests} Guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Location:</span>
                    <span className="font-bold text-white">Pangani St, Arusha</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-[#262626] text-white hover:bg-[#333333] text-xs font-bold transition-all"
                  >
                    Edit Reservation
                  </button>
                  <a
                    href={`https://wa.me/${restaurantConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] text-black font-extrabold text-xs shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 fill-black" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A]">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-[#F4B41A]" />
                    <span className="text-xs font-black uppercase tracking-wider text-white">
                      Reservation Details
                    </span>
                  </div>
                  <span className="text-[11px] text-[#F4B41A] font-medium">
                    ⚡ Instant WhatsApp Confirmation
                  </span>
                </div>

                {/* Date & Guests Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                      Date of Visit
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#222222] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F4B41A] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-[#222222] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F4B41A] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="1">1 Person (Solo Crunch)</option>
                        <option value="2">2 Persons (Duo Date)</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons (Standard Table)</option>
                        <option value="5">5 Persons</option>
                        <option value="6">6 Persons (Family Booth)</option>
                        <option value="8">8 Persons (Party Table)</option>
                        <option value="10">10+ Persons (Large Celebration)</option>
                      </select>
                      <Users className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setTime(slot)}
                        className={`py-2 px-2 text-xs font-bold rounded-xl transition-all border ${
                          time === slot
                            ? 'bg-[#F4B41A] text-black border-[#F4B41A] shadow-md shadow-[#F4B41A]/20'
                            : 'bg-[#222222] text-neutral-300 border-[#333333] hover:border-neutral-500'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seating Preference */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Seating Area Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {seatingOptions.map((seat) => (
                      <div
                        key={seat.id}
                        onClick={() => setSeatingArea(seat.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          seatingArea === seat.id
                            ? 'bg-[#F4B41A]/10 border-[#F4B41A] text-white'
                            : 'bg-[#222222] border-[#333333] text-neutral-400 hover:border-neutral-600'
                        }`}
                      >
                        <div className="text-xs font-bold text-white">{seat.label}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">{seat.note}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Occasion */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Occasion / Gathering Type
                  </label>
                  <div className="relative">
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full bg-[#222222] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F4B41A] transition-colors appearance-none cursor-pointer"
                    >
                      {occasions.map((occ) => (
                        <option key={occ.value} value={occ.value}>
                          {occ.label}
                        </option>
                      ))}
                    </select>
                    <PartyPopper className="w-4 h-4 text-neutral-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Guest Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#2A2A2A]">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Amani Joseph"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#222222] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F4B41A] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 0659 263 416"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-[#222222] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F4B41A] transition-colors"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Special Requests / Food Pre-order (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Soy Garlic 16 pcs ready on arrival, baby chair needed"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-[#222222] border border-[#333333] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#F4B41A] transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  id="submit-table-reservation-btn"
                  className="w-full py-4 px-6 rounded-xl bg-[#F4B41A] hover:bg-[#ffc933] text-black font-heading font-black text-sm uppercase tracking-wider shadow-xl shadow-[#F4B41A]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Confirm Table Reservation via WhatsApp</span>
                </button>

                <p className="text-[11px] text-neutral-500 text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero booking fees • Free instant cancellation at any time</span>
                </p>
              </form>
            )}
          </div>

          {/* Right: Reservation Benefits & Quick Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Atmosphere Highlight Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#2F2F2F] shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="CHIC-N-FILL Dining Room Experience"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#F4B41A] block">
                  Pangani Street Atmosphere
                </span>
                <h4 className="font-heading font-extrabold text-white text-lg leading-tight">
                  Cozy & Welcoming Dining Vibes
                </h4>
                <p className="text-xs text-neutral-300 mt-1">
                  Airy, modern urban setting with comfortable seating, ambient music, and friendly table service.
                </p>
              </div>
            </div>

            {/* Why Reserve Perks List */}
            <div className="bg-[#1A1A1A] p-6 rounded-3xl border border-[#2D2D2D] space-y-4">
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F4B41A]" />
                <span>Why Reserve With Us?</span>
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 text-neutral-300">
                  <div className="w-6 h-6 rounded-lg bg-[#F4B41A]/15 text-[#F4B41A] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white block font-bold">Guaranteed Seating</strong>
                    <span>Skip the peak dinner and weekend queues during lunch and evening rush.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-neutral-300">
                  <div className="w-6 h-6 rounded-lg bg-[#F4B41A]/15 text-[#F4B41A] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white block font-bold">Hot Kitchen Pre-Order</strong>
                    <span>Request your Soy Garlic wings or stone-baked pizza to hit your table fresh on arrival.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-neutral-300">
                  <div className="w-6 h-6 rounded-lg bg-[#F4B41A]/15 text-[#F4B41A] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-white block font-bold">Dedicated Group Hosting</strong>
                    <span>We comfortably accommodate groups of 10 to 40 guests for birthdays and team meals.</span>
                  </div>
                </div>
              </div>

              {/* Direct Contact Hotline */}
              <div className="pt-4 border-t border-[#2A2A2A] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                    Prefer to call?
                  </span>
                  <a
                    href={`tel:${restaurantConfig.phoneRaw}`}
                    className="font-heading font-extrabold text-sm text-white hover:text-[#F4B41A] transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#F4B41A]" />
                    <span>{restaurantConfig.phoneDisplay}</span>
                  </a>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                    Kitchen Hours
                  </span>
                  <span className="text-xs font-semibold text-neutral-200">
                    Daily 10 AM – 9:30 PM
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
