// frontend/src/components/Table/SubmissionTable.tsx

import React, { useState } from 'react';

interface Submission {
  id: string;
  name: string;
  email: string;
  // Add more fields as needed
}

interface SubmissionTableProps {
  submissions: Submission[];
}

const SubmissionTable: React.FC<SubmissionTableProps> = ({ submissions }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Implement search logic
  const filteredSubmissions = submissions.filter((submission) =>
    submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    submission.email.toLowerCase().includes(searchTerm.toLowerCase())
    // Add more fields to search as needed
  );

  return (
    <div>
      {/* Add search input */}
      <label>Search:</label>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

      {/* Display submissions table */}
      <table>
        <thead>
          <tr>
            <th>Submission ID</th>
            <th>Name</th>
            <th>Email</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {/* Map through submissions and display each row */}
          {filteredSubmissions.map((submission) => (
            <tr key={submission.id}>
              <td>{submission.id}</td>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubmissionTable;
