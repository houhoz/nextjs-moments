import prisma from './prisma';

export async function fetchMemos() {
  try {
    const memos = await prisma.memo.findMany();
    return memos;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all memos.');
  }
}
