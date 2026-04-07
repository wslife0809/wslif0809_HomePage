/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import logo from "./logo.png";
import { 
  Youtube, 
  Instagram, 
  ClipboardCheck, 
  LayoutGrid, 
  Upload, 
  ShoppingBag, 
  ArrowUpRight,
  ExternalLink
} from "lucide-react";

const links = [
  {
    category: "社群媒體 Social Media",
    items: [
      {
        title: "YouTube",
        url: "https://www.youtube.com/@W.S.Life0809",
        icon: <Youtube className="w-5 h-5" />,
        color: "bg-[#FF0000]",
        description: "訂閱我的頻道，觀看最新影片"
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/w.s.life0809/",
        icon: <Instagram className="w-5 h-5" />,
        color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
        description: "追蹤我的生活日常"
      }
    ]
  },
  {
    category: "工具與服務 Tools",
    items: [
      {
        title: "Checklist for Box",
        url: "https://script.google.com/macros/s/AKfycby4KU3mRGJujuStIWeJFtECR0nllvucBoEgst48I2wHe7w3EyB2xoTqyab-ObJm3jkv/exec",
        icon: <ClipboardCheck className="w-5 h-5" />,
        color: "bg-[#298fd5]",
        description: "開箱清單工具"
      },
      {
        title: "卡片交流網站",
        url: "https://script.google.com/macros/s/AKfycbxyESrm5f6w2ExFUME8PV7NGYGuUFTerqxHe-JTEIVdXBQVOeYvGGaygK1y3vxFJzZnHg/exec",
        icon: <LayoutGrid className="w-5 h-5" />,
        color: "bg-emerald-600",
        description: "瀏覽與交流卡片"
      },
      {
        title: "卡片交流上傳",
        url: "https://docs.google.com/forms/d/e/1FAIpQLSeVt3Lp6n0YhKTa3qxFxmmuVXEMlC5p-Xqb0W2x4CvRQqdBZQ/viewform",
        icon: <Upload className="w-5 h-5" />,
        color: "bg-purple-600",
        description: "上傳您的卡片資訊"
      }
    ]
  },
  {
    category: "賣場 Marketplace",
    items: [
      {
        title: "Yahoo 賣場",
        url: "https://tw.bid.yahoo.com/booth/Y6968891676",
        icon: <ShoppingBag className="w-5 h-5" />,
        color: "bg-[#7b0099]",
        description: "推薦的 Yahoo 賣場"
      }
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#298fd5] font-sans selection:bg-[#ffa54f]/30 flex flex-col items-center">
      {/* Simplified Header */}
      <header className="w-full max-w-2xl px-6 pt-16 pb-12 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-6"
        >
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-2xl ring-4 ring-[#ffa54f]/20">
            <img 
              src={logo} 
              alt="水緣君日常 Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-md mb-2">
            水緣君日常
          </h1>
          <p className="text-xl md:text-2xl font-bold text-[#0a3057] opacity-90">
            Water Serendipity Life
          </p>
        </motion.div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-2xl px-6 pb-24">
        <div className="grid gap-10">
          {links.map((section, sIdx) => (
            <section key={section.category}>
              <h2 className="text-white text-lg font-bold mb-4 flex items-center gap-3 opacity-90">
                <span className="w-1.5 h-6 bg-[#ffa54f] rounded-full" />
                {section.category}
              </h2>
              
              <div className="grid gap-3">
                {section.items.map((item, iIdx) => (
                  <motion.a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: iIdx * 0.05 }}
                    whileHover={{ scale: 1.01, x: 4 }}
                    className="group flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg border border-transparent hover:border-[#ffa54f]/50 transition-all duration-200"
                  >
                    <div className={`${item.color} w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:rotate-3 transition-transform`}>
                      {item.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-[#0a3057] group-hover:text-[#298fd5] transition-colors">{item.title}</h3>
                      <p className="text-xs text-[#0a3057]/60 font-medium">{item.description}</p>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-[#ffa54f] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-white/50 text-sm font-bold">
          <p>© {new Date().getFullYear()} 水緣君日常 • Water Serendipity Life</p>
        </footer>
      </main>
    </div>
  );
}
