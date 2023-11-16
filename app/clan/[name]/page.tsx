import ClanLayer from '@/src/components/pages/clan/ClanLayer';

async function Test(name: string) {
  const result = fetch(
    process.env.NEXT_PUBLIC_API_URL + `/clans?filters[name][$contains]=${name}`
  ).then((res) => res.json());

  return result;
}

export default async function ClanMain({ params }: { params: { name: string } }) {
  const { name } = params;
  const result = await Test(name);

  return <ClanLayer clanData={result}></ClanLayer>;
}
