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

  render() {
    const { search } = this.state;
    const { handleSubmit } = this.props;

    return (
      <Header>
        <Form
          onSubmit={e => {
            handleSubmit(e);
            this.setState({ search: '' });
          }}
        >
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
  handleSubmit: PropTypes.func.isRequired,
};
