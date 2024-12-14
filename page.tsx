'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Mail, Phone, Book, Users, Laptop, ArrowRight } from 'lucide-react'

export default function EnhancedElegantWebsiteUpdatePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-100 to-blue-200 text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.header 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-teal-800 tracking-tight">
            আমাদের বিদ্যালয়ের ডিজিটাল রূপান্তর
          </h1>
          <p className="text-xl text-teal-600">নতুন ওয়েবসাইটের মাধ্যমে শিক্ষার নতুন দিগন্ত উন্মোচন</p>
        </motion.header>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-teal-700">আমাদের নতুন উদ্যোগসমূহ</h2>
              <ul className="space-y-4">
                {[
                  { icon: Book, text: 'সমৃদ্ধ ডিজিটাল লাইব্রেরি' },
                  { icon: Users, text: 'অনলাইন শিক্ষক-অভিভাবক পোর্টাল' },
                  { icon: Laptop, text: 'উন্নত ভার্চুয়াল ক্লাসরুম' },
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="bg-teal-100 p-2 rounded-full">
                      <item.icon className="text-teal-600 w-6 h-6" />
                    </span>
                    <span className="text-lg">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl p-8 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-2xl font-semibold mb-6">লঞ্চের তথ্য</h2>
              <div className="space-y-4">
                {[
                  { icon: Calendar, text: '১ জানুয়ারি, ২০২৫' },
                  { icon: Clock, text: 'সকাল ১০:০০ টা' },
                  { icon: MapPin, text: 'বিদ্যালয় মিলনায়তন' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4"
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="bg-white bg-opacity-20 p-2 rounded-full">
                      <item.icon className="text-teal-100 w-6 h-6" />
                    </span>
                    <span className="text-lg">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_e62ae350-7340-417d-b5f1-2439e8082339-qvVQ8zMIFLqAuKhLz014xNNI1D8APg.jpeg"
                alt="ডিজিটাল শিক্ষা"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-teal-900/50 to-transparent"></div>
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h3 className="text-3xl font-bold mb-3 text-white">আধুনিক শিক্ষার নতুন দিগন্ত</h3>
                <p className="text-teal-100 text-lg">প্রযুক্তির সাথে তাল মিলিয়ে এগিয়ে যাচ্ছে আমাদের শিক্ষা ব্যবস্থা</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-20 bg-white rounded-xl p-10 shadow-lg"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-teal-800">যোগাযোগ করুন</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Mail, text: 'info@school.edu.bd', href: 'mailto:info@school.edu.bd' },
              { icon: Phone, text: '০১৭১২-৩৪৫৬৭৮', href: 'tel:+8801712345678' },
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.href}
                className="flex items-center space-x-3 bg-teal-50 text-teal-800 hover:bg-teal-100 px-6 py-3 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-lg">{item.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.footer 
          className="mt-20 text-center text-teal-800"
          variants={itemVariants}
        >
          <p className="text-xl font-semibold mb-2">আমাদের সাথে থাকুন এই ডিজিটাল অগ্রযাত্রায়</p>
          <motion.div
            className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span>আরও জানুন</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
          <p className="mt-4 text-sm text-teal-600">কারিগরি সহযোগিতায়: জয়েশ বিশ্বাস</p>
        </motion.footer>
      </div>
    </div>
  )
}

