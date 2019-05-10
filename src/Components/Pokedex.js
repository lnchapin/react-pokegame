import React, { Component } from 'react';
import Styled from "styled-components"

const Dex = Styled.div`
  background: grey;
  text-align: center;
  color: lightgrey;
`
const InnerRow = Styled.div`
  padding: 50px;
`


class Pokedex extends Component {
	render(props) {
		return (
			<Dex className="">
      <h2>Pokedex</h2>
       <InnerRow className="row">{this.props.children}</InnerRow>
			</Dex>
		);
	}
}

export default Pokedex;
