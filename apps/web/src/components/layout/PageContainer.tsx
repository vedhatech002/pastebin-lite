import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
};

export default function PageContainer({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-3xl px-4 py-8">{children}</div>
    </div>
  );
}
