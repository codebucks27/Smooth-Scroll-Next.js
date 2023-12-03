import ImageList from "@/components/ImageList";

export default function Home() {
  return (
    <main className="p-16 xl:p-32 flex flex-col w-full items-center justify-center">
      <h1 className="font-medium text-4xl border border-solid border-white p-4">
        Smooth Scolling Using Lenis
      </h1>
      <ImageList />
    </main>
  );
}
