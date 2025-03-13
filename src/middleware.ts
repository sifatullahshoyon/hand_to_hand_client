import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/authService";

//auth route
const authRoute = ["/login", "/register"];

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  //get user info
  const userInfo = await getCurrentUser();

  // check if user is available
  if (!userInfo) {
    // jei route a jete cacchi oita jodi authRoute a thake tahole thamanor dorkar nei

    if (authRoute.includes(pathname)) {
      return NextResponse.next();
    } else {
      // authRoute chara onno kono route a jete caile redirect kore hocche login a
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
};

// private route
export const config = {
  matcher: ["/login"],
};
