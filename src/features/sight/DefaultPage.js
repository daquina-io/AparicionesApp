import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { reduxForm, Field } from 'redux-form'
import { RadioButton } from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import { AutoComplete as MUIAutoComplete } from 'material-ui';
import {
    AutoComplete,
    Checkbox,
    DatePicker,
    TimePicker,
    RadioButtonGroup,
    SelectField,
    Slider,
    TextField,
    Toggle
} from 'redux-form-material-ui';

import MapInput from './MapInput';

// validation functions
const required = value => value == null ? 'Required' : undefined
const email = value => value &&
                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined
const tooManyPizzas = value => value > 15 ? 'Are you mad?' : undefined

class DefaultPage extends Component {
    static propTypes = {
        sight: PropTypes.object.isRequired,
        actions: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props)
        this.onSlideChange = this.onSlideChange.bind(this)
        this.state = { pizzas: 0 }
    }

    componentDidMount() {
        this.refs.group            // the Field
            .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
            .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
            .focus()                // on TextField
    }

    onSlideChange(value) {
        this.setState({ pizzas: value })
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="sight-default-page">
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="group"
                            component={AutoComplete}
                            floatingLabelText="Grupo"
                            openOnFocus={true}
                            filter={MUIAutoComplete.fuzzyFilter}
                            onNewRequest={value => {
                                    console.log('AutoComplete ', value) // eslint-disable-line no-console
                                }}
                            dataSource={[ 'Kraken', 'Maluma', 'Fonseca', 'De bruces a mi' ]}
                        />
                    </div>
                    <div>
                        <Field
                            name="venue"
                            component={AutoComplete}
                            floatingLabelText="Venue"
                            hintText="¿Lugar donde ocurrió el evento?"
                            openOnFocus={true}
                            filter={MUIAutoComplete.fuzzyFilter}
                            onNewRequest={value => {
                                    console.log('AutoComplete ', value) // eslint-disable-line no-console
                                }}
                            dataSource={[ 'Teatro Pablo Tobón Uribe', 'Casa teatro del poblado', 'Centro Cultural Moravia' ]}
                        />
                    </div>
                    <MapInput position={[6.30005, -75.309]} />
                    <div>
                        <Field name="when"
                               component={DatePicker}
                               format={null}
                               onChange={(value) => {
                                       console.log('date changed ', value) // eslint-disable-line no-console
                                   }}
                               hintText="Día del evento"
                               validate={required}/>
                    </div>
                    <div>
                        <Field name="at"
                               component={TimePicker}
                               format={null}
                               defaultValue={null} // TimePicker requires an object,
                               // and redux-form defaults to ''
                               onChange={(value) => {
                                       console.log('time changed ', value) // eslint-disable-line no-console
                                   }}
                               hintText="¿a qué horas?"
                               validate={required}/>

                    </div>
                    <div>
                        <Field
                            name="recuerdos"
                            component={TextField}
                            hintText="¿Recuerdas algo que sucedió en ese concierto?"
                            floatingLabelText="Anécdotas"
                            multiLine={true}
                            rows={2}/>
                    </div>
                    <div>
                        <Field name="lineup"
                               component={TextField}
                               hintText="¿Qué otros grupos se presentaron"
                               floatingLabelText="Lineup"
                               validate={required}
                               ref="group" withRef/>
                    </div>
                    <div>
                        <p> ¿Qué tan lleno estaba el concierto? </p>
                        <Field name="occupation" component={RadioButtonGroup}>
                            <RadioButton value="lleno" label="Lleno"/>
                            <RadioButton value="amedias" label="A medias"/>
                            <RadioButton value="pocagente" label="Muy poca gente"/>
                        </Field>
                    </div>
                    <div>
                        <p> ¿Tienes alguna imagen o video que quieras compartir del evento? </p>
                        <input type="file" />
                    </div>

                    <div>
                        <button type="submit" disabled={submitting}>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear</button>
                    </div>
                </form>
            </div>
        );
    }
}

// Decorate with redux-form
DefaultPage = reduxForm({
    form: 'example',
    initialValues: {
        delivery: 'delivery',
        name: 'Jane Doe',
        cheese: 'Cheddar'
    }
})(DefaultPage);

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    sight: state.sight,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultPage);
