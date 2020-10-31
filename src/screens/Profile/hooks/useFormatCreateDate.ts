import moment from 'moment';

const useFormatCreateDate = () => (value : string) => moment(value).format('YYYY/MM/DD');

export default useFormatCreateDate;