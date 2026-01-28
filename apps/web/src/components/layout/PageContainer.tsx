import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
};

export default function PageContainer({ children, title }: Props) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-3xl px-4 py-8">
        {title && (
          <h1 className="mb-6 text-2xl font-semibold text-gray-800">{title}</h1>
        )}
        {children}
      </div>
    </div>
  );
}
