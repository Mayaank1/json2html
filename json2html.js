// json2html.js

export default function json2html(data) {
    // Start the HTML table with the required attributes
    let html = `<table data-user="mayaankaekka115@gmail.com">
        <thead>
            <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
        </thead>
        <tbody>`;

    // Loop over the array of objects to add table rows
    data.forEach(person => {
        html += `<tr>
            <td>${person.Name || ''}</td>
            <td>${person.Age || ''}</td>
            <td>${person.Gender || ''}</td>
        </tr>`;
    });

    // Close the table tag
    html += `</tbody></table>`;

    return html; // Return the generated HTML as a string
}

