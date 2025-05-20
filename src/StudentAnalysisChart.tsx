import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell } from 'recharts';

// 总指标波动数据
const totalTrendData = [
  { date: '05-13', 用户数: 45917733, 环比增长量: null, 环比增长率: null },
  { date: '05-14', 用户数: 46067727, 环比增长量: 149994, 环比增长率: 0.33 },
  { date: '05-15', 用户数: 46075236, 环比增长量: 7509, 环比增长率: 0.02 },
  { date: '05-16', 用户数: 46195563, 环比增长量: 120327, 环比增长率: 0.26 },
  { date: '05-17', 用户数: 46396649, 环比增长量: 201086, 环比增长率: 0.44 },
  { date: '05-18', 用户数: 46495968, 环比增长量: 99319, 环比增长率: 0.21 },
  { date: '05-19', 用户数: 46661004, 环比增长量: 165036, 环比增长率: 0.35 }
];

// 主账号用户波动数据
const primaryAccountData = [
  { date: '05-13', 用户数: 38896487, 环比增长量: null, 环比增长率: null },
  { date: '05-14', 用户数: 39035799, 环比增长量: 139312, 环比增长率: 0.36 },
  { date: '05-15', 用户数: 39044934, 环比增长量: 9135, 环比增长率: 0.02 },
  { date: '05-16', 用户数: 39151672, 环比增长量: 106738, 环比增长率: 0.27 },
  { date: '05-17', 用户数: 39330628, 环比增长量: 178956, 环比增长率: 0.46 },
  { date: '05-18', 用户数: 39435395, 环比增长量: 104767, 环比增长率: 0.27 },
  { date: '05-19', 用户数: 39581636, 环比增长量: 146241, 环比增长率: 0.37 }
];

// 各渠道数据
const channelData = [
  { date: '05-13', total: 45917733, gprofile: 26533884, a: 18052902, address: 24203572, identify: 3641151 },
  { date: '05-14', total: 46067727, gprofile: 26590887, a: 18073486, address: 24381377, identify: 3650611 },
  { date: '05-15', total: 46075236, gprofile: 26595210, a: 18073350, address: 24380861, identify: 3660221 },
  { date: '05-16', total: 46195563, gprofile: 26622839, a: 18091218, address: 24573371, identify: 3669501 },
  { date: '05-17', total: 46396649, gprofile: 26650104, a: 18114472, address: 24831210, identify: 3680348 },
  { date: '05-18', total: 46495968, gprofile: 26756459, a: 18131776, address: 24898527, identify: 3689999 },
  { date: '05-19', total: 46661004, gprofile: 26866182, a: 18150647, address: 25099583, identify: 3697836 }
];

// 渠道增长数据
const channelGrowthData = [
  {
    日期: "20250513",
    总规模: 45917733,
    联盟: 26533884,
    联盟环比增长: null,
    联盟环比增长率: null,
    蚂蚁: 18052902,
    蚂蚁环比增长: null,
    蚂蚁环比增长率: null,
    自有挖掘: 24203572,
    自有挖掘环比增长: null,
    自有挖掘环比增长率: null,
    自有认证: 3641151,
    自有认证环比增长: null,
    自有认证环比增长率: null
  },
  {
    日期: "20250514",
    总规模: 46067727,
    联盟: 26590887,
    联盟环比增长: 57003,
    联盟环比增长率: 0.21,
    蚂蚁: 18073486,
    蚂蚁环比增长: 20584,
    蚂蚁环比增长率: 0.11,
    自有挖掘: 24381377,
    自有挖掘环比增长: 177805,
    自有挖掘环比增长率: 0.73,
    自有认证: 3650611,
    自有认证环比增长: 9460,
    自有认证环比增长率: 0.26
  },
  {
    日期: "20250515",
    总规模: 46075236,
    联盟: 26595210,
    联盟环比增长: 4323,
    联盟环比增长率: 0.02,
    蚂蚁: 18073350,
    蚂蚁环比增长: -136,
    蚂蚁环比增长率: 0.0,
    自有挖掘: 24380861,
    自有挖掘环比增长: -516,
    自有挖掘环比增长率: 0.0,
    自有认证: 3660221,
    自有认证环比增长: 9610,
    自有认证环比增长率: 0.26
  },
  {
    日期: "20250516",
    总规模: 46195563,
    联盟: 26622839,
    联盟环比增长: 27629,
    联盟环比增长率: 0.1,
    蚂蚁: 18091218,
    蚂蚁环比增长: 17868,
    蚂蚁环比增长率: 0.1,
    自有挖掘: 24573371,
    自有挖掘环比增长: 192510,
    自有挖掘环比增长率: 0.79,
    自有认证: 3669501,
    自有认证环比增长: 9280,
    自有认证环比增长率: 0.25
  },
  {
    日期: "20250517",
    总规模: 46396649,
    联盟: 26650104,
    联盟环比增长: 27265,
    联盟环比增长率: 0.1,
    蚂蚁: 18114472,
    蚂蚁环比增长: 23254,
    蚂蚁环比增长率: 0.13,
    自有挖掘: 24831210,
    自有挖掘环比增长: 257839,
    自有挖掘环比增长率: 1.05,
    自有认证: 3680348,
    自有认证环比增长: 10847,
    自有认证环比增长率: 0.3
  },
  {
    日期: "20250518",
    总规模: 46495968,
    联盟: 26756459,
    联盟环比增长: 106355,
    联盟环比增长率: 0.4,
    蚂蚁: 18131776,
    蚂蚁环比增长: 17304,
    蚂蚁环比增长率: 0.1,
    自有挖掘: 24898527,
    自有挖掘环比增长: 67317,
    自有挖掘环比增长率: 0.27,
    自有认证: 3689999,
    自有认证环比增长: 9651,
    自有认证环比增长率: 0.26
  },
  {
    日期: "20250519",
    总规模: 46661004,
    联盟: 26866182,
    联盟环比增长: 109723,
    联盟环比增长率: 0.41,
    蚂蚁: 18150647,
    蚂蚁环比增长: 18871,
    蚂蚁环比增长率: 0.1,
    自有挖掘: 25099583,
    自有挖掘环比增长: 201056,
    自有挖掘环比增长率: 0.81,
    自有认证: 3697836,
    自有认证环比增长: 7837,
    自有认证环比增长率: 0.21
  }
];

