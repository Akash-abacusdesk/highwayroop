import Link from 'next/link'

export default function PagesIndex() {
  return (
    <>
      <div className="admin-topbar">
        <div className="admin-topbar-breadcrumb">
          <Link href="/admin">Dashboard</Link>
          <span>›</span>
          <span>Pages</span>
        </div>
      </div>

      <div className="admin-page">
        <div className="admin-card">
          <div className="admin-card-header">
            <div>
              <h2>All Pages</h2>
              <p>Manage website page content</p>
            </div>
          </div>
          <div className="admin-card-body" style={{ padding: 0 }}>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Page name</th>
                  <th>URL</th>
                  <th>Status</th>
                  <th>Editable sections</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="admin-page-name">Homepage</div>
                    <div className="admin-page-slug">Main landing page</div>
                  </td>
                  <td style={{ color: '#64748b', fontSize: 12 }}>/</td>
                  <td><span className="admin-badge admin-badge-published">Published</span></td>
                  <td>Hero · Stats · About · Contact</td>
                  <td>
                    <Link href="/admin/pages/homepage" className="admin-btn admin-btn-primary" style={{ fontSize: 12, padding: '6px 14px' }}>
                      Edit page
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
