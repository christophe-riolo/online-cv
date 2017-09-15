angular.module("cv", []).controller("cv", function($scope) {
  // Description of the author
  $scope.description = {
    label : {
      en: "Looking for a job as a software engineer or as a teacher.",
      fr: "En recherche d'un travail de programmeur ou d'enseignant."
    },
    details : [
      {url: {before: "E-mail : ", label: "christophe.riolo@ens-cachan.org", target: "mailto:christophe.riolo@ens-cachan.org"} },
      {label : {en: "Phone: (+358)41-366 3211", fr: "Téléphone : (+358)41-366 3211"}}
    ]
  };

  // Meta information
  $scope.meta = {
    version: "1.2",
    author: "Christophe Riolo"
  }

  // The following are for the CV itself

  // To keep track of how deeply nested we are
  $scope.depth = 0;

  // To produce a label depending on the language or not
  $scope.makeLabel = function (label,lang) {
    switch (typeof(label)) {
      case "string": return label;
      case "object": return label[lang];
      default: return "";
    };
  }

  // To produce an anchor text depending on presence of label or not
  $scope.makeUrlText = function(url, lang) {
    if (url.label) {
      return makeLabel(url.label, lang);
    } else {
      return url.target;
    };
  };

  // The actual CV values
  $scope.cv = {
    label: {en : "Resume", fr:"CV"},
    lang:["en","fr"],
    details: [
      {
        label: {en: "Studies", fr: "Études"},
        details: 
        [
          {start_date: 2013, end_date: 2013 , label : 
            {
              en: "French teaching competitive exam CAPES.",
              fr: "Examen du CAPES : mathématiques."
            }
          },
          {start_date: 2008, end_date: 2012 , label : 
            {
              en: "IT and telecommunications masters degree at ENS Rennes.",
              fr: "Master recherche en Informatique et télécommunications, ENS Rennes."
            }
          },
          {start_date: 2011, end_date: 2011 , label : 
            {
              en: "Masters degree in research in computer science, with lower second class honours.",
              fr: "Master 2 recherche en informatique, mention assez bien."
            }
          },
          {start_date: 2009, end_date: 2009 , label : 
            {
              en: "Bachelors degree in computer science, with upper second class honours.",
              fr: "Licence en informatique, mention bien."
            }
          },
          {start_date: 2008, end_date: 2008 , label : 
            {
              en: "Admitted to several French Grandes Écoles, including Télécom Paris-Tech and Mines.",
              fr: "Admis à plusieurs Grandes Écoles, dont Télécom Paris-Tech et Écoles des Mines."
            }
          },
          {start_date: 2005, end_date: 2008 , label : 
            {
              en: "Intensive classes, training for French Grandes Écoles competitive exams, in Lycée Chaptal, Paris.",
              fr: "Classes préparatoires, MPSI/MP* au Lycée Chaptal, Paris."
            }
          }
        ]
      },
      {
        label: {en: "Experiences", fr: "Expérience"},
        details: 
        [
          {start_date: 2012, end_date: 2017 ,
            label : 
            {
              en: "Teaching mathematics and physics, first in France then in Finland.",
              fr: "Enseignement des mathématique et de la physique en France puis en Finlande."
            },
            details: 
            [
              { label:{en : "Schools", fr: "Établissements"},
                details:
                [
                  { label : "HRSK, Helsinki, Finland",
                    start_date: 2015, end_date : 2017},
                  { label : "Collège Albert Camus, Meaux, France",
                    start_date: 2014, end_date : 2015},
                  { label : "Lycée Jean Vilar, Meaux, France",
                    start_date: 2013, end_date : 2014},
                  { label : "Lycée de l'Escaut, Valenciennes, France",
                    start_date: 2013, end_date : 2013}
                ]
              }
            ]
          },
          {start_date: 2011, end_date: 2011 ,
            label : 
            {
              en: "Internship: simulating the communication between processors and memories in a massively parallel architecture (IRISA, Rennes, France).",
              fr: "Stage : simulation de la communication entre les processeurs et la mémoire dans une architecture massivement parallèle (IRISA, Rennes, France)."
            }
          },
          {start_date: 2010, end_date: 2010 ,
            label : 
            {
              en: "Internship: porting a DNA alignment algorithme to GPU using CUDA (NTU, Singapore).",
              fr: "Stage : implémentation en CUDA sur carte graphique d'un algorithme d'alignement d'ADN (NTU, Singapore)."
            }
          },
          {start_date: 2009, end_date: 2009 ,
            label : 
            {
              en: "Internship: study of the electrical consumption of algorithms using VHDL (IRISA, Lannion, France).",
              fr: "Stage : étude de la consommation électrique d'algorithmes avec VHDL (IRISA, Lannion, France)."
            }
          }

        ]
      },
      {
        label : {en:"Competences", fr:"Compétences"},
        details : 
        [
          {label : { en : "Languages", fr : "Langues" },
            details : 
            [
              {
                label : { en : "French (native)", fr : "Français (langue maternelle)" }
              },
              {
                label : { en : "English: fluent (TOEIC 990).", fr : "Anglais : courant (TOEIC 990)" }
              },
              {
                label : { en : "Finnish (basic)", fr : "Finnois (basique)" }
              }
            ]
          },
          {label : 
            {
              en : "Computing",
              fr : "Informatique"
            },
            details :
            [
              { label: "Python"},
              { label: "C/C++"},
              { label: "Java"},
              { label: "OCaml"},
              { label: "Javascript"},
              { label: "HTML"},
              { label: "CSS"},
              { label: "Qt (PyQt)"}
            ]
          },
          {label : { en : "Other", fr : "Autres" },
            details :
            [
              { label: "Linux"},
              { label: "LaTeX"},
            ]
          }
        ]
      },
      {
        label : {en:"Activities", fr:"Loisirs"},
        details:
        [
          {label : 
            {
              en : "Tuning my workspace and software to my taste for more efficient working (Vim, own server, ...)",
              fr : "Adapter my espace de travail et mes logiciels à mon goût pour travailler plus efficacement (Vim, serveur personnel, ...)"
            }
          },
          {label : 
            {
              en : "Making and enjoying food.",
              fr : "Cuisiner et apprécier la bonne nourriture."
            }
          },
          {label : 
            {
              en : "Playing video games.",
              fr : "Jouer à des jeux vidéos."
            }
          },
          {label : 
            {
              en : "Spending quality family time.",
              fr : "Passer du bon temps en famille."
            }
          }
        ]
      },
      {
        label: {en:"Portfolio", fr: "Portfolio"},
        details:
        [
          {label: "Archsim",
            details: [
              {url: {target :"https://github.com/christophe-riolo/Archsim"}},
              {label :
              {en: "A simulator for a massively distributed 3D architecture (numerous processors linked through a network to numerous memories). Used to test different memory call routing algorithms.",
                fr: "Un simulateur d'architecture 3D massivement parallèle (nombreux processeurs et nombreuses mémoires reliées par un réseau). Utilisé pour tester différents algorithmes de routage de requêtes mémoires."
              }}]
          },
          {label: "Kimble",
            details: [
              {url: {target: "https://github.com/christophe-riolo/kimble"}},
              {label: {
              en: "A Kimble (Trouble) game simulator made in around 7h when applying to one job.",
              fr: "Un jeu de Trouble programmé en C++ en 7h environ pour postuler à un travail."
            }}]
          },
          {label: "Forgetit",
            details: [
              {url: {target : "https://github.com/christophe-riolo/forgetit"}},
              {label: {
              en: "A web app of todo list based on Getting Things Done (GTD), with todo.txt syntax. Personal project to get back into web coding &mdash; and access my own todo list.",
              fr: "Un application web de todo list basée sur la syntaxe todo.txt pour Getting Thigs Done (GTD). Projet personnel pour reprendre le codage web et accéder à ma todo list."
            }}]
          },
          {label: "OptiGear",
            details: [
              {url: {target : "https://github.com/christophe-riolo/OptiGear"}},
              {label: {
              en: "A Final Fantasy XIV gear optimization tool, abandonned during development as game updates rendered it obsolete.",
              fr: "Un outil d'optimisation d'équipement pour Final Fantasy XIV, rendu obsolète par des mise à jour du jeu, et abandonné en cours de développement."
            }}]
          },
          {label: "online-cv",
            details: [
              {url: {target: "https://github.com/christophe-riolo/online-cv"}},
              {label: {
              en: "The current page's code.",
              fr: "Le code de cette page."
            }}]
          },
          {label: "buddhist-well-being-pyqt5",
            details: [
              {url: {target: "https://github.com/christophe-riolo/buddhist-well-being-pyqt5"}},
              {label: {
              en: "Buddhist way of life diary application ; abandoned by owner for a new similar project.",
              fr: "Application de journal personnel bouddhiste ; abandonné par le propriétaire pour se consacerr à un projet similaire."
            }}]
          },
          {label: "pythot",
            details: [
              {url: {target: "https://github.com/christophe-riolo/pythot"}},
              {label: {
              en: "Program for education, to learn solving of first degree linear equations.",
              fr: "Programme pour apprendre à résoudre les équations linéaires du premier degré."
            }}]
          }
        ]
      }
    ]
  }
});

// vim: sw=2
