const questions = [
  {
    category: "Sports",
    qna: [
      {
        q: "Which country won the Cricket World Cup 2023?",
        a: "Australia",
        op: ["India", "Australia", "South Africa", "New Zealand"],
        type: "string",
      },
      {
        q: "Who holds the record of most runs in a single edition of a Cricket World Cup?",
        a: "Virat Kohli",
        op: ["Sachin Tendulkar", "Virat Kohli", "Rachin Ravindra", "Rohit Sharma"],
        type: "string",
      },
      {
        q: "Which country has won the most FIFA World Cups?",
        a: "Brazil",
        op: ["Germany", "Brazil", "Argentina", "Italy"],
        type: "string",
      },
      {
        q: "Who holds the record for most Olympic gold medals?",
        a: "Michael Phelps",
        op: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"],
        type: "string",
      }
    ],
  },
  {
    category: "Geography",
    qna: [
      {
        q: "Which of the following is a landlocked country?",
        a: "Afghanistan",
        op: ["Pakistan", "Brazil", "India", "Afghanistan"],
        type: "string",
      },
      {
        q: "How many states in India does the Tropic of Cancer pass through?",
        a: 8,
        op: [7, 8, 9, 5],
        type: "string",
      },
      {
        q: "Which is the longest river in the world?",
        a: "Nile",
        op: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        type: "string",
      },
      {
        q: "Which is the largest desert in the world?",
        a: "Antarctic Desert",
        op: ["Sahara", "Gobi", "Kalahari", "Antarctic Desert"],
        type: "string",
      }
    ],
  },
  {
    category: "Programming",
    qna: [
      {
        q: "In most programming languages, the starting index of an array is ...?",
        a: 0,
        op: [0, 1, "undefined", "null"],
        type: "string",
      },
      {
        q: "Which of the following is not a programming language?",
        a: "Diamond",
        op: ["Perl", "Ruby", "Diamond", "Python"],
        type: "string",
      },
      {
        q: "What is the output of `console.log(typeof null)` in JavaScript?",
        a: "object",
        op: ["null", "undefined", "object", "string"],
        type: "string",
      },
      {
        q: "Which programming language is known as the 'mother of all languages'?",
        a: "C",
        op: ["C", "Java", "Python", "Assembly"],
        type: "string",
      }
    ],
  },
  {
    category: "Current Affairs",
    qna: [
      {
        q: "Which country hosted the G20 summit in 2023?",
        a: "India",
        op: ["India", "Brazil", "China", "Russia"],
        type: "string",
      },
      {
        q: "Which of the states in India did not have a legislative election in 2023?",
        a: "Uttar Pradesh",
        op: ["Uttar Pradesh", "Punjab", "Rajasthan", "Chhattisgarh"],
        type: "string",
      },
      {
        q: "Who won the Nobel Prize in Physics in 2023?",
        a: "Pierre Agostini, Ferenc Krausz, and Anne L'Huillier",
        op: [
          "Roger Penrose",
          "Pierre Agostini, Ferenc Krausz, and Anne L'Huillier",
          "Albert Fert",
          "Andrea Ghez"
        ],
        type: "string",
      },
      {
        q: "Which country launched the first commercial moon lander in 2024?",
        a: "Japan",
        op: ["USA", "Russia", "China", "Japan"],
        type: "string",
      }
    ],
  },
  {
    category: "Image Queries",
    qna: [
      {
        q: "Identify the correct image.",
        a: "image/image1.webp",
        op: ["image/image1.webp", "image/image2.webp", "image/image3.webp", "image/image4.webp"],
        type: "image",
      },
      {
        q: "Find the matching image.",
        a: "image/image3.webp",
        op: ["image/image1.webp", "image/image2.webp", "image/image3.webp", "image/image4.webp"],
        type: "image",
      },
      {
        q: "Which image represents the concept correctly?",
        a: "image/image2.webp",
        op: ["image/image1.webp", "image/image2.webp", "image/image3.webp", "image/image4.webp"],
        type: "image",
      },
      {
        q: "Choose the correct visual representation.",
        a: "image/image4.webp",
        op: ["image/image1.webp", "image/image2.webp", "image/image3.webp", "image/image4.webp"],
        type: "image",
      }
    ],
  }
];

export default questions;
