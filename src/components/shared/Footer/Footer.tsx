import Container from "../Container";
import logo from "@/app/assets/img/logo.png";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-purple-500 mx-auto">
      <Container>
        <div className="flex flex-col items-center justify-center h-full pb-1 pt-24 lg:py-0 lg:h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 pb-6 md:pt-20 gap-6">
            {/* logo */}
            <div>
              <Link
                href="/"
                className="flex md:justify-center items-center gap-2"
              >
                <Image src={logo} alt="logo" width={70} />
                <p className="text-white text-xl">Hand to Hand</p>
              </Link>

              {/* social icons */}
              <div className="flex justify-start items-center flex-wrap gap-4 mt-6">
                <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer">
                  <Facebook />
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer">
                  <Linkedin />
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center cursor-pointer">
                  <Youtube />
                </div>
              </div>
            </div>

            {/* Information */}
            <div>
              <h4 className="text-lg font-bold text-white pb-4">Information</h4>
              <hr className="w-12 text-white" />
              <div className="mt-6 flex flex-col">
                <Link href="/about-us" className="text-sm  text-white mb-2">
                  Home
                </Link>
                <Link href="/products" className="text-sm  text-white mb-2">
                  Products
                </Link>
                <Link href="/" className="text-sm  text-white mb-2">
                  About Us
                </Link>
                <Link href="/about-us" className="text-sm  text-white mb-2">
                  Contact Us
                </Link>
              </div>
            </div>
            {/* our company */}
            <div>
              <h4 className="text-lg font-bold text-white  pb-4">
                Additional Information
              </h4>
              <hr className="w-12 text-white" />
              <div className="mt-6 flex flex-col">
                <Link
                  href="/"
                  className="text-sm  text-white mb-2 tracking-wide"
                >
                  Delivery
                </Link>
                <Link
                  href="/"
                  className="text-sm  text-white mb-2 tracking-wide"
                >
                  Legal Notice
                </Link>
                <Link
                  href="/"
                  className="text-sm  text-white mb-2 text-balance tracking-wide"
                >
                  Terms and conditions of us
                </Link>
                <Link
                  href="/"
                  className="text-sm  text-white mb-2 tracking-wide"
                >
                  Affiliate
                </Link>
              </div>
            </div>
            {/* About Our Shrefre */}
            <div>
              <h4 className="text-lg font-bold text-white  pb-4">
                About Our Company
              </h4>
              <hr className="w-12 text-white" />
              <div className="mt-6 flex flex-col">
                <p className=" text-[#F7F7F7] text-sm tracking-wide text-balance">
                  Hand to Hand is a Bangladeshi second hand marketplace where
                  sellers can sell their old products in an easy way and buyers
                  have more options.
                </p>
              </div>
            </div>
            {/* Subscribe Newsletter*/}
            <div>
              <h4 className="text-lg font-bold text-white  pb-4">
                Subscribe Newsletter
              </h4>
              <hr className="w-12 text-white" />
              <div className="mt-6 flex flex-col">
                <p className=" text-[#F7F7F7] text-sm tracking-wide text-balance">
                  Signup our newsletter to get update information, news, insight
                  or promotions.
                </p>
                <div className="md:flex w-full max-w-sm items-center md:space-x-2 space-y-2 lg:space-y-0 mt-6">
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    className="text-[#1A1A1A] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-transparent outline-none   border-none"
                  />
                  <Button
                    type="submit"
                    variant="destructive"
                    className="bg-[#1A1A1A] hover:bg-gray-900 tracking-wide"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-full text-[#B9B1A9]" />
          <p className="mt-8 text-[#E1D9D1]">
            © {new Date().getFullYear()} SecondHand Marketplace. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
