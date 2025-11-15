import { useState } from 'react';
import { LayoutDashboard, CreditCard, Wallet, TrendingUp, Settings, Download, Upload, Search, Filter, Calendar, Plus, Edit, Trash2, Bell, Lock, User, Link, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Progress } from '../components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Switch } from '../components/ui/switch';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Dashboard() {
  const [currentView, setCurrentView] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'transactions', name: 'Transactions', icon: CreditCard },
    { id: 'budget', name: 'Budget', icon: Wallet },
    { id: 'investments', name: 'Investments', icon: TrendingUp },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  const transactions = [
    { id: 1, date: '2024-11-14', merchant: 'Swiggy', category: 'Food', amount: -450, type: 'expense' },
    { id: 2, date: '2024-11-13', merchant: 'Amazon', category: 'Shopping', amount: -2340, type: 'expense' },
    { id: 3, date: '2024-11-13', merchant: 'Salary', category: 'Income', amount: 75000, type: 'income' },
    { id: 4, date: '2024-11-12', merchant: 'Uber', category: 'Transport', amount: -280, type: 'expense' },
    { id: 5, date: '2024-11-11', merchant: 'Netflix', category: 'Entertainment', amount: -199, type: 'expense' },
    { id: 6, date: '2024-11-10', merchant: 'DMart', category: 'Groceries', amount: -3450, type: 'expense' },
    { id: 7, date: '2024-11-09', merchant: 'BookMyShow', category: 'Entertainment', amount: -800, type: 'expense' },
    { id: 8, date: '2024-11-08', merchant: 'Shell', category: 'Fuel', amount: -2500, type: 'expense' },
  ];

  const budgets = [
    { category: 'Food & Dining', spent: 8500, limit: 10000, color: 'bg-blue-500' },
    { category: 'Shopping', spent: 15000, limit: 15000, color: 'bg-purple-500' },
    { category: 'Transport', spent: 3500, limit: 5000, color: 'bg-green-500' },
    { category: 'Entertainment', spent: 4200, limit: 5000, color: 'bg-yellow-500' },
    { category: 'Groceries', spent: 7800, limit: 10000, color: 'bg-pink-500' },
    { category: 'Bills & Utilities', spent: 4500, limit: 6000, color: 'bg-orange-500' },
  ];

  const investments = [
    { name: 'Mutual Funds', value: 250000, growth: 12.5, risk: 'Medium' },
    { name: 'Stocks', value: 150000, growth: 8.3, risk: 'High' },
    { name: 'Fixed Deposits', value: 100000, growth: 6.5, risk: 'Low' },
    { name: 'Gold', value: 50000, growth: 4.2, risk: 'Low' },
  ];

  const accounts = [
    { name: 'HDFC Savings', balance: 45000, icon: '🏦' },
    { name: 'ICICI Credit Card', balance: -8500, icon: '💳' },
    { name: 'Paytm Wallet', balance: 1200, icon: '💰' },
  ];

  const alerts = [
    { type: 'warning', message: 'You\'ve reached 100% of your Shopping budget' },
    { type: 'info', message: 'Credit card payment due in 3 days' },
    { type: 'success', message: 'You saved 15% more this month!' },
  ];

  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden lg:block">
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <span className="text-white">F</span>
            </div>
            <span className="text-gray-900">FinanceAI</span>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  currentView === item.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Overview */}
          {currentView === 'overview' && (
            <div>
              <div className="mb-8">
                <h1 className="text-gray-900 mb-2">Welcome back, User!</h1>
                <p className="text-gray-600">Here's your financial overview for November 2024</p>
              </div>

              {/* Alerts */}
              {alerts.length > 0 && (
                <div className="mb-8 space-y-3">
                  {alerts.map((alert, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 p-4 rounded-lg ${
                        alert.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                        alert.type === 'info' ? 'bg-blue-50 border border-blue-200' :
                        'bg-green-50 border border-green-200'
                      }`}
                    >
                      <AlertTriangle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                        alert.type === 'warning' ? 'text-yellow-600' :
                        alert.type === 'info' ? 'text-blue-600' :
                        'text-green-600'
                      }`} />
                      <p className="text-gray-700">{alert.message}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Stats Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Total Balance</span>
                      <Wallet className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="text-gray-900 mb-1">₹37,700</div>
                    <div className="text-green-600 text-sm">+12.5% from last month</div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Monthly Spending</span>
                      <CreditCard className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="text-gray-900 mb-1">₹43,500</div>
                    <div className="text-red-600 text-sm">+8.3% from last month</div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Savings</span>
                      <TrendingUp className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="text-gray-900 mb-1">₹31,500</div>
                    <div className="text-green-600 text-sm">+15.2% from last month</div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">Investments</span>
                      <TrendingUp className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="text-gray-900 mb-1">₹5,50,000</div>
                    <div className="text-green-600 text-sm">+9.8% returns</div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Row */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Monthly Spending</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-end gap-2">
                      {[65, 78, 85, 72, 90, 88, 95, 82, 75, 68, 73, 80].map((height, i) => (
                        <div key={i} className="flex-1 bg-gray-200 rounded-t" style={{ height: `${height}%` }}>
                          <div className="h-full bg-gradient-to-t from-gray-700 to-gray-900 rounded-t" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-4 text-gray-600 text-sm">
                      <span>Jan</span>
                      <span>Jun</span>
                      <span>Dec</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Accounts Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {accounts.map((account, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="text-2xl">{account.icon}</div>
                            <div>
                              <div className="text-gray-900">{account.name}</div>
                              <div className={`${account.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                ₹{Math.abs(account.balance).toLocaleString()}
                                {account.balance < 0 && ' (debt)'}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Transactions */}
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-gray-900">Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {transactions.slice(0, 5).map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                            <CreditCard className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <div className="text-gray-900">{transaction.merchant}</div>
                            <div className="text-gray-500 text-sm">{transaction.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`${transaction.type === 'income' ? 'text-green-600' : 'text-gray-900'}`}>
                            {transaction.type === 'income' ? '+' : ''}₹{Math.abs(transaction.amount)}
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {transaction.category}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Transactions View */}
          {currentView === 'transactions' && (
            <div>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h1 className="text-gray-900 mb-2">Transactions</h1>
                  <p className="text-gray-600">View and manage all your transactions</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="border-gray-300 text-gray-700">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button className="bg-gray-900 text-white hover:bg-gray-800">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Transaction
                  </Button>
                </div>
              </div>

              {/* Filters */}
              <Card className="border-gray-200 mb-6">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input placeholder="Search transactions..." className="pl-10 border-gray-300" />
                    </div>
                    <select className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700">
                      <option>All Categories</option>
                      <option>Food</option>
                      <option>Shopping</option>
                      <option>Transport</option>
                    </select>
                    <select className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700">
                      <option>All Types</option>
                      <option>Income</option>
                      <option>Expense</option>
                    </select>
                    <select className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700">
                      <option>Last 30 days</option>
                      <option>Last 3 months</option>
                      <option>Last year</option>
                    </select>
                  </div>
                </CardContent>
              </Card>

              {/* Transactions Table */}
              <Card className="border-gray-200">
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="text-left px-6 py-4 text-gray-900">Date</th>
                          <th className="text-left px-6 py-4 text-gray-900">Merchant</th>
                          <th className="text-left px-6 py-4 text-gray-900">Category</th>
                          <th className="text-right px-6 py-4 text-gray-900">Amount</th>
                          <th className="text-right px-6 py-4 text-gray-900">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {transactions.map((transaction) => (
                          <tr key={transaction.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-600">{transaction.date}</td>
                            <td className="px-6 py-4 text-gray-900">{transaction.merchant}</td>
                            <td className="px-6 py-4">
                              <Badge variant="secondary">{transaction.category}</Badge>
                            </td>
                            <td className={`px-6 py-4 text-right ${transaction.type === 'income' ? 'text-green-600' : 'text-gray-900'}`}>
                              {transaction.type === 'income' ? '+' : ''}₹{Math.abs(transaction.amount)}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-600">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Budget View */}
          {currentView === 'budget' && (
            <div>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h1 className="text-gray-900 mb-2">Budget Planning</h1>
                  <p className="text-gray-600">Track and manage your monthly budgets</p>
                </div>
                <Button className="bg-gray-900 text-white hover:bg-gray-800">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Budget
                </Button>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {budgets.map((budget, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-900">{budget.category}</h3>
                        <Badge variant={budget.spent >= budget.limit ? 'destructive' : 'secondary'}>
                          {Math.round((budget.spent / budget.limit) * 100)}%
                        </Badge>
                      </div>
                      
                      <Progress 
                        value={(budget.spent / budget.limit) * 100} 
                        className="mb-4"
                      />
                      
                      <div className="flex items-center justify-between text-gray-600">
                        <span>₹{budget.spent.toLocaleString()} spent</span>
                        <span>₹{budget.limit.toLocaleString()} limit</span>
                      </div>

                      {budget.spent >= budget.limit && (
                        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-800 text-sm">
                            ⚠️ You've reached your budget limit for this category
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Investments View */}
          {currentView === 'investments' && (
            <div>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h1 className="text-gray-900 mb-2">Investment Portfolio</h1>
                  <p className="text-gray-600">Monitor your investments and returns</p>
                </div>
                <Button className="bg-gray-900 text-white hover:bg-gray-800">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Investment
                </Button>
              </div>

              {/* Portfolio Summary */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="text-gray-600 mb-2">Total Value</div>
                    <div className="text-gray-900 mb-1">₹5,50,000</div>
                    <div className="text-green-600 text-sm">+9.8% overall</div>
                  </CardContent>
                </Card>
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="text-gray-600 mb-2">Total Gains</div>
                    <div className="text-gray-900 mb-1">₹49,000</div>
                    <div className="text-green-600 text-sm">This year</div>
                  </CardContent>
                </Card>
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="text-gray-600 mb-2">Risk Score</div>
                    <div className="text-gray-900 mb-1">Medium</div>
                    <div className="text-gray-600 text-sm">Balanced portfolio</div>
                  </CardContent>
                </Card>
              </div>

              {/* Investments Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                {investments.map((investment, index) => (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-gray-900 mb-1">{investment.name}</h3>
                          <Badge variant="secondary">{investment.risk} Risk</Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-900">₹{investment.value.toLocaleString()}</div>
                          <div className="text-green-600 text-sm">+{investment.growth}%</div>
                        </div>
                      </div>
                      
                      <div className="h-24 bg-gray-50 rounded-lg flex items-end p-4">
                        <div className="flex-1 h-full bg-gradient-to-t from-gray-700 to-gray-900 rounded opacity-20" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Settings View */}
          {currentView === 'settings' && (
            <div>
              <div className="mb-8">
                <h1 className="text-gray-900 mb-2 text-4xl font-semibold">Settings</h1>
                <p className="text-gray-600">Manage your account and preferences</p>
              </div>

              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="mb-6 flex gap-3 w-xl">
                  {['profile', 'security', 'notifications', 'accounts'].map((tab) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className="flex-1 bg-gray-100 text-gray-700 font-medium rounded-full px-4 py-2 text-sm md:text-base hover:bg-white data-[state=active]:bg-white data-[state=active]:text-gray-900 shadow-sm transition"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </TabsTrigger>
        ))}
                </TabsList>

                <TabsContent value="profile">
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-900 mb-2">Full Name</label>
                          <Input defaultValue="John Doe" className="border-gray-300" />
                        </div>
                        <div>
                          <label className="block text-gray-900 mb-2">Email</label>
                          <Input defaultValue="john@example.com" type="email" className="border-gray-300" />
                        </div>
                        <div>
                          <label className="block text-gray-900 mb-2">Phone</label>
                          <Input defaultValue="+91 98765 43210" className="border-gray-300" />
                        </div>
                        <Button className="bg-gray-900 text-white hover:bg-gray-800">
                          Save Changes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="security">
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-gray-900 mb-4">Change Password</h3>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-gray-700 mb-2">Current Password</label>
                              <Input type="password" className="border-gray-300" />
                            </div>
                            <div>
                              <label className="block text-gray-700 mb-2">New Password</label>
                              <Input type="password" className="border-gray-300" />
                            </div>
                            <div>
                              <label className="block text-gray-700 mb-2">Confirm New Password</label>
                              <Input type="password" className="border-gray-300" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="text-gray-900 mb-1">Two-Factor Authentication</h3>
                              <p className="text-gray-600 text-sm">Add an extra layer of security</p>
                            </div>
                            <Switch />
                          </div>
                        </div>

                        <Button className="bg-gray-900 text-white hover:bg-gray-800">
                          Update Security Settings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="notifications">
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {[
                          { title: 'Budget Alerts', description: 'Get notified when approaching budget limits' },
                          { title: 'Transaction Alerts', description: 'Receive alerts for each transaction' },
                          { title: 'Bill Reminders', description: 'Reminders for upcoming bills' },
                          { title: 'Investment Updates', description: 'Portfolio performance notifications' },
                          { title: 'Weekly Summary', description: 'Weekly financial summary email' },
                        ].map((item, index) => (
                          <div key={index} className="flex items-center justify-between pb-6 border-b border-gray-100 last:border-0">
                            <div>
                              <div className="text-gray-900 mb-1">{item.title}</div>
                              <div className="text-gray-600 text-sm">{item.description}</div>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="accounts">
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="space-y-4 mb-6">
                        {accounts.map((account, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">{account.icon}</div>
                              <div>
                                <div className="text-gray-900">{account.name}</div>
                                <div className="text-gray-600 text-sm">Connected</div>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="border-gray-300 text-red-600 hover:bg-red-50">
                              Disconnect
                            </Button>
                          </div>
                        ))}
                      </div>
                      <Button className="bg-gray-900 text-white hover:bg-gray-800">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Bank Account
                      </Button>

                      <div className="mt-8 pt-8 border-t border-gray-200">
                        <h3 className="text-gray-900 mb-2">Danger Zone</h3>
                        <p className="text-gray-600 text-sm mb-4">Permanently delete your account and all data</p>
                        <Button variant="destructive" className="text-white bg-red-700">
                          Delete Account
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
    </div>
    
    </>
  );
}
