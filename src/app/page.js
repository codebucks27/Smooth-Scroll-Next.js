import ImageList from "@/components/ImageList";

export default function Home() {
  return (
    <main className="p-16 flex flex-col w-full items-center justify-center">
      <h1 className="font-medium text-4xl underline underline-offset-8">
        Smooth Scolling Using Lenis
      </h1>
      <ImageList />
    </main>
  );
}
