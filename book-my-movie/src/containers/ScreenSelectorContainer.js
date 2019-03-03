import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDays, getTiming } from '../stores/settings/settingsService';
import ScreenSelector from '../components/ScreenSelector/ScreenSelector';

const mapStateToProps = (state)=> ({
	days: state.settings.days,
	timings: state.settings.timings,
});

const mapDispatchToProps = (dispatch) => ({
	getDays: bindActionCreators(getDays, dispatch),
	getTiming: bindActionCreators(getTiming, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenSelector);
