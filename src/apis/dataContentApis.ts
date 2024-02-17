interface DATACONTENT {
  title: string;
  content: string;
}

interface DATABTN {
  android: string;
  ios: string;
}
export const dataHeaderContent: DATACONTENT = {
  title: "We make your music sound extraordinary.",
  content:
    "A system audio equalizer specifically designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!",
};

export const cardContent: DATACONTENT = {
  title: "",
  content: "",
};

export const btnContent: DATABTN = {
  android: "Android Download",
  ios: "IOS Download",
};

interface DATASUBCARD {
  title: string;
  content: string;
  price: string;
  unit: string;
}
export const dataSubCard: DATASUBCARD = {
  title: "Premium EQ",
  content:
    "Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!",
  price: "42$",
  unit: "month",
};