// 单一渠道识别的新增学生数据
const singleChannelData = [
  { name: '仅自有挖掘', value: 575857, color: '#FF8042' },
  { name: '仅联盟', value: 376805, color: '#8884d8' },
  { name: '仅蚂蚁', value: 98989, color: '#82ca9d' },
  { name: '仅自有认证', value: 2040, color: '#0088FE' },
  { name: '地址和联盟', value: 122806, color: '#FFBB28' },
  { name: '其他组合', value: 36879, color: '#999999' }
];

// 包含各渠道的新增学生占比
const channelContributionData = [
  { name: '包含自有挖掘', value: 726816, percent: 59.90, color: '#FF8042' },
  { name: '包含联盟', value: 516839, percent: 42.60, color: '#8884d8' },
  { name: '包含蚂蚁', value: 134923, percent: 11.12, color: '#82ca9d' },
  { name: '包含自有认证', value: 4627, percent: 0.38, color: '#0088FE' }
];

// 格式化函数
const formatYAxis = (value) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(0)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return value.toString();
};

const formatNumber = (value) => {
  if (value === null || value === undefined) return '-';
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(2)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(1)}K`;
  }
  return value;
};

// 自定义工具提示
const CustomTooltip = ({ active, payload, label }: { active?: any; payload?: any; label?: any }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 shadow-md rounded">
        <p className="font-bold text-gray-900">{`日期: ${label}`}</p>
        {payload[0] && payload[0].value !== null && (
          <p className="text-blue-600">{`用户数: ${formatNumber(payload[0].value)}`}</p>
        )}
        {payload[1] && payload[1].value !== null && (
          <p className="text-green-600">{`环比增长量: ${formatNumber(payload[1].value)}`}</p>
        )}
        {payload[2] && payload[2].value !== null && (
          <p className="text-red-600">{`环比增长率: ${payload[2].value}%`}</p>
        )}
      </div>
    );
  }
  return null;
};

// 渠道工具提示
const ChannelTooltip = ({ active, payload, label }: { active?: any; payload?: any; label?: any }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 shadow-md rounded">
        <p className="font-bold text-gray-900">{`日期: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${formatNumber(entry.value)}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// 新增学生渠道分析工具提示
const StudentChannelTooltip = ({ active, payload }: { active?: any; payload?: any }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded">
        <p className="font-semibold">{`${payload[0].name}: ${payload[0].value.toLocaleString()}`}</p>
        {payload[0].payload.percent && (
          <p>{`占比: ${payload[0].payload.percent}%`}</p>
        )}
      </div>
    );
  }
  return null;
};

// 定义标签页组件
const TabPanel = ({ children, value, index }) => {
  return (
    <div className={value === index ? "block" : "hidden"}>
      {children}
    </div>
  );
};

