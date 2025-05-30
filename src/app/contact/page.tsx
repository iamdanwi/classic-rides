import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <section className="container mx-auto px-4 py-12 space-y-12">
      <div className="space-y-10">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="font-[#8A7561]">
            We&apos;re here to help! Reach out to us with any questions or
            inquiries.
          </p>
        </div>
        <h2 className="font-semibold">Our Contact Information</h2>
      </div>
      <Separator />
      <div className="flex items-center space-x-7 -mt-6">
        <div>
          <p className="font-[#8A7561]">Phone</p>
          <p>0123456789</p>
        </div>
        <div>
          <p className="font-[#8A7561]">Email</p>
          <p>info@vintagerides.com</p>
        </div>
      </div>
      <Separator />
      <div>
        <p className="font-[#8A7561] text-xl">Address</p>
        <div>
          <p>123 Main Street</p>
          <p>City, State ZIP</p>
          <p>Country</p>
        </div>
      </div>

      <div className="max-w-2xl">
        <h3 className="text-2xl font-serif font-semibold mb-6">
          Send Us a Message
        </h3>
        <form action="" method="get" className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47312] focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47312] focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D47312] focus:border-transparent resize-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#D47312] hover:bg-[#B65A0D] text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;
