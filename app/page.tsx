import Header from './components/Header';
import Memo from './components/Memo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full lg:w-[567px] min-h-screen bg-slate-50">
        <Header />
        <Memo />
      </div>
    </main>
  );
}
