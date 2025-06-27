import React from "react";
import { FaSeedling, FaLeaf, FaPagelines, FaTree } from "react-icons/fa";

const Facts = () => {
  return (
    <div className="max-w-3xl mx-auto my-12 p-6 rounded-xl bg-gradient-to-br from-green-50 via-lime-100 to-green-200 shadow-lg">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10 flex items-center justify-center gap-2">
        <FaSeedling className="text-lime-600" /> Garden Fun Facts 🌼
      </h1>

      {[
        {
          question: "Why do sunflowers turn their heads?",
          answer:
            "Young sunflowers exhibit heliotropism — they follow the sun from east to west throughout the day to maximize photosynthesis.",
        },
        {
          question: "Are banana plants actually trees?",
          answer:
            "Nope! Banana plants are technically herbs because their stem is not woody like a tree’s.",
        },
        {
          question: "Can talking to your plants help them grow?",
          answer:
            "Yes! Sound vibrations and carbon dioxide from your breath can promote plant growth.",
        },
        {
          question: "Why were tomatoes once called 'poison apples'?",
          answer:
            "In the 1700s, tomatoes were blamed for poisoning aristocrats who ate them on lead plates.",
        },
        {
          question: "What’s the fastest-growing plant in the world?",
          answer:
            "Bamboo! Some species can grow up to 35 inches in a single day under the right conditions.",
        },
        {
          question: "Why are earthworms a gardener’s best friend?",
          answer:
            "Earthworms aerate the soil and break down organic matter, enriching the soil naturally.",
        },
        {
          question: "Did carrots always come in orange?",
          answer:
            "No! Carrots were originally purple, red, and white. Orange ones were cultivated later in the Netherlands.",
        },
        {
          question: "Can vegetables regrow from kitchen scraps?",
          answer:
            "Absolutely! You can regrow green onions, lettuce, and celery just by placing the roots in water.",
        },
        {
          question: "Do plants talk to each other?",
          answer:
            "Yes! Plants send chemical signals through the air and roots to warn neighbors of danger like pests.",
        },
        {
          question: "Does lavender really repel bugs?",
          answer:
            "Yes! Lavender naturally keeps away mosquitoes, moths, and flies — and adds a lovely scent to gardens.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="collapse collapse-plus border border-green-300 bg-white mb-3 rounded-xl hover:shadow-md transition duration-200"
        >
          <input type="radio" name="garden-accordion" defaultChecked={index === 0} />
          <div className="collapse-title font-semibold text-green-800 flex items-center gap-2 text-lg">
            <FaLeaf className="text-lime-500" /> {item.question}
          </div>
          <div className="collapse-content text-sm text-gray-700 leading-relaxed">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facts;
