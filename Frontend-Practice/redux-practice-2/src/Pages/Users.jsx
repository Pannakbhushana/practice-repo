import React from 'react'
import { PieChart, Pie, Tooltip } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';



const data = [
  { name: 'Rahul', value: 1000 },
  { name: 'Suraj', value: 900 },
  { name: 'Amit', value: 550 },
  { name: 'Rohit', value: 340 },
  { name: 'Tejash', value: 760 },
  { name: 'Gurjar', value: 300 },
];


function Users() {
  return (
    <div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        
          <Tooltip />
        </PieChart>


        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
    </div>
  )
}

export default Users
