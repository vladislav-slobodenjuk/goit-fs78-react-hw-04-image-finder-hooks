import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Header,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onhandleSubmit }) => {
  const [search, setSearch] = useState('');
  // state = {
  //   search: '',
  // };

  const handleInputChange = ({ target }) => {
    // this.setState({ [target.name]: target.value });
    setSearch(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const { onhandleSubmit } = this.props;
    const querry = e.target.search.value.trim();

    onhandleSubmit(querry);
    // this.setState({ search: '' });
    setSearch('');
  };

  // const { search } = this.state;

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={search}
          onChange={handleInputChange}
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onhandleSubmit: PropTypes.func.isRequired,
};
