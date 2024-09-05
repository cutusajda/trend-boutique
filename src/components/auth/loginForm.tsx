"use client";
import { FormSuccess } from "@/components/handlers/form-success";
import { FormError } from "@/components/handlers/form-error";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAuthStore } from "@/lib/store";
import { getUserDetails } from "@/actions/user";

// Interface For Login Model Close Props
type ModalProps = {
  closeModal: () => void;
  openRegModal: () => void;
};

export const LoginForm = ({ openRegModal, closeModal }: ModalProps) => {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const { setUser } = useAuthStore();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    // Everytime We Hit New Submit Clear All Errors And Success States
    setError("");
    setSuccess("");

    startTransition(async () => {
      try {
        // Calling Login Server Action
        const data = await login(values);

        // Check If Any Error Occurs
        if (data?.error) {
          setError(data.error);
        }

        // Check If Server Returns Success
        else if (data?.success) {
          // Set Success Message
          setSuccess(data.success);

          // Method To Get Authenticated User's Data
          const userData = await getUserDetails();

          // Make Login State True
          if (userData && userData?.message) {
            setUser(userData?.data);
          }

          closeModal();
        }
      } catch (error) {
        setError("An unexpected error occurred.");
      }
    });
  };

  return (
    <>
      <dialog id="" className="modal" open>
        <div className="modal-box w-11/12 max-w-lg transition-all duration-300 ease-in-out">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-5">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="email@example.com"
                          type="email"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="******"
                          type="password"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <p className="text-sm font-medium text-sky-700 cursor-pointer">Forgot password?</p>
              </div>
              <div className="flex gap-2 h-12 items-end">
                <Button type="submit" className="w-full" disabled={isPending}>
                  Login
                </Button>
                <Button type="submit" className="w-full" onClick={closeModal}>
                  Close
                </Button>
              </div>
            </form>
          </Form>
          <p className="mt-1 text-sm font-medium text-center">
            Don't have an account? <span className="font-semibold text-sky-700 cursor-pointer" onClick={()=>{
              closeModal();
              openRegModal();
            }}>Register Now</span>
          </p>
        </div>
      </dialog>
    </>
  );
};
