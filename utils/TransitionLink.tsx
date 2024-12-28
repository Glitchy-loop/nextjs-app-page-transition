"use client"

import Link, { LinkProps } from "next/link"
import React, { ReactNode } from "react"
import { useRouter } from "next/navigation"

interface TransitionLinkProps extends LinkProps {
  children: ReactNode
  href: string
}

const waitTime = 1000

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const router = useRouter()

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const body = document.querySelector("body")
    body?.classList.add("page-transition")
    await sleep(waitTime)

    router.push(href)

    await sleep(waitTime)

    body?.classList.remove("page-transition")
  }

  return (
    <Link href={href} {...props} onClick={handleTransition}>
      {children}
    </Link>
  )
}

export default TransitionLink
