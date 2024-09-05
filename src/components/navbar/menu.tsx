import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useAuthStore } from "@/lib/store";

// Interface For Login Model Close Props
type ModalProps = {
  openModal: () => void;
};

export const Menu = ({ openModal }: ModalProps) => {
  // Get Authenticated User's Session
  const { data: session, status } = useSession();

  // Check if User is Logged In
  const isLogin = status === "authenticated";

  const { user } = useAuthStore();

  return (
    <>
      <ul
        tabIndex={0}
        className="menu-sm dropdown-content mt-3 md:mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <div className="flex h-10 align-middle mb-2">
            <div className="flex justify-between w-full items-center">
              <div className="hover:bg-gray-600 rounded-lg hover:text-white cursor-pointer">
                <Link
                  href={"/settings"}
                  className="font-bold p-2 block md:hidden"
                >
                  {isLogin
                    ? session.user.first_name
                    : user
                    ? user.first_name
                    : "Guest"}
                </Link>
                <Link
                  href={"/settings"}
                  className="font-bold p-2 hidden md:block"
                >
                  {isLogin
                    ? session.user.first_name
                    : user
                    ? user.first_name
                    : "Guest"}
                </Link>
              </div>
              <span className="block md:hidden">|</span>
              <div className="dropdown dropdown-end block md:hidden">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <Image
                      src={`/assets/images/shopping-bag.png`}
                      width={22}
                      height={22}
                      alt={""}
                    />
                    <span className="badge badge-xs indicator-item indicator-bottom bg-articlickOceanGreen"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full" />
        </li>
        <li className="xl:hidden block hover:bg-gray-600 rounded-lg hover:text-white">
          <Link href={""} className="flex h-10 items-center">
            Home
          </Link>
        </li>
        <li className="xl:hidden block hover:bg-gray-600 rounded-lg hover:text-white">
          <Link href={""} className="justify-between flex h-10 items-center">
            Categories
            <span className="badge">New</span>
          </Link>
        </li>
        <li className="xl:hidden block hover:bg-gray-600 rounded-lg hover:text-white">
          <Link href={""} className="flex h-10 items-center">
            Products
          </Link>
        </li>
        <li className="hover:bg-gray-600 rounded-lg hover:text-white">
          <Link href={"/settings"} className="flex h-10 items-center">
            Settings
          </Link>
        </li>
        <li className="hover:bg-gray-600 rounded-lg hover:text-white">
          {user || isLogin ? (
            <Link
              href={""}
              className="flex h-10 items-center"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Logout
            </Link>
          ) : (
            <Link
              href={""}
              onClick={openModal}
              className="flex h-10 items-center"
            >Login</Link>
          )}
        </li>
      </ul>
    </>
  );
};
