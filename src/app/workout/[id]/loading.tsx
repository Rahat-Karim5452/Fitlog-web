const Loading = () => {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-lime-400  border-t-transparent" />

        <p className="text-sm text-zinc-400">Loading workout...</p>
      </div>
    </main>
  );
};

export default Loading;
