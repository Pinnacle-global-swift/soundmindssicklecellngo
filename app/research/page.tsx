import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, Beaker, FileText, Users, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Research & Clinical Trials | Soundminds Sicklecell-Association",
  description:
    "Latest research developments, ongoing clinical trials, and opportunities to participate in studies related to sickle cell disease.",
}

export default function ResearchPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700 dark:text-blue-300">
            Research & Clinical Trials
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl">
            Explore the latest advancements in sickle cell disease research, ongoing clinical trials, and how you can
            contribute to scientific progress.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1581093458791-9d15482778e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Scientific researcher working in a modern laboratory"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-8 text-lg">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Advancing Treatment Through Research
            </h2>
            <p>
              Research into sickle cell disease has accelerated dramatically in recent years, with promising
              developments in gene therapy, new medications, and improved treatment protocols. Scientists and healthcare
              professionals worldwide are working to better understand the disease, develop more effective treatments,
              and ultimately find a cure. This page highlights key research areas, current clinical trials, and ways you
              can get involved.
            </p>
          </div>

          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="current">Current Research</TabsTrigger>
              <TabsTrigger value="trials">Clinical Trials</TabsTrigger>
              <TabsTrigger value="participate">How to Participate</TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Current Research Directions</h3>
              <p className="mb-6">
                Research into sickle cell disease spans multiple approaches, from developing new medications to
                pioneering genetic therapies. Here are some of the most promising areas of current research:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="flex flex-col">
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Beaker className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Gene Therapy</CardTitle>
                    <CardDescription>Modifying genetic material to correct the sickle cell mutation</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-4">
                      Gene therapy approaches aim to modify or replace the defective gene responsible for sickle cell
                      disease. Current strategies include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Gene addition using viral vectors to add functional copies of the beta-globin gene</li>
                      <li>Gene editing using CRISPR-Cas9 to correct the mutation in hematopoietic stem cells</li>
                      <li>Reactivation of fetal hemoglobin production, which can prevent sickling</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
                      Promising Results
                    </Badge>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Novel Pharmaceuticals</CardTitle>
                    <CardDescription>New medications targeting various aspects of the disease</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-4">
                      Researchers are developing new medications that target different aspects of sickle cell disease:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Anti-sickling agents that prevent red blood cells from becoming rigid</li>
                      <li>Anti-adhesion therapies that prevent sickled cells from sticking to blood vessel walls</li>
                      <li>
                        Anti-inflammatory medications to reduce the inflammation associated with vaso-occlusive crises
                      </li>
                      <li>Hemoglobin modifiers that increase the oxygen affinity of hemoglobin</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                      Multiple Trials
                    </Badge>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Stem Cell Transplantation</CardTitle>
                    <CardDescription>Improving transplant procedures and outcomes</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-4">
                      Hematopoietic stem cell transplantation is currently the only established cure for sickle cell
                      disease. Research is focused on:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Reducing the risks associated with transplantation</li>
                      <li>Developing less toxic conditioning regimens</li>
                      <li>Expanding the donor pool beyond matched siblings</li>
                      <li>Improving post-transplant care to reduce complications</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900 dark:text-purple-300">
                      Established Treatment
                    </Badge>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Search className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Biomarkers & Personalized Medicine</CardTitle>
                    <CardDescription>Tailoring treatments to individual patients</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="mb-4">
                      Research into biomarkers aims to better predict disease severity and treatment response:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Identifying genetic modifiers that influence disease severity</li>
                      <li>Developing predictive models for pain crises and other complications</li>
                      <li>Creating personalized treatment plans based on individual genetic profiles</li>
                      <li>Using digital health technologies to monitor symptoms and treatment response</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-900 dark:text-amber-300">
                      Emerging Field
                    </Badge>
                  </CardFooter>
                </Card>
              </div>

              <div className="relative mt-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Scientific research equipment in laboratory"
                  width={1200}
                  height={600}
                  className="object-cover"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mt-8">
                <h4 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Recent Breakthroughs</h4>
                <p className="mb-4">Several significant breakthroughs have occurred in recent years:</p>
                <ul className="space-y-4">
                  <li className="border-b border-blue-100 dark:border-blue-800 pb-4">
                    <p className="font-medium">FDA Approval of New Medications</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Several new medications have been approved in recent years that target different aspects of sickle
                      cell disease, including Oxbryta (voxelotor), which inhibits hemoglobin polymerization, and Adakveo
                      (crizanlizumab), which reduces pain crises by blocking adhesion molecules.
                    </p>
                  </li>
                  <li className="border-b border-blue-100 dark:border-blue-800 pb-4">
                    <p className="font-medium">Successful Gene Therapy Trials</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Multiple patients have shown significant improvement or complete resolution of symptoms following
                      gene therapy, with some patients remaining crisis-free for extended periods after treatment.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">Improved Transplant Protocols</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      New conditioning regimens have reduced the toxicity associated with stem cell transplantation,
                      making this potentially curative treatment available to more patients.
                    </p>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="trials" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Clinical Trials</h3>
                  <p className="mb-4">
                    Clinical trials are research studies that explore whether a medical strategy, treatment, or device
                    is safe and effective for humans. These studies are essential for developing new treatments for
                    sickle cell disease and improving existing ones.
                  </p>
                  <p>
                    Participating in a clinical trial may give you access to new treatments before they are widely
                    available, and your participation helps advance medical knowledge and potentially benefits future
                    patients.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1576671414121-aa0c81c869e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                    alt="Medical researcher reviewing clinical trial data"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300">Notable Current Clinical Trials</h4>
                <p className="mb-4">
                  Below are examples of significant clinical trials currently recruiting participants. This list is not
                  exhaustive, and new trials are constantly being developed.
                </p>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Gene Editing for Sickle Cell Disease</CardTitle>
                      <CardDescription>Phase 1/2 Clinical Trial</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        This trial is investigating the safety and efficacy of CRISPR-Cas9 gene editing technology to
                        modify hematopoietic stem cells in patients with severe sickle cell disease.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Eligibility:</p>
                          <p>Adults 18-40 with severe SCD</p>
                        </div>
                        <div>
                          <p className="font-medium">Locations:</p>
                          <p>Multiple centers in the US</p>
                        </div>
                        <div>
                          <p className="font-medium">Status:</p>
                          <p>Recruiting</p>
                        </div>
                        <div>
                          <p className="font-medium">Phase:</p>
                          <p>Phase 1/2</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://clinicaltrials.gov" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center">
                          View Trial Details
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Novel Anti-Adhesion Therapy</CardTitle>
                      <CardDescription>Phase 3 Clinical Trial</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        This study is evaluating a new medication designed to prevent sickled red blood cells from
                        adhering to blood vessel walls, potentially reducing the frequency and severity of
                        vaso-occlusive crises.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Eligibility:</p>
                          <p>Adults and adolescents 12+ with SCD</p>
                        </div>
                        <div>
                          <p className="font-medium">Locations:</p>
                          <p>Multiple centers globally</p>
                        </div>
                        <div>
                          <p className="font-medium">Status:</p>
                          <p>Recruiting</p>
                        </div>
                        <div>
                          <p className="font-medium">Phase:</p>
                          <p>Phase 3</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://clinicaltrials.gov" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center">
                          View Trial Details
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Fetal Hemoglobin Induction Study</CardTitle>
                      <CardDescription>Phase 2 Clinical Trial</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        This trial is studying a new oral medication that aims to increase the production of fetal
                        hemoglobin (HbF), which can prevent the sickling of red blood cells in patients with sickle cell
                        disease.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium">Eligibility:</p>
                          <p>Adults 18-65 with SCD</p>
                        </div>
                        <div>
                          <p className="font-medium">Locations:</p>
                          <p>Selected centers in US and Europe</p>
                        </div>
                        <div>
                          <p className="font-medium">Status:</p>
                          <p>Recruiting</p>
                        </div>
                        <div>
                          <p className="font-medium">Phase:</p>
                          <p>Phase 2</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://clinicaltrials.gov" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="flex items-center">
                          View Trial Details
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>

                <div className="flex justify-center mt-8">
                  <Link
                    href="https://clinicaltrials.gov/ct2/results?cond=Sickle+Cell+Disease&term=&type=&rslt=&age_v=&gndr=&intr=&titles=&outc=&spons=&lead=&id=&cntry=&state=&city=&dist=&locn=&rsub=&strd_s=&strd_e=&prcd_s=&prcd_e=&sfpd_s=&sfpd_e=&rfpd_s=&rfpd_e=&lupd_s=&lupd_e="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Find More Clinical Trials
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="participate" className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">How to Participate in Research</h3>
              <p className="mb-6">
                Participating in sickle cell disease research can take many forms, from joining a clinical trial to
                contributing to a patient registry or biobank. Your involvement can help advance our understanding of
                the disease and lead to better treatments.
              </p>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Doctor discussing clinical trial participation with patient"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300">Steps to Join a Clinical Trial</h4>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>
                      <p className="font-medium">Discuss with your healthcare provider</p>
                      <p className="text-sm text-muted-foreground">
                        Your doctor can help determine if a clinical trial might be appropriate for you and may be able
                        to refer you to specific studies.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Search clinical trial databases</p>
                      <p className="text-sm text-muted-foreground">
                        Websites like ClinicalTrials.gov allow you to search for trials specific to sickle cell disease
                        in your area.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Contact sickle cell centers</p>
                      <p className="text-sm text-muted-foreground">
                        Major medical centers with sickle cell programs often conduct research and can provide
                        information about ongoing studies.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Reach out to patient advocacy organizations</p>
                      <p className="text-sm text-muted-foreground">
                        Organizations like the Sickle Cell Disease Association of America often have information about
                        research opportunities.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mt-8">
                <h4 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                  What to Consider Before Participating
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-700 dark:text-blue-300 font-medium">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Potential benefits and risks</p>
                      <p className="text-sm text-muted-foreground">
                        Understand both the potential benefits (access to new treatments, contributing to medical
                        knowledge) and risks (side effects, time commitment) of participation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-700 dark:text-blue-300 font-medium">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Eligibility criteria</p>
                      <p className="text-sm text-muted-foreground">
                        Clinical trials have specific eligibility requirements based on factors like age, disease
                        severity, and previous treatments. Not all trials will be appropriate for every patient.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-700 dark:text-blue-300 font-medium">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Time commitment</p>
                      <p className="text-sm text-muted-foreground">
                        Participating in research often requires multiple visits to a research center, which may involve
                        travel and time away from work or school.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-700 dark:text-blue-300 font-medium">4</span>
                    </div>
                    <div>
                      <p className="font-medium">Informed consent</p>
                      <p className="text-sm text-muted-foreground">
                        Before participating, you'll go through an informed consent process where the research team
                        explains all aspects of the study. Take time to ask questions and fully understand what
                        participation involves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <h4 className="text-xl font-bold text-blue-700 dark:text-blue-300">
                  Other Ways to Contribute to Research
                </h4>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Join a Patient Registry</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Patient registries collect information from people with sickle cell disease to help researchers
                        better understand the condition, track outcomes, and identify potential participants for future
                        studies. Joining a registry typically involves providing health information and updating it
                        periodically.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href="https://www.cdc.gov/ncbddd/hemoglobinopathies/scdc.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="flex items-center">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Participate in Surveys and Interviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Researchers often conduct surveys and interviews to gather information about the experiences of
                        people living with sickle cell disease. These studies help improve understanding of quality of
                        life issues, treatment preferences, and unmet needs.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href="https://www.scdcoalition.org/" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="flex items-center">
                          Find Opportunities
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Research Spotlight: Gene Therapy</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  Gene therapy represents one of the most promising approaches to potentially curing sickle cell
                  disease. Unlike traditional treatments that manage symptoms, gene therapy aims to address the
                  underlying genetic cause of the disease.
                </p>
                <p className="mb-4">Current gene therapy approaches for sickle cell disease include:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Adding functional copies of the beta-globin gene to a patient's own stem cells</li>
                  <li>Using gene editing tools like CRISPR-Cas9 to correct the mutation</li>
                  <li>Modifying genes to increase production of fetal hemoglobin, which doesn't sickle</li>
                </ul>
                <p>
                  While still experimental, early results from clinical trials have been promising, with some patients
                  experiencing complete resolution of symptoms after treatment.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="DNA and gene therapy research visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Future Research Directions</h2>
            <p className="mb-4">
              As our understanding of sickle cell disease continues to evolve, several promising research directions are
              emerging:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Combination therapies</strong> that target multiple aspects of the disease simultaneously
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Advanced gene editing techniques</strong> with improved precision and efficiency
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Digital health technologies</strong> for better monitoring and management of symptoms
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Global research initiatives</strong> to address sickle cell disease in regions with high
                  prevalence but limited resources
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/resources">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Explore Resources & Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
