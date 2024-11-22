"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Textarea, TextInput } from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";

import ButtonComponent from "@/components/ButtonComponent";

import Email from "@/images/other/Mail.svg";
import IPhone from "@/images/other/iPhone.svg";
import Messenger from "@/images/other/Messenger.svg";


const ContactUsSection = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const form = useForm({
      initialValues: {
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
      validate: {
        fullName: hasLength(
          { min: 3 },
          "Full Name must be at least 3 characters"
        ),
        email: isEmail("Invalid email"),
        phone: (value) =>
          value && /^\d{10}$/.test(phone) ? "Invalid phone number" : null,
        subject: hasLength({ min: 3 }, "Subject must be at least 3 characters"),
        message: hasLength({ min: 6 }, "Message must have at least 6 characters"),
      },
    });
  
    const handleSubmit = async (event: any) => {
      event.preventDefault();
      const errors = form.validate();
      console.log(5, { ...form.values });
  
      if (Object.keys(errors.errors).length > 0) {
        console.log("Form has errors:", errors);
        return;
      }
  
      form.reset();
      setFullName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    };
  
    return (
      <section className="container flex flex-col lg:flex-row gap-[60px] pt-[40px] xl:pt-[60px] pb-[60px] xl:pb-[150px]  ">
        <div className="flex flex-col gap-[32px]">
          <p className="font-bold text-[20px] text-[#1E212C]">
            If you have any questions or comments, we would love to hear
            from you!
          </p>
          <ul className="text-[16px] text-[#424551] space-y-[12px]">
            <li className="flex">
              <Image
                src={IPhone}
                alt="IPhone Icon"
                width={20}
                height={20}
                className="mr-4"
              />
              <Link href="tel:4055550128" target="_blank">
                (405) 555-0128
              </Link>
            </li>
            <li className="flex">
              <Image
                src={Email}
                alt="Email Icon"
                width={20}
                height={20}
                className="mr-4"
              />
              <Link href="mailto:hello@createx.com" target="_blank">
                Send us an email
              </Link>
            </li>
            <li className="flex">
              <Image
                src={Messenger}
                alt="Messenger Icon"
                width={20}
                height={20}
                className="mr-4"
              />
              <Link href="https://www.messenger.com/" target="_blank">
                Connect on Messenger
              </Link>
            </li>
          </ul>
        </div>
  
        <div className="flex flex-col gap-[32px]">
          <p className="font-bold text-[20px] text-[#1E212C]">
            Or get in touch with us by completing the below form:
          </p>
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-wrap  gap-y-[24px] gap-x-[6%]">
              <TextInput
                className="w-[47%]"
                placeholder="Your Full Name"
                label="Full Name"
                required
                classNames={{
                  input:
                    "h-[36px] rounded-none rounded-l-[4px] focus:border-[#17696A] ",
                  label: "font-normal",
                }}
                {...form.getInputProps("fullName")}
              />
              <TextInput
                className="w-[47%]"
                label="Email"
                required
                placeholder="Your working email"
                type="email"
                classNames={{
                  input:
                    "h-[36px] rounded-none rounded-l-[4px] focus:border-[#17696A]",
                  label: "font-normal",
                }}
                {...form.getInputProps("email")}
              />
              <TextInput
                className="w-[47%]"
                placeholder="Your phone"
                label="Phone"
                required
                classNames={{
                  input:
                    "h-[36px] rounded-none rounded-l-[4px] focus:border-[#17696A] ",
                  label: "font-normal",
                }}
                {...form.getInputProps("phone")}
              />
              <TextInput
                className="w-[47%]"
                label="Subject"
                placeholder="Your subject"
                required
                classNames={{
                  input:
                    "h-[36px] rounded-none rounded-l-[4px] focus:border-[#17696A]",
                  label: "font-normal",
                }}
                {...form.getInputProps("subject")}
              />
              <Textarea
                className="w-full"
                label="Message"
                required
                placeholder="Write your message here"
                classNames={{
                  input:
                    "rounded-none rounded-l-[4px] focus:border-[#17696A] h-[100px]",
                  label: "font-normal",
                }}
                {...form.getInputProps("message")}
              />
            </div>
  
            <ButtonComponent
              text="Send message"
              typeButton="MainButton"
              type="submit"
              className="mt-[20px] disabled:cursor-no-drop"
              tag="button"
            />
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactUsSection;