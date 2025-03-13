import Container from "@/components/shared/Container";
import React from "react";
import faq from "../../assets/img/faq.jpg";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Hand to Hand?",
    answer:
      "Hand to Hand is an online marketplace where you can buy and sell various products conveniently.",
  },
  {
    question: "How can I place an order?",
    answer:
      "To place an order, simply browse our products, add them to your cart, and proceed to checkout.",
  },
  {
    question: "Do you offer cash on delivery?",
    answer:
      "Yes, we offer cash on delivery in selected locations. Check the payment options at checkout.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You can track your order from the 'My Orders' section after logging into your account.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return policy for eligible products. Please read our return policy for details.",
  },
];

const FaqPage = () => {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center lg:h-[90vh] my-6">
          {/* content section */}
          <div>
            <h1 className="text-3xl md:text-5xl py-6 font-bold text-balance text-[#1A1A1A] leading-normal">
              FREQUENTLY ASKED <br />
              <span className="text-purple-500">QUESTIONS</span>
            </h1>
            <Accordion type="single" collapsible>
              {/*  */}
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="pb-6 border-none"
                >
                  <AccordionTrigger className="text-xl capitalize text-[#1A1A1A] font-bold px-2 bg-gray-100 cursor-pointer tracking-wide rounded">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pl-2 bg-gray-100 rounded font-light text-gray-800 tracking-wide text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {/* img section */}
          <div>
            <Image src={faq} alt="faq img" placeholder="blur" loading="lazy" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FaqPage;
