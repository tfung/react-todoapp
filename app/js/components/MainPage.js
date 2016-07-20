import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Todo from './Todo';

import { Link } from "react-router";

export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Todo />
                <Footer />
            </div>
        );
    }
}
