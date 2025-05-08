import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Globe, MailOpen, MapPin, PhoneCall } from "lucide-react";

const ContactUs = () => {
  return (
    <div id="contact-us" className="mt-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          <div data-aos="fade-left">
            <h4 className="uppercase tracking-[.25em] text-purple-500 text-xs">
              Contact Us
            </h4>
            <h1 className="text-4xl font-bold text-[#1A1A1A] text-balance py-6">
              Get In <span className="text-purple-600">Touch</span>{" "}
            </h1>
            <p className="text-sm text-[#7d7d7d] text-balance pb-6">
              Check our Q&A guidelines to see if your question has already been
              answered. If not, please contact us and we will get back to you as
              soon as possible.
            </p>
            {/* start info section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <PhoneCall className="text-purple-500" size={40} />
                <div className="flex flex-col">
                  <h4 className="text-xl text-[#1A1A1A] font-bold pb-1">
                    Phone Number
                  </h4>
                  <p>+880 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MailOpen className="text-purple-500" size={40} />
                <div className="flex flex-col">
                  <h4 className="text-xl text-[#1A1A1A] font-bold pb-1">
                    Email Address
                  </h4>
                  <p>handtohand@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="text-purple-500" size={40} />
                <div className="flex flex-col">
                  <h4 className="text-xl text-[#1A1A1A] font-bold pb-1">
                    Website
                  </h4>
                  <p>www.handtohand.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-purple-500" size={40} />
                <div className="flex flex-col">
                  <h4 className="text-xl text-[#1A1A1A] font-bold pb-1">
                    Address
                  </h4>
                  <p>Jatrabari , Dhaka , Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
          {/* Start Form */}
          <form data-aos="fade-right">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <Input
                type="text"
                placeholder="Your Name"
                className="py-6 border-2 border-purple-500"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="py-6 border-2 border-purple-500"
                required
              />
            </div>
            <Input
              type="text"
              placeholder="Your Subject"
              className="py-6 border-2 border-purple-500 mb-6"
              required
            />
            <div className="grid w-full gap-3">
              <Textarea
                placeholder="Type your message here."
                className="py-6 border-2 border-purple-500"
              />
              <Button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white py-5 cursor-pointer"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
