"use client"
import styled from "styled-components"

import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./primary-input"
import { CartControl } from "./cart-control"

const sairaStencilOne = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400']
})

interface HeaderProps { }

const TagHaeder = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 160px;

>div {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
`
const Logo = styled.a`
color: var(--logo-color);
font-size: 40px;
font-weight: 400;
line-height: 60px;
`
export function Header(props: HeaderProps) {
  return (
    <TagHaeder>
      <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon placeholder="Procurando por algo específico?" />
        <CartControl />
      </div>
    </TagHaeder>
  )
}