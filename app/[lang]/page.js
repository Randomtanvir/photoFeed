import { getDictionary } from "./disctionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="text-center bg-gray-300 text-zinc-700 p-4 text-xl">
      {dictionary?.save}
    </div>
  );
}
