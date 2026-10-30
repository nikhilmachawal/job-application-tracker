import { Link } from "react-router-dom";
import {
  Briefcase,
  CalendarCheck,
  Award,
  XCircle,
  Plus,
  ArrowRight,
  MoreHorizontal,
} from "lucide-react";
import StatusBadge from "../components/StatusBadge";
import "./Dashboard.css";

function Dashboard({ jobs }) {
  // Dynamically calculate counts from the jobs array!
  const totalCount = jobs.length;
  const interviewCount = jobs.filter(
    (job) => job.status === "Interview",
  ).length;
  const offerCount = jobs.filter((job) => job.status === "Offer").length;
  const rejectedCount = jobs.filter((job) => job.status === "Rejected").length;

  const statCards = [
    {
      label: "Total Applications",
      count: totalCount,
      color: "blue",
      icon: Briefcase,
    },
    {
      label: "Interviews",
      count: interviewCount,
      color: "green",
      icon: CalendarCheck,
    },
    { label: "Offers", 
      count: offerCount, 
      color: "yellow", 
      icon: Award 
    },
    { label: "Rejected", 
      count: rejectedCount, 
      color: "red", 
      icon: XCircle 
    },
  ];

  // Grab only the 5 most recent applications for the dashboard preview
  const recentJobs = jobs.slice(0, 5);

  return (
    <div className="dashboard-page">
      {/* Top Heading + Add Button */}
      <div className="page-header">
        <div>
          <h1 className="page-title">Dashboard</h1>
          <p className="page-subtitle">
            Track your job applications and stay organized.
          </p>
        </div>
        <Link to="/add" className="btn-primary">
          <Plus size={18} />
          <span>Add Application</span>
        </Link>
      </div>

      {/* 4 Summary Stat Cards */}
      <div className="stats-grid">
        {statCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.label}
              className={`stat-card stat-card-${card.color}`}
            >
              <div className={`stat-icon-box icon-${card.color}`}>
                <IconComponent size={20} />
              </div>
              <h2 className={`stat-number text-${card.color}`}>{card.count}</h2>
              <p className={`stat-label text-${card.color}`}>{card.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Applications Section */}
      <div className="table-card">
        <div className="table-card-header">
          <h2 className="section-title">Recent Applications</h2>
          <Link to="/applications" className="view-all-link">
            <span>View All</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <table className="jobs-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Status</th>
              <th>Applied Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentJobs.map((job) => (
              <tr key={job.id}>
                <td>
                  <div className="company-cell">
                    {job.logo ? (
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        className="company-logo"
                      />
                    ) : (
                      <div className="company-logo-fallback">
                        {job.company.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className="font-semibold">{job.company}</span>
                  </div>
                </td>
                <td className="text-muted">{job.position}</td>
                <td>
                  <StatusBadge status={job.status} />
                </td>
                <td className="text-muted">{job.appliedDate}</td>
                <td>
                  <button className="action-dots-btn" title="More actions">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
