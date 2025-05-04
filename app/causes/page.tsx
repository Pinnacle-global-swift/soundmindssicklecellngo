import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Causes & Risk Factors | SickleCell Info",
  description: "Learn about the genetic causes and risk factors of sickle cell disease.",
}

export default function CausesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700 dark:text-blue-300">
            Causes & Risk Factors
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            Understanding the genetic basis and inheritance patterns of sickle cell disease.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1659535824233-966cc8de61a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="DNA helix illustration representing genetic causes"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6 text-lg">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Genetic Cause</h2>
          <p>
            Sickle cell disease is caused by a mutation in the HBB gene on chromosome 11. This gene provides
            instructions for making a protein called beta-globin, which is a component of hemoglobin. Hemoglobin is the
            protein in red blood cells that carries oxygen throughout the body.
          </p>
          <p>
            The mutation causes the body to produce an abnormal type of hemoglobin called hemoglobin S (HbS). When
            oxygen levels are low, HbS can form stiff rods within the red blood cells, changing their shape from round
            to a crescent or "sickle" shape.
          </p>

          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Inheritance Pattern</h2>
          <p>
            Sickle cell disease is inherited in an autosomal recessive pattern, which means both copies of the gene in
            each cell have mutations. The parents of an individual with an autosomal recessive condition each carry one
            copy of the mutated gene, but they typically do not show signs and symptoms of the condition. These
            individuals are known as carriers or are said to have sickle cell trait.
          </p>

          <div className="my-8 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Inheritance Probability</h3>
            <p className="mb-4">When two people who have sickle cell trait have children together:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>There is a 25% chance with each pregnancy that the child will have sickle cell disease</li>
              <li>There is a 50% chance with each pregnancy that the child will have sickle cell trait</li>
              <li>
                There is a 25% chance with each pregnancy that the child will neither have the disease nor be a carrier
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Evolutionary Perspective</h2>
          <p>
            The sickle cell gene mutation is more common in people from parts of the world where malaria is or was
            common. It's believed that the sickle cell trait provided a survival advantage against malaria. People who
            have sickle cell trait (one copy of the HbS gene) are more resistant to malaria because the parasite that
            causes malaria has difficulty growing in the red blood cells of these individuals.
          </p>

          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Risk Factors</h2>
          <p>
            The primary risk factor for sickle cell disease is having parents who both carry the sickle cell gene. The
            disease is more common among people whose ancestors came from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Africa</li>
            <li>Mediterranean countries (such as Greece, Turkey, and Italy)</li>
            <li>The Arabian Peninsula</li>
            <li>India</li>
            <li>Parts of Central and South America</li>
          </ul>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/symptoms">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Learn About Symptoms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
