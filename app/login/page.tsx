'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState, FormEvent } from 'react'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/highwayroop/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      })
      if (res.ok) {
        window.location.href = '/highwayroop/admin'
      } else {
        const data = await res.json()
        setError(data.error || 'Invalid credentials. Please try again.')
      }
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/highwayroop/assets/highway-roop-logo.webp" alt="Highway Roop" />
          <span className="login-brand-tag">Admin</span>
        </div>

        <h1 className="login-title">Sign in to continue</h1>

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          {error && (
            <div className="login-error" role="alert">
              {error}
            </div>
          )}

          <div className="login-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              autoComplete="username"
              placeholder="admin"
              disabled={loading}
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="••••••••"
              disabled={loading}
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Signing in…' : <>Sign in <ArrowRight size={16} aria-hidden="true" /></>}
          </button>
        </form>

        <p className="login-back">
          <a href="/highwayroop/"><ArrowLeft size={14} aria-hidden="true" /> Back to website</a>
        </p>
      </div>
    </div>
  )
}
