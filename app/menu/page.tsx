import type { Metadata } from 'next'
import MenuPage from '@/components/menu/MenuPage'
import '@/styles/menu.css'

export const metadata: Metadata = {
  title: 'المينيو | ABHA SAUDI LOUNGE',
  description: 'شوف اللي على مزاجك — قائمة تجريبية لأجواء أبها سعودي لاونج.',
}

export default function Page() {
  return <MenuPage />
}
