angular.module("cv", []).controller("cv", function($scope) {
  $scope.cv = {
    "label": {"en" : "Resume", "fr":"CV"},
    "version": "0.2",
    "lang":["en","fr"],
    "details": [
      {
        "label": {"en": "Studies", "fr": "Études"},
        "details": 
        [
          {"start_date": 2013, "end_date": 2013 , "label" : 
            {
              "en": "French teaching competitive exam CAPES.",
              "fr": "Examen du CAPES : mathématiques."
            }
          },
          {"start_date": 2008, "end_date": 2012 , "label" : 
            {
              "en": "IT and telecommunications masters degree at ENS Rennes.",
              "fr": "Master recherche en Informatique et télécommunications, ENS Rennes."
            }
          },
          {"start_date": 2011, "end_date": 2011 , "label" : 
            {
              "en": "Masters degree in research in computer science, with lower second class honours.",
              "fr": "Master 2 recherche en informatique, mention assez bien."
            }
          },
          {"start_date": 2009, "end_date": 2009 , "label" : 
            {
              "en": "Bachelors degree in computer science, with upper second class honours.",
              "fr": "Licence en informatique, mention bien."
            }
          },
          {"start_date": 2008, "end_date": 2008 , "label" : 
            {
              "en": "Admitted to several French Grandes Écoles, including Télécom Paris-Tech and Mines.",
              "fr": "Admis à plusieurs Grandes Écoles, dont Télécom Paris-Tech et Écoles des Mines."
            }
          },
          {"start_date": 2005, "end_date": 2008 , "label" : 
            {
              "en": "Intensive classes, training for French Grandes Écoles competitive exams, in Lycée Chaptal, Paris.",
              "fr": "Classes préparatoires, MPSI/MP* au Lycée Chaptal, Paris."
            }
          }
        ]
      },
      {
        "label": {"en": "Experiences", "fr": "Expérience"},
        "details": 
        [
          {"start_date": 2012, "end_date": 2017 ,
            "label" : 
            {
              "en": "Teaching mathematics and physics, first in France then in Finland.",
              "fr": "Enseignement des mathématique et de la physique en France puis en Finlande."
            },
            "details": 
            [
              { "label":{"en" : "Schools", "fr": "Établissements"},
                "details":
                [
                  { "label" : {"en": "HRSK, Helsinki, Finland", "fr":"HRSK, Helsinki, Finland"},
                    "start_date": 2015, "end_date" : 2017},
                  { "label" : {"en": "Collège Albert Camus, Meaux, France", "fr":"Collège Albert Camus, Meaux, France"},
                    "start_date": 2014, "end_date" : 2015},
                  { "label" : {"en": "Lycée Jean Vilar, Meaux, France", "fr":"Lycée Jean Vilar, Meaux, France"},
                    "start_date": 2013, "end_date" : 2014},
                  { "label" : {"en": "Lycée de l'Escaut, Valenciennes, France", "fr":"Lycée de l'Escaut, Valenciennes, France"},
                    "start_date": 2013, "end_date" : 2013}
                ]
              }
            ]
          },
          {"start_date": 2011, "end_date": 2011 ,
              "label" : 
            {
              "en": "Internship: simulating the communication between processors and memories in a massively parallel architecture (IRISA, Rennes, France).",
                "fr": "Stage : simulation de la communication entre les processeurs et la mémoire dans une architecture massivement parallèle (IRISA, Rennes, France)."
            }
          },
          {"start_date": 2010, "end_date": 2010 ,
            "label" : 
            {
              "en": "Internship: porting a DNA alignment algorithme to GPU using CUDA (NTU, Singapore).",
              "fr": "Stage : implémentation en CUDA sur carte graphique d'un algorithme d'alignement d'ADN (NTU, Singapore)."
            }
          },
          {"start_date": 2009, "end_date": 2009 ,
            "label" : 
            {
              "en": "Internship: study of the electrical consumption of algorithms using VHDL (IRISA, Lannion, France).",
              "fr": "Stage : étude de la consommation électrique d'algorithmes avec VHDL (IRISA, Lannion, France)."
            }
          }

        ]
      },
      {
        "label" : {"en":"Competences", "fr":"Compétences"},
        "details" : 
        [
          {"label" : { "en" : "Languages", "fr" : "Langues" },
            "details" : 
            [
              {
                "label" : { "en" : "French (native)", "fr" : "Français (langue maternelle)" }
              },
              {
                "label" : { "en" : "English: fluent (TOEIC 990).", "fr" : "Anglais : courant (TOEIC 990)" }
              },
              {
                "label" : { "en" : "Finnish (basic)", "fr" : "Finnois (basique)" }
              }
            ]
          },
          {"label" : 
            {
              "en" : "Computing",
              "fr" : "Informatique"
            },
            "details" :
            [
              { "label": 
                {"en" : "Python", "fr" : "Python"}
              },
              { "label": 
                {"en" : "C/C++", "fr" : "C/C++"}
              },
              { "label": 
                {"en" : "Java", "fr" : "Java"}
              },
              { "label": 
                {"en" : "OCaml", "fr" : "OCaml"}
              },
              { "label": 
                {"en" : "Javascript", "fr" : "Javascript"}
              },
              { "label": 
                {"en" : "HTML", "fr" : "HTML"}
              },
              { "label": 
                {"en" : "CSS", "fr" : "CSS"}
              }
            ]
          },
          {"label" : 
            {
              "en" : "Other",
              "fr" : "Autres"
            },
            "details" :
            [
              { "label": { "en" : "Linux", "fr" : "Linux"}},
              { "label": { "en" : "LaTeX", "fr" : "LaTeX"}},
            ]
          }
        ]
      },
      {
        "label" : {"en":"Activities", "fr":"Loisirs"},
        "details":
        [
          {"label" : 
            {
              "en" : "Tuning my workspace and software to my taste for more efficient working (Vim, own server, ...)",
              "fr" : "Adapter my espace de travail et mes logiciels à mon goût pour travailler plus efficacement (Vim, serveur personnel, ...)"
            }
          },
          {"label" : 
            {
              "en" : "Making and enjoying food.",
              "fr" : "Cuisiner et apprécier la bonne nourriture."
            }
          },
          {"label" : 
            {
              "en" : "Playing video games.",
              "fr" : "Jouer à des jeux vidéos."
            }
          },
          {"label" : 
            {
              "en" : "Spending quality family time.",
              "fr" : "Passer du bon temps en famille."
            }
          }
        ]
      }
    ]
  }
});
