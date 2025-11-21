import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, MessageSquare, AlertCircle, CheckSquare, UserX, Bell, Search, LayoutDashboard, Settings } from 'lucide-react';

// Mock data for the line chart
const data = [
  { name: 'א', uv: 8 },
  { name: 'ב', uv: 11 },
  { name: 'ג', uv: 9 },
  { name: 'ד', uv: 14 },
  { name: 'ה', uv: 10 },
  { name: 'ו', uv: 8 },
  { name: 'ש', uv: 12 },
];

const pieData = [
  { name: 'נוכחים', value: 87 },
  { name: 'חסרים', value: 13 },
];
const COLORS = ['#0d9488', '#e2e8f0'];

export const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full bg-slate-100 p-4 rounded-xl overflow-hidden border border-slate-200 shadow-2xl select-none pointer-events-none lg:pointer-events-auto">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6 bg-white p-3 rounded-lg shadow-sm">
        <div className="flex items-center gap-4 w-1/3">
          <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center text-white text-xs">ד</div>
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
            <Bell size={16} className="text-slate-500" />
          </div>
          <div className="bg-slate-50 rounded-full px-3 py-1.5 flex items-center gap-2 w-full border border-slate-100">
             <Search size={14} className="text-slate-400" />
             <span className="text-xs text-slate-400">חיפוש עובד...</span>
          </div>
        </div>
        <div className="text-left">
          <h3 className="font-bold text-slate-800 text-lg leading-none">סקירת בוקר</h3>
          <span className="text-xs text-slate-500">יום שלישי, 24 אוקטובר 2023</span>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Sidebar Mock */}
        <div className="hidden lg:flex flex-col w-16 bg-white rounded-lg py-4 items-center gap-6 shadow-sm h-full">
           <div className="p-2 bg-teal-50 rounded-lg text-teal-600"><LayoutDashboard size={20} /></div>
           <div className="p-2 text-slate-400"><Users size={20} /></div>
           <div className="p-2 text-slate-400"><MessageSquare size={20} /></div>
           <div className="p-2 text-slate-400"><Settings size={20} /></div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4">
          
          {/* Stat Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
             <StatCard icon={<Users size={18} className="text-blue-500"/>} bg="bg-blue-50" label="עובדים פעילים" val="263" />
             <StatCard icon={<MessageSquare size={18} className="text-indigo-500"/>} bg="bg-indigo-50" label="הודעות שנשלחו" val="48" />
             <StatCard icon={<AlertCircle size={18} className="text-orange-500"/>} bg="bg-orange-50" label="אישורים חסרים" val="7" />
             <StatCard icon={<UserX size={18} className="text-red-500"/>} bg="bg-red-50" label="חוסרי נוכחות" val="12" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
             {/* AI Insight */}
             <div className="md:col-span-1 bg-slate-800 text-white rounded-lg p-4 relative overflow-hidden shadow-md">
                <div className="flex items-center gap-2 mb-3">
                   <div className="text-yellow-400"><AlertCircle size={16} /></div>
                   <span className="font-bold text-sm">תובנות מערכת</span>
                </div>
                <ul className="text-xs space-y-2 text-slate-300 list-disc list-inside">
                  <li>עלייה של 18% בחוסרים משעות הבוקר.</li>
                  <li>16 עובדים טרם שלחו אישור.</li>
                  <li>מספר העובדים ששלחו הסבר עלה ב-12%.</li>
                </ul>
             </div>

             {/* Pie Chart */}
             <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center relative">
                <h4 className="text-sm font-bold text-slate-700 self-start mb-2">אחוז דיווח</h4>
                <div className="w-32 h-32 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={55}
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey="value"
                        startAngle={90}
                        endAngle={-270}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-xl font-bold text-slate-800">87%</span>
                  </div>
                </div>
                <span className="text-xs text-slate-500 mt-1">עובדים שסימנו היום</span>
             </div>

             {/* Line Chart */}
             <div className="bg-white p-4 rounded-lg shadow-sm md:col-span-1">
                <h4 className="text-sm font-bold text-slate-700 mb-2">מגמת חוסרי נוכחות (שבועי)</h4>
                <div className="h-28">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0d9488" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="uv" stroke="#0d9488" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
             </div>
          </div>

          {/* List */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-3">
               <h4 className="text-sm font-bold text-slate-700">עובדים ללא נוכחות</h4>
               <span className="text-xs text-teal-600 cursor-pointer">צפה בהכל ←</span>
            </div>
            <div className="space-y-2">
              {[
                { name: 'דנה לוי', dept: 'כספים', status: 'ממתין לאישור', color: 'orange', time: '08:00' },
                { name: 'עמית אברהם', dept: 'תפעול', status: 'נשלח הודעה', color: 'blue', time: '07:30' },
                { name: 'רועי מזרחי', dept: 'משאבי אנוש', status: 'טרם הגיב', color: 'red', time: '09:00' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                   <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold">{item.name[0]}</div>
                      <span className="font-medium text-slate-700">{item.name}</span>
                   </div>
                   <span className="text-slate-500 hidden sm:block">{item.dept}</span>
                   <span className="text-slate-500 font-mono">{item.time}</span>
                   <span className={`px-2 py-0.5 rounded-full bg-${item.color}-50 text-${item.color}-600 text-[10px]`}>
                     {item.status}
                   </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, bg, label, val }: { icon: React.ReactNode, bg: string, label: string, val: string }) => (
  <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-50 flex flex-col justify-between">
    <div className="flex justify-between items-start mb-2">
       <div className={`p-1.5 rounded-md ${bg}`}>{icon}</div>
       <span className="text-2xl font-bold text-slate-800">{val}</span>
    </div>
    <span className="text-[10px] text-slate-500">{label}</span>
  </div>
);
