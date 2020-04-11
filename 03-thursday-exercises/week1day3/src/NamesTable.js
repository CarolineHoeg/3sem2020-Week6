import React from "react";
import PropTypes from "prop-types";

const NamesTable = ({ names, deleteName, editName }) => {
    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {names.map(name => (
                        <tr>
                            <td>{name.id}</td>
                            <td>{name.name}
                                <a href="/#" onClick={e => {
                                    e.preventDefault();
                                    deleteName(name.id);
                                }}>
                                    {" "}
                                    (delete,{" "} </a>
                                <a href="/#" onClick={e => {
                                    e.preventDefault();
                                    editName(name.id);
                                }}>
                                    {" "}
                                    edit){" "}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    );
};
export default NamesTable;
NamesTable.propTypes = {
    names: PropTypes.array
};