import styled from 'styled-components';

export const Table = styled.table`
  position: relative;
  border-collapse: separate;
  border-spacing: 0 15px;
  padding: 10px;

  & th {
    padding: 10px;
    background-color: var(--lime);
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const TableBody = styled.tbody`
  font-size: 1.2rem;

  & > tr:nth-child(odd) {
    background-color: rgba(155, 215, 255, 0.267);
  }
  & > tr:nth-child(even) {
    background-color: var(--card-bg-dark);
  }
  & td:first-of-type {
    font-weight: bold;
  }
  & td {
    padding: 10px;
  }
`;
