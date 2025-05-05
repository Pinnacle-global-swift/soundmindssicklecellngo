import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, AlertCircle, Calendar, Heart, Droplets, Utensils, Brain } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Living with Sickle Cell Disease | Soundminds Sicklecell-Association",
  description:
    "Comprehensive strategies for managing sickle cell disease and improving quality of life, including pain management, lifestyle adjustments, and coping strategies.",
}

export default function ManagementPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700 dark:text-blue-300">
            Living with Sickle Cell Disease
          </h1>
          <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl">
            Practical approaches to managing sickle cell disease, improving quality of life, and navigating daily
            challenges with effective strategies and support.
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-xl shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Person living actively with chronic condition"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-8 text-lg">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
              Comprehensive Management Approach
            </h2>
            <p>
              Living with sickle cell disease requires a multifaceted approach that addresses physical symptoms,
              emotional well-being, and quality of life. While medical treatments are essential, daily self-management
              plays a crucial role in preventing complications and maintaining overall health. This page provides
              practical strategies for managing sickle cell disease in everyday life.
            </p>
          </div>

          <Tabs defaultValue="pain" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="pain">Pain Management</TabsTrigger>
              <TabsTrigger value="lifestyle">Lifestyle Adjustments</TabsTrigger>
              <TabsTrigger value="emotional">Emotional Wellbeing</TabsTrigger>
              <TabsTrigger value="daily">Daily Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="pain" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">
                    Pain Management Strategies
                  </h3>
                  <p className="mb-4">
                    Pain is one of the most common and challenging aspects of sickle cell disease. Developing effective
                    pain management strategies is essential for maintaining quality of life and reducing hospital
                    visits.
                  </p>
                  <p>
                    A comprehensive pain management plan typically includes both pharmacological and non-pharmacological
                    approaches, tailored to individual needs and circumstances.
                  </p>
                </div>
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1616012480717-fd9687d2dac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Person practicing relaxation techniques for pain management"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 my-8">
                <Card>
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30">
                    <CardTitle>Pharmacological Approaches</CardTitle>
                    <CardDescription>Medication strategies for pain relief</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Over-the-counter medications</p>
                        <p className="text-sm text-muted-foreground">
                          NSAIDs like ibuprofen can help with mild to moderate pain
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Prescription pain relievers</p>
                        <p className="text-sm text-muted-foreground">
                          For moderate to severe pain, under medical supervision
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Hydroxyurea</p>
                        <p className="text-sm text-muted-foreground">Can reduce the frequency of painful episodes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Preventive medications</p>
                        <p className="text-sm text-muted-foreground">To reduce the occurrence of pain crises</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30">
                    <CardTitle>Non-Pharmacological Approaches</CardTitle>
                    <CardDescription>Alternative methods for pain management</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Heat therapy</p>
                        <p className="text-sm text-muted-foreground">
                          Warm compresses or heating pads on painful areas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Hydration</p>
                        <p className="text-sm text-muted-foreground">
                          Maintaining proper fluid intake to prevent sickling
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Relaxation techniques</p>
                        <p className="text-sm text-muted-foreground">Deep breathing, meditation, guided imagery</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Physical therapy</p>
                        <p className="text-sm text-muted-foreground">To improve mobility and reduce chronic pain</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                  Developing a Pain Management Plan
                </h4>
                <p className="mb-4">
                  Working with your healthcare team to develop a personalized pain management plan is essential. This
                  plan should include:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Strategies for managing different levels of pain (mild, moderate, severe)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Clear guidelines for when to use specific medications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Non-pharmacological techniques that work for you</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>When to seek medical attention for pain that doesn't respond to home management</span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="lifestyle" className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Lifestyle Adjustments</h3>
              <p className="mb-6">
                Making certain lifestyle adjustments can help prevent complications and improve quality of life for
                people with sickle cell disease. These adjustments focus on maintaining overall health and avoiding
                triggers that can precipitate pain crises.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Droplets className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Hydration</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>
                      Drinking plenty of water helps prevent red blood cells from sickling. Aim for 8-10 glasses of
                      water daily, and more during hot weather, illness, or physical activity. Dehydration can trigger
                      painful crises, so maintaining proper hydration is essential.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="text-sm text-muted-foreground">
                      <strong>Tip:</strong> Carry a water bottle with you at all times and set reminders to drink
                      regularly.
                    </div>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Calendar className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Temperature Management</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>
                      Both extreme cold and heat can trigger sickling. Dress warmly in cold weather, avoid swimming in
                      cold water, and use caution with air conditioning. During hot weather, stay cool, limit outdoor
                      activities during peak heat, and use fans or air conditioning when available.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="text-sm text-muted-foreground">
                      <strong>Tip:</strong> Check weather forecasts and plan activities accordingly to avoid temperature
                      extremes.
                    </div>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Physical Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>
                      Regular, moderate exercise is beneficial, but excessive exertion can trigger crises. Balance
                      activity with rest, stay hydrated during exercise, and avoid activities that cause extreme fatigue
                      or dehydration. Listen to your body and rest when needed.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="text-sm text-muted-foreground">
                      <strong>Tip:</strong> Consider low-impact activities like swimming, walking, or yoga that are less
                      likely to cause strain.
                    </div>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <AlertCircle className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Infection Prevention</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>
                      Infections can trigger crises and cause serious complications. Practice good hygiene, avoid sick
                      people when possible, get recommended vaccinations, and seek medical attention promptly for signs
                      of infection. Children may need daily antibiotics to prevent serious infections.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="text-sm text-muted-foreground">
                      <strong>Tip:</strong> Keep hand sanitizer with you and be vigilant about handwashing, especially
                      during cold and flu season.
                    </div>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Utensils className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Nutrition</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>
                      A balanced diet is important for everyone, but especially for those with sickle cell disease. Good
                      nutrition can help maintain energy levels, support immune function, and promote overall health.
                      Focus on foods rich in folic acid, which helps produce new red blood cells.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="text-sm text-muted-foreground">
                      <strong>Tip:</strong> Include leafy greens, citrus fruits, and fortified grains in your diet for
                      essential nutrients.
                    </div>
                  </CardFooter>
                </Card>

                <Card className="flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <CardTitle>Stress Management</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p>
                      Emotional stress can trigger pain crises. Developing effective stress management techniques is an
                      important part of managing sickle cell disease. Consider practices like meditation, deep breathing
                      exercises, or engaging in enjoyable activities.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="text-sm text-muted-foreground">
                      <strong>Tip:</strong> Try mindfulness apps or guided relaxation techniques to help manage stress
                      levels daily.
                    </div>
                  </CardFooter>
                </Card>
              </div>

              <div className="relative mt-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Person enjoying healthy lifestyle activities"
                  width={1200}
                  height={600}
                  className="object-cover"
                />
              </div>
            </TabsContent>

            <TabsContent value="emotional" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="Support group meeting for emotional wellbeing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-4">Emotional Wellbeing</h3>
                  <p className="mb-4">
                    Living with a chronic condition like sickle cell disease can take an emotional toll. The
                    unpredictability of pain crises, frequent medical appointments, and potential limitations on
                    activities can lead to feelings of frustration, anxiety, or depression.
                  </p>
                  <p>
                    Taking care of your emotional and psychological wellbeing is just as important as managing physical
                    symptoms. Developing coping strategies and seeking support can help you navigate the emotional
                    challenges of living with sickle cell disease.
                  </p>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium">Coping with Uncertainty</AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base">
                    <p>
                      The unpredictable nature of sickle cell disease can make planning difficult and create anxiety
                      about potential pain crises or complications. Here are some strategies for coping with
                      uncertainty:
                    </p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>
                        Focus on what you can control, such as following your treatment plan and making healthy
                        lifestyle choices
                      </li>
                      <li>
                        Practice mindfulness to stay present rather than worrying about potential future complications
                      </li>
                      <li>Develop contingency plans for managing pain crises or other complications</li>
                      <li>Build flexibility into your schedule and expectations</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium">Managing Depression and Anxiety</AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base">
                    <p>
                      Depression and anxiety are common among people with chronic conditions like sickle cell disease.
                      Recognizing the signs and seeking help is important:
                    </p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>
                        Be aware of symptoms like persistent sadness, loss of interest in activities, changes in sleep
                        or appetite, or excessive worry
                      </li>
                      <li>
                        Talk to your healthcare provider about your feelings—they can refer you to mental health
                        professionals
                      </li>
                      <li>
                        Consider therapy approaches like cognitive-behavioral therapy (CBT) that can help manage
                        negative thought patterns
                      </li>
                      <li>Medication may be helpful for some people, in consultation with healthcare providers</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium">Building a Support Network</AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base">
                    <p>
                      Having a strong support network can make a significant difference in managing the emotional
                      aspects of sickle cell disease:
                    </p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Connect with family and friends who can provide emotional support and practical help</li>
                      <li>
                        Join support groups specifically for people with sickle cell disease, either in-person or online
                      </li>
                      <li>Consider working with a social worker who specializes in chronic illness</li>
                      <li>Build relationships with your healthcare team who understand your condition</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium">Self-Care Practices</AccordionTrigger>
                  <AccordionContent className="space-y-4 text-base">
                    <p>Regular self-care is essential for emotional wellbeing when living with sickle cell disease:</p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Make time for activities you enjoy that help you relax and recharge</li>
                      <li>Practice relaxation techniques like deep breathing, meditation, or gentle yoga</li>
                      <li>Maintain a regular sleep schedule to support both physical and emotional health</li>
                      <li>Set boundaries to protect your energy and wellbeing</li>
                      <li>
                        Keep a journal to express your feelings and track patterns in your physical and emotional health
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-xl mt-8">
                <h4 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">Professional Support</h4>
                <p className="mb-4">
                  Sometimes, professional support is needed to navigate the emotional challenges of living with sickle
                  cell disease. Consider reaching out to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Psychologists or therapists</strong> who specialize in chronic illness
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Social workers</strong> who can help navigate healthcare systems and access resources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Psychiatrists</strong> who can evaluate whether medication might be helpful
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Support groups</strong> facilitated by healthcare professionals
                    </span>
                  </li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="daily" className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Navigating Daily Challenges</h3>
              <p className="mb-6">
                Living with sickle cell disease presents unique challenges in daily life, from managing work or school
                to planning for travel. Developing strategies to navigate these challenges can help maintain normalcy
                while managing your health.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30">
                    <CardTitle>Work and School</CardTitle>
                    <CardDescription>Balancing responsibilities with health needs</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="mb-2">
                      Managing sickle cell disease while maintaining work or school commitments can be challenging.
                      Consider these strategies:
                    </p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Know your rights under disability laws and request reasonable accommodations if needed</li>
                      <li>Communicate with employers or teachers about your condition and potential needs</li>
                      <li>Plan for flexibility during pain episodes or medical appointments</li>
                      <li>Consider remote work or flexible scheduling options when available</li>
                      <li>Pace yourself and prioritize tasks to conserve energy</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30">
                    <CardTitle>Travel Planning</CardTitle>
                    <CardDescription>Preparing for safe and enjoyable travel</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="mb-2">Travel is possible with sickle cell disease, but requires careful planning:</p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>
                        Consult with your healthcare provider before planning trips, especially to high altitudes or
                        extreme climates
                      </li>
                      <li>Research medical facilities at your destination and carry contact information</li>
                      <li>Bring extra medication and a letter from your doctor explaining your condition</li>
                      <li>Stay well-hydrated, especially during air travel</li>
                      <li>Consider travel insurance that covers pre-existing conditions</li>
                      <li>Plan rest days in your itinerary to prevent exhaustion</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30">
                    <CardTitle>Social Life and Relationships</CardTitle>
                    <CardDescription>Maintaining connections while managing health</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="mb-2">Balancing social activities with health needs can be challenging:</p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Educate close friends and family about your condition so they understand your needs</li>
                      <li>Be open about your limitations while focusing on what you can do</li>
                      <li>Plan activities during times when you typically feel your best</li>
                      <li>Have backup plans for social events in case you need to leave early or cancel</li>
                      <li>Consider joining support groups to connect with others who understand your experience</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-blue-50 dark:bg-blue-900/30">
                    <CardTitle>Financial Management</CardTitle>
                    <CardDescription>Handling the costs of chronic illness</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="mb-2">Managing the financial aspects of sickle cell disease:</p>
                    <ul className="space-y-2 list-disc pl-6">
                      <li>Understand your health insurance coverage and appeal processes if needed</li>
                      <li>Research patient assistance programs for medication costs</li>
                      <li>Connect with social workers who can help identify financial resources</li>
                      <li>Consider disability benefits if your condition significantly impacts your ability to work</li>
                      <li>Plan for potential emergency expenses related to hospitalizations</li>
                      <li>Keep organized records of medical expenses for tax purposes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="relative mt-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                  alt="People collaborating and supporting each other"
                  width={1200}
                  height={600}
                  className="object-cover"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl shadow-sm border border-red-200 dark:border-red-800">
            <h2 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 mr-2" />
              When to Seek Medical Help
            </h2>
            <p className="mb-4">
              Know when to contact your healthcare provider or go to the emergency room. Seek immediate medical
              attention for:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span>Fever of 101.5°F (38.5°C) or higher</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span>Difficulty breathing or shortness of breath</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span>Severe pain that doesn't respond to home management</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span>Sudden vision changes</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span>Severe headache, dizziness, or loss of balance</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span>Prolonged, painful erection (priapism)</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span>Sudden weakness, especially on one side of the body</span>
              </div>
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                <span>Seizures</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <Link href="/resources">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Find Resources & Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
