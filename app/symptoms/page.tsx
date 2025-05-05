import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Symptoms & Diagnosis | Soundminds Sicklecell-Association",
  description: "Learn about the symptoms of sickle cell disease and how it is diagnosed.",
}

export default function SymptomsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700 dark:text-blue-300">
            Symptoms & Diagnosis
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Recognizing the signs of sickle cell disease and understanding the diagnostic process.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Healthcare professional examining blood samples"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6 text-lg">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Common Symptoms</h2>
          <p>
            Symptoms of sickle cell disease usually begin in early childhood, typically after 4 months of age. The
            severity and frequency of symptoms vary widely from person to person. Some people have mild symptoms while
            others are frequently hospitalized for more serious complications.
          </p>

          <div className="grid gap-6 md:grid-cols-2 my-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Pain Crisis</h3>
                <p>
                  Periodic episodes of pain, known as pain crises or vaso-occlusive crises, are the most common symptom.
                  These occur when sickled red blood cells block blood flow to tissues, causing pain that can be severe.
                  Pain can occur anywhere in the body but often affects the chest, abdomen, joints, and bones.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Anemia</h3>
                <p>
                  Sickle cells break down faster than normal red blood cells, which leads to anemia. Symptoms include
                  fatigue, paleness, shortness of breath, dizziness, headaches, and coldness in the hands and feet.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Swelling of Hands and Feet</h3>
                <p>
                  Swelling in the hands and feet, often accompanied by fever, is commonly one of the first symptoms of
                  sickle cell disease in babies. This occurs because sickled red blood cells block blood flow out of the
                  hands and feet.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Frequent Infections</h3>
                <p>
                  People with sickle cell disease are more vulnerable to infections because the disease can damage the
                  spleen, an organ that fights infection. Children are especially susceptible to bacterial infections
                  that can be life-threatening.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Other Symptoms and Complications</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Delayed Growth:</strong> Children with sickle cell disease often grow more slowly and reach
              puberty later than their peers.
            </li>
            <li>
              <strong>Vision Problems:</strong> Sickled cells can block blood vessels in the eye, potentially leading to
              vision problems or even blindness.
            </li>
            <li>
              <strong>Acute Chest Syndrome:</strong> A serious complication characterized by chest pain, fever, and
              difficulty breathing.
            </li>
            <li>
              <strong>Stroke:</strong> Sickled cells can block blood flow to the brain, causing a stroke. This can
              result in learning problems, disability, or even death.
            </li>
            <li>
              <strong>Priapism:</strong> A painful, prolonged erection that can occur when sickled cells block blood
              vessels in the penis.
            </li>
            <li>
              <strong>Organ Damage:</strong> Over time, sickle cell disease can damage organs such as the liver,
              kidneys, and spleen.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Diagnosis</h2>
          <p>
            In the United States and many other countries, all newborns are screened for sickle cell disease as part of
            routine newborn screening. Early diagnosis is crucial for implementing preventive measures and treatment.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-blue-700 dark:text-blue-300">Diagnostic Tests</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Blood Tests:</strong> A complete blood count (CBC) can reveal anemia, and a blood smear may show
              sickle-shaped cells.
            </li>
            <li>
              <strong>Hemoglobin Electrophoresis:</strong> This test identifies the types of hemoglobin present in the
              blood and can diagnose sickle cell disease and trait.
            </li>
            <li>
              <strong>High-Performance Liquid Chromatography (HPLC):</strong> Another method to identify different types
              of hemoglobin.
            </li>
            <li>
              <strong>Genetic Testing:</strong> DNA analysis can confirm the diagnosis and identify specific mutations.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2 text-blue-700 dark:text-blue-300">Prenatal Diagnosis</h3>
          <p>Sickle cell disease can be diagnosed before birth through procedures such as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Chorionic Villus Sampling (CVS):</strong> Usually performed at 10-12 weeks of pregnancy.
            </li>
            <li>
              <strong>Amniocentesis:</strong> Usually performed at 15-20 weeks of pregnancy.
            </li>
          </ul>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/treatment">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Learn About Treatment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
