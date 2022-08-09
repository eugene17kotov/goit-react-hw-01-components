import PropTypes from 'prop-types';
import { Box } from 'utils/Box';
import {
  StatisticsItem,
  StatisticsTitle,
  ItemLabel,
  ItemPercentage,
} from 'components/Statistics/Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
      pb={3}
      width="223px"
    >
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <Box
        display="inline-flex"
        borderBottomRightRadius={'sm'}
        borderBottomLeftRadius={'sm'}
        boxShadow={'normal'}
        overflow="hidden"
        as="ul"
      >
        {stats.map(({ label, percentage, id }) => (
          <StatisticsItem key={id}>
            <ItemLabel>{label}</ItemLabel>
            <ItemPercentage>{`${percentage}%`}</ItemPercentage>
          </StatisticsItem>
        ))}
      </Box>
    </Box>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
