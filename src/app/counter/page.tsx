import Counter from "./counter";

export const metadata = {
    title: 'Counter',
    description: 'A simple counter app',
  };

export default function CounterPage() {
  return (
    <div>
      <Counter />
    </div>
  );
}