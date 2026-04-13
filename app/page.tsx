'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#1a1035] to-[#0f0c12] relative overflow-hidden">
      {/* Floating Orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12" >
          <h1 className="text-6xl md:text-7xl font-black mb-4 gradient-text">KopchaClub</h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">Sirf apne 12 logon ka apna world</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-col md:flex-row gap-4 mb-12" >
          <Link href="/signup">
            <button className="glass-button px-8 py-3 text-lg font-semibold">Account Banao</button>
          </Link>
          <Link href="/members">
            <button className="glass-button px-8 py-3 text-lg font-semibold">Members Dekho</button>
          </Link>
          <Link href="/login">
            <button className="glass-button px-8 py-3 text-lg font-semibold">Login</button>
          </Link>
        </motion.div>

        {/* Feature Cards */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl" >
          {[
            { icon: '👥', title: 'Private Club', desc: 'Only for 12 members' },
            { icon: '📸', title: 'Share Moments', desc: 'Post images and updates' },
            { icon: '💬', title: 'Connect', desc: 'Like, comment & engage' },
          ].map((feature, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05 }} className="glass-card text-center" >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}