import Loading from '../components/loading';
import { connect } from 'react-redux';


const mapState = (state) => ({
  loading: state.loading.global
})

export default connect(mapState, null)(Loading);
