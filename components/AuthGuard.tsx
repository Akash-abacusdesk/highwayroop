'use client'

import { useEffect, useState } from 'react'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    fetch('/highwayroop/api/auth/check', { credentials: 'include' })
      .then(r => {
        if (r.status === 401) {
          window.location.href = '/highwayroop/login'
        } else {
          setChecked(true)
        }
      })
      .catch(() => {
        // API unreachable (local dev without PHP) — allow access
        setChecked(true)
      })
  }, [])

  if (!checked) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#f1f5f9',
        fontFamily: '"Josefin Sans", sans-serif',
        color: '#64748b',
        fontSize: 14,
      }}>
        Checking authentication…
      </div>
    )
  }

  return <>{children}</>
}
