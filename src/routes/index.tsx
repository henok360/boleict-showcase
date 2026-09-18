import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Bell, ChartNoAxesColumnIncreasing, CheckCircle2, ClipboardList, Clock3, History, ShieldCheck, Users, UserCheck, Wrench } from 'lucide-react'

const logoUrl = 'https://boleict.lovable.app/__l5e/assets-v1/ae8e3969-ce11-4951-b48b-e59fc2608b41/bole-logo.png'

const workflow = [
  { number: '01', title: 'Request submitted', copy: 'Staff describe the problem, office and urgency in a guided form.', icon: ClipboardList },
  { number: '02', title: 'Team leader review', copy: 'Every request is reviewed and assigned to the right engineer.', icon: UserCheck },
  { number: '03', title: 'Engineer works', copy: 'The engineer accepts, posts progress updates and marks work done.', icon: Wrench },
  { number: '04', title: 'Confirm & close', copy: 'The requester confirms the fix, the team leader closes the ticket.', icon: CheckCircle2 },
]

const capabilities = [
  { title: 'Role-based access', copy: 'Separate, secure workspaces for staff, engineers, team leaders and the administrator.', icon: ShieldCheck },
  { title: 'Live notifications', copy: 'Everyone involved is alerted the moment a request changes hands or status.', icon: Bell },
  { title: 'Full audit history', copy: 'Every action on a ticket is recorded — who did what, and when.', icon: History },
  { title: 'Account control', copy: 'Registration pass keys, password resets and account removal managed centrally.', icon: Users },
  { title: 'Priority handling', copy: 'Urgent issues surface first so critical services stay running.', icon: Clock3 },
  { title: 'Clear dashboards', copy: 'Each role sees the numbers that matter: open, in progress, awaiting, closed.', icon: ChartNoAxesColumnIncreasing },
]

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Bole Sub City Work Flow Management System' },
      { name: 'description', content: 'Official IT support desk for Bole Sub City Administration.' },
    ],
  }),
  component: Home,
})

function ActionLink({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) {
  return (
    <a href="#contact" className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition duration-200 hover:-translate-y-0.5 active:translate-y-0 ${outline ? 'border border-white/30 bg-transparent text-primary-foreground hover:bg-white/10' : 'bg-accent text-accent-foreground shadow-sm hover:bg-accent/90'}`}>
      {children}
    </a>
  )
}

function Home() {
  return (
    <main className="min-h-dvh bg-background font-mono text-foreground">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-primary text-primary-foreground shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Bole Sub City emblem" className="h-16 w-16 rounded-full border border-white/20 bg-white/10 object-cover shadow-sm sm:h-20 sm:w-20" />
            <div><p className="font-serif text-sm font-semibold leading-tight sm:text-base">ቦሌ ክፍለ ከተማ አስተዳደር</p><p className="text-[10px] opacity-80 sm:text-xs">Work Flow Management System</p></div>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground transition hover:-translate-y-0.5 hover:bg-accent/90">Staff sign in <ArrowRight className="ml-1.5 h-3.5 w-3.5" /></a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.09]" style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
          <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-medium tracking-wide sm:text-xs">Official service desk · Information Technology Directorate</p>
          <h1 className="mt-5 max-w-3xl font-serif text-3xl font-bold leading-tight sm:text-5xl">የኢንፎርሜሽን ቴክኖሎጂ አገልግሎት መከታተያ ሲስተም</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed opacity-85 sm:text-base">End-to-End Incident Resolution and Service Continuity Management — one accountable channel from the moment a problem is reported until it is confirmed fixed.</p>
          <div className="mt-8 flex flex-wrap gap-3"><ActionLink>Submit a request <ArrowRight className="ml-2 h-4 w-4" /></ActionLink><ActionLink outline>Track my requests</ActionLink></div>
          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 sm:grid-cols-4">
            {[['4-step', 'Accountable workflow'], ['100%', 'Requests reviewed'], ['Live', 'Status & notifications'], ['Secure', 'Pass-key registration']].map(([value, label]) => <div key={value} className="bg-primary px-4 py-4 sm:px-5"><p className="font-serif text-xl font-bold text-accent sm:text-2xl">{value}</p><p className="mt-0.5 text-[10px] opacity-75 sm:text-xs">{label}</p></div>)}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-widest text-primary">The process</p><h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">How a request moves through the system</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">No request is ever lost or skipped — each one follows the same transparent path with a named owner at every stage.</p></div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">{workflow.map(({ number, title, copy, icon: Icon }) => <article key={number} className="relative overflow-hidden rounded-lg border border-border bg-card p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"><span className="absolute right-4 top-4 font-serif text-4xl font-bold text-muted">{number}</span><span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></span><h3 className="mt-4 font-semibold">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{copy}</p></article>)}</div>
      </section>

      <section className="border-y border-border bg-secondary"><div className="mx-auto max-w-6xl px-4 py-16 sm:px-6"><div className="max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-widest text-primary">Built for the administration</p><h2 className="mt-2 font-serif text-2xl font-bold sm:text-3xl">A professional desk for every office</h2></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map(({ title, copy, icon: Icon }) => <article key={title} className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-primary"><Icon className="h-5 w-5" /></span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{copy}</p></div></article>)}</div></div></section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6"><div className="rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12"><h2 className="mx-auto max-w-xl font-serif text-2xl font-bold sm:text-3xl">Ready to report an issue?</h2><p className="mx-auto mt-3 max-w-md text-sm opacity-85">Sign in with your staff account to submit a request and follow it through to completion.</p><a href="#top" className="mt-6 inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition hover:-translate-y-0.5 hover:bg-accent/90">Go to sign in <ArrowRight className="ml-2 h-4 w-4" /></a></div></section>
      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-[10px] text-muted-foreground sm:flex-row sm:px-6 sm:text-left"><p>Bole Sub City Administration · Information Technology Directorate</p><p>Internal use only — authorized staff accounts required</p></div></footer>
    </main>
  )
}
