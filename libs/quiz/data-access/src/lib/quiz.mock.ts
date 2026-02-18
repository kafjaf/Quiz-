// import { Question } from './quiz.model';

// export const MOCK_QUESTIONS: Question[] = [
//   {
//     id: 1,
//     category: 'Manga',
//     label: 'Qui est le capitaine de l’équipage du Chapeau de Paille ?',
//     options: ['Zoro', 'Luffy', 'Sanji', 'Usopp'],
//     correctAnswer: 1
//   },
//   {
//     id: 2,
//     category: 'Culture Congo',
//     label: 'Quelle est la capitale de la République du Congo ?',
//     options: ['Kinshasa', 'Pointe-Noire', 'Brazzaville', 'Dolisie'],
//     correctAnswer: 2
//   },
//   {
//     id: 3,
//     category: 'Manga',
//     label: 'Dans Naruto, qui est le mentor de l’Équipe 7 ?',
//     options: ['Kakashi', 'Jiraiya', 'Orochimaru', 'Guy'],
//     correctAnswer: 0
//   }
// ];
// import { Question } from './quiz.model';

// export const MOCK_QUESTIONS: Question[] = [
//   {
//     id: 1,
//     category: 'Manga',
//     label: 'Qui est le capitaine de l’équipage du Chapeau de Paille ?',
//     options: ['Zoro', 'Luffy', 'Sanji', 'Usopp'],
//     correctAnswer: 1
//   },
//   {
//     id: 2,
//     category: 'Manga',
//     label: 'Quel est le rêve de Monkey D. Luffy ?',
//     options: ['Devenir amiral', 'Trouver le One Piece', 'Être le plus fort', 'Sauver son village'],
//     correctAnswer: 1
//   },
//   {
//     id: 3,
//     category: 'Manga',
//     label: 'Dans Naruto, qui est le mentor de l’équipe 7 ?',
//     options: ['Kakashi', 'Jiraiya', 'Orochimaru', 'Guy'],
//     correctAnswer: 0
//   },
//   {
//     id: 4,
//     category: 'Manga',
//     label: 'Quel est le démon scellé en Naruto ?',
//     options: ['Ichibi', 'Kyubi', 'Hachibi', 'Shukaku'],
//     correctAnswer: 1
//   },
//   {
//     id: 5,
//     category: 'Manga',
//     label: 'Comment s’appelle le sabre principal de Zoro ?',
//     options: ['Shusui', 'Sandai Kitetsu', 'Wado Ichimonji', 'Enma'],
//     correctAnswer: 2
//   },
//   {
//     id: 6,
//     category: 'Manga',
//     label: 'Quel est le pouvoir principal de Goku ?',
//     options: ['Chakra', 'Nen', 'Ki', 'Magie'],
//     correctAnswer: 2
//   },
//   {
//     id: 7,
//     category: 'Manga',
//     label: 'Dans Dragon Ball Z, qui a vaincu Freezer ?',
//     options: ['Vegeta', 'Piccolo', 'Goku', 'Gohan'],
//     correctAnswer: 2
//   },
//   {
//     id: 8,
//     category: 'Manga',
//     label: 'Quel est le nom du carnet dans Death Note ?',
//     options: ['Black Book', 'Death Book', 'Note of Death', 'Death Note'],
//     correctAnswer: 3
//   },
//   {
//     id: 9,
//     category: 'Manga',
//     label: 'Qui est le détective rival de Light Yagami ?',
//     options: ['Near', 'Mello', 'L', 'Matt'],
//     correctAnswer: 2
//   },
//   {
//     id: 10,
//     category: 'Manga',
//     label: 'Quel est le manga centré sur des chasseurs de démons ?',
//     options: ['Bleach', 'Jujutsu Kaisen', 'Demon Slayer', 'Blue Exorcist'],
//     correctAnswer: 2
//   },
//   {
//     id: 11,
//     category: 'Manga',
//     label: 'Comment s’appelle le héros de Demon Slayer ?',
//     options: ['Zenitsu', 'Inosuke', 'Tanjiro', 'Tomioka'],
//     correctAnswer: 2
//   },
//   {
//     id: 12,
//     category: 'Manga',
//     label: 'Quel est le pouvoir de Saitama ?',
//     options: ['Téléportation', 'Force illimitée', 'Magie', 'Contrôle du temps'],
//     correctAnswer: 1
//   },
//   {
//     id: 13,
//     category: 'Manga',
//     label: 'Dans Attack on Titan, que combat l’humanité ?',
//     options: ['Des démons', 'Des dieux', 'Des titans', 'Des aliens'],
//     correctAnswer: 2
//   },
//   {
//     id: 14,
//     category: 'Manga',
//     label: 'Qui est le protagoniste principal de Attack on Titan ?',
//     options: ['Levi', 'Mikasa', 'Eren', 'Armin'],
//     correctAnswer: 2
//   },
//   {
//     id: 15,
//     category: 'Manga',
//     label: 'Quel manga parle d’exorcistes et de fléaux ?',
//     options: ['Bleach', 'Jujutsu Kaisen', 'Naruto', 'Tokyo Ghoul'],
//     correctAnswer: 1
//   },
//   {
//     id: 16,
//     category: 'Manga',
//     label: 'Quel est le pouvoir de Ichigo Kurosaki ?',
//     options: ['Shinigami', 'Démon', 'Mage', 'Alchimiste'],
//     correctAnswer: 0
//   },
//   {
//     id: 17,
//     category: 'Manga',
//     label: 'Dans Tokyo Ghoul, que devient Kaneki ?',
//     options: ['Humain', 'Démon', 'Ghoul', 'Exorciste'],
//     correctAnswer: 2
//   },
//   {
//     id: 18,
//     category: 'Manga',
//     label: 'Quel manga met en scène des alchimistes ?',
//     options: ['Bleach', 'Naruto', 'Fullmetal Alchemist', 'Hunter x Hunter'],
//     correctAnswer: 2
//   },
//   {
//     id: 19,
//     category: 'Manga',
//     label: 'Quel est le prénom du héros de Fullmetal Alchemist ?',
//     options: ['Roy', 'Edward', 'Alphonse', 'Scar'],
//     correctAnswer: 1
//   },
//   {
//     id: 20,
//     category: 'Manga',
//     label: 'Quel est le système de pouvoir dans Hunter x Hunter ?',
//     options: ['Ki', 'Chakra', 'Nen', 'Mana'],
//     correctAnswer: 2
//   },
//   {
//     id: 21,
//     category: 'Manga',
//     label: 'Qui est le meilleur ami de Gon ?',
//     options: ['Kurapika', 'Leorio', 'Killua', 'Hisoka'],
//     correctAnswer: 2
//   },
//   {
//     id: 22,
//     category: 'Manga',
//     label: 'Quel manga se déroule dans un monde de pirates ?',
//     options: ['Fairy Tail', 'One Piece', 'Black Clover', 'Bleach'],
//     correctAnswer: 1
//   },
//   {
//     id: 23,
//     category: 'Manga',
//     label: 'Quel est le rêve de Naruto ?',
//     options: ['Devenir Hokage', 'Être le plus riche', 'Venger son clan', 'Voyager'],
//     correctAnswer: 0
//   },
//   {
//     id: 24,
//     category: 'Manga',
//     label: 'Dans Fairy Tail, quelle est la guilde principale ?',
//     options: ['Blue Pegasus', 'Sabertooth', 'Fairy Tail', 'Oracion Seis'],
//     correctAnswer: 2
//   },
//   {
//     id: 25,
//     category: 'Manga',
//     label: 'Quel manga met en scène des super-héros ?',
//     options: ['One Punch Man', 'Bleach', 'Naruto', 'Dragon Ball'],
//     correctAnswer: 0
//   },
//   {
//     id: 26,
//     category: 'Manga',
//     label: 'Qui est le rival principal de Goku ?',
//     options: ['Piccolo', 'Freezer', 'Vegeta', 'Cell'],
//     correctAnswer: 2
//   },
//   {
//     id: 27,
//     category: 'Manga',
//     label: 'Dans Bleach, que combat Ichigo ?',
//     options: ['Titans', 'Hollows', 'Démons', 'Fléaux'],
//     correctAnswer: 1
//   },
//   {
//     id: 28,
//     category: 'Manga',
//     label: 'Quel manga parle de volleyball ?',
//     options: ['Kuroko no Basket', 'Haikyuu', 'Free', 'Slam Dunk'],
//     correctAnswer: 1
//   },
//   {
//     id: 29,
//     category: 'Manga',
//     label: 'Quel manga est centré sur le basketball ?',
//     options: ['Haikyuu', 'Slam Dunk', 'Blue Lock', 'Free'],
//     correctAnswer: 1
//   },
//   {
//     id: 30,
//     category: 'Manga',
//     label: 'Quel manga parle de football ?',
//     options: ['Captain Tsubasa', 'Haikyuu', 'Kuroko', 'Ace of Diamond'],
//     correctAnswer: 0
//   },
//   {
//     id: 31,
//     category: 'Manga',
//     label: 'Dans Blue Lock, quel sport est mis en avant ?',
//     options: ['Basketball', 'Football', 'Volleyball', 'Baseball'],
//     correctAnswer: 1
//   },
//   {
//     id: 32,
//     category: 'Manga',
//     label: 'Quel manga parle de pirates de l’espace ?',
//     options: ['Cowboy Bebop', 'One Piece', 'Bleach', 'Trigun'],
//     correctAnswer: 0
//   },
//   {
//     id: 33,
//     category: 'Manga',
//     label: 'Quel manga est connu pour ses combats très violents ?',
//     options: ['Berserk', 'Pokemon', 'Doraemon', 'Sailor Moon'],
//     correctAnswer: 0
//   },
//   {
//     id: 34,
//     category: 'Manga',
//     label: 'Qui est le créateur de Dragon Ball ?',
//     options: ['Eiichiro Oda', 'Masashi Kishimoto', 'Akira Toriyama', 'Tite Kubo'],
//     correctAnswer: 2
//   },
//   {
//     id: 35,
//     category: 'Manga',
//     label: 'Quel manga met en scène des ninjas ?',
//     options: ['Bleach', 'Naruto', 'One Piece', 'Fairy Tail'],
//     correctAnswer: 1
//   },
//   {
//     id: 36,
//     category: 'Manga',
//     label: 'Dans Naruto, quel clan possède le Sharingan ?',
//     options: ['Hyuga', 'Uzumaki', 'Uchiha', 'Nara'],
//     correctAnswer: 2
//   },
//   {
//     id: 37,
//     category: 'Manga',
//     label: 'Quel est le pouvoir de Luffy ?',
//     options: ['Corps en caoutchouc', 'Invisibilité', 'Feu', 'Glace'],
//     correctAnswer: 0
//   },
//   {
//     id: 38,
//     category: 'Manga',
//     label: 'Quel manga parle de chasseurs de primes dans l’espace ?',
//     options: ['Trigun', 'Cowboy Bebop', 'Bleach', 'Akira'],
//     correctAnswer: 1
//   },
//   {
//     id: 39,
//     category: 'Manga',
//     label: 'Dans Jujutsu Kaisen, que combattent les exorcistes ?',
//     options: ['Démons', 'Fléaux', 'Titans', 'Esprits'],
//     correctAnswer: 1
//   },
//   {
//     id: 40,
//     category: 'Manga',
//     label: 'Quel manga se déroule dans un monde de sorciers ?',
//     options: ['Black Clover', 'Bleach', 'Naruto', 'Tokyo Ghoul'],
//     correctAnswer: 0
//   },
//   {
//     id: 41,
//     category: 'Manga',
//     label: 'Quel est le rêve d’Asta dans Black Clover ?',
//     options: ['Devenir roi des pirates', 'Devenir empereur', 'Devenir roi mage', 'Être invincible'],
//     correctAnswer: 2
//   },
//   {
//     id: 42,
//     category: 'Manga',
//     label: 'Quel manga est centré sur les cartes magiques ?',
//     options: ['Yu-Gi-Oh!', 'Pokemon', 'Digimon', 'Beyblade'],
//     correctAnswer: 0
//   },
//   {
//     id: 43,
//     category: 'Manga',
//     label: 'Dans Pokemon, qui est le héros principal ?',
//     options: ['Red', 'Ash', 'Brock', 'Gary'],
//     correctAnswer: 1
//   },
//   {
//     id: 44,
//     category: 'Manga',
//     label: 'Quel manga parle de combats avec des toupies ?',
//     options: ['Digimon', 'Beyblade', 'Yu-Gi-Oh!', 'Pokemon'],
//     correctAnswer: 1
//   },
//   {
//     id: 45,
//     category: 'Manga',
//     label: 'Quel manga met en scène des monstres numériques ?',
//     options: ['Pokemon', 'Digimon', 'Yu-Gi-Oh!', 'Bakugan'],
//     correctAnswer: 1
//   },
//   {
//     id: 46,
//     category: 'Manga',
//     label: 'Quel manga se déroule dans un monde post-apocalyptique ?',
//     options: ['Attack on Titan', 'One Piece', 'Fairy Tail', 'Naruto'],
//     correctAnswer: 0
//   },
//   {
//     id: 47,
//     category: 'Manga',
//     label: 'Quel manga est connu pour ses combats stratégiques ?',
//     options: ['Naruto', 'Hunter x Hunter', 'Bleach', 'Dragon Ball'],
//     correctAnswer: 1
//   },
//   {
//     id: 48,
//     category: 'Manga',
//     label: 'Quel manga parle de pirates cherchant un trésor légendaire ?',
//     options: ['One Piece', 'Fairy Tail', 'Black Clover', 'Bleach'],
//     correctAnswer: 0
//   },
//   {
//     id: 49,
//     category: 'Manga',
//     label: 'Quel manga mélange horreur et action ?',
//     options: ['Tokyo Ghoul', 'Haikyuu', 'Slam Dunk', 'Blue Lock'],
//     correctAnswer: 0
//   },
//   {
//     id: 50,
//     category: 'Manga',
//     label: 'Quel manga est centré sur des héros professionnels ?',
//     options: ['One Punch Man', 'My Hero Academia', 'Naruto', 'Bleach'],
//     correctAnswer: 1
//   }
// ];

