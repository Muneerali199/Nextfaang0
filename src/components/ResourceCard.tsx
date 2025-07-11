// components/ResourceCard.tsx
import { motion } from 'framer-motion';
import { Download, ExternalLink, Star } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  type: string;
  description: string;
  rating: number;
  downloads: string;
  color: string;
  id: string;
}

const ResourceCard = ({
  title,
  type,
  description,
  rating,
  downloads,
  color,
  id
}: ResourceCardProps) => {
  const colorClasses = {
    sky: 'bg-sky-500/20 text-sky-400',
    violet: 'bg-violet-500/20 text-violet-400',
    rose: 'bg-rose-500/20 text-rose-400',
    emerald: 'bg-emerald-500/20 text-emerald-400'
  };

  return (
    <motion.div
      className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 group"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 ${colorClasses[color as keyof typeof colorClasses]} rounded-full text-xs font-medium`}>
          {type}
        </span>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm">{rating}</span>
        </div>
      </div>
      
      <h4 className="text-lg font-bold text-white mb-3">{title}</h4>
      <p className="text-gray-300 text-sm mb-6 leading-relaxed">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-400">
          <Download className="w-4 h-4" />
          <span className="text-sm">{downloads}</span>
        </div>
        
        <a 
          href={`/resources/${id}`}
          className="flex items-center space-x-2 text-sky-400 hover:text-sky-300 transition-colors group-hover:translate-x-1 duration-300"
        >
          <span className="text-sm font-medium">View</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ResourceCard;