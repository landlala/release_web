import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const PageUl = styled.ul`
  text-align: center;
  color: white;
  padding: 1px;
  font-family: Rockwell;
`;

const PageLi = styled.li<{focus?:number}>`
  display: inline-block;
  font-size: 50px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #F6C117;
  }
  &:nth-child(${(props) => props.focus}) {
    padding: 5px;
    border-radius: 5px;
    color: white;
    background-color: #F6C117;
  }
`;

const PageSpan = styled.span`

`;

const Pagination = ({postsPerPage, currentPage, totalPosts, paginate}: any) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <Wrapper>
            <PageUl>
                {pageNumbers.map((number) => (
                    <PageLi focus={currentPage} key={number}>
                        <PageSpan onClick={() => paginate(number)}>
                            {number}
                        </PageSpan>
                    </PageLi>
                ))}
            </PageUl>
        </Wrapper>
    );
};

export default Pagination;