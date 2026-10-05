'use client'

import { Check, ChevronRight, ExternalLink, X } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import type { HomepageContent, HeroSlide, Stat } from '@/types/content'

const SLIDE_LABELS = ['Slide 1', 'Slide 2', 'Slide 3']
const SECTION_TABS = ['Hero Slides', 'Statistics', 'About', 'Contact'] as const
type SectionTab = (typeof SECTION_TABS)[number]

export default function HomepageEditor() {
  const [content, setContent] = useState<HomepageContent | null>(null)
  const [activeSection, setActiveSection] = useState<SectionTab>('Hero Slides')
  const [activeSlide, setActiveSlide] = useState(0)
  const [saving, setSaving] = useState(false)
  const [notice, setNotice] = useState<{ type: 'success' | 'error'; msg: string } | null>(null)
  const [loadError, setLoadError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/highwayroop/api/content/homepage')
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json() })
      .then((data: HomepageContent) => setContent(data))
      .catch((err) => setLoadError(`Could not load content (${err.message}). Check the API.`))
  }, [])

  const save = useCallback(async () => {
    if (!content) return
    setSaving(true)
    setNotice(null)
    try {
      const res = await fetch('/highwayroop/api/content/homepage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      })
      if (!res.ok) throw new Error()
      setNotice({ type: 'success', msg: 'Changes saved successfully. The live site has been updated.' })
    } catch {
      setNotice({ type: 'error', msg: 'Failed to save changes. Please try again.' })
    } finally {
      setSaving(false)
    }
  }, [content])

  /* ── Helpers ── */
  const setSlide = (index: number, patch: Partial<HeroSlide>) =>
    setContent(prev => {
      if (!prev) return prev
      const slides = prev.hero.slides.map((s, i) => (i === index ? { ...s, ...patch } : s))
      return { ...prev, hero: { slides } }
    })

  const setStat = (index: number, patch: Partial<Stat>) =>
    setContent(prev => {
      if (!prev) return prev
      const stats = prev.stats.map((s, i) => (i === index ? { ...s, ...patch } : s))
      return { ...prev, stats }
    })

  const setIntro = (patch: Partial<HomepageContent['intro']>) =>
    setContent(prev => prev ? { ...prev, intro: { ...prev.intro, ...patch } } : prev)

  const setContact = (patch: Partial<HomepageContent['contact']>) =>
    setContent(prev => prev ? { ...prev, contact: { ...prev.contact, ...patch } } : prev)

  if (!content) {
    return (
      <>
        <div className="admin-topbar">
          <span className="admin-topbar-title">Homepage Editor</span>
        </div>
        <div className="admin-page">
          {loadError ? (
            <div className="admin-notice admin-notice-error" style={{ maxWidth: 560 }}>
              <X size={14} aria-hidden="true" /> {loadError}
            </div>
          ) : (
            <p style={{ color: '#64748b' }}>Loading content…</p>
          )}
        </div>
      </>
    )
  }

  return (
    <>
      <div className="admin-topbar">
        <div className="admin-topbar-breadcrumb">
          <Link href="/admin">Dashboard</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <Link href="/admin/pages">Pages</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span>Homepage</span>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Link href="/" target="_blank" className="admin-btn admin-btn-outline" style={{ fontSize: 12 }}>
            <ExternalLink size={14} aria-hidden="true" /> Preview site
          </Link>
          <button
            className="admin-btn admin-btn-primary"
            onClick={save}
            disabled={saving}
          >
            {saving ? 'Saving…' : <><Check size={14} aria-hidden="true" /> Save changes</>}
          </button>
        </div>
      </div>

      <div className="admin-page">
        {notice && (
          <div className={`admin-notice admin-notice-${notice.type}`}>
            {notice.type === 'success' ? <Check size={14} aria-hidden="true" /> : <X size={14} aria-hidden="true" />} {notice.msg}
          </div>
        )}

        {/* Section tabs */}
        <div className="admin-slide-tabs" style={{ marginBottom: 24 }}>
          {SECTION_TABS.map(tab => (
            <button
              key={tab}
              className={`admin-slide-tab${activeSection === tab ? ' active' : ''}`}
              onClick={() => setActiveSection(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Hero Slides ── */}
        {activeSection === 'Hero Slides' && (
          <div className="admin-card">
            <div className="admin-card-header">
              <div>
                <h2>Hero Carousel Slides</h2>
                <p>3 slides rotate automatically on the homepage banner</p>
              </div>
            </div>
            <div className="admin-card-body">
              <div className="admin-slide-tabs">
                {SLIDE_LABELS.map((label, i) => (
                  <button
                    key={i}
                    className={`admin-slide-tab${activeSlide === i ? ' active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {content.hero.slides[activeSlide] && (() => {
                const slide = content.hero.slides[activeSlide]
                return (
                  <div>
                    <div className="admin-form-group">
                      <label className="admin-label">Eyebrow text</label>
                      <input
                        className="admin-input"
                        value={slide.eyebrow}
                        onChange={e => setSlide(activeSlide, { eyebrow: e.target.value })}
                      />
                      <span className="admin-input-hint">Displayed in uppercase above the heading</span>
                    </div>
                    <div className="admin-form-row">
                      <div className="admin-form-group">
                        <label className="admin-label">Heading — line 1</label>
                        <input
                          className="admin-input"
                          value={slide.headingLine1}
                          onChange={e => setSlide(activeSlide, { headingLine1: e.target.value })}
                        />
                      </div>
                      <div className="admin-form-group">
                        <label className="admin-label">Heading — line 2 (blue)</label>
                        <input
                          className="admin-input"
                          value={slide.headingLine2}
                          onChange={e => setSlide(activeSlide, { headingLine2: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="admin-form-group">
                      <label className="admin-label">Body text</label>
                      <textarea
                        className="admin-textarea"
                        value={slide.lede}
                        onChange={e => setSlide(activeSlide, { lede: e.target.value })}
                      />
                    </div>
                    <div className="admin-form-row">
                      <div className="admin-form-group">
                        <label className="admin-label">Primary button text</label>
                        <input
                          className="admin-input"
                          value={slide.primaryCtaText}
                          onChange={e => setSlide(activeSlide, { primaryCtaText: e.target.value })}
                        />
                      </div>
                      <div className="admin-form-group">
                        <label className="admin-label">Primary button link</label>
                        <input
                          className="admin-input"
                          value={slide.primaryCtaHref}
                          onChange={e => setSlide(activeSlide, { primaryCtaHref: e.target.value })}
                          placeholder="#businesses"
                        />
                      </div>
                    </div>
                    <div className="admin-form-row">
                      <div className="admin-form-group">
                        <label className="admin-label">Secondary link text</label>
                        <input
                          className="admin-input"
                          value={slide.secondaryCtaText}
                          onChange={e => setSlide(activeSlide, { secondaryCtaText: e.target.value })}
                        />
                      </div>
                      <div className="admin-form-group">
                        <label className="admin-label">Secondary link href</label>
                        <input
                          className="admin-input"
                          value={slide.secondaryCtaHref}
                          onChange={e => setSlide(activeSlide, { secondaryCtaHref: e.target.value })}
                          placeholder="#global"
                        />
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        )}

        {/* ── Statistics ── */}
        {activeSection === 'Statistics' && (
          <div className="admin-card">
            <div className="admin-card-header">
              <div>
                <h2>Statistics Bar</h2>
                <p>5 animated counters shown below the hero</p>
              </div>
            </div>
            <div className="admin-card-body">
              <div className="admin-stats-grid">
                {content.stats.map((stat, i) => (
                  <div key={i} className="admin-stat-edit-card">
                    <span className="admin-label">Stat {i + 1}</span>
                    <div className="admin-form-group">
                      <label className="admin-label" style={{ fontSize: 10 }}>Number</label>
                      <input
                        className="admin-input"
                        type="number"
                        value={stat.count}
                        onChange={e => setStat(i, { count: +e.target.value })}
                        style={{ marginBottom: 8 }}
                      />
                      <label className="admin-label" style={{ fontSize: 10 }}>Suffix (e.g. +)</label>
                      <input
                        className="admin-input"
                        value={stat.suffix}
                        onChange={e => setStat(i, { suffix: e.target.value })}
                        style={{ marginBottom: 8 }}
                        placeholder="+"
                      />
                      <label className="admin-label" style={{ fontSize: 10 }}>Label (use \n for line break)</label>
                      <textarea
                        className="admin-textarea"
                        value={stat.label}
                        onChange={e => setStat(i, { label: e.target.value })}
                        style={{ minHeight: 54 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── About / Intro ── */}
        {activeSection === 'About' && (
          <div className="admin-card">
            <div className="admin-card-header">
              <div>
                <h2>About Section</h2>
                <p>&ldquo;Who we are&rdquo; section with heading, body copy and CTA</p>
              </div>
            </div>
            <div className="admin-card-body">
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label className="admin-label">Heading — line 1</label>
                  <input
                    className="admin-input"
                    value={content.intro.headingLine1}
                    onChange={e => setIntro({ headingLine1: e.target.value })}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-label">Heading — line 2 (italic/blue)</label>
                  <input
                    className="admin-input"
                    value={content.intro.headingLine2}
                    onChange={e => setIntro({ headingLine2: e.target.value })}
                  />
                </div>
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Paragraph 1</label>
                <textarea
                  className="admin-textarea"
                  value={content.intro.para1}
                  onChange={e => setIntro({ para1: e.target.value })}
                />
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Paragraph 2</label>
                <textarea
                  className="admin-textarea"
                  value={content.intro.para2}
                  onChange={e => setIntro({ para2: e.target.value })}
                />
              </div>
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label className="admin-label">CTA button text</label>
                  <input
                    className="admin-input"
                    value={content.intro.ctaText}
                    onChange={e => setIntro({ ctaText: e.target.value })}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-label">CTA link href</label>
                  <input
                    className="admin-input"
                    value={content.intro.ctaHref}
                    onChange={e => setIntro({ ctaHref: e.target.value })}
                    placeholder="#businesses"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Contact ── */}
        {activeSection === 'Contact' && (
          <div className="admin-card">
            <div className="admin-card-header">
              <div>
                <h2>Contact Section</h2>
                <p>Red CTA band at the bottom of the homepage</p>
              </div>
            </div>
            <div className="admin-card-body">
              <div className="admin-form-group">
                <label className="admin-label">Eyebrow text</label>
                <input
                  className="admin-input"
                  value={content.contact.eyebrow}
                  onChange={e => setContact({ eyebrow: e.target.value })}
                />
              </div>
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label className="admin-label">Heading — line 1</label>
                  <input
                    className="admin-input"
                    value={content.contact.headingLine1}
                    onChange={e => setContact({ headingLine1: e.target.value })}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-label">Heading — line 2</label>
                  <input
                    className="admin-input"
                    value={content.contact.headingLine2}
                    onChange={e => setContact({ headingLine2: e.target.value })}
                  />
                </div>
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Body text</label>
                <textarea
                  className="admin-input"
                  rows={3}
                  value={content.contact.body ?? ''}
                  onChange={e => setContact({ body: e.target.value })}
                />
              </div>
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label className="admin-label">Button text</label>
                  <input
                    className="admin-input"
                    value={content.contact.buttonText}
                    onChange={e => setContact({ buttonText: e.target.value })}
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-label">Phone number</label>
                  <input
                    className="admin-input"
                    value={content.contact.phone}
                    onChange={e => setContact({ phone: e.target.value })}
                    placeholder="+91 83969 99592"
                  />
                </div>
              </div>
              <div className="admin-form-group">
                <label className="admin-label">Email address</label>
                <input
                  className="admin-input"
                  type="email"
                  value={content.contact.email}
                  onChange={e => setContact({ email: e.target.value })}
                  placeholder="info@highwayroop.com"
                />
              </div>
            </div>
          </div>
        )}

        {/* floating save */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 8 }}>
          {notice && (
            <span style={{ fontSize: 13, color: notice.type === 'success' ? '#166534' : '#991b1b', alignSelf: 'center' }}>
              {notice.msg}
            </span>
          )}
          <button
            className="admin-btn admin-btn-primary"
            onClick={save}
            disabled={saving}
          >
            {saving ? 'Saving…' : <><Check size={14} aria-hidden="true" /> Save changes</>}
          </button>
        </div>
      </div>
    </>
  )
}
