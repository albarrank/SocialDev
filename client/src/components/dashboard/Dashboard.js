import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experiences from './Experience';
import Education from './Education';

import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile';
import {  deleteAccountAndProfile } from '../../actions/profile';


const Dashboard = ({deleteAccountAndProfile, getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        loading && profile === null 
        ? <Spinner /> 
        : <Fragment> 
            <h1 className='large text-primary'>Dashboard</h1>
                <p className='lead'>
                    {/* line below checks if the 'user' exists then display 'user.name' all from 'auth' */}
                    <i className='fas fa-user'></i> Welcome { user && user.name }
                </p>
                { 
                    !profile  
                        ? 
                        <Fragment>
                            <p>You have not setup a profile, please add some info</p>
                            <Link to='/create-profile' className='btn btn-primary my-1'>
                                Create Profile
                            </Link>
                        </Fragment> 
                        : 
                        <Fragment>
                            <DashboardActions />
                            <Experiences experience={profile.experience}/>
                            <Education education={profile.education} />

                            <div className='my-2'>
                                <button className='btn btn-danger' onClick={() => deleteAccountAndProfile()}>
                                    <i className='fas fa-user-minus'></i> Delete Account
                                </button>
                            </div>
                        </Fragment>
                }
          </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccountAndProfile: PropTypes.func.isRequired,

    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccountAndProfile })(Dashboard);