import { FormSuccess } from "@/components/handlers/form-success";
import { FormError } from "@/components/handlers/form-error";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { register } from "@/actions/register";

// Interface For Login Model Close Props
type ModalProps = {
  openModal: () => void;
  closeModal: () => void;
};

export const RegisterForm = ({ closeModal, openModal }: ModalProps) => {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    // Everytime We Hit New Submit Clear All Errors And Success States
    setError("");
    setSuccess("");

    startTransition(async () => {
      try {
        console.log(values);
        // Calling Login Server Action
        const data = await register(values);

        // Check If Any Error Occurs
        if (data?.error) {
          setError(data.error);
        }

        // Check If Server Returns Success
        else if (data?.success) {
          // Set Success Message
          setSuccess(data.success);

          closeModal();
          openModal();
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Alex"
                          type="text"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Cupid"
                          type="text"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
              <div className="flex gap-2 h-12 items-end">
                <Button type="submit" className="w-full" disabled={isPending}>
                  Register
                </Button>
                <Button type="submit" className="w-full" onClick={closeModal}>
                  Close
                </Button>
              </div>
            </form>
          </Form>
          <p className="mt-5 text-sm font-medium text-center">
            Already have an account?{" "}
            <span
              className="font-semibold text-sky-700 cursor-pointer"
              onClick={() => {
                closeModal();
                openModal();
              }}
            >
              Login Now
            </span>
          </p>
        </div>
      </dialog>
    </>
  );
};
