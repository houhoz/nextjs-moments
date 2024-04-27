'use client';

import { Textarea, Button } from '@nextui-org/react';
import { createMemo } from '@/app/lib/action';

export default function CommentForm() {
  const onSubmit = async (formData: FormData) => {
    const rawFormData = {
      content: formData.get('content') || '',
    };
    await createMemo(rawFormData);
  };

  return (
    <form action={onSubmit}>
      <Textarea
        name="content"
        placeholder="今天说点什么呢"
        className="w-full"
      />
      <div className="flex items-center mt-4">
        <Button
          type="submit"
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          提交
        </Button>
      </div>
    </form>
  );
}
