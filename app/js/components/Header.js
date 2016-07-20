import React from "react";

export default class Header extends React.Component {
    componentWillMount() {

    }

    render() {
        return (
            <section class="header-section">
                <h1 class="text-middle">Todo App</h1>

                <div class="search-section-outer">
                    <div class="search-section-inner">
                        <label>Search By:</label>
                        <select>
                            <option value="name">Name</option>
                            <option value="name">Due Date</option>
                            <option value="name">Assignee</option>
                            <option value="name">Priority</option>
                        </select>
                    </div>
                </div>
            </section>
        );
    }
}
