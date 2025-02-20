import React, { useState } from "react";
import {
  Building,
  Search,
  Filter,
  Globe,
  Briefcase,
  Users,
  Trophy,
  ArrowRight,
  LineChart,
  Database,
  Sparkles,
} from "lucide-react";

const DirectoryLanding = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-emerald-600">
                CoLive.ai
              </span>
            </div>
            <div className="hidden md:flex space-x-8 text-gray-600">
              <a href="#" className="hover:text-emerald-600 transition-colors">
                Companies
              </a>
              <a href="#" className="hover:text-emerald-600 transition-colors">
                Market Data
              </a>
              <a href="#" className="hover:text-emerald-600 transition-colors">
                Insights
              </a>
              <a href="#" className="hover:text-emerald-600 transition-colors">
                Reports
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Search Section */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Discover the Future of
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600">
              PropTech & Co-Living
            </span>
          </h1>

          {/* Advanced Search */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search companies, technologies, or markets..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Advanced Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Directory Categories */}
      <div className="py-16 bg-white/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <CategoryCard
              icon={<Globe />}
              title="Property Tech"
              description="Smart property management and IoT solutions"
              count="250+ Companies"
            />
            <CategoryCard
              icon={<Users />}
              title="Co-Living Spaces"
              description="Modern shared living solutions and platforms"
              count="180+ Companies"
            />
            <CategoryCard
              icon={<Briefcase />}
              title="Short-Term Rentals"
              description="Vacation rentals and temporary housing"
              count="300+ Companies"
            />
          </div>
        </div>
      </div>

      {/* Data Points Section */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Comprehensive Company Data
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DataPointCard
              icon={<Database />}
              title="Company Metrics"
              points={[
                "Revenue & Valuation",
                "Employee Count",
                "Funding History",
              ]}
            />
            <DataPointCard
              icon={<LineChart />}
              title="Market Analysis"
              points={[
                "Industry Focus",
                "Target Markets",
                "Competitive Landscape",
              ]}
            />
            <DataPointCard
              icon={<Sparkles />}
              title="Tech Stack"
              points={[
                "AI & IoT Features",
                "Smart Home Integration",
                "Blockchain Usage",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ icon, title, description, count }) => (
  <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all cursor-pointer group">
    <div className="inline-block p-3 rounded-full bg-emerald-100 text-emerald-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex items-center justify-between text-sm">
      <span className="text-emerald-600 font-semibold">{count}</span>
      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-emerald-600 transition-colors" />
    </div>
  </div>
);

const DataPointCard = ({ icon, title, points }) => (
  <div className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-all">
    <div className="inline-block p-3 rounded-full bg-emerald-100 text-emerald-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <Trophy className="h-4 w-4 mr-2 text-emerald-600" />
          {point}
        </li>
      ))}
    </ul>
  </div>
);

export default DirectoryLanding;
