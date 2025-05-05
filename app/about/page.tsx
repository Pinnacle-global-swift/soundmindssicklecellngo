import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Understanding Sickle Cell Disease | Soundminds Sicklecell-Association",
  description:
    "Comprehensive information about what sickle cell disease is, its types, causes, and how it affects people worldwide.",
}

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-brand-green dark:text-brand-green">
            Understanding Sickle Cell Disease
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl">
            Sickle cell disease (SCD) is a group of inherited red blood cell disorders affecting millions worldwide.
            Learn about its causes, types, and impact.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Medical researcher examining blood samples in laboratory"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/40 to-transparent"></div>
        </div>

        <div className="space-y-8 text-lg">
          <div className="bg-brand-red/5 dark:bg-brand-red/10 p-6 rounded-xl shadow-sm border-l-4 border-brand-green">
            <h2 className="text-2xl font-bold text-brand-green dark:text-brand-green mb-4">
              What is Sickle Cell Disease?
            </h2>
            <p className="mb-4">
              Sickle cell disease is a group of inherited red blood cell disorders. In someone who has SCD, the red
              blood cells become hard and sticky and look like a C-shaped farm tool called a "sickle." These cells can
              block blood flow, causing pain and other serious problems such as infection, acute chest syndrome, and
              stroke.
            </p>
            <p>
              Normal red blood cells are round and move easily through blood vessels to carry oxygen throughout the
              body. In sickle cell disease, the red blood cells become rigid and sticky, causing them to get stuck in
              small blood vessels and block the flow of blood and oxygen to organs in the body.
            </p>
          </div>

          <Tabs defaultValue="types" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-brand-green/10 dark:bg-brand-green/10">
              <TabsTrigger value="types" className="data-[state=active]:bg-brand-red data-[state=active]:text-white">
                Types of SCD
              </TabsTrigger>
              <TabsTrigger value="genetics" className="data-[state=active]:bg-brand-red data-[state=active]:text-white">
                Genetic Basis
              </TabsTrigger>
              <TabsTrigger
                value="prevalence"
                className="data-[state=active]:bg-brand-red data-[state=active]:text-white"
              >
                Global Prevalence
              </TabsTrigger>
            </TabsList>
            <TabsContent value="types" className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-green dark:text-brand-green">
                Types of Sickle Cell Disease
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-brand-green/20">
                  <CardHeader className="bg-brand-green/10 dark:bg-brand-green/10">
                    <CardTitle>Hemoglobin SS Disease (HbSS)</CardTitle>
                    <CardDescription>Most common and severe form</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p>
                      People with this form inherit two sickle cell genes ("S"), one from each parent. This is often
                      called sickle cell anemia and is usually the most severe form of the disease.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-green/20">
                  <CardHeader className="bg-brand-green/10 dark:bg-brand-green/10">
                    <CardTitle>Hemoglobin SC Disease (HbSC)</CardTitle>
                    <CardDescription>Second most common type</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p>
                      People with this form inherit one sickle cell gene ("S") from one parent and one gene for an
                      abnormal hemoglobin called "C" from the other parent. This is usually a milder form of SCD.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-green/20">
                  <CardHeader className="bg-brand-green/10 dark:bg-brand-green/10">
                    <CardTitle>Hemoglobin SB+ (Beta) Thalassemia</CardTitle>
                    <CardDescription>Moderate severity</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p>
                      People with this form inherit one sickle cell gene ("S") from one parent and one gene for beta
                      thalassemia from the other parent. Symptoms are generally less severe than HbSS.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-brand-green/20">
                  <CardHeader className="bg-brand-green/10 dark:bg-brand-green/10">
                    <CardTitle>Hemoglobin SB 0 (Beta-Zero) Thalassemia</CardTitle>
                    <CardDescription>Severe form</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p>
                      This is usually a severe form of SCD. People with this form inherit one sickle cell gene ("S") and
                      one gene for beta-zero thalassemia, which is a severe type of beta thalassemia.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <p>
                  There are also rarer forms of SCD, such as Hemoglobin SD, Hemoglobin SE, and Hemoglobin SO, which
                  occur when the hemoglobin S gene is paired with another abnormal hemoglobin gene.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="genetics" className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-green dark:text-brand-green">
                Genetic Basis of Sickle Cell Disease
              </h3>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="mb-4">
                    Sickle cell disease is caused by a mutation in the HBB gene on chromosome 11. This gene provides
                    instructions for making a protein called beta-globin, which is a component of hemoglobin.
                  </p>
                  <p className="mb-4">
                    The mutation causes the body to produce an abnormal type of hemoglobin called hemoglobin S (HbS).
                    When oxygen levels are low, HbS can form stiff rods within the red blood cells, changing their shape
                    from round to a crescent or "sickle" shape.
                  </p>
                  <p>
                    Sickle cell disease is inherited in an autosomal recessive pattern, which means both copies of the
                    gene in each cell have mutations. The parents of an individual with an autosomal recessive condition
                    each carry one copy of the mutated gene, but they typically do not show signs and symptoms of the
                    condition.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="DNA structure representing genetic basis of sickle cell disease"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-red/40 to-transparent"></div>
                </div>
              </div>

              <div className="bg-brand-red/5 dark:bg-brand-red/10 p-6 rounded-xl mt-8 border-l-4 border-brand-green">
                <h4 className="text-xl font-bold mb-4 text-brand-green dark:text-brand-green">Inheritance Pattern</h4>
                <p className="mb-4">When two people who have sickle cell trait have children together:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-red dark:text-brand-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>There is a 25% chance with each pregnancy that the child will have sickle cell disease</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-red dark:text-brand-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>There is a 50% chance with each pregnancy that the child will have sickle cell trait</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-red dark:text-brand-red mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      There is a 25% chance with each pregnancy that the child will neither have the disease nor be a
                      carrier
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="prevalence" className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-green dark:text-brand-green">
                Global Prevalence of Sickle Cell Disease
              </h3>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
                    alt="World map representing global prevalence of sickle cell disease"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-red/40 to-transparent"></div>
                </div>
                <div>
                  <p className="mb-4">
                    Sickle cell disease affects millions of people worldwide. It's most common among people whose
                    ancestors came from Africa, Mediterranean countries, the Arabian Peninsula, India, and parts of
                    Central and South America.
                  </p>
                  <p className="mb-4">
                    In the United States, SCD affects approximately 100,000 people, occurring in about 1 out of every
                    365 Black or African-American births and 1 out of every 16,300 Hispanic-American births.
                  </p>
                  <p>
                    The highest prevalence of sickle cell trait is found in regions where malaria is or was common, as
                    the trait provides some protection against malaria. In some parts of sub-Saharan Africa, the
                    prevalence of the trait is as high as 30%.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-brand-green dark:text-brand-green">
                  Evolutionary Perspective
                </h4>
                <p>
                  The sickle cell gene mutation is more common in people from parts of the world where malaria is or was
                  common. It's believed that the sickle cell trait provided a survival advantage against malaria. People
                  who have sickle cell trait (one copy of the HbS gene) are more resistant to malaria because the
                  parasite that causes malaria has difficulty growing in the red blood cells of these individuals. This
                  evolutionary advantage explains why the gene has persisted in populations despite its potential to
                  cause disease when inherited from both parents.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-green dark:text-brand-green">History and Discovery</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Sickle cell disease was first described in 1910 when Dr. James B. Herrick observed "peculiar elongated
                  and sickle-shaped" red blood cells in a patient. His intern, Ernest Irons, first identified these
                  abnormal cells in the blood of Walter Clement Noel, a dental student from Grenada who was admitted to
                  the Chicago Presbyterian Hospital suffering from anemia.
                </p>
                <p className="mb-4">
                  In 1949, Dr. Linus Pauling and colleagues demonstrated that SCD was caused by an abnormal protein in
                  the hemoglobin. This was the first disease proven to be the result of a specific molecular alteration
                  of a protein, making it a landmark in molecular medicine.
                </p>
                <p>
                  In 1956, Vernon Ingram discovered the specific molecular defect in hemoglobin that causes sickle cell
                  disease: a single amino acid substitution in the beta-globin chain of hemoglobin. This discovery
                  marked the beginning of molecular medicine.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1576671414121-aa0c81c869e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                  alt="Historical medical research laboratory"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red/40 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-brand-green dark:text-brand-green">Pathophysiology</h2>
            <p className="mb-4">
              The fundamental problem in sickle cell disease is the production of abnormal hemoglobin S (HbS). When this
              hemoglobin gives up its oxygen to the tissues, it can form rigid polymers (long chains) within the red
              blood cell, causing the cell to become rigid and take on the characteristic sickle shape.
            </p>
            <p className="mb-4">These sickled cells can:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Block small blood vessels, causing pain and organ damage</li>
              <li>Break down prematurely, leading to anemia</li>
              <li>
                Cause the spleen to enlarge and eventually stop functioning properly, increasing the risk of serious
                infections
              </li>
              <li>Lead to chronic inflammation and damage to blood vessels</li>
            </ul>
            <p>
              The severity of symptoms varies widely among individuals with sickle cell disease, depending on the
              specific genetic mutation, environmental factors, and other genetic modifiers.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/causes">
            <Button className="bg-brand-red hover:bg-brand-red/90">
              Learn About Causes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
