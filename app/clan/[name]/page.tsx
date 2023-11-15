import ClanLayer from '@/src/components/pages/clan/ClanLayer';

export default function ClanMain({ params }: { params: { name: string } }) {
  const { name } = params;
  console.log(name);

  fetch('');

  return <ClanLayer clanData={undefined}></ClanLayer>;
}
