"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@heroui/react";

import { useState } from "react";
import { useCreateFeedback } from "@/store/hooks/feedback.hook";

export default function CreateFeedbackModal({ isOpen, onOpenChange }: any) {
  const { create, isLoading } = useCreateFeedback();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    rating: "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (onClose: any) => {
    if (!form.name || !form.message) return;

    await create({
      name: form.name,
      email: form.email,
      message: form.message,
      rating: Number(form.rating) || undefined,
    });

    setForm({
      name: "",
      email: "",
      message: "",
      rating: "",
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="text-lg font-semibold">
              Create Feedback
            </ModalHeader>

            <ModalBody className="flex flex-col gap-4">

              <Input
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                variant="bordered"
                isRequired
              />

              <Input
                label="Email (optional)"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                variant="bordered"
              />

              <Textarea
                label="Feedback Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your feedback..."
                variant="bordered"
                minRows={4}
                isRequired
              />

              <Input
                label="Rating (1-5)"
                name="rating"
                type="number"
                value={form.rating}
                onChange={handleChange}
                min={1}
                max={5}
                placeholder="Optional"
                variant="bordered"
              />

            </ModalBody>

            <ModalFooter>

              <Button color="danger" variant="flat" onPress={onClose}>
                Cancel
              </Button>

              <Button
                color="primary"
                isLoading={isLoading}
                onPress={() => handleSubmit(onClose)}
              >
                Submit Feedback
              </Button>

            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}