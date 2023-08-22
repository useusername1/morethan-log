import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React from "react"

type Props = {
  children: string
}

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`)
  }
  return (
    <StyledWrapper onClick={() => handleClick(children)}>
      {children}
    </StyledWrapper>
  )
}

export default Tag

const StyledWrapper = styled.div`
  padding: 0.3rem;
  padding-right: 0.48rem;
  padding-left: 0.48rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray11};
  background-color: ${({ theme }) => theme.colors.gray4};
  cursor: pointer;
`
