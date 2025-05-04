"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Search, Plus, Minus } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { fadeIn, staggerContainer } from "@/lib/animation"

// FAQ categories and questions
const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is sickle cell disease?",
        answer:
          "Sickle cell disease is a group of inherited red blood cell disorders. In someone with sickle cell disease, the red blood cells become hard and sticky and look like a C-shaped farm tool called a 'sickle'. These cells can block blood flow in blood vessels, causing pain and other serious problems such as infection, acute chest syndrome, and stroke.",
      },
      {
        question: "Is sickle cell disease contagious?",
        answer:
          "No, sickle cell disease is not contagious. It is an inherited genetic condition that is passed from parents to children through genes. You cannot catch sickle cell disease from someone who has it.",
      },
      {
        question: "Who is affected by sickle cell disease?",
        answer:
          "Sickle cell disease affects millions of people worldwide. It's most common among people whose ancestors came from Africa, Mediterranean countries (such as Greece, Turkey, and Italy), the Arabian Peninsula, India, and parts of Central and South America.",
      },
      {
        question: "Can sickle cell disease be cured?",
        answer:
          "Currently, the only cure for sickle cell disease is a bone marrow or stem cell transplant. However, these procedures are risky and not an option for everyone. Research into gene therapy and other potential cures is ongoing and showing promising results.",
      },
    ],
  },
  {
    category: "Symptoms & Diagnosis",
    questions: [
      {
        question: "What are the main symptoms of sickle cell disease?",
        answer:
          "The main symptoms of sickle cell disease include pain episodes (crises), anemia (causing fatigue), frequent infections, delayed growth, and vision problems. The severity and frequency of symptoms vary widely from person to person.",
      },
      {
        question: "How is sickle cell disease diagnosed?",
        answer:
          "Sickle cell disease is diagnosed with a simple blood test. In the United States and many other countries, all newborns are screened for sickle cell disease as part of routine newborn screening. Prenatal testing is also available.",
      },
      {
        question: "What is a pain crisis?",
        answer:
          "A pain crisis, or vaso-occlusive crisis, occurs when sickled red blood cells block blood flow to tissues, causing pain. These episodes can be extremely painful and may require hospitalization. They can affect any part of the body but often occur in the chest, abdomen, joints, and bones.",
      },
      {
        question: "Can you have sickle cell disease without symptoms?",
        answer:
          "People with sickle cell trait (carriers who inherited the gene from only one parent) typically don't have symptoms. Those with certain types of sickle cell disease may have milder symptoms than others. However, most people with sickle cell disease will experience some symptoms throughout their lives.",
      },
    ],
  },
  {
    category: "Treatment & Management",
    questions: [
      {
        question: "What treatments are available for sickle cell disease?",
        answer:
          "Treatments for sickle cell disease include medications like hydroxyurea, L-glutamine, crizanlizumab, and voxelotor; pain management strategies; blood transfusions; and for some patients, bone marrow or stem cell transplantation. Treatment plans are individualized based on the patient's specific symptoms and complications.",
      },
      {
        question: "How can pain from sickle cell disease be managed?",
        answer:
          "Pain management may include over-the-counter medications like ibuprofen for mild pain, prescription pain relievers for moderate to severe pain, and non-medication approaches like heat therapy, hydration, relaxation techniques, and physical therapy. A comprehensive pain management plan should be developed with healthcare providers.",
      },
      {
        question: "What lifestyle changes can help manage sickle cell disease?",
        answer:
          "Important lifestyle adjustments include staying well-hydrated, avoiding extreme temperatures, getting regular check-ups, getting recommended vaccinations, eating a balanced diet, getting appropriate exercise, and learning stress management techniques.",
      },
      {
        question: "When should someone with sickle cell disease go to the emergency room?",
        answer:
          "Seek immediate medical attention for: fever of 101.5°F (38.5°C) or higher, difficulty breathing, severe pain that doesn't respond to home management, sudden vision changes, severe headache, prolonged painful erection (priapism), sudden weakness, especially on one side of the body, or seizures.",
      },
    ],
  },
  {
    category: "Living With Sickle Cell",
    questions: [
      {
        question: "Can women with sickle cell disease have healthy pregnancies?",
        answer:
          "Yes, women with sickle cell disease can have healthy pregnancies, but they are considered high-risk and require specialized care. Pregnancy can increase the frequency of pain crises and other complications. Close monitoring by healthcare providers experienced in both sickle cell disease and high-risk obstetrics is essential.",
      },
      {
        question: "How does sickle cell disease affect daily life?",
        answer:
          "Sickle cell disease can affect many aspects of daily life, including energy levels, ability to participate in certain activities, school or work attendance, and emotional wellbeing. However, with proper management, many people with sickle cell disease lead full, active lives.",
      },
      {
        question: "Are there support groups for people with sickle cell disease?",
        answer:
          "Yes, there are many support groups for people with sickle cell disease and their families. These groups provide emotional support, practical advice, and information about the condition. Contact your healthcare provider, local hospital, or organizations like the Sickle Cell Disease Association of America to find support groups in your area.",
      },
      {
        question: "Can children with sickle cell disease participate in sports?",
        answer:
          "Many children with sickle cell disease can participate in sports, but precautions should be taken. Consult with your child's healthcare provider about which activities are appropriate. Ensure proper hydration, avoid overexertion, and be cautious in extreme temperatures. Some high-intensity or high-altitude activities may need to be avoided.",
      },
    ],
  },
  {
    category: "Research & Advances",
    questions: [
      {
        question: "What new treatments for sickle cell disease are being developed?",
        answer:
          "Research into new treatments is ongoing and includes gene therapy approaches to correct the genetic mutation, new medications to prevent sickling or address specific complications, improved bone marrow transplant procedures, and CRISPR gene editing technology. Several clinical trials are currently underway.",
      },
      {
        question: "How can I participate in sickle cell disease research?",
        answer:
          "You can participate by joining clinical trials, contributing to patient registries, participating in surveys and interviews, or donating blood samples for research. Speak with your healthcare provider about research opportunities or visit ClinicalTrials.gov to search for studies.",
      },
      {
        question: "Is gene therapy a promising treatment for sickle cell disease?",
        answer:
          "Yes, gene therapy shows significant promise for sickle cell disease. Early clinical trials have demonstrated positive results, with some patients experiencing complete resolution of symptoms after treatment. Research is ongoing to make these approaches safer, more effective, and more widely available.",
      },
      {
        question: "How close are we to a cure for sickle cell disease?",
        answer:
          "While bone marrow transplants can already cure sickle cell disease for some patients, researchers are making significant progress toward developing more widely accessible cures. Gene therapy approaches are showing promising results in clinical trials, and some experts believe that curative therapies could become more widely available within the next decade.",
      },
    ],
  },
]