import { Question } from '@quiz-lock/quiz-data-access';

export const MOCK_QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'Manga',
    label: 'Quel est le vrai nom de Gold Roger ?',
    options: ['Gol D. Roger', 'Gold D. Roger', 'Gol Roger', 'Roger D. Gold'],
    correctAnswer: 0
  },
  {
    id: 2,
    category: 'Manga',
    label: 'Quel est le premier démon supérieur rencontré par Tanjiro ?',
    options: ['Akaza', 'Rui', 'Daki', 'Gyutaro'],
    correctAnswer: 1
  },
  {
    id: 3,
    category: 'Manga',
    label: 'Quel Hokage a créé la technique de l’Édo Tensei ?',
    options: ['Hashirama', 'Tobirama', 'Orochimaru', 'Minato'],
    correctAnswer: 1
  },
  {
    id: 4,
    category: 'Manga',
    label: 'Quel est le Nen de spécialisation de Kurapika ?',
    options: ['Ren', 'Zetsu', 'Spécialisation', 'Conjuration'],
    correctAnswer: 2
  },
  {
    id: 5,
    category: 'Manga',
    label: 'Quel est le vrai objectif de Griffith ?',
    options: ['Devenir roi', 'Être libre', 'Créer son royaume', 'Posséder un rêve'],
    correctAnswer: 3
  },
  {
    id: 6,
    category: 'Manga',
    label: 'Quel est le nom du Bankai de Byakuya Kuchiki ?',
    options: ['Senbonzakura', 'Senbonzakura Kageyoshi', 'Shukei Hakuteiken', 'Gokei'],
    correctAnswer: 1
  },
  {
    id: 7,
    category: 'Manga',
    label: 'Quelle est la véritable identité du Titan Colossal ?',
    options: ['Reiner', 'Bertholdt', 'Zeke', 'Porco'],
    correctAnswer: 1
  },
  {
    id: 8,
    category: 'Manga',
    label: 'Quel est le péché capital de Ban ?',
    options: ['Colère', 'Avarice', 'Orgueil', 'Luxure'],
    correctAnswer: 1
  },
  {
    id: 9,
    category: 'Manga',
    label: 'Quel est le pouvoir principal de Makima ?',
    options: ['Contrôle', 'Régénération', 'Téléportation', 'Manipulation du temps'],
    correctAnswer: 0
  },
  {
    id: 10,
    category: 'Manga',
    label: 'Quel est le premier Stand de Jotaro Kujo ?',
    options: ['Star Platinum', 'The World', 'Hermit Purple', 'Silver Chariot'],
    correctAnswer: 0
  },

  {
    id: 11,
    category: 'Manga',
    label: 'Quel est le rôle réel de l’Akatsuki à l’origine ?',
    options: ['Paix mondiale', 'Domination', 'Destruction des villages', 'Vengeance'],
    correctAnswer: 0
  },
  {
    id: 12,
    category: 'Manga',
    label: 'Quel est le nom du royaume d’Edward Elric ?',
    options: ['Amestris', 'Xerxes', 'Creta', 'Drachma'],
    correctAnswer: 0
  },
  {
    id: 13,
    category: 'Manga',
    label: 'Quel personnage possède le Fruit du Démon Yami Yami no Mi ?',
    options: ['Barbe Blanche', 'Barbe Noire', 'Law', 'Kaido'],
    correctAnswer: 1
  },
  {
    id: 14,
    category: 'Manga',
    label: 'Quelle technique permet à Goku d’esquiver sans réfléchir ?',
    options: ['Kaioken', 'Ultra Instinct', 'God Blue', 'Teleportation'],
    correctAnswer: 1
  },
  {
    id: 15,
    category: 'Manga',
    label: 'Quel est le surnom de Levi Ackerman ?',
    options: ['Le soldat parfait', 'Le tueur de titans', 'Le caporal démoniaque', 'L’homme le plus fort'],
    correctAnswer: 3
  },

  {
    id: 16,
    category: 'Manga',
    label: 'Quelle est la faiblesse principale des Homonculus ?',
    options: ['L’eau', 'Le feu', 'Leur pierre philosophale', 'La lumière'],
    correctAnswer: 2
  },
  {
    id: 17,
    category: 'Manga',
    label: 'Quel est le vrai nom de L dans Death Note ?',
    options: ['Lawliet', 'Lind L. Taylor', 'Near', 'Mello'],
    correctAnswer: 0
  },
  {
    id: 18,
    category: 'Manga',
    label: 'Quel est le rang de Gojo Satoru dans le monde des exorcistes ?',
    options: ['Classe 1', 'Classe spéciale', 'Classe suprême', 'Sans rang'],
    correctAnswer: 1
  },
  {
    id: 19,
    category: 'Manga',
    label: 'Quel est le premier adversaire majeur de Eren Jaeger ?',
    options: ['Titan féminin', 'Titan colossal', 'Titan cuirassé', 'Titan souriant'],
    correctAnswer: 3
  },
  {
    id: 20,
    category: 'Manga',
    label: 'Quel est le but final du Projet Tsukuyomi Infini ?',
    options: ['Immortalité', 'Paix illusoire', 'Contrôle mondial', 'Évolution humaine'],
    correctAnswer: 1
  },

  {
    id: 21,
    category: 'Manga',
    label: 'Quel est le type de Nen de Hisoka ?',
    options: ['Renforcement', 'Transformation', 'Manipulation', 'Spécialisation'],
    correctAnswer: 1
  },
  {
    id: 22,
    category: 'Manga',
    label: 'Quelle est la véritable nature de Sukuna ?',
    options: ['Démon', 'Esprit maudit', 'Humain ancien', 'Dieu'],
    correctAnswer: 2
  },
  {
    id: 23,
    category: 'Manga',
    label: 'Quel est le plus ancien sabre de Zoro ?',
    options: ['Enma', 'Shusui', 'Wado Ichimonji', 'Kitetsu'],
    correctAnswer: 2
  },
  {
    id: 24,
    category: 'Manga',
    label: 'Quel manga est inspiré de la mythologie nordique ?',
    options: ['Vinland Saga', 'Berserk', 'Claymore', 'Akira'],
    correctAnswer: 0
  },
  {
    id: 25,
    category: 'Manga',
    label: 'Quel est le rôle réel du Conseil des 46 dans Bleach ?',
    options: ['Justice', 'Contrôle politique', 'Protection des âmes', 'Équilibre'],
    correctAnswer: 1
  },

  {
    id: 26,
    category: 'Manga',
    label: 'Quel est le point commun entre tous les porteurs du D. ?',
    options: ['Pouvoir', 'Destin', 'Rébellion', 'Volonté'],
    correctAnswer: 3
  },
  {
    id: 27,
    category: 'Manga',
    label: 'Quel est le péché capital représenté par Escanor ?',
    options: ['Orgueil', 'Colère', 'Envie', 'Luxure'],
    correctAnswer: 0
  },
  {
    id: 28,
    category: 'Manga',
    label: 'Quel est le véritable thème de Devilman Crybaby ?',
    options: ['La guerre', 'L’amour', 'L’humanité', 'La religion'],
    correctAnswer: 2
  },
  {
    id: 29,
    category: 'Manga',
    label: 'Quel est le manga considéré comme fondateur du seinen moderne ?',
    options: ['Akira', 'Berserk', 'Ghost in the Shell', 'Monster'],
    correctAnswer: 0
  },
  {
    id: 30,
    category: 'Manga',
    label: 'Quel est le pouvoir principal de Johan Liebert ?',
    options: ['Manipulation mentale', 'Hypnose', 'Charisme destructeur', 'Intelligence'],
    correctAnswer: 2
  },
  {
      id: 31,
    category: 'Manga',
    label: 'Qui est le capitaine de l’équipage du Chapeau de Paille ?',
    options: ['Zoro', 'Luffy', 'Sanji', 'Usopp'],
    correctAnswer: 1
  },
  {
    id: 32,
    category: 'Manga',
    label: 'Quel est le rêve de Monkey D. Luffy ?',
    options: ['Devenir amiral', 'Trouver le One Piece', 'Être le plus fort', 'Sauver son village'],
    correctAnswer: 1
  },
  {
    id: 33,
    category: 'Manga',
    label: 'Dans Naruto, qui est le mentor de l’équipe 7 ?',
    options: ['Kakashi', 'Jiraiya', 'Orochimaru', 'Guy'],
    correctAnswer: 0
  },
  {
    id: 34,
    category: 'Manga',
    label: 'Quel est le démon scellé en Naruto ?',
    options: ['Ichibi', 'Kyubi', 'Hachibi', 'Shukaku'],
    correctAnswer: 1
  },
  {
    id: 35,
    category: 'Manga',
    label: 'Comment s’appelle le sabre principal de Zoro ?',
    options: ['Shusui', 'Sandai Kitetsu', 'Wado Ichimonji', 'Enma'],
    correctAnswer: 2
  },
  {
    id: 36,
    category: 'Manga',
    label: 'Quel est le pouvoir principal de Goku ?',
    options: ['Chakra', 'Nen', 'Ki', 'Magie'],
    correctAnswer: 2
  },
  {
    id: 37,
    category: 'Manga',
    label: 'Dans Dragon Ball Z, qui a vaincu Freezer ?',
    options: ['Vegeta', 'Piccolo', 'Goku', 'Gohan'],
    correctAnswer: 2
  },
  {
    id: 38,
    category: 'Manga',
    label: 'Quel est le nom du carnet dans Death Note ?',
    options: ['Black Book', 'Death Book', 'Note of Death', 'Death Note'],
    correctAnswer: 3
  },
  {
    id: 39,
    category: 'Manga',
    label: 'Qui est le détective rival de Light Yagami ?',
    options: ['Near', 'Mello', 'L', 'Matt'],
    correctAnswer: 2
  },
  {
    id: 40,
    category: 'Manga',
    label: 'Quel est le manga centré sur des chasseurs de démons ?',
    options: ['Bleach', 'Jujutsu Kaisen', 'Demon Slayer', 'Blue Exorcist'],
    correctAnswer: 2
  },
  {
    id: 41,
    category: 'Manga',
    label: 'Comment s’appelle le héros de Demon Slayer ?',
    options: ['Zenitsu', 'Inosuke', 'Tanjiro', 'Tomioka'],
    correctAnswer: 2
  },
  {
    id: 42,
    category: 'Manga',
    label: 'Quel est le pouvoir de Saitama ?',
    options: ['Téléportation', 'Force illimitée', 'Magie', 'Contrôle du temps'],
    correctAnswer: 1
  },
  {
    id: 43,
    category: 'Manga',
    label: 'Dans Attack on Titan, que combat l’humanité ?',
    options: ['Des démons', 'Des dieux', 'Des titans', 'Des aliens'],
    correctAnswer: 2
  },
  {
    id: 44,
    category: 'Manga',
    label: 'Qui est le protagoniste principal de Attack on Titan ?',
    options: ['Levi', 'Mikasa', 'Eren', 'Armin'],
    correctAnswer: 2
  },
  {
    id: 45,
    category: 'Manga',
    label: 'Quel manga parle d’exorcistes et de fléaux ?',
    options: ['Bleach', 'Jujutsu Kaisen', 'Naruto', 'Tokyo Ghoul'],
    correctAnswer: 1
  },
  {
    id: 46,
    category: 'Manga',
    label: 'Quel est le pouvoir de Ichigo Kurosaki ?',
    options: ['Shinigami', 'Démon', 'Mage', 'Alchimiste'],
    correctAnswer: 0
  },
  {
    id: 47,
    category: 'Manga',
    label: 'Dans Tokyo Ghoul, que devient Kaneki ?',
    options: ['Humain', 'Démon', 'Ghoul', 'Exorciste'],
    correctAnswer: 2
  },
  {
    id: 48,
    category: 'Manga',
    label: 'Quel manga met en scène des alchimistes ?',
    options: ['Bleach', 'Naruto', 'Fullmetal Alchemist', 'Hunter x Hunter'],
    correctAnswer: 2
  },
  {
    id: 49,
    category: 'Manga',
    label: 'Quel est le prénom du héros de Fullmetal Alchemist ?',
    options: ['Roy', 'Edward', 'Alphonse', 'Scar'],
    correctAnswer: 1
  },
  {
    id: 50,
    category: 'Manga',
    label: 'Quel est le système de pouvoir dans Hunter x Hunter ?',
    options: ['Ki', 'Chakra', 'Nen', 'Mana'],
    correctAnswer: 2
  },
  {
    id: 51,
    category: 'Manga',
    label: 'Qui est le meilleur ami de Gon ?',
    options: ['Kurapika', 'Leorio', 'Killua', 'Hisoka'],
    correctAnswer: 2
  },
  {
    id: 52,
    category: 'Manga',
    label: 'Quel manga se déroule dans un monde de pirates ?',
    options: ['Fairy Tail', 'One Piece', 'Black Clover', 'Bleach'],
    correctAnswer: 1
  },
  {
    id: 53,
    category: 'Manga',
    label: 'Quel est le rêve de Naruto ?',
    options: ['Devenir Hokage', 'Être le plus riche', 'Venger son clan', 'Voyager'],
    correctAnswer: 0
  },
  {
    id: 54,
    category: 'Manga',
    label: 'Dans Fairy Tail, quelle est la guilde principale ?',
    options: ['Blue Pegasus', 'Sabertooth', 'Fairy Tail', 'Oracion Seis'],
    correctAnswer: 2
  },
  {
    id: 55,
    category: 'Manga',
    label: 'Quel manga met en scène des super-héros ?',
    options: ['One Punch Man', 'Bleach', 'Naruto', 'Dragon Ball'],
    correctAnswer: 0
  },
  {
    id: 56,
    category: 'Manga',
    label: 'Qui est le rival principal de Goku ?',
    options: ['Piccolo', 'Freezer', 'Vegeta', 'Cell'],
    correctAnswer: 2
  },
  {
    id: 57,
    category: 'Manga',
    label: 'Dans Bleach, que combat Ichigo ?',
    options: ['Titans', 'Hollows', 'Démons', 'Fléaux'],
    correctAnswer: 1
  },
  {
    id: 58,
    category: 'Manga',
    label: 'Quel manga parle de volleyball ?',
    options: ['Kuroko no Basket', 'Haikyuu', 'Free', 'Slam Dunk'],
    correctAnswer: 1
  },
  {
    id: 59,
    category: 'Manga',
    label: 'Quel manga est centré sur le basketball ?',
    options: ['Haikyuu', 'Slam Dunk', 'Blue Lock', 'Free'],
    correctAnswer: 1
  },
  {
    id: 60,
    category: 'Manga',
    label: 'Quel manga parle de football ?',
    options: ['Captain Tsubasa', 'Haikyuu', 'Kuroko', 'Ace of Diamond'],
    correctAnswer: 0
  },
  {
    id: 61,
    category: 'Manga',
    label: 'Dans Blue Lock, quel sport est mis en avant ?',
    options: ['Basketball', 'Football', 'Volleyball', 'Baseball'],
    correctAnswer: 1
  },
  {
    id: 62,
    category: 'Manga',
    label: 'Quel manga parle de pirates de l’espace ?',
    options: ['Cowboy Bebop', 'One Piece', 'Bleach', 'Trigun'],
    correctAnswer: 0
  },
  {
    id: 63,
    category: 'Manga',
    label: 'Quel manga est connu pour ses combats très violents ?',
    options: ['Berserk', 'Pokemon', 'Doraemon', 'Sailor Moon'],
    correctAnswer: 0
  },
  {
    id: 64,
    category: 'Manga',
    label: 'Qui est le créateur de Dragon Ball ?',
    options: ['Eiichiro Oda', 'Masashi Kishimoto', 'Akira Toriyama', 'Tite Kubo'],
    correctAnswer: 2
  },
  {
    id: 65,
    category: 'Manga',
    label: 'Quel manga met en scène des ninjas ?',
    options: ['Bleach', 'Naruto', 'One Piece', 'Fairy Tail'],
    correctAnswer: 1
  },
  {
    id: 66,
    category: 'Manga',
    label: 'Dans Naruto, quel clan possède le Sharingan ?',
    options: ['Hyuga', 'Uzumaki', 'Uchiha', 'Nara'],
    correctAnswer: 2
  },
  {
    id: 67,
    category: 'Manga',
    label: 'Quel est le pouvoir de Luffy ?',
    options: ['Corps en caoutchouc', 'Invisibilité', 'Feu', 'Glace'],
    correctAnswer: 0
  },
  {
    id: 68,
    category: 'Manga',
    label: 'Quel manga parle de chasseurs de primes dans l’espace ?',
    options: ['Trigun', 'Cowboy Bebop', 'Bleach', 'Akira'],
    correctAnswer: 1
  },
  {
    id: 69,
    category: 'Manga',
    label: 'Dans Jujutsu Kaisen, que combattent les exorcistes ?',
    options: ['Démons', 'Fléaux', 'Titans', 'Esprits'],
    correctAnswer: 1
  },
  {
    id: 70,
    category: 'Manga',
    label: 'Quel manga se déroule dans un monde de sorciers ?',
    options: ['Black Clover', 'Bleach', 'Naruto', 'Tokyo Ghoul'],
    correctAnswer: 0
  },
  {
    id: 71,
    category: 'Manga',
    label: 'Quel est le rêve d’Asta dans Black Clover ?',
    options: ['Devenir roi des pirates', 'Devenir empereur', 'Devenir roi mage', 'Être invincible'],
    correctAnswer: 2
  },
  {
    id: 72,
    category: 'Manga',
    label: 'Quel manga est centré sur les cartes magiques ?',
    options: ['Yu-Gi-Oh!', 'Pokemon', 'Digimon', 'Beyblade'],
    correctAnswer: 0
  },
  {
    id: 73,
    category: 'Manga',
    label: 'Dans Pokemon, qui est le héros principal ?',
    options: ['Red', 'Ash', 'Brock', 'Gary'],
    correctAnswer: 1
  },
  {
    id: 74,
    category: 'Manga',
    label: 'Quel manga parle de combats avec des toupies ?',
    options: ['Digimon', 'Beyblade', 'Yu-Gi-Oh!', 'Pokemon'],
    correctAnswer: 1
  },
  {
    id: 75,
    category: 'Manga',
    label: 'Quel manga met en scène des monstres numériques ?',
    options: ['Pokemon', 'Digimon', 'Yu-Gi-Oh!', 'Bakugan'],
    correctAnswer: 1
  },
  {
    id: 76,
    category: 'Manga',
    label: 'Quel manga se déroule dans un monde post-apocalyptique ?',
    options: ['Attack on Titan', 'One Piece', 'Fairy Tail', 'Naruto'],
    correctAnswer: 0
  },
  {
    id: 77,
    category: 'Manga',
    label: 'Quel manga est connu pour ses combats stratégiques ?',
    options: ['Naruto', 'Hunter x Hunter', 'Bleach', 'Dragon Ball'],
    correctAnswer: 1
  },
  {
    id: 78,
    category: 'Manga',
    label: 'Quel manga parle de pirates cherchant un trésor légendaire ?',
    options: ['One Piece', 'Fairy Tail', 'Black Clover', 'Bleach'],
    correctAnswer: 0
  },
  {
    id: 79,
    category: 'Manga',
    label: 'Quel manga mélange horreur et action ?',
    options: ['Tokyo Ghoul', 'Haikyuu', 'Slam Dunk', 'Blue Lock'],
    correctAnswer: 0
  },
  {
    id: 80,
    category: 'Manga',
    label: 'Quel manga est centré sur des héros professionnels ?',
    options: ['One Punch Man', 'My Hero Academia', 'Naruto', 'Bleach'],
    correctAnswer: 1
  },
   {
    id: 81,
    category: 'Manga',
    label: 'Quelle phrase exacte prononce Barbe Blanche avant de mourir à Marineford ?',
    options: [
      'Le One Piece existe !',
      'L’ère des pirates ne s’arrêtera jamais',
      'Vous ne pouvez pas arrêter cette vague',
      'Le trésor vous attend'
    ],
    correctAnswer: 0
  },
  {
    id: 82,
    category: 'Manga',
    label: 'Quel est le nom du chapitre où Itachi révèle la vérité à Sasuke ?',
    options: [
      'La vérité',
      'Les yeux qui voient tout',
      'Histoire de frères',
      'La lumière et les ténèbres'
    ],
    correctAnswer: 2
  },
  {
    id: 83,
    category: 'Manga',
    label: 'Quelle est la condition exacte pour activer le Contrat de Kurapika sur la Brigade Fantôme ?',
    options: [
      'Utiliser l’Empereur du Temps',
      'Cibler uniquement un membre de la Brigade',
      'Sacrifier sa durée de vie',
      'Être en état de Zetsu'
    ],
    correctAnswer: 1
  },
  {
    id: 84,
    category: 'Manga',
    label: 'Quel est le tout premier Titan que Grisha Yeager affronte ?',
    options: [
      'Titan colossal',
      'Titan souriant',
      'Titan d’attaque',
      'Aucun'
    ],
    correctAnswer: 3
  },
  {
    id: 85,
    category: 'Manga',
    label: 'Quel est le nom du rituel utilisé pour créer un Homonculus dans Fullmetal Alchemist ?',
    options: [
      'Transmutation humaine',
      'Échange équivalent',
      'Rituel du sang',
      'Création artificielle'
    ],
    correctAnswer: 0
  },
  {
    id: 86,
    category: 'Manga',
    label: 'Quelle citation définit le mieux Johan Liebert ?',
    options: [
      'Le monde est magnifique',
      'Tout le monde peut devenir un monstre',
      'Je suis vide',
      'Les humains sont égaux face à la mort'
    ],
    correctAnswer: 1
  },
  {
    id: 87,
    category: 'Manga',
    label: 'Quel est le vrai nom du Roi Démon dans Devilman Crybaby ?',
    options: [
      'Amon',
      'Satan',
      'Lucifer',
      'Ryo'
    ],
    correctAnswer: 2
  },
  {
    id: 88,
    category: 'Manga',
    label: 'Quel est le seul péché capital à ne jamais être vaincu directement dans Nanatsu no Taizai ?',
    options: [
      'Escanor',
      'Ban',
      'Meliodas',
      'Merlin'
    ],
    correctAnswer: 3
  },
  {
    id: 89,
    category: 'Manga',
    label: 'Quel est le nom du Stand de Dio Brando AVANT The World ?',
    options: [
      'The World',
      'Hermit Purple',
      'Jonathan’s Stand',
      'Aucun nom officiel'
    ],
    correctAnswer: 1
  },
  {
    id: 90,
    category: 'Manga',
    label: 'Quelle est la toute première loi citée dans Death Note ?',
    options: [
      'Le nom doit être écrit',
      'Le visage doit être visualisé',
      'La mort survient en 40 secondes',
      'La victime doit être humaine'
    ],
    correctAnswer: 2
  },

  {
    id: 91,
    category: 'Manga',
    label: 'Quel est le surnom réel donné à Gojo Satoru par les anciens exorcistes ?',
    options: [
      'Le fléau',
      'L’anomalie',
      'L’homme hors norme',
      'La calamité'
    ],
    correctAnswer: 1
  },
  {
    id: 92,
    category: 'Manga',
    label: 'Quel est le vrai rôle de l’Arbre Monde dans Berserk ?',
    options: [
      'Canaliser le mana',
      'Relier les plans',
      'Maintenir l’ordre divin',
      'Servir de portail astral'
    ],
    correctAnswer: 1
  },
  {
    id: 93,
    category: 'Manga',
    label: 'Quelle émotion déclenche l’Éveil du Haki des Rois ?',
    options: [
      'Colère',
      'Peu importe',
      'Volonté dominante',
      'Désespoir'
    ],
    correctAnswer: 2
  },
  {
    id: 94,
    category: 'Manga',
    label: 'Quel est le dernier mot prononcé par L avant sa mort ?',
    options: [
      'Light',
      'Je gagne',
      'C’est fini',
      'Intéressant'
    ],
    correctAnswer: 3
  },
  {
    id: 95,
    category: 'Manga',
    label: 'Quel est le premier sacrifice exigé par le Béhérit ?',
    options: [
      'Le sang',
      'L’âme',
      'L’attachement le plus cher',
      'La vie'
    ],
    correctAnswer: 2
  },

  {
    id: 96,
    category: 'Manga',
    label: 'Quel est le sens réel du titre "Shingeki no Kyojin" ?',
    options: [
      'L’attaque des titans',
      'Le titan assaillant',
      'L’avancée des géants',
      'Le titan de l’offensive'
    ],
    correctAnswer: 1
  },
  {
    id: 97,
    category: 'Manga',
    label: 'Quelle est la vraie malédiction de Sukuna ?',
    options: [
      'Être divisé',
      'Être immortel',
      'Être adoré',
      'Être incompris'
    ],
    correctAnswer: 2
  },
  {
    id: 98,
    category: 'Manga',
    label: 'Quel est le dernier souhait d’Edward Elric ?',
    options: [
      'Récupérer Alphonse',
      'Vivre normalement',
      'Renoncer à l’alchimie',
      'Revenir en arrière'
    ],
    correctAnswer: 2
  },
  {
    id: 99,
    category: 'Manga',
    label: 'Quel est le message final de Oda à travers la Volonté du D ?',
    options: [
      'Liberté',
      'Héritage',
      'Destin',
      'Résistance'
    ],
    correctAnswer: 0
  },
  {
    id: 100,
    category: 'Manga',
    label: 'Quelle est la dernière image du manga Devilman original ?',
    options: [
      'La Terre détruite',
      'Akira seul',
      'Silence cosmique',
      'Ryo pleurant'
    ],
    correctAnswer: 3
  },

  // IDs 31 → 100 volontairement gardés difficiles
  // (si tu veux : ultra-hard / lore-only / par manga spécifique)

];

