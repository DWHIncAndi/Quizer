export interface Question {
  question: string;
  options: string[];
  correctAnswers: string[];
  difficulty: string;
}

export const questions: Question[] = [
  {
    question: "What is the capital of Australia?",
    options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
    correctAnswers: ["Canberra"],
    difficulty: "easy",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Homer"],
    correctAnswers: ["William Shakespeare"],
    difficulty: "easy",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "H2"],
    correctAnswers: ["H2O"],
    difficulty: "easy",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswers: ["Mars"],
    difficulty: "easy",
  },
  {
    question: "In which country is the Eiffel Tower located?",
    options: ["France", "Italy", "Germany", "Spain"],
    correctAnswers: ["France"],
    difficulty: "easy",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Michelangelo",
    ],
    correctAnswers: ["Leonardo da Vinci"],
    difficulty: "easy",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
    correctAnswers: ["Vatican City"],
    difficulty: "normal",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    correctAnswers: ["Pacific Ocean"],
    difficulty: "normal",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    correctAnswers: ["Ottawa"],
    difficulty: "normal",
  },
  {
    question: "Who discovered penicillin?",
    options: [
      "Alexander Fleming",
      "Marie Curie",
      "Isaac Newton",
      "Albert Einstein",
    ],
    correctAnswers: ["Alexander Fleming"],
    difficulty: "normal",
  },
  {
    question: "What is the largest mammal?",
    options: ["Blue whale", "Elephant", "Great white shark", "Giraffe"],
    correctAnswers: ["Blue whale"],
    difficulty: "easy",
  },
  {
    question: "How many continents are there?",
    options: ["7", "5", "6", "8"],
    correctAnswers: ["7"],
    difficulty: "easy",
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["Japan", "China", "Thailand", "South Korea"],
    correctAnswers: ["Japan"],
    difficulty: "easy",
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    correctAnswers: ["Albert Einstein"],
    difficulty: "normal",
  },
  {
    question: "In what year did World War II end?",
    options: ["1945", "1939", "1941", "1950"],
    correctAnswers: ["1945"],
    difficulty: "normal",
  },
  {
    question: "Which planet is closest to the Sun?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswers: ["Mercury"],
    difficulty: "normal",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Diamond", "Gold", "Iron", "Steel"],
    correctAnswers: ["Diamond"],
    difficulty: "normal",
  },
  {
    question: "What language has the most native speakers?",
    options: ["Mandarin Chinese", "Spanish", "English", "Hindi"],
    correctAnswers: ["Mandarin Chinese"],
    difficulty: "hard",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Won", "Yuan"],
    correctAnswers: ["Yen"],
    difficulty: "easy",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Osmium", "Oxide"],
    correctAnswers: ["Oxygen"],
    difficulty: "easy",
  },
  {
    question: "What is the most abundant gas in the Earth's atmosphere?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    correctAnswers: ["Nitrogen"],
    difficulty: "hard",
  },
  {
    question: "Which animal is known for its ability to change color?",
    options: ["Chameleon", "Octopus", "Peacock", "Tiger"],
    correctAnswers: ["Chameleon"],
    difficulty: "normal",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    correctAnswers: ["Mount Everest"],
    difficulty: "normal",
  },
  {
    question: "Which country has the longest coastline?",
    options: ["Canada", "Australia", "Russia", "USA"],
    correctAnswers: ["Canada"],
    difficulty: "hard",
  },
  {
    question: "What is the largest planet in our Solar System?",
    options: ["Jupiter", "Saturn", "Earth", "Neptune"],
    correctAnswers: ["Jupiter"],
    difficulty: "normal",
  },
  {
    question: "Which human organ can regenerate?",
    options: ["Liver", "Heart", "Lung", "Kidney"],
    correctAnswers: ["Liver"],
    difficulty: "normal",
  },
  {
    question: "What does DNA stand for?",
    options: [
      "Deoxyribonucleic acid",
      "Deoxyribonucleic ammonia",
      "Dioxygen acid",
      "Dioxygen ammonia",
    ],
    correctAnswers: ["Deoxyribonucleic acid"],
    difficulty: "hard",
  },
  {
    question: "Which is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctAnswers: ["Nile"],
    difficulty: "hard",
  },
  {
    question: "What is the atomic number of carbon?",
    options: ["6", "12", "8", "14"],
    correctAnswers: ["6"],
    difficulty: "normal",
  },
  {
    question: "Which of these is a prime number?",
    options: ["17", "15", "18", "20"],
    correctAnswers: ["17"],
    difficulty: "hard",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi Apparatus"],
    correctAnswers: ["Mitochondria"],
    difficulty: "normal",
  },
  {
    question: "What element does 'He' represent on the periodic table?",
    options: ["Helium", "Hydrogen", "Iron", "Holmium"],
    correctAnswers: ["Helium"],
    difficulty: "easy",
  },
  {
    question: "What is the most popular programming language?",
    options: ["JavaScript", "Python", "Java", "C++"],
    correctAnswers: ["JavaScript"],
    difficulty: "hard",
  },

  // Easy Questions
  {
    question: "What is the largest continent?",
    options: ["Asia", "Africa", "North America", "Europe"],
    correctAnswers: ["Asia"],
    difficulty: "easy",
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswers: ["Paris"],
    difficulty: "easy",
  },
  {
    question: "Which fruit is known for having its seeds on the outside?",
    options: ["Strawberry", "Banana", "Kiwi", "Apple"],
    correctAnswers: ["Strawberry"],
    difficulty: "easy",
  },
  {
    question: "What is the primary language spoken in Brazil?",
    options: ["Portuguese", "Spanish", "English", "French"],
    correctAnswers: ["Portuguese"],
    difficulty: "easy",
  },
  {
    question: "What is the hardest rock?",
    options: ["Diamond", "Granite", "Basalt", "Slate"],
    correctAnswers: ["Diamond"],
    difficulty: "easy",
  },

  // Normal Questions
  {
    question: "What is the longest bone in the human body?",
    options: ["Femur", "Humerus", "Tibia", "Fibula"],
    correctAnswers: ["Femur"],
    difficulty: "normal",
  },
  {
    question: "Which planet is known for its rings?",
    options: ["Saturn", "Mars", "Earth", "Neptune"],
    correctAnswers: ["Saturn"],
    difficulty: "normal",
  },
  {
    question: "What is the primary gas found in the air we breathe?",
    options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    correctAnswers: ["Nitrogen"],
    difficulty: "normal",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Skin", "Liver", "Heart", "Lung"],
    correctAnswers: ["Skin"],
    difficulty: "normal",
  },
  {
    question: "Which city is known as the Big Apple?",
    options: ["New York City", "Los Angeles", "Chicago", "Miami"],
    correctAnswers: ["New York City"],
    difficulty: "normal",
  },

  // Hard Questions
  {
    question: "What is the second most spoken language in the world?",
    options: ["Mandarin Chinese", "Spanish", "English", "Hindi"],
    correctAnswers: ["Spanish"],
    difficulty: "hard",
  },
  {
    question: "Who painted the ceiling of the Sistine Chapel?",
    options: ["Michelangelo", "Raphael", "Da Vinci", "Caravaggio"],
    correctAnswers: ["Michelangelo"],
    difficulty: "hard",
  },
  {
    question: "What is the main ingredient in guacamole?",
    options: ["Avocado", "Tomato", "Onion", "Pepper"],
    correctAnswers: ["Avocado"],
    difficulty: "hard",
  },
  {
    question: "Who is known for the discovery of gravity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Niels Bohr",
    ],
    correctAnswers: ["Isaac Newton"],
    difficulty: "hard",
  },
  {
    question: "What is the term for animals that are active at night?",
    options: ["Nocturnal", "Diurnal", "Crepuscular", "Cathemeral"],
    correctAnswers: ["Nocturnal"],
    difficulty: "hard",
  },

  // Hardcore Questions
  {
    question:
      "What is the name of the first artificial satellite launched into space?",
    options: ["Sputnik", "Apollo", "Vostok", "Voyager"],
    correctAnswers: ["Sputnik"],
    difficulty: "hardcore",
  },
  {
    question: "Who developed the first successful polio vaccine?",
    options: ["Jonas Salk", "Albert Sabin", "Louis Pasteur", "Edward Jenner"],
    correctAnswers: ["Jonas Salk"],
    difficulty: "hardcore",
  },
  {
    question: "What is the largest known star in the universe?",
    options: ["UY Scuti", "Betelgeuse", "VY Canis Majoris", "Antares"],
    correctAnswers: ["UY Scuti"],
    difficulty: "hardcore",
  },
  {
    question: "What is the Schrödinger equation used to describe?",
    options: [
      "Quantum mechanics",
      "Relativity",
      "Classical mechanics",
      "Thermodynamics",
    ],
    correctAnswers: ["Quantum mechanics"],
    difficulty: "hardcore",
  },
  {
    question: "What is the significance of the Higgs boson particle?",
    options: [
      "It gives mass to other particles",
      "It conducts electricity",
      "It is a form of dark matter",
      "It is the heaviest particle known",
    ],
    correctAnswers: ["It gives mass to other particles"],
    difficulty: "hardcore",
  },

  // More Questions
  // Easy
  {
    question: "What color is the sky on a clear day?",
    options: ["Blue", "Green", "Red", "Yellow"],
    correctAnswers: ["Blue"],
    difficulty: "easy",
  },
  {
    question: "What is the name of the fairy in Peter Pan?",
    options: ["Tinkerbell", "Cinderella", "Snow White", "Aurora"],
    correctAnswers: ["Tinkerbell"],
    difficulty: "easy",
  },
  {
    question: "Which animal is known as man's best friend?",
    options: ["Dog", "Cat", "Rabbit", "Hamster"],
    correctAnswers: ["Dog"],
    difficulty: "easy",
  },
  {
    question: "What do bees collect from flowers?",
    options: ["Nectar", "Pollen", "Honey", "Wax"],
    correctAnswers: ["Nectar"],
    difficulty: "easy",
  },
  {
    question: "Which animal is the largest land mammal?",
    options: ["Elephant", "Giraffe", "Hippo", "Rhino"],
    correctAnswers: ["Elephant"],
    difficulty: "easy",
  },

  // Normal
  {
    question:
      "Which organ is responsible for pumping blood throughout the body?",
    options: ["Heart", "Liver", "Lung", "Kidney"],
    correctAnswers: ["Heart"],
    difficulty: "normal",
  },
  {
    question: "What is the boiling point of water in Celsius?",
    options: ["100", "90", "80", "120"],
    correctAnswers: ["100"],
    difficulty: "normal",
  },
  {
    question: "What is the primary ingredient in hummus?",
    options: ["Chickpeas", "Lentils", "Beans", "Peas"],
    correctAnswers: ["Chickpeas"],
    difficulty: "normal",
  },
  {
    question: "How many colors are in a rainbow?",
    options: ["7", "6", "5", "8"],
    correctAnswers: ["7"],
    difficulty: "normal",
  },
  {
    question: "Which is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Antarctica", "Kalahari"],
    correctAnswers: ["Antarctica"],
    difficulty: "normal",
  },

  // Hard
  {
    question: "What is the capital of Iceland?",
    options: ["Reykjavik", "Oslo", "Helsinki", "Copenhagen"],
    correctAnswers: ["Reykjavik"],
    difficulty: "hard",
  },
  {
    question: "What is the name of the longest river in South America?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswers: ["Amazon"],
    difficulty: "hard",
  },
  {
    question: "Who wrote the book '1984'?",
    options: [
      "George Orwell",
      "Aldous Huxley",
      "Ray Bradbury",
      "F. Scott Fitzgerald",
    ],
    correctAnswers: ["George Orwell"],
    difficulty: "hard",
  },
  {
    question: "What is the main component of the sun?",
    options: ["Hydrogen", "Helium", "Oxygen", "Carbon"],
    correctAnswers: ["Hydrogen"],
    difficulty: "hard",
  },
  {
    question: "Which chemical element has the symbol 'Au'?",
    options: ["Gold", "Silver", "Iron", "Copper"],
    correctAnswers: ["Gold"],
    difficulty: "hard",
  },

  // Hardcore
  {
    question: "What is the theory that explains the origin of the universe?",
    options: [
      "Big Bang Theory",
      "String Theory",
      "Quantum Theory",
      "General Relativity",
    ],
    correctAnswers: ["Big Bang Theory"],
    difficulty: "hardcore",
  },
  {
    question: "What is the name of the largest volcano in the solar system?",
    options: ["Olympus Mons", "Mauna Loa", "Mount Everest", "Kilimanjaro"],
    correctAnswers: ["Olympus Mons"],
    difficulty: "hardcore",
  },
  {
    question: "Who formulated the laws of motion and universal gravitation?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Niels Bohr",
      "James Clerk Maxwell",
    ],
    correctAnswers: ["Isaac Newton"],
    difficulty: "hardcore",
  },
  // Easy Questions
  {
    question: "What is the main ingredient in bread?",
    options: ["Flour", "Sugar", "Salt", "Water"],
    correctAnswers: ["Flour"],
    difficulty: "easy",
  },
  {
    question: "What is the color of an emerald?",
    options: ["Green", "Red", "Blue", "Yellow"],
    correctAnswers: ["Green"],
    difficulty: "easy",
  },
  {
    question: "What type of animal is a frog?",
    options: ["Amphibian", "Reptile", "Mammal", "Bird"],
    correctAnswers: ["Amphibian"],
    difficulty: "easy",
  },
  {
    question: "What do you call a baby cat?",
    options: ["Kitten", "Puppy", "Cub", "Foal"],
    correctAnswers: ["Kitten"],
    difficulty: "easy",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    correctAnswers: ["Pacific Ocean"],
    difficulty: "easy",
  },

  // Hard Questions
  {
    question: "What is the longest river in the world?",
    options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctAnswers: ["Nile"],
    difficulty: "hard",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    correctAnswers: ["Au"],
    difficulty: "hard",
  },
  {
    question: "Who is the author of 'Pride and Prejudice'?",
    options: [
      "Jane Austen",
      "Charlotte Brontë",
      "Emily Dickinson",
      "Mary Shelley",
    ],
    correctAnswers: ["Jane Austen"],
    difficulty: "hard",
  },
  {
    question: "What is the main ingredient in chocolate?",
    options: ["Cocoa", "Sugar", "Milk", "Vanilla"],
    correctAnswers: ["Cocoa"],
    difficulty: "hard",
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
    correctAnswers: ["Antarctic"],
    difficulty: "hard",
  },

  // Hardcore Questions
  {
    question: "What is the most abundant element in the universe?",
    options: ["Hydrogen", "Oxygen", "Carbon", "Helium"],
    correctAnswers: ["Hydrogen"],
    difficulty: "hardcore",
  },
  {
    question: "What is the speed of light?",
    options: ["299,792 km/s", "150,000 km/s", "300,000 km/s", "400,000 km/s"],
    correctAnswers: ["299,792 km/s"],
    difficulty: "hardcore",
  },
  {
    question: "Which physicist developed the theory of general relativity?",
    options: [
      "Albert Einstein",
      "Isaac Newton",
      "Stephen Hawking",
      "Niels Bohr",
    ],
    correctAnswers: ["Albert Einstein"],
    difficulty: "hardcore",
  },
  {
    question: "What is the name of the galaxy that contains our solar system?",
    options: ["Milky Way", "Andromeda", "Triangulum", "Sombrero"],
    correctAnswers: ["Milky Way"],
    difficulty: "hardcore",
  },
  {
    question: "What is the largest known structure in the universe?",
    options: [
      "Hercules-Corona Borealis Great Wall",
      "Virgo Supercluster",
      "Laniakea Supercluster",
      "Great Attractor",
    ],
    correctAnswers: ["Hercules-Corona Borealis Great Wall"],
    difficulty: "hardcore",
  },

  // Easy Questions
  {
    question: "What is the currency used in the United States?",
    options: ["Dollar", "Euro", "Pound", "Yen"],
    correctAnswers: ["Dollar"],
    difficulty: "easy",
  },
  {
    question: "What is the primary ingredient in pizza?",
    options: ["Dough", "Cheese", "Tomato Sauce", "Pepperoni"],
    correctAnswers: ["Dough"],
    difficulty: "easy",
  },
  {
    question: "What is the fastest land animal?",
    options: ["Cheetah", "Lion", "Horse", "Greyhound"],
    correctAnswers: ["Cheetah"],
    difficulty: "easy",
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Skin", "Liver", "Heart", "Lung"],
    correctAnswers: ["Skin"],
    difficulty: "easy",
  },
  {
    question: "What do you call a group of wolves?",
    options: ["Pack", "Herd", "Flock", "Gaggle"],
    correctAnswers: ["Pack"],
    difficulty: "easy",
  },

  // Normal Questions
  {
    question: "Who painted 'Starry Night'?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
      "Edvard Munch",
    ],
    correctAnswers: ["Vincent van Gogh"],
    difficulty: "normal",
  },
  {
    question: "How many legs does a spider have?",
    options: ["8", "6", "4", "10"],
    correctAnswers: ["8"],
    difficulty: "normal",
  },
  // Hard Questions
  {
    question: "What is the chemical symbol for silver?",
    options: ["Ag", "Au", "Pb", "Sn"],
    correctAnswers: ["Ag"],
    difficulty: "hard",
  },
  {
    question: "Which planet is the hottest in the solar system?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswers: ["Venus"],
    difficulty: "hard",
  },
  {
    question: "Who discovered America?",
    options: [
      "Christopher Columbus",
      "Leif Erikson",
      "Ferdinand Magellan",
      "Vasco da Gama",
    ],
    correctAnswers: ["Christopher Columbus"],
    difficulty: "hard",
  },
  {
    question: "What is the currency of the European Union?",
    options: ["Euro", "Pound", "Dollar", "Yen"],
    correctAnswers: ["Euro"],
    difficulty: "hard",
  },

  // Hardcore Questions
  {
    question:
      "What is the name of the particle that is believed to give mass to other particles?",
    options: ["Higgs boson", "Photon", "Neutrino", "Gluon"],
    correctAnswers: ["Higgs boson"],
    difficulty: "hardcore",
  },
  {
    question:
      "What is the name of the theory that describes the behavior of very small particles?",
    options: [
      "Quantum Mechanics",
      "String Theory",
      "Chaos Theory",
      "Relativity",
    ],
    correctAnswers: ["Quantum Mechanics"],
    difficulty: "hardcore",
  },
  {
    question: "What is the primary function of red blood cells?",
    options: [
      "Transport oxygen",
      "Fight infection",
      "Clot blood",
      "Transport nutrients",
    ],
    correctAnswers: ["Transport oxygen"],
    difficulty: "hardcore",
  },
];
