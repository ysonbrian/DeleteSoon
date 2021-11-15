import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { FaBeer } from '@react-icons/all-files/fa/FaBeer'
export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
    [key: string]: number
  }
}

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`

// const CategoryItem = styled(Link)`
//   margin-right: 20px;
//   padding: 5px 0;
//   font-size: 18px;
//   cursor: pointer;

//   &:last-of-type {
//     margin-right: 0;
//   }
// `

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, to, ...props }: GatsbyLinkProps) => (
  <Link to={to} {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          {name === 'Web'
            ? '💻'
            : name === 'BlockChain'
            ? '🔐'
            : name === 'Etc'
            ? '📚'
            : '😎'}
          {` ${name}`}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
