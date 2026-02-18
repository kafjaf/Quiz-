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
    label: 'Dans Hunter x Hunter, quel est le nom de la porte d’entrée du domaine Zoldyck ?',
    options: ['La Porte du Destin', 'La Porte de la Vérification', 'La Porte de Sang', 'La Porte de l’Enfer'],
    correctAnswer: 1
  },
  {
    id: 5,
    category: 'Manga',
    label: 'Quel est le nom du démon scellé dans l’épée de Asta (Black Clover) ?',
    options: ['Liebe', 'Lucifero', 'Zagred', 'Megicula'],
    correctAnswer: 0
  },
  {
    id: 6,
    category: 'Manga',
    label: 'Dans Naruto, quel était le surnom du père de Kakashi, Sakumo Hatake ?',
    options: ['L’Éclair Jaune', 'Le Croc-Blanc de Konoha', 'Le Faucon Noir', 'Le Démon de la Brume'],
    correctAnswer: 1
  },
  {
    id: 7,
    category: 'Manga',
    label: 'Comment s’appelle la technique ultime de Netero dans Hunter x Hunter ?',
    options: ['Le Cri du Dragon', 'Zéro Main', 'Le Bouddha d’Or', 'La Paume de la Renaissance'],
    correctAnswer: 1
  },
  {
    id: 8,
    category: 'Manga',
    label: 'Dans Jujutsu Kaisen, quel est le nom de l’extension du territoire de Megumi Fushiguro ?',
    options: ['Jardin des Ombres', 'Chambre de l’Ombre Chimérique', 'Forêt de Sang', 'Royaume Noir'],
    correctAnswer: 1
  },
  {
    id: 9,
    category: 'Manga',
    label: 'Quel est le premier humain tué par Light Yagami avec le Death Note ?',
    options: ['L', 'Ray Penber', 'Kurou Otoharada', 'Kiichiro Osoreda'],
    correctAnswer: 2
  },
  {
    id: 10,
    category: 'Manga',
    label: 'Dans Dragon Ball, qui a créé les Dragon Balls originelles de Namek ?',
    options: ['Le Tout-Puissant', 'Le Grand Chef', 'Dende', 'Moori'],
    correctAnswer: 1
  },
  {
    id: 11,
    category: 'Manga',
    label: 'Quelle est la spécialité chirurgicale du Dr. Tenma dans Monster ?',
    options: ['Cardiologue', 'Neurochirurgien', 'Oncologue', 'Pédiatre'],
    correctAnswer: 1
  },
  {
    id: 12,
    category: 'Manga',
    label: 'Comment s’appelle le navire original de l’équipage de Barbe Noire ?',
    options: ['Saber of Xebec', 'Moby Dick', 'Black Vengeance', 'The Terror'],
    correctAnswer: 0
  },
  {
    id: 13,
    category: 'Manga',
    label: 'Dans Bleach, quel est le nom de la forme libérée du Zanpakuto de Grimmjow ?',
    options: ['Pantera', 'Tiburón', 'Murciélago', 'Santa Teresa'],
    correctAnswer: 0
  },
  {
    id: 14,
    category: 'Manga',
    label: 'Qui est l’auteur du manga culte "Slam Dunk" ?',
    options: ['Mitsuru Adachi', 'Takehiko Inoue', 'Yoshihiro Togashi', 'Tite Kubo'],
    correctAnswer: 1
  },
  {
    id: 15,
    category: 'Manga',
    label: 'Quel est le nom du protocole de sécurité dans Evangelion ?',
    options: ['Mode Berserk', 'Plan de Complétion', 'Code 777', 'Magi System'],
    correctAnswer: 3
  },
  {
    id: 16,
    category: 'Manga',
    label: 'Dans One Piece, quel membre du CP9 possède le fruit du léopard ?',
    options: ['Kaku', 'Jabra', 'Rob Lucci', 'Blueno'],
    correctAnswer: 2
  },
  {
    id: 17,
    category: 'Manga',
    label: 'Quel est le numéro de plaque de Gon lors de l’examen Hunter ?',
    options: ['44', '99', '405', '101'],
    correctAnswer: 2
  },
  {
    id: 18,
    category: 'Manga',
    label: 'Dans My Hero Academia, quel était le nom de code de All Might avant de devenir n°1 ?',
    options: ['Symbol of Peace', 'Yagi-kun', 'Young Might', 'Pas de nom de code'],
    correctAnswer: 3
  },
  {
    id: 19,
    category: 'Manga',
    label: 'Comment s’appelle le monde des morts dans Saint Seiya ?',
    options: ['Le Tartare', 'Le Meikai', 'L’Élysée', 'Le Sanctuaire'],
    correctAnswer: 1
  },
  {
    id: 20,
    category: 'Manga',
    label: 'Dans Fairy Tail, qui est le véritable créateur de la guilde ?',
    options: ['Makarov', 'Gildarts', 'Mavis Vermillion', 'Zeleph'],
    correctAnswer: 2
  },
  {
    id: 21,
    category: 'Manga',
    label: 'Quel personnage de JoJo (Part 4) possède le Stand "Killer Queen" ?',
    options: ['Okuyasu', 'Rohan', 'Yoshikage Kira', 'Jotaro'],
    correctAnswer: 2
  },
  {
    id: 22,
    category: 'Manga',
    label: 'Dans Chainsaw Man, quel est le contrat de Aki avec le Démon Renard ?',
    options: ['Sa peau', 'Sa vue', 'Sa nourriture', 'Des parties de son corps'],
    correctAnswer: 3
  },
  {
    id: 23,
    category: 'Manga',
    label: 'Quelle est la véritable identité du "Roi des Morts" dans Solo Leveling ?',
    options: ['Sung Jin-Woo', 'Ashborn', 'Antares', 'Baran'],
    correctAnswer: 1
  },
  {
    id: 24,
    category: 'Manga',
    label: 'Dans GTO, quel est le rêve ultime d’Eikichi Onizuka ?',
    options: ['Devenir riche', 'Devenir le meilleur prof du Japon', 'Sortir avec une élève', 'Devenir politicien'],
    correctAnswer: 1
  },
  {
    id: 25,
    category: 'Manga',
    label: 'Quel est le nom de l’organisation secrète dans Tokyo Ghoul ?',
    options: ['Aogiri', 'V', 'Anteiku', 'Clowns'],
    correctAnswer: 1
  },

  // --- NIVEAU 2 : LES CHALLENGERS (26 à 50) ---
  {
    id: 26,
    category: 'Manga',
    label: 'Dans Boruto, qui est le 8ème Hokage par intérim ?',
    options: ['Konohamaru', 'Shikamaru', 'Sakura', 'Kakashi'],
    correctAnswer: 1
  },
  {
    id: 27,
    category: 'Manga',
    label: 'Quelle est la condition pour utiliser le "Sun Breath" original dans Demon Slayer ?',
    options: ['Être un descendant direct', 'Porter des boucles d’oreilles Hanafuda', 'La danse Hinokami Kagura', 'La marque de naissance'],
    correctAnswer: 2
  },
  {
    id: 28,
    category: 'Manga',
    label: 'Dans One Piece, quelle cicatrice Luffy s’est-il faite lui-même pour prouver son courage ?',
    options: ['Celle sur son torse', 'Celle sous son œil gauche', 'Celle sur son bras', 'Il n’en a pas fait'],
    correctAnswer: 1
  },
  {
    id: 29,
    category: 'Manga',
    label: 'Quel est le nom du créateur de l’univers dans Fire Force ?',
    options: ['Adolla', 'Shinra', 'Evangelist', 'Rekka'],
    correctAnswer: 2
  },
  {
    id: 30,
    category: 'Manga',
    label: 'Dans Jojo Part 3, quel est le nom du Stand de Iggy le chien ?',
    options: ['The Fool', 'The Sun', 'Hermit Purple', 'The World'],
    correctAnswer: 0
  },
  {
    id: 31,
    category: 'Manga',
    label: 'Qui est le véritable "père" des Homonculus dans FMA Brotherhood ?',
    options: ['Van Hohenheim', 'Le petit être dans la fiole', 'Edward Elric', 'Dante'],
    correctAnswer: 1
  },
  {
    id: 32,
    category: 'Manga',
    label: 'Dans Blue Lock, quel est le surnom de Shoei Barou ?',
    options: ['Le Génie', 'Le Roi', 'Le Monstre', 'L’Ombre'],
    correctAnswer: 1
  },
  {
    id: 33,
    category: 'Manga',
    label: 'Comment s’appelle la monnaie utilisée dans le monde de Hunter x Hunter ?',
    options: ['Belly', 'Zeni', 'Jenny', 'Yen'],
    correctAnswer: 2
  },
  {
    id: 34,
    category: 'Manga',
    label: 'Quel est le titre du premier chapitre du manga One Piece ?',
    options: ['Romance Dawn', 'Le début de l’aventure', 'L’homme au chapeau de paille', 'Vers Grand Line'],
    correctAnswer: 0
  },
  {
    id: 35,
    category: 'Manga',
    label: 'Dans Kingdom, comment s’appelle l’épée de Shin léguée par Hyou ?',
    options: ['Bakusaiga', 'L’épée du Roi', 'L’épée de Hyou', 'L’épée de Qin'],
    correctAnswer: 2
  },
  {
    id: 36,
    category: 'Manga',
    label: 'Dans Fullmetal Alchemist, quelle jambe Edward a-t-il perdue lors de la transmutation ?',
    options: ['La gauche', 'La droite', 'Les deux', 'Aucune'],
    correctAnswer: 0
  },
  {
    id: 37,
    category: 'Manga',
    label: 'Quel est le nom de la technique de téléportation de Minato Namikaze ?',
    options: ['Shunshin no Jutsu', 'Hiraishin no Jutsu', 'Kamui', 'Edo Tensei'],
    correctAnswer: 1
  },
  {
    id: 38,
    category: 'Manga',
    label: 'Qui est l’auteur du manga horrifique "Uzumaki" ?',
    options: ['Sui Ishida', 'Junji Ito', 'Naoki Urasawa', 'Kentaro Miura'],
    correctAnswer: 1
  },
  {
    id: 39,
    category: 'Manga',
    label: 'Dans Seven Deadly Sins, quel est le véritable âge de Meliodas (environ) ?',
    options: ['18 ans', '500 ans', '3000 ans', '10 000 ans'],
    correctAnswer: 2
  },
  {
    id: 40,
    category: 'Manga',
    label: 'Dans Death Note, combien de jours un humain peut-il vivre après que son nom soit écrit sans cause de mort ?',
    options: ['40 secondes', '6 minutes 40', '23 jours', 'Il meurt immédiatement'],
    correctAnswer: 2
  },
  {
    id: 41,
    category: 'Manga',
    label: 'Quel est le nom de la forme "éveillée" du Gear 4 de Luffy contre Katakuri ?',
    options: ['Boundman', 'Tankman', 'Snakeman', 'Nika'],
    correctAnswer: 2
  },
  {
    id: 42,
    category: 'Manga',
    label: 'Dans Mob Psycho 100, quel est le nom de l’organisation maléfique ?',
    options: ['La Griffe (Claw)', 'L’Oeil', 'Le Cercle', 'Shadow'],
    correctAnswer: 0
  },
  {
    id: 43,
    category: 'Manga',
    label: 'Qui a tué Neferpitou dans Hunter x Hunter ?',
    options: ['Gon Freecss', 'Killua Zoldyck', 'Netero', 'Kaito'],
    correctAnswer: 0
  },
  {
    id: 44,
    category: 'Manga',
    label: 'Dans Bleach, qui est le Capitaine de la 11ème Division ?',
    options: ['Byakuya', 'Kenpachi Zaraki', 'Toshiro', 'Shunsui'],
    correctAnswer: 1
  },
  {
    id: 45,
    category: 'Manga',
    label: 'Comment s’appelle la sœur de Tanjiro Kamado ?',
    options: ['Nezuko', 'Kanae', 'Shinobu', 'Kanao'],
    correctAnswer: 0
  },
  {
    id: 46,
    category: 'Manga',
    label: 'Dans Hajime no Ippo, quel est le nom du coup spécial de Ippo ?',
    options: ['Flicker Jab', 'Dempsey Roll', 'Smash', 'White Fang'],
    correctAnswer: 1
  },
  {
    id: 47,
    category: 'Manga',
    label: 'Dans Vinland Saga, qui est le roi légendaire que Thorfinn rencontre ?',
    options: ['Canute', 'Harald', 'Sweyn', 'Ragnar'],
    correctAnswer: 0
  },
  {
    id: 48,
    category: 'Manga',
    label: 'Dans Jojo Part 6, quel est le Stand de Jolyne Cujoh ?',
    options: ['Star Platinum', 'Stone Free', 'Soft & Wet', 'Gold Experience'],
    correctAnswer: 1
  },
  {
    id: 49,
    category: 'Manga',
    label: 'Quel manga raconte l’histoire d’un jeune prodige du Go possédé par un fantôme ?',
    options: ['March comes in like a lion', 'Hikaru no Go', 'Chihayafuru', 'Shion no Ou'],
    correctAnswer: 1
  },
  {
    id: 50,
    category: 'Manga',
    label: 'Dans Blue Lock, quel est le critère n°1 pour devenir l’attaquant ultime selon Ego ?',
    options: ['La vitesse', 'La technique', 'L’égoïsme', 'Le travail d’équipe'],
    correctAnswer: 2
  },
  {
    id: 51,
    category: 'Manga',
    label: 'Dans Hunter x Hunter, quelle est la condition d’activation de la Skill Hunter de Chrollo ?',
    options: ['Toucher la main', 'Voir la technique', 'Remplir 4 conditions en 1h', 'Sucer le sang'],
    correctAnswer: 2
  },
  {
    id: 52,
    category: 'Manga',
    label: 'Quel est le nom de l’épée capable de tuer les résidents de l’enfer dans Inuyasha ?',
    options: ['Tessaiga', 'Tenseiga', 'Bakusaiga', 'Tokijin'],
    correctAnswer: 1
  },
  {
    id: 53,
    category: 'Manga',
    label: 'Dans One Piece, qui est le premier membre d’équipage à avoir rejoint Luffy (officiellement) ?',
    options: ['Nami', 'Zoro', 'Usopp', 'Bibi'],
    correctAnswer: 1
  },
  {
    id: 54,
    category: 'Manga',
    label: 'Quel est le nom du "Stand" de Dio dans Steel Ball Run (Partie 7) ?',
    options: ['The World', 'The Universe', 'Scary Monsters', 'Dirty Deeds'],
    correctAnswer: 2
  },
  {
    id: 55,
    category: 'Manga',
    label: 'Dans Kingdom, quel est le nom de l’unité d’élite dirigée par Shin ?',
    options: ['Unité Hi Shin', 'Unité Gyoku Hou', 'Unité Gaku Ka', 'Unité Ouki'],
    correctAnswer: 0
  },
  {
    id: 56,
    category: 'Manga',
    label: 'Quel est l’ingrédient final pour créer la Pierre Philosophale dans FMA ?',
    options: ['Du mercure', 'Des âmes humaines', 'Du sang de chimère', 'De l’or pur'],
    correctAnswer: 1
  },
  {
    id: 57,
    category: 'Manga',
    label: 'Comment s’appelle la forme finale du Hollow d’Ichigo contre Ulquiorra ?',
    options: ['Bankai Full', 'Vasto Lorde', 'Resurreccion', 'Mugetsu'],
    correctAnswer: 1
  },
  {
    id: 58,
    category: 'Manga',
    label: 'Dans Vinland Saga, qui tue Thors, le père de Thorfinn ?',
    options: ['Askeladd', 'Floki', 'Thorkell', 'Canute'],
    correctAnswer: 0
  },
  {
    id: 59,
    category: 'Manga',
    label: 'Quel est le vrai métier de Reigen Arataka dans Mob Psycho 100 ?',
    options: ['Exorciste', 'Médium', 'Arnaqueur', 'Professeur'],
    correctAnswer: 2
  },
  {
    id: 60,
    category: 'Manga',
    label: 'Dans Jojo Part 5, quel est le pouvoir final de Gold Experience Requiem ?',
    options: ['Accélérer le temps', 'Annuler la cause', 'Annuler l’effet', 'Créer des clones'],
    correctAnswer: 2
  },

  // --- NIVEAU 3 : LES OOOTAKU (76 à 90) ---
  {
    id: 76,
    category: 'Manga',
    label: 'Dans Berserk, quel est le nom du chapitre banni par l’auteur (chapitre 83) ?',
    options: ['L’Éclipse', 'Le Dieu des Abysses', 'L’Idée du Mal', 'Le Pacte'],
    correctAnswer: 2
  },
  {
    id: 77,
    category: 'Manga',
    label: 'Qui a enseigné le "Style des Jambes Noires" à Sanji ?',
    options: ['Zeff au Pied Rouge', 'Iva', 'Judge Vinsmoke', 'Sora'],
    correctAnswer: 0
  },
  {
    id: 78,
    category: 'Manga',
    label: 'Dans 20th Century Boys, qui est le véritable "Ami" (identifié à la fin) ?',
    options: ['Kenji', 'Donkey', 'Fukube / Katsumata', 'Otcho'],
    correctAnswer: 2
  },
  {
    id: 79,
    category: 'Manga',
    label: 'Quel est le nom de la technique interdite de Might Guy (la 8ème porte) ?',
    options: ['Paon Matinal', 'Tigre du Midi', 'Guy de Nuit', 'Éléphant du Soir'],
    correctAnswer: 2
  },
  {
    id: 80,
    category: 'Manga',
    label: 'Dans Vagabond, quel est le vrai nom de naissance de Miyamoto Musashi ?',
    options: ['Sasaki Kojiro', 'Shinmen Takezo', 'Matahachi', 'Itosai'],
    correctAnswer: 1
  },
  {
    id: 81,
    category: 'Manga',
    label: 'Dans Hellsing, quelle est la véritable identité d’Alucard ?',
    options: ['Dracula', 'Vlad l’Empaleur', 'Un démon ancien', 'Le Comte'],
    correctAnswer: 1
  },
  {
    id: 82,
    category: 'Manga',
    label: 'Quel est le premier manga à avoir dépassé les 100 millions d’exemplaires ?',
    options: ['Dragon Ball', 'Slam Dunk', 'KochiKame', 'One Piece'],
    correctAnswer: 2
  },
  {
    id: 83,
    category: 'Manga',
    label: 'Dans Monster, quel est le nom du livre d’images qui a traumatisé Johan ?',
    options: ['Le Monstre sans nom', 'Le Dieu de la mort', 'La Paix de demain', 'L’enfant rouge'],
    correctAnswer: 0
  },
  {
    id: 84,
    category: 'Manga',
    label: 'Dans Jujutsu Kaisen, quelle est la condition pour que Sukuna utilise son extension de territoire ?',
    options: ['Faire un sceau', 'Zéro condition (Ouvert)', 'Toucher l’adversaire', 'Avoir ses 20 doigts'],
    correctAnswer: 1
  },
  {
    id: 85,
    category: 'Manga',
    label: 'Qui est l’auteur du manga "Goodnight Punpun" ?',
    options: ['Inio Asano', 'Naoki Urasawa', 'Tatsuki Fujimoto', 'Sui Ishida'],
    correctAnswer: 0
  },

  // --- NIVEAU 4 : LES ÉGOÏSTES / LÉGENDES (91 à 100) ---
  {
    id: 91,
    category: 'Manga',
    label: 'Dans Gantz, combien de points faut-il pour ressusciter quelqu’un ?',
    options: ['50', '100', '500', '1000'],
    correctAnswer: 1
  },
  {
    id: 92,
    category: 'Manga',
    label: 'Quel est le nom de la planète d’origine des Sayajins (AVANT Vegeta) ?',
    options: ['Namek', 'Plant', 'Sadala', 'Freezer 79'],
    correctAnswer: 2
  },
  {
    id: 93,
    category: 'Manga',
    label: 'Dans Hunter x Hunter, quel est le nom du jeu de plateau entre Meruem et Komugi ?',
    options: ['Shogi', 'Go', 'Gungi', 'Chess'],
    correctAnswer: 2
  },
  {
    id: 94,
    category: 'Manga',
    label: 'Dans One Piece, quel est le véritable nom du Fruit du Démon de Luffy ?',
    options: ['Gomu Gomu no Mi', 'Hito Hito no Mi modèle Nika', 'Sun Sun no Mi', 'Joy Boy no Mi'],
    correctAnswer: 1
  },
  {
    id: 95,
    category: 'Manga',
    label: 'Dans Akira, quel est le numéro d’identification de Tetsuo ?',
    options: ['28', '41', '19', '1'],
    correctAnswer: 1
  },
  {
    id: 96,
    category: 'Manga',
    label: 'Qui est le personnage principal du manga original "Devilman" de 1972 ?',
    options: ['Akira Fudo', 'Ryo Asuka', 'Miki Makimura', 'Satan'],
    correctAnswer: 0
  },
  {
    id: 97,
    category: 'Manga',
    label: 'Dans Blue Lock, quel est le surnom donné à Isagi Yoichi par Itoshi Rin ?',
    options: ['L’attaquant', 'Le génie', 'Le médiocre / Tiède', 'Le monstre'],
    correctAnswer: 2
  },
  {
    id: 98,
    category: 'Manga',
    label: 'Quel manga détient le record mondial de la plus longue série par un seul auteur ?',
    options: ['Golgo 13', 'Hajime no Ippo', 'JoJo', 'One Piece'],
    correctAnswer: 0
  },
  {
    id: 99,
    category: 'Manga',
    label: 'Quel est le nom du studio qui a animé le pilote "secret" de Hunter x Hunter en 1998 ?',
    options: ['Madhouse', 'Pierrot', 'Nippon Animation', 'Studio Deen'],
    correctAnswer: 2
  },
  {
    id: 100,
    category: 'Manga',
    label: 'QUESTION FINALE : Quel est le premier mot prononcé par Ego Jinpachi aux joueurs ?',
    options: ['Bonjour', 'Félicitations', 'Égoïstes', 'Bienvenue'],
    correctAnswer: 1
  }
];

