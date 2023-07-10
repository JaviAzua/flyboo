"use client";

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUserI } from "@/app/types";
import Categories from "./Categories";

type Props = {
  currentUser?: SafeUserI | null;
};

function Navbar({ currentUser }: Props) {
  return (
    <header className="fixed bg-white w-full z-10 shadow-sm select-none">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-evenly md:justify-between  gap-3 md:gap-1">
            <section>
              {/* Logo */}
              <Logo />
            </section>
            <section>
              {/* Navigation */}
              <Search />
            </section>
            <section>
              {/* User Menu */}
              <UserMenu currentUser={currentUser} />
            </section>
          </div>
        </Container>
      </div>
      <Categories />
    </header>
  );
}

export default Navbar;
