'use client';

import PageTitle from '@atom/PageTitle';
import ClanList from '@components/list/ClanList';
import { Flex } from '@atom/Flex';

const RecruitClan = () => {
  return (
    <Flex.Main direction="column" $margin="20px 0" aria-label="Clan 모집 페이지">
      <PageTitle title="CLAN 모집" />
      <ClanList></ClanList>
    </Flex.Main>
  );
};

export default RecruitClan;
