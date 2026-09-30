export type Language = 'ar' | 'en'
export type LocalizedText = { ar: string; en: string }
export type MenuCategory = { id: string; label: LocalizedText }

export type MenuItem = {
  id: string
  name: LocalizedText
  description: LocalizedText
  price: LocalizedText
  category: string
  image: string
}

export const menuCategories: MenuCategory[] = [
  { id: 'all', label: { ar: 'الكل', en: 'All' } },
  { id: 'coffee', label: { ar: 'قهوة', en: 'Coffee' } },
  { id: 'drinks', label: { ar: 'مشروبات', en: 'Drinks' } },
  { id: 'tea', label: { ar: 'شاي', en: 'Tea' } },
  { id: 'desserts', label: { ar: 'حلويات', en: 'Desserts' } },
  { id: 'food', label: { ar: 'مأكولات', en: 'Food' } },
]

// Demo content only. Replace this object when the confirmed ABHA menu is available.
export const menuItems: MenuItem[] = [
  { id: 'arabic-coffee', name: { ar: 'قهوة عربية', en: 'Arabic Coffee' }, description: { ar: 'هيل وزعفران، بطابع دافي', en: 'Cardamom and saffron with a warm finish' }, price: { ar: '18 ر.س', en: 'SAR 18' }, category: 'coffee', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85' },
  { id: 'saudi-coffee', name: { ar: 'قهوة سعودية', en: 'Saudi Coffee' }, description: { ar: 'تحميصة خفيفة ونكهة غنية', en: 'A light roast with a rich, rounded flavour' }, price: { ar: '22 ر.س', en: 'SAR 22' }, category: 'coffee', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=85' },
  { id: 'date-latte', name: { ar: 'لاتيه التمر', en: 'Date Latte' }, description: { ar: 'حلاوة التمر مع قهوة ناعمة', en: 'Silky coffee softened with the sweetness of dates' }, price: { ar: '24 ر.س', en: 'SAR 24' }, category: 'drinks', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85' },
  { id: 'mint-tea', name: { ar: 'شاي بالنعناع', en: 'Fresh Mint Tea' }, description: { ar: 'جلسة هادية تبدأ من هنا', en: 'A quiet, refreshing start to the gathering' }, price: { ar: '16 ر.س', en: 'SAR 16' }, category: 'tea', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=85' },
  { id: 'kunafa', name: { ar: 'كنافة بالقشطة', en: 'Cream Kunafa' }, description: { ar: 'لقمة دافية ولمسة حلوة', en: 'A warm bite with a soft, sweet finish' }, price: { ar: '28 ر.س', en: 'SAR 28' }, category: 'desserts', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1000&q=85' },
  { id: 'date-bowl', name: { ar: 'صحن تمر', en: 'Date Plate' }, description: { ar: 'اختيار بسيط يليق بالقهوة', en: 'A simple pairing made for coffee' }, price: { ar: '20 ر.س', en: 'SAR 20' }, category: 'desserts', image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=1000&q=85' },
  { id: 'lounge-breakfast', name: { ar: 'فطور اللاونج', en: 'Lounge Breakfast' }, description: { ar: 'اختيارات خفيفة للمزاج الهادي', en: 'Light, easy plates for a slow morning' }, price: { ar: '42 ر.س', en: 'SAR 42' }, category: 'food', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=85' },
  { id: 'citrus-spark', name: { ar: 'موهيتو حمضيات', en: 'Citrus Mojito' }, description: { ar: 'منعش، خفيف، ومليان حياة', en: 'Bright, light, and full of life' }, price: { ar: '23 ر.س', en: 'SAR 23' }, category: 'drinks', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85' },
]

export const menuHeroImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=85'
export const menuNotice: LocalizedText = { ar: 'قائمة تجريبية — الصور والأصناف مؤقتة وليست قائمة مؤكدة من أبها سعودي لاونج.', en: 'Demo menu — images and items are placeholders, not a confirmed ABHA SAUDI LOUNGE menu.' }

export function getMenuItems(category: string) {
  return category === 'all' ? menuItems : menuItems.filter((item) => item.category === category)
}
