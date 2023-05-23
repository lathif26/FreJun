const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample data stored in-memory
let tables = [
  {
    id: '1',
    name: 'Table 1',
    columns: ['Column 1', 'Column 2'],
    rows: [
      ['Row 1, Column 1', 'Row 1, Column 2'],
      ['Row 2, Column 1', 'Row 2, Column 2'],
    ],
  },
  {
    id: '2',
    name: 'Table 2',
    columns: ['Column 1', 'Column 2', 'Column 3'],
    rows: [['Row 1, Column 1', 'Row 1, Column 2', 'Row 1, Column 3']],
  },
];

app.get('/api/tables', (req, res) => {
  res.json(tables);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
