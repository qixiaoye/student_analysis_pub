import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

// 仅通过单一渠道识别的新增学生数据
const singleChannelData = [
  { name: '仅自有挖掘', value: 1424961, color: '#FF8042' },
  { name: '仅联盟', value: 590703, color: '#8884d8' },
  { name: '仅蚂蚁', value: 261497, color: '#82ca9d' },
  { name: '仅自有认证', value: 6076, color: '#0088FE' },
  { name: '地址和联盟', value: 234619, color: '#FFBB28' },
  { name: '其他组合', value: 108910, color: '#999999' }
];

// 包含各渠道的新增学生占比
const channelContributionData = [
  { name: '包含自有挖掘', value: 1747508, percent: 66.55, color: '#FF8042' },
  { name: '包含联盟', value: 876813, percent: 33.39, color: '#8884d8' },
  { name: '包含蚂蚁', value: 365251, percent: 13.91, color: '#82ca9d' },
  { name: '包含自有认证', value: 11662, percent: 0.44, color: '#0088FE' }
];

const COLORS = ['#FF8042', '#8884d8', '#82ca9d', '#0088FE', '#FFBB28', '#999999'];

const CustomTooltip = ({ active, payload }) => {
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

const formatYAxis = (value) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return value;
};

const NewStudentAnalysisChart = () => {
  return (
    <div className="flex flex-col">
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
                    <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
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
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" nameKey="name">
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
        <h3 className="text-lg font-medium mb-3">新增学生总数: 2,625,766</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>自有挖掘渠道独立贡献最大，单独识别了1,424,961名学生，占总新增的54.27%</li>
          <li>联盟渠道单独识别了590,703名学生，占比22.50%</li>
          <li>自有挖掘和联盟渠道共同识别了234,619名学生，占比8.94%</li>
          <li>总体来看，66.55%的新增学生来自自有挖掘渠道的贡献</li>
        </ul>
      </div>
    </div>
  );
};

export default NewStudentAnalysisChart;
