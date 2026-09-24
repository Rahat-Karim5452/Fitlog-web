const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-lime-400 border-t-transparent" />

        <p className="text-zinc-400">Loading workouts…</p>
      </div>
    </main>
  );
};

export default Loading;