export default function FAQClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({})
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Toggle question expansion
  const toggleQuestion = (category: string, index: number) => {
    const key = `${category}-${index}`
    setExpandedQuestions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  // Filter questions based on search term
  const filteredFAQs = faqData
    .map((category) => {
      const filteredQuestions = category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      return {
        ...category,
        questions: filteredQuestions,
      }
    })
    .filter((category) => category.questions.length > 0)

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <motion.div className="mx-auto max-w-4xl space-y-12" initial="hidden" animate="show" variants={staggerContainer}>
        <motion.div className="space-y-4 text-center" variants={fadeIn("up")}>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-green">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about sickle cell disease, its management, and available resources.
          </p>
        </motion.div>

        <motion.div className="relative" variants={fadeIn("up", 0.1)}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for questions or keywords..."
              className="pl-10 py-6 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <motion.div className="space-y-8" variants={fadeIn("up", 0.2)}>
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null ? "bg-brand-green text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Categories
            </button>
            {faqData.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.category
                    ? "bg-brand-green text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="space-y-8">
            {(activeCategory ? filteredFAQs.filter((c) => c.category === activeCategory) : filteredFAQs).map(
              (category) => (
                <div key={category.category} className="space-y-4">
                  <h2 className="text-2xl font-bold text-brand-green border-b border-brand-green/20 pb-2">
                    {category.category}
                  </h2>
                  <div className="space-y-2">
                    {category.questions.map((faq, index) => {
                      const key = `${category.category}-${index}`
                      const isExpanded = expandedQuestions[key]

                      return (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleQuestion(category.category, index)}
                            className={`w-full flex items-center justify-between p-4 text-left font-medium ${
                              isExpanded ? "bg-brand-green/5" : "hover:bg-gray-50"
                            }`}
                          >
                            <span>{faq.question}</span>
                            <span className="flex-shrink-0 ml-2">
                              {isExpanded ? (
                                <Minus className="h-5 w-5 text-brand-green" />
                              ) : (
                                <Plus className="h-5 w-5 text-brand-green" />
                              )}
                            </span>
                          </button>

                          {isExpanded && (
                            <div className="p-4 bg-gray-50 border-t border-gray-200">
                              <p className="text-gray-700">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ),
            )}

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500 text-lg mb-4">No questions found matching your search.</p>
                <Button onClick={() => setSearchTerm("")} className="bg-brand-green hover:bg-brand-green/90">
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="bg-brand-green/5 p-8 rounded-xl border border-brand-green/20 text-center"
          variants={fadeIn("up", 0.3)}
        >
          <h2 className="text-2xl font-bold text-brand-green mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, our team is here to help. Contact us directly and
            we'll get back to you as soon as possible.
          </p>
          <Link href="/contact">
            <Button className="bg-brand-green hover:bg-brand-green/90">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
