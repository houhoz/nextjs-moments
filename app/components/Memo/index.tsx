import MemoForm from './form';
import MemoList from './list';

export default function Comment() {
  return (
    <div className="mt-10 p-4">
      <MemoForm />
      <MemoList />
    </div>
  );
}
