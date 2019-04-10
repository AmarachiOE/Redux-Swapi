import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      <div className="fetching-state-container">
        <h1 className="fetching-animation">|</h1>
        <h2>One moment please...</h2>
      </div>;
    }
    return (
      <div className="CharactersList-wrapper">
        <h1> Star Wars Characters:</h1>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching
});

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
