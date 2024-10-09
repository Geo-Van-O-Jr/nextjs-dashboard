import { ReactNode } from 'react'
import AcmeLogo from '@/app/ui/acme-logo'
import UserNav from '@/app/ui/user-nav'
import Search from '@/app/ui/search'
import Sidenav from '@/app/ui/dashboard/sidenav'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col">
      <div className="flex h-14 w-full items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm">
        <AcmeLogo />
        <div className="flex gap-2">
          <Search />
          <UserNav />
        </div>
      </div>
      <div className="flex h-full w-full grow">
        <Sidenav />
        <main className="relative flex w-full flex-1 overflow-auto bg-slate-100 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

