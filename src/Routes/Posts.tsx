import styled from "styled-components";

const Books = styled.div`
    background-color: #3D3D3D;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 25px;
    overflow: hidden;
    min-height: 250px;
`;

const Book = styled.div`
    background-color: #767676;
    width: 20%;
    min-width: 150px;
    height: 90%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 15px;
    gap: 16px;
    position: relative;
    box-shadow: 3px 3px 5px #2B2A2A;
`;

const Img = styled.div`
    width: 88%;
    height: 60%;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    img {
        width: 100%;
    }
`;

const Description = styled.div`
    width: 88%;
    display: flex;
    padding-left: 5px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-family: Rockwell;
    color: white;
    font-weight: 600;
    h1 {
        font-size: calc(10px + 1.5vh);
    }
    h2 {
        font-size: 15px;
        opacity: 0.4;
    }
    h3 {
        position: absolute;
        bottom: 20px;
        right: 20px;
        color: #F6C117;
    }
`;

interface IPost {
    userId: number;
    id: number;
    title: string;
}

export interface IPosts {
    posts: IPost[];
}

const Posts = ({ posts, loading }: IPosts & { loading: boolean }) => {
    return (
        <>
            {loading && <div>loading</div>}
            <Books>
                {posts.map((post) => (
                    <Book key = {post.id}>
                        <Img>
                            <img src = "/release_web/img/books/harry.jpg" />
                        </Img>
                        <Description>
                            <h1>
                                {post.title.slice(0, 15)}
                            </h1>
                            <h2>
                                {post.id}
                            </h2>
                            <h3>
                                Borrow
                            </h3>
                        </Description>
                    </Book>
                ))}
            </Books>
        </>
    );
}

export default Posts;