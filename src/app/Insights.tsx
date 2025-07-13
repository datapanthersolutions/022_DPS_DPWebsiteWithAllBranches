import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Eye, 
  Target, 
  BarChart3, 
  PieChart, 
  LineChart, 
  Database,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  AlertCircle,
  CheckCircle,
  Clock,
  Globe,
  Zap
} from 'lucide-react';

const InsightsPage = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('all');

  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const metricCategories = [
    { value: 'all', label: 'All Metrics' },
    { value: 'revenue', label: 'Revenue' },
    { value: 'users', label: 'Users' },
    { value: 'performance', label: 'Performance' }
  ];

  const kpiData = [
    {
      title: 'Total Revenue',
      value: '$124.5K',
      change: '+12.3%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-400'
    },
    {
      title: 'Active Users',
      value: '8,432',
      change: '+5.7%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      title: 'Page Views',
      value: '234.6K',
      change: '-2.1%',
      trend: 'down',
      icon: Eye,
      color: 'text-purple-400'
    },
    {
      title: 'Conversion Rate',
      value: '3.42%',
      change: '+0.8%',
      trend: 'up',
      icon: Target,
      color: 'text-pink-400'
    }
  ];

  const chartData = [
    { month: 'Jan', revenue: 45000, users: 3200, sessions: 12000 },
    { month: 'Feb', revenue: 52000, users: 3800, sessions: 14500 },
    { month: 'Mar', revenue: 48000, users: 4100, sessions: 13200 },
    { month: 'Apr', revenue: 61000, users: 4500, sessions: 16800 },
    { month: 'May', revenue: 55000, users: 4800, sessions: 15200 },
    { month: 'Jun', revenue: 67000, users: 5200, sessions: 18900 }
  ];

  const topRegions = [
    { region: 'North America', users: 3421, percentage: 40.6, color: 'bg-blue-500' },
    { region: 'Europe', users: 2108, percentage: 25.0, color: 'bg-purple-500' },
    { region: 'Asia Pacific', users: 1685, percentage: 20.0, color: 'bg-pink-500' },
    { region: 'South America', users: 843, percentage: 10.0, color: 'bg-green-500' },
    { region: 'Africa', users: 375, percentage: 4.4, color: 'bg-yellow-500' }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Server response time increased by 15%',
      timestamp: '2 minutes ago',
      severity: 'medium'
    },
    {
      id: 2,
      type: 'success',
      message: 'Daily active users target exceeded',
      timestamp: '1 hour ago',
      severity: 'low'
    },
    {
      id: 3,
      type: 'error',
      message: 'API error rate spike detected',
      timestamp: '3 hours ago',
      severity: 'high'
    }
  ];

  const topPages = [
    { page: '/dashboard', views: 45120, change: '+12%' },
    { page: '/analytics', views: 38650, change: '+8%' },
    { page: '/reports', views: 32100, change: '-3%' },
    { page: '/settings', views: 28430, change: '+15%' },
    { page: '/profile', views: 24680, change: '+5%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Data Panther</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Dashboard</a>
              <a href="#" className="text-white font-medium">Insights</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Reports</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Settings</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Page Title & Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Analytics Insights</h1>
            <p className="text-gray-300">Real-time data analytics and performance metrics</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="bg-white/10 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {timeRanges.map(range => (
                <option key={range.value} value={range.value} className="bg-slate-800">
                  {range.label}
                </option>
              ))}
            </select>
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="bg-white/10 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {metricCategories.map(category => (
                <option key={category.value} value={category.value} className="bg-slate-800">
                  {category.label}
                </option>
              ))}
            </select>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${
                  kpi.color === 'text-green-400' ? 'from-green-500/20 to-green-600/20' :
                  kpi.color === 'text-blue-400' ? 'from-blue-500/20 to-blue-600/20' :
                  kpi.color === 'text-purple-400' ? 'from-purple-500/20 to-purple-600/20' :
                  'from-pink-500/20 to-pink-600/20'
                }`}>
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
                <div className={`flex items-center space-x-1 ${
                  kpi.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {kpi.trend === 'up' ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{kpi.change}</span>
                </div>
              </div>
              <h3 className="text-gray-300 text-sm mb-2">{kpi.title}</h3>
              <p className="text-2xl font-bold text-white">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Main Charts Row */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Revenue Trends</h3>
              <div className="flex items-center space-x-2">
                <LineChart className="w-5 h-5 text-purple-400" />
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="h-64 flex items-end justify-between space-x-2">
              {chartData.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg relative group cursor-pointer hover:from-purple-500 hover:to-purple-300 transition-all">
                    <div 
                      className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg"
                      style={{ height: `${(item.revenue / 70000) * 200}px` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        ${item.revenue.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <span className="text-gray-400 text-xs mt-2">{item.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Top Regions</h3>
              <Globe className="w-5 h-5 text-purple-400" />
            </div>
            <div className="space-y-4">
              {topRegions.map((region, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${region.color}`}></div>
                    <span className="text-gray-300 text-sm">{region.region}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{region.users.toLocaleString()}</div>
                    <div className="text-gray-400 text-xs">{region.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Analytics Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Top Pages */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Top Pages</h3>
              <BarChart3 className="w-5 h-5 text-purple-400" />
            </div>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <span className="text-purple-400 text-sm font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{page.page}</div>
                      <div className="text-gray-400 text-sm">{page.views.toLocaleString()} views</div>
                    </div>
                  </div>
                  <div className={`text-sm font-medium ${
                    page.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {page.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Alerts */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Real-time Alerts</h3>
              <Zap className="w-5 h-5 text-purple-400" />
            </div>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3">
                  <div className={`p-1 rounded-full ${
                    alert.type === 'error' ? 'bg-red-500/20' :
                    alert.type === 'warning' ? 'bg-yellow-500/20' :
                    'bg-green-500/20'
                  }`}>
                    {alert.type === 'error' ? (
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    ) : alert.type === 'warning' ? (
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{alert.message}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-400 text-xs">{alert.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Performance Metrics</h3>
            <div className="flex items-center space-x-2">
              <PieChart className="w-5 h-5 text-purple-400" />
              <button className="text-purple-400 hover:text-purple-300 transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <div className="w-full h-full bg-gray-700 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 rounded-full" 
                     style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 75%, 50% 50%)' }}>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">94%</span>
                </div>
              </div>
              <h4 className="text-white font-medium">System Uptime</h4>
              <p className="text-gray-400 text-sm">Last 30 days</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <div className="w-full h-full bg-gray-700 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" 
                     style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%, 87% 87%, 50% 50%)' }}>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">87%</span>
                </div>
              </div>
              <h4 className="text-white font-medium">API Response</h4>
              <p className="text-gray-400 text-sm">Avg. response time</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <div className="w-full h-full bg-gray-700 rounded-full"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" 
                     style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 13% 100%, 50% 50%)' }}>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">78%</span>
                </div>
              </div>
              <h4 className="text-white font-medium">Data Quality</h4>
              <p className="text-gray-400 text-sm">Accuracy score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;