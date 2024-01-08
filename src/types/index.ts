// * Atom
export type ListTitle = {
  title: string;
};

export type PageTitle = {
  title: string;
  margin?: string;
};

//* Components - Card
export type ClanCard = {
  item: {
    id: number;
    name: string;
    desc: string;
    image: string;
    master: number;
    writer: number;
    total: number;
    recruitMember: number;
    recruiting: boolean;
    createdAt: string;
  };
};
