import React from 'react'
import './style.css';
import { Autocomplete, Button, Checkbox, DialogActions, FormControl, FormLabel, TextField } from '@mui/material';
function index() {
    return (
        <div className='containers-login'>
            <div className='form-login'>
                <div className='frame-form'>
                    <div className='form'>
                        <h1>Wellcome!</h1>
                        <h3>True love is hard to find when you found it , take a good care of it while you still have time!</h3>
                        <div>
                            <FormControl className='form-submit'>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <TextField
                                    placeholder="Enter your email"
                                />
                                <FormLabel>
                                    Password
                                </FormLabel>
                                <TextField
                                    placeholder="Enter your password"
                                />

                            </FormControl>
                            <div className="remember-checkbox">
                                <Checkbox />
                                <p>Remember for 30 days</p>

                            </div>
                            <DialogActions className='form-submit'>
                                <Button style={{ width: '100%', background: '#212222', color: 'white' }}>
                                    Login
                                </Button>
                            </DialogActions>
                            <DialogActions className='form-submit'>
                                <Button style={{ width: '100%', background: 'white', color: '#212222' }}>
                                    Sign in with Google!
                                </Button>
                            </DialogActions >
                            <div className='form-submit'>
                                <div className='remember-checkbox'>
                                    <p>Don't have an account?</p><p >Sign up for free</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='layout-pic'>
                <div></div>
            </div>
        </div>
    )
}

export default index