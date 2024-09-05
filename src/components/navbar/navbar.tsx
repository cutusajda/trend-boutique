"use client";
import { useAuthStore, useModel, useRegModel } from "@/lib/store";
import { RegisterForm } from "@/components/auth/registerForm";
import { Menu } from "@/components/navbar/menu";
import { LoginForm } from "../auth/loginForm";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // Get Authenticated User's Session
  const { status } = useSession();

  // Get Current Route
  const pathname = usePathname();

  // Check if User is Logged In
  const { user } = useAuthStore();

  // Show Login Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Method To Open Login Modal
  const openModal = () => {
    setIsModalOpen(true);
    useModel.getState().open();
  };

  // Method To Close Login Modal
  const closeModal = () => {
    setIsModalOpen(false);
    useModel.getState().close();
  };

  // Show Register Modal
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

  // Method To Open Register Modal
  const openRegModal = () => {
    setIsRegModalOpen(true);
    useRegModel.getState().open();
  };

  // Method To Close Register Modal
  const closeRegModal = () => {
    setIsRegModalOpen(false);
    useRegModel.getState().close();
  };

  return (
    <>
      <div
        className={`navbar px-4 md:px-20 pt-4 flex justify-between ${
          pathname === "/" ? "absolute top-0 " : "relative"
        }`}
      >
        <div className="">
          <Link
            href={"/"}
            className="font-bold md:font-semibold text-xl md:text-2xl text-everglade"
          >
            Trend Boutique
          </Link>
        </div>
        <div className="hidden xl:block">
          <Link href={"/"} className="btn btn-ghost text-lg">
            Home
          </Link>
          <Link href={"/categories"} className="btn btn-ghost text-lg">
            Categories
          </Link>
          <Link href={""} className="btn btn-ghost text-lg">
            Products
          </Link>
        </div>
        <div className="flex-none gap-0 sm:gap-4">
          <div className="md:flex gap-2 text-everglade">
            <div className="flex justify-center items-center relative">
              <input
                type="text"
                placeholder="search"
                className="rounded-full h-8 p-4 pr-8 outline-everglade hidden sm:block md:max-w-44 xl:max-w-full"
              />
              <button className="btn btn-sm sm:btn-ghost btn-circle bg-green-100 sm:bg-none border-none sm:border relative sm:absolute right-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 stroke-everglade"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs bg-articlickOceanGreen border-articlickOceanGreen indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end hidden md:block">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <Image
                  src={"/assets/images/shopping-bag.png"}
                  width={22}
                  height={22}
                  alt={""}
                />
                <span className="badge badge-xs indicator-item indicator-bottom bg-articlickOceanGreen"></span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 md:mt-4 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-darkSpringGreen">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn bg-everglade btn-block text-white">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {user || status === "authenticated" ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <Image
                    width={100}
                    height={100}
                    alt="Tailwind CSS Navbar component"
                    src={`https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp`}
                  />
                </div>
              </div>

              <Menu openModal={openModal} />
            </div>
          ) : (
            <div>
              <button
                className="py-1 px-4 border border-everglade hover:bg-everglade hover:text-white hidden md:block"
                onClick={openModal}
              >
                Login
              </button>
              {isModalOpen && (
                <LoginForm
                  openRegModal={openRegModal}
                  closeModal={closeModal}
                />
              )}
              {isRegModalOpen && <RegisterForm closeModal={closeRegModal} openModal={openModal} />}
              <div className="dropdown dropdown-end block md:hidden">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full place-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-7 w-7 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </div>
                </div>

                <Menu openModal={openModal} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
