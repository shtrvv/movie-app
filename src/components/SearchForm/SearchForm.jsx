import { Form, Input, Btn } from "./SearchForm.styled"

const SearchForm = ({ handleSubmit, handleChange }) => {
  return (
      <Form onSubmit={handleSubmit}>
          <Input type="text" onChange={handleChange} />
          <Btn type='submit'>Search</Btn>
    </Form>
  )
}

export default SearchForm