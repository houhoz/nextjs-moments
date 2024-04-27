import { fetchMemos } from '@/app/lib/data';

export default async function MemoList() {
  const memos = await fetchMemos();

  return (
    <section>
      {memos.map((item) => (
        <p key={item.id} className="text-black">
          {item.content}
        </p>
      ))}
    </section>
  );
}
