import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  Form,
  Header,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onhandleSubmit } = this.props;

    const querry = e.target.search.value.trim();

    onhandleSubmit(querry);
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
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
            onChange={this.handleInputChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onhandleSubmit: PropTypes.func.isRequired,
};
