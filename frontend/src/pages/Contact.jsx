import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  function submit(e) {
    e.preventDefault()
    if (!form.email || !form.message) {
      setStatus('Please provide email and message')
      return
    }
    setSending(true)
    fetch('${import.meta.env.VITE_API_URL}/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(async r => {
        setSending(false)
        const msg = await r.text()
        if (r.ok) {
          setStatus(msg)
          setForm({ name: '', email: '', message: '' })
        } else {
          setStatus(msg || 'Failed to send')
        }
      })
      .catch(() => {
        setSending(false)
        setStatus('Server error, please try again')
      })
  }

  return (
    <section className="card">
      <h2>Contact</h2>
      <form onSubmit={submit} style={{ display: 'grid', gap: 8 }}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={6} />
        <button
          className="btn"
          type="submit"
          disabled={sending || !form.email || !form.message}
        >
          {sending ? 'Sending...' : 'Send'}
        </button>
      </form>
      {status && <p style={{ marginTop: 8 }}>{status}</p>}
    </section>
  )
}
