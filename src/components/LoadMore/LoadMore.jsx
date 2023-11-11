import { LoadMoreBtn } from "./LoadMore.styled"

export const LoadMore = ({onClick}) =>{
    return(
        <LoadMoreBtn onClick={onClick}>
            Load more
        </LoadMoreBtn>
    )
}