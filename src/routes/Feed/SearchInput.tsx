import styled from "@emotion/styled"
import React, { InputHTMLAttributes, ReactNode } from "react"
import { FiSearch as SearchIcon } from "react-icons/fi"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <StyledWrapper>
      <SearchIcon className="icon" />
      <input
        className="mid"
        type="text"
        placeholder="Search Keyword..."
        {...props}
      />
    </StyledWrapper>
  )
}

export default SearchInput

const StyledWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }
  > .icon {
    position: absolute;
    left: 10px;
    top: 25%;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.gray10};
  }
  > .top {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .mid {
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    padding-left: 2.3rem;
    padding-right: 1.25rem;
    border-radius: 0.3rem;
    outline-style: none;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray4};
  }
`
