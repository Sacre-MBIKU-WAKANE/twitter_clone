type Users = {
  IDuser: number
  username: string
  name: string
  prenom: string
  email: string
  pic: string
  IDrole: number
}

// objet user
export const users: Users[] = [
  {
    IDuser: 1,
    username: '@Pkudiatu',
    name: 'Kudiatu',
    prenom: 'Patrick',
    email: 'kudiatu@gmail.com',
    pic: 'resources/imgs/profil.svg',
    IDrole: 2,
  },

  {
    IDuser: 2,
    username: 'marie456',
    name: 'Marie',
    prenom: 'NomMarie',
    email: 'marie@example.com',
    pic: 'resources/imgs/profil.svg',
    IDrole: 102,
  },
  {
    IDuser: 3,
    username: 'john789',
    name: 'John',
    prenom: 'NomJohn',
    email: 'john@example.com',
    pic: 'resources/imgs/bloc.svg',
    IDrole: 103,
  },
  {
    IDuser: 4,
    username: 'anna012',
    name: 'Anna',
    prenom: 'NomAnna',
    email: 'anna@example.com',
    pic: 'resources/imgs/profil.svg',
    IDrole: 104,
  },
  {
    IDuser: 5,
    username: 'cnn456',
    name: 'cnn',
    prenom: 'NomLuc',
    email: 'luc@example.com',
    pic: 'resources/imgs/Tweet-Profile-Photo.svg',
    IDrole: 105,
  },
  {
    IDuser: 6,
    username: 'laura789',
    name: 'Laura',
    prenom: 'NomLaura',
    email: 'laura@example.com',
    pic: 'resources/imgs/profil.svg',
    IDrole: 106,
  },
  {
    IDuser: 7,
    username: 'pierre234',
    name: 'Pierre',
    prenom: 'NomPierre',
    email: 'pierre@example.com',
    pic: 'resources/imgs/profil.svg',
    IDrole: 107,
  },
  {
    IDuser: 8,
    username: 'emma567',
    name: 'Emma',
    prenom: 'NomEmma',
    email: 'emma@example.com',
    pic: 'resources/imgs/profil.svg',
    IDrole: 108,
  },
  {
    IDuser: 9,
    username: 'paul890',
    name: 'Paul',
    prenom: 'NomPaul',
    email: 'paul@example.com',
    pic: 'resources/imgs/profil.svg',
    IDrole: 109,
  },
  {
    IDuser: 10,
    username: 'lea123',
    name: 'Léa',
    prenom: 'NomLéa',
    email: 'lea@example.com',
    pic: 'resources/imgs/profil.svg',
    IDrole: 110,
  },
]

// tweet
// tweets
type Tweets = {
  IDtweet: number
  IDuser: number
  contenu: string
  pic_tweet: string
  date_pub: string
}

export const tweets: Tweets[] = [
  {
    IDtweet: 1,
    IDuser: 1,
    contenu:
      'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    pic_tweet: '/resources/imgs/Img.svg',
    date_pub: '2025-03-07T19:26:00Z',
  },
  {
    IDtweet: 2,
    IDuser: 2,
    contenu:
      'Generate Lorem Ipsum placeholder text in any number of characters, words, sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today.',
    pic_tweet: '/resources/imgs/Img.svg',
    date_pub: '2025-03-07T18:00:00Z',
  },
  {
    IDtweet: 2,
    IDuser: 2,
    contenu:
      'Generate Lorem Ipsum placeholder text in any number of characters, words, sentences or paragraphs. Learn about the origins of the passage and its history, from the Roman era to today.',
    pic_tweet: '',
    date_pub: '2025-03-07T18:00:00Z',
  },
  {
    IDtweet: 3,
    IDuser: 3,
    contenu:
      'Learn about the history, usage and variations of Lorem Ipsum, the industrys standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a dictionary of over 200 Latin words and a random sentence structure..',
    pic_tweet: '/resources/imgs/Img.svg',
    date_pub: '2025-03-07T17:30:00Z',
  },
]

type Likes = {
  IDlike: number
  IDuser: number
  IDtweet: number
}

export const likes: Likes[] = [
  {
    IDlike: 1,
    IDuser: 1,
    IDtweet: 1,
  },
  {
    IDlike: 2,
    IDuser: 2,
    IDtweet: 1,
  },
  {
    IDlike: 3,
    IDuser: 3,
    IDtweet: 2,
  },
  {
    IDlike: 4,
    IDuser: 1,
    IDtweet: 3,
  },
  {
    IDlike: 5,
    IDuser: 2,
    IDtweet: 2,
  },
  {
    IDlike: 6,
    IDuser: 3,
    IDtweet: 3,
  },
  {
    IDlike: 7,
    IDuser: 1,
    IDtweet: 4,
  },
  {
    IDlike: 8,
    IDuser: 2,
    IDtweet: 4,
  },
  {
    IDlike: 9,
    IDuser: 3,
    IDtweet: 5,
  },
  {
    IDlike: 10,
    IDuser: 1,
    IDtweet: 5,
  },
]
