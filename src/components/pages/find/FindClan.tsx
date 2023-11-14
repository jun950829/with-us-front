'use client';

import PageTitle from '@atom/PageTitle';
import ClanList from '@components/list/ClanList';
import { Flex } from '@atom/Flex';

export default function FindClan() {
  return (
    <Flex.Main direction="column" margin="20px 0" aria-label="Clan 찾기 페이지">
      <PageTitle title="CLAN 찾기" />
      <ClanList></ClanList>
    </Flex.Main>
  );
}
