import { SearchBarHeader } from "./Searchbar.styled"
import { SearchForm } from "components/SearchForm/SearchForm"


export const Searchbar = ({onSubmit,onChange}) =>{


    return (
    <SearchBarHeader className="searchbar">
<SearchForm onSubmit={onSubmit} onChange={onChange}/>
</SearchBarHeader>
    )
  }

