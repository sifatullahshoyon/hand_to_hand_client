import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/authService";

// declare a type for roleBasePrivateRoute
type Role = keyof typeof roleBasedPrivateRoutes;

//auth route
const authRoute = ["/login", "/register"];

// role base route
const roleBasedPrivateRoutes = {
  user: [/^\/user/, /^\/cart/, "/checkout"],
  admin: [/^\/admin/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  //get user info
  const userInfo = await getCurrentUser();

  // check if user is not available
  if (!userInfo) {
    // jei route a jete cacchi oita jodi authRoute a thake tahole thamanor dorkar nei

    if (authRoute.includes(pathname)) {
      return NextResponse.next();
    } else {
      // authRoute chara onno kono route a jete caile redirect kore hocche login a
      return NextResponse.redirect(
        // new URL(
        //   `http://localhost:3000/login?redirectPath=${pathname}`,
        //   request.url
        // )
        new URL(
          `https://hand-to-hand-client.vercel.app/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }

  // check if user is available
  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as Role]) {
    //
    const routes = roleBasedPrivateRoutes[userInfo?.role as Role];
    // user jei route a jete cacche oi ta joid routes ar sathe mile tahole jete dao
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
};

// private route
export const config = {
  matcher: [
    "/login",
    "/cart",
    "/checkout",
    "/user",
    "/user/:page",
    "/admin",
    "/admin/:page",
  ],
};
