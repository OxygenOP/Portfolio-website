export type project = {
  name: string;
  url: string;
  image: string;
  alt?: string;
  disabled: boolean;
  scale?: boolean;
};

export const projects: project[] = [
  {
    name: "MY12 Creations",
    url: "https://www.my12creations.com/",
    image: "/my12-full.png",
    alt: "my12 creations image",
    disabled: false,
    scale: false,
  },
  {
    name: "Ido-Dawah",
    url: "https://qr.idodawah.com/",
    image: "/qr-ido.png",
    alt: "qr idodawah image",
    disabled: true,
    scale: true,
  },
  {
    name: "Dawah Academy",
    url: "https://dawah-academy.idodawah.com/",
    image: "/dawah.png",
    alt: "Dawah Academy Website Image",
    disabled: true,
  },
  {
    name: "Alhayat medical centre",
    url: "https://alhaytatmc.com/",
    image: "/ahmc.png",
    alt: "alhayatmc Website Image",
    disabled: false,
  },
];
