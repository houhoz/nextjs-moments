import { Avatar } from '@nextui-org/react';

export default function Header() {
  return (
    <header className="relative">
      <picture>
        <img
          src="https://moments.leoho.dev/cover.webp"
          alt="cover"
          className="w-full"
        />
      </picture>
      <div className="absolute right-2 bottom-[-40px]">
        <div className="flex justify-end items-center gap-4">
          <span className="text-white text-xl font-bold">Leohoo</span>
          <Avatar
            radius="sm"
            size="lg"
            src="https://moments.leoho.dev/upload/sCKrwuPGBCNfvYeHmBxqFo.png"
          />
        </div>
        <p className="w-full text-xs text-right mt-2 text-gray-600">
          时间不在于你拥有多少，而在于你怎样使用。
        </p>
      </div>
    </header>
  );
}
