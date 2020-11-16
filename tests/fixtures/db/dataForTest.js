import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import uid from "../../../app/helpers/uuid";
import Text from "../../../app/models/text";

const textOne = {
  _id: new mongoose.Types.ObjectId(),
  text_id: "TXT1605536ZSH5K1429508",
  content: [
    {
      lang: "fr",
      text: "En droit, la loi  est une règle juridique",
      is_default: 1,
      _id: "5faff6bf8787d94cb78e4be7"
    },
    {
      lang: "en",
      text:
        "Legislation is law which has been promulgated by a legislature or other governing body or the process of making it.",
      is_default: 0,
      _id: "5faff6bf8787d94cb78e4be8"
    },
    {
      lang: "ar",
      text:
        "مجموعة القواعد العامة المجردة الملزمة الصادرة عن السلطة العامة المختصة في الدولة التي تبيح أو تحظر أو تنظم حق أو مجموعة حقوق",
      is_default: 0,
      _id: "5faff6bf8787d94cb78e4be9"
    }
  ]
};

const textTwo = {
  _id: new mongoose.Types.ObjectId(),
  content: [
    {
      lang: "fr",
      text:
        "Le Code de la famille algérien (arabe : قانون الأسرة) adopté le 9 juin 1984 par l'Assemblée populaire nationale, regroupe les règles qui déterminent les relations familiales en Algérie.",
      is_default: 1,
      _id: "5fb171e2f63bcf19b53fc8db"
    },
    {
      lang: "en",
      text:
        "The Algerian Family Code (French: Code de Famille, Arabic: قانون الأسرة‎), enacted on June 9, 1984, specifies the laws relating to familial relations in Algeria. It includes strong elements of Islamic law which have brought it praise from Islamists and condemnation from secularists and feminists.",
      is_default: 0,
      _id: "5fb171e2f63bcf19b53fc8dc"
    },
    {
      lang: "ar",
      text:
        "يحدد قانون الأسرة الجزائري ، الصادر في 9 يونيو 1984، القوانين المتعلقة بالعلاقات الأسرية في الجزائر، ويشمل عناصر قوية من الشريعة الإسلامية التي أثنت عليها من الإسلاميين وإدانة من العلمانيين والنسويين.",
      is_default: 0,
      _id: "5fb171e2f63bcf19b53fc8dd"
    }
  ],
  text_id: "TXT1605464HVRPQL546587"
};

const setupDatabase = async () => {
  await new Text(textOne).save();
};

module.exports = {
  textOne,
  textTwo,
  setupDatabase
};
