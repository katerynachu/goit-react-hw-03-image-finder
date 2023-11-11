import { Form, FormBtn, Label, SearchInput } from "./SearchForm.styled"


export const SearchForm =({onSubmit,onChange})=>{

    return (
        <Form className="form" onSubmit={onSubmit}>
    <FormBtn onChange={onChange} type="submit" className="button">
      <Label className="button-label">Search</Label>
    </FormBtn>

    <SearchInput
    onChange={onChange}
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </Form>
    )
  }

