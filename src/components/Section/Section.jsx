import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}
