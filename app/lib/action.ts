'use server';

import prisma from './prisma';

type ICreateMemo = {
  content: string;
};

export async function createMemo({ content }: ICreateMemo) {
  try {
    const memo = await prisma.memo.create({
      data: {
        content,
      },
    });
    return memo;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to create memo.');
  }
}
