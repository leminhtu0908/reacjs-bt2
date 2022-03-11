import React from 'react'
import { data } from './data'

export default function Bai2() {

    const stuData = data.studentDta;
    console.log(stuData)

    return (
        <div>
            <table id="table_student" className="display">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stuData.lenght > 0 && stuData.map((ele, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ele.name}</td>
                                    <td>{ele.class}</td>
                                    <td>{ele.code}</td>
                                </tr>
                                )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
