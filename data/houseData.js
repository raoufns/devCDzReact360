export default house = {
  House: {
    roomName: 'Maison',
    info: `
      * 4 chambres
      * 3 salles de bain
      * 1 garage
      * climatisation
      * Au prix de 120 000 000 DZD`,
    adjacentRooms: ['Foyer'],
  },
  Foyer: {
    roomName: 'Foyer' ,
    info: `
      * Porte d'entrée en fer forgé.
      * Elegant etched glass inserts for privacy.
      * Beau lustre en acrylique avec des lumières LED.
      * Hall d'entrée pour les manteaux et sacs à main...
      * Sol en céramique antidérapant classique.`,
    img: 'foyer.jpg',
    adjacentRooms: ['Salle_a_manger', 'Salon']
  },
  Salle_a_manger: {
    roomName: 'Salle_a_manger',
    info:`
      * Lustre élégant avec des lumières LED.
      * Hauts plafonds en gradins.
      * Fenêtre en fer forgé pour plus de sécurité.
      * Accès direct à la cuisine pour plus de commodité.
      * Beau carrelage.`,
    img: 'dining_room.jpg',
    adjacentRooms: ['Cuisine', 'Foyer']
  },
  Cuisine: {
    roomName: 'Cuisine',
    info: `
      * Plans de travail et dosserets en granit (Giallo Fiesta brésilien de 3/4 pouce d'épaisseur).
      * Îlot sur mesure avec tiroirs et rangement pour bouteilles de vin.
      * Appareils électroménagers Samsung.
      * Armoires et garde-manger Birchwood sur mesure avec moulures élégantes.
      * Double éviers extra profonds en acier inoxydable de 9 "avec robinet amovible et distributeur de savon.
      * LED sous le meuble et le haut du meuble.`,
    img: 'kitchen.jpg',
    adjacentRooms: ['Salon','Coin_petit_dejeuner']
  },
  Coin_petit_dejeuner: {
    roomName: 'Coin_petit_dejeuner',
    info: `
      * Cabinet sur mesure en granite
      * Affichage et stockage de casier à vin personnalisé.
      * Lustre moderne avec des lumières LED.
      * Accès facile à la cour lors de vos réceptions.
      * Ouvert et spacieux.
    `,
    img: 'breakfast_nook.jpg',
    adjacentRooms: ['Arriere_cour','Salon','Cuisine', 'Chambre_Principale', 'Buanderie']
  },
  Arriere_cour: {
    roomName: 'Arriere_cour',
    info: `
      * Très grande cour arrière pour aire de jeux ou future piscine.
      * Système d'arrosage.
      * Belle clôture.
      * Arbres matures:
        ombre: chêne, noix de pécan, fresno, acacia, poinciana royal, ficus, ceiba
        fruits: papaye, mangue, limes.
      * Zone de divertissement et de restauration pour les barbecues dans la cour.
    `,
    img: 'backyard.jpg',
    adjacentRooms: ['Coin_petit_dejeuner','Chambre_Une']
  },
  Chambre_Principale: {
    roomName: 'Chambre_Principale',
    info: `
      * Extra grande chambre, permet de s'asseoir.
      * Cieling ou architecture à plusieurs niveaux.
      * Ventilateur de plafond et luminaire silencieux.
      * Moelleux tapis taupe neutre.
      * Porte coulissante pour un accès facile à la cour.`,
    img: 'master_bedroom.jpg',
    adjacentRooms: ['Salle_de_bain_principale','Coin_petit_dejeuner']
  },
  Salle_de_bain_principale:  {
    roomName: 'Salle_de_bain_principale',
    info: `
      * Cabine de douche en verre sur mesure.
      * Carreaux de bain en porcelaine et moulures en travertin.
      * Fenêtre de bloc de verre de confidentialité.
      * Baignoire de jardin relaxante avec jets.
      * Salle de toilettes séparée pour la vie privée avec stockage.
      * Extracteurs éclairés par double extracteur.`,
    img: 'master_bathroom.jpg',
    adjacentRooms: ['Chambre_Principale', 'Salle_de_bain_principale_deux']
  },
  Salle_de_bain_principale_deux: {
    roomName: 'Salle_de_bain_principale_deux',
    info: `
    * Cabine de douche en verre sur mesure.
    * Carreaux de bain en porcelaine et moulures en travertin.
    * Fenêtre de bloc de verre de confidentialité.
    * Baignoire de jardin relaxante avec jets.
    * Salle de toilettes séparée pour la vie privée avec stockage.
    * Extracteurs éclairés par double extracteur.`,
    img: 'master_bathroom_two.jpg',
    adjacentRooms: ['Salle_de_bain_principale']
  },
  Salon: {
    roomName: 'Salon',
    info: `
      * Chambre familiale.
      * Cheminée .
      * Ventilateurs de plafond télécommandés.
      * Plafond à plusieurs niveaux.
      * TT.V. support mural / média.`,
    img: 'living_room.jpg',
    adjacentRooms: ['Foyer', 'Coin_petit_dejeuner', 'Chambre_Une', 'Chambre_Deux', 'Chambre_Trois','Salle_de_bain_deux']
  },
  Chambre_Une: {
    roomName: 'Chambre_Une',
    info: `
      * Spacieuse chambre lumineuse et aérée.
      * Perect pour les invités ou belle-mère.
      * Salle de bains privée.
      * Bibliothèque intégrée avec moulures élégantes.
      * Grand espace et parquet.
      * Wainscott décoratif et modlings rail de chaise.
    `,
    img: 'bedroom_one.jpg',
    adjacentRooms:['Salle_de_bain_Un','Arriere_cour','Salon']
  },
  Salle_de_bain_Un: {
    roomName: 'Salle_de_bain_Un',
    info: `
      * Vanité de granit et miroir biseauté personnalisé.
      * Vanity-Kohler lavabos et accessoires de bain.
      * Toilette allongée à économie d’eau Kohler.
      * Carreau de céramique personnalisé et bordures métalliques décoratives.
      * Grand placard de rangement personnalisé.`,
    img: 'bathroom_one.jpg',
    adjacentRooms: ['Chambre_Une']
  },
  Salle_de_bain_deux: {
    roomName: 'Salle_de_bain_deux',
    info: `
      * Dessus de vanité en marbre avec miroir biseauté sur mesure.
      * Élégant lavabo Kohler et accessoires de bain.
      * Toilette allongée à économie d’eau Kohler.
      * Grand placard de rangement personnalisé avec tablettes extra profondes.
      * Beau contour de douche en céramique.
      * Cabine de douche en verre Kohler.`,
    img: 'bathroom_two.jpg',
    adjacentRooms: ['Salon', 'Chambre_Deux', 'Chambre_Trois']
  },
  Chambre_Deux: {
    roomName: 'Chambre_Deux',
    info: `
      * Grande chambre spacieuse pour une chambre à 2 lits jumeaux ou 1 lit queen.
      * Tapis en peluche taupe neutre.
      * Fenêtre en fer forgé pour plus de sécurité.
      * Deux placards.
      * Rayonnage et armoire personnalisés.
    `,
    img: 'bedroom_two.jpg',
    adjacentRooms: ['Chambre_Trois','Salle_de_bain_deux']
  },
  Chambre_Trois: {
    roomName: 'Chambre_Trois',
    info: `
      * Grande chambre spacieuse pouvant accueillir 2 lits jumeaux ou 1 lit queen size.
      * Luminaire de ventilateur de plafond éclairé.
      * Deux placards.
      * Moelleux tapis taupe neutre.`,
    img: 'bedroom_three.jpg',
    adjacentRooms: ['Chambre_Deux','Salle_de_bain_deux']
  },
  Buanderie: {
    roomName: 'Buanderie',
    info: `
      * Dans la buanderie (laveuse et sécheuse négociable).
      * Armoires de rangement supplémentaires.
      * Grand placard de rangement.
      * Armoire à linge avec tablettes extra profondes.`,
    img: 'laundry_room.jpg',
    adjacentRooms: ['Chambre_Principale','Coin_petit_dejeuner', 'Garage']
  },
  Garage: {
    roomName: 'Garage',
    info: `
      * Fenêtres de la salle de garage pour la commodité de la lumière du jour.
      * Garage double avec sol antidérapant.`,
    img: 'garage.jpg',
    adjacentRooms: ['Buanderie']
  }
}
