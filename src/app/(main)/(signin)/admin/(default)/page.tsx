import AdminDashboard from '@/app/(main)/(signin)/admin/(default)/AdminDashboard';
import '@/styles/global.css';

function Page() {
  return (
    <div className='rounded-tl-3xl h-[89.30vh] overflow-y-auto  p-6 shadow-inner home no-scrollbar scroll-smooth duration-200 ease-in'>
        <AdminDashboard />
    </div>
  );
}

export default Page;
