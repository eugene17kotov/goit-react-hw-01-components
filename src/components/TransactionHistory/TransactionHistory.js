import PropTypes from 'prop-types';
import { Box } from 'utils/Box';
import {
  TableHead,
  TableHeadItem,
  TableRow,
  TableItem,
} from 'components/TransactionHistory/TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Box
      display="inline-flex"
      flexDirection="column"
      borderRadius={'sm'}
      overflow="hidden"
      boxShadow={'normal'}
      mb={3}
      as="table"
    >
      <TableHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          const typeFirstLetterUp =
            type.slice(0, 1).toUpperCase() + type.slice(1);

          return (
            <TableRow key={id}>
              <TableItem>{typeFirstLetterUp}</TableItem>
              <TableItem>{amount}</TableItem>
              <TableItem>{currency}</TableItem>
            </TableRow>
          );
        })}
      </tbody>
    </Box>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
