import type { Metadata } from 'next'
import AdminSidebar from './AdminSidebar'
import AuthGuard from '@/components/AuthGuard'
import './admin.css'

export const metadata: Metadata = {
  title: 'Admin — Highway Roop',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <div className="admin-shell">
        <AdminSidebar />
        <div className="admin-content">{children}</div>
      </div>
    </AuthGuard>
  )
}
