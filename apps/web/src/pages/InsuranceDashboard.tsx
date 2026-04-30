import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  ShieldCheck, 
  Activity, 
  Clock,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Database,
  Cloud,
  Zap,
  Briefcase
} from 'lucide-react';

const claimsVolume = [
  { month: 'Jan', processed: 4200, manual: 800 },
  { month: 'Feb', processed: 4500, manual: 750 },
  { month: 'Mar', processed: 5100, manual: 600 },
  { month: 'Apr', processed: 5800, manual: 450 },
  { month: 'May', processed: 6400, manual: 300 },
  { month: 'Jun', processed: 7200, manual: 150 },
];

const resourceBreakdown = [
  { name: 'Core Policy', value: 45, color: '#5579a8' },
  { name: 'Claims Engine', value: 25, color: '#eab308' },
  { name: 'Data Lake', value: 20, color: '#ca8a04' },
  { name: 'Portal/API', value: 10, color: '#43618f' },
];

const KPI_CARDS = [
  { title: 'Compliance Score', value: '98.2%', trend: 'IRDAI v4.0', color: 'gold', icon: ShieldCheck },
  { title: 'Actuarial Latency', value: '142ms', trend: '-22% MoM', color: 'gold', icon: Zap },
  { title: 'Total LZs', value: '24', trend: 'Multi-Region', color: 'gold', icon: Cloud },
  { title: 'Data Protected', value: '1.4 PB', trend: 'AES-256-KMS', color: 'gold', icon: Database },
];

const InsuranceDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Insurance Cloud Operations</h1>
          <p className="text-slate-400">Institutional landing zone management for regulated insurance workloads.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-navy-800 hover:bg-navy-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Download Audit Report
          </button>
          <button className="bg-gold-600 hover:bg-gold-500 text-navy-950 px-4 py-2 rounded-lg text-sm font-bold transition-all">
            Provision New Workload
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-navy-900 border border-navy-800 p-6 rounded-2xl relative group hover:border-navy-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-gold-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-gold-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Claims Processing Throughput */}
        <div className="lg:col-span-2 bg-navy-900 border border-navy-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Claims Processing Throughput (Automated vs Manual)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={claimsVolume}>
                <defs>
                  <linearGradient id="colorProcessed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#eab308" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1d2536" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1d2536', border: '1px solid #314261', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="processed" stroke="#eab308" strokeWidth={3} fillOpacity={1} fill="url(#colorProcessed)" name="Auto-Processed" />
                <Area type="monotone" dataKey="manual" stroke="#5579a8" strokeWidth={2} fillOpacity={0} name="Manual Triage" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Workload Breakdown */}
        <div className="bg-navy-900 border border-navy-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Workload Allocation</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={resourceBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {resourceBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1d2536', border: '1px solid #314261', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {resourceBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Landing Zones Table */}
      <div className="bg-navy-900 border border-navy-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-navy-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Insurance Landing Zones</h3>
          <button className="text-gold-400 hover:text-gold-300 text-sm font-medium">View All Entities</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-navy-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Entity / Region</th>
                <th className="px-6 py-4 font-semibold">Cloud Provider</th>
                <th className="px-6 py-4 font-semibold">Workload Type</th>
                <th className="px-6 py-4 font-semibold">Compliance Status</th>
                <th className="px-6 py-4 font-semibold">Risk Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-800">
              {[
                { name: 'Asia Life (Primary)', region: 'Mumbai', provider: 'AWS', type: 'Policy Admin', status: 'Passed', risk: 'Low' },
                { name: 'Euro Direct (Claims)', region: 'Frankfurt', provider: 'Azure', type: 'Claims Processing', status: 'Review', risk: 'Medium' },
                { name: 'US Health (Actuarial)', region: 'Virginia', provider: 'GCP', type: 'Data Lake', status: 'Passed', risk: 'Low' },
              ].map((lz) => (
                <tr key={lz.name} className="hover:bg-navy-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-gold-400 transition-colors">{lz.name}</span>
                      <span className="text-xs text-slate-500">{lz.region}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300 font-medium italic">{lz.provider}</td>
                  <td className="px-6 py-4 text-sm text-slate-300">{lz.type}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      lz.status === 'Passed' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-gold-500/10 text-gold-500'
                    }`}>
                      {lz.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-mono">{lz.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InsuranceDashboard;
