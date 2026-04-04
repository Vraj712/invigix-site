import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const reviews = [
  {
    id: 1,
    text: "HUB is by far the best theme here in Themeforest, I don't think anyone can match its code quality, design or anything anytime soon! I hope you sell 10 million copies, I'm soooo glad I found it.",
    author: "MARKFORTEZ",
    role: "Envato User",
    company: "PayPal"
  },
  {
    id: 2,
    text: "I would give LiquidThemes five stars for each category if I could! I LOVE the demo site I was able to easily download and customize - I'm going to have the best portfolio site ever! Yay microinteractions!",
    author: "BRUKMAXWELL",
    role: "Envato User",
    company: "AMD"
  },
  {
    id: 3,
    text: "I'm only just starting to work with this theme, but so far it looks great and extremely customizable. Not everything was clear to me though, but the support has been absolutely amazing.",
    author: "DIVINGINWONDERLAND",
    role: "Envato User",
    company: "Amazon"
  }
];

const blogPosts = [
  {
    id: 1,
    badge: "Business",
    badgeColor: "bg-blue-500",
    author: "Philip Reyes",
    date: "1 year ago",
    title: "5 reasons to purchase desktop computers",
    excerpt: "Hustle and Cashflow is a blog that aims to educate millennials on personal finance.",
    bgColor: "bg-[#eef4f8]"
  },
  {
    id: 2,
    badge: "Business",
    badgeColor: "bg-blue-500",
    author: "Philip Reyes",
    date: "2 years ago",
    title: "Utilizing mobile technology in the field",
    excerpt: "I think that you should be able to select more than one reason for rating.",
    bgColor: "bg-[#f6f0ed]"
  },
  {
    id: 3,
    badge: "Beauty",
    badgeColor: "bg-pink-400",
    author: "Philip Reyes",
    date: "2 years ago",
    title: "Success Story: Businessman in Harlem",
    excerpt: "I think that you should be able to select more than one reason for rating.",
    bgColor: "bg-pink-50"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="bg-white relative z-20 overflow-hidden">
      
      {/* ==========================================
          PART 1: TESTIMONIALS SLIDER
      ========================================== */}
      <div className="pt-32 pb-24 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Heading */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-[#7ea8be]/20 flex items-center justify-center text-[#28536b]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /></svg>
              </span>
              <span className="text-sm font-extrabold text-gray-900 tracking-wider">— 97.6 Customer Satisfaction</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              Hear from <span className="text-[#7ea8be]">happy</span><br/>customers.
            </h2>
            
            <p className="text-gray-500 text-lg mb-8 leading-relaxed font-medium max-w-sm">
              Bring your ideas to life with an intuitive visuals editor. Create, edit, and customize your website visually and see the changes instantly.
            </p>
            
            {/* Trustpilot Stars Mockup */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-green-500 text-white p-1 rounded-sm"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg></span>
                <span className="font-bold text-gray-900 text-xl tracking-tight">Trustpilot</span>
              </div>
              <div className="flex gap-1 text-green-500">
                {[1,2,3,4,5].map(star => <svg key={star} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Slider Card */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-7 relative">
            <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-10 md:p-16 text-center relative z-10 min-h-[400px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center gap-1 text-gray-900 mb-8">
                    {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-10">
                    "{reviews[index].text}"
                  </p>
                  
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-14 h-14 bg-gray-200 rounded-full mb-4 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?img=${index + 10}`} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-extrabold text-gray-900 uppercase tracking-widest text-sm">{reviews[index].author}</h4>
                    <p className="text-gray-400 text-sm mb-6">{reviews[index].role}</p>
                    <div className="text-2xl font-black text-gray-300 tracking-widest uppercase">{reviews[index].company}</div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>

            {/* Slider Controls */}
            <button onClick={prevReview} className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:text-[#28536b] transition-colors z-20 border border-gray-50">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextReview} className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-400 hover:text-[#28536b] transition-colors z-20 border border-gray-50">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>

            {/* Decorative Clapping Hands */}
            <motion.div animate={{ rotate: [-10, 10] }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }} className="absolute -top-10 -left-10 text-6xl z-20 drop-shadow-2xl">
              👏
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ==========================================
          PART 2: LATEST POSTS (BLOG)
      ========================================== */}
      <div className="py-24 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-gray-400 border border-gray-200 px-3 py-1 rounded-full inline-block mb-4">Share your story</div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Latest Posts</h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm text-left sm:text-right">
            Our design services starts and ends with a best-in-class experience strategy that builds brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className={`w-full h-64 rounded-2xl mb-6 relative overflow-hidden ${post.bgColor}`}>
                <div className="absolute top-4 left-4 z-10">
                  <span className={`${post.badgeColor} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full`}>{post.badge}</span>
                </div>
                {/* Simulated 3D object inside placeholder */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                   <div className="w-32 h-32 bg-white/40 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 transform rotate-12 group-hover:rotate-0 transition-transform duration-500"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center gap-3 text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider">
                <span className="text-gray-900">{post.author}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>{post.date}</span>
              </div>
              
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 group-hover:text-[#28536b] transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-gray-500 font-medium leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;