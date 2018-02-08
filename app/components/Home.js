// @flow
import path from 'path';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import fs from 'fs';

const privateKey = fs.readFileSync(path.join(__dirname, 'foo.pem'));

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          {privateKey}
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
