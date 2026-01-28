type ErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
  if (!message) return null;

  return (
    <div className="rounded-md border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700">
      {message}
    </div>
  );
}
