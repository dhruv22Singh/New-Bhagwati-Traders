import React, { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
export default function Reviews() {
  // Empty array initially for real 0 reviews count
  const [reviewsData, setReviewsData] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [newComment, setNewComment] = useState('');

  // Calculate Average Rating dynamically
  const totalReviews = reviewsData.length;
  const averageRating = totalReviews > 0
    ? (reviewsData.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews).toFixed(1)
    : '0.0';

  const nextReview = () => {
    if (totalReviews === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  };

  const prevReview = () => {
    if (totalReviews === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  // Submit Review Function
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    // Generate Initials Avatar
    const initials = newName
      .trim()
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'U';

    const newReviewItem = {
      id: Date.now(),
      name: newName,
      date: 'Just now',
      rating: newRating,
      avatar: initials,
      comment: newComment,
    };

    setReviewsData([newReviewItem, ...reviewsData]);
    setCurrentIndex(0); // Jump to new review

    // Reset Form & Close Modal
    setNewName('');
    setNewRating(5);
    setHoverRating(0);
    setNewComment('');
    setIsModalOpen(false);
  };

  return (
    <section id="reviews" className="py-20 bg-neutral-950 text-white relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-amber-400 text-xs md:text-sm tracking-widest uppercase font-semibold block">
            ✦ TESTIMONIALS ✦
          </span>
          <h2 className="text-3xl md:text-5xl font-light">
            What Our <span className="font-semibold text-amber-400">Customers Say</span>
          </h2>
          
          {/* Real-time Dynamic Rating & Count */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="flex text-amber-400 text-lg">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>
                  {star <= Math.round(Number(averageRating)) ? '★' : '☆'}
                </span>
              ))}
            </div>
            <span className="text-sm font-semibold text-neutral-300">
              {averageRating} · <span className="text-neutral-400 font-normal">{totalReviews} {totalReviews === 1 ? 'Review' : 'Reviews'}</span>
            </span>
          </div>

          {/* Google Review Button */}
<div className="pt-4">
  <a
    href="https://g.page/r/CeXk58LFNhaaEBM/review"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-yellow-400 text-white font-semibold hover:scale-105 transition duration-300 shadow-xl"
  >
    <FaGoogle />
    Write a Google Review
  </a>
</div>

        {/* Review Display Area */}
        {totalReviews > 0 ? (
          <div>
            <div className="relative bg-neutral-900/60 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-2xl shadow-2xl transition-all duration-500">
              
              {/* Quote Icon */}
              <div className="text-amber-400/20 text-7xl font-serif leading-none absolute top-6 left-8 select-none pointer-events-none">
                “
              </div>

              <div className="relative z-10 space-y-8">
                {/* Comment Text */}
                <p className="text-base md:text-xl text-neutral-200 italic font-light leading-relaxed max-w-3xl mx-auto text-center pt-4">
                  "{reviewsData[currentIndex]?.comment}"
                </p>

                {/* User Info & Rating */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
                  
                  {/* User Avatar & Details */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-neutral-950 font-bold flex items-center justify-center text-sm shadow-md">
                      {reviewsData[currentIndex]?.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-white">
                        {reviewsData[currentIndex]?.name}
                      </h4>
                      <p className="text-xs text-neutral-500">
                        {reviewsData[currentIndex]?.date}
                      </p>
                    </div>
                  </div>

                  {/* Individual Rating Stars */}
                  <div className="flex text-amber-400 text-base">
                    {[...Array(reviewsData[currentIndex]?.rating || 5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                </div>
              </div>

            </div>

            {/* Slider Controls */}
            {totalReviews > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 hover:border-amber-400 text-white flex items-center justify-center transition-all hover:scale-110"
                >
                  ‹
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {reviewsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === idx ? 'w-8 bg-amber-400' : 'w-2 bg-neutral-800'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-white/10 hover:border-amber-400 text-white flex items-center justify-center transition-all hover:scale-110"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Empty State Card when 0 Reviews */
          <div className="bg-neutral-900/40 border border-white/10 border-dashed rounded-3xl p-12 text-center space-y-4 max-w-2xl mx-auto backdrop-blur-xl">
            <div className="text-4xl">🌟</div>
            <h3 className="text-lg font-medium text-white">अभी तक कोई रिव्यू नहीं है (No Reviews Yet)</h3>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto">
              पहला रिव्यू देने वाले बनें और अपना अनुभव शेयर करें!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-medium hover:bg-amber-400 hover:text-neutral-950 transition-all"
            >
              यहाँ पहला रिव्यू लिखें ✨
            </button>
          </div>
        )}

      </div>

      {/* WRITE A REVIEW POPUP MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-neutral-900 border border-white/10 w-full max-w-lg rounded-3xl p-6 md:p-8 shadow-2xl relative space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                ✍️ Write a Review
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </div>

            {/* Review Form */}
            <form onSubmit={handleSubmitReview} className="space-y-5">
              
              {/* Name Input */}
              <div>
                <label className="block text-xs text-neutral-300 mb-1">आपका नाम (Your Name) *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Kumar"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-neutral-800/80 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* Interactive Star Selection */}
              <div>
                <label className="block text-xs text-neutral-300 mb-2">रेटिंग (Select Rating Stars) *</label>
                <div className="flex items-center gap-2 bg-neutral-800/50 p-3 rounded-xl border border-white/5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="text-3xl transition-transform duration-200 hover:scale-125 focus:outline-none"
                    >
                      <span
                        className={
                          star <= (hoverRating || newRating)
                            ? 'text-amber-400'
                            : 'text-neutral-600'
                        }
                      >
                        ★
                      </span>
                    </button>
                  ))}
                  <span className="text-xs text-amber-300 ml-3 font-semibold">
                    {hoverRating || newRating} / 5 Stars
                  </span>
                </div>
              </div>

              {/* Review Comment Input */}
              <div>
                <label className="block text-xs text-neutral-300 mb-1">आपका अनुभव (Your Review) *</label>
                <textarea
                  required
                  rows="3"
                  placeholder="अपनी राय लिखें..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full bg-neutral-800/80 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-400 focus:outline-none resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white text-xs font-medium transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 font-semibold text-xs transition-all shadow-md shadow-amber-400/20"
                >
                  Submit Review
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
</div>
    </section>
  );
}