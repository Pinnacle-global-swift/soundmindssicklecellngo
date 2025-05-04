"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you today?", isUser: false },
  ])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // Add user message
    setMessages([...messages, { text: message, isUser: true }])
    setMessage("")

    // Simulate response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message. Our team will get back to you soon. For immediate assistance, please call our helpline.",
          isUser: false,
        },
      ])
    }, 1000)
  }

  return (
    <>
      {isOpen ? (
        <Card className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 shadow-xl">
          <CardHeader className="bg-brand-green text-white p-4 flex flex-row justify-between items-center">
            <h3 className="font-medium">Chat Support</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-brand-green/20">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </CardHeader>
          <CardContent className="p-4 max-h-80 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.isUser
                        ? "bg-brand-green text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 border-t">
            <form onSubmit={sendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" className="bg-brand-green hover:bg-brand-green/90">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-brand-green hover:bg-brand-green/90 text-white shadow-lg"
          aria-label="Chat Support"
        >
          <MessageSquare className="h-5 w-5" />
        </Button>
      )}
    </>
  )
}
