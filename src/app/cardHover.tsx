import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className=" max-w-7xl mx-auto px-8 my-40">
      <h1 className="font-extrabold text-5xl md:text-7xl text-black py-10 mb-4 text-center tracking-tight drop-shadow-lg">
        Our Solutions
      </h1>
      <p className="text-lg text-center mb-8">
        Discover our range of AI-powered products and solutions <br/>designed to help you get more from your data.
      </p>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Rag Chatbot",
    description:
      "it fetches data from the documents and breakdown into chunks and forms the embeddings and stores them in the vector database. It then uses the embeddings to answer the questions asked by the user.",
    link: "https://stripe.com",
  },
  {
    title: "chat with data",
    description:
      "chatwithdata is a platform that allows you to chat with your data. It uses the power of AI to answer your questions about your data.",
    link: "https://netflix.com",
  },
  {
    title: "Image Analysis",
    description:
      "A platform that allows you to analyze images and extract information from them. It uses the power of AI to answer your questions about your images.",
    link: "https://google.com",
  },
  {
    title: "website analysis",
    description:
      "A platform that allows you to analyze websites and extract information from them. It uses the power of AI to answer your questions about your websites.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
