import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Treatment Options | SickleCell Info",
  description: "Learn about the available treatments and medications for sickle cell disease.",
}

export default function TreatmentPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700 dark:text-blue-300">
            Treatment Options
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Exploring available treatments, medications, and therapeutic approaches for sickle cell disease.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Medical treatment for sickle cell disease"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-lg">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Treatment Approaches</h2>
          <p>
            Treatment for sickle cell disease aims to relieve pain, prevent infections, organ damage, and strokes, and
            control complications. While there is no widely available cure for most patients, treatments have improved
            greatly over the past few decades.
          </p>

          <div className="grid gap-6 md:grid-cols-2 my-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Medications</h3>
                <p className="mb-4">Several medications can help manage sickle cell disease:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Hydroxyurea:</strong> Reduces the frequency of painful crises and might reduce the need for
                    blood transfusions and hospitalizations.
                  </li>
                  <li>
                    <strong>L-glutamine oral powder:</strong> Reduces pain crises in people with sickle cell disease.
                  </li>
                  <li>
                    <strong>Crizanlizumab:</strong> Helps prevent pain crises by blocking cells from sticking to blood
                    vessel walls.
                  </li>
                  <li>
                    <strong>Voxelotor:</strong> Helps hemoglobin hold onto more oxygen, reducing sickling of red blood
                    cells.
                  </li>
                  <li>
                    <strong>Pain medications:</strong> Over-the-counter and prescription pain relievers help manage pain
                    during crises.
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Blood Transfusions</h3>
                <p>
                  Regular blood transfusions can help reduce the risk of stroke and other complications by increasing
                  the number of normal red blood cells in circulation. This helps deliver oxygen more effectively
                  throughout the body and reduces the percentage of sickle cells. However, frequent transfusions can
                  lead to iron overload, requiring additional treatment to remove excess iron.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Curative Approaches</h2>

          <h3 className="text-xl font-bold mt-6 mb-2 text-blue-700 dark:text-blue-300">Stem Cell Transplantation</h3>
          <p>
            Bone marrow or stem cell transplantation is currently the only cure for sickle cell disease. It involves
            replacing bone marrow affected by sickle cell disease with healthy bone marrow from a donor without the
            disease. However, finding a suitable donor can be difficult, and the procedure carries significant risks,
            including life-threatening complications. It's typically considered only for people with severe symptoms or
            complications.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2 text-blue-700 dark:text-blue-300">Gene Therapy</h3>
          <p>
            Gene therapy for sickle cell disease is an area of active research. This approach aims to modify or replace
            the defective gene responsible for the disease. Several clinical trials are underway, and early results have
            been promising, but this treatment is not yet widely available.
          </p>

          <h2 className="text-2xl font-bold mt-8 text-blue-700 dark:text-blue-300">Managing Complications</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Infection Prevention:</strong> Vaccinations, antibiotics, and prompt treatment of suspected
              infections.
            </li>
            <li>
              <strong>Stroke Prevention:</strong> Regular transcranial Doppler ultrasound screening in children and
              blood transfusions for those at high risk.
            </li>
            <li>
              <strong>Pain Management:</strong> Comprehensive approach including medications, hydration, heat
              application, and relaxation techniques.
            </li>
            <li>
              <strong>Acute Chest Syndrome Treatment:</strong> Oxygen, antibiotics, pain medication, and possibly blood
              transfusions.
            </li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Emerging Treatments</h3>
            <p>Research into new treatments for sickle cell disease is ongoing. Some promising areas include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>New medications that target different aspects of the disease process</li>
              <li>Improved gene therapy techniques</li>
              <li>Novel approaches to stem cell transplantation that may make it available to more patients</li>
              <li>CRISPR gene editing technology to correct the genetic mutation</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/management">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Learn About Management
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