const App = () => {
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <div className="w-full h-full p-4 bg-gray-50">
      <h1 className="text-xl font-bold mb-6 text-center">is_student 指标波动分析（2025.05.13-2025.05.19）</h1>
      
      {/* 标签页导航 */}
      <div className="flex mb-4 border-b">
        <button 
          className={`px-4 py-2 font-medium ${tabValue === 0 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setTabValue(0)}
        >
          总体指标波动
        </button>
        <button 
          className={`px-4 py-2 font-medium ${tabValue === 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setTabValue(1)}
        >
          各渠道波动分析
        </button>
        <button 
          className={`px-4 py-2 font-medium ${tabValue === 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setTabValue(2)}
        >
          新增学生渠道分析
        </button>
      </div>

      {/* 标签页内容 */}
      <TabPanel value={tabValue} index={0}>
        <div className="grid grid-cols-1 gap-6 mb-6">
          {/* 总体趋势综合图表 */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">1. 学生标签用户数及增长情况</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={totalTrendData} margin={{ top: 10, right: 30, left: 20, bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" angle={-45} textAnchor="end" height={60} />
                  <YAxis yAxisId="left" tickFormatter={formatYAxis} domain={['auto', 'auto']} />
                  <YAxis yAxisId="right" orientation="right" domain={[0, 'auto']} />
                  <Tooltip content={props => <CustomTooltip {...props} />} />
                  <Legend wrapperStyle={{ bottom: 0 }} />
                  <Line yAxisId="left" type="monotone" dataKey="用户数" stroke="#8884d8" dot={{ r: 3 }} activeDot={{ r: 5 }} />
                  <Bar yAxisId="right" dataKey="环比增长量" barSize={20} fill="#82ca9d" />
                  <Line yAxisId="right" type="monotone" dataKey="环比增长率" stroke="#ff7300" dot={{ r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 主账号用户波动图 */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">2. 主账号学生用户数及增长情况</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={primaryAccountData} margin={{ top: 10, right: 30, left: 20, bottom: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" tickFormatter={formatYAxis} />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip content={props => <CustomTooltip {...props} />} />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="用户数" stroke="#8884d8" dot={{ r: 3 }} />
                  <Bar yAxisId="right" dataKey="环比增长量" barSize={20} fill="#82ca9d" />
                  <Line yAxisId="right" type="monotone" dataKey="环比增长率" stroke="#ff7300" dot={{ r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <div className="grid grid-cols-1 gap-6 mb-6">
          {/* 各渠道规模趋势图 */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">3. 各渠道学生规模趋势</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={channelData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={formatYAxis} />
                  <Tooltip content={props => <ChannelTooltip {...props} />} />
                  <Legend />
                  <Line type="monotone" dataKey="gprofile" name="联盟" stroke="#0088FE" />
                  <Line type="monotone" dataKey="a" name="蚂蚁" stroke="#00C49F" />
                  <Line type="monotone" dataKey="address" name="自有挖掘" stroke="#FFBB28" />
                  <Line type="monotone" dataKey="identify" name="自有认证" stroke="#FF8042" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 各渠道增长贡献图 */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">4. 各渠道日环比增长量</h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={channelGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="日期" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" tickFormatter={value => value != null ? `${(value * 100).toFixed(2)}%` : ''} />
                  <Tooltip formatter={(value, name) => {
                    if (typeof name === 'string' && name.includes('增长率') && typeof value === 'number') {
                      return [`${(value * 100).toFixed(2)}%`, name];
                    }
                    return [value, name];
                  }} />
                  <Legend />
                  {/* 增长量柱状图 */}
                  <Bar yAxisId="left" dataKey="联盟环比增长" name="联盟增长量" fill="#0088FE" />
                  <Bar yAxisId="left" dataKey="蚂蚁环比增长" name="蚂蚁增长量" fill="#00C49F" />
                  <Bar yAxisId="left" dataKey="自有挖掘环比增长" name="自有挖掘增长量" fill="#FFBB28" />
                  <Bar yAxisId="left" dataKey="自有认证环比增长" name="自有认证增长量" fill="#FF8042" />
                  {/* 增长率折线图 */}
                  <Line yAxisId="right" type="monotone" dataKey="联盟环比增长率" name="联盟增长率" stroke="#0088FE" strokeDasharray="5 2" />
                  <Line yAxisId="right" type="monotone" dataKey="蚂蚁环比增长率" name="蚂蚁增长率" stroke="#00C49F" strokeDasharray="5 2" />
                  <Line yAxisId="right" type="monotone" dataKey="自有挖掘环比增长率" name="自有挖掘增长率" stroke="#FFBB28" strokeDasharray="5 2" />
                  <Line yAxisId="right" type="monotone" dataKey="自有认证环比增长率" name="自有认证增长率" stroke="#FF8042" strokeDasharray="5 2" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <div className="grid grid-cols-1 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold text-center mb-6">新增学生渠道归因分析</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-center mb-4">单一渠道识别分布</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={singleChannelData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      >
                        {singleChannelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={props => <StudentChannelTooltip {...props} />} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-center mb-4">各渠道贡献占比</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={channelContributionData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 70, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" tickFormatter={formatYAxis} />
                      <YAxis type="category" dataKey="name" width={100} />
                      <Tooltip content={props => <StudentChannelTooltip {...props} />} />
                      <Bar dataKey="value">
                        {channelContributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-3">新增学生总数: 1,213,376</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>自有挖掘渠道独立贡献最大，单独识别了575,857名学生，占总新增的47.46%</li>
                <li>联盟渠道单独识别了376,805名学生，占比31.05%</li>
                <li>自有挖掘和联盟渠道共同识别了122,806名学生，占比10.12%</li>
                <li>总体来看，59.90%的新增学生来自自有挖掘渠道的贡献</li>
              </ul>
            </div>
          </div>
        </div>
      </TabPanel>
    </div>
  );
};

export default App;