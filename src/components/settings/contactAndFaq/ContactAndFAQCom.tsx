"use client";

import {
  ClockCircleOutlined,
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import React from "react";

const ContactAndFAQCom: React.FC = () => {
  return (
    <>
      <div className="bg-black min-h-screen text-white p-6">
        <div className="space-y-8">
          {/* Contact Us Section */}
          <div>
            <h2 className="text-xl font-medium mb-4">Contact Us</h2>
            <p className="mb-6">
              We're here to help! Whether you have a question about your order,
              need styling advice, or have a general inquiry, feel free to reach
              out.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <MailOutlined className="text-lg mr-3 mt-1 text-gray-400" />
                <div>
                  <p>Email: support@yourwebsite.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <PhoneOutlined className="text-lg mr-3 mt-1 text-gray-400" />
                <div>
                  <p>Phone: +1 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <EnvironmentOutlined className="text-lg mr-3 mt-1 text-gray-400" />
                <div>
                  <p>Address: 123 Fashion Street, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start">
                <ClockCircleOutlined className="text-lg mr-3 mt-1 text-gray-400" />
                <div>
                  <p className="font-medium mb-1">Customer Support Hours:</p>
                  <p className="mb-1">Monday – Friday: 9 AM – 6 PM (EST)</p>
                  <p className="mb-1">Saturday – Sunday: 10 AM – 4 PM (EST)</p>
                  <p className="mt-4">
                    Or use our Live Chat for instant support during business
                    hours!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-xl font-medium mb-4">
              Frequently Asked Questions (FAQ)
            </h2>

            <p className="font-medium text-gray-400 mb-2">Example</p>

            <div className="space-y-6">
              <div>
                <p className="font-medium mb-2">
                  Q: How long does shipping take?
                </p>
                <p>
                  A: Standard shipping takes 5-7 business days, while express
                  shipping takes 2-3 business days. International shipping
                  varies by location.
                </p>
              </div>

              <div>
                <p className="font-medium mb-2">Q: Can I track my order?</p>
                <p>
                  A: Yes! Once your order ships, you'll receive a tracking link
                  via email.
                </p>
              </div>

              <div>
                <p className="font-medium mb-2">
                  Q: How do I initiate a return?
                </p>
                <p>
                  A: Visit our Returns Portal to start a return. You'll need
                  your order number and email address.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAndFAQCom;
