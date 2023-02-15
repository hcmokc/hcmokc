import React from 'react';
import './index.css';

const ScoreBoard = (props) => {
    return (
        <div className='score-board'>
            <div className='table-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Point 1</th>
                            <th scope="col">Point 2</th>
                            <th scope="col">Point 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Red</th> 
                            <td>Bao</td> 
                            <td>M</td> 
                            <td>X</td>
                            <td>M</td>
                        </tr>             
                        <tr>
                            <th scope="row">White</th>
                            <td>So</td>
                            <td>X</td>
                            <td>M</td>
                            <td>X</td>
                        </tr>
                        <tr className="bg-danger">
                            <th scope="row">Result</th>
                            <td colSpan={4} className="text-center">Red Win</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ScoreBoard;
