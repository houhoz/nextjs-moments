import MemoForm from './form';
import MemoList from './list';

export default function Comment() {
  return (
    <div className="mt-20">
      <MemoForm />
      <MemoList />
    </div>
  );
}
