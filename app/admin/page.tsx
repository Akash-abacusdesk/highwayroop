import { ExternalLink, FileText, Home } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <>
      <div className="admin-topbar">
        <span className="admin-topbar-title">Dashboard</span>
        <Link href="/" target="_blank" className="admin-btn admin-btn-outline" style={{ fontSize: 12 }}>
          <ExternalLink size={14} aria-hidden="true" /> View live site
        </Link>
      </div>

      <div className="admin-page">
        {/* Stat cards */}
        <div className="admin-stat-row">
          <div className="admin-stat-card">
            <strong>1</strong>
            <span>Page managed</span>
          </div>
          <div className="admin-stat-card">
            <strong>4</strong>
            <span>Editable sections</span>
          </div>
          <div className="admin-stat-card">
            <strong>3</strong>
            <span>Hero slides</span>
          </div>
          <div className="admin-stat-card">
            <strong>5</strong>
            <span>Stats counters</span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="admin-card">
          <div className="admin-card-header">
            <div>
              <h2>Quick actions</h2>
              <p>Jump directly to the content you want to edit</p>
            </div>
          </div>
          <div className="admin-card-body">
            <div className="admin-quick-links">
              <Link href="/admin/pages/homepage" className="admin-quick-link">
                <div className="admin-quick-link-icon"><Home size={20} aria-hidden="true" /></div>
                <div className="admin-quick-link-text">
                  <strong>Edit Homepage</strong>
                  <span>Hero slides, stats, about &amp; contact</span>
                </div>
              </Link>
              <Link href="/admin/pages" className="admin-quick-link">
                <div className="admin-quick-link-icon"><FileText size={20} aria-hidden="true" /></div>
                <div className="admin-quick-link-text">
                  <strong>All Pages</strong>
                  <span>View and manage all site pages</span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Pages summary */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h2>Pages</h2>
            <Link href="/admin/pages" className="admin-btn admin-btn-outline" style={{ fontSize: 12, padding: '6px 14px' }}>
              View all
            </Link>
          </div>
          <div className="admin-card-body" style={{ padding: 0 }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Status</th>
                  <th>Sections</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="admin-page-name">Homepage</div>
                    <div className="admin-page-slug">/</div>
                  </td>
                  <td><span className="admin-badge admin-badge-published">Published</span></td>
                  <td>4 editable</td>
                  <td>
                    <Link href="/admin/pages/homepage" className="admin-btn admin-btn-primary" style={{ fontSize: 12, padding: '6px 14px' }}>
                      Edit
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
