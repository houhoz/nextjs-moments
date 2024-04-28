import { Avatar } from '@nextui-org/react';
import { fetchMemos } from '@/app/lib/data';

export default async function MemoList() {
  const memos = await fetchMemos();

  return (
    <section>
      {memos.map((item) => (
        <div key={item.id} className="flex py-4">
          <Avatar
            radius="sm"
            size="md"
            src="https://moments.leoho.dev/upload/sCKrwuPGBCNfvYeHmBxqFo.png"
          />
          <div className="ml-2">
            <span className="text-[#576b95] text-sm">leohoo</span>
            <p className="text-black text-base">{item.content}</p>
            <span className="text-[#9DA4B0] text-xs">两天前</span>
          </div>
        </div>
      ))}
    </section>
  );
}
