import {Questions} from "../inf/QuestionInf";


// const yaml = require('js-yaml');
// export const QuestionList = yaml.load("assets/pos/SRS.yaml") as Questions;
// const text = readFile("/home/eric/git/AceEffects/assets/pos/SRS.json", 'utf-8');

export const QuestionList: Questions =
    {
        "question_types": [
            {
                "code": "SRS",
                "description": "Session Rating Scale",
                "version": 1.0,
                "questions": [
                    {
                        "seq": 1,
                        "title": "Relationship",
                        "minDesc": "I do NOT feel heard, understood, and respected.",
                        "maxDesc": "I DO feel heard, understood, and respected."
                    },
                    {
                        "seq": 2,
                        "title": "Goals and Topics",
                        "minDesc": "We did NOT work on or talk about what I wanted to work on and talk about.",
                        "maxDesc": "We DID work on or talk about what I wanted to work on and talk about."
                    },
                    {
                        "seq": 3,
                        "title": "Approach or Method",
                        "minDesc": "The therapist's approach is NOT a good fit for me.",
                        "maxDesc": "The therapist's approach IS a good fit for me."
                    },
                    {
                        "seq": 4,
                        "title": "Overall",
                        "minDesc": "There was something missing in the session today.",
                        "maxDesc": " Overall, today's session was right for me."
                    }
                ]
            }
        ]
    }
;