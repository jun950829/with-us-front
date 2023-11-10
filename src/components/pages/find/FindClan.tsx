'use client';

import PageTitle from '@atom/PageTitle';
import ClanList from '@components/list/ClanList';
import { Flex } from '@atom/Flex';

export default function FindClan() {
  return (
    <Flex.Main flexDirection="column">
      <PageTitle title="CLAN 찾기" />
      <ClanList></ClanList>
    </Flex.Main>
  );
}
