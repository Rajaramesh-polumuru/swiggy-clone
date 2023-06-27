"use client";
import Header from "@/components/header";
import {
  BodyWrapper,
  LayoutWrapper,
  MainContentWrapper,
} from "@/components/layout/styled-components";
import LeftNavigation from "@/components/left-nav";
import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import TopMenu from "@/components/top-menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <LayoutWrapper>
            <Header />
            <TopMenu />
            <BodyWrapper>
              <LeftNavigation />
              <MainContentWrapper>{children}</MainContentWrapper>
            </BodyWrapper>
          </LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
